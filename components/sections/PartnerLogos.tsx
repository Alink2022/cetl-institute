"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { Partner } from "@/lib/content-types";

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex flex-col items-center gap-1.5 shrink-0 group">
      <div className="px-7 py-3.5 rounded-xl border border-cetl-border bg-cetl-dark/60 grayscale group-hover:grayscale-0 group-hover:border-cetl-gold/30 group-hover:-translate-y-0.5 transition-all duration-300">
        <span className="text-cetl-text-muted group-hover:text-cetl-text font-display font-semibold text-sm tracking-wide transition-colors duration-200 whitespace-nowrap">
          {partner.name}
        </span>
      </div>
      <span className="text-cetl-text-muted/60 text-xs tracking-wide whitespace-nowrap">{partner.sub}</span>
    </div>
  );
}

export function PartnerLogos() {
  const { t } = useLanguage();
  const partners = t.UI.partners;

  return (
    <section id="partners" className="relative py-20 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-violet to-transparent opacity-40" />
      <Container>
        <p className="text-center text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-12">
          {partners.trusted}
        </p>
      </Container>

      <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track gap-10">
          {[...t.PARTNERS, ...t.PARTNERS].map((partner, i) => (
            <PartnerCard key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      <Container>
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-cetl-text-muted text-sm leading-relaxed">
            {partners.blurbBefore}{" "}
            <span className="text-cetl-text font-medium">{partners.blurbHackathon}</span> {partners.blurbAfter}
          </p>
        </div>
      </Container>
    </section>
  );
}
