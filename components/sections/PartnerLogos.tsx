"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";
import type { Partner } from "@/lib/content-types";

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="group flex flex-col items-center gap-3 cursor-default">
      <div
        className={[
          "relative flex items-center justify-center",
          "w-full h-[100px] rounded-2xl px-8",
          "border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent",
          "ring-1 ring-inset ring-white/[0.04]",
          "group-hover:border-cetl-gold/25 group-hover:from-cetl-gold/[0.05]",
          "group-hover:shadow-[0_8px_32px_rgba(201,168,76,0.08),0_0_0_1px_rgba(201,168,76,0.12)]",
          "group-hover:-translate-y-1",
          "transition-all duration-400 ease-out",
        ].join(" ")}
      >
        {/* Corner accents on hover */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cetl-gold/0 group-hover:border-cetl-gold/30 transition-all duration-300 rounded-tl-sm" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cetl-gold/0 group-hover:border-cetl-gold/30 transition-all duration-300 rounded-tr-sm" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cetl-gold/0 group-hover:border-cetl-gold/30 transition-all duration-300 rounded-bl-sm" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cetl-gold/0 group-hover:border-cetl-gold/30 transition-all duration-300 rounded-br-sm" />

        <Image
          src={partner.logo}
          alt={partner.name}
          width={partner.logoWidth ?? 120}
          height={partner.logoHeight ?? 40}
          style={{ maxWidth: 140, maxHeight: 52, width: "auto", height: "auto" }}
          className="object-contain opacity-40 group-hover:opacity-90 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-400"
          unoptimized
        />
      </div>

      <div className="text-center">
        <p className="text-white/60 group-hover:text-white/90 text-[11px] font-semibold tracking-wide transition-colors duration-300">
          {partner.name}
        </p>
        <p className="text-cetl-text-muted/40 group-hover:text-cetl-gold/60 text-[9px] tracking-[0.2em] uppercase font-medium mt-0.5 transition-colors duration-300">
          {partner.sub}
        </p>
      </div>
    </div>
  );
}

export function PartnerLogos() {
  const { t } = useLanguage();
  const partners = t.UI.partners;

  return (
    <section id="partners" className="relative py-28 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(201,168,76,0.03),transparent)]" />

      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cetl-gold/40" />
            <span className="text-cetl-gold/60 text-[9px] font-semibold tracking-[0.35em] uppercase">
              Institutionelle Verankerung
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cetl-gold/40" />
          </div>
          <h2 className="text-white/80 text-2xl font-light tracking-tight">
            {partners.trusted}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.PARTNERS.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>

        {/* Divider + blurb */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cetl-border to-transparent" />
          <p className="text-cetl-text-muted/60 text-sm leading-relaxed text-center max-w-lg">
            {partners.blurbBefore}{" "}
            <span className="text-cetl-gold/80 font-medium">{partners.blurbHackathon}</span>
            {" "}{partners.blurbAfter}
          </p>
        </div>
      </Container>
    </section>
  );
}
