import { siteConfig } from "@/lib/site";

export default function manifest() {
  return {
    name: `${siteConfig.name} — ${siteConfig.role}`,
    short_name: "AD Portfolio",
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "id-ID",
    background_color: "#0b0c0f",
    theme_color: "#0b0c0f",
    categories: ["portfolio", "personal", "developer"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
