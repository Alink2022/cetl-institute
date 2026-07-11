"use client";

import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

export function InsightsSection() {
  const { t } = useLanguage();
  const ui = t.UI.insights;

  return (
    <section className="py-24 bg-cetl-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-[20%] w-[500px] h-[400px] rounded-full bg-cetl-violet/[0.06] blur-[140px]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-cetl-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">{ui.label}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cetl-text mb-3">{ui.title}</h2>
            <p className="text-cetl-text-muted text-sm max-w-xl">{ui.subtitle}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.INSIGHTS.map((item, i) => (
            <article
              key={i}
              className="group bg-cetl-surface border border-cetl-border rounded-sm overflow-hidden hover:border-cetl-gold/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              {/* Tag bar */}
              <div className="h-1 bg-gradient-to-r from-cetl-gold/60 to-cetl-gold-light/30" />

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
                    {ui.cta} →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
