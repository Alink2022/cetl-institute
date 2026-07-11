"use client";

import Image from "next/image";
import { Globe } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function ELaaSSection() {
  const { t } = useLanguage();
  const elaas = t.UI.elaas;

  return (
    <section id="elaas" className="relative py-24 lg:py-32 bg-cetl-surface">
      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <Image src="/cetl-logo.png" alt="" width={420} height={420} className="opacity-[0.03] select-none" aria-hidden="true" unoptimized />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-violet to-transparent opacity-40" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + description */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <SectionHeader label={elaas.label} title={elaas.title} subtitle={elaas.subtitle} align="left" />

            {/* Key visual: Executive-Session */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-cetl-border">
              <Image
                src="/k.png"
                alt="Executive-Education-Session: Führungskräfte an einem Boardroom-Tisch vor Wandscreens mit goldenen Datenvisualisierungen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cetl-surface/50 to-transparent" />
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t border-cetl-border">
              <p className="text-cetl-text-muted text-sm leading-relaxed">{elaas.paragraph}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {elaas.badges.map((badge) => (
                  <Badge key={badge} variant="muted">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative bg-cetl-dark border border-cetl-gold/20 rounded-2xl p-6 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cetl-gold/10 blur-3xl pointer-events-none" />
              <div className="relative flex items-center gap-2 mb-3">
                <Globe className="w-4 h-4 text-cetl-gold" strokeWidth={1.5} aria-hidden="true" />
                <p className="text-cetl-gold text-xs font-semibold tracking-widest uppercase">
                  {elaas.partnershipLabel}
                </p>
              </div>
              <p className="relative text-cetl-text text-sm leading-relaxed">
                {elaas.partnershipBefore}{" "}
                <strong className="text-cetl-text font-semibold">{elaas.partnershipHackathon}</strong>{" "}
                {elaas.partnershipAfter}
              </p>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex flex-col gap-6">
            {t.ELAAS_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="gradient-edge flex gap-6 p-6 bg-cetl-dark rounded-2xl border border-cetl-border hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cetl-gold/20 to-cetl-violet/10 border border-cetl-gold/30 flex items-center justify-center text-cetl-gold font-display font-bold text-xs shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="text-cetl-text font-semibold mb-2">{feature.title}</h4>
                  <p className="text-cetl-text-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
