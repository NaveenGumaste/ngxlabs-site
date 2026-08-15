import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeScript } from "@/components/theme/theme-script";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, personSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const dancingScript = localFont({
  src: "../../public/fonts/DancingScript-Variable.woff2",
  variable: "--font-dancing-script",
  display: "swap",
});

const gambarino = localFont({
  src: "../../public/fonts/Gambarino-Regular.woff2",
  variable: "--font-gambarino",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Frontend Developer Portfolio India",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.url }],
  creator: site.founder.name,
  publisher: site.name,
  keywords: [
    "frontend developer portfolio India",
    "Next.js developer Dharwad",
    "DevOps engineer portfolio",
    "cloud engineer India",
    "React developer portfolio",
    "web development services India",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Frontend Developer Portfolio India",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Z0D404",
    title: "Frontend Developer Portfolio India",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${dancingScript.variable} ${gambarino.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full max-w-full flex-col overflow-x-hidden font-sans">
        <ThemeScript />
        <JsonLd data={[organizationSchema(), { ...personSchema(), "@context": "https://schema.org" }]} />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 text-sm font-medium focus:text-paper focus:shadow-soft"
        >
          Skip to content
        </a>
        <main id="content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
