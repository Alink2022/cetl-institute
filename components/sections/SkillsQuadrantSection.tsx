"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

type CategoryKey =
  | "cognitive" | "engagement" | "ethics" | "management"
  | "physical" | "selfEfficacy" | "technology" | "workingWithOthers";

const CATEGORY_COLOR: Record<CategoryKey, string> = {
  cognitive: "var(--color-cetl-navy-900)",
  technology: "var(--color-cetl-navy-700)",
  workingWithOthers: "var(--color-cetl-navy-600)",
  selfEfficacy: "var(--color-cetl-gold-700)",
  management: "var(--color-cetl-gold-600)",
  ethics: "var(--color-cetl-gold-500)",
  engagement: "var(--color-cetl-gold-400)",
  physical: "var(--color-cetl-gold-300)",
};

// x = share considering core skill in 2025 (0-80), y = share expecting increased use by 2030 (0-100)
const SKILLS: { name: string; x: number; y: number; cat: CategoryKey }[] = [
  { name: "AI and big data", x: 44, y: 92, cat: "technology" },
  { name: "Technological literacy", x: 53, y: 75, cat: "technology" },
  { name: "Creative thinking", x: 50, y: 73, cat: "cognitive" },
  { name: "Resilience, flexibility and agility", x: 67, y: 72, cat: "workingWithOthers" },
  { name: "Analytical thinking", x: 60, y: 66, cat: "cognitive" },
  { name: "Curiosity and lifelong learning", x: 47, y: 64, cat: "selfEfficacy" },
  { name: "Leadership and social influence", x: 58, y: 60, cat: "workingWithOthers" },
  { name: "Talent management", x: 47, y: 60, cat: "management" },
  { name: "Networks and cybersecurity", x: 21, y: 73, cat: "technology" },
  { name: "Environmental stewardship", x: 14, y: 57, cat: "engagement" },
  { name: "Design and user experience", x: 22, y: 51, cat: "cognitive" },
  { name: "Systems thinking", x: 41, y: 52, cat: "cognitive" },
  { name: "Motivation and self-awareness", x: 51, y: 50, cat: "selfEfficacy" },
  { name: "Empathy and active listening", x: 51, y: 44, cat: "workingWithOthers" },
  { name: "Service orientation and customer service", x: 50, y: 40, cat: "workingWithOthers" },
  { name: "Resource management and operations", x: 42, y: 32, cat: "management" },
  { name: "Programming", x: 20, y: 45, cat: "technology" },
  { name: "Marketing and media", x: 20, y: 41, cat: "selfEfficacy" },
  { name: "Teaching and mentoring", x: 26, y: 36, cat: "workingWithOthers" },
  { name: "Multi-lingualism", x: 20, y: 33, cat: "ethics" },
  { name: "Quality control", x: 32, y: 30, cat: "management" },
  { name: "Global citizenship", x: 14, y: 28, cat: "engagement" },
  { name: "Dependability and attention to detail", x: 35, y: 22, cat: "selfEfficacy" },
  { name: "Reading, writing and mathematics", x: 20, y: 16, cat: "cognitive" },
  { name: "Sensory-processing abilities", x: 4, y: 20, cat: "physical" },
  { name: "Manual dexterity, endurance and precision", x: 14, y: 12, cat: "physical" },
];

const VB = { w: 900, h: 640 };
const PLOT = { left: 90, right: 850, top: 30, bottom: 560 };
const DIVIDER_X = 40;
const DIVIDER_Y = 50;

const scaleX = (v: number) => PLOT.left + (v / 80) * (PLOT.right - PLOT.left);
const scaleY = (v: number) => PLOT.bottom - (v / 100) * (PLOT.bottom - PLOT.top);

export function SkillsQuadrantSection() {
  const { t } = useLanguage();
  const ui = t.UI.skillsQuadrant;
  const cat = ui.categories;

  const dividerXpx = scaleX(DIVIDER_X);
  const dividerYpx = scaleY(DIVIDER_Y);

  return (
    <section className="relative py-14 lg:py-44 bg-cetl-warm-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-5">
            {ui.headline}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{ui.intro}</p>
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-cetl-gold/40 bg-cetl-gold/10">
            <span className="text-cetl-gold-700 text-sm" aria-hidden>★</span>
            <span className="text-cetl-gold-deep text-xs font-semibold tracking-wide">{ui.focusLabel}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-cetl-border bg-white p-4 sm:p-8">
          <div className="relative w-full" style={{ aspectRatio: `${VB.w} / ${VB.h}` }}>
            <svg viewBox={`0 0 ${VB.w} ${VB.h}`} className="absolute inset-0 w-full h-full">
              {/* CETL focus: Emerging + Core-2030 quadrants highlighted */}
              <rect
                x={PLOT.left}
                y={PLOT.top}
                width={PLOT.right - PLOT.left}
                height={dividerYpx - PLOT.top}
                fill="var(--color-cetl-gold-200)"
                opacity="0.35"
              />

              {/* Gridlines */}
              {[0, 20, 40, 60, 80].map((v) => (
                <line key={`gx${v}`} x1={scaleX(v)} y1={PLOT.top} x2={scaleX(v)} y2={PLOT.bottom} stroke="var(--color-cetl-border)" strokeWidth="1" />
              ))}
              {[0, 25, 50, 75, 100].map((v) => (
                <line key={`gy${v}`} x1={PLOT.left} y1={scaleY(v)} x2={PLOT.right} y2={scaleY(v)} stroke="var(--color-cetl-border)" strokeWidth="1" />
              ))}

              {/* Axes */}
              <line x1={PLOT.left} y1={PLOT.top} x2={PLOT.left} y2={PLOT.bottom} stroke="var(--color-cetl-text-muted)" strokeWidth="1.5" />
              <line x1={PLOT.left} y1={PLOT.bottom} x2={PLOT.right} y2={PLOT.bottom} stroke="var(--color-cetl-text-muted)" strokeWidth="1.5" />

              {/* Quadrant divider lines */}
              <line x1={dividerXpx} y1={PLOT.top} x2={dividerXpx} y2={PLOT.bottom} stroke="var(--color-cetl-navy-700)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
              <line x1={PLOT.left} y1={dividerYpx} x2={PLOT.right} y2={dividerYpx} stroke="var(--color-cetl-navy-700)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

              {/* Axis value labels */}
              {[0, 20, 40, 60, 80].map((v) => (
                <text key={`lx${v}`} x={scaleX(v)} y={PLOT.bottom + 20} textAnchor="middle" fontSize="11" fill="var(--color-cetl-text-muted)">{v}</text>
              ))}
              {[0, 25, 50, 75, 100].map((v) => (
                <text key={`ly${v}`} x={PLOT.left - 12} y={scaleY(v) + 4} textAnchor="end" fontSize="11" fill="var(--color-cetl-text-muted)">{v}</text>
              ))}

              {/* Axis titles */}
              <text x={(PLOT.left + PLOT.right) / 2} y={VB.h - 12} textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-cetl-text)">
                {ui.axisX}
              </text>
              <text
                x={22}
                y={(PLOT.top + PLOT.bottom) / 2}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="var(--color-cetl-text)"
                transform={`rotate(-90 22 ${(PLOT.top + PLOT.bottom) / 2})`}
              >
                {ui.axisY}
              </text>

              {/* Quadrant labels */}
              <text x={PLOT.left + 10} y={PLOT.top + 18} fontSize="12" fontWeight="700" fill="var(--color-cetl-gold-700)">{ui.quadrantEmerging}</text>
              <text x={PLOT.right - 10} y={PLOT.top + 18} textAnchor="end" fontSize="12" fontWeight="700" fill="var(--color-cetl-gold-700)">{ui.quadrantCore}</text>
              <text x={PLOT.left + 10} y={PLOT.bottom - 10} fontSize="12" fontWeight="700" fill="var(--color-cetl-text-muted)">{ui.quadrantOutOfFocus}</text>
              <text x={PLOT.right - 10} y={PLOT.bottom - 10} textAnchor="end" fontSize="12" fontWeight="700" fill="var(--color-cetl-text-muted)">{ui.quadrantSteady}</text>

              {/* Data points */}
              {SKILLS.map((s) => (
                <g key={s.name}>
                  <circle cx={scaleX(s.x)} cy={scaleY(s.y)} r="6" fill={CATEGORY_COLOR[s.cat]} stroke="white" strokeWidth="1.5" />
                  <text x={scaleX(s.x) + 9} y={scaleY(s.y) + 3} fontSize="9.5" fill="var(--color-cetl-text)">
                    {s.name}
                  </text>
                </g>
              ))}

              {/* CETL logo watermark spanning the focus zone */}
              <image
                href="/cetl-logo.webp"
                x={(PLOT.left + PLOT.right) / 2 - 65}
                y={PLOT.top + 20}
                width="130"
                height="130"
                opacity="0.10"
              />
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 pt-6 border-t border-cetl-border">
            {(Object.keys(cat) as CategoryKey[]).map((key) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: CATEGORY_COLOR[key] }} />
                <span className="text-cetl-text-muted text-xs">{cat[key]}</span>
              </div>
            ))}
          </div>

          <p className="text-cetl-text-muted/60 text-[10px] tracking-wide text-center mt-4">{ui.source}</p>
        </div>
      </Container>
    </section>
  );
}
