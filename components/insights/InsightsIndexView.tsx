"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { InsightCard } from "./InsightCard";

export function InsightsIndexView() {
  const { t } = useLanguage();
  const ui = t.UI.insights;

  return (
    <>
      <NavBar />
      <main className="bg-cetl-dark min-h-screen">
        {/* Header */}
        <header className="relative pt-36 md:pt-44 pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 right-[20%] w-[500px] h-[400px] rounded-full bg-cetl-gold/[0.05] blur-[140px]" />
          </div>
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <p className="text-cetl-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">{ui.label}</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-cetl-text leading-tight tracking-tight mb-5">
                {ui.pageTitle}
              </h1>
              <p className="text-cetl-text-muted text-lg leading-relaxed">{ui.pageSubtitle}</p>
            </div>
          </Container>
        </header>

        <Container>
          <GoldDivider />
        </Container>

        {/* Grid */}
        <section className="py-14 md:py-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.INSIGHTS.map((item) => (
                <InsightCard key={item.slug} item={item} readCta={ui.readCta} />
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <Container>
            <div className="glass-panel rounded-sm p-8 md:p-12 max-w-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cetl-gold/60 to-cetl-gold-light/30" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-cetl-text mb-4">{ui.ctaTitle}</h2>
              <p className="text-cetl-text-muted text-base leading-relaxed mb-7 max-w-xl">{ui.ctaText}</p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-cetl-gold hover:bg-cetl-gold-light text-cetl-darker font-semibold text-sm tracking-wide px-6 py-3 rounded-sm transition-colors duration-200"
              >
                {ui.ctaButton} <span aria-hidden>→</span>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
