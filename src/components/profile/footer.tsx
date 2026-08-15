import { QrCode } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <>
      {/* Bottom Compliance & Policy Links */}
      <footer className="mt-10 mb-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-center text-[11px] text-slate-400/80">
        <a
          href="https://linktr.ee/privacy"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          Cookie Preferences
        </a>
        <span>•</span>
        <a
          href="https://linktr.ee/s/about/trust-center/report/?field86145911=https%3A%2F%2Flinktr.ee%2Fnaveengumaste"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          Report
        </a>
        <span>•</span>
        <a
          href="https://linktr.ee/privacy"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          Privacy
        </a>
        <span>•</span>
        <a
          href="https://linktr.ee"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          Explore
        </a>
        <span>•</span>
        <a
          href="https://naveengumaste.me"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          About this account
        </a>
        <span>•</span>
        <a
          href="https://linktr.ee"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          More from Linktree
        </a>
      </footer>

      {/* Floating QR Code in bottom-right corner (Desktop View only) */}
      {/* <div className="fixed bottom-6 right-6 z-40 hidden xl:flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl text-white">
        <span className="text-[10px] font-medium text-white/70 tracking-wide uppercase">
          View on mobile
        </span>
        <div className="size-20 grid place-items-center rounded-xl bg-white p-1 shadow-sm">
          <QrCode size={68} className="text-black" />
        </div>
      </div> */}
    </>
  );
}
