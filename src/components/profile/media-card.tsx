"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

export function MediaCard() {
  return (
    <div className="w-full">
      <a
        href="https://caravan.naveengumaste.me"
        target="_blank"
        rel="noreferrer"
        className="group relative block w-full overflow-hidden rounded-[16px] sm:rounded-[28px] bg-white/[0.07] backdrop-blur-xl border border-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.3)] sm:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.015] hover:border-white/25"
      >
        {/* Full Crystal-Clear Thumbnail Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
          <Image
            src="/images/caravan.webp"
            alt="CARAVAN • Woh din bhi kya din the"
            fill
            priority
            sizes="(max-width: 640px) 320px, 480px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Subtle Bottom Gradient for Text Legibility */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          {/* Top-Right Direct Link Badge */}
          <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 grid size-6.5 sm:size-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md border border-white/15 transition-transform duration-200 group-hover:scale-110 group-hover:bg-white group-hover:text-black shadow-md">
            <ArrowUpRight size={13} weight="bold" className="sm:hidden" />
            <ArrowUpRight size={18} weight="bold" className="hidden sm:block" />
          </div>

          {/* Bottom Title & Description */}
          <div className="absolute bottom-2 left-2.5 right-2.5 sm:bottom-3 sm:left-4 sm:right-4">
            <h3 className="text-[11.5px] sm:text-base font-bold text-white tracking-tight drop-shadow-sm flex items-center gap-1.5 sm:gap-2">
              <span>CARAVAN • Woh din bhi kya din the</span>
            </h3>
            <p className="text-[9.5px] sm:text-xs text-slate-300/90 mt-0.5 drop-shadow-sm line-clamp-1">
              Open-source icon library for designers &amp; developers
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
