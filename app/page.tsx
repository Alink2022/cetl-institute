"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { REDESIGN_DE, REDESIGN_EN, type PortfolioIcon, type RedesignContent } from "@/lib/redesign-content";
import { RedesignNavBar } from "@/components/redesign/RedesignNavBar";
import { RedesignFooter } from "@/components/redesign/RedesignFooter";
import { Icon, IconSprite, type IconName } from "@/components/ui/IconSprite";

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

function PortfolioCardEl({ icon, flag, label, title, desc, items, foot }: { icon: PortfolioIcon; flag?: string; label: string; title: string; desc: string; items: string[]; foot: string }) {
  return (
    <div className="card prod">
      {flag && <span className="flag">{flag}</span>}
      <span className="ico ico-sm"><Icon name={icon as IconName} /></span>
      <p className="label">{label}</p>
      <h4>{title}</h4>
      <p className="muted" style={{ marginTop: 10, fontSize: ".95rem" }}>{desc}</p>
      <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
      <p className="foot">{foot}</p>
    </div>
  );
}

function ContactForm({ fields }: { fields: RedesignContent["kontakt"]["fields"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [context, setContext] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, context }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setTopic("");
      setContext("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card" role="status">
        <p style={{ margin: 0 }}>{fields.success}</p>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label className="field">
        <span>{fields.name}</span>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="field">
        <span>{fields.email}</span>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="field">
        <span>{fields.topic}</span>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="" disabled>{fields.topicPlaceholder}</option>
          {fields.topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="field">
        <span>{fields.context}</span>
        <textarea rows={4} value={context} onChange={(e) => setContext(e.target.value)} />
      </label>
      {status === "error" && (
        <p style={{ color: "var(--brand-700)", fontSize: "0.9rem", marginBottom: 16 }}>{fields.error}</p>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? fields.sending : fields.submit}
      </button>
    </form>
  );
}

export default function Home() {
  const { lang, t } = useLanguage();
  const rd = lang === "de" ? REDESIGN_DE : REDESIGN_EN;
  const insights = t.INSIGHTS.slice(0, 3);
  const testimonials = t.TESTIMONIALS;
  const team = t.TEAM_MEMBERS;

  return (
    <div className="rd">
      <IconSprite />
      <RedesignNavBar />

      <main id="top">
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

        {/* BEWEIS */}
        <section id="beweis" style={{ padding: "5rem 0 0", borderTop: 0 }}>
          <div className="wrap">
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
            <div className="keywords">
              {rd.beweis.keywords.map((k) => (
                <span key={k} className="chip chip-line">{k}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ZAHLEN */}
        <section id="zahlen" style={{ borderTop: 0 }}>
          <div className="wrap">
            <p className="eyebrow">{rd.zahlen.eyebrow}</p>
            <h2>{rd.zahlen.title}</h2>
            <div className="grid g4" style={{ marginTop: "3rem" }}>
              {rd.zahlen.stats.map((s) => (
                <div className="stat" key={s.text}>
                  <div className="kpi">{s.kpi}</div>
                  <p className="muted" style={{ margin: "10px 0 0" }}>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="card" style={{ marginTop: "3rem", display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap" }}>
              {rd.zahlen.cards.map((c) => (
                <div style={{ flex: 1, minWidth: 260 }} key={c.title}>
                  <span className="chip">{c.chip}</span>
                  <h4 style={{ marginTop: 12 }}>{c.title}</h4>
                  <p className="muted" style={{ margin: "8px 0 0" }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METHODIK */}
        <section id="methodik" className="alt">
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
            <h3 style={{ margin: "5rem 0 1.5rem" }}>{rd.methodik.modulesTitle}</h3>
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
          </div>
        </section>

        {/* PROZESS */}
        <section id="prozess">
          <div className="wrap">
            <p className="eyebrow">{rd.prozess.eyebrow}</p>
            <h2>{rd.prozess.title}</h2>
            <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.prozess.lead}</p>
            <div className="stepcards">
              {rd.prozess.steps.map((step) => (
                <article className="stepcard" key={step.num}>
                  <div className="head">
                    <Icon name={step.icon} />
                    <span className="num">{step.num}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <div className="body">
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="alt">
          <div className="wrap">
            <p className="eyebrow">{rd.portfolio.eyebrow}</p>
            <h2>{rd.portfolio.title}</h2>
            <p className="lead" style={{ margin: "16px 0 0" }}>{rd.portfolio.lead}</p>

            <h3 style={{ margin: "48px 0 20px" }}>{rd.portfolio.learningTitle}</h3>
            <div className="grid g4">
              {rd.portfolio.learning.map((c) => <PortfolioCardEl key={c.title} {...c} />)}
            </div>

            <h3 style={{ margin: "5rem 0 1.5rem" }}>{rd.portfolio.assessmentTitle}</h3>
            <div className="grid g3">
              {rd.portfolio.assessment.map((c) => <PortfolioCardEl key={c.title} {...c} />)}
            </div>
          </div>
        </section>

        {/* OEKOSYSTEM */}
        <section id="oekosystem">
          <div className="wrap">
            <div className="split" style={{ marginBottom: "3rem" }}>
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
            <div className="grid g3">
              {rd.oekosystem.cards.map((c) => (
                <div className="card" key={c.title}>
                  <span className="ico"><Icon name={c.icon} /></span>
                  <h4>{c.title}</h4>
                  <p className="muted" style={{ marginTop: 8 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="partnerblock">
              <h4><Icon name="graduation-cap" className="ic ico-bare" /> <span>{rd.oekosystem.partnerLabels.academic}</span></h4>
              <div className="logos">
                {ACADEMIC_LOGOS.map((l) => <img key={l.src} src={l.src} alt={l.alt} loading="lazy" />)}
              </div>
            </div>
            <div className="partnerblock">
              <h4><Icon name="chats-circle" className="ic ico-bare" /> <span>{rd.oekosystem.partnerLabels.community}</span></h4>
              <div className="logos">
                {COMMUNITY_LOGOS.map((l) => <img key={l.src} src={l.src} alt={l.alt} loading="lazy" />)}
              </div>
            </div>
            <div className="partnerblock">
              <h4><Icon name="buildings" className="ic ico-bare" /> <span>{rd.oekosystem.partnerLabels.industry}</span></h4>
              <div className="logos">
                {INDUSTRY_LOGOS.map((l) => <img key={l.src} src={l.src} alt={l.alt} loading="lazy" />)}
              </div>
            </div>
          </div>
        </section>

        {/* MARKT */}
        <section id="markt" className="alt">
          <div className="wrap">
            <p className="eyebrow">{rd.markt.eyebrow}</p>
            <h2>{rd.markt.title}</h2>
            <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.markt.lead}</p>
            <div className="figures">
              {rd.markt.figures.map((f) => (
                <div className="figure" key={f.num}>
                  <div className="num">{f.num}</div>
                  <p>{f.text}</p>
                  <hr />
                  <p className="src">{f.src}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HALTUNG / QUOTE */}
        <section className="dark">
          <div className="wrap" style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: 2, minWidth: 300 }}>
              <p className="eyebrow">{rd.zitat.eyebrow}</p>
              <p className="quote">{rd.zitat.quote}</p>
            </div>
            <div style={{ flex: "1.4 1 0%", minWidth: 280 }}>
              <p className="muted">{rd.zitat.body}</p>
            </div>
          </div>
        </section>

        {/* PRAXIS */}
        <section id="praxis">
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
            <div className="grid g3">
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
          </div>
        </section>

        {/* INSIGHTS */}
        <section id="insights" className="alt">
          <div className="wrap">
            <p className="eyebrow">{rd.insights.eyebrow}</p>
            <h2>{rd.insights.title}</h2>
            <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.insights.lead}</p>
            <div className="grid g3">
              {insights.map((item) => (
                <Link href={`/insights/${item.slug}`} className="card prod" key={item.slug} style={{ display: "block", color: "inherit" }}>
                  <span className="chip">{item.tag}</span>
                  <h4 style={{ marginTop: 14 }}>{item.title}</h4>
                  <p className="muted" style={{ marginTop: 10, fontSize: ".95rem" }}>{item.teaser}</p>
                  <p className="foot">{item.category} · {item.readTime}</p>
                </Link>
              ))}
            </div>
            <p style={{ marginTop: "3rem" }}><Link className="btn btn-ghost" href="/insights">{rd.insights.cta}</Link></p>
          </div>
        </section>

        {/* STIMMEN */}
        <section id="stimmen">
          <div className="wrap">
            <p className="eyebrow">{rd.stimmen.eyebrow}</p>
            <h2>{rd.stimmen.title}</h2>
            <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.stimmen.lead}</p>
            <div className="grid g3">
              {testimonials.map((tItem) => (
                <div className="card" key={tItem.role}>
                  <p style={{ fontSize: "var(--step-1)", lineHeight: 1.4 }}>{tItem.quote}</p>
                  <p className="tag" style={{ margin: "16px 0 0" }}>
                    <strong style={{ color: "var(--ink-900)" }}>{tItem.role}</strong><br />
                    <span>{tItem.sector}, {tItem.orgSize}</span>
                  </p>
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
        <section id="kontakt">
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
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

        {/* TEAM */}
        <section id="team" className="alt">
          <div className="wrap">
            <p className="eyebrow">{rd.team.eyebrow}</p>
            <h2>{rd.team.title}</h2>
            <p className="lead" style={{ margin: "16px 0 3rem" }}>{rd.team.lead}</p>
            <div className="grid g3">
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
      </main>

      <RedesignFooter />
    </div>
  );
}
