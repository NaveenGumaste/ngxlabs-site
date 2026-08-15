import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ngxlabs.tech",
    short_name: "ngx",
    description:
      "Tech studio in Dharwad, India. Frontend, full-stack, and DevOps by Naveen Gumaste.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0E8",
    theme_color: "#141414",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
    ],
  };
}
