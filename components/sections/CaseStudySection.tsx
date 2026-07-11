"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function CaseStudySection() {
  const { t } = useLanguage();
  const ui = t.UI.caseStudy;
  const cs = t.CASE_STUDY;

  return (
    <section id="case-study" className="py-24 bg-cetl-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-cetl-blue/[0.06] blur-[140px]" />
      </div>

      <Container className="relative">
        <p className="text-cetl-gold text-xs tracking-[0.3em] uppercase font-semibold mb-3">{ui.label}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-cetl-text mb-2">{ui.title}</h2>
        <p className="text-cetl-text-muted text-sm leading-relaxed mb-12 max-w-xl">{ui.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-px bg-cetl-border/30 rounded-2xl overflow-hidden">
          {/* Left: dark client card */}
          <div className="bg-cetl-surface p-8 lg:p-10 flex flex-col gap-6">
            <div>
              <p className="text-cetl-gold text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">{cs.clientTag}</p>
              <h3 className="font-display text-2xl font-bold text-cetl-text leading-snug">{cs.client}</h3>
            </div>
            <p className="text-cetl-text-muted text-sm leading-relaxed">{cs.desc}</p>

            {/* Metrics table */}
            <div className="flex flex-col divide-y divide-cetl-border/50">
              {cs.metrics.map((m) => (
                <div key={m.label} className="flex items-center justify-between py-3">
                  <span className="text-cetl-text-muted text-sm">{m.label}</span>
                  <span className={`text-sm font-semibold ${m.highlight ? "text-cetl-gold" : "text-cetl-text"}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 4 principles */}
          <div className="bg-cetl-darker grid grid-cols-1 sm:grid-cols-2">
            {cs.principles.map((p) => (
              <div
                key={p.num}
                className="p-7 border-b border-r border-cetl-border/30 last:border-b-0 [&:nth-child(even)]:border-r-0 sm:[&:nth-child(n+3)]:border-b-0"
              >
                <span className="font-display text-4xl font-bold text-cetl-gold/20 leading-none select-none">{p.num}</span>
                <h4 className="text-cetl-text font-semibold text-sm mt-3 mb-2">{p.title}</h4>
                <p className="text-cetl-text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
