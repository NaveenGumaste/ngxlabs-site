"use client";

import {
  Compass,
  CurrencyBtc,
  Globe,
  RocketLaunch,
  Wrench,
} from "@phosphor-icons/react";
import { MeshBackground } from "@/components/profile/mesh-background";
import { Hero } from "@/components/profile/hero";
import { LinkButton } from "@/components/profile/link-button";
import { MediaCard } from "@/components/profile/media-card";
import { GridCard } from "@/components/profile/grid-card";
import { AboutCard } from "@/components/profile/about-card";
import { Footer } from "@/components/profile/footer";
import { Reveal } from "@/components/motion/reveal";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-between py-4 px-3 sm:py-8 sm:px-4">
      {/* 1. Atmospheric Mesh Gradient Background */}
      <MeshBackground />

      {/* 2. Solid Black Profile Card Container */}
      <main className="relative z-10 w-full max-w-[460px] flex flex-col items-center overflow-hidden rounded-[38px] sm:rounded-[44px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.9)] border border-white/10">
        {/* Profile Hero Header with Full-Bleed Photo & Spotify Waveform Pill */}
        <Reveal className="w-full">
          <Hero />
        </Reveal>

        {/* Unified Content Stream */}
        <div className="w-full flex flex-col gap-5 px-4 pb-8 pt-2">
          {/* 1. About Me Card */}
          <Reveal delay={0.05}>
            <AboutCard />
          </Reveal>

          {/* 2. Main Portfolio Link Button */}
          <Reveal delay={0.1}>
            <LinkButton
              href="https://naveengumaste.me"
              title="My website"
              subtitle="naveengumaste.me"
              thumbnail="/images/naveen-profile.jpg"
              isExternal={true}
            />
          </Reveal>

          {/* 3. Featured Open-Source Media Card (Caravan) */}
          <div className="flex flex-col gap-2 mt-1">
            <p className="text-center font-bold text-xs text-slate-300/80 tracking-wide">
              Featured Project
            </p>

            <Reveal delay={0.15}>
              <MediaCard />
            </Reveal>
          </div>

          {/* 4. Apps & Developer Tools Grid */}
          <div className="flex flex-col gap-2.5 mt-1">
            <p className="text-center font-bold text-xs text-slate-300/80 tracking-wide">
              Apps &amp; Open Source
            </p>

            <Reveal delay={0.2}>
              <GridCard />
            </Reveal>

            <Reveal delay={0.25}>
              <LinkButton
                href="https://one-unitools.vercel.app/"
                title="UniTools"
                subtitle="40+ free utilities for file conversion & dev workflows"
                icon={<Wrench size={18} weight="bold" />}
                isExternal={true}
              />
            </Reveal>

            <Reveal delay={0.3}>
              <LinkButton
                href="https://kairocal.naveengumaste.me/"
                title="KairoCal"
                subtitle="India's only multi-broker fee comparison calculator"
                icon={<RocketLaunch size={18} weight="bold" />}
                isExternal={true}
              />
            </Reveal>

            <Reveal delay={0.35}>
              <LinkButton
                href="https://gitviz.naveengumaste.me/"
                title="GitViz"
                subtitle="Interactive Git commit & branch visualizer map"
                icon={<Compass size={18} weight="bold" />}
                isExternal={true}
              />
            </Reveal>

            <Reveal delay={0.4}>
              <LinkButton
                href="https://cryptoz1.vercel.app/"
                title="CryptoZ Dashboard"
                subtitle="Real-time cryptocurrency analytics & tracking"
                icon={<CurrencyBtc size={18} weight="bold" />}
                isExternal={true}
              />
            </Reveal>

            <Reveal delay={0.45}>
              <LinkButton
                href="https://naveengumaste.me"
                title="Full Portfolio & Engineering Case Studies"
                subtitle="Deep-dive benchmarks, architecture & live demos"
                icon={<Globe size={18} weight="bold" />}
                isExternal={true}
              />
            </Reveal>
          </div>
        </div>
      </main>

      {/* 3. Footer & Desktop QR Code */}
      <Footer />
    </div>
  );
}
