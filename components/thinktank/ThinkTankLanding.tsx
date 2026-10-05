"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { REDESIGN_DE, REDESIGN_EN } from "@/lib/redesign-content";
import {
  sortedPublications, TT_AUDIENCES, TT_FIELDS, TT_FORMATS, TT_PUBLICATIONS,
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
  const pr = copy.purpose;

  const [field, setField] = useState<FieldId | "all">("all");
  const [format, setFormat] = useState<FormatId | "all">("all");
  const [audience, setAudience] = useState<AudienceId | "all">("all");
  const [international, setInternational] = useState(false);
  const [view, setView] = useState(0);

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
  const activeField = TT_FIELDS.find((f) => f.id === field);

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

      {/* WOZU: Differenzierung + Zielgruppen */}
      <section id="anspruch" className="usp">
        <div className="wrap">
          <p className="eyebrow">{pr.eyebrow}</p>
          <h2>{pr.title}</h2>
          <p className="lead">{pr.lead}</p>

          <p className="vsrow light" aria-hidden="true">
            <span className="a">{pr.mobileTabs[0]}</span>
            <span className="v">VS</span>
            <span className="b">{pr.mobileTabs[1]} · {pr.mobileTabs[2]}</span>
          </p>
          <div className="vs2 light">
            <div className="elc" data-m-hidden={view !== 0}>
              <span className="lab" aria-hidden="true">{pr.hero.title}</span>
              <button type="button" className="strip" aria-label={pr.hero.title} aria-expanded={view === 0} onClick={() => setView(0)} />
              <span className="tag">{pr.hero.tag}</span>
              <h3>{pr.hero.title}</h3>
              <p className="claim">{pr.hero.claim}</p>
              <ul>
                {pr.hero.points.map((pt) => (
                  <li key={pt.title}>
                    <Icon name="check" />
                    <span>
                      <b>{pt.title}</b>
                      <span className="s">{pt.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mini">
                {pr.hero.formula.map((f, i) => (
                  <Fragment key={f}>
                    {f} <i aria-hidden="true">{i < pr.hero.formula.length - 1 ? "+" : "="}</i>{" "}
                  </Fragment>
                ))}
                <b>{pr.hero.result}</b>
              </p>
            </div>

            <div className="others">
              <p className="cap">{pr.compareLabel}</p>
              {pr.others.map((o, oi) => (
                <div className="oc" key={o.label} data-m-hidden={view !== oi + 1}>
                  <span className="lab" aria-hidden="true">{o.label}</span>
                  <button type="button" className="strip" aria-label={o.label} aria-expanded={view === oi + 1} onClick={() => setView(oi + 1)} />
                  <p className="lbl">{o.label}</p>
                  <h4>{o.title}</h4>
                  <ul>
                    {o.items.map((it) => (
                      <li key={it}>
                        <Icon name="x" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <h3 className="audh">{copy.audiences.title}</h3>
          <div className="grid g3 swipe">
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

      {/* PUBLIKATIONEN inkl. Forschungsfelder als Filter */}
      <section id="publikationen" className="alt dots">
        <div className="wrap">
          <p className="eyebrow">{copy.pubs.eyebrow}</p>
          <h2>{copy.pubs.title}</h2>
          <p className="lead" style={{ margin: "16px 0 0" }}>{copy.pubs.lead}</p>

          <p className="subhead">{copy.pubs.fieldsLabel}</p>
          <div className="ftiles swipe">
            {TT_FIELDS.map((f, i) => {
              const n = TT_PUBLICATIONS.filter((p) => p.field === f.id).length;
              return (
                <button
                  key={f.id}
                  type="button"
                  className="ftile"
                  aria-pressed={field === f.id}
                  onClick={() => setField(field === f.id ? "all" : f.id)}
                >
                  <span className="no">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{f.title[lang]}</h4>
                  <p>{f.desc[lang]}</p>
                  <span className="ct">{copy.pubs.count(n)}</span>
                </button>
              );
            })}
          </div>
          {activeField && (
            <p className="fnote">
              <strong>{copy.pubs.linksLabel}:</strong> {activeField.links[lang]}
              <button type="button" className="more" onClick={() => setField("all")}>{copy.pubs.resetField}</button>
            </p>
          )}

          <div className="filters slim">
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

      {/* INTERNATIONALE STIMMEN */}
      <section id="gaeste" className="stage cut-top prev-surface">
        <div className="wrap gband">
          <div>
            <p className="eyebrow">{copy.guests.eyebrow}</p>
            <h2>{copy.guests.title}</h2>
            <p className="lead" style={{ margin: "16px 0 0", maxWidth: "58ch" }}>{copy.guests.text}</p>
            <div className="gchips">
              {copy.guests.chips.map((c) => <span key={c} className="gchip">{c}</span>)}
            </div>
            <div className="cta">
              <Link className="btn btn-primary" href="/think-tank/gastbeitraege">{copy.guests.cta}</Link>
              <Link className="btn btn-ghost" href="/think-tank/gastbeitraege#vorschlag">{copy.guests.ctaPropose}</Link>
            </div>
          </div>
          <div className="gghost" aria-hidden="true">
            <div className="duo">
              <span className="c1" />
              <span className="c2" />
            </div>
            <p className="t">{copy.guests.ghostTitle}</p>
            <p className="x">{copy.guests.ghostText}</p>
            <span className="lang">EN <i>|</i> DE</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="glow">
        <div className="wrap">
          <p className="eyebrow">{copy.services.eyebrow}</p>
          <h2>{copy.services.title}</h2>
          <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.portfolio.thinkTankLead}</p>
          <div className="grid g3 swipe">
            {rd.portfolio.thinkTank.map((c) => <PortfolioCard key={c.title} {...c} />)}
          </div>
          <p style={{ marginTop: "3rem" }}>
            <Link className="btn btn-primary" href="/?topic=thinktank#kontakt">{rd.portfolio.thinkTankCta}</Link>
          </p>
        </div>
      </section>
    </>
  );
}
