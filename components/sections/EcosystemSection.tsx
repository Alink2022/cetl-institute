"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/lib/i18n";

export function EcosystemSection() {
  const { t } = useLanguage();
  const ecosystem = t.UI.ecosystem;

  return (
    <section className="relative py-14 lg:py-44 bg-cetl-warm-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative flex flex-col items-center gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center max-w-3xl">
          <Badge variant="gold">{ecosystem.eyebrow}</Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-cetl-text">
            {ecosystem.headline}
            {ecosystem.headlineSuffix && (
              <span className="font-normal text-cetl-text-muted"> {ecosystem.headlineSuffix}</span>
            )}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{ecosystem.intro}</p>
        </div>

        {/* Diagram + Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl font-bold text-cetl-text">{ecosystem.fundamentLabel}</h3>
            <Image
              src="/elaas/cetl-ecosystem.png"
              alt={ecosystem.fundamentLabel}
              width={1200}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl font-bold text-cetl-text">{ecosystem.servicesLabel}</h3>
            <Image
              src="/elaas/cetl-services.png"
              alt={ecosystem.servicesLabel}
              width={1200}
              height={1200}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {ecosystem.bottomBand && ecosystem.bottomBand.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3">
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
