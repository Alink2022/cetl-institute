"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

function VennDiagram() {
  return (
    <svg viewBox="0 0 340 300" className="w-full max-w-[340px]" aria-hidden="true">
      {/* Academia circle — top */}
      <circle cx="170" cy="108" r="95" fill="none" stroke="var(--color-cetl-border)" strokeWidth="1.5" />
      {/* Community circle — bottom-left */}
      <circle cx="118" cy="198" r="95" fill="none" stroke="var(--color-cetl-border)" strokeWidth="1.5" />
      {/* Industry circle — bottom-right */}
      <circle cx="222" cy="198" r="95" fill="none" stroke="var(--color-cetl-border)" strokeWidth="1.5" />

      {/* Subtle fill overlaps */}
      <circle cx="170" cy="108" r="95" fill="var(--color-cetl-blue)" fillOpacity="0.04" />
      <circle cx="118" cy="198" r="95" fill="var(--color-cetl-gold)" fillOpacity="0.04" />
      <circle cx="222" cy="198" r="95" fill="var(--color-cetl-violet)" fillOpacity="0.04" />

      {/* Circle labels */}
      <text x="170" y="38" textAnchor="middle" fontSize="10" letterSpacing="2" fill="var(--color-cetl-text-muted)" fontFamily="inherit" fontWeight="600">
        ACADEMIA
      </text>
      <text x="52" y="270" textAnchor="middle" fontSize="10" letterSpacing="2" fill="var(--color-cetl-text-muted)" fontFamily="inherit" fontWeight="600">
        COMMUNITY
      </text>
      <text x="290" y="270" textAnchor="middle" fontSize="10" letterSpacing="2" fill="var(--color-cetl-text-muted)" fontFamily="inherit" fontWeight="600">
        INDUSTRY
      </text>

      {/* Center medallion — sized to logo */}
      <circle cx="170" cy="166" r="74" fill="var(--color-cetl-darker)" fillOpacity="0.92" />
      <circle cx="170" cy="166" r="74" fill="none" stroke="var(--color-cetl-gold)" strokeWidth="1" strokeOpacity="0.45" />
      <image href="/cetl-logo.png" x="96" y="92" width="148" height="148" preserveAspectRatio="xMidYMid meet" />
    </svg>
  );
}

export function IntersectionSection() {
  const { t } = useLanguage();
  const ui = t.UI.intersection;

  return (
    <section id="intersection" className="py-24 bg-cetl-darker relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cetl-blue/[0.05] blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cetl-gold/[0.04] blur-[100px]" />
      </div>

      <Container className="relative">
        <p className="text-cetl-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">{ui.label}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cetl-text mb-3 max-w-xl">{ui.title}</h2>
        <p className="text-cetl-text-muted text-sm leading-relaxed mb-14 max-w-xl">{ui.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Venn diagram */}
          <div className="flex justify-center">
            <VennDiagram />
          </div>

          {/* Category lists */}
          <div className="flex flex-col gap-4">
            {t.INTERSECTION_CATEGORIES.map((cat) => (
              <div key={cat.label} className="rounded-xl border border-cetl-border bg-cetl-surface/40 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-sm bg-cetl-gold" />
                  <h3 className="text-cetl-text font-semibold text-sm tracking-wide">{cat.label}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {cat.partners.map((p) => (
                    <div key={p.name} className="pb-3 border-b border-cetl-border/50 last:border-0 last:pb-0">
                      <p className="text-cetl-text text-sm font-medium">{p.name}</p>
                      <p className="text-cetl-text-muted text-xs leading-snug mt-0.5">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
