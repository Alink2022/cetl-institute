"use client";

import {
  Landmark, Factory, Users, GraduationCap, Target, TrendingUp,
  BookOpen, User, Search, ClipboardCheck, UsersRound, Flag, ShieldCheck,
  ChevronRight, ArrowDown, Star, Settings2, Lightbulb, CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { MethodologyIconName, ProductIconName } from "@/lib/content-types";

const ICON_MAP: Record<MethodologyIconName, React.ElementType> = {
  Landmark, Factory, Users, GraduationCap, Target, TrendingUp,
  BookOpen, User, Search, ClipboardCheck, UsersRound, Flag, ShieldCheck,
};

const CAPABILITY_ICON_MAP: Partial<Record<ProductIconName, React.ElementType>> = {
  GraduationCap, BookOpen, Settings2, Lightbulb,
};

const MODULE_BG = ["bg-cetl-navy-900", "bg-cetl-navy-800", "bg-cetl-navy-600"];

export function MethodologySection() {
  const { t } = useLanguage();
  const m = t.ELAAS_METHODOLOGY;
  if (!m) return null;

  return (
    <section id="about" className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <div className="max-w-5xl mx-auto mb-6 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{m.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-6">
            {m.headline}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{m.intro}</p>
        </div>

        {/* Fixed-proportion diagram: behaves like a single image block, never reflows taller on mobile — it scrolls horizontally instead. */}
        <div className="max-w-6xl mx-auto mt-8 rounded-2xl bg-white border border-cetl-border shadow-[0_4px_28px_-10px_rgba(0,0,0,0.15)] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="min-w-[1040px] p-7 lg:p-12">
            {/* Pillars */}
            <div className="grid grid-cols-3 gap-6">
              {m.pillars.map((pillar) => {
                const Icon = ICON_MAP[pillar.icon];
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 rounded-xl border border-cetl-gold-400/50 bg-white p-6"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-cetl-gold-400 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-cetl-navy-800" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-cetl-navy-900 font-bold text-lg leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-cetl-text-muted text-sm leading-snug mt-1">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connector: 3 pillars merge into a single arrow down */}
            <div className="relative h-10" aria-hidden>
              <div className="absolute top-0 bottom-1/2" style={{ left: "16.6667%" }}>
                <div className="w-px h-full bg-cetl-border" />
              </div>
              <div className="absolute top-0 bottom-1/2" style={{ left: "50%" }}>
                <div className="w-px h-full bg-cetl-border" />
              </div>
              <div className="absolute top-0 bottom-1/2" style={{ left: "83.3333%" }}>
                <div className="w-px h-full bg-cetl-border" />
              </div>
              <div
                className="absolute top-1/2 h-px bg-cetl-border"
                style={{ left: "16.6667%", right: "16.6667%" }}
              />
              <div className="absolute top-1/2 bottom-0 -translate-x-1/2" style={{ left: "50%" }}>
                <div className="w-px h-full bg-cetl-border" />
              </div>
              <ArrowDown className="absolute -translate-x-1/2 text-cetl-border" style={{ left: "50%", bottom: -6 }} size={16} strokeWidth={2.5} />
            </div>

            {/* Module bar */}
            <div className="relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cetl-gold-500 text-cetl-navy-900 text-[10px] font-bold tracking-wide uppercase whitespace-nowrap shadow-[0_2px_8px_-2px_rgba(0,0,0,0.3)]">
                <Star className="w-2.5 h-2.5 fill-current" strokeWidth={0} />
                {m.customizationLabel}
              </span>
              <div className="flex w-full rounded-lg overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.2)] ring-2 ring-cetl-gold-400/60 ring-offset-2 ring-offset-white">
                {m.modules.map((mod, i) => {
                  const Icon = ICON_MAP[mod.icon];
                  return (
                    <div
                      key={mod.title}
                      className={`flex-1 flex items-center justify-center gap-2.5 py-4 px-6 text-white ${MODULE_BG[i]}`}
                      style={{
                        clipPath:
                          i === 0
                            ? "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)"
                            : i === m.modules.length - 1
                              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 16px 50%)"
                              : "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)",
                        marginLeft: i === 0 ? 0 : -16,
                      }}
                    >
                      <Icon className="w-6 h-6 text-cetl-gold-400 shrink-0" strokeWidth={1.75} />
                      <span className="font-display font-bold text-base text-center leading-tight whitespace-nowrap">
                        {mod.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-cetl-text-muted text-sm italic text-center mt-6 mb-9">{m.embeddedNote}</p>

            {/* Steps */}
            <div className="rounded-2xl border-2 border-dashed border-cetl-gold-400 px-9 py-9">
              <div className="flex justify-between items-start">
                {m.steps.map((step, i) => {
                  const Icon = ICON_MAP[step.icon];
                  return (
                    <div key={step.n} className="flex items-start">
                      <div className="flex flex-col items-center gap-2.5 text-center w-[142px]">
                        <div className="w-16 h-16 rounded-full bg-white border-[3px] border-cetl-gold-400 flex items-center justify-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.18)]">
                          <Icon className="w-[46%] h-[46%] text-cetl-navy-800" strokeWidth={2} />
                        </div>
                        <span className="font-display text-cetl-navy-900 text-sm font-bold leading-tight">
                          {step.title}
                        </span>
                        <p className="text-cetl-text-muted text-xs leading-tight">{step.desc}</p>
                      </div>
                      {i < m.steps.length - 1 && (
                        <ChevronRight className="text-cetl-gold-400 shrink-0 mt-6" size={22} strokeWidth={2.5} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Outcomes */}
            <div className="grid grid-cols-4 gap-5 mt-11">
              {m.outcomes.map((outcome) => {
                const Icon = ICON_MAP[outcome.icon];
                return (
                  <div key={outcome.title} className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-cetl-gold-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-cetl-navy-800" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-display text-cetl-navy-900 font-bold text-base leading-snug">
                        {outcome.title}
                      </h4>
                      <p className="text-cetl-text-muted text-xs leading-snug mt-0.5">{outcome.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Capabilities */}
            {t.EXECUTIONAL_SERVICES && t.EXECUTIONAL_SERVICES.length > 0 && (
              <div className="mt-11 pt-9 border-t border-cetl-border">
                <h3 className="font-display text-cetl-navy-900 text-xl font-bold text-center mb-7">
                  {m.capabilitiesHeading}
                </h3>
                <div className="grid grid-cols-4 gap-5">
                  {t.EXECUTIONAL_SERVICES.map((service) => {
                    const Icon = CAPABILITY_ICON_MAP[service.icon] ?? GraduationCap;
                    return (
                      <div
                        key={service.number + service.title}
                        className="flex flex-col gap-4 rounded-xl border border-cetl-border p-5"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-full bg-cetl-gold-200/50 flex items-center justify-center shrink-0">
                            <Icon className="w-7 h-7 text-cetl-gold-700" strokeWidth={1.5} />
                          </div>
                          <h4 className="font-display text-cetl-navy-900 font-bold text-sm leading-snug">
                            {service.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-2">
                          {service.items.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cetl-gold-500 shrink-0" strokeWidth={2} />
                              <span className="text-cetl-text text-xs leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
