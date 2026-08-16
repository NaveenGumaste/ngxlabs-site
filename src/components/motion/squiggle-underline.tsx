"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const SQUIGGLE_PATH =
  "M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794";

const PATH_LENGTH = 84.20591735839844;

export function SquiggleUnderline({
  children,
  className,
  intensity = "default",
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: "default" | "swash";
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const host =
      wrapRef.current?.closest("a, button, [data-squiggle-host], .group\\/signature") ??
      wrapRef.current;
    if (!host) return;

    const on = () => setActive(true);
    const off = () => setActive(false);

    host.addEventListener("mouseenter", on);
    host.addEventListener("mouseleave", off);
    host.addEventListener("focus", on);
    host.addEventListener("blur", off);

    return () => {
      host.removeEventListener("mouseenter", on);
      host.removeEventListener("mouseleave", off);
      host.removeEventListener("focus", on);
      host.removeEventListener("blur", off);
    };
  }, []);

  return (
    <span ref={wrapRef} className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        className={cn(
          "pointer-events-none absolute inset-x-0 block",
          intensity === "swash"
            ? "-bottom-[0.08em] h-[0.7em]"
            : "-bottom-[1px] h-2",
        )}
      >
        <svg
          viewBox="0 0 37 8"
          fill="none"
          preserveAspectRatio="none"
          className="size-full overflow-visible"
          aria-hidden="true"
        >
          <motion.path
            d={SQUIGGLE_PATH}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: PATH_LENGTH,
              strokeDashoffset: PATH_LENGTH,
            }}
            animate={{
              strokeDashoffset: active ? 0 : PATH_LENGTH,
            }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: active ? 2.4 : 1.2,
                    ease: [0.4, 0, 0.2, 1],
                  }
            }
          />
        </svg>
      </motion.span>
    </span>
  );
}
