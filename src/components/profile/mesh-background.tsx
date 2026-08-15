"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function MeshBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0 bg-[#06080F]"
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Base Canvas */}
      <div className="absolute inset-0 bg-[#06080F]" />

      {/* 2. Official Lovable Pulse Heart SVG Layer with Cinematic Rising & Bloom Entrance */}
      <motion.div
        initial={
          reduce
            ? { opacity: 1, x: "-50%", y: "-38%", scale: 1 }
            : {
                opacity: 0,
                x: "-50%",
                y: "-15%", // Starts deeper below and rises upward
                scale: 0.92,
                filter: "brightness(0.5) blur(10px)",
              }
        }
        animate={{
          opacity: 1,
          x: "-50%",
          y: "-38%", // Glides smoothly up to center resting point
          scale: 1,
          filter: "brightness(1) blur(0px)",
        }}
        transition={{
          duration: 1.9,
          ease: [0.16, 1, 0.3, 1], // Cinematic exponential deceleration curve
        }}
        className="absolute top-1/2 left-1/2 w-[320vw] sm:w-[280vw] md:w-[240vw] lg:w-[210vw] min-w-[2400px] max-w-[4600px] aspect-[1200/1210] pointer-events-none will-change-transform"
      >
        <Image
          src="/Background/lovable-pulse.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-center pointer-events-none select-none"
        />
      </motion.div>

      {/* 3. Top Soft Falloff */}
      <div
        className="absolute top-0 inset-x-0 h-48 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, #06080F 0%, rgba(6,8,15,0.85) 45%, transparent 100%)",
        }}
      />
    </div>
  );
}
