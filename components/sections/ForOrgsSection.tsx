"use client";

import { useLanguage } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ForOrgsSection() {
  const { t } = useLanguage();
  const ui = t.UI.forOrgs;

  return (
    <section id="services" className="py-24 bg-cetl-surface/30 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[700px] h-[500px] rounded-full bg-cetl-blue/[0.08] blur-[160px]" />
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[400px] rounded-full bg-cetl-gold/[0.05] blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: header + CTAs */}
          <div>
            <p className="text-cetl-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">{ui.label}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-[1.1] mb-6">
              {ui.title}
            </h2>
            <p className="text-cetl-text-muted text-base leading-relaxed mb-10">{ui.subtitle}</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton
                href="#contact"
                className="px-8 py-4 bg-cetl-blue text-white font-semibold tracking-wide text-center block overflow-hidden group relative shadow-[0_4px_24px_-8px_rgba(46,111,232,0.5)]"
              >
                <span className="relative z-10">{ui.ctaPrimary}</span>
                <span className="absolute inset-0 bg-cetl-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="px-8 py-4 border border-cetl-border text-cetl-text-muted hover:border-cetl-gold/50 hover:text-cetl-gold text-center block transition-all duration-300 font-medium"
              >
                {ui.ctaSecondary}
              </MagneticButton>
            </div>

            {/* Compliance note */}
            <p className="mt-8 text-cetl-text-muted/50 text-xs leading-relaxed border-l-2 border-cetl-border pl-4">
              {t.SITE.complianceNote}
            </p>
          </div>

          {/* Right: 4 feature items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cetl-border/30">
            {ui.items.map((item, i) => (
              <div
                key={i}
                className="bg-cetl-darker p-6 flex flex-col gap-3 hover:bg-cetl-surface transition-colors duration-300"
              >
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold font-display text-cetl-gold border border-cetl-gold/25 bg-cetl-gold/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-cetl-text font-semibold text-sm">{item.title}</h3>
                <p className="text-cetl-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
