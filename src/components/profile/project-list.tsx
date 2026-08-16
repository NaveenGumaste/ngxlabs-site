import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const projects = [
  {
    title: "UniTools",
    subtitle: "File conversion tools in the browser",
    image: "/images/unitools.webp",
    href: "https://unitools.naveengumaste.me",
    object: "object-[28%_48%]",
  },
  {
    title: "KairoCal",
    subtitle: "Compare multi-broker trading fees",
    image: "/images/kairocal.webp",
    href: "https://kairocal.naveengumaste.me/",
    object: "object-[62%_22%]",
  },
  {
    title: "GitViz",
    subtitle: "Map commits and git branches",
    image: "/images/project-gitviz.jpg",
    href: "https://gitviz.naveengumaste.me/",
    object: "object-center",
  },
  {
    title: "CryptoZ",
    subtitle: "Track crypto markets in real time",
    image: "/images/CryptoZ.webp",
    href: "https://cryptoz1.vercel.app/",
    object: "object-[52%_42%]",
  },
] as const;

export function ProjectList() {
  return (
    <div className="w-full overflow-hidden rounded-[16px] sm:rounded-[28px] bg-white/[0.07] backdrop-blur-xl shadow-[0_6px_24px_rgba(0,0,0,0.3)] sm:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10">
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.title}
            className={index > 0 ? "border-t border-white/10" : undefined}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 sm:gap-3.5 px-2.5 py-2 sm:px-3.5 sm:py-3 transition-colors duration-200 hover:bg-white/[0.06] active:bg-white/[0.09]"
            >
              <div className="relative size-12 sm:size-[3.65rem] shrink-0 overflow-hidden rounded-[11px] sm:rounded-[14px] bg-zinc-800 ring-1 ring-white/20">
                <Image
                  src={project.image}
                  alt=""
                  width={72}
                  height={72}
                  className={`size-full object-cover ${project.object} transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105`}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[13px] sm:text-[15px] font-semibold tracking-tight text-white leading-tight">
                  {project.title}
                </p>
                <p className="mt-0.5 text-[10.5px] sm:text-[12px] leading-snug text-slate-300/80 line-clamp-1">
                  {project.subtitle}
                </p>
              </div>

              <span className="grid size-7 sm:size-8 shrink-0 place-items-center rounded-full bg-white/5 text-white/55 ring-1 ring-white/10 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white group-hover:text-black group-hover:scale-105 group-active:scale-95">
                <ArrowUpRight size={13} weight="bold" className="sm:hidden" />
                <ArrowUpRight
                  size={15}
                  weight="bold"
                  className="hidden sm:block"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
