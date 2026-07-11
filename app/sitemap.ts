import type { MetadataRoute } from "next";
import { de } from "@/lib/content.de";
import { ARTICLE_SLUGS } from "@/lib/insights-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = de.SITE.url.replace(/\/$/, "");
  return [
    {
      url: de.SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...ARTICLE_SLUGS.map((slug) => ({
      url: `${base}/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
