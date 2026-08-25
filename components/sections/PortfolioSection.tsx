"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function PortfolioSection() {
  const { t } = useLanguage();
  const ui = t.UI.portfolio;

  if (!t.PORTFOLIO_PRODUCTS || t.PORTFOLIO_PRODUCTS.length === 0) return null;

  return (
    <section id="portfolio" className="py-14 lg:py-36 bg-cetl-warm-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-500/40 to-transparent" />
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-5">
            {ui.headline.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 ? <br /> : null}</span>
            ))}
          </h2>
          <p className="text-cetl-muted text-lg leading-relaxed">{ui.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.PORTFOLIO_PRODUCTS.map((product) => (
            <div
              key={product.number}
              className="relative flex flex-col bg-white rounded-2xl border border-cetl-border p-8 cetl-card-shadow hover:border-cetl-gold-400/50 transition-colors duration-300"
            >
              <div className="absolute top-6 right-8 font-display text-7xl font-bold text-cetl-gold-500/[0.06] leading-none select-none">
                {product.number}
              </div>
              <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                {product.accentLine}
              </p>
              <h3 className="font-display text-xl font-bold text-cetl-text mb-3">{product.title}</h3>
              <p className="text-cetl-muted text-sm leading-relaxed mb-6">{product.description}</p>
              <ul className="flex flex-col gap-2 mb-8">
                {product.capabilities.slice(0, 4).map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-sm text-cetl-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-cetl-gold-500 mt-1.5 shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-cetl-border flex items-center justify-between">
                <span className="text-xs text-cetl-muted font-medium">{product.outcomeLabel}</span>
                <a
                  href={product.ctaHref}
                  className="text-cetl-navy-700 font-semibold text-sm hover:text-cetl-gold-700 transition-colors flex items-center gap-1"
                >
                  {product.cta}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
