"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface SocialTooltipProps {
  children: React.ReactNode;
  name: string;
  handle: string;
  href: string;
  ariaLabel: string;
}

export function SocialTooltip({
  children,
  name,
  handle,
  href,
  ariaLabel,
}: SocialTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={
              reduce
                ? undefined
                : { opacity: 0, y: 6, scale: 0.85, rotate: -3 }
            }
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={
              reduce
                ? undefined
                : { opacity: 0, y: 4, scale: 0.9, rotate: 2 }
            }
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 24,
              mass: 0.7,
            }}
            className="absolute bottom-[calc(100%+8px)] z-50 flex flex-col items-center pointer-events-none whitespace-nowrap"
          >
            {/* Aceternity-Style Warm Beige Glass Tooltip (+0.5x Scale) */}
            <div className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#F5F1E8] text-neutral-900 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.2)] border border-white/80 ring-1 ring-black/5 leading-none">
              <span className="text-xs sm:text-[13px] font-bold text-neutral-950 tracking-tight">
                {name}
              </span>
              <span className="text-neutral-400 font-mono text-[11px]">·</span>
              <span className="text-xs sm:text-[12.5px] font-medium text-neutral-600">
                {handle}
              </span>

              {/* Seamless Bottom Pointer Arrow */}
              <div
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 size-2.5 rotate-45 bg-[#F5F1E8] border-r border-b border-white/60 shadow-sm"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Target Social Link Icon */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className="grid size-11 place-items-center rounded-full text-white/80 hover:text-white hover:bg-white/[0.1] active:scale-95 transition-all duration-200"
      >
        {children}
      </a>
    </div>
  );
}
