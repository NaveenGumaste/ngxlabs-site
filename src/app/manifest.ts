import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Naveen Gumaste | Linktree",
    short_name: "Naveen",
    description:
      "Frontend Developer & DevOps Engineer building fast web apps and cloud infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#06080F",
    theme_color: "#06080F",
    icons: [
      {
        src: "/icon-192x192.webp",
        sizes: "192x192",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
