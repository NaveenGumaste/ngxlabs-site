import { MeshBackground } from "@/components/profile/mesh-background";
import { Hero } from "@/components/profile/hero";
import { LinkButton } from "@/components/profile/link-button";
import { MediaCard } from "@/components/profile/media-card";
import { ProjectList } from "@/components/profile/project-list";
import { AboutCard } from "@/components/profile/about-card";
import { Footer } from "@/components/profile/footer";
import { CardMotion } from "@/components/profile/card-motion";

export default function HomePage() {
  return (
    <div className="relative flex w-full min-h-0 flex-col items-center px-4 pt-4 pb-3 text-white sm:px-6 sm:pt-6 sm:pb-4">
      {/* 1. Atmospheric Mesh Gradient Background with Rising Animation */}
      <MeshBackground />

      {/* 2. Solid Black Profile Card with Synchronized Rising & Scale Entrance */}
      <CardMotion>
        {/* Profile Hero Header with Full-Bleed Photo & Social Tooltips */}
        <div className="w-full">
          <Hero />
        </div>

        {/* Unified Content Stream */}
        <div className="w-full flex flex-col gap-2.5 sm:gap-4 px-2.5 sm:px-4 pb-5 sm:pb-8 pt-1 sm:pt-2">
          {/* 1. About Me Card */}
          <AboutCard />

          {/* 2. Main Portfolio Link Button */}
          <LinkButton
            href="https://naveengumaste.me"
            title="Portfolio Site"
            subtitle="naveengumaste.me"
            thumbnail="/images/naveen-profile.jpg"
            isExternal={true}
          />

          {/* 3. Featured Open-Source Media Card (Caravan) */}
          <div className="flex flex-col gap-1 sm:gap-2 mt-0.5 sm:mt-1">
            <p className="text-center font-semibold sm:font-bold text-[9.5px] sm:text-xs text-slate-400 sm:text-slate-300/80 tracking-wider uppercase">
              Featured Project
            </p>
            <MediaCard />
          </div>

          {/* 4. Apps & Open Source */}
          <div className="flex flex-col gap-1.5 sm:gap-2.5 mt-0.5 sm:mt-1">
            <p className="text-center font-semibold sm:font-bold text-[9.5px] sm:text-xs text-slate-400 sm:text-slate-300/80 tracking-wider uppercase">
              Products &amp; Open Source Projects
            </p>
            <ProjectList />
          </div>
        </div>
      </CardMotion>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
