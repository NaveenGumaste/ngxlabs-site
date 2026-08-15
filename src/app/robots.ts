import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absUrl("/sitemap.xml"),
    host: "https://ngxlabs.tech",
  };
}
