"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/lib/i18n";

const CONTENT = {
  de: {
    label: "Strategischer Partner",
    name: "Specific-Group Holding",
    description:
      "25 Jahre Enterprise-IT-Erfahrung — SPG überträgt CETL-Programme in reale Transformationsprojekte für Banken, Industrie und den öffentlichen Sektor.",
    stats: [
      { value: "25+", label: "Jahre Erfahrung" },
      { value: "500+", label: "Expert:innen" },
      { value: "10+", label: "Standorte" },
      { value: "50+", label: "Enterprise-Kunden" },
    ],
    cta: { label: "Mehr über SPG", href: "https://specific-group.com" },
  },
  en: {
    label: "Strategic Partner",
    name: "Specific-Group Holding",
    description:
      "25 years of enterprise IT experience — SPG translates CETL programs into real transformation projects for banking, industry, and the public sector.",
    stats: [
      { value: "25+", label: "Years of Experience" },
      { value: "500+", label: "Experts" },
      { value: "10+", label: "Locations" },
      { value: "50+", label: "Enterprise Clients" },
    ],
    cta: { label: "Learn more about SPG", href: "https://specific-group.com" },
  },
};

export function SPGPartnerSection() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <section id="spg-partner" className="py-24 lg:py-32 bg-cetl-dark">
      <Container>
        <TiltCard className="gradient-edge relative bg-cetl-surface rounded-2xl border border-cetl-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <Badge variant="gold" className="mb-4">
                {c.label}
              </Badge>
              <div className="flex items-center gap-5 mb-5">
                <div className="w-20 h-20 rounded-2xl bg-cetl-gold/10 border border-cetl-gold/20 flex items-center justify-center shrink-0 p-3">
                  <Image
                    src="/logos/spg.png"
                    alt="Specific-Group"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-cetl-text">{c.name}</h3>
              </div>
              <p className="text-cetl-text-muted text-sm md:text-base leading-relaxed max-w-xl">
                {c.description}
              </p>
            </div>

            <div className="flex flex-col gap-6 md:w-72 shrink-0">
              <div className="grid grid-cols-2 gap-3">
                {c.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-0.5 px-4 py-3 rounded-xl border border-cetl-border bg-cetl-surface-2"
                  >
                    <span className="font-display text-xl font-bold text-cetl-gold">{stat.value}</span>
                    <span className="text-cetl-text-muted text-[11px] uppercase tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
              <a
                href={c.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-cetl-gold/40 bg-cetl-gold/5 text-cetl-gold text-sm font-semibold hover:bg-cetl-gold/10 hover:border-cetl-gold/60 transition-all duration-200"
              >
                {c.cta.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </TiltCard>
      </Container>
    </section>
  );
}
