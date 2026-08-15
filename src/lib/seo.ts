import type { Metadata } from "next";
import { site } from "@/lib/site";
import { absUrl } from "@/lib/utils";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function pageMeta({
  title,
  description,
  path,
  keywords,
  type = "website",
}: PageMetaInput): Metadata {
  const url = absUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      creator: "@Z0D404",
    },
  };
}
