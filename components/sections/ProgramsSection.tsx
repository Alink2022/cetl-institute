"use client";

import Link from "next/link";
import { UserCheck, MessageCircle, Code2, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/lib/i18n";

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

const ROLE_ROW = [
  { icon: UserCheck, label: "KI-Anwender:innen" },
  { icon: MessageCircle, label: "KI-Champions" },
  { icon: Code2, label: "Interne KI-Entwickler:innen" },
  { icon: Briefcase, label: "KI-Leadership" },
];

export function ProgramsSection() {
  const { t } = useLanguage();
  const flagship = t.PROGRAMS.find((p) => p.href);

  return (
    <section id="programs" className="py-14 lg:py-24 bg-cetl-dark">
      <Container>
        {/* ── Flagship program: featured, single, in depth ── */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-8 bg-cetl-gold/40" />
          <p className="text-cetl-gold-deep text-xs font-semibold tracking-[0.3em] uppercase">
            {t.UI.programs.label}
          </p>
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 max-w-2xl">
          {t.UI.programs.title}
        </h3>
        <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl">
          {t.UI.programs.subtitle}
        </p>

        {flagship && (
          <TiltCard className="gradient-edge relative flex flex-col bg-cetl-surface rounded-2xl border border-cetl-border p-8 md:p-12 overflow-hidden">
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cetl-gold via-cetl-gold-light to-cetl-gold-400 opacity-70" />
            <Badge variant={t.TAG_COLORS[flagship.tag] ?? "gold"} className="mb-5 self-start">
              {flagship.tag}
            </Badge>
            <h4 className="font-display text-3xl md:text-4xl font-bold text-cetl-text mb-4 max-w-2xl">
              {flagship.title}
            </h4>
            <p className="text-cetl-text-muted text-lg leading-relaxed mb-8 max-w-2xl">{flagship.description}</p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10 pb-8 border-b border-cetl-border text-base text-cetl-text-muted">
              <span className="flex items-center gap-1.5">
                <CalendarIcon />
                {flagship.format}
              </span>
              <span className="flex items-center gap-1.5">
                <PersonIcon />
                {flagship.level}
              </span>
            </div>

            <p className="text-cetl-text-muted text-sm font-semibold tracking-widest uppercase mb-7">
              Rollenbasierte Learning Journeys
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {ROLE_ROW.map((role) => (
                <div key={role.label} className="flex flex-col items-center gap-4 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cetl-gold/20 to-cetl-gold-400/10 border border-cetl-gold/25 flex items-center justify-center">
                    <role.icon className="w-9 h-9 text-cetl-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-cetl-text text-base font-semibold leading-snug">{role.label}</span>
                </div>
              ))}
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
            href={`mailto:${t.SITE.formEmail}`}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-cetl-navy-700 text-white font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.UI.programs.cta}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-cetl-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href={`mailto:${t.SITE.formEmail}`}
            className="text-white/60 text-sm hover:text-cetl-gold-400 transition-colors duration-200 flex items-center gap-1.5"
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
