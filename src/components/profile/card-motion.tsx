"use client";

import { motion, useReducedMotion } from "motion/react";

interface CardMotionProps {
  children: React.ReactNode;
}

export function CardMotion({ children }: CardMotionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.main
      initial={
        reduce
          ? { opacity: 1, y: 0, scale: 1 }
          : {
              opacity: 0,
              y: 44, // Starts below and rises up in sync with background
              scale: 0.96,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.8,
        delay: 0.08, // Subtle follow-through offset
        ease: [0.16, 1, 0.3, 1], // Identical Lovable exponential ease curve
      }}
      className="relative z-10 w-[86vw] max-w-[320px] sm:max-w-[370px] md:max-w-[395px] flex flex-col items-center overflow-hidden rounded-[24px] sm:rounded-[30px] bg-black shadow-[0_16px_50px_rgba(0,0,0,0.9)] border border-white/10 will-change-transform"
    >
      {children}
    </motion.main>
  );
}
