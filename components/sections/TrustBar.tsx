"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="relative border-y border-cetl-border/40 bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Label */}
        <p className="text-cetl-text-muted text-xs font-semibold tracking-[0.3em] uppercase">
          In Partnerschaft mit führenden Institutionen
        </p>

        {/* Logos */}
        <div className="flex items-stretch gap-6 sm:gap-10 flex-wrap justify-center">
          {t.PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-2xl bg-white border border-cetl-border shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_-8px_rgba(0,0,0,0.14)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-24">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.logoWidth ?? 200}
                  height={partner.logoHeight ?? 80}
                  style={{
                    width: partner.logoWidth ?? 200,
                    height: partner.logoHeight ?? 80,
                    maxWidth: "100%",
                    maxHeight: 96,
                  }}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-cetl-text-muted text-[11px] tracking-[0.18em] uppercase font-semibold">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
