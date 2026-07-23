"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function ElaasSection() {
  const { t } = useLanguage();
  const ui = t.UI.elaas;

  return (
    <section id="elaas" className="py-24 lg:py-36 bg-cetl-ivory relative overflow-hidden">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-500/50 to-transparent" />

      <Container>
        {/* Eyebrow + headline */}
        <div className="max-w-3xl mb-16">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-6">
            {ui.headline}
          </h2>
          <p className="text-cetl-muted text-lg leading-relaxed">{ui.body}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: 5-step process */}
          <div className="flex flex-col gap-3">
            {t.METHODOLOGY_STEPS.map((step, i) => (
              <div
                key={step.n}
                className="flex items-start gap-5 p-5 rounded-xl border border-cetl-border bg-cetl-warm-white cetl-card-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-cetl-navy-700 flex items-center justify-center shrink-0">
                  <span className="font-display text-xs font-bold text-cetl-gold-400">{step.n}</span>
                </div>
                <div>
                  <p className="font-display font-bold text-cetl-text text-sm tracking-wide mb-1">{step.title}</p>
                  <p className="text-cetl-muted text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < t.METHODOLOGY_STEPS.length - 1 && (
                  <div className="absolute left-[29px] mt-10 w-px h-3 bg-cetl-gold-400/30 hidden" aria-hidden />
                )}
              </div>
            ))}
          </div>

          {/* Right: Callout box */}
          <div className="flex flex-col gap-6">
            <div className="bg-cetl-navy-900 text-white rounded-2xl p-8">
              <p className="font-display text-cetl-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Executional Learning Days
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-6">{ui.callout}</p>
              <ul className="flex flex-col gap-2">
                {ui.calloutItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-cetl-gold-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Transformation logic */}
            <div className="bg-cetl-warm-white border border-cetl-border rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-cetl-text text-xs font-semibold tracking-widest uppercase">The ELaaS Transformation Logic</p>
              <div className="flex items-center gap-2 flex-wrap">
                {t.UI.outcomes.items.map((item, i) => (
                  <div key={item.title} className="flex items-center gap-2">
                    <div className="px-4 py-2 rounded-full border border-cetl-gold-500/40 bg-cetl-ivory">
                      <p className="font-display font-bold text-cetl-text text-sm">{item.title}</p>
                    </div>
                    {i < t.UI.outcomes.items.length - 1 && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-cetl-gold-500" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cetl-navy-700 font-semibold text-sm hover:text-cetl-gold-700 transition-colors"
            >
              {ui.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
