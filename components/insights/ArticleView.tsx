"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import { ARTICLES, getArticle } from "@/lib/insights-articles";
import type { ArticleBlock } from "@/lib/content-types";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { InsightCard } from "./InsightCard";

// Inline-Markup: **text** → <strong>. Kein weiteres Markdown nötig.
function renderInline(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-cetl-text font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function Block({ block, lang }: { block: ArticleBlock; lang: "de" | "en" }) {
  const [qOpen, qClose] = lang === "de" ? ["„", "“"] : ["“", "”"];
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display text-2xl md:text-3xl font-bold text-cetl-text leading-tight mt-14 mb-5">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-lg md:text-xl font-semibold text-cetl-gold-light leading-snug mt-9 mb-3">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-cetl-gold pl-6 md:pl-8 py-1">
          <p className="font-display italic text-xl md:text-2xl text-cetl-text leading-relaxed">
            {qOpen}
            {block.text}
            {qClose}
          </p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-6 flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-cetl-text-muted text-lg leading-relaxed">
              <span className="text-cetl-gold mt-[2px] shrink-0" aria-hidden>
                —
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "olist":
      return (
        <ol className="my-6 flex flex-col gap-3 [counter-reset:item]">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-cetl-text-muted text-lg leading-relaxed">
              <span className="font-display text-cetl-gold font-semibold shrink-0 w-6 text-right">
                {i + 1}.
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
    default:
      return <p className="my-5 text-cetl-text-muted text-lg leading-relaxed">{renderInline(block.text)}</p>;
  }
}

export function ArticleView({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const ui = t.UI.insights;
  const article = getArticle(lang, slug) ?? getArticle("de", slug);
  if (!article) return null;

  const others = ARTICLES[lang].filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <NavBar />
      <main className="bg-cetl-dark min-h-screen">
        {/* Header */}
        <header className="relative pt-36 md:pt-44 pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-[15%] w-[500px] h-[400px] rounded-full bg-cetl-gold/[0.05] blur-[140px]" />
            <div className="absolute bottom-0 right-[10%] w-[400px] h-[300px] rounded-full bg-cetl-violet/[0.06] blur-[120px]" />
          </div>
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-cetl-text-muted hover:text-cetl-gold text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-200 mb-8"
              >
                <span aria-hidden>←</span> {ui.back}
              </Link>

              <div className="flex items-center gap-3 flex-wrap mb-6">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-cetl-gold border border-cetl-gold/30 px-2 py-0.5 rounded-sm">
                  {article.tag}
                </span>
                <span className="text-cetl-text-muted text-xs">{article.category}</span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-bold text-cetl-text leading-tight tracking-tight mb-6">
                {article.title}
              </h1>

              <p className="text-cetl-text-muted text-lg md:text-xl leading-relaxed mb-8">{article.teaser}</p>

              <div className="flex items-center gap-4 flex-wrap text-xs text-cetl-text-muted">
                <span className="text-cetl-gold-light font-medium">{ui.byline}</span>
                <span aria-hidden>·</span>
                <span>
                  {ui.published} {article.date}
                </span>
                <span aria-hidden>·</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </Container>
        </header>

        <Container>
          <GoldDivider />
        </Container>

        {/* Body */}
        <article className="py-14 md:py-20">
          <Container>
            <div className="max-w-3xl [&>p:first-of-type]:first-letter:font-display [&>p:first-of-type]:first-letter:text-5xl [&>p:first-of-type]:first-letter:font-bold [&>p:first-of-type]:first-letter:text-cetl-gold [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:leading-[0.85]">
              {article.blocks.map((block, i) => (
                <Block key={i} block={block} lang={lang} />
              ))}
            </div>
          </Container>
        </article>

        {/* CTA */}
        <section className="pb-20">
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

        {/* More articles */}
        <section className="pb-24">
          <Container>
            <p className="text-cetl-gold text-xs tracking-[0.3em] uppercase font-semibold mb-8">{ui.moreLabel}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((item) => (
                <InsightCard key={item.slug} item={item} readCta={ui.readCta} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
