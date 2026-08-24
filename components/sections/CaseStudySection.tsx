"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function CaseStudySection() {
  const { t } = useLanguage();
  const ui = t.UI.caseStudy;
  const cs = t.CASE_STUDY;

  return (
    <section id="case-study" className="py-32 bg-cetl-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Image src="/h.webp" alt="" fill sizes="100vw" className="object-cover opacity-[0.07]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cetl-dark via-cetl-dark/60 to-cetl-dark" />
      </div>
      <div className="absolute top-0 right-[15%] w-[500px] h-[400px] rounded-full bg-cetl-navy-700/[0.07] blur-[140px] pointer-events-none" />

      <Container className="relative">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8 bg-cetl-gold/40" />
          <p className="text-cetl-gold-deep text-xs tracking-[0.3em] uppercase font-semibold">{ui.label}</p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{ui.title}</h2>
        <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-xl">{ui.subtitle}</p>

        {/* Main card */}
        <div className="gradient-edge relative rounded-2xl border border-cetl-border overflow-hidden bg-cetl-navy-800/40">
          {/* Gold top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cetl-gold/70 via-cetl-gold-light/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: client identity + metrics */}
            <div className="p-8 lg:p-10 flex flex-col gap-7 lg:border-r border-white/[0.06]">
              {/* Partner logos */}
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-cetl-gold/10 ring-1 ring-cetl-gold/20 p-1.5 flex items-center justify-center">
                  <Image src="/cetl-logo.webp" alt="CETL Institute" width={32} height={32} className="object-contain" />
                </div>
                <span className="text-cetl-gold/50 text-xl font-light select-none">×</span>
                <div className="w-10 h-10 rounded-xl bg-white border border-cetl-border/60 flex items-center justify-center p-1.5 shrink-0">
                  <Image src="/logos/raiffeisen.svg" alt="Raiffeisenlandesbank OÖ" width={28} height={28} className="object-contain" unoptimized />
                </div>
              </div>

              {/* Client name */}
              <div>
                <p className="text-cetl-gold-deep text-[10px] tracking-[0.3em] uppercase font-semibold mb-1.5">{cs.clientTag}</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug">{cs.client}</h3>
              </div>

              <p className="text-white/55 text-sm leading-relaxed">{cs.desc}</p>

              {/* Metrics */}
              <div className="flex flex-col divide-y divide-white/[0.07] mt-auto">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between py-3.5 gap-4">
                    <span className="text-white/45 text-sm">{m.label}</span>
                    <span className={`text-sm font-semibold shrink-0 ${m.highlight ? "text-cetl-gold-400" : "text-white"}`}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: principles */}
            <div className="p-8 lg:p-10 flex flex-col gap-6">
              <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase font-semibold">Kernprinzipien</p>

              <div className="flex flex-col gap-7">
                {cs.principles.map((p) => (
                  <div key={p.num} className="flex gap-5 items-start group">
                    <span className="font-display text-4xl font-bold text-cetl-gold/20 shrink-0 leading-none w-9 mt-0.5 group-hover:text-cetl-gold/35 transition-colors duration-300">
                      {p.num}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-bold text-white mb-1.5 leading-snug">{p.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote accent */}
              <div className="mt-auto pt-6 border-t border-white/[0.07]">
                <p className="text-white/25 text-xs italic leading-relaxed">
                  &ldquo;Kein Schulungskatalog — ein integriertes Enabling-System mit messbarem Transfer.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href={`mailto:${t.SITE.formEmail}`}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-cetl-gold text-cetl-darker font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              {ui.cta}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cetl-gold-light to-cetl-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </Container>
    </section>
  );
}
