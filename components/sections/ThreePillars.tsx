"use client";

import { Brain, TrendingUp, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/lib/i18n";
import type { LucideIconName } from "@/lib/content-types";

const ICON_MAP: Record<LucideIconName, React.ElementType> = {
  Brain,
  TrendingUp,
  Award,
  Globe: () => null,
  Users: () => null,
};

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-cetl-gold shrink-0 mt-0.5"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="2 8 6 12 14 4" />
    </svg>
  );
}

export function ThreePillars() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-32 bg-cetl-dark">
      <Container>
        <SectionHeader
          label={t.UI.pillars.label}
          title={t.UI.pillars.title}
          subtitle={t.UI.pillars.subtitle}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.PILLARS.map((pillar) => {
            const Icon = ICON_MAP[pillar.icon];
            return (
              <TiltCard
                key={pillar.number}
                className="gradient-edge relative flex flex-col bg-cetl-surface rounded-2xl border border-cetl-border p-8"
              >
                {/* Number accent */}
                <span className="font-display text-7xl font-bold text-cetl-gold/[0.08] group-hover:text-cetl-gold/20 transition-colors absolute top-6 right-6 leading-none select-none">
                  {pillar.number}
                </span>

                <div className="mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cetl-gold/20 to-cetl-violet/10 border border-cetl-gold/25 flex items-center justify-center mb-4 shadow-[0_0_24px_-8px_rgba(212,175,90,0.5)]">
                    <Icon className="w-5 h-5 text-cetl-gold" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-2">
                    {pillar.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-bold text-cetl-text">{pillar.title}</h3>
                </div>

                <p className="text-cetl-text-muted text-sm leading-relaxed mb-8">
                  {pillar.description}
                </p>

                <ul className="mt-auto flex flex-col gap-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckIcon />
                      <span className="text-cetl-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
