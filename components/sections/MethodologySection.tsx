"use client";

import Image from "next/image";
import {
  GraduationCap, BookOpen, Settings2, Lightbulb, CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { ProductIconName } from "@/lib/content-types";

const CAPABILITY_ICON_MAP: Partial<Record<ProductIconName, React.ElementType>> = {
  GraduationCap, BookOpen, Settings2, Lightbulb,
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
                      <div className="w-14 h-14 rounded-full bg-cetl-gold-200/50 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-cetl-gold-700" strokeWidth={1.5} />
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
      </Container>
    </section>
  );
}
