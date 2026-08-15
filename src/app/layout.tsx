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
    default: "Naveen Gumaste | Frontend Developer & DevOps Engineer",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.url }],
  creator: site.founder.name,
  publisher: site.name,
  keywords: [
    "Naveen Gumaste",
    "Frontend Developer",
    "DevOps Engineer",
    "Next.js Developer India",
    "React Developer Dharwad",
    "Cloud Engineer",
    "ngxlabs",
  ],
  alternates: { canonical: site.url },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/icon-16x16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.webp", sizes: "512x512", type: "image/webp" },
    ],
    apple: [
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/avif",
        url: "/favicon.avif",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Naveen Gumaste | Frontend Developer & DevOps Engineer",
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naveen Gumaste • ngxlabs.site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Z0D404",
    title: "Naveen Gumaste | Frontend Developer & DevOps Engineer",
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#06080F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${dancingScript.variable} ${gambarino.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/profile-2.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority is standard in modern HTML
          fetchpriority="high"
        />
      </head>
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
