"use client";

import { Fragment, useState, type ReactNode } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import type { ArticleBlock } from "@/lib/content-types";
import type { ThinkTankArticle } from "@/lib/thinktank-articles";
import {
  citation, fieldTitle, formatName, monthYear, pubMeta, sortedPublications, splitTitle, TT_AUTHORS,
  type AudienceId, type Lang, type TTPublication,
} from "@/lib/thinktank";
import { TT_COPY } from "@/lib/thinktank-copy";
import { Icon } from "@/components/ui/IconSprite";
import { PubCard } from "./PubCard";

const SITE = "https://www.cetl.institute";
const AUDIENCE_ORDER: AudienceId[] = ["board", "hr", "ld"];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Inline-Markup: **text** → <strong>.
function inline(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>));
}

function Block({ block, lang }: { block: ArticleBlock; lang: Lang }) {
  const [open, close] = lang === "de" ? ["„", "“"] : ["“", "”"];
  switch (block.type) {
    case "h2":
      return <h2 id={slugify(block.text)}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "quote":
      return <blockquote><p>{open}{block.text}{close}</p></blockquote>;
    case "list":
      return <ul>{block.items.map((it, i) => <li key={i}>{inline(it)}</li>)}</ul>;
    case "olist":
      return <ol>{block.items.map((it, i) => <li key={i}>{inline(it)}</li>)}</ol>;
    default:
      return <p>{inline(block.text)}</p>;
  }
}

export function ArticleView({ pub, article }: { pub: TTPublication; article: Record<Lang, ThinkTankArticle> }) {
  const { lang } = useLanguage();
  const copy = TT_COPY[lang].article;
  const current = article[lang] ?? article.de;
  const { extras } = current;
  const { main, sub } = splitTitle(current.title);
  const [copied, setCopied] = useState<"cite" | "link" | null>(null);

  const authors = pub.authors.map((id) => TT_AUTHORS[id]).filter(Boolean);
  const guest = authors.find((a) => a.guest);
  const url = `${SITE}/think-tank/${pub.slug}`;
  const cite = citation(pub, lang);

  const all = sortedPublications();
  const idx = all.findIndex((p) => p.slug === pub.slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;
  const more = all
    .filter((p) => p.slug !== pub.slug)
    .sort((a, b) => Number(b.field === pub.field) - Number(a.field === pub.field))
    .slice(0, 3);

  const copyText = async (text: string, what: "cite" | "link") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(what);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Zwischenablage nicht verfügbar (z. B. unsicherer Kontext): Button bleibt folgenlos.
    }
  };

  const groups = AUDIENCE_ORDER.filter((a) => extras.implications[a]?.length);

  return (
    <>
      {/* Kopf */}
      <section className="tt-art-head">
        <div className="wrap">
          <div className="inner">
            <div className="print-only">CETL Think Tank · {formatName(pub.format, lang)} {lang === "de" ? "Nr." : "No."} {pub.number} · {url.replace("https://", "")}</div>
            <Link href="/think-tank" className="back no-print">← {copy.back}</Link>
            <div className="chips">
              <span className="chip solid">{formatName(pub.format, lang)} {lang === "de" ? "Nr." : "No."} {pub.number}</span>
              <span className="chip">{fieldTitle(pub.field, lang)}</span>
              <span className="chip">{current.readTime}</span>
            </div>
            <h1>{main}</h1>
            {sub && <p className="subtitle">{sub}</p>}
            {guest && <span className="guestbadge">{copy.guestBadge(guest.name, guest.org, guest.country)}</span>}
            <div className="byline">
              <span><strong>{authors.map((a) => a.name).join(", ")}</strong>, {authors[0]?.role[lang]}</span>
              <span>{copy.published} {monthYear(pub.dateISO, lang)}</span>
              <span>{copy.version} {pub.version}</span>
            </div>
            <div className="actions no-print">
              <button type="button" className="btn btn-primary" onClick={() => window.print()}>{copy.pdf}</button>
              <a
                className="btn btn-ghost"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.linkedin}
              </a>
              <button type="button" className="btn btn-ghost" onClick={() => copyText(url, "link")}>
                {copied === "link" ? copy.copied : copy.copyLink}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="tt-article">
        {/* Gast: Offenlegung */}
        {authors.filter((a) => a.disclosure).map((a) => (
          <div className="disclosure" key={a.id}><strong>{copy.disclosure}:</strong> {a.disclosure![lang]}</div>
        ))}

        {/* Kernaussagen */}
        <aside className="kern">
          <h2>{copy.kern}</h2>
          <ul>
            {extras.keyFindings.map((k) => (
              <li key={k}><Icon name="check" className="ic-check" /><span>{k}</span></li>
            ))}
          </ul>
        </aside>

        {/* Text */}
        <article className="prose">
          {current.blocks.map((b, i) => <Block key={i} block={b} lang={lang} />)}
        </article>

        {/* Was das für Sie bedeutet */}
        {groups.length > 0 && (
          <section className="tt-block" style={{ padding: "3rem 0 0" }}>
            <h2>{copy.implications.title}</h2>
            <p className="lead">{copy.implications.lead}</p>
            <div className="impl">
              {groups.map((g) => (
                <div className="card" key={g}>
                  <h3>{copy.implications.groups[g]}</h3>
                  <ul>{extras.implications[g]!.map((q) => <li key={q}>{q}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quellen und Methodik */}
        <section className="tt-block" style={{ padding: "3rem 0 0" }}>
          <h2>{lang === "de" ? "Quellen und Methodik" : "Sources and methodology"}</h2>
          <div className="srcgrid">
            <div><h3>{copy.method}</h3><p>{extras.methodology}</p></div>
            <div><h3>{copy.sources}</h3>{extras.sources.map((s) => <p key={s}>{s}</p>)}</div>
          </div>
        </section>

        {/* Zitiervorschlag */}
        <section className="tt-block" style={{ padding: "3rem 0 0" }}>
          <h2>{copy.cite}</h2>
          <div className="cite">
            <p>{cite}</p>
            <button type="button" className="btn btn-ghost no-print" onClick={() => copyText(cite, "cite")}>
              {copied === "cite" ? copy.copied : copy.copy}
            </button>
          </div>
        </section>

        {/* Autorenblock */}
        {authors.map((a) => (
          <div className="authorbox" key={a.id}>
            {a.photo && <div className="avatar"><img src={a.photo} alt={a.name} /></div>}
            <div className="txt">
              <p className="eyebrow" style={{ marginBottom: 6 }}>{copy.authorLabel}</p>
              <h4>{a.name}</h4>
              <p className="role">{a.role[lang]}{a.org ? `, ${a.org}` : ""}</p>
              {a.linkedin && <a href={a.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn →</a>}
            </div>
          </div>
        ))}

        {/* Passender Service */}
        <div className="tt-callout no-print">
          <div>
            <h3>{extras.cta.title}</h3>
            <p>{extras.cta.text}</p>
          </div>
          <Link className="btn btn-primary" href={`/?topic=${extras.cta.topic}#kontakt`}>{extras.cta.button}</Link>
        </div>

        {/* Vor / Zurück */}
        {(prev || next) && (
          <nav className="tt-nav2 no-print" aria-label={`${copy.prev} / ${copy.next}`}>
            {prev ? (
              <Link href={`/think-tank/${prev.slug}`}>
                <small>← {copy.prev}</small>
                {splitTitle(pubMeta(prev, lang).title).main}
              </Link>
            ) : <span />}
            {next && (
              <Link href={`/think-tank/${next.slug}`} className="r">
                <small>{copy.next} →</small>
                {splitTitle(pubMeta(next, lang).title).main}
              </Link>
            )}
          </nav>
        )}
      </div>

      {/* Weitere Analysen */}
      <section className="alt tt-more no-print" style={{ marginTop: "4rem" }}>
        <div className="wrap">
          <p className="eyebrow">{copy.more}</p>
          <div className="grid g3" style={{ marginTop: "1.5rem" }}>
            {more.map((p) => <PubCard key={p.slug} pub={p} lang={lang} />)}
          </div>
        </div>
      </section>
    </>
  );
}
