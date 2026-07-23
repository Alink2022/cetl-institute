"use client";

import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

export function InstStatsBar() {
  const { t } = useLanguage();

  return (
    <div className="border-y border-cetl-border/60 bg-cetl-surface/40">
      <Container>
        <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-px bg-cetl-border/30">
          {t.INST_STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-cetl-dark px-6 py-5 flex flex-col gap-1 group hover:bg-cetl-surface transition-colors duration-300"
            >
              <span
                className="font-display text-2xl md:text-3xl font-bold group-hover:text-cetl-text"
                style={{
                  background: "linear-gradient(100deg, var(--color-cetl-gold), var(--color-cetl-gold-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span className="text-white group-hover:text-cetl-text text-sm font-semibold tracking-wide transition-colors duration-300">{stat.label}</span>
              <span className="text-white/60 group-hover:text-cetl-text-muted text-xs leading-relaxed transition-colors duration-300">{stat.sub}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
