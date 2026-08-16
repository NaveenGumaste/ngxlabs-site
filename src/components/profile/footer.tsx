"use client";

import { site } from "@/lib/site";
import { SquiggleUnderline } from "@/components/motion/squiggle-underline";

let clickSound: HTMLAudioElement | null = null;

function playZodClick() {
  if (!clickSound) {
    clickSound = new Audio("/Sound/keyboard-click.mp3");
    clickSound.preload = "auto";
    clickSound.volume = 0.6;
  }
  clickSound.currentTime = 0;
  void clickSound.play();
}

export function Footer() {
  return (
    <footer className="relative z-20 mt-3 bg-transparent shadow-none pb-[max(0.25rem,env(safe-area-inset-bottom))] sm:mt-4">
      <p className="text-center font-dance font-bold text-[15px] tracking-wide text-black sm:text-[16px]">
        Designed by{" "}
        <a
          href={site.social.x}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playZodClick}
          className="group/zod relative pointer-cursor inline-block font-mono font-bold tracking-[0.14em] text-white/80 no-underline transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-yellow-300 focus-visible:text-yellow-300"
        >
          <SquiggleUnderline>ZOD404</SquiggleUnderline>
        </a>
      </p>
    </footer>
  );
}
