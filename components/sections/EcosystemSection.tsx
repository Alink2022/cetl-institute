"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function EcosystemSection() {
  const { t } = useLanguage();
  const ecosystem = t.UI.ecosystem;

  if (!t.ECOSYSTEM_NODES || t.ECOSYSTEM_NODES.length === 0) return null;

  return (
    <section className="relative py-32 lg:py-44 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold-400 to-transparent opacity-40" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Diagram side */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                {ecosystem.eyebrow}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cetl-text leading-tight">
                {ecosystem.headline}
              </h2>
            </div>
            <Image
              src="/elaas/cetl-ecosystem.png"
              alt={ecosystem.headline}
              width={1200}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Nodes list side */}
          <div className="flex flex-col gap-8">
            <p className="text-cetl-text-muted text-lg leading-relaxed">{ecosystem.intro}</p>

            <div className="flex flex-col gap-5">
              {t.ECOSYSTEM_NODES.map((node) => (
                <div
                  key={node.number}
                  className="flex gap-4 p-4 -mx-4 rounded-xl hover:bg-cetl-gold/5 transition-colors duration-300"
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center shrink-0 mt-0.5 rounded-lg bg-cetl-navy-700 border border-cetl-gold-400/30"
                    aria-hidden="true"
                  >
                    <span className="font-display text-[11px] font-bold text-cetl-gold-400">{node.number}</span>
                  </div>
                  <div>
                    <p className="text-cetl-text font-semibold text-sm mb-1">{node.title}</p>
                    <p className="text-cetl-text-muted text-sm">{node.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
