"use client";

import Image from "next/image";

export function MeshBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0 bg-[#06080F]"
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Base Canvas */}
      <div className="absolute inset-0 bg-[#06080F]" />

      {/* 2. Official Lovable Pulse SVG Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%] w-[320vw] sm:w-[280vw] md:w-[240vw] lg:w-[210vw] min-w-[2400px] max-w-[4600px] aspect-[1200/1210] pointer-events-none">
        <Image
          src="/Background/lovable-pulse.svg"
          alt=""
          fill
          priority={false}
          loading="lazy"
          className="object-contain object-center pointer-events-none select-none"
        />
      </div>

      {/* 3. Top Soft Falloff */}
      <div
        className="absolute top-0 inset-x-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #06080F 0%, rgba(6,8,15,0.85) 45%, transparent 100%)",
        }}
      />
    </div>
  );
}
