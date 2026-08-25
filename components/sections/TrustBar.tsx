"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="relative border-t border-cetl-border/40 bg-cetl-surface py-14 lg:py-20">
      <Container className="flex flex-col gap-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            {t.UI.trustBar.eyebrow}
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-cetl-text leading-tight">
            {t.UI.trustBar.headline}
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          {t.PARTNER_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col items-center gap-4">
              <span className="text-cetl-gold-deep text-sm font-bold tracking-[0.15em] uppercase">
                {group.label}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {group.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-center h-14 px-5 rounded-lg bg-white border border-cetl-border shadow-[0_1px_6px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                    title={partner.name}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.logoWidth ?? 130}
                      height={partner.logoHeight ?? 38}
                      style={{ width: "auto", height: "auto", maxWidth: 120, maxHeight: 34 }}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
