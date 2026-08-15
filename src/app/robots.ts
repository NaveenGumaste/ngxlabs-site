import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Twitterbot",
          "facebookexternalhit",
          "LinkedInBot",
          "WhatsApp",
          "TelegramBot",
          "Discordbot",
          "Slackbot",
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
        ],
        allow: "/",
      },
    ],
    sitemap: absUrl("/sitemap.xml"),
    host: "https://ngxlabs.tech",
  };
}
