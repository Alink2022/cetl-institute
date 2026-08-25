"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="relative border-t border-cetl-border/40 bg-cetl-surface py-14">
      <Container className="flex flex-col gap-8">
        <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase text-center">
          {t.UI.trustBar.label}
        </p>
        <div className="flex flex-col gap-6">
          {t.PARTNER_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <span className="text-cetl-text-muted text-[10px] font-semibold tracking-[0.2em] uppercase shrink-0 sm:w-40">
                {group.label}
              </span>
              <div className="flex flex-wrap items-center gap-3">
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
