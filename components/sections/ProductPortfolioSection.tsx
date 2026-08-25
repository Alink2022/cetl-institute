"use client";

import {
  GraduationCap, Users, Target, BookOpen, ShieldCheck, CheckCircle2,
  User, Star, BarChart2, Layers, Share2, Settings2, Handshake,
  UsersRound, Lightbulb, Rocket, ClipboardCheck, Landmark, Briefcase,
  FileText, Map, Calendar, Search, Scale, TrendingUp, Euro, Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { ProductCard, ProductIconName } from "@/lib/content-types";

const ICON_MAP: Record<ProductIconName, React.ElementType> = {
  GraduationCap, Users, Target, BookOpen, ShieldCheck, CheckCircle2,
  User, Star, BarChart2, Layers, Share2, Settings2, Handshake,
  UsersRound, Lightbulb, Rocket, ClipboardCheck, Landmark, Briefcase,
  FileText, Map, Calendar, Search, Scale, TrendingUp, Euro, Clock,
};

function ProductCardView({ card }: { card: ProductCard }) {
  return (
    <div
      className={`relative flex flex-col rounded-xl bg-white transition-all duration-300 w-[82vw] sm:w-auto shrink-0 snap-start ${
        card.featured
          ? "border-2 border-cetl-gold-400 shadow-[0_0_30px_-10px_color-mix(in_srgb,var(--color-cetl-gold-400)_30%,transparent)]"
          : "border border-cetl-gold-400/20"
      }`}
    >
      {card.ribbon && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cetl-gold-500 text-cetl-navy-900 text-[9px] font-bold tracking-wide uppercase whitespace-nowrap">
          <Star className="w-2.5 h-2.5 fill-current" strokeWidth={0} />
          {card.ribbon}
        </span>
      )}

      {/* Header */}
      <div className="bg-cetl-navy-800 rounded-t-[10px] px-4 pt-6 pb-3 flex flex-col gap-1.5">
        <div className="w-7 h-7 rounded-full border-2 border-cetl-gold-400 flex items-center justify-center shrink-0">
          <span className="font-display text-xs font-bold text-cetl-gold-400">{card.number}</span>
        </div>
        <h3 className="font-display text-sm font-bold text-white uppercase leading-snug">
          {card.titleLine1}
          {card.titleLine2 && (
            <>
              <br />
              {card.titleLine2}
            </>
          )}
        </h3>
        <p className="text-white/50 text-[11px] leading-snug">{card.tagline}</p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <p className="text-cetl-text-muted text-xs leading-snug">{card.description}</p>

        <div className="flex items-center gap-2">
          <span className="h-px flex-1 bg-cetl-border" />
          <span className="text-cetl-gold-700 text-[9px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
            Includes
          </span>
          <span className="h-px flex-1 bg-cetl-border" />
        </div>

        <div className="flex flex-col gap-2">
          {card.includes.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-cetl-navy-800 flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3 text-cetl-gold-400" strokeWidth={1.75} />
                </div>
                <p className="text-cetl-text text-xs leading-snug">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-auto pt-2">
          <div className="flex items-stretch divide-x divide-cetl-gold/30 rounded-md border border-cetl-gold/30 bg-cetl-gold/5 overflow-hidden">
            {card.footer.map((item, i) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <div key={i} className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 text-center">
                  <Icon className="w-3.5 h-3.5 text-cetl-gold-700 shrink-0" strokeWidth={1.75} />
                  <span className="text-cetl-text text-[10px] font-semibold leading-snug">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPortfolioSection() {
  const { t } = useLanguage();
  const ui = t.UI.productPortfolio;

  if (!t.PRODUCT_GROUPS || t.PRODUCT_GROUPS.length === 0) return null;

  return (
    <section id="products" className="relative py-14 lg:py-44 cetl-navy-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-cetl-gold-700/[0.05] blur-[130px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400/30 to-transparent" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-cetl-gold-400/80 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {ui.headline}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">{ui.intro}</p>
        </div>

        <div className="flex flex-col gap-14">
          {t.PRODUCT_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col gap-6">
              <h3 className="font-display text-lg md:text-xl font-bold text-white px-1">{group.label}</h3>
              <div className="flex sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory pt-3 pb-4 px-1 -mx-1 -mt-3 sm:overflow-visible sm:pt-0 sm:pb-0 sm:px-0 sm:mx-0 sm:mt-0 [overflow-anchor:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {group.cards.map((card) => (
                  <ProductCardView key={card.number + card.titleLine1} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
