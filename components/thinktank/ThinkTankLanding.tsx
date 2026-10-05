"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { REDESIGN_DE, REDESIGN_EN } from "@/lib/redesign-content";
import {
  fieldTitle, sortedPublications, TT_AUDIENCES, TT_AUTHORS, TT_FIELDS, TT_FORMATS, TT_PUBLICATIONS,
  type AudienceId, type FieldId, type FormatId,
} from "@/lib/thinktank";
import { TT_COPY } from "@/lib/thinktank-copy";
import { Icon, type IconName } from "@/components/ui/IconSprite";
import { PortfolioCard } from "@/components/redesign/PortfolioCard";
import { PubCard } from "./PubCard";

const AUDIENCE_ICON: Record<AudienceId, IconName> = { board: "briefcase", hr: "chats-circle", ld: "graduation-cap" };

export function ThinkTankLanding() {
  const { lang } = useLanguage();
  const copy = TT_COPY[lang].landing;
  const rd = lang === "de" ? REDESIGN_DE : REDESIGN_EN;

  const [field, setField] = useState<FieldId | "all">("all");
  const [format, setFormat] = useState<FormatId | "all">("all");
  const [audience, setAudience] = useState<AudienceId | "all">("all");
  const [international, setInternational] = useState(false);

  const all = sortedPublications();
  const hasGuest = TT_PUBLICATIONS.some((p) => p.guest);
  const usedFormats = TT_FORMATS.filter((f) => TT_PUBLICATIONS.some((p) => p.format === f.id));

  const shown = all.filter(
    (p) =>
      (field === "all" || p.field === field) &&
      (format === "all" || p.format === format) &&
      (audience === "all" || p.audiences.includes(audience)) &&
      (!international || p.guest),
  );
  const filtered = field !== "all" || format !== "all" || audience !== "all" || international;
  const reset = () => {
    setField("all");
    setFormat("all");
    setAudience("all");
    setInternational(false);
  };

  const team = Object.values(TT_AUTHORS).filter((a) => !a.guest);

  return (
    <>
      {/* HERO */}
      <section className="tt-hero">
        <div className="wrap">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.h1}</h1>
          <p className="sub">{copy.hero.sub}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#publikationen">{copy.hero.ctaRead}</a>
            <a className="btn btn-ghost" href="#services">{copy.hero.ctaServices}</a>
          </div>
          <div className="tt-stats">
            {copy.hero.stats.map((s) => (
              <div key={s.label}>
                <div className="v">{s.value}</div>
                <p className="l">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANSPRUCH */}
      <section id="anspruch">
        <div className="wrap">
          <div className="tt-split">
            <div>
              <p className="eyebrow">{copy.claim.eyebrow}</p>
              <h2>{copy.claim.title}</h2>
            </div>
            <p className="lead" style={{ margin: 0 }}>{copy.claim.text}</p>
          </div>
          <div className="tt-standards">
            {copy.claim.standards.map((s, i) => (
              <div className="card" key={s.title}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section id="zielgruppen" className="alt">
        <div className="wrap">
          <p className="eyebrow">{copy.audiences.eyebrow}</p>
          <h2>{copy.audiences.title}</h2>
          <div className="grid g3" style={{ marginTop: "3rem" }}>
            {copy.audiences.cards.map((c) => (
              <div className="card" key={c.id}>
                <span className="ico"><Icon name={AUDIENCE_ICON[c.id]} /></span>
                <h4>{c.title}</h4>
                <p className="muted" style={{ marginTop: 10 }}>{c.questions}</p>
                <a className="more" href="#publikationen" onClick={() => { reset(); setAudience(c.id); }}>
                  {copy.audiences.link} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORSCHUNGSFELDER */}
      <section id="forschungsfelder">
        <div className="wrap">
          <p className="eyebrow">{copy.fields.eyebrow}</p>
          <h2>{copy.fields.title}</h2>
          <p className="lead" style={{ margin: "16px 0 3rem" }}>{copy.fields.lead}</p>
          <div className="grid g3">
            {TT_FIELDS.map((f, i) => {
              const n = TT_PUBLICATIONS.filter((p) => p.field === f.id).length;
              return (
                <div className="card" key={f.id}>
                  <p className="fieldno">{String(i + 1).padStart(2, "0")}</p>
                  <h4>{f.title[lang]}</h4>
                  <p className="muted" style={{ marginTop: 10, fontSize: ".95rem" }}>{f.desc[lang]}</p>
                  <p className="linked"><strong>{copy.fields.linksLabel}:</strong> {f.links[lang]}</p>
                  <a className="more" href="#publikationen" onClick={() => { reset(); setField(f.id); }}>
                    {copy.fields.count(n)} →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PUBLIKATIONEN */}
      <section id="publikationen" className="alt">
        <div className="wrap">
          <p className="eyebrow">{copy.pubs.eyebrow}</p>
          <h2>{copy.pubs.title}</h2>
          <p className="lead" style={{ margin: "16px 0 0" }}>{copy.pubs.lead}</p>

          <div className="filters">
            <div className="frow">
              <span className="flabel">{copy.pubs.filterField}</span>
              <button type="button" className="fchip" aria-pressed={field === "all"} onClick={() => setField("all")}>{copy.pubs.all}</button>
              {TT_FIELDS.map((f) => (
                <button key={f.id} type="button" className="fchip" aria-pressed={field === f.id} onClick={() => setField(f.id)}>{f.title[lang]}</button>
              ))}
            </div>
            <div className="frow">
              <span className="flabel">{copy.pubs.filterFormat}</span>
              <button type="button" className="fchip" aria-pressed={format === "all"} onClick={() => setFormat("all")}>{copy.pubs.all}</button>
              {usedFormats.map((f) => (
                <button key={f.id} type="button" className="fchip" aria-pressed={format === f.id} onClick={() => setFormat(f.id)}>{f.name[lang]}</button>
              ))}
            </div>
            <div className="frow">
              <span className="flabel">{copy.pubs.filterAudience}</span>
              <button type="button" className="fchip" aria-pressed={audience === "all"} onClick={() => setAudience("all")}>{copy.pubs.all}</button>
              {TT_AUDIENCES.map((a) => (
                <button key={a.id} type="button" className="fchip" aria-pressed={audience === a.id} onClick={() => setAudience(a.id)}>{a.name[lang]}</button>
              ))}
              {hasGuest && (
                <button type="button" className="fchip" aria-pressed={international} onClick={() => setInternational((v) => !v)}>{copy.pubs.international}</button>
              )}
            </div>
          </div>

          <div className="grid g3">
            {shown.length === 0 ? (
              <div className="fempty">
                <p style={{ margin: "0 0 14px" }}>{copy.pubs.empty}</p>
                {filtered && <button type="button" className="btn btn-ghost" onClick={reset}>{copy.pubs.reset}</button>}
              </div>
            ) : (
              shown.map((p) => <PubCard key={p.slug} pub={p} lang={lang} />)
            )}
          </div>

          <details className="formats">
            <summary>{copy.pubs.formatsSummary}</summary>
            <div className="flist">
              {TT_FORMATS.map((f) => (
                <div key={f.id}>
                  <b>{f.name[lang]}</b>
                  <em>{f.length[lang]}</em>
                  <span>{f.purpose[lang]}</span>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="wrap">
          <p className="eyebrow">{copy.services.eyebrow}</p>
          <h2>{copy.services.title}</h2>
          <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.portfolio.thinkTankLead}</p>
          <div className="grid g3">
            {rd.portfolio.thinkTank.map((c) => <PortfolioCard key={c.title} {...c} />)}
          </div>
          <p style={{ marginTop: "3rem" }}>
            <Link className="btn btn-primary" href="/?topic=thinktank#kontakt">{rd.portfolio.thinkTankCta}</Link>
          </p>
        </div>
      </section>

      {/* AUTOREN */}
      <section id="autoren" className="alt">
        <div className="wrap">
          <p className="eyebrow">{copy.authors.eyebrow}</p>
          <h2>{copy.authors.title}</h2>
          <p className="lead" style={{ margin: "16px 0 0" }}>{copy.authors.lead}</p>

          <p className="subhead">{copy.authors.team}</p>
          <div className="tt-people">
            {team.map((a) => {
              const written = TT_PUBLICATIONS.filter((p) => p.authors.includes(a.id));
              const fields = [...new Set(written.map((p) => p.field))].map((f) => fieldTitle(f, lang));
              return (
                <div className="card person" key={a.id}>
                  <div className="avatar"><img src={a.photo} alt={a.name} /></div>
                  <h4>{a.name}</h4>
                  <p className="muted" style={{ margin: "6px 0 0" }}>{a.role[lang]}</p>
                  {fields.length > 0 && <p className="focus">{fields.join(" · ")}</p>}
                </div>
              );
            })}
          </div>

          <p className="subhead">{copy.authors.guests}</p>
          <div className="card ghost">
            <h4>{copy.authors.guestsTitle}</h4>
            <p className="muted" style={{ marginTop: 10, maxWidth: "70ch" }}>{copy.authors.guestsText}</p>
            <Link className="more" href="/think-tank/gastbeitraege">{copy.authors.guestsCta} →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark tt-cta">
        <div className="wrap">
          <p>{copy.cta.text}</p>
          <Link className="btn btn-primary" href="/?topic=thinktank#kontakt">{copy.cta.button}</Link>
        </div>
      </section>
    </>
  );
}
