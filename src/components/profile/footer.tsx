"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";
import { SquiggleUnderline } from "@/components/motion/squiggle-underline";

let audioCtx: AudioContext | null = null;
let soundBuffer: AudioBuffer | null = null;
let htmlAudio: HTMLAudioElement | null = null;
let lastPlayed = 0;

function initAudio() {
  if (typeof window === "undefined" || soundBuffer) return;

  try {
    const AudioCtxClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;

    if (AudioCtxClass) {
      if (!audioCtx) {
        audioCtx = new AudioCtxClass();
      }
      fetch("/Sound/keyboard-click.mp3")
        .then((res) => res.arrayBuffer())
        .then((arr) => audioCtx?.decodeAudioData(arr))
        .then((decoded) => {
          if (decoded) soundBuffer = decoded;
        })
        .catch(() => {
          setupHtmlAudio();
        });
      return;
    }
  } catch {
    // fallback
  }

  setupHtmlAudio();
}

function setupHtmlAudio() {
  if (!htmlAudio && typeof window !== "undefined") {
    htmlAudio = new Audio("/Sound/keyboard-click.mp3");
    htmlAudio.preload = "auto";
    htmlAudio.volume = 0.6;
    htmlAudio.load();
  }
}

function playZodClick() {
  if (typeof window === "undefined") return;

  const now = Date.now();
  if (now - lastPlayed < 120) return;
  lastPlayed = now;

  // 1. Try Web Audio API (instant, lowest latency on iOS/Android)
  if (audioCtx && soundBuffer) {
    if (audioCtx.state === "suspended") {
      void audioCtx.resume();
    }
    try {
      const source = audioCtx.createBufferSource();
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.6;
      source.buffer = soundBuffer;
      source.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      source.start(0);
      return;
    } catch {
      // Fallback to HTML5 audio below
    }
  }

  // 2. Fallback to HTML5 Audio Element
  try {
    if (!htmlAudio) {
      setupHtmlAudio();
    }
    if (htmlAudio) {
      htmlAudio.currentTime = 0;
      const playPromise = htmlAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay or focus policy fallback
        });
      }
    }
  } catch {
    // Safe ignore
  }
}

export function Footer() {
  useEffect(() => {
    initAudio();
    // Warm up audio context on first user interaction anywhere
    const unlock = () => {
      if (audioCtx && audioCtx.state === "suspended") {
        void audioCtx.resume();
      }
    };
    window.addEventListener("touchstart", unlock, { once: true, passive: true });
    window.addEventListener("pointerdown", unlock, { once: true, passive: true });
    return () => {
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("pointerdown", unlock);
    };
  }, []);

  return (
    <footer className="relative z-20 mt-3 bg-transparent shadow-none pb-[max(0.25rem,env(safe-area-inset-bottom))] sm:mt-4">
      <p className="text-center font-dance font-bold text-[15px] tracking-wide text-black sm:text-[16px]">
        Designed by{" "}
        <a
          href={site.social.x}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playZodClick}
          onPointerDown={playZodClick}
          className="group/zod relative pointer-cursor inline-block font-mono font-bold tracking-[0.14em] text-white/80 no-underline transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-yellow-300 focus-visible:text-yellow-300"
        >
          <SquiggleUnderline>ZOD404</SquiggleUnderline>
        </a>
      </p>
    </footer>
  );
}
