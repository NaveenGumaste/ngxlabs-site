import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md rounded-[32px] bg-[#1a2118] p-8 sm:p-12 border border-white/10 shadow-2xl flex flex-col items-center">
        <p className="text-6xl sm:text-7xl font-bold text-emerald-400 font-mono">
          404
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Page Not Found
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-[32ch] leading-relaxed">
          The link you followed doesn&apos;t exist or has moved. Return to the main profile to explore all links.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3F4B3C] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#485644] hover:scale-105 active:scale-95 border border-white/15"
        >
          <ArrowLeft size={18} weight="bold" />
          <span>Back to Profile</span>
        </Link>
      </div>
    </div>
  );
}
