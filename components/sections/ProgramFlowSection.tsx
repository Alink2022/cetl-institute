"use client";

import { Search, Settings2, Rocket, Cog, Users, Globe, TrendingUp, UsersRound, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { ProgramFlowIconName } from "@/lib/content-types";

const ICON_MAP: Record<ProgramFlowIconName, React.ElementType> = {
  Search, Settings2, Rocket, Cog, Users, Globe, TrendingUp, UsersRound,
};

export function ProgramFlowSection() {
  const { t } = useLanguage();
  const ui = t.UI.programFlow;

  if (!t.PROGRAM_FLOW_STEPS || t.PROGRAM_FLOW_STEPS.length === 0) return null;

  return (
    <section className="relative pt-4 pb-14 lg:pb-44 cetl-navy-bg overflow-hidden">
      <Container className="relative">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center leading-tight mb-14">
          {ui.headline}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-4">
          {t.PROGRAM_FLOW_STEPS.map((step) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <div key={step.n} className="flex flex-col items-center text-center gap-3">
                <span className="text-cetl-gold-400/70 text-xs font-semibold">{step.n}</span>
                <div className="w-14 h-14 rounded-full border border-cetl-gold-400/50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cetl-gold-400" strokeWidth={1.5} />
                </div>
                <p className="text-white text-sm font-bold">{step.title}</p>
                <p className="text-white/50 text-xs leading-snug max-w-[10rem]">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-3 mt-14">
          <span className="h-10 w-px bg-gradient-to-b from-cetl-gold-400/40 to-cetl-gold-400" />
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-cetl-gold-400 bg-cetl-gold-400/10">
            <Star className="w-4 h-4 text-cetl-gold-400 fill-current" strokeWidth={0} />
            <span className="text-white font-display font-bold text-sm md:text-base tracking-wide">{ui.goal}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
