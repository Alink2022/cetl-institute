"use client";

import { useLanguage } from "@/lib/i18n";
import { PRIVACY_STAND, fullNotice } from "@/lib/privacy";

export function DatenschutzView() {
  const { lang } = useLanguage();
  const de = lang === "de";
  const sections = fullNotice(lang);

  return (
    <section className="legal">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <p className="eyebrow">{de ? "Rechtliches" : "Legal"}</p>
        <h1>{de ? "Datenschutzerklärung" : "Privacy notice"}</h1>
        <p className="lead" style={{ margin: "16px 0 2.5rem" }}>
          {de
            ? "Information über die Verarbeitung personenbezogener Daten gemäß Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO)."
            : "Information on the processing of personal data pursuant to Art. 13 and 14 of the General Data Protection Regulation (GDPR)."}
        </p>
        <nav className="doc-toc" aria-label={de ? "Inhalt" : "Contents"}>
          <ol>
            {sections.map((s, i) => <li key={s.h}><a href={`#s${i + 1}`}>{s.h}</a></li>)}
          </ol>
        </nav>
        <div className="doc">
          {sections.map((s, i) => (
            <section key={s.h} id={`s${i + 1}`}>
              <h2>{i + 1}. {s.h}</h2>
              {s.p.map((p) => <p key={p}>{p}</p>)}
            </section>
          ))}
        </div>
        <p className="doc-stand">{PRIVACY_STAND[lang]}</p>
      </div>
    </section>
  );
}
