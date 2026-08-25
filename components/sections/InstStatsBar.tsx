"use client";

import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { boldElaas } from "@/components/ui/BoldElaas";

export function InstStatsBar() {
  const { t } = useLanguage();

  return (
    <div className="relative bg-cetl-dark py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-cetl-gold-700/[0.05] blur-[130px]" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {t.INST_STATS.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col gap-2 rounded-2xl border border-cetl-navy-600/60 bg-cetl-navy-800/60 hover:border-cetl-gold-400/40 p-6 transition-all duration-300"
            >
              <span
                className="font-display text-2xl font-bold leading-tight"
                style={{
                  background: "linear-gradient(100deg, var(--color-cetl-gold), var(--color-cetl-gold-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {boldElaas(stat.value)}
              </span>
              <span className="text-white text-xs font-semibold tracking-wide leading-snug">
                {boldElaas(stat.label)}
              </span>
              <span className="text-white/50 text-[11px] leading-relaxed">
                {boldElaas(stat.sub)}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
