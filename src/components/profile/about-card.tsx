"use client";

import { useState } from "react";
import { ArrowSquareOut, Check, DotsThreeVertical, ShareNetwork } from "@phosphor-icons/react";
import { site } from "@/lib/site";

export function AboutCard() {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      await navigator.clipboard.writeText("https://naveengumaste.me");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowMenu(false);
      }, 1800);
    }
  };

  return (
    <div className="relative group w-full">
      <div className="relative w-full rounded-[16px] sm:rounded-[28px] bg-white/[0.07] backdrop-blur-xl p-3 sm:p-5 shadow-[0_6px_24px_rgba(0,0,0,0.3)] sm:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 text-white">
        {/* Header & Options */}
        <div className="flex items-center justify-between gap-2 mb-1 sm:mb-2">
          <h3 className="text-[11.5px] sm:text-base font-bold tracking-tight text-white">
            About me
          </h3>
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            className="grid size-6.5 sm:size-8 place-items-center rounded-full text-white/60 hover:text-white hover:bg-white/15 transition-all"
            aria-label="Options"
          >
            <DotsThreeVertical size={14} weight="bold" className="sm:hidden" />
            <DotsThreeVertical size={18} weight="bold" className="hidden sm:block" />
          </button>
        </div>

        {/* Bio Copy */}
        <p className="text-[11px] sm:text-[13px] leading-relaxed text-slate-200/90">
          I&apos;m Naveen Gumaste, a Frontend Developer and DevOps Engineer creating high-performance Next.js apps, accessible UIs, and cloud infrastructure. My work blends speed, reliability, and minimal design.
        </p>

        {/* Highlight Tags */}
        <div className="mt-2 sm:mt-3.5 flex flex-wrap gap-1 sm:gap-1.5 pt-1.5 sm:pt-2.5 border-t border-white/10 text-[9.5px] sm:text-[11px] text-slate-300/80">
          <span>📍 {site.location}</span>
          <span>·</span>
          <span>SWE Intern @ CongleX</span>
          <span>·</span>
          <span>KLE Tech</span>
        </div>
      </div>

      {/* Popover Menu */}
      {showMenu && (
        <div
          className="absolute right-3 bottom-full mb-2 z-50 w-48 rounded-2xl bg-[#0b1325]/95 backdrop-blur-2xl border border-white/20 p-1.5 shadow-2xl text-xs text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleShare}
            className="flex w-full items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            {copied ? (
              <>
                <Check size={14} weight="bold" className="text-emerald-400" />
                <span className="font-medium text-emerald-400">Bio link copied!</span>
              </>
            ) : (
              <>
                <ShareNetwork size={14} />
                <span>Share bio</span>
              </>
            )}
          </button>
          <a
            href="https://naveengumaste.me"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setShowMenu(false)}
          >
            <ArrowSquareOut size={14} />
            <span>Open portfolio</span>
          </a>
        </div>
      )}
    </div>
  );
}
