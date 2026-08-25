"use client";

import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

export function InstStatsBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-cetl-dark py-14">
      <Container>
        <div className="flex flex-wrap justify-center gap-6">
          {t.INST_STATS.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center gap-2 rounded-full w-44 h-44 shrink-0 px-5 py-5 bg-cetl-surface/60 border border-cetl-border/60 hover:border-cetl-gold-400/50 hover:bg-cetl-surface transition-all duration-300"
            >
              <span
                className="font-display text-xl md:text-2xl font-bold"
                style={{
                  background: "linear-gradient(100deg, var(--color-cetl-gold), var(--color-cetl-gold-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span className="text-white group-hover:text-cetl-text text-[11px] font-semibold tracking-wide leading-snug transition-colors duration-300">
                {stat.label}
              </span>
              <span className="text-white/50 group-hover:text-cetl-text-muted text-[10px] leading-snug line-clamp-3 transition-colors duration-300">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
