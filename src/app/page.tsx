import {
  Compass,
  CurrencyBtc,
  Globe,
  RocketLaunch,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import { MeshBackground } from "@/components/profile/mesh-background";
import { Hero } from "@/components/profile/hero";
import { LinkButton } from "@/components/profile/link-button";
import { MediaCard } from "@/components/profile/media-card";
import { GridCard } from "@/components/profile/grid-card";
import { AboutCard } from "@/components/profile/about-card";
import { Footer } from "@/components/profile/footer";
import { CardMotion } from "@/components/profile/card-motion";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-between py-4 px-3 sm:py-8 sm:px-4">
      {/* 1. Atmospheric Mesh Gradient Background with Rising Animation */}
      <MeshBackground />

      {/* 2. Solid Black Profile Card with Synchronized Rising & Scale Entrance */}
      <CardMotion>
        {/* Profile Hero Header with Full-Bleed Photo & Social Tooltips */}
        <div className="w-full">
          <Hero />
        </div>

        {/* Unified Content Stream */}
        <div className="w-full flex flex-col gap-5 px-4 pb-8 pt-2">
          {/* 1. About Me Card */}
          <AboutCard />

          {/* 2. Main Portfolio Link Button */}
          <LinkButton
            href="https://naveengumaste.me"
            title="My website"
            subtitle="naveengumaste.me"
            thumbnail="/images/naveen-profile.jpg"
            isExternal={true}
          />

          {/* 3. Featured Open-Source Media Card (Caravan) */}
          <div className="flex flex-col gap-2 mt-1">
            <p className="text-center font-bold text-xs text-slate-300/80 tracking-wide">
              Featured Project
            </p>
            <MediaCard />
          </div>

          {/* 4. Apps & Developer Tools Grid */}
          <div className="flex flex-col gap-2.5 mt-1">
            <p className="text-center font-bold text-xs text-slate-300/80 tracking-wide">
              Apps &amp; Open Source
            </p>

            <GridCard />

            <LinkButton
              href="https://one-unitools.vercel.app/"
              title="UniTools"
              subtitle="40+ free utilities for file conversion & dev workflows"
              icon={<Wrench size={18} weight="bold" />}
              isExternal={true}
            />

            <LinkButton
              href="https://kairocal.naveengumaste.me/"
              title="KairoCal"
              subtitle="India's only multi-broker fee comparison calculator"
              icon={<RocketLaunch size={18} weight="bold" />}
              isExternal={true}
            />

            <LinkButton
              href="https://gitviz.naveengumaste.me/"
              title="GitViz"
              subtitle="Interactive Git commit & branch visualizer map"
              icon={<Compass size={18} weight="bold" />}
              isExternal={true}
            />

            <LinkButton
              href="https://cryptoz1.vercel.app/"
              title="CryptoZ Dashboard"
              subtitle="Real-time cryptocurrency analytics & tracking"
              icon={<CurrencyBtc size={18} weight="bold" />}
              isExternal={true}
            />

            <LinkButton
              href="https://naveengumaste.me"
              title="Full Portfolio & Engineering Case Studies"
              subtitle="Deep-dive benchmarks, architecture & live demos"
              icon={<Globe size={18} weight="bold" />}
              isExternal={true}
            />
          </div>
        </div>
      </CardMotion>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
