"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  GithubLogo,
  InstagramLogo,
  ShareNetwork,
  SpotifyLogo,
  XLogo,
} from "@phosphor-icons/react";
import { SocialTooltip } from "@/components/profile/social-tooltip";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://linktr.ee/naveengumaste";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Naveen Gumaste | Linktree",
          text: "Frontend Developer & DevOps Engineer. Building fast web apps and cloud infrastructure.",
          url,
        });
        return;
      } catch {
        // Fallback
      }
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative w-full bg-black text-white">
      {/* 1. Full-Bleed Integrated Hero Image Container */}
      <div className="relative h-[340px] sm:h-[380px] w-full overflow-hidden">
        {/* Top-Right Floating Share Button */}
        <div className="absolute top-4 right-4 z-30 pointer-events-auto">
          <button
            type="button"
            onClick={handleShare}
            aria-label={copied ? "Link copied" : "Share profile"}
            className="relative grid size-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105 active:scale-95 border border-white/15 shadow-sm"
            title="Share profile"
          >
            {copied ? (
              <Check size={18} weight="bold" className="text-emerald-400" />
            ) : (
              <ShareNetwork size={18} weight="bold" />
            )}
            {copied && (
              <span className="absolute -bottom-8 right-0 rounded-full bg-black/90 px-2.5 py-0.5 text-[10px] font-medium text-white shadow-lg whitespace-nowrap border border-white/10">
                Copied!
              </span>
            )}
          </button>
        </div>

        {/* Profile Image with Smooth Bottom Gradient Fade */}
        <div
          className="relative size-full"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Image
            src="/images/profile-2.webp"
            alt="Naveen Gumaste"
            fill
            priority
            unoptimized
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoQABAABUB8JQBOgB6LpjplElsAAP7uoGuYs0dXZ5dx15YwkqnEq1/cOpqGlhVp0p3v3qgWPHByX9PwwuAAAA=="
            sizes="(max-width: 640px) 100vw, 460px"
            className="object-cover object-[center_15%]"
          />
        </div>

        {/* Soft Ambient Diffusion on Lower Region */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,1) 100%)",
          }}
        />

        {/* Soft Atmospheric Dissolve into Solid Black */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.75) 70%, rgba(0, 0, 0, 0.95) 90%, #000000 100%)",
          }}
        />
      </div>

      {/* 2. Profile Info Header */}
      <div className="relative z-20 px-6 -mt-8 pb-4 text-center flex flex-col items-center">
        {/* Stylized Signature Script Wordmark using Dancing Script */}
        <div className="flex items-center justify-center my-1">
          <span
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md select-none tracking-wide text-center"
            style={{
              fontFamily: "var(--font-dancing-script), cursive",
              textShadow: "0 2px 16px rgba(0,0,0,0.8)",
            }}
          >
            Naveen Gumaste
          </span>
        </div>

        {/* Role Subtitle */}
        <p className="mt-1 text-xs sm:text-sm font-medium text-white/80">
          DevOps Engineer &amp; Frontend Developer
        </p>

        {/* Social Icons Row with Brand-Colored Hover Glow & Adjusted Tooltips */}
        <div className="mt-6 mb-2 flex items-center justify-center gap-3 text-white">
          <SocialTooltip
            name="Instagram"
            handle="@ayee_naveen"
            href="https://www.instagram.com/ayee_naveen/"
            ariaLabel="Instagram @ayee_naveen"
            brandHoverClass="hover:text-[#FF307A] hover:bg-[#FF307A]/15 hover:shadow-[0_0_20px_rgba(255,48,122,0.35)]"
          >
            <InstagramLogo size={20} weight="bold" />
          </SocialTooltip>

          <SocialTooltip
            name="Spotify"
            handle="Naveen Gumaste"
            href="https://open.spotify.com"
            ariaLabel="Spotify Profile"
            brandHoverClass="hover:text-[#1DB954] hover:bg-[#1DB954]/15 hover:shadow-[0_0_20px_rgba(29,185,84,0.35)]"
          >
            <SpotifyLogo size={20} weight="fill" />
          </SocialTooltip>

          <SocialTooltip
            name="X (Twitter)"
            handle="@Z0D404"
            href="https://x.com/Z0D404"
            ariaLabel="X @Z0D404"
            brandHoverClass="hover:text-[#38BDF8] hover:bg-[#38BDF8]/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
          >
            <XLogo size={20} weight="bold" />
          </SocialTooltip>

          <SocialTooltip
            name="GitHub"
            handle="@NaveenGumaste"
            href="https://github.com/NaveenGumaste"
            ariaLabel="GitHub @NaveenGumaste"
            brandHoverClass="hover:text-[#C084FC] hover:bg-[#C084FC]/15 hover:shadow-[0_0_20px_rgba(192,132,252,0.35)]"
          >
            <GithubLogo size={20} weight="bold" />
          </SocialTooltip>
        </div>
      </div>
    </div>
  );
}
