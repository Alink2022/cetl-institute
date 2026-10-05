import type { Article } from "./content-types";
import { getArticle } from "./insights-articles";
import type { AudienceId, Lang, ServiceTopic } from "./thinktank";

// Server-only: Volltexte plus redaktionelle Zusatzblöcke je Think-Tank-Publikation.
// Die Zusatzblöcke folgen dem Artikel-Template des Think Tanks (Kernaussagen,
// "Was das für Sie bedeutet", Quellen und Methodik, passender CTA).

export interface TTExtras {
  keyFindings: string[];
  implications: Partial<Record<AudienceId, string[]>>;
  methodology: string;
  sources: string[];
  cta: { topic: ServiceTopic; title: string; text: string; button: string };
}

export interface ThinkTankArticle extends Article {
  extras: TTExtras;
}

const extrasDe: Record<string, TTExtras> = {
  "poc-to-production-gap": {
    keyFindings: [
      "KI-Piloten scheitern selten am Modell, sondern an der strukturellen Kompatibilität zwischen Pilot und der Organisation, die ihn betreiben soll.",
      "Vier Muster wiederholen sich: Datenreife wird als gelöst angenommen, Governance kommt nach der Technik, dem Betrieb fehlt ein Eigentümer, und die Architektur-Entscheidung fällt unter Informationsasymmetrie.",
      "Governance-Reife ist der eigentliche Prädiktor für Skalierung, nicht die Modellwahl.",
      "Organisationen, die die Lücke schließen, starten mit einem Reifegrad-Review, bauen Governance parallel zur Technik und führen ihre Use-Case-Pipeline als Portfolio.",
    ],
    implications: {
      board: [
        "Haben wir vor dem nächsten Pilot geklärt, ob unsere Organisation das System im Betrieb tragen kann, und wer es verantwortet?",
        "Gibt es für jeden laufenden Pilot ein dokumentiertes Kriterium, unter dem er skaliert oder eingestellt wird?",
        "Stehen Datenpipelines und Governance im Projektbudget, und nicht nur das Modell?",
      ],
    },
    methodology:
      "Grundlage sind Architektur- und Reifegrad-Reviews sowie Beobachtungen aus Programmen und Engagements des CETL in Banking, Industrie und öffentlichem Sektor. Fallbeobachtungen sind anonymisiert und nicht einzelnen Organisationen zuordenbar.",
    sources: [
      "Im Text referenziert: unabhängige Analysen von McKinsey, Gartner und MIT Sloan Management Review zur Skalierung von KI-Initiativen.",
    ],
    cta: {
      topic: "executional-assessments",
      title: "Reifegrad prüfen, bevor der nächste Pilot startet",
      text: "Ein Capability Audit zeigt unabhängig und entscheidungsreif, was Ihre Organisation im Betrieb tragen kann.",
      button: "Capability Audit besprechen",
    },
  },
  "vendor-lock-in-sovereignty": {
    keyFindings: [
      "Technologische Souveränität ist eine Architektureigenschaft, kein politisches Schlagwort, und wird in Plattform-Entscheidungen gewonnen oder verloren.",
      "Lock-in entsteht auf vier Ebenen: Infrastruktur, Daten und Format, Workflow und Integration, Kompetenz. Sie unterscheiden sich dramatisch in ihrer Reversibilität, am gefährlichsten ist der Kompetenz-Lock-in.",
      "Plattform-Konsolidierung, regulatorischer Druck durch den EU AI Act und geopolitische Realität machen das Thema jetzt akut.",
      "Vier Muster erhalten Reversibilität: Abstraktion an der Modellgrenze, Datenhoheit, plattformneutrales Governance-Tooling und ein Kompetenz-Portfolio statt Zertifikats-Monokultur.",
    ],
    implications: {
      board: [
        "Haben wir die Exit-Kosten modelliert, bevor wir die Plattform unterschrieben haben, und nicht nur die Einführungskosten?",
        "Wo akzeptieren wir Abhängigkeit bewusst, und wo muss Reversibilität erhalten bleiben?",
        "Wer in unserer Organisation könnte in drei Jahren noch beurteilen, ob ein Wechsel nötig ist?",
      ],
      ld: [
        "Entwickeln wir interne Teams über mehrere Stacks und Paradigmen, oder nur entlang des Zertifikats eines Herstellers?",
      ],
    },
    methodology:
      "Die Unterscheidung der vier Ebenen beruht auf Erfahrungen aus Plattform-Entscheidungen auf Auftraggeber- und Bewerterseite sowie auf herstellerneutralen technischen Bewertungen des CETL. Das CETL unterhält keine Reseller- oder Plattformpartnerschaften mit KI- oder Cloud-Anbietern.",
    sources: ["Regulatorischer Bezug: Verordnung (EU) 2024/1689 (EU AI Act)."],
    cta: {
      topic: "thinktank",
      title: "Executive Briefing zur technologischen Souveränität",
      text: "In 2 bis 3 Stunden klären wir mit Ihrem Führungskreis, wo Abhängigkeit vertretbar ist und wo Reversibilität zählt, ergänzt durch eine herstellerneutrale technische Bewertung.",
      button: "Briefing anfragen",
    },
  },
  "ai-judgment-gap": {
    keyFindings: [
      "In den meisten Führungsgremien kann niemand beurteilen, ob das stimmt, was bei KI-Investitionen präsentiert wird. Das ist die AI-Urteilskompetenz-Lücke.",
      "Das Ergebnis ist ein Markt, in dem Narrative gewinnen, nicht Architekturen: Benchmark-Gläubigkeit, Demo-Extrapolation, Vokabel-Camouflage und die Delegations-Illusion.",
      "Urteilskompetenz ist nicht Programmierkompetenz. Sie besteht aus drei erlernbaren Fähigkeiten: Claims dekodieren, die richtigen Gegenfragen stellen und Technologie gegen die eigene Realität spiegeln.",
      "Sie entsteht an echten Entscheidungssituationen mit Sparringspartnern ohne kommerzielles Interesse, nicht durch Keynotes oder einmalige Awareness-Workshops.",
    ],
    implications: {
      board: [
        "Wer in unserem Führungskreis kann beurteilen, ob das stimmt, was uns bei der letzten KI-Entscheidung präsentiert wurde?",
        "Welche Gegenfragen stellen wir Anbietern systematisch (Evaluationsdaten, Drift, Haftung, Exit-Pfad, Folgekosten), bevor wir unterschreiben?",
        "Wird die Bewertung an die Partei delegiert, die am Ergebnis verdient?",
      ],
      hr: [
        "Welche Urteilskompetenz brauchen Führungskräfte in KI-Entscheidungen, und wie weisen wir sie nach, statt sie nur zu unterstellen?",
      ],
      ld: [
        "Bauen wir Urteilsfähigkeit an realen Entscheidungssituationen auf (Angebote, Architekturen, Vendor-Gespräche), oder vermitteln wir Awareness in Einmal-Workshops?",
      ],
    },
    methodology:
      "Grundlage sind Erfahrungen des Autors aus Führungsgremien und aus der Vorbereitung von Entscheidungsvorlagen in Konzernen sowie Beobachtungen aus CETL-Formaten. Fallbeobachtungen sind anonymisiert.",
    sources: ["Regulatorischer Bezug: Verordnung (EU) 2024/1689 (EU AI Act), Aufsichts- und Kontrollpflichten."],
    cta: {
      topic: "executive-education",
      title: "Urteilskompetenz im Führungskreis aufbauen",
      text: "Executive Education an realen Angeboten, Architekturen und Vendor-Gesprächen, mit Sparringspartnern ohne kommerzielles Interesse.",
      button: "Executive-Programm besprechen",
    },
  },
  "eu-ai-act-governance": {
    keyFindings: [
      "Der AI Act belohnt strukturell dieselben Fähigkeiten, die ohnehin über Erfolg oder Scheitern von KI-Initiativen entscheiden. Wer ihn als lästige Pflicht behandelt, zahlt doppelt.",
      "Im Kern verlangt er vier Dinge: wissen, was man betreibt, erklären können, wie es funktioniert, Menschen in der Verantwortung halten und Kompetenz nachweisen (Artikel 4).",
      "Früh begonnene Governance kostet Projektbudget. Spät begonnene Governance kostet Handlungsfähigkeit.",
      "Drei strategische Fehler: der AI Act wird als reines Rechtsthema geführt, Kompetenzaufbau wird auf E-Learning reduziert, und Governance wird gegen Innovation ausgespielt.",
    ],
    implications: {
      board: [
        "Haben wir ein vollständiges Inventar unserer KI-Systeme, auch der eingebetteten und eingekauften, mit erster Risikoklassifizierung?",
        "Führen wir AI-Act-Readiness nur juristisch, oder auch als Architektur- und Organisationsthema?",
        "Wie machen wir Governance-Reife zum Argument gegenüber Kunden und Auftraggebern?",
      ],
      hr: [
        "Wie erfüllen wir die Pflicht zur KI-Kompetenz nach Artikel 4 so, dass sie wirksame Aufsicht trägt, und nicht nur Teilnahmequoten?",
        "Für welche Rollen brauchen wir künftig welche Kompetenzstufe, und wo liegen die größten Lücken?",
      ],
      ld: [
        "Messen wir Transfer und Urteilskompetenz, oder zählen wir absolvierte Schulungen?",
        "Wie sieht ein Lernpfad aus, der über Klick-Schulungen hinausgeht?",
      ],
    },
    methodology:
      "Grundlage sind die Anforderungen des EU AI Act sowie Beobachtungen aus der Arbeit des CETL mit Banken, Industrie und öffentlichem Sektor und aus Governance-Verantwortung in Konzernen. Die Einordnung ist keine Rechtsberatung.",
    sources: ["Verordnung (EU) 2024/1689 (EU AI Act), insbesondere Artikel 4 (KI-Kompetenz)."],
    cta: {
      topic: "executional-learning",
      title: "KI-Kompetenz nach Artikel 4 wirksam aufbauen",
      text: "Rollenbasierte Lernprogramme (Foundation und Customized) statt Klick-Schulung, mit messbarem Transfer.",
      button: "Programm besprechen",
    },
  },
  "embedded-engineering": {
    keyFindings: [
      "Das klassische Beratungsmodell verliert strukturell Kompetenz: Es wird nach Aufwand bezahlt, und wirtschaftlich rational ist für den Anbieter ein Klient mit dauerhaftem Unterstützungsbedarf.",
      "Bei KI ist das besonders fatal, weil KI-Systeme lebende Systeme sind, die laufend evaluiert und angepasst werden müssen.",
      "Embedded Engineering (Forward Deployed Engineers) arbeitet in den Initiativen, im Tandem mit internen Mitarbeitenden, zeitlich begrenzt und mit dem Erfolgskriterium der eigenen Überflüssigkeit.",
      "Die entscheidende Frage an jedes Angebot: Was kann unsere Organisation danach eigenständig, was sie vorher nicht konnte, und wie wird das gemessen?",
    ],
    implications: {
      board: [
        "Was bleibt in unserer Organisation, wenn der externe Partner geht, und steht das so im Vertrag?",
        "Welche Betriebsaufgaben sind längst interne Routine, werden aber noch extern vergütet?",
      ],
      hr: [
        "Wie übertragen wir Verantwortung auf interne Teams, statt sie jahrelang neben externen Experten sitzen zu lassen?",
      ],
      ld: [
        "Sind externe Rollen mit internen Mitarbeitenden gepaart, mit dokumentierten Übergabepunkten?",
        "Welche Kompetenz-Outcomes definieren wir vorab, und wie messen wir sie?",
      ],
    },
    methodology:
      "Grundlage sind Beobachtungen des Autors aus zwei Jahrzehnten Konzernpraxis auf Auftraggeberseite sowie das Engagement-Modell des CETL (Embedded Engineering, Executional Learning).",
    sources: ["Kein externer Quellenapparat: Position auf Basis von Praxisbeobachtungen."],
    cta: {
      topic: "fde",
      title: "Embedded Engineering in Ihrer Organisation",
      text: "Externe Expertise, deren Erfolgskriterium die eigene Überflüssigkeit ist: im Tandem, zeitlich begrenzt, mit messbarem Kompetenztransfer.",
      button: "Gespräch vereinbaren",
    },
  },
};

const extrasEn: Record<string, TTExtras> = {
  "poc-to-production-gap": {
    keyFindings: [
      "AI pilots rarely fail because of the model. They fail on structural compatibility between the pilot and the organisation that is supposed to operate it.",
      "Four patterns recur: data maturity is assumed solved, governance comes after the technology, operations has no owner, and the architecture decision is made under information asymmetry.",
      "Governance maturity is the real predictor of scale, not the choice of model.",
      "Organisations that close the gap start with a maturity review, build governance in parallel with the technology and run their use-case pipeline as a portfolio.",
    ],
    implications: {
      board: [
        "Before the next pilot, have we clarified whether our organisation can carry the system in operation, and who is accountable for it?",
        "Does every running pilot have a documented criterion under which it scales or is stopped?",
        "Do data pipelines and governance appear in the project budget, and not just the model?",
      ],
    },
    methodology:
      "Based on architecture and maturity reviews and on observations from CETL programmes and engagements in banking, industry and the public sector. Case observations are anonymised and cannot be attributed to individual organisations.",
    sources: [
      "Referenced in the text: independent analyses by McKinsey, Gartner and MIT Sloan Management Review on scaling AI initiatives.",
    ],
    cta: {
      topic: "executional-assessments",
      title: "Check maturity before the next pilot starts",
      text: "A Capability Audit shows, independently and ready for a decision, what your organisation can carry in operation.",
      button: "Discuss a Capability Audit",
    },
  },
  "vendor-lock-in-sovereignty": {
    keyFindings: [
      "Technological sovereignty is an architectural property, not a political slogan, and it is won or lost in platform decisions.",
      "Lock-in arises on four levels: infrastructure, data and format, workflow and integration, and capability. They differ dramatically in reversibility, and capability lock-in is the most dangerous.",
      "Platform consolidation, regulatory pressure from the EU AI Act and geopolitical reality make the topic acute now.",
      "Four patterns preserve reversibility: abstraction at the model boundary, data ownership, platform-neutral governance tooling and a capability portfolio instead of a certification monoculture.",
    ],
    implications: {
      board: [
        "Did we model the exit costs before signing the platform, and not just the adoption costs?",
        "Where do we accept dependency deliberately, and where must reversibility be preserved?",
        "Who in our organisation could still judge in three years whether a switch is needed?",
      ],
      ld: [
        "Do we develop internal teams across several stacks and paradigms, or only along one vendor's certification?",
      ],
    },
    methodology:
      "The distinction of the four levels draws on experience of platform decisions from the client side and the assessor side, and on CETL's vendor-neutral technical assessments. CETL holds no reseller or platform partnerships with AI or cloud vendors.",
    sources: ["Regulatory reference: Regulation (EU) 2024/1689 (EU AI Act)."],
    cta: {
      topic: "thinktank",
      title: "Executive Briefing on technological sovereignty",
      text: "In 2 to 3 hours we work through with your leadership where dependency is acceptable and where reversibility matters, complemented by a vendor-neutral technical assessment.",
      button: "Request a briefing",
    },
  },
  "ai-judgment-gap": {
    keyFindings: [
      "In most leadership bodies nobody can judge whether what is presented on AI investments is true. That is the AI judgment gap.",
      "The result is a market where narratives win, not architectures: benchmark credulity, demo extrapolation, vocabulary camouflage and the delegation illusion.",
      "Judgment is not programming skill. It consists of three learnable capabilities: decoding claims, asking the right counter-questions and mirroring technology against your own reality.",
      "It is built on real decision situations with sparring partners who have no commercial interest, not through keynotes or one-off awareness workshops.",
    ],
    implications: {
      board: [
        "Who in our leadership team can judge whether what was presented to us in the last AI decision was true?",
        "Which counter-questions do we ask vendors systematically (evaluation data, drift, liability, exit path, running costs) before we sign?",
        "Is the evaluation delegated to the party that profits from the outcome?",
      ],
      hr: [
        "What judgment capability do leaders need in AI decisions, and how do we demonstrate it instead of just assuming it?",
      ],
      ld: [
        "Do we build judgment on real decision situations (offers, architectures, vendor conversations), or convey awareness in one-off workshops?",
      ],
    },
    methodology:
      "Based on the author's experience in leadership bodies and in preparing decision papers inside corporate groups, plus observations from CETL formats. Case observations are anonymised.",
    sources: ["Regulatory reference: Regulation (EU) 2024/1689 (EU AI Act), oversight and control obligations."],
    cta: {
      topic: "executive-education",
      title: "Build judgment in your leadership team",
      text: "Executive education on real offers, architectures and vendor conversations, with sparring partners who have no commercial interest.",
      button: "Discuss an executive programme",
    },
  },
  "eu-ai-act-governance": {
    keyFindings: [
      "The AI Act structurally rewards the same capabilities that decide the success or failure of AI initiatives anyway. Those who treat it as a tiresome duty pay twice.",
      "At its core it demands four things: know what you operate, be able to explain how it works, keep humans accountable and demonstrate competence (Article 4).",
      "Governance started early costs project budget. Governance started late costs the ability to act.",
      "Three strategic mistakes: the AI Act is run as a pure legal topic, capability building is reduced to e-learning, and governance is played off against innovation.",
    ],
    implications: {
      board: [
        "Do we have a complete inventory of our AI systems, including embedded and purchased ones, with a first risk classification?",
        "Do we run AI Act readiness only as a legal topic, or also as an architecture and organisation topic?",
        "How do we turn governance maturity into an argument towards customers and contracting bodies?",
      ],
      hr: [
        "How do we meet the AI literacy obligation under Article 4 in a way that supports effective oversight, and not just participation rates?",
        "Which roles will need which level of competence, and where are the biggest gaps?",
      ],
      ld: [
        "Do we measure transfer and judgment, or do we count completed trainings?",
        "What does a learning path look like that goes beyond click-through training?",
      ],
    },
    methodology:
      "Based on the requirements of the EU AI Act and on observations from CETL's work with banks, industry and the public sector and from governance responsibility in corporate groups. This is an assessment, not legal advice.",
    sources: ["Regulation (EU) 2024/1689 (EU AI Act), in particular Article 4 (AI literacy)."],
    cta: {
      topic: "executional-learning",
      title: "Build AI literacy under Article 4 that works",
      text: "Role-based learning programmes (Foundation and Customized) instead of click-through training, with measurable transfer.",
      button: "Discuss a programme",
    },
  },
  "embedded-engineering": {
    keyFindings: [
      "The classic consulting model loses capability structurally: it is paid by effort, and the economically rational state for the vendor is a client with permanent need for support.",
      "With AI this is especially fatal, because AI systems are living systems that need continuous evaluation and adjustment.",
      "Embedded engineering (Forward Deployed Engineers) works inside the initiatives, in tandem with internal staff, time-limited and with its own obsolescence as the success criterion.",
      "The decisive question for any offer: what can our organisation do independently afterwards that it could not do before, and how is that measured?",
    ],
    implications: {
      board: [
        "What remains in our organisation when the external partner leaves, and does the contract say so?",
        "Which operational tasks have long been internal routine but are still paid externally?",
      ],
      hr: [
        "How do we hand responsibility to internal teams instead of letting them sit next to external experts for years?",
      ],
      ld: [
        "Are external roles paired with internal staff, with documented handover points?",
        "Which capability outcomes do we define up front, and how do we measure them?",
      ],
    },
    methodology:
      "Based on the author's observations from two decades of corporate practice on the client side and on CETL's engagement model (embedded engineering, Executional Learning).",
    sources: ["No external source apparatus: a position based on practice observations."],
    cta: {
      topic: "fde",
      title: "Embedded engineering in your organisation",
      text: "External expertise whose success criterion is its own obsolescence: in tandem, time-limited, with measurable capability transfer.",
      button: "Arrange a conversation",
    },
  },
};

const EXTRAS: Record<Lang, Record<string, TTExtras>> = { de: extrasDe, en: extrasEn };

export function getThinkTankArticle(lang: Lang, slug: string): ThinkTankArticle | undefined {
  const base = getArticle(lang, slug);
  const extras = EXTRAS[lang][slug];
  if (!base || !extras) return undefined;
  return { ...base, extras };
}
