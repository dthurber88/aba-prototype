import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.playabanc.com/",
      lastModified: "2026-10-16",
    },
  ];
}
