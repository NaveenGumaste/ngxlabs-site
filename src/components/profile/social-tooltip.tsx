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
            initial={reduce ? undefined : { opacity: 0, y: 8, scale: 0.88 }}
            animate={{ opacity: 1, y: -4, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 4, scale: 0.92 }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 22,
            }}
            className="absolute -top-12 z-50 flex flex-col items-center pointer-events-none whitespace-nowrap"
          >
            {/* Tooltip Bubble in Warm Beige Glass */}
            <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5F2EB]/95 text-neutral-900 backdrop-blur-xl border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.45)] text-[11px] font-medium leading-none">
              <span className="font-bold text-neutral-950">{name}</span>
              <span className="text-neutral-500 font-mono text-[10px]">·</span>
              <span className="text-neutral-600 text-[10.5px]">{handle}</span>

              {/* Bottom Pointer Arrow */}
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-[#F5F2EB]/95 border-r border-b border-white/30"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Target Social Link */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel}
        className="grid size-10 place-items-center rounded-full text-white/80 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all duration-200"
      >
        {children}
      </a>
    </div>
  );
}
