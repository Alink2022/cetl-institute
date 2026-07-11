"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="relative border-y border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent py-6 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        {/* Label */}
        <div className="flex flex-col gap-0.5 shrink-0 text-center sm:text-left">
          <span className="text-cetl-gold/50 text-[8px] font-semibold tracking-[0.35em] uppercase">
            In Partnerschaft mit
          </span>
          <span className="text-white/30 text-[9px] tracking-[0.15em]">
            führenden Institutionen
          </span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent shrink-0" />

        {/* Logos */}
        <div className="flex items-center gap-8 sm:gap-10 flex-wrap justify-center sm:justify-start">
          {t.PARTNERS.map((partner) => (
            <div key={partner.name} className="group flex flex-col items-center gap-1">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.logoWidth ?? 80}
                height={partner.logoHeight ?? 28}
                style={{
                  maxWidth: Math.min((partner.logoWidth ?? 80) * 0.6, 90),
                  maxHeight: 26,
                  width: "auto",
                  height: "auto",
                }}
                className="object-contain opacity-25 hover:opacity-60 brightness-0 invert transition-opacity duration-300"
                unoptimized
              />
              <span className="text-white/20 group-hover:text-white/40 text-[7px] tracking-[0.2em] uppercase font-medium transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
