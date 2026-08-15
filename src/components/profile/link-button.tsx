"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowSquareOut, Check, DotsThreeVertical, ShareNetwork } from "@phosphor-icons/react";

interface LinkButtonProps {
  href: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  thumbnail?: string;
  isExternal?: boolean;
}

export function LinkButton({
  href,
  title,
  subtitle,
  icon,
  thumbnail,
  isExternal = false,
}: LinkButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: href,
        });
        return;
      } catch {
        // fallback
      }
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowMenu(false);
      }, 1800);
    }
  };

  return (
    <div className="relative group w-full">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="relative flex w-full items-center justify-between min-h-[58px] sm:min-h-[62px] px-4 sm:px-5 py-3 rounded-full bg-white/[0.07] hover:bg-white/[0.12] active:bg-white/[0.15] backdrop-blur-xl text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 hover:border-white/25 transition-all duration-200 ease-out hover:scale-[1.015] active:scale-[0.985]"
      >
        {/* Left Icon or Thumbnail */}
        <div className="w-8 shrink-0 flex items-center justify-start text-white/90">
          {thumbnail ? (
            <div className="size-7 sm:size-8 overflow-hidden rounded-full ring-1 ring-white/20 shadow-sm">
              <Image
                src={thumbnail}
                alt={title}
                width={32}
                height={32}
                className="size-full object-cover"
              />
            </div>
          ) : icon ? (
            <div className="text-white/90 group-hover:text-white transition-colors">
              {icon}
            </div>
          ) : (
            <span className="size-2 rounded-full bg-white/60" />
          )}
        </div>

        {/* Centered Text */}
        <div className="flex-1 text-center px-2">
          <p className="text-sm sm:text-base font-semibold tracking-tight text-white leading-snug">
            {title}
          </p>
          {subtitle && (
            <p className="text-xs font-normal text-slate-300/80 mt-0.5 line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right 3 Vertical Dots */}
        <div className="w-8 shrink-0 flex items-center justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
            className="grid size-8 place-items-center rounded-full text-white/60 hover:text-white hover:bg-white/15 transition-all"
            aria-label="Options"
          >
            <DotsThreeVertical size={18} weight="bold" />
          </button>
        </div>
      </a>

      {/* Popover Menu */}
      {showMenu && (
        <div
          className="absolute right-3 top-full mt-2 z-50 w-48 rounded-2xl bg-[#0b1325]/95 backdrop-blur-2xl border border-white/20 p-1.5 shadow-2xl text-xs text-white"
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
                <span className="font-medium text-emerald-400">Link copied!</span>
              </>
            ) : (
              <>
                <ShareNetwork size={14} />
                <span>Share this link</span>
              </>
            )}
          </button>
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="flex w-full items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setShowMenu(false)}
          >
            <ArrowSquareOut size={14} />
            <span>Open in new tab</span>
          </a>
        </div>
      )}
    </div>
  );
}
