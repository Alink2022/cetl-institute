"use client";

import { useLanguage } from "@/lib/i18n";

const MAIL = "alinkalam@cetl.institute";

const CONTENT = {
  de: {
    eyebrow: "Rechtliches",
    title: "Impressum",
    intro: "Angaben gemäß § 5 ECG, § 14 UGB und Offenlegung gemäß § 25 Mediengesetz.",
    sections: [
      { label: "Medieninhaber und Herausgeber", lines: ["CETL Institute GmbH", "Wipplinger Straße 4/2. OG", "1010 Wien, Österreich"] },
      { label: "Vertretungsberechtigt", lines: ["Alin Kalam, Geschäftsführer"] },
      { label: "Kontakt", lines: [] },
      { label: "Unternehmensgegenstand", lines: ["Organisation und Abhaltung von Schulungen und Fortbildungen."] },
      { label: "Firmenbuch", lines: ["FN 688297 b", "Handelsgericht Wien"] },
      { label: "Grundlegende Richtung", lines: ["Information über Leistungen, Programme und Publikationen des CETL Institute zu KI-Kompetenz, Executional Learning und Think Tank."] },
      { label: "Haftungshinweis", lines: ["Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."] },
    ],
  },
  en: {
    eyebrow: "Legal",
    title: "Legal notice",
    intro: "Information pursuant to § 5 ECG and § 14 UGB, and disclosure pursuant to § 25 Austrian Media Act.",
    sections: [
      { label: "Media owner and publisher", lines: ["CETL Institute GmbH", "Wipplinger Straße 4/2nd floor", "1010 Vienna, Austria"] },
      { label: "Authorised representative", lines: ["Alin Kalam, Managing Director"] },
      { label: "Contact", lines: [] },
      { label: "Business purpose", lines: ["Organising and delivering training and continuing education."] },
      { label: "Commercial register", lines: ["FN 688297 b", "Vienna Commercial Court"] },
      { label: "Editorial line", lines: ["Information about the services, programmes and publications of CETL Institute on AI literacy, executional learning and the Think Tank."] },
      { label: "Disclaimer", lines: ["Despite careful review of content, we accept no liability for the content of external links. The operators of linked pages are solely responsible for their content."] },
    ],
  },
};

export function ImpressumView() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <section className="legal">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.title}</h1>
        <p className="lead" style={{ margin: "16px 0 3rem" }}>{c.intro}</p>
        <div className="legal-list">
          {c.sections.map((s) => (
            <div className="legal-row" key={s.label}>
              <div className="l">{s.label}</div>
              <div className="v">
                {s.label === "Kontakt" || s.label === "Contact" ? (
                  <p>{lang === "de" ? "E-Mail" : "Email"}: <a href={`mailto:${MAIL}`}>{MAIL}</a></p>
                ) : (
                  s.lines.map((line, i) => <p key={i}>{line}</p>)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
