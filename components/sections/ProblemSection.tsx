"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function ProblemSection() {
  const { t } = useLanguage();
  const problem = t.UI.problem;
  const ecosystem = t.UI.ecosystem;

  return (
    <section id="about" className="relative py-14 lg:py-44 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Ecosystem side */}
          <div className="flex flex-col gap-6 h-full">
            <div>
              <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                {ecosystem.eyebrow}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-cetl-text leading-tight">
                {ecosystem.headline}
              </h3>
            </div>
            <Image
              src="/elaas/cetl-ecosystem.png"
              alt={ecosystem.headline}
              width={1200}
              height={1000}
              className="w-full h-auto object-contain"
            />
            {ecosystem.bottomBand && ecosystem.bottomBand.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-auto pt-2">
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
          </div>

          {/* Problems side */}
          <div className="flex flex-col gap-8">
            <p className="text-cetl-text-muted text-lg leading-relaxed">
              {problem.intro} {ecosystem.intro}
            </p>

            <div className="flex flex-col gap-5">
              {t.PROBLEM_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 -mx-4 rounded-xl hover:bg-cetl-gold/5 transition-colors duration-300"
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center shrink-0 mt-0.5 rounded-lg bg-cetl-surface-2 border border-cetl-border"
                    aria-hidden="true"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="var(--color-cetl-gold)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="8" cy="8" r="5.5" />
                      <path d="M4.5 4.5l7 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cetl-text font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-cetl-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-cetl-border">
              <p className="text-cetl-gold-deep font-semibold text-sm tracking-wide uppercase">{problem.answer}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
