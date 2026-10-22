import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/og-card";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export default async function OpengraphImage() {
  return new ImageResponse(OgCard(), {
    ...size,
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=31536000, immutable",
    },
  });
}
