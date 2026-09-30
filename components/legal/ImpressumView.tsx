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
        lines: ["CETL Institute GmbH", "Gesellschaft mit beschränkter Haftung (GmbH)", "Wipplinger Straße 4/2. OG, 1010 Wien", "Österreich"],
      },
      {
        label: "Vertretungsberechtigte Person(en)",
        lines: ["Alin Kalam, Geschäftsführer"],
      },
      {
        label: "Kontakt",
        lines: ["E-Mail: alinkalam@cetl.institute", "Telefon: wird in Kürze ergänzt"],
      },
      {
        label: "Unternehmensgegenstand",
        lines: ["Organisation und Abhaltung von Schulungen und Fortbildungen."],
      },
      {
        label: "Firmenbuchnummer & -gericht",
        lines: ["FN 688297 b", "Handelsgericht Wien"],
      },
      {
        label: "UID-Nummer",
        lines: ["Wird nach Erteilung durch das Finanzamt ergänzt."],
      },
      {
        label: "Zuständige Aufsichtsbehörde / Kammer",
        lines: ["Falls zutreffend, wird in Kürze ergänzt."],
      },
      {
        label: "EU-Streitschlichtung",
        lines: [
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Angaben zu einer Teilnahmepflicht an einem Verbraucherschlichtungsverfahren folgen in Kürze.",
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
        lines: ["CETL Institute GmbH", "Limited liability company (GmbH)", "Wipplinger Straße 4/2nd floor, 1010 Vienna", "Austria"],
      },
      {
        label: "Authorized Representative(s)",
        lines: ["Alin Kalam, Managing Director"],
      },
      {
        label: "Contact",
        lines: ["Email: alinkalam@cetl.institute", "Phone: to be added shortly"],
      },
      {
        label: "Business Purpose",
        lines: ["Organizing and delivering training and continuing education."],
      },
      {
        label: "Commercial Register Number & Court",
        lines: ["FN 688297 b", "Vienna Commercial Court"],
      },
      {
        label: "VAT ID",
        lines: ["To be added once issued by the tax office."],
      },
      {
        label: "Competent Supervisory Authority / Chamber",
        lines: ["To be added shortly, if applicable."],
      },
      {
        label: "EU Online Dispute Resolution",
        lines: [
          "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. Details on any obligation to participate in consumer arbitration proceedings will follow shortly.",
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
