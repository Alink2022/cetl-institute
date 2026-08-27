"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function TechQuoteSection() {
  const { t } = useLanguage();
  const ui = t.UI.techQuote;

  return (
    <section className="relative py-16 lg:py-24 cetl-navy-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-cetl-gold-700/[0.08] blur-[140px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400/30 to-transparent" />

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="font-display text-7xl leading-none select-none mb-2"
            aria-hidden="true"
            style={{
              background: "linear-gradient(135deg, var(--color-cetl-gold), var(--color-cetl-gold-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.7,
            }}
          >
            &ldquo;
          </div>
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight -mt-6">
            {ui.quote}
          </blockquote>
          <p className="text-white/60 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">{ui.body}</p>
        </div>
      </Container>
    </section>
  );
}
