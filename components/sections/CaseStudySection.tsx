"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Landmark, Factory, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { CaseStudyExample, CaseStudyIconName } from "@/lib/content-types";

const ICON_MAP: Record<CaseStudyIconName, React.ElementType> = {
  Landmark, Factory,
};

function CaseStudyCard({ example }: { example: CaseStudyExample }) {
  const Icon = ICON_MAP[example.icon];
  return (
    <div className="gradient-edge relative rounded-2xl border border-cetl-border overflow-hidden bg-cetl-navy-800/40 p-8 lg:p-10 h-full">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cetl-gold/70 via-cetl-gold-light/40 to-transparent" />

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-cetl-gold/10 ring-1 ring-cetl-gold/20 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-cetl-gold-400" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <div>
          <p className="text-cetl-gold-deep text-[10px] tracking-[0.3em] uppercase font-semibold mb-1">
            {example.sector}
          </p>
          <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
            {example.headline}
          </h3>
        </div>
      </div>

      <p className="text-white/55 text-sm leading-relaxed mb-8">{example.desc}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
        {example.metrics.map((m, i) => (
          <div
            key={m.label}
            className={`flex items-center justify-between gap-4 py-3 border-b border-white/[0.07] ${
              i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
            }`}
          >
            <span className="text-white/45 text-xs sm:text-sm">{m.label}</span>
            <span
              className={`text-xs sm:text-sm font-semibold shrink-0 text-right ${
                m.highlight ? "text-cetl-gold-400" : "text-white"
              }`}
            >
              {m.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseStudySection() {
  const { t } = useLanguage();
  const ui = t.UI.caseStudy;
  const examples = t.CASE_STUDIES;
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + examples.length) % examples.length);

  return (
    <section id="case-study" className="py-14 lg:py-20 bg-cetl-dark relative overflow-hidden">
      <div className="absolute top-0 right-[15%] w-[500px] h-[400px] rounded-full bg-cetl-navy-700/[0.07] blur-[140px] pointer-events-none" />

      <Container className="relative">
        {/* Section header — centered, matching the site-wide pattern */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {ui.headline}
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">{ui.subtitle}</p>
        </div>

        {/* Swipeable examples */}
        {examples && examples.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  className="flex"
                  animate={{ x: `-${index * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 32 }}
                  drag={examples.length > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) goTo(index + 1);
                    else if (info.offset.x > 70) goTo(index - 1);
                  }}
                >
                  {examples.map((example) => (
                    <div key={example.sector} className="w-full shrink-0 px-0.5">
                      <CaseStudyCard example={example} />
                    </div>
                  ))}
                </motion.div>
              </div>

              {examples.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    aria-label="Previous"
                    className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-cetl-dark border border-cetl-border items-center justify-center text-white/60 hover:text-white hover:border-cetl-gold/40 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    aria-label="Next"
                    className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 rounded-full bg-cetl-dark border border-cetl-border items-center justify-center text-white/60 hover:text-white hover:border-cetl-gold/40 transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {examples.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {examples.map((example, i) => (
                  <button
                    key={example.sector}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={example.sector}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-cetl-gold-400" : "w-2 bg-white/20 hover:bg-white/35"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

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
