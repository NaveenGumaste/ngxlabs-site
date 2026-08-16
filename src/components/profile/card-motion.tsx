"use client";

import { motion, useReducedMotion } from "motion/react";

interface CardMotionProps {
  children: React.ReactNode;
}

export function CardMotion({ children }: CardMotionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={
        reduce
          ? { opacity: 1, y: 0, scale: 1 }
          : {
              opacity: 0,
              y: 44,
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
        delay: 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative z-10 flex w-[86vw] max-w-[325px] sm:w-full sm:max-w-[460px] md:max-w-[470px] flex-col items-center overflow-hidden rounded-[24px] sm:rounded-[44px] bg-black shadow-[0_8px_18px_-10px_rgba(0,0,0,0.35)] border border-white/10"
    >
      {children}
    </motion.div>
  );
}
