"use client";

import Image from "next/image";
import {
  Target, Users, Footprints, TrendingUp, User, Lightbulb, UsersRound,
  ShieldCheck, Eye, Puzzle, GraduationCap, Rocket, BarChart2, RefreshCw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { MethodologyIconName, MethodologyPanelItem } from "@/lib/content-types";

const ICON_MAP: Record<MethodologyIconName, React.ElementType> = {
  Target, Users, Footprints, TrendingUp, User, Lightbulb, UsersRound,
  ShieldCheck, Eye, Puzzle, GraduationCap, Rocket, BarChart2, RefreshCw,
};

function Panel({ heading, items }: { heading: string; items: MethodologyPanelItem[] }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-cetl-border bg-white shadow-[0_2px_20px_-10px_rgba(0,0,0,0.15)] h-fit">
      <div className="bg-cetl-navy-900 py-3.5 text-center">
        <h3 className="font-display text-white text-xs sm:text-sm font-bold tracking-wide uppercase">{heading}</h3>
      </div>
      <div className="divide-y divide-cetl-border">
        {items.map((item) => {
          const Icon = ICON_MAP[item.icon];
          return (
            <div key={item.title} className="flex items-start gap-3 p-4">
              <div className="w-10 h-10 rounded-full bg-cetl-navy-900 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-cetl-gold-400" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-display text-cetl-navy-900 text-sm font-bold leading-snug">{item.title}</h4>
                <p className="text-cetl-text-muted text-xs leading-snug mt-0.5">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 6 flow-step positions on a hexagonal ring, vertex at top. Percent coordinates.
const R = 38;
const ICON_D = 14.5;
const deg2rad = (d: number) => (d * Math.PI) / 180;
const angleFor = (i: number) => -90 + i * 60;
const pointFor = (angleDeg: number, radius = R) => ({
  x: 50 + radius * Math.cos(deg2rad(angleDeg)),
  y: 50 + radius * Math.sin(deg2rad(angleDeg)),
});

const STEP_POSITIONS = Array.from({ length: 6 }, (_, i) => pointFor(angleFor(i)));
const SYNC_ANGLE = angleFor(5) + 30; // midpoint between step 6 (Scale) and step 1 (Understand)
const SYNC_POINT = pointFor(SYNC_ANGLE);

function arc(from: { x: number; y: number }, to: { x: number; y: number }) {
  return `M ${from.x} ${from.y} A ${R} ${R} 0 0 1 ${to.x} ${to.y}`;
}

export function MethodologySection() {
  const { t } = useLanguage();
  const m = t.ELAAS_METHODOLOGY;
  if (!m) return null;

  const arcs: string[] = [];
  for (let i = 0; i < 5; i++) arcs.push(arc(STEP_POSITIONS[i], STEP_POSITIONS[i + 1]));
  arcs.push(arc(STEP_POSITIONS[5], SYNC_POINT));
  arcs.push(arc(SYNC_POINT, STEP_POSITIONS[0]));

  return (
    <section id="about" className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <div className="max-w-5xl mx-auto mb-14 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{m.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight">
            {m.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,270px)_1fr_minmax(0,270px)] gap-8 xl:gap-10 items-center">
          <Panel heading={m.approachHeading} items={m.approach} />

          <div className="w-full max-w-[640px] mx-auto px-1 sm:px-4">
            <div className="relative w-full aspect-square">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible" aria-hidden>
                <defs>
                  <marker id="methodArrowHead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
                    <path d="M0.5,0.5 L5.5,3 L0.5,5.5 Z" fill="var(--color-cetl-gold-400)" />
                  </marker>
                </defs>
                {arcs.map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    fill="none"
                    stroke="var(--color-cetl-gold-400)"
                    strokeWidth="0.6"
                    markerEnd="url(#methodArrowHead)"
                  />
                ))}
              </svg>

              {/* Center badge */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[36%] rounded-2xl bg-white border-2 border-cetl-gold-400 shadow-[0_4px_28px_-8px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-1.5 py-4 px-2"
                style={{ left: "50%", top: "50%" }}
              >
                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <Image src="/cetl-logo.webp" alt="CETL Institute" fill sizes="64px" className="object-contain" />
                </div>
                <p className="font-display text-cetl-navy-900 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-center leading-tight">
                  {m.badge.name}
                </p>
                <p className="text-cetl-text-muted text-[8px] sm:text-[10px] leading-tight text-center">
                  {m.badge.line1}
                  <br />
                  {m.badge.line2}
                </p>
              </div>

              {/* Sync / loop icon */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-2 border-cetl-gold-400 flex items-center justify-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.18)]"
                style={{ left: `${SYNC_POINT.x}%`, top: `${SYNC_POINT.y}%`, width: `${ICON_D * 0.6}%`, aspectRatio: "1 / 1" }}
              >
                <RefreshCw className="w-[45%] h-[45%] text-cetl-gold-700" strokeWidth={2} />
              </div>

              {/* 6 flow steps */}
              {m.steps.map((step, i) => {
                const Icon = ICON_MAP[step.icon];
                const pos = STEP_POSITIONS[i];
                return (
                  <div
                    key={step.n}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: "34%" }}
                  >
                    <div
                      className="relative rounded-full bg-white border-[3px] border-cetl-gold-400 flex items-center justify-center shadow-[0_2px_12px_-4px_rgba(0,0,0,0.18)]"
                      style={{ width: `${ICON_D}vw`, maxWidth: 72, aspectRatio: "1 / 1" }}
                    >
                      <Icon className="w-[46%] h-[46%] text-cetl-navy-800" strokeWidth={2} />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cetl-gold-500 text-cetl-navy-900 text-[10px] font-display font-bold flex items-center justify-center">
                        {step.n}
                      </span>
                    </div>
                    <span className="font-display text-cetl-navy-900 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-center leading-tight">
                      {step.title}
                    </span>
                    <p className="hidden sm:block text-cetl-text-muted text-[9px] leading-tight text-center">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Panel heading={m.principlesHeading} items={m.principles} />
        </div>
      </Container>
    </section>
  );
}
