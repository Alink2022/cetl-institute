"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { REDESIGN_DE, REDESIGN_EN } from "@/lib/redesign-content";
import { sortedPublications } from "@/lib/thinktank";
import { PageShell } from "@/components/redesign/PageShell";
import { PortfolioTabs } from "@/components/redesign/PortfolioTabs";
import { ContactForm } from "@/components/redesign/ContactForm";
import { PubCard } from "@/components/thinktank/PubCard";
import { Icon, type IconName } from "@/components/ui/IconSprite";

const ACADEMIC_LOGOS = [
  { src: "/logos/academy/tuwien.webp", alt: "TU Wien" },
  { src: "/logos/academy/boku.png", alt: "BOKU Wien" },
  { src: "/logos/academy/meduni.webp", alt: "MedUni Wien" },
  { src: "/logos/academy/bfi.png", alt: "BFI Wien" },
  { src: "/logos/academy/lauder.png", alt: "Lauder Business School" },
  { src: "/logos/academy/ima.jpg", alt: "Institute of Management Accountants" },
];
const COMMUNITY_LOGOS = [
  { src: "/logos/community/stadtwien.svg", alt: "Stadt Wien" },
  { src: "/logos/community/waa.png", alt: "Vienna Business Agency" },
  { src: "/logos/community/edic.png", alt: "Europe Direct" },
  { src: "/logos/community/eit.jpg", alt: "EIT" },
  { src: "/logos/community/tec.png", alt: "Tech Execution Community" },
  { src: "/logos/community/sustainista.png", alt: "Sustainista" },
];
const INDUSTRY_LOGOS = [
  { src: "/logos/industry/siemens.webp", alt: "Siemens" },
  { src: "/logos/industry/oebb.webp", alt: "ÖBB" },
  { src: "/logos/industry/raiffeisen.svg", alt: "Raiffeisen" },
  { src: "/logos/industry/wienenergie.svg", alt: "Wien Energie" },
  { src: "/logos/industry/caritasstbarbara.png", alt: "Caritas St. Barbara" },
  { src: "/logos/academy/oegig.png", alt: "ÖGIG" },
];
const ECO_LOGOS = [ACADEMIC_LOGOS, COMMUNITY_LOGOS, INDUSTRY_LOGOS];

export default function Home() {
  const { lang, t } = useLanguage();
  const rd = lang === "de" ? REDESIGN_DE : REDESIGN_EN;
  const latest = sortedPublications().slice(0, 3);
  const testimonials = t.TESTIMONIALS;
  const team = t.TEAM_MEMBERS;
  const [uspView, setUspView] = useState(0);
  const ecoCaptions = [rd.oekosystem.partnerLabels.academic, rd.oekosystem.partnerLabels.community, rd.oekosystem.partnerLabels.industry];

  return (
    <PageShell>
      {/* HERO */}
      <section className="hero">
        <img
          className="hero-bg"
          src="/cetl-hero-01.webp"
          width={1920}
          height={942}
          alt={lang === "de" ? "Zwei Fachkräfte im Gespräch an einem Besprechungstisch, vor sich ein aufgeklappter Laptop" : "Two professionals in conversation at a meeting table with an open laptop"}
          fetchPriority="high"
        />
        <div className="hero-scrim" />
        <div className="hero-wide">
          <p className="eyebrow">{rd.hero.eyebrow}</p>
          <h1>
            <span className="hl">{rd.hero.hl1}</span><br />
            <span className="hl">{rd.hero.hl2}</span>
          </h1>
          <p className="hero-lead">{rd.hero.lead}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#portfolio">{rd.hero.ctaPrimary}</a>
            <a className="btn btn-ghost btn-onimage" href="#kontakt">{rd.hero.ctaSecondary}</a>
          </div>
        </div>
        <aside className="hero-badges" aria-label={rd.hero.badgesLabel}>
          <span className="badges-label">{rd.hero.badgesLabel}</span>
          <img src="/logos/academy/tuwien.webp" alt="TU Wien" />
          <img src="/logos/community/stadtwien.svg" alt="Stadt Wien" />
          <img src="/logos/industry/oebb.webp" alt="ÖBB" />
        </aside>
      </section>

      {/* VERTRAUEN: Kennzahlen + Beweise */}
      <section id="beweis" style={{ borderTop: 0 }}>
        <div className="wrap">
          <p className="eyebrow">{rd.zahlen.eyebrow}</p>
          <h2>{rd.zahlen.title}</h2>
          <div className="kpis">
            {rd.zahlen.stats.map((s) => (
              <div key={s.text}>
                <div className="kpi">{s.kpi}</div>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="proof">
            {rd.beweis.items.map((item) => (
              <div key={item.strong}>
                <Icon name={item.icon as IconName} />
                <div>
                  <strong>{item.strong}</strong>
                  <span>{item.span}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP: EXECUTIONAL LEARNING */}
      <section id="methodik" className="stage usp cut-top prev-white">
        <div className="wrap">
          <p className="eyebrow">{rd.usp.eyebrow}</p>
          <h2>{rd.usp.title}</h2>
          <p className="lead">{rd.usp.lead}</p>

          <p className="vsrow" aria-hidden="true">
            <span className="a">{rd.usp.mobileTabs[0]}</span>
            <span className="v">VS</span>
            <span className="b">{rd.usp.mobileTabs[1]} · {rd.usp.mobileTabs[2]}</span>
          </p>
          <div className="vs2">
            <div className="elc" data-m-hidden={uspView !== 0}>
              <span className="lab" aria-hidden="true">{rd.usp.hero.title}</span>
              <button type="button" className="strip" aria-label={rd.usp.hero.title} aria-expanded={uspView === 0} onClick={() => setUspView(0)} />
              <span className="tag">{rd.usp.hero.tag}</span>
              <h3>{rd.usp.hero.title}</h3>
              <p className="claim">{rd.usp.hero.claim}</p>
              <ul>
                {rd.usp.hero.points.map((pt) => (
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
                {rd.usp.hero.formula.map((f, i) => (
                  <Fragment key={f}>
                    {f} <i aria-hidden="true">{i < rd.usp.hero.formula.length - 1 ? "+" : "="}</i>{" "}
                  </Fragment>
                ))}
                <b>{rd.usp.hero.result}</b>
              </p>
            </div>

            <div className="others">
              <p className="cap">{rd.usp.compareLabel}</p>
              {rd.usp.others.map((o, oi) => (
                <div className="oc" key={o.label} data-m-hidden={uspView !== oi + 1}>
                  <span className="lab" aria-hidden="true">{o.label}</span>
                  <button type="button" className="strip" aria-label={o.label} aria-expanded={uspView === oi + 1} onClick={() => setUspView(oi + 1)} />
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

          <div className="cta">
            <a className="btn btn-primary" href="#portfolio">{rd.usp.ctaPrimary}</a>
            <a className="btn btn-ghost" href="#prozess">{rd.usp.ctaSecondary}</a>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT ES: Module + Prozess */}
      <section id="prozess" className="dots">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">{rd.methodik.eyebrow}</p>
              <h2>{rd.methodik.title}</h2>
              <p className="lead" style={{ margin: "16px 0 0" }}>{rd.methodik.lead}</p>
            </div>
            <figure className="media ratio-32">
              <img
                src="/cetl-methodik.webp"
                width={1440}
                height={960}
                alt={lang === "de" ? "Trainer erläutert an einem Whiteboard eine Vorgehensweise, Teilnehmende diskutieren mit" : "A trainer explains an approach at a whiteboard while participants join the discussion"}
                loading="lazy"
              />
            </figure>
          </div>

          <h3 style={{ margin: "4.5rem 0 1.5rem" }}>{rd.methodik.modulesTitle}</h3>
          <div className="modules">
            {rd.methodik.modules.map((m) => (
              <div key={m.lvl}>
                <p className="lvl">{m.lvl}</p>
                <div className="bar" />
                <h4>{m.title}</h4>
                <p className="muted" style={{ margin: "8px 0 0", fontSize: ".95rem" }}>{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="railhead">
            <p className="eyebrow">{rd.prozess.eyebrow}</p>
            <h3>{rd.prozess.title}</h3>
            <p className="lead">{rd.prozess.lead}</p>
          </div>
          <div className="rail swipe">
            {rd.prozess.steps.map((step) => (
              <div className="rstep" key={step.num}>
                <span className="node">{step.num}</span>
                <article className="rcard">
                  <span className="ico ico-sm"><Icon name={step.icon} /></span>
                  <h3>{step.title}</h3>
                  <p className="claim">{step.claim}</p>
                  <ul className="checks">
                    {step.checks.map((c) => (
                      <li key={c}>
                        <Icon name="check" className="ic-check" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="foot">{step.foot}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="wrap">
          <p className="eyebrow">{rd.portfolio.eyebrow}</p>
          <h2>{rd.portfolio.title}</h2>
          <p className="lead" style={{ margin: "16px 0 0" }}>{rd.portfolio.lead}</p>
          <PortfolioTabs portfolio={rd.portfolio} />
        </div>
      </section>

      {/* ÖKOSYSTEM */}
      <section id="oekosystem" className="glow">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">{rd.oekosystem.eyebrow}</p>
              <h2>{rd.oekosystem.title}</h2>
              <p className="lead" style={{ marginTop: 16 }}>{rd.oekosystem.lead}</p>
            </div>
            <figure className="media ratio-32">
              <img
                src="/cetl-oekosystem.webp"
                width={1440}
                height={960}
                alt={lang === "de" ? "Arbeitssitzung an einem Besprechungstisch, ein Teilnehmer präsentiert am Flipchart" : "A working session at a meeting table, one participant presenting at a flipchart"}
                loading="lazy"
              />
            </figure>
          </div>
          <div className="eco swipe">
            {rd.oekosystem.cards.map((c, i) => (
              <div className="card" key={c.title}>
                <div className="top">
                  <span className="ico"><Icon name={c.icon} /></span>
                  <h4>{c.title}</h4>
                  <p className="muted">{c.desc}</p>
                </div>
                <div className="partners">
                  <p className="cap">{ecoCaptions[i]}</p>
                  <div className="lg">
                    {ECO_LOGOS[i].map((l) => <img key={l.src} src={l.src} alt={l.alt} loading="lazy" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKT + HALTUNG */}
      <section id="markt">
        <div className="wrap">
          <p className="eyebrow">{rd.markt.eyebrow}</p>
          <h2>{rd.markt.title}</h2>
          <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.markt.lead}</p>
          <div className="figures swipe">
            {rd.markt.figures.map((f) => (
              <div className="figure" key={f.num}>
                <div className="num">{f.num}</div>
                <p>{f.text}</p>
                <hr />
                <p className="src">{f.src}</p>
              </div>
            ))}
          </div>
          <div className="statement">
            <div>
              <p className="eyebrow">{rd.zitat.eyebrow}</p>
              <p className="quote">{rd.zitat.quote}</p>
            </div>
            <p className="body">{rd.zitat.body}</p>
          </div>
        </div>
      </section>

      {/* PRAXIS + STIMMEN */}
      <section id="praxis" className="alt">
        <div className="wrap">
          <p className="eyebrow">{rd.praxis.eyebrow}</p>
          <h2>{rd.praxis.title}</h2>
          <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.praxis.lead}</p>
          <figure className="media ratio-wide" style={{ marginBottom: "3rem" }}>
            <img
              src="/cetl-referenzband.webp"
              width={1707}
              height={960}
              alt={lang === "de" ? "Workshopraum mit Teilnehmenden an einem langen Tisch, Vortragender am Whiteboard" : "A workshop room with participants at a long table and a presenter at the whiteboard"}
              loading="lazy"
            />
          </figure>
          <div className="grid g3 swipe">
            {rd.praxis.cards.map((c) => (
              <div className="card prod" key={c.title}>
                <p className="label">{c.label}</p>
                <h4>{c.title}</h4>
                <p className="muted" style={{ margin: "10px 0 0", fontSize: ".95rem" }}>{c.desc}</p>
                <ul style={{ marginTop: 16 }}>{c.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <p className="foot">{c.foot}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "3rem" }}><a className="btn btn-primary" href="#kontakt">{rd.praxis.cta}</a></p>

          <div className="voices" id="stimmen">
            <p className="eyebrow">{rd.stimmen.eyebrow}</p>
            <h3>{rd.stimmen.title}</h3>
            <p className="lead">{rd.stimmen.lead}</p>
            <div className="grid g3 swipe">
              {testimonials.map((tItem) => (
                <div className="card voice" key={tItem.role}>
                  <p style={{ fontSize: "var(--step-1)", lineHeight: 1.4 }}>{tItem.quote}</p>
                  <p className="tag" style={{ margin: "16px 0 0" }}>
                    <strong style={{ color: "var(--ink-900)" }}>{tItem.role}</strong><br />
                    <span>{tItem.sector}, {tItem.orgSize}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THINK TANK */}
      <section id="think-tank" className="stage cut-top prev-surface">
        <div className="wrap">
          <p className="eyebrow">{rd.thinkTank.eyebrow}</p>
          <h2>{rd.thinkTank.title}</h2>
          <p className="lead" style={{ margin: "16px 0 3rem", maxWidth: "70ch" }}>{rd.thinkTank.lead}</p>
          <div className="grid g3 swipe">
            {latest.map((pub) => <PubCard key={pub.slug} pub={pub} lang={lang} />)}
          </div>
          <p style={{ marginTop: "3rem", display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/think-tank">{rd.thinkTank.ctaAll}</Link>
            <Link className="btn btn-ghost" href="/think-tank#services">{rd.thinkTank.ctaServices}</Link>
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="wrap">
          <p className="eyebrow">{rd.team.eyebrow}</p>
          <h2>{rd.team.title}</h2>
          <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.team.lead}</p>
          <div className="grid g3 team-list">
            {team.map((member) => (
              <div className="card person" key={member.name}>
                <div className="avatar">
                  <img src={member.photo} alt={member.name} style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined} />
                </div>
                <h4>{member.name}</h4>
                <p className="muted" style={{ margin: "6px 0 0" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="alt">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <p className="eyebrow">{rd.faq.eyebrow}</p>
          <h2>{rd.faq.title}</h2>
          <div style={{ marginTop: "3rem" }}>
            {rd.faq.items.map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="contact">
        <div className="wrap kontaktgrid">
          <div>
            <p className="eyebrow">{rd.kontakt.eyebrow}</p>
            <h2>{rd.kontakt.title}</h2>
            <p className="lead" style={{ marginTop: 16 }}>{rd.kontakt.lead}</p>
            <address className="muted" style={{ marginTop: 24, fontStyle: "normal", lineHeight: 1.8 }}>
              <strong style={{ color: "var(--ink-900)" }}>{rd.kontakt.addressName}</strong><br />
              {rd.kontakt.addressStreet}<br />
              {rd.kontakt.addressCity}<br />
              <a href="mailto:alinkalam@cetl.institute">alinkalam@cetl.institute</a>
            </address>
          </div>
          <ContactForm fields={rd.kontakt.fields} />
        </div>
      </section>
    </PageShell>
  );
}
