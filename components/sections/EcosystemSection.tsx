"use client";

import { useRef } from "react";
import Image from "next/image";
import { Target, Laptop, MessageCircle, Eye, Lightbulb, TrendingUp, Landmark, UsersRound, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { ExpertPoolIconName } from "@/lib/content-types";

const EXPERT_ICON_MAP: Record<ExpertPoolIconName, React.ElementType> = {
  Target, Laptop, MessageCircle, Eye, Lightbulb, TrendingUp, Landmark, UsersRound,
};

export function EcosystemSection() {
  const { t } = useLanguage();
  const ecosystem = t.UI.ecosystem;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

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
              className="flex flex-col rounded-2xl overflow-hidden border border-cetl-border bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.12)]"
            >
              <div className="bg-cetl-navy-900 py-4 px-4 text-center">
                <h3 className="font-display text-white text-sm font-bold tracking-[0.1em] uppercase">
                  {group.label}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-x-3 gap-y-7 p-6 flex-1">
                {group.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-center h-11"
                    title={partner.name}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.logoWidth ?? 140}
                      height={partner.logoHeight ?? 44}
                      style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: 40 }}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expert pool — one long navigable bar spanning the width of the three blocks above */}
        {t.EXPERT_POOL && t.EXPERT_POOL.length > 0 && (
          <div className="relative max-w-6xl mx-auto mt-6 sm:mt-6 rounded-2xl overflow-hidden border border-cetl-border bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.12)]">
            <div className="bg-cetl-navy-900 py-4 px-4 text-center">
              <h3 className="font-display text-white text-sm font-bold tracking-[0.1em] uppercase">
                {ecosystem.expertPoolHeading}
              </h3>
            </div>

            <div className="relative">
              <div
                ref={scrollRef}
                className="flex divide-x divide-cetl-border overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {t.EXPERT_POOL.map((expert) => {
                  const Icon = EXPERT_ICON_MAP[expert.icon];
                  return (
                    <div
                      key={expert.title}
                      className="snap-start shrink-0 w-[168px] flex flex-col gap-1.5 px-4 py-4"
                    >
                      <Icon className="w-4 h-4 text-cetl-gold-700 shrink-0" strokeWidth={1.75} />
                      <h4 className="font-display text-cetl-navy-900 font-bold text-xs leading-snug mt-0.5">
                        {expert.title}
                      </h4>
                      <p className="text-cetl-text-muted text-[11px] leading-snug line-clamp-3">{expert.desc}</p>
                      <p className="text-cetl-gold-700 text-[10px] font-medium mt-auto pt-1 truncate">
                        {expert.tags.join(" · ")}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => scrollByAmount(-1)}
                aria-label="Previous"
                className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-3 w-8 h-8 rounded-full bg-white border border-cetl-border items-center justify-center text-cetl-text-muted hover:text-cetl-navy-900 hover:border-cetl-navy-900/40 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.15)] transition-colors duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(1)}
                aria-label="Next"
                className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-3 w-8 h-8 rounded-full bg-white border border-cetl-border items-center justify-center text-cetl-text-muted hover:text-cetl-navy-900 hover:border-cetl-navy-900/40 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.15)] transition-colors duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

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
