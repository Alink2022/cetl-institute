"use client";

import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

const CONTENT = {
  de: {
    title: "Impressum",
    intro: "Angaben gemäß § 5 ECG, § 25 Mediengesetz und § 14 UGB.",
    sections: [
      {
        label: "Medieninhaber & Herausgeber",
        lines: ["[FIRMENNAME]", "[RECHTSFORM]", "[ANSCHRIFT — Straße, PLZ, Ort]", "Österreich"],
      },
      {
        label: "Vertretungsberechtigte Person(en)",
        lines: ["[VOR- UND NACHNAME, FUNKTION]"],
      },
      {
        label: "Kontakt",
        lines: ["E-Mail: alinkalam@cetl.institute", "Telefon: [TELEFONNUMMER]"],
      },
      {
        label: "Unternehmensgegenstand",
        lines: ["[UNTERNEHMENSGEGENSTAND]"],
      },
      {
        label: "Firmenbuchnummer & -gericht",
        lines: ["[FIRMENBUCHNUMMER]", "[FIRMENBUCHGERICHT]"],
      },
      {
        label: "UID-Nummer",
        lines: ["[UID-NUMMER]"],
      },
      {
        label: "Zuständige Aufsichtsbehörde / Kammer",
        lines: ["[AUFSICHTSBEHÖRDE ODER KAMMER, FALLS ZUTREFFEND]"],
      },
      {
        label: "EU-Streitschlichtung",
        lines: [
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle [NICHT] verpflichtet.",
        ],
      },
      {
        label: "Haftungshinweis",
        lines: [
          "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
        ],
      },
    ],
  },
  en: {
    title: "Legal Notice",
    intro: "Information pursuant to § 5 ECG, § 25 Media Act and § 14 UGB (Austria).",
    sections: [
      {
        label: "Media Owner & Publisher",
        lines: ["[COMPANY NAME]", "[LEGAL FORM]", "[ADDRESS — Street, Postal Code, City]", "Austria"],
      },
      {
        label: "Authorized Representative(s)",
        lines: ["[FULL NAME, TITLE]"],
      },
      {
        label: "Contact",
        lines: ["Email: alinkalam@cetl.institute", "Phone: [PHONE NUMBER]"],
      },
      {
        label: "Business Purpose",
        lines: ["[BUSINESS PURPOSE]"],
      },
      {
        label: "Commercial Register Number & Court",
        lines: ["[COMPANY REGISTER NUMBER]", "[COMPANY REGISTER COURT]"],
      },
      {
        label: "VAT ID",
        lines: ["[VAT ID NUMBER]"],
      },
      {
        label: "Competent Supervisory Authority / Chamber",
        lines: ["[SUPERVISORY AUTHORITY OR CHAMBER, IF APPLICABLE]"],
      },
      {
        label: "EU Online Dispute Resolution",
        lines: [
          "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. We are [NOT] obligated to participate in dispute resolution proceedings before a consumer arbitration board.",
        ],
      },
      {
        label: "Disclaimer",
        lines: [
          "Despite careful content review, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.",
        ],
      },
    ],
  },
};

export function ImpressumView() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <>
      <NavBar />
      <main className="bg-cetl-surface min-h-screen pt-40 pb-24">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-cetl-text mb-3">{c.title}</h1>
          <p className="text-cetl-text-muted text-sm mb-12">{c.intro}</p>

          <div className="flex flex-col gap-8">
            {c.sections.map((section) => (
              <div key={section.label} className="pb-8 border-b border-cetl-border last:border-0">
                <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  {section.label}
                </p>
                <div className="flex flex-col gap-1">
                  {section.lines.map((line, i) => (
                    <p key={i} className="text-cetl-text-muted text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
