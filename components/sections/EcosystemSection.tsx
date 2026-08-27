"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function EcosystemSection() {
  const { t } = useLanguage();
  const ecosystem = t.UI.ecosystem;

  return (
    <section id="ecosystem" className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <div className="max-w-5xl mx-auto mb-14 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            {ecosystem.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-6">
            {ecosystem.headline}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{ecosystem.intro}</p>
        </div>

        {/* Three-part ecosystem: academic / community / industry partners, grouped natively */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {t.PARTNER_GROUPS.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl overflow-hidden border border-cetl-border bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.12)]"
            >
              <div className="bg-cetl-navy-900 py-4 px-4 text-center">
                <h3 className="font-display text-white text-sm font-bold tracking-[0.1em] uppercase">
                  {group.label}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 p-5">
                {group.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-center h-16 px-3 rounded-lg bg-cetl-surface border border-cetl-border"
                    title={partner.name}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.logoWidth ?? 120}
                      height={partner.logoHeight ?? 36}
                      style={{ width: "auto", height: "auto", maxWidth: "80%", maxHeight: 34 }}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {ecosystem.bottomBand && ecosystem.bottomBand.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-14 pt-6 border-t border-cetl-border max-w-3xl mx-auto">
            {ecosystem.bottomBand.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-cetl-gold/30 bg-cetl-gold/5 text-cetl-gold-deep text-xs font-semibold tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
