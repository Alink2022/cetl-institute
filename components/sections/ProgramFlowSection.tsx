"use client";

import { useState } from "react";
import { Search, Settings2, Rocket, Cog, Users, Globe, TrendingUp, UsersRound, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { ProgramFlowStep, ProgramFlowIconName } from "@/lib/content-types";

const ICON_MAP: Record<ProgramFlowIconName, React.ElementType> = {
  Search, Settings2, Rocket, Cog, Users, Globe, TrendingUp, UsersRound,
};

type Point = { x: number; y: number };

/** Smooth S-curve through points via cubic beziers, offsetting control points along `axis`. */
function buildSnakePath(points: Point[], axis: "x" | "y") {
  if (points.length === 0) return "";
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    if (axis === "x") {
      const dx = (p1.x - p0.x) / 2;
      d += ` C ${p0.x + dx},${p0.y} ${p1.x - dx},${p1.y} ${p1.x},${p1.y}`;
    } else {
      const dy = (p1.y - p0.y) / 2;
      d += ` C ${p0.x},${p0.y + dy} ${p1.x},${p1.y - dy} ${p1.x},${p1.y}`;
    }
  }
  return d;
}

// Desktop: horizontal flow, viewBox 1000x320
const DESKTOP_VB = { w: 1000, h: 320 };
const desktopPoints = (n: number): Point[] =>
  Array.from({ length: n }, (_, i) => ({ x: 55 + i * 115, y: i % 2 === 0 ? 90 : 230 }));
const DESKTOP_GOAL: Point = { x: 960, y: 160 };

// Mobile: vertical flow, viewBox 320x1560
const MOBILE_VB = { w: 320, h: 1560 };
const mobilePoints = (n: number): Point[] =>
  Array.from({ length: n }, (_, i) => ({ x: i % 2 === 0 ? 100 : 220, y: 80 + i * 175 }));
const MOBILE_GOAL: Point = { x: 160, y: 1500 };

function FlowDiagram({
  steps,
  goalLabel,
  variant,
}: {
  steps: ProgramFlowStep[];
  goalLabel: string;
  variant: "desktop" | "mobile";
}) {
  const [active, setActive] = useState<number | null>(null);
  const vb = variant === "desktop" ? DESKTOP_VB : MOBILE_VB;
  const points = variant === "desktop" ? desktopPoints(steps.length) : mobilePoints(steps.length);
  const goal = variant === "desktop" ? DESKTOP_GOAL : MOBILE_GOAL;
  const allPoints = [...points, goal];
  const pathD = buildSnakePath(allPoints, variant === "desktop" ? "x" : "y");

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: `${vb.w} / ${vb.h}` }}
      onMouseLeave={() => setActive(null)}
    >
      <svg viewBox={`0 0 ${vb.w} ${vb.h}`} className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
        <path
          d={pathD}
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="flowGradient"
            x1={variant === "desktop" ? "0%" : "0%"}
            y1={variant === "desktop" ? "0%" : "0%"}
            x2={variant === "desktop" ? "100%" : "0%"}
            y2={variant === "desktop" ? "0%" : "100%"}
          >
            <stop offset="0%" stopColor="var(--color-cetl-gold-400)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-cetl-gold-400)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>

      {steps.map((step, i) => {
        const p = points[i];
        const leftPct = (p.x / vb.w) * 100;
        const topPct = (p.y / vb.h) * 100;
        const flipUp = variant === "desktop" ? p.y > vb.h / 2 : false;
        const isActive = active === i;
        const Icon = ICON_MAP[step.icon];
        return (
          <div
            key={step.n}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ left: `${leftPct}%`, top: `${topPct}%` }}
          >
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(isActive ? null : i)}
              aria-label={`${step.title}: ${step.description}`}
              className={`relative z-10 w-11 h-11 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? "bg-cetl-gold-400 border-cetl-gold-400 scale-110 shadow-[0_0_18px_-2px_var(--color-cetl-gold-400)]"
                  : "bg-cetl-navy-900 border-cetl-gold-400/60 hover:border-cetl-gold-400"
              }`}
            >
              <span className={`absolute -top-2 -right-1 text-[9px] font-bold ${isActive ? "text-cetl-navy-900" : "text-cetl-gold-400/70"}`}>
                {step.n}
              </span>
              <Icon
                className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-cetl-navy-900" : "text-cetl-gold-400"}`}
                strokeWidth={1.75}
              />
            </button>
            <span className="mt-2 text-white/70 text-[10px] md:text-[11px] font-semibold text-center whitespace-nowrap">
              {step.title}
            </span>

            {isActive && (
              <div
                className={`absolute z-20 w-44 rounded-lg border border-cetl-gold-400/40 bg-cetl-navy-900 shadow-xl p-3 text-center ${
                  flipUp ? "bottom-full mb-3" : "top-full mt-6"
                }`}
              >
                <p className="text-cetl-gold-400 text-[10px] font-bold tracking-widest uppercase mb-1">
                  {step.n} · {step.title}
                </p>
                <p className="text-white/70 text-xs leading-snug">{step.description}</p>
              </div>
            )}
          </div>
        );
      })}

      {/* Goal marker */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
        style={{ left: `${(goal.x / vb.w) * 100}%`, top: `${(goal.y / vb.h) * 100}%` }}
      >
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-cetl-gold-400 flex items-center justify-center shadow-[0_0_20px_-2px_var(--color-cetl-gold-400)]">
          <Star className="w-4 h-4 text-cetl-navy-900 fill-current" strokeWidth={0} />
        </div>
        <span className="text-white font-display font-bold text-xs md:text-sm text-center whitespace-nowrap max-w-[8rem] leading-snug">
          {goalLabel}
        </span>
      </div>
    </div>
  );
}

export function ProgramFlowSection() {
  const { t } = useLanguage();
  const ui = t.UI.programFlow;

  if (!t.PROGRAM_FLOW_STEPS || t.PROGRAM_FLOW_STEPS.length === 0) return null;

  return (
    <section className="relative pt-4 pb-14 lg:pb-32 cetl-navy-bg overflow-hidden">
      <Container className="relative">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center leading-tight mb-10 lg:mb-16">
          {ui.headline}
        </h2>

        <div className="hidden md:block">
          <FlowDiagram steps={t.PROGRAM_FLOW_STEPS} goalLabel={ui.goal} variant="desktop" />
        </div>
        <div className="md:hidden max-w-xs mx-auto">
          <FlowDiagram steps={t.PROGRAM_FLOW_STEPS} goalLabel={ui.goal} variant="mobile" />
        </div>
      </Container>
    </section>
  );
}
