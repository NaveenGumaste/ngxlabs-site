"use client";

import Image from "next/image";

interface GridItem {
  title: string;
  image: string;
  href: string;
}

const items: GridItem[] = [
  {
    title: "UniTools",
    image: "/images/unitools.webp",
    href: "https://one-unitools.vercel.app/",
  },
  {
    title: "KairoCal",
    image: "/images/kairocal.webp",
    href: "https://kairocal.naveengumaste.me/",
  },
  {
    title: "GitViz",
    image: "/images/project-gitviz.jpg",
    href: "https://gitviz.naveengumaste.me/",
  },
  {
    title: "CryptoZ",
    image: "/images/CryptoZ.webp",
    href: "https://cryptoz1.vercel.app/",
  },
];

export function GridCard() {
  return (
    <div className="w-full overflow-hidden rounded-[16px] sm:rounded-[28px] bg-white/[0.07] backdrop-blur-xl p-2.5 sm:p-5 shadow-[0_6px_24px_rgba(0,0,0,0.3)] sm:shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 transition-transform duration-200 hover:scale-[1.01]">
      {/* 2x2 Image Grid with Sleek Cards */}
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5 overflow-hidden rounded-lg sm:rounded-2xl">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square w-full overflow-hidden rounded-md sm:rounded-xl bg-slate-900/60 shadow-sm border border-white/10 transition-transform duration-200 hover:scale-[1.03]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 140px, 220px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-1 sm:p-2 text-center">
              <span className="text-[9.5px] sm:text-xs font-bold text-white tracking-wide drop-shadow-sm">
                {item.title}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Card Footer Labels */}
      <div className="mt-2 sm:mt-3 text-center">
        <h3 className="text-[11px] sm:text-base font-bold text-white">
          Featured Developer Tools
        </h3>
        <p className="text-[9.5px] sm:text-xs text-slate-300/80 mt-0.5">
          4 active web applications
        </p>
      </div>
    </div>
  );
}
