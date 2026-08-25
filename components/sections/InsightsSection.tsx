"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { InsightCard } from "@/components/insights/InsightCard";

export function InsightsSection() {
  const { t } = useLanguage();
  const ui = t.UI.insights;

  return (
    <section className="py-14 lg:py-20 bg-cetl-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-[20%] w-[500px] h-[400px] rounded-full bg-cetl-gold-400/[0.06] blur-[140px]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-cetl-gold-deep text-xs tracking-[0.3em] uppercase font-semibold mb-3">{ui.label}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">{ui.title}</h2>
            <p className="text-white/60 text-sm max-w-xl">{ui.subtitle}</p>
          </div>
          <Link
            href="/insights"
            className="text-cetl-gold-400 hover:text-white text-sm font-medium tracking-wide underline-offset-4 hover:underline shrink-0"
          >
            {ui.cta} →
          </Link>
        </div>

        {/* Cards — Startseite zeigt die drei neuesten Publikationen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.INSIGHTS.slice(0, 3).map((item) => (
            <InsightCard key={item.slug} item={item} readCta={ui.readCta} />
          ))}
        </div>
      </Container>
    </section>
  );
}
