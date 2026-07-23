"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import { ARTICLE_IMAGES, ARTICLE_META } from "@/lib/insights-index";
import type { Article, ArticleBlock } from "@/lib/content-types";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { InsightCard } from "./InsightCard";

// Anker-IDs für Deep-Links auf Zwischenüberschriften.
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Inline-Markup: **text** → <strong>. Kein weiteres Markdown nötig.
function renderInline(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white font-semibold">
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
        <h2
          id={slugify(block.text)}
          className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mt-14 mb-5 scroll-mt-28"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-lg md:text-xl font-semibold text-cetl-gold-deep leading-snug mt-9 mb-3">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-cetl-gold pl-6 md:pl-8 py-1">
          <p className="font-display italic text-xl md:text-2xl text-white/85 leading-relaxed">
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
            <li key={i} className="flex gap-3 text-white/70 text-lg leading-relaxed">
              <span className="text-cetl-gold-deep mt-[2px] shrink-0" aria-hidden>
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
            <li key={i} className="flex gap-3 text-white/70 text-lg leading-relaxed">
              <span className="font-display text-cetl-gold-deep font-semibold shrink-0 w-6 text-right">
                {i + 1}.
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
    default:
      return <p className="my-5 text-white/70 text-lg leading-relaxed">{renderInline(block.text)}</p>;
  }
}

export function ArticleView({ slug, article }: { slug: string; article: Record<"de" | "en", Article> }) {
  const { lang, t } = useLanguage();
  const ui = t.UI.insights;
  const [copied, setCopied] = useState(false);
  // Volltext des aktuellen Artikels kommt als Prop vom Server (beide Sprachen);
  // die Sprachumschaltung erfolgt client-seitig ohne Neuladen.
  const current = article[lang] ?? article.de;

  // Navigation nutzt nur die leichtgewichtigen Karten-Metadaten (keine Volltexte).
  const list = ARTICLE_META[lang];
  // Thematisch verwandte Analysen zuerst (gleicher Tag), dann Rest in Originalreihenfolge.
  const others = [...list.filter((a) => a.slug !== slug)]
    .sort((a, b) => Number(b.tag === current.tag) - Number(a.tag === current.tag))
    .slice(0, 3);

  const idx = list.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;

  const articleUrl = `${t.SITE.url.replace(/\/$/, "")}/insights/${slug}`;
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard nicht verfügbar (z. B. unsicherer Kontext) — Button bleibt folgenlos.
    }
  };

  return (
    <>
      <NavBar />
      <main className="bg-cetl-dark min-h-screen">
        {/* Header */}
        <header className="relative pt-36 md:pt-44 pb-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-[15%] w-[500px] h-[400px] rounded-full bg-cetl-gold/[0.05] blur-[140px]" />
            <div className="absolute bottom-0 right-[10%] w-[400px] h-[300px] rounded-full bg-cetl-gold-400/[0.06] blur-[120px]" />
          </div>
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-white/60 hover:text-cetl-gold-deep text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-200 mb-8"
              >
                <span aria-hidden>←</span> {ui.back}
              </Link>

              <div className="flex items-center gap-3 flex-wrap mb-6">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-cetl-gold-deep border border-cetl-gold/30 px-2 py-0.5 rounded-sm">
                  {current.tag}
                </span>
                <span className="text-white/60 text-xs">{current.category}</span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                {current.title}
              </h1>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8">{current.teaser}</p>

              <div className="flex items-center gap-4 flex-wrap text-xs text-white/60">
                <span className="text-cetl-gold-deep font-medium">{ui.byline}</span>
                <span aria-hidden>·</span>
                <span>
                  {ui.published} {current.date}
                </span>
                <span aria-hidden>·</span>
                <span>{current.readTime}</span>
              </div>

              {/* Share */}
              <div className="flex items-center gap-3 mt-6">
                <span className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  {ui.share}
                </span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/50 hover:text-cetl-gold-deep border border-white/20 hover:border-cetl-gold/40 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <button
                  type="button"
                  onClick={copyLink}
                  className="text-white/50 hover:text-cetl-gold-deep border border-white/20 hover:border-cetl-gold/40 rounded-sm px-3 py-1.5 text-xs font-medium transition-colors duration-200 cursor-pointer"
                >
                  {copied ? ui.shareCopied : "Link"}
                </button>
              </div>
            </div>
          </Container>
        </header>

        <Container>
          <GoldDivider />
        </Container>

        {/* Key visual */}
        {ARTICLE_IMAGES[slug] && (
          <Container>
            <div className="relative max-w-4xl aspect-[16/9] mt-12 overflow-hidden rounded-sm ring-1 ring-cetl-border">
              <Image
                src={ARTICLE_IMAGES[slug].src}
                alt={ARTICLE_IMAGES[slug].alt}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cetl-dark/40 to-transparent" />
            </div>
          </Container>
        )}

        {/* Body */}
        <article className="py-14 md:py-20">
          <Container>
            <div className="max-w-3xl [&>p:first-of-type]:first-letter:font-display [&>p:first-of-type]:first-letter:text-5xl [&>p:first-of-type]:first-letter:font-bold [&>p:first-of-type]:first-letter:text-cetl-gold-deep [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:leading-[0.85]">
              {current.blocks.map((block, i) => (
                <Block key={i} block={block} lang={lang} />
              ))}
            </div>
          </Container>
        </article>

        {/* Prev / Next */}
        {(prev || next) && (
          <nav className="pb-14" aria-label={`${ui.prevLabel} / ${ui.nextLabel}`}>
            <Container>
              <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    href={`/insights/${prev.slug}`}
                    className="group border border-cetl-border hover:border-cetl-gold/40 rounded-sm p-5 transition-colors duration-200"
                  >
                    <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">
                      ← {ui.prevLabel}
                    </p>
                    <p className="font-display text-white text-sm font-semibold leading-snug group-hover:text-cetl-gold-deep transition-colors duration-200">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <span aria-hidden />
                )}
                {next && (
                  <Link
                    href={`/insights/${next.slug}`}
                    className="group border border-cetl-border hover:border-cetl-gold/40 rounded-sm p-5 text-right transition-colors duration-200"
                  >
                    <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">
                      {ui.nextLabel} →
                    </p>
                    <p className="font-display text-white text-sm font-semibold leading-snug group-hover:text-cetl-gold-deep transition-colors duration-200">
                      {next.title}
                    </p>
                  </Link>
                )}
              </div>
            </Container>
          </nav>
        )}

        {/* Author */}
        <section className="pb-14">
          <Container>
            <div className="max-w-3xl border border-cetl-border rounded-sm p-7 md:p-8 flex flex-col sm:flex-row gap-6 items-start bg-cetl-surface/40">
              <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden ring-1 ring-cetl-gold/40">
                <Image
                  src="/alin-kalam.webp"
                  alt={t.MANAGING_DIRECTOR.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-cetl-gold-deep text-[10px] tracking-[0.3em] uppercase font-semibold mb-2">
                  {ui.authorLabel}
                </p>
                <p className="font-display text-white text-lg font-semibold leading-snug">
                  {t.MANAGING_DIRECTOR.name}
                </p>
                <p className="text-white/60 text-xs mb-3">
                  {t.MANAGING_DIRECTOR.title}, CETL Institute · {t.MANAGING_DIRECTOR.headline}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{t.MANAGING_DIRECTOR.bio}</p>
                <a
                  href={t.MANAGING_DIRECTOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cetl-gold-deep text-xs font-medium tracking-wide hover:underline underline-offset-4"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <Container>
            <div className="glass-panel rounded-sm p-8 md:p-12 max-w-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cetl-gold/60 to-cetl-gold-light/30" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{ui.ctaTitle}</h2>
              <p className="text-white/60 text-base leading-relaxed mb-7 max-w-xl">{ui.ctaText}</p>
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
            <p className="text-cetl-gold-deep text-xs tracking-[0.3em] uppercase font-semibold mb-8">{ui.moreLabel}</p>
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
