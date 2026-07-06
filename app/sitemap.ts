import type { MetadataRoute } from "next";
import { de } from "@/lib/content.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: de.SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
