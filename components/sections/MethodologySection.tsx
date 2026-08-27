"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap, BookOpen, Settings2, Lightbulb, CheckCircle2, Cog, Users, Flag, ArrowRight,
  Brain, Layers, Network, Target,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { ProductIconName, LucideIconName } from "@/lib/content-types";

const CAPABILITY_ICON_MAP: Partial<Record<ProductIconName, React.ElementType>> = {
  GraduationCap, BookOpen, Settings2, Lightbulb,
};

const FLOW_ICON_MAP: Partial<Record<LucideIconName, React.ElementType>> = {
  Lightbulb, Cog, Users, Flag, Brain, Layers, Network, Target,
};

export function MethodologySection() {
  const { t } = useLanguage();
  const m = t.ELAAS_METHODOLOGY;
  if (!m) return null;

  return (
    <section id="about" className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{m.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-6">
            {m.headline}
          </h2>
          <div className="flex flex-col gap-4">
            {m.intro.map((paragraph) => (
              <p key={paragraph} className="text-cetl-text-muted text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl bg-white border border-cetl-border shadow-[0_4px_28px_-10px_rgba(0,0,0,0.15)] p-4 sm:p-6">
          <div className="relative w-full aspect-[1448/1086]">
            <Image
              src={m.image}
              alt={m.imageAlt}
              fill
              sizes="(max-width: 1100px) 100vw, 1024px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Capabilities */}
        {t.EXECUTIONAL_SERVICES && t.EXECUTIONAL_SERVICES.length > 0 && (
          <div className="max-w-5xl mx-auto mt-14">
            <h3 className="font-display text-cetl-navy-900 text-xl sm:text-2xl font-bold text-center mb-8">
              {m.capabilitiesHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.EXECUTIONAL_SERVICES.map((service) => {
                const Icon = CAPABILITY_ICON_MAP[service.icon] ?? GraduationCap;
                return (
                  <div
                    key={service.number + service.title}
                    className="flex flex-col gap-4 rounded-xl border border-cetl-border bg-white p-5 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.1)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md border border-cetl-navy-900/25 bg-white flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-cetl-navy-900" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-display text-cetl-navy-900 font-bold text-sm leading-snug">
                        {service.title}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cetl-gold-500 shrink-0" strokeWidth={2} />
                          <span className="text-cetl-text text-xs leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Methodology flow: how it plays out step by step */}
        {t.METHODOLOGY_STEPS && t.METHODOLOGY_STEPS.length > 0 && (
          <div className="max-w-5xl mx-auto mt-14 pt-14 border-t border-cetl-border">
            <h3 className="font-display text-cetl-navy-900 text-xl sm:text-2xl font-bold text-center mb-3">
              {t.UI.methodology.title}
            </h3>
            <p className="text-cetl-text-muted text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto mb-10">
              {t.UI.methodology.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-10">
              {t.METHODOLOGY_STEPS.map((step, i) => {
                const Icon = FLOW_ICON_MAP[step.icon] ?? Lightbulb;
                return (
                  <div key={step.n} className="flex items-center">
                    <div className="flex flex-col items-center gap-3 text-center max-w-[200px]">
                      <span className="text-cetl-gold-700 text-xs font-semibold tracking-widest">{step.n}</span>
                      <div className="w-16 h-16 rounded-full bg-cetl-gold-200/50 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-cetl-gold-700" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <span className="font-display text-base font-bold text-cetl-navy-900">{step.title}</span>
                      <p className="text-cetl-text-muted text-xs leading-relaxed">{step.description}</p>
                    </div>
                    {i < t.METHODOLOGY_STEPS.length - 1 && (
                      <div className="hidden md:block w-8 lg:w-10 h-px bg-cetl-border mx-1 -translate-y-10" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-10">
              <Link
                href="/programme/ki-kompetenzprogramm"
                className="text-cetl-gold-700 text-sm font-semibold hover:text-cetl-navy-900 transition-colors duration-200 flex items-center gap-1.5"
              >
                {t.UI.methodology.cta}
                <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
