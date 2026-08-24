"use client";

import Link from "next/link";
import Image from "next/image";
import { ARTICLE_IMAGES } from "@/lib/insights-index";
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
              <p className="text-cetl-gold-deep text-xs tracking-[0.3em] uppercase font-semibold mb-4">{ui.label}</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
                {ui.pageTitle}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">{ui.pageSubtitle}</p>
            </div>
          </Container>
        </header>

        <Container>
          <GoldDivider />
        </Container>

        {/* Featured + Grid */}
        <section className="py-14 md:py-20">
          <Container>
            {t.INSIGHTS[0] && (
              <Link
                href={`/insights/${t.INSIGHTS[0].slug}`}
                className="group grid grid-cols-1 md:grid-cols-2 bg-cetl-surface border border-cetl-border rounded-sm overflow-hidden hover:border-cetl-gold/30 transition-all duration-300 mb-10"
              >
                {ARTICLE_IMAGES[t.INSIGHTS[0].slug] && (
                  <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[320px] overflow-hidden">
                    <Image
                      src={ARTICLE_IMAGES[t.INSIGHTS[0].slug].src}
                      alt={ARTICLE_IMAGES[t.INSIGHTS[0].slug].alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-cetl-surface/60 to-transparent" />
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col gap-4 justify-center">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-cetl-gold-deep border border-cetl-gold/30 px-2 py-0.5 rounded-sm">
                      {t.INSIGHTS[0].tag}
                    </span>
                    <span className="text-cetl-text-muted text-[11px]">{t.INSIGHTS[0].category}</span>
                  </div>
                  <h2 className="font-display text-cetl-text text-2xl md:text-3xl font-bold leading-snug group-hover:text-cetl-gold-deep transition-colors duration-300">
                    {t.INSIGHTS[0].title}
                  </h2>
                  <p className="text-cetl-text-muted text-base leading-relaxed">{t.INSIGHTS[0].teaser}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-cetl-border/50">
                    <span className="text-cetl-text-muted text-xs">{t.INSIGHTS[0].readTime}</span>
                    <span className="text-cetl-gold-deep text-xs font-medium tracking-wide group-hover:underline underline-offset-4">
                      {ui.readCta} →
                    </span>
                  </div>
                </div>
              </Link>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.INSIGHTS.slice(1).map((item) => (
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
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{ui.ctaTitle}</h2>
              <p className="text-white/60 text-base leading-relaxed mb-7 max-w-xl">{ui.ctaText}</p>
              <Link
                href={`mailto:${t.SITE.formEmail}`}
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
