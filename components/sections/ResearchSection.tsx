"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { ResearchStat } from "@/lib/content-types";

function RingChart({ value }: { value: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24 -rotate-90">
      <circle cx="50" cy="50" r={r} fill="none" stroke="var(--color-cetl-border)" strokeWidth="8" />
      <motion.circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-cetl-gold-light)" />
          <stop offset="100%" stopColor="var(--color-cetl-gold-400)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GaugeChart({ value }: { value: number }) {
  const r = 40;
  const c = Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg viewBox="0 0 100 55" className="w-24 h-14">
      <path d={`M 10 50 A ${r} ${r} 0 0 1 90 50`} fill="none" stroke="var(--color-cetl-border)" strokeWidth="8" />
      <motion.path
        d={`M 10 50 A ${r} ${r} 0 0 1 90 50`}
        fill="none"
        stroke="url(#gaugeGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-cetl-gold)" />
          <stop offset="100%" stopColor="var(--color-cetl-error)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BarsChart({ value }: { value: number }) {
  const bars = [{ v: value, hi: true }, { v: 100 - value, hi: false }];
  return (
    <div className="flex items-end gap-3 h-24 w-24">
      {bars.map((b, i) => (
        <motion.div
          key={i}
          className={`flex-1 rounded-t-md ${b.hi ? "bg-gradient-to-t from-cetl-gold to-cetl-gold-light" : "bg-cetl-border"}`}
          initial={{ height: "4%" }}
          whileInView={{ height: `${Math.max(b.v, 6)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

function TrendChart() {
  return (
    <svg viewBox="0 0 100 60" className="w-24 h-14">
      <motion.path
        d="M 4 50 Q 30 48 45 38 T 70 20 T 96 6"
        fill="none"
        stroke="url(#trendGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-cetl-navy-700)" />
          <stop offset="100%" stopColor="var(--color-cetl-gold-light)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function StatVisual({ stat }: { stat: ResearchStat }) {
  const numeric = parseInt(stat.value.replace(/[^\d]/g, ""), 10) || 50;
  switch (stat.kind) {
    case "ring":
      return <RingChart value={numeric} />;
    case "gauge":
      return <GaugeChart value={numeric} />;
    case "bars":
      return <BarsChart value={numeric} />;
    case "trend":
      return <TrendChart />;
  }
}

export function ResearchSection() {
  const { t, lang } = useLanguage();
  const research = t.UI.research;

  return (
    <section id="research" className="relative py-32 lg:py-44 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <SectionHeader
          label={research.label}
          title={research.title}
          subtitle={research.subtitle}
          className="mb-16"
        />

        {/* Key visual: Forschung trifft Praxis */}
        <div className="relative h-48 md:h-72 rounded-2xl overflow-hidden ring-1 ring-cetl-border mb-10">
          <Image
            src="/i.webp"
            alt="Wissenschaftliche Publikationen und Notizbuch unter Messinglampe neben einem Tablet mit goldenem Netzwerk-Graph"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cetl-surface/60 to-transparent" />
        </div>

        {/* Stat visualizations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {t.RESEARCH_STATS.map((stat) => (
            <div
              key={stat.id}
              className="gradient-edge flex flex-col items-center text-center gap-4 bg-cetl-dark rounded-2xl border border-cetl-border p-6"
            >
              <StatVisual stat={stat} />
              <span className="font-display text-3xl font-bold cetl-gold-text">{stat.value}</span>
              <p className="text-white text-sm font-medium leading-snug">{stat.label}</p>
              <p className="text-white/60 text-xs leading-relaxed">{stat.detail}</p>
              <p className="text-white/40 text-xs tracking-wide uppercase mt-auto pt-2 border-t border-white/10 w-full">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        {/* Execution Gap horizontal bars */}
        <div className="gradient-edge bg-cetl-dark rounded-2xl border border-cetl-border p-8 lg:p-10 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
            <h3 className="font-display text-xl font-bold text-white">{t.EXECUTION_GAP.label}</h3>
            <p className="text-white/60 text-xs max-w-sm">{t.EXECUTION_GAP.detail}</p>
          </div>
          <div className="flex flex-col gap-5">
            {t.EXECUTION_GAP.rows.map((row, i) => (
              <div key={row.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">{row.label}</span>
                  <span className="text-white font-semibold">{row.value}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-cetl-surface overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cetl-gold via-cetl-gold-light to-cetl-gold-400"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${row.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.QUOTES.map((q) => (
            <div
              key={q.author}
              className="relative flex flex-col gap-4 bg-cetl-dark rounded-2xl border border-cetl-border p-7"
            >
              <span
                className="font-display text-6xl leading-none font-bold text-cetl-gold/[0.15] select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-white/80 text-sm leading-relaxed -mt-6">{q.quote}</p>
              {lang === "de" && (
                <p className="text-white/50 text-xs italic leading-relaxed">{q.translation}</p>
              )}
              <div className="pt-4 mt-auto border-t border-white/10">
                <p className="text-white font-semibold text-sm">{q.author}</p>
                <p className="text-white/50 text-xs">{q.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <a
            href={`mailto:${t.SITE.formEmail}`}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-cetl-gold text-cetl-darker font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              {research.cta}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cetl-gold-light to-cetl-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </Container>
    </section>
  );
}
