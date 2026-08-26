"use client";

import Image from "next/image";
import { Users, Monitor, Building2, GraduationCap, Lightbulb, Network } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

const NODE_ICONS = [Users, Monitor, Building2, GraduationCap, Lightbulb, Network];

// 6 positions forming a hexagon (2 upper corners, 2 side, 2 lower corners) — no node sits
// exactly at top/bottom-center, matching the reference layout. Percent coordinates.
const R = 34;
const ICON_D = 15; // icon circle diameter, % of diagram width
const NODE_POSITIONS = Array.from({ length: 6 }, (_, i) => {
  const angle = (-60 + i * 60) * (Math.PI / 180);
  return { x: 50 + R * Math.cos(angle), y: 50 + R * Math.sin(angle) };
});

export function EcosystemSection() {
  const { t } = useLanguage();
  const ecosystem = t.UI.ecosystem;

  return (
    <section id="about" className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            {ecosystem.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-6">
            {ecosystem.headline}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{ecosystem.intro}</p>
        </div>

        {/* Ecosystem circle diagram */}
        <div className="w-full max-w-[900px] mx-auto px-2 sm:px-6">
          <div className="relative w-full aspect-square">
            {/* Connecting ring */}
            <div
              className="absolute rounded-full border-2 border-cetl-gold/60"
              style={{ left: `${50 - R}%`, top: `${50 - R}%`, width: `${R * 2}%`, height: `${R * 2}%` }}
              aria-hidden
            />

            {/* Center: CETL logo */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[34%] h-[34%] rounded-full bg-cetl-navy-800 border-4 border-cetl-gold flex items-center justify-center shadow-[0_0_36px_-6px_var(--color-cetl-gold-400)]"
              style={{ left: "50%", top: "50%" }}
            >
              <div className="relative w-[82%] h-[82%]">
                <Image src="/cetl-logo.webp" alt="CETL Institute" fill sizes="160px" className="object-contain" />
              </div>
            </div>

            {/* 6 nodes */}
            {t.ECOSYSTEM_NODES.map((node, i) => {
              const Icon = NODE_ICONS[i % NODE_ICONS.length];
              const pos = NODE_POSITIONS[i];
              const isRight = pos.x >= 50;
              return (
                <div key={node.number}>
                  {/* Icon */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border-[3px] border-cetl-gold flex items-center justify-center shadow-[0_2px_12px_-4px_rgba(0,0,0,0.18)]"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%`, width: `${ICON_D}%`, aspectRatio: "1 / 1" }}
                  >
                    <Icon className="w-[50%] h-[50%] text-cetl-navy-800" strokeWidth={2} />
                  </div>
                  {/* Connector + label, placed outside the ring on the icon's side */}
                  <div
                    className={`absolute -translate-y-1/2 flex items-center gap-2 ${isRight ? "flex-row" : "flex-row-reverse"}`}
                    style={
                      isRight
                        ? { left: `calc(${pos.x}% + ${ICON_D / 2}%)`, top: `${pos.y}%`, maxWidth: "26%" }
                        : { right: `calc(${100 - pos.x}% + ${ICON_D / 2}%)`, top: `${pos.y}%`, maxWidth: "26%" }
                    }
                  >
                    <span className="h-[3px] w-4 sm:w-6 bg-cetl-gold shrink-0 rounded-full" aria-hidden />
                    <span
                      className={`text-cetl-text text-[11px] sm:text-sm font-bold leading-tight ${isRight ? "text-left" : "text-right"}`}
                    >
                      {node.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {ecosystem.bottomBand && ecosystem.bottomBand.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-14 pt-6 border-t border-cetl-border max-w-3xl mx-auto">
            {ecosystem.bottomBand.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-cetl-gold/30 bg-cetl-gold/5 text-cetl-gold-deep text-xs font-semibold tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
