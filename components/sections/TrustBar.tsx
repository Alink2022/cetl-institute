"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="relative border-t border-cetl-border/40 bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {t.PARTNER_GROUPS.map((group) => (
          <div key={group.label} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="text-cetl-text-muted text-[10px] font-semibold tracking-[0.2em] uppercase shrink-0 sm:w-40">
              {group.label}
            </span>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {group.partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center h-6 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  title={partner.name}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.logoWidth ?? 90}
                    height={partner.logoHeight ?? 24}
                    style={{ width: "auto", height: "auto", maxWidth: 84, maxHeight: 22 }}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
