"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { webinarWhen, type Webinar, type WebinarPerson } from "@/lib/webinars";
import { Icon, type IconName } from "@/components/ui/IconSprite";

const UI = {
  de: {
    back: "Think Tank",
    facts: { when: "Termin", format: "Format", lang: "Sprache", langValue: { en: "Englisch", de: "Deutsch" } },
    cta: { linkedin: "Auf LinkedIn dabei sein", remind: "Erinnerung anfordern", ics: "In den Kalender" },
    speakers: "Wer spricht",
    speaker: "Vortrag",
    moderator: "Moderation",
    bandTitle: "Dabei sein",
    bandText: "Das Webinar läuft live auf LinkedIn. Wer nicht live dabei sein kann, bekommt auf Wunsch einen Hinweis zur Aufzeichnung.",
    bandRemind: "Wir schreiben Ihnen eine kurze Erinnerung am Tag des Webinars.",
    all: "Alle Think-Tank-Formate",
  },
  en: {
    back: "Think Tank",
    facts: { when: "Date", format: "Format", lang: "Language", langValue: { en: "English", de: "German" } },
    cta: { linkedin: "Join on LinkedIn", remind: "Get a reminder", ics: "Add to calendar" },
    speakers: "Who is speaking",
    speaker: "Talk",
    moderator: "Moderation",
    bandTitle: "Join us",
    bandText: "The webinar runs live on LinkedIn. If you cannot join live, we can let you know when the recording is available.",
    bandRemind: "We will send you a short reminder on the day of the webinar.",
    all: "All Think Tank formats",
  },
} as const;

const TOPIC_ICONS: IconName[] = ["path", "clipboard-text", "certificate", "gear"];

function Person({ p, label, lang }: { p: WebinarPerson; label: string; lang: "de" | "en" }) {
  return (
    <div className="card wb-person">
      <img src={p.photo} alt={p.name} width={96} height={96} loading="lazy" />
      <div>
        <p className="eyebrow" style={{ margin: 0 }}>{label}</p>
        <h3 style={{ marginTop: 6 }}>{p.name}</h3>
        <p className="muted" style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>{p.role[lang]}</p>
        <p style={{ margin: "12px 0 0" }}>{p.bio[lang]}</p>
      </div>
    </div>
  );
}

export function WebinarCtas({ w, lang, light = false }: { w: Webinar; lang: "de" | "en"; light?: boolean }) {
  const t = UI[lang].cta;
  return (
    <div className="cta">
      {w.linkedinUrl ? (
        <a className="btn btn-primary" href={w.linkedinUrl} target="_blank" rel="noopener noreferrer">{t.linkedin}</a>
      ) : (
        <Link className="btn btn-primary" href="/?topic=webinar#kontakt">{t.remind}</Link>
      )}
      <a className={`btn btn-ghost${light ? "" : ""}`} href={w.ics} download>{t.ics}</a>
    </div>
  );
}

export function WebinarView({ webinar: w }: { webinar: Webinar }) {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const c = w.copy[lang];
  const when = webinarWhen(w, lang);

  return (
    <>
      <section className="tt-hero" style={{ paddingBottom: "5rem" }}>
        <div className="wrap">
          <Link href="/think-tank#webinare" className="back" style={{ display: "inline-flex", color: "var(--brand-300)", marginBottom: "2rem", fontSize: ".9rem" }}>← {ui.back}</Link>
          <p className="eyebrow">{c.kicker}</p>
          <h1 style={{ maxWidth: "22ch" }}>{w.title}</h1>
          <p className="sub">{c.abstract[0]}</p>
          <WebinarCtas w={w} lang={lang} />
          <div className="wb-facts">
            <div><span className="k">{ui.facts.when}</span><span className="v">{when.date}</span><span className="v2">{when.time} {when.tz}</span></div>
            <div><span className="k">{ui.facts.format}</span><span className="v">{w.platform}</span><span className="v2">{lang === "de" ? "60 Minuten" : "60 minutes"}</span></div>
            <div><span className="k">{ui.facts.lang}</span><span className="v">{ui.facts.langValue[w.language]}</span></div>
          </div>
        </div>
      </section>

      <section id="inhalt" className="dots">
        <div className="wrap">
          <p className="eyebrow">{c.topicsTitle}</p>
          <h2 style={{ maxWidth: "26ch" }}>{lang === "de" ? "Nach dem Prototyp beginnt die Arbeit." : "After the prototype, the work begins."}</h2>
          <p className="lead" style={{ margin: "16px 0 3rem" }}>{c.abstract[1]}</p>
          <div className="grid g4 swipe">
            {c.topics.map((tp, i) => (
              <div className="card" key={tp.title}>
                <span className="ico"><Icon name={TOPIC_ICONS[i % TOPIC_ICONS.length]} /></span>
                <h4>{tp.title}</h4>
                <p className="muted" style={{ marginTop: 10 }}>{tp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <p className="eyebrow">{ui.speakers}</p>
          <div className="grid g2" style={{ marginTop: "1.5rem" }}>
            <Person p={w.speaker} label={ui.speaker} lang={lang} />
            <Person p={w.moderator} label={ui.moderator} lang={lang} />
          </div>
        </div>
      </section>

      <section className="stage cut-top prev-surface">
        <div className="wrap">
          <p className="eyebrow">{ui.bandTitle}</p>
          <h2>{when.date}, {when.time}</h2>
          <p className="lead" style={{ margin: "16px 0 0", maxWidth: "58ch" }}>{ui.bandText}</p>
          {!w.linkedinUrl && <p className="muted" style={{ marginTop: 12, fontSize: "0.92rem" }}>{ui.bandRemind}</p>}
          <div style={{ marginTop: "2.25rem" }}>
            <WebinarCtas w={w} lang={lang} />
          </div>
          <p style={{ marginTop: "2.5rem" }}><Link className="more" href="/think-tank">{ui.all} →</Link></p>
        </div>
      </section>
    </>
  );
}
