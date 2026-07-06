"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
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

export function ProgramsSection() {
  const { t } = useLanguage();

  return (
    <section id="programs" className="py-24 lg:py-32 bg-cetl-dark">
      <Container>
        <SectionHeader
          label={t.UI.programs.label}
          title={t.UI.programs.title}
          subtitle={t.UI.programs.subtitle}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.PROGRAMS.map((program) => (
            <TiltCard
              key={program.title}
              className="gradient-edge relative flex flex-col bg-cetl-surface rounded-2xl border border-cetl-border p-7 overflow-hidden"
            >
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cetl-gold via-cetl-gold-light to-cetl-violet opacity-70" />
              <div className="mb-5">
                <Badge variant={t.TAG_COLORS[program.tag] ?? "muted"} className="mb-4">
                  {program.tag}
                </Badge>
                <h3 className="font-display text-cetl-text font-bold text-lg leading-snug">{program.title}</h3>
              </div>

              <p className="text-cetl-text-muted text-sm leading-relaxed mb-6 flex-1">
                {program.description}
              </p>

              <div className="pt-4 border-t border-cetl-border flex gap-4 text-xs text-cetl-text-muted">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon />
                  {program.format}
                </span>
                <span className="flex items-center gap-1.5">
                  <PersonIcon />
                  {program.level}
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cetl-gold text-cetl-darker font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.UI.programs.cta}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cetl-gold-light to-cetl-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </Container>
    </section>
  );
}
