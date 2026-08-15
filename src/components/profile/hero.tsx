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

function PeerlistIcon({ size = 14.5 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm2.2 10.8H10v3.7H8.3V7.5h6.1a3.25 3.25 0 0 1 0 6.5zm0-1.7a1.55 1.55 0 0 0 0-3.1H10v3.1h4.2z" />
    </svg>
  );
}

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : "https://linktr.ee/naveengumaste";
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
      <div className="relative h-[320px] sm:h-[360px] md:h-[380px] w-full overflow-hidden">
        {/* Top-Right Floating Share Button */}
        <div className="absolute top-3 right-3 z-30 pointer-events-auto">
          <button
            type="button"
            onClick={handleShare}
            aria-label={copied ? "Link copied" : "Share profile"}
            className="relative grid size-7 sm:size-8 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105 active:scale-95 border border-white/15 shadow-sm"
            title="Share profile"
          >
            {copied ? (
              <Check size={14} weight="bold" className="text-emerald-400" />
            ) : (
              <ShareNetwork size={14} weight="bold" />
            )}
            {copied && (
              <span className="absolute -bottom-6 right-0 rounded-full bg-black/90 px-2 py-0.5 text-[8.5px] font-medium text-white shadow-lg whitespace-nowrap border border-white/10">
                Copied!
              </span>
            )}
          </button>
        </div>

        {/* Profile Image with Clean Bottom-Only Gradient Fade */}
        <div
          className="relative size-full"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,0.3) 94%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,0.3) 94%, rgba(0,0,0,0) 100%)",
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
            sizes="(max-width: 640px) 340px, 420px"
            className="object-cover object-[center_top] sm:object-[center_10%]"
          />
        </div>

        {/* Soft Atmospheric Dissolve into Solid Black at the Very Bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 45%, rgba(0, 0, 0, 0.8) 80%, #000000 100%)",
          }}
        />
      </div>

      {/* 2. Profile Info Header */}
      <div className="relative z-20 px-3 sm:px-5 -mt-6 sm:-mt-8 pb-2.5 text-center flex flex-col items-center">
        {/* Stylized Signature Script Wordmark using Dancing Script */}
        <div className="flex items-center justify-center my-0.5">
          <span
            className="text-[26px] sm:text-3xl md:text-[38px] font-bold text-white drop-shadow-md select-none tracking-wide text-center"
            style={{
              fontFamily: "var(--font-dancing-script), cursive",
              textShadow: "0 2px 14px rgba(0,0,0,0.8)",
            }}
          >
            NaveenGumaste
          </span>
        </div>

        {/* Role Subtitle */}
        <p className="mt-0.5 text-[10.5px] sm:text-xs font-medium text-white/80">
          DevOps Engineer &amp; Frontend Developer
        </p>

        {/* Social Icons Row with Brand-Colored Hover Glow & Tooltips */}
        <div className="mt-3 sm:mt-4 mb-1 flex items-center justify-center gap-1.5 sm:gap-2 text-white">
          <SocialTooltip
            name="Instagram"
            handle="@ayee_naveen"
            href="https://www.instagram.com/ayee_naveen/"
            ariaLabel="Instagram @ayee_naveen"
            brandHoverClass="hover:text-[#FF307A] hover:bg-[#FF307A]/15 hover:shadow-[0_0_16px_rgba(255,48,122,0.35)]"
          >
            <InstagramLogo size={15} weight="bold" />
          </SocialTooltip>

          <SocialTooltip
            name="Spotify"
            handle="Naveen Gumaste"
            href="https://open.spotify.com"
            ariaLabel="Spotify Profile"
            brandHoverClass="hover:text-[#1DB954] hover:bg-[#1DB954]/15 hover:shadow-[0_0_16px_rgba(29,185,84,0.35)]"
          >
            <SpotifyLogo size={15} weight="fill" />
          </SocialTooltip>

          <SocialTooltip
            name="X (Twitter)"
            handle="@Z0D404"
            href="https://x.com/Z0D404"
            ariaLabel="X @Z0D404"
            brandHoverClass="hover:text-[#38BDF8] hover:bg-[#38BDF8]/15 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
          >
            <XLogo size={15} weight="bold" />
          </SocialTooltip>

          <SocialTooltip
            name="GitHub"
            handle="@NaveenGumaste"
            href="https://github.com/NaveenGumaste"
            ariaLabel="GitHub @NaveenGumaste"
            brandHoverClass="hover:text-[#C084FC] hover:bg-[#C084FC]/15 hover:shadow-[0_0_16px_rgba(192,132,252,0.35)]"
          >
            <GithubLogo size={15} weight="bold" />
          </SocialTooltip>

          <SocialTooltip
            name="Peerlist"
            handle="@naveengumaste"
            href="https://peerlist.io/naveengumaste"
            ariaLabel="Peerlist @naveengumaste"
            brandHoverClass="hover:text-[#00AA45] hover:bg-[#00AA45]/15 hover:shadow-[0_0_16px_rgba(0,170,69,0.35)]"
          >
            <PeerlistIcon size={14.5} />
          </SocialTooltip>
        </div>
      </div>
    </div>
  );
}
