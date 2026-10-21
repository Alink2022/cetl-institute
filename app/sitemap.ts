import type { MetadataRoute } from "next";
import { TT_PUBLICATIONS } from "@/lib/thinktank";
import { WEBINARS } from "@/lib/webinars";

const BASE = "https://www.cetl.institute";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/think-tank`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/think-tank/gastbeitraege`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...WEBINARS.map((w) => ({
      url: `${BASE}/think-tank/webinare/${w.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...TT_PUBLICATIONS.map((p) => ({
      url: `${BASE}/think-tank/${p.slug}`,
      lastModified: new Date(p.dateISO),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
