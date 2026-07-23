"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function PackagesSection() {
  const { t } = useLanguage();
  const ui = t.UI.packages;

  if (!t.PACKAGES || t.PACKAGES.length === 0) return null;

  return (
    <section id="packages" className="py-24 lg:py-36 cetl-navy-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cetl-gold-700/[0.04] blur-[120px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400/30 to-transparent" />

      <Container className="relative">
        <div className="max-w-3xl mb-14">
          <p className="text-cetl-gold-400/80 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {ui.headline}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">{ui.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.PACKAGES.map((pkg) => (
            <div
              key={pkg.number}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                pkg.featured
                  ? "bg-cetl-navy-700 border-cetl-gold-400/40 shadow-[0_0_40px_-8px_color-mix(in_srgb,var(--color-cetl-gold-400)_20%,transparent)]"
                  : "bg-cetl-navy-800/60 border-cetl-navy-600/60 hover:border-cetl-gold-400/30"
              }`}
            >
              {pkg.label && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-cetl-gold-500 text-cetl-navy-900 text-xs font-bold tracking-widest uppercase rounded-full">
                  {pkg.label}
                </span>
              )}
              <p className="text-cetl-gold-400/70 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                Package {pkg.number}
              </p>
              <h3 className="font-display text-xl font-bold text-white mb-1">{pkg.name}</h3>
              <p className="text-white/50 text-sm mb-5">{pkg.subtitle}</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{pkg.description}</p>

              <ul className="flex flex-col gap-2 mb-8">
                {pkg.includes.slice(0, 5).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5" aria-hidden>
                      <circle cx="7" cy="7" r="6" stroke="var(--color-cetl-gold-400)" strokeWidth="1" opacity="0.5" />
                      <path d="M4 7l2 2 4-4" stroke="var(--color-cetl-gold-400)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t border-white/10">
                <div className="mb-4">
                  <p className="font-display text-2xl font-bold text-white">{pkg.price}</p>
                  {pkg.priceNote && <p className="text-white/40 text-xs mt-0.5">{pkg.priceNote}</p>}
                </div>
                <a
                  href={pkg.ctaHref}
                  className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 ${
                    pkg.featured
                      ? "bg-cetl-gold-500 text-cetl-navy-900 hover:bg-cetl-gold-400"
                      : "border border-cetl-gold-400/40 text-cetl-gold-300 hover:bg-cetl-gold-400/10"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Callout note */}
        <p className="mt-8 text-center text-white/40 text-sm italic">{ui.callout}</p>
      </Container>
    </section>
  );
}
