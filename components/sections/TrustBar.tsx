"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="relative border-y border-cetl-border/40 bg-cetl-surface/60 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Label */}
        <p className="text-cetl-text-muted text-[10px] font-semibold tracking-[0.3em] uppercase">
          In Partnerschaft mit führenden Institutionen
        </p>

        {/* Logos */}
        <div className="flex items-center gap-12 sm:gap-16 flex-wrap justify-center">
          {t.PARTNERS.map((partner) => (
            <div key={partner.name} className="group flex flex-col items-center gap-2">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.logoWidth ?? 120}
                height={partner.logoHeight ?? 48}
                style={{
                  maxWidth: partner.logoWidth ?? 120,
                  maxHeight: 52,
                  width: "auto",
                  height: "auto",
                }}
                className="object-contain opacity-55 hover:opacity-90 brightness-0 transition-opacity duration-300"
                unoptimized
              />
              <span className="text-cetl-text-muted/60 group-hover:text-cetl-text-muted text-[8px] tracking-[0.2em] uppercase font-medium transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
