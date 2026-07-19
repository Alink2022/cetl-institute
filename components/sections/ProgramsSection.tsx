"use client";

import Link from "next/link";
import { Brain, TrendingUp, Award, Lightbulb, Cog, Users, Flag, UserCheck, MessageCircle, Code2, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/lib/i18n";
import type { LucideIconName } from "@/lib/content-types";

const ICON_MAP: Record<LucideIconName, React.ElementType> = {
  Brain,
  TrendingUp,
  Award,
  Users,
  Lightbulb,
  Cog,
  Flag,
};

// Pillar-Nummer, die den ELaaS-Anker (#elaas) aus dem NAV trägt — Embedded Engineering
// ist der Ort, an dem das frühere ELaaS-Konzept jetzt lebt.
const ELAAS_ANCHOR_PILLAR = "02";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-cetl-gold-deep shrink-0 mt-0.5"
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

const SVG_PROPS = {
  viewBox: "0 0 16 16",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-3.5 h-3.5",
  "aria-hidden": true as const,
};

function CalendarIcon() {
  return (
    <svg {...SVG_PROPS}>
      <rect x="2" y="3" width="12" height="11" rx="1" />
      <path d="M5 1v4M11 1v4M2 7h12" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg {...SVG_PROPS}>
      <circle cx="8" cy="5" r="3" />
      <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" />
    </svg>
  );
}

// Icon order matches t.UI.programs.roles array order
const ROLE_ICONS = [UserCheck, MessageCircle, Code2, Briefcase];

export function ProgramsSection() {
  const { t } = useLanguage();
  const flagship = t.PROGRAMS.find((p) => p.href);

  return (
    <section id="programs" className="py-24 lg:py-32 bg-cetl-dark">
      <Container>
        {/* ── Section header ── */}
        <SectionHeader
          label={t.UI.pillars.label}
          title={t.UI.pillars.title}
          subtitle={t.UI.pillars.subtitle}
          className="mb-16"
        />

        {/* ── Category pillars (condensed) ── */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.PILLARS.map((pillar) => {
            const Icon = ICON_MAP[pillar.icon];
            return (
              <TiltCard
                key={pillar.number}
                className="gradient-edge relative flex flex-col bg-cetl-surface rounded-2xl border border-cetl-border p-8"
              >
                {pillar.number === ELAAS_ANCHOR_PILLAR && (
                  <span id="elaas" className="absolute -top-24" aria-hidden="true" />
                )}
                {/* Number accent */}
                <span className="font-display text-7xl font-bold text-cetl-gold/[0.08] group-hover:text-cetl-gold/20 transition-colors absolute top-6 right-6 leading-none select-none">
                  {pillar.number}
                </span>

                <div className="mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cetl-gold/20 to-cetl-violet/10 border border-cetl-gold/25 flex items-center justify-center mb-4 shadow-[0_0_24px_-8px_color-mix(in_srgb,var(--color-cetl-gold)_50%,transparent)]">
                    <Icon className="w-5 h-5 text-cetl-gold-deep" strokeWidth={1.5} aria-hidden="true" />
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

        {/* ── Methodology: how the programs run ── */}
        <div className="mb-20 pb-20 border-b border-cetl-border/50">
          <SectionHeader
            label={t.UI.methodology.label}
            title={t.UI.methodology.title}
            subtitle={t.UI.methodology.subtitle}
            className="mb-14"
          />
          <div className="relative flex flex-wrap justify-center gap-x-2 gap-y-10">
            {t.METHODOLOGY_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <div key={step.n} className="flex items-center">
                  <div className="flex flex-col items-center gap-3 text-center max-w-[180px]">
                    <span className="text-cetl-gold-deep text-xs font-semibold tracking-widest">{step.n}</span>
                    <div className="w-16 h-16 rounded-full border border-cetl-border bg-cetl-dark flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cetl-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="font-display text-sm font-bold text-cetl-text">{step.title}</span>
                    <p className="text-cetl-text-muted text-xs leading-relaxed">{step.description}</p>
                  </div>
                  {i < t.METHODOLOGY_STEPS.length - 1 && (
                    <div className="hidden md:block w-8 lg:w-12 h-px bg-gradient-to-r from-cetl-gold/40 via-cetl-border to-cetl-gold/40 mx-1 -translate-y-14" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/programme/ki-kompetenzprogramm"
              className="text-cetl-gold-deep text-sm font-semibold hover:text-cetl-text transition-colors duration-200 flex items-center gap-1.5"
            >
              {t.UI.methodology.cta}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Flagship program: featured, single, in depth ── */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-8 bg-cetl-gold/40" />
          <p className="text-cetl-gold-deep text-[10px] font-semibold tracking-[0.3em] uppercase">
            {t.UI.programs.label}
          </p>
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-cetl-text mb-2 max-w-2xl">
          {t.UI.programs.title}
        </h3>
        <p className="text-cetl-text-muted text-sm leading-relaxed mb-10 max-w-xl">
          {t.UI.programs.subtitle}
        </p>

        {flagship && (
          <TiltCard className="gradient-edge relative flex flex-col bg-cetl-surface rounded-2xl border border-cetl-border p-8 md:p-12 overflow-hidden">
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cetl-gold via-cetl-gold-light to-cetl-violet opacity-70" />
            <Badge variant={t.TAG_COLORS[flagship.tag] ?? "gold"} className="mb-5 self-start">
              {flagship.tag}
            </Badge>
            <h4 className="font-display text-2xl md:text-3xl font-bold text-cetl-text mb-4 max-w-2xl">
              {flagship.title}
            </h4>
            <p className="text-cetl-text-muted leading-relaxed mb-8 max-w-2xl">{flagship.description}</p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10 pb-8 border-b border-cetl-border text-sm text-cetl-text-muted">
              <span className="flex items-center gap-1.5">
                <CalendarIcon />
                {flagship.format}
              </span>
              <span className="flex items-center gap-1.5">
                <PersonIcon />
                {flagship.level}
              </span>
            </div>

            <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-5">
              {t.UI.programs.rolesLabel}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              {t.UI.programs.roles.map((label, i) => {
                const Icon = ROLE_ICONS[i];
                return (
                <div key={label} className="flex flex-col items-center gap-2.5 text-center">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cetl-gold/20 to-cetl-violet/10 border border-cetl-gold/25 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cetl-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-cetl-text-muted text-xs font-medium leading-tight">{label}</span>
                </div>
                );
              })}
            </div>

            {flagship.href && (
              <Link
                href={flagship.href}
                className="group relative inline-flex self-start items-center gap-2 px-8 py-4 bg-cetl-gold text-cetl-darker font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 rounded-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.UI.programs.detailCta}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cetl-gold-light to-cetl-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            )}
          </TiltCard>
        )}

        {/* CTA row — Advisor pathway (MIT pattern) */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-cetl-blue text-white font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.UI.programs.cta}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-cetl-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="text-cetl-text-muted text-sm hover:text-cetl-gold-deep transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
              <circle cx="8" cy="8" r="6" />
              <path d="M8 5v3l2 2" />
            </svg>
            {t.UI.programs.ctaAdvisor}
          </a>
        </div>
      </Container>
    </section>
  );
}
