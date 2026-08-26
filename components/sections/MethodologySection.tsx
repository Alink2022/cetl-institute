"use client";

import {
  Landmark, Factory, Users, GraduationCap, Target, TrendingUp,
  BookOpen, User, Search, ClipboardCheck, UsersRound, Flag, ShieldCheck,
  ChevronRight, ArrowDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { MethodologyIconName } from "@/lib/content-types";

const ICON_MAP: Record<MethodologyIconName, React.ElementType> = {
  Landmark, Factory, Users, GraduationCap, Target, TrendingUp,
  BookOpen, User, Search, ClipboardCheck, UsersRound, Flag, ShieldCheck,
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
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{m.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight">
            {m.headline}
          </h2>
        </div>

        {/* Fixed-proportion diagram: behaves like a single image block, never reflows taller on mobile — it scrolls horizontally instead. */}
        <div className="max-w-6xl mx-auto rounded-2xl bg-white border border-cetl-border shadow-[0_4px_28px_-10px_rgba(0,0,0,0.15)] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="min-w-[920px] p-6 lg:p-10">
            {/* Pillars */}
            <div className="grid grid-cols-3 gap-6">
              {m.pillars.map((pillar) => {
                const Icon = ICON_MAP[pillar.icon];
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 rounded-xl border border-cetl-gold-400/50 bg-white p-5"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-cetl-gold-400 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-cetl-navy-800" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-cetl-navy-900 font-bold text-base leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-cetl-text-muted text-xs leading-snug mt-1">{pillar.desc}</p>
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
              <ArrowDown className="absolute -translate-x-1/2 text-cetl-border" style={{ left: "50%", bottom: -6 }} size={14} strokeWidth={2.5} />
            </div>

            {/* Module bar */}
            <div className="flex w-full rounded-lg overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.2)]">
              {m.modules.map((mod, i) => {
                const Icon = ICON_MAP[mod.icon];
                return (
                  <div
                    key={mod.title}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 text-white ${MODULE_BG[i]}`}
                    style={{
                      clipPath:
                        i === 0
                          ? "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)"
                          : i === m.modules.length - 1
                            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 14px 50%)"
                            : "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)",
                      marginLeft: i === 0 ? 0 : -14,
                    }}
                  >
                    <Icon className="w-5 h-5 text-cetl-gold-400 shrink-0" strokeWidth={1.75} />
                    <span className="font-display font-bold text-sm text-center leading-tight whitespace-nowrap">
                      {mod.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-cetl-text-muted text-sm italic text-center mt-5 mb-8">{m.embeddedNote}</p>

            {/* Steps */}
            <div className="rounded-2xl border-2 border-dashed border-cetl-gold-400 px-8 py-8">
              <div className="flex justify-between items-start">
                {m.steps.map((step, i) => {
                  const Icon = ICON_MAP[step.icon];
                  return (
                    <div key={step.n} className="flex items-start">
                      <div className="flex flex-col items-center gap-2 text-center w-[126px]">
                        <div className="w-14 h-14 rounded-full bg-white border-[3px] border-cetl-gold-400 flex items-center justify-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.18)]">
                          <Icon className="w-[46%] h-[46%] text-cetl-navy-800" strokeWidth={2} />
                        </div>
                        <span className="font-display text-cetl-navy-900 text-xs font-bold leading-tight">
                          {step.title}
                        </span>
                        <p className="text-cetl-text-muted text-[10px] leading-tight">{step.desc}</p>
                      </div>
                      {i < m.steps.length - 1 && (
                        <ChevronRight className="text-cetl-gold-400 shrink-0 mt-5" size={18} strokeWidth={2.5} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Outcomes */}
            <div className="grid grid-cols-4 gap-4 mt-10">
              {m.outcomes.map((outcome) => {
                const Icon = ICON_MAP[outcome.icon];
                return (
                  <div key={outcome.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-cetl-gold-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-cetl-navy-800" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-display text-cetl-navy-900 font-bold text-sm leading-snug">
                        {outcome.title}
                      </h4>
                      <p className="text-cetl-text-muted text-[11px] leading-snug mt-0.5">{outcome.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
