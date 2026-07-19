"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="relative border-y border-cetl-border/40 bg-cetl-surface/60 py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Label */}
        <p className="text-cetl-text-muted text-[10px] font-semibold tracking-[0.3em] uppercase">
          {t.UI.trustBar.label}
        </p>

        {/* Logos */}
        <div className="flex items-stretch gap-6 sm:gap-8 flex-wrap justify-center">
          {t.PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-2xl bg-white border border-cetl-border shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.14)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.logoWidth ?? 160}
                height={partner.logoHeight ?? 60}
                style={{
                  maxWidth: partner.logoWidth ?? 160,
                  maxHeight: 64,
                  width: "auto",
                  height: "auto",
                }}
                className="object-contain"
                unoptimized
              />
              <span className="text-cetl-text-muted text-[9px] tracking-[0.18em] uppercase font-semibold">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
