"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

export function TestimonialsSection() {
  const { t } = useLanguage();
  const ui = t.UI.testimonials;

  return (
    <section id="testimonials" className="py-14 lg:py-20 bg-cetl-surface relative overflow-hidden">
      {/* Subtle ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[30%] w-[600px] h-[400px] rounded-full bg-cetl-gold/[0.05] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cetl-gold-deep text-xs tracking-[0.3em] uppercase font-semibold mb-3">{ui.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cetl-text mb-4">{ui.title}</h2>
          <p className="text-cetl-text-muted text-sm max-w-3xl mx-auto">{ui.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.TESTIMONIALS.map((item, i) => (
            <div
              key={i}
              className="relative bg-cetl-dark border border-cetl-border rounded-sm p-7 flex flex-col gap-5 hover:border-cetl-gold/30 transition-colors duration-300 group"
            >
              {/* Opening quote mark */}
              <div
                className="font-display text-6xl leading-none select-none"
                aria-hidden="true"
                style={{
                  background: "linear-gradient(135deg, var(--color-cetl-gold), var(--color-cetl-gold-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.6,
                }}
              >
                &ldquo;
              </div>

              <blockquote className="text-white/85 text-[15px] leading-[1.75] font-light flex-1 -mt-4">
                {item.quote}
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-white/10 pt-4 flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1 flex-1">
                <span className="text-white text-sm font-semibold">{item.role}</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-cetl-gold-400 text-xs font-medium">{item.sector}</span>
                  <span className="text-white/30 text-xs">·</span>
                  <span className="text-white/50 text-xs">{item.orgSize}</span>
                </div>
                  <span className="text-white/40 text-xs tracking-wide uppercase mt-1">
                    {ui.anonymousNote}
                  </span>
                </div>
                <Image src="/cetl-logo.webp" alt="CETL Institute" width={28} height={28} className="opacity-30 shrink-0 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
