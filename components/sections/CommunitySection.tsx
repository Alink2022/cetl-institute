"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function CommunitySection() {
  const { t } = useLanguage();
  const ui = t.UI.community;
  const c = t.COMMUNITY;

  return (
    <section id="community" className="py-24 bg-cetl-surface/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[500px] rounded-full bg-cetl-violet/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-cetl-gold/[0.04] blur-[100px]" />
      </div>

      <Container className="relative">
        <p className="text-cetl-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">{ui.label}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cetl-text mb-4 max-w-2xl leading-[1.1]">
          {ui.title}
        </h2>
        <p className="text-cetl-text-muted text-base leading-relaxed mb-10 max-w-xl">{ui.subtitle}</p>

        {/* Partner pills */}
        <div className="flex flex-wrap gap-2 mb-14">
          {c.pills.map((pill) => (
            <span
              key={pill}
              className="px-4 py-1.5 rounded-full border border-cetl-border text-cetl-text-muted text-xs font-medium tracking-wide hover:border-cetl-gold/40 hover:text-cetl-gold transition-colors duration-200 cursor-default"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* 3 feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {c.features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-cetl-border bg-cetl-darker flex flex-col gap-3"
            >
              <h3 className="text-cetl-gold font-semibold text-sm">{f.title}</h3>
              <p className="text-cetl-text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="border-t border-cetl-border pt-10 border-b pb-10">
          <p className="text-cetl-text text-xl md:text-2xl font-display font-medium italic text-center max-w-2xl mx-auto leading-relaxed">
            &ldquo;{c.quote}&rdquo;
          </p>
          <p className="text-cetl-gold text-xs tracking-[0.25em] uppercase font-semibold text-center mt-4">
            {c.quoteAttribution}
          </p>
        </div>
      </Container>
    </section>
  );
}
