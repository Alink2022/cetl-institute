"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function ProblemSection() {
  const { t } = useLanguage();
  const problem = t.UI.problem;

  return (
    <section id="about" className="relative py-32 lg:py-44 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />
      <span
        className="absolute -top-10 left-4 lg:left-10 font-display text-[14rem] leading-none font-bold text-cetl-gold/[0.05] select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Quote side */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cetl-gold to-transparent opacity-40" />
            <p className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-cetl-text leading-[1.15] pl-8">
              &ldquo;{problem.quoteBefore}{" "}
              <span className="cetl-gold-text">{problem.quoteHighlight1}</span>
              {problem.quoteMiddle}{" "}
              <span className="cetl-gold-text">{problem.quoteHighlight2}</span>.&rdquo;
            </p>
          </div>

          {/* Problems side */}
          <div className="flex flex-col gap-8">
            <p className="text-cetl-text-muted text-lg leading-relaxed">{problem.intro}</p>

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
