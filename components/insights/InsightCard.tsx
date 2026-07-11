"use client";

import Link from "next/link";
import Image from "next/image";
import type { Insight } from "@/lib/content-types";
import { ARTICLE_IMAGES } from "@/lib/insights-articles";

interface InsightCardProps {
  item: Insight;
  readCta: string;
}

export function InsightCard({ item, readCta }: InsightCardProps) {
  const image = ARTICLE_IMAGES[item.slug];
  return (
    <Link
      href={`/insights/${item.slug}`}
      className="group bg-cetl-surface border border-cetl-border rounded-sm overflow-hidden hover:border-cetl-gold/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Tag bar */}
      <div className="h-1 bg-gradient-to-r from-cetl-gold/60 to-cetl-gold-light/30" />

      {/* Key visual */}
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cetl-surface/60 to-transparent" />
        </div>
      )}

      <div className="p-7 flex flex-col gap-4 h-full">
        {/* Meta */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-cetl-gold border border-cetl-gold/30 px-2 py-0.5 rounded-sm">
            {item.tag}
          </span>
          <span className="text-cetl-text-muted text-[11px]">{item.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-cetl-text text-[17px] font-semibold leading-snug group-hover:text-cetl-gold-light transition-colors duration-300">
          {item.title}
        </h3>

        {/* Teaser */}
        <p className="text-cetl-text-muted text-sm leading-relaxed flex-1">{item.teaser}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-cetl-border/50">
          <span className="text-cetl-text-muted text-xs">{item.readTime}</span>
          <span className="text-cetl-gold text-xs font-medium tracking-wide group-hover:underline underline-offset-4">
            {readCta} →
          </span>
        </div>
      </div>
    </Link>
  );
}
