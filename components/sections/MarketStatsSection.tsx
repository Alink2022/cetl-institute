"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { MarketStat } from "@/lib/content-types";

function RingChart({ value }: { value: number }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 -rotate-90">
      <circle cx="50" cy="50" r={r} fill="none" stroke="var(--color-cetl-border)" strokeWidth="8" />
      <motion.circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="url(#marketRingGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient id="marketRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-cetl-gold-light)" />
          <stop offset="100%" stopColor="var(--color-cetl-gold-400)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TrendBadge() {
  return (
    <svg viewBox="0 0 100 60" className="w-20 h-12">
      <motion.path
        d="M 4 50 Q 30 48 45 38 T 70 20 T 96 6"
        fill="none"
        stroke="url(#marketTrendGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient id="marketTrendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-cetl-navy-700)" />
          <stop offset="100%" stopColor="var(--color-cetl-gold-light)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function StatCard({ stat }: { stat: MarketStat }) {
  return (
    <div className="w-[78vw] sm:w-auto shrink-0 snap-start flex flex-col items-center text-center gap-3 bg-transparent rounded-2xl border-2 border-cetl-navy-800 p-6">
      {stat.kind === "ring" ? <RingChart value={parseInt(stat.value, 10) || 0} /> : <TrendBadge />}
      <span className="font-display text-5xl sm:text-6xl font-extrabold cetl-gold-text leading-none">{stat.value}</span>
      <p className="text-cetl-text text-sm leading-snug">{stat.label}</p>
      <p className="text-cetl-text-muted/70 text-[10px] tracking-wide leading-snug mt-auto pt-3 border-t border-cetl-border w-full">
        {stat.source}
      </p>
    </div>
  );
}

export function MarketStatsSection() {
  const { t } = useLanguage();
  const ui = t.UI.marketStats;

  if (!t.MARKET_STATS || t.MARKET_STATS.length === 0) return null;

  return (
    <section id="market-overview" className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-5">
            {ui.headline}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{ui.intro}</p>
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto snap-x snap-mandatory pt-3 pb-4 px-1 -mx-1 -mt-3 sm:overflow-visible sm:pt-0 sm:pb-0 sm:px-0 sm:mx-0 sm:mt-0 [overflow-anchor:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {t.MARKET_STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
