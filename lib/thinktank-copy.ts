import type { AudienceId, Lang } from "./thinktank";

// Oberflächentexte der Think-Tank-Seiten (Landing, Artikel, Gastbeiträge).
// Deutsch ist die Leitsprache, die englische Fassung folgt 1:1.

export interface TTCopy {
  nav: { think: string };
  landing: {
    meta: { title: string; description: string };
    hero: { eyebrow: string; h1: string; sub: string; ctaRead: string; ctaServices: string; stats: { value: string; label: string }[] };
    claim: { eyebrow: string; title: string; text: string; standards: { title: string; text: string }[] };
    audiences: { eyebrow: string; title: string; cards: { id: AudienceId; title: string; questions: string }[]; link: string };
    fields: { eyebrow: string; title: string; lead: string; link: string; linksLabel: string; count: (n: number) => string };
    pubs: {
      eyebrow: string; title: string; lead: string;
      filterField: string; filterFormat: string; filterAudience: string;
      all: string; international: string; empty: string; reset: string;
      formatsSummary: string; open: string; guestBadge: (name: string) => string;
    };
    services: { eyebrow: string; title: string };
    authors: {
      eyebrow: string; title: string; lead: string;
      team: string; guests: string;
      guestsTitle: string; guestsText: string; guestsCta: string;
      editorial: string;
    };
    cta: { text: string; button: string };
  };
  card: { by: string; nr: string; read: string };
  article: {
    back: string; version: string; published: string; byline: string;
    kern: string;
    implications: { title: string; lead: string; groups: Record<AudienceId, string> };
    method: string; sources: string;
    cite: string; copy: string; copied: string;
    pdf: string; share: string; linkedin: string; copyLink: string;
    authorLabel: string; disclosure: string;
    more: string; prev: string; next: string;
    guestBadge: (name: string, org?: string, country?: string) => string;
  };
  guest: {
    meta: { title: string; description: string };
    hero: { eyebrow: string; h1: string; intro: string; cta: string; back: string };
    howTitle: string;
    steps: { title: string; text: string }[];
    principlesTitle: string;
    principles: { title: string; text: string }[];
    giveTitle: string;
    gives: string[];
    disclosureTitle: string;
    disclosureText: string;
    disclosureExample: string;
    formTitle: string;
    formLead: string;
    form: { name: string; email: string; org: string; idea: string; submit: string; sending: string; success: string; error: string };
  };
}

export const TT_COPY: Record<Lang, TTCopy> = {
  de: {
    nav: { think: "Think Tank" },
    landing: {
      meta: {
        title: "CETL Think Tank: Unabhängige Analysen zu KI, Daten und Tech Leadership",
        description:
          "Der CETL Think Tank veröffentlicht unabhängige Analysen zu KI, Daten und Tech Leadership und unterstützt Organisationen mit Executive Briefings, Foresight Labs und laufendem Sparring.",
      },
      hero: {
        eyebrow: "CETL Think Tank",
        h1: "Unabhängige Analysen zu KI, Daten und Tech Leadership",
        sub: "Für Geschäftsführung, HR und Learning & Development. Herstellerneutral, evidenzbasiert und aus der Praxis von über 50 Lehrenden und 15 Hochschulpartnern im DACH-Raum.",
        ctaRead: "Publikationen lesen",
        ctaServices: "Think Tank Services",
        stats: [
          { value: "50+", label: "Lehrende aus der Praxis" },
          { value: "15+", label: "Hochschulpartner im DACH-Raum" },
          { value: "5", label: "Forschungsfelder" },
          { value: "0", label: "Reseller- oder Plattformpartnerschaften" },
        ],
      },
      claim: {
        eyebrow: "Unser Anspruch",
        title: "Keine Trendberichte. Positionen, die Entscheidungen tragen.",
        text: "Der CETL Think Tank veröffentlicht keine Trendberichte. Wir analysieren strukturelle Fragen, an denen KI-Initiativen in Organisationen scheitern oder gelingen, und beziehen dazu Position. Grundlage sind Forschung, Daten und anonymisierte Beobachtungen aus unseren Programmen in Banking, Industrie, Aviation und öffentlichem Sektor.",
        standards: [
          { title: "Eine klare These", text: "Jede Publikation bezieht Position und begründet sie, statt Trends zusammenzufassen." },
          { title: "Belege", text: "Quellen, Daten oder anonymisierte Beobachtungen aus unseren Programmen, am Ende offengelegt." },
          { title: "Konsequenzen für Entscheider", text: "Jeder Beitrag endet mit konkreten Folgen für Führung, Governance, Architektur oder Kompetenzaufbau." },
          { title: "Namentliche Autorenschaft", text: "Veröffentlicht unter echten Namen mit Rolle, auch bei externen Fellows und akademischen Co-Autorinnen." },
          { title: "Redaktionelle Prüfung", text: "Jeder Beitrag wird vor der Veröffentlichung von mindestens einem weiteren Mitglied des Redaktionsboards gelesen." },
        ],
      },
      audiences: {
        eyebrow: "Für wen wir denken",
        title: "Drei Zielgruppen, drei Leitfragen",
        cards: [
          { id: "board", title: "Geschäftsführung und Vorstand", questions: "Wo schafft KI in unserer Organisation tatsächlich Wert, und welche Entscheidungen zu Governance, Architektur und Investitionen stehen jetzt an?" },
          { id: "hr", title: "HR und People", questions: "Wie verändern sich Rollen und Anforderungsprofile, welche Kompetenzen brauchen wir morgen, und wie erfüllen wir die Pflicht zur KI-Kompetenz nach dem EU AI Act?" },
          { id: "ld", title: "Learning & Development", questions: "Wie bauen wir KI-Kompetenz wirksam und messbar auf, und wie verändert KI das Lernen in der Organisation selbst?" },
        ],
        link: "Passende Publikationen",
      },
      fields: {
        eyebrow: "Forschungsfelder",
        title: "Fünf Felder, jedes mit Anschluss an unser Portfolio",
        lead: "Die Forschungsfelder spiegeln unsere Leistungen und unsere Zielgruppen. So führt jede Publikation zu etwas, das wir auch liefern können.",
        link: "Publikationen zum Feld",
        linksLabel: "Verbunden mit",
        count: (n) => (n === 0 ? "Erste Publikation in Vorbereitung" : n === 1 ? "1 Publikation" : `${n} Publikationen`),
      },
      pubs: {
        eyebrow: "Publikationen",
        title: "Aus der Forschung in die Praxis",
        lead: "Analysen und Frameworks für Entscheider, die über den nächsten Piloten hinausdenken. Neueste zuerst.",
        filterField: "Forschungsfeld", filterFormat: "Format", filterAudience: "Zielgruppe",
        all: "Alle", international: "Internationale Co-Autorenschaft",
        empty: "Zu dieser Auswahl gibt es noch keine Publikation. Weitere Beiträge sind in Vorbereitung.",
        reset: "Filter zurücksetzen",
        formatsSummary: "Unsere Formate im Überblick", open: "Publikation lesen",
        guestBadge: (name) => `Co-Autorenschaft mit ${name}`,
      },
      services: { eyebrow: "Think Tank Services", title: "Das Denken in Ihre Organisation holen" },
      authors: {
        eyebrow: "Autorinnen, Autoren und Fellows",
        title: "Die Köpfe hinter den Analysen",
        lead: "Jede Publikation erscheint unter echten Namen. Das Redaktionsboard besteht aus dem Gründungsteam, ergänzt um Fellows aus Trainer-Pool und Hochschulnetzwerk.",
        team: "CETL Redaktionsboard",
        guests: "Gastautorinnen und Gastautoren",
        guestsTitle: "Internationale Stimmen in Vorbereitung",
        guestsText: "Wir laden führende Expertinnen und Experten aus Forschung und Praxis ein, gemeinsam mit unserem Team zu publizieren. Die ersten Co-Autorenschaften erscheinen hier, sobald sie redaktionell freigegeben sind.",
        guestsCta: "Mehr zu den Gastbeiträgen",
        editorial: "Redaktionsboard",
      },
      cta: {
        text: "Sie möchten die Themen des Think Tanks in Ihre Führungsrunde, Ihr HR-Team oder Ihre Lernorganisation bringen?",
        button: "Gespräch vereinbaren",
      },
    },
    card: { by: "von", nr: "Nr.", read: "Lesen" },
    article: {
      back: "Zurück zum Think Tank", version: "Version", published: "Veröffentlicht", byline: "Autor",
      kern: "Kernaussagen",
      implications: {
        title: "Was das für Sie bedeutet",
        lead: "Fragen, die sich jede Rolle in Ihrer Organisation stellen sollte. Jeder Block lässt sich direkt weiterleiten.",
        groups: { board: "Für die Geschäftsführung", hr: "Für HR", ld: "Für Learning & Development" },
      },
      method: "Methodik", sources: "Quellen",
      cite: "Zitiervorschlag", copy: "Zitat kopieren", copied: "Kopiert",
      pdf: "Als PDF speichern", share: "Teilen", linkedin: "LinkedIn", copyLink: "Link kopieren",
      authorLabel: "Autor", disclosure: "Offenlegung",
      more: "Weitere Analysen", prev: "Vorherige", next: "Nächste",
      guestBadge: (name, org, country) => `Co-Autorenschaft mit ${name}${org ? `, ${org}` : ""}${country ? ` (${country})` : ""}`,
    },
    guest: {
      meta: {
        title: "CETL Think Tank: Für Gastautorinnen und Gastautoren",
        description:
          "Der CETL Think Tank lädt führende Stimmen aus Forschung und Praxis ein, gemeinsam mit dem CETL-Team Analysen zu KI, Daten und Tech Leadership zu verfassen. Zweisprachig, mit Zitiervorschlag und gemeinsamer Veröffentlichung.",
      },
      hero: {
        eyebrow: "CETL Guest Perspectives",
        h1: "Für Gastautorinnen und Gastautoren",
        intro:
          "Der CETL Think Tank lädt führende Stimmen aus Forschung und Praxis ein, gemeinsam mit unserem Team Analysen zu KI, Daten und Tech Leadership zu verfassen. Jeder Beitrag entsteht in Co-Autorenschaft, folgt denselben redaktionellen Standards wie unsere eigenen Publikationen und erscheint auf Englisch und Deutsch, mit Zitiervorschlag und gemeinsamer Veröffentlichung über unsere Kanäle.",
        cta: "Beitrag vorschlagen",
        back: "Zurück zum Think Tank",
      },
      howTitle: "So entsteht ein Gastbeitrag",
      steps: [
        { title: "Einladung", text: "Wir sprechen Expertinnen und Experten gezielt an und legen vorab fest, wer im CETL-Team als Co-Autorin oder Co-Autor übernimmt." },
        { title: "Interview", text: "Ein Gespräch von 60 bis 90 Minuten. Ihre These und Ihre internationale Perspektive stehen im Mittelpunkt, Sie müssen keine 3.000 Wörter schreiben." },
        { title: "Entwurf und Revision", text: "Das CETL-Team verfasst den ersten Entwurf, ergänzt Beobachtungen aus unseren Programmen im DACH-Raum und übernimmt die redaktionelle Verantwortung. Sie revidieren in ein bis zwei Runden." },
        { title: "Veröffentlichung", text: "Der Beitrag erscheint auf Englisch und Deutsch, mit Zitiervorschlag, designtem PDF und gemeinsamer Promotion auf LinkedIn." },
      ],
      principlesTitle: "Unsere Grundsätze",
      principles: [
        { title: "Einladungsbasiert", text: "Wir sprechen Gäste selbst an, statt offene Einreichungen anzunehmen. So bleibt die Qualität hoch, und die Autorenliste wird selbst zur Aussage. Starke Themenvorschläge sind willkommen." },
        { title: "Gleicher redaktioneller Standard", text: "Klare These, Belege, Konsequenzen für Entscheider und Prüfung durch das Redaktionsboard, das über die Veröffentlichung das letzte Wort behält." },
        { title: "Zweisprachig", text: "Jeder Gastbeitrag erscheint vollständig auf Englisch und Deutsch. Die Übersetzung wird von der CETL-Co-Autorenschaft geprüft und von Ihnen freigegeben. Beide Fassungen sind verlinkt." },
        { title: "Anbieter willkommen, mit Offenlegung", text: "Viele der schärfsten Köpfe arbeiten bei Technologieanbietern. Ihre Zugehörigkeit wird sichtbar offengelegt, der Beitrag darf keine eigenen Produkte bewerben, und CETL-Co-Autorenschaft und Redaktionsboard sichern die Herstellerneutralität." },
        { title: "Ihre Rechte", text: "Das Urheberrecht bleibt bei Ihnen, das CETL erhält eine nicht-exklusive Lizenz. Nach 30 Tagen können Sie den Beitrag mit Rückverweis auf das Original auf Ihren eigenen Kanälen veröffentlichen." },
        { title: "Kein Honorar, echter Gegenwert", text: "Gastbeiträge sind in Think Tanks üblicherweise unbezahlt. Der Wert liegt in Plattform, Lektorat, Übersetzung, Design und Promotion, bei großem Aufwand ergänzt durch eine Einladung zu einem CETL-Event oder zum Hackathon." },
      ],
      giveTitle: "Was Sie davon haben",
      gives: [
        "Eine kuratierte, unabhängige Plattform ohne Anbieterinteressen",
        "Ein professionell gestaltetes PDF mit Zitiervorschlag",
        "Gemeinsame Promotion über die Kanäle des CETL und Ihre eigenen",
        "Sichtbarkeit im DACH-Markt und Zugang zu unserem akademischen und industriellen Netzwerk",
        "Eine Publikation neben Forschenden aus dem Umfeld der TU Wien",
      ],
      disclosureTitle: "Offenlegung bei Technologieanbietern",
      disclosureText: "Arbeiten Gäste bei einem KI-, Cloud- oder Technologieanbieter, erscheint oben im Beitrag ein sichtbarer Hinweis nach folgendem Muster:",
      disclosureExample:
        "Offenlegung: [Name] ist [Rolle] bei [Unternehmen]. Der Beitrag gibt die persönliche Einschätzung der Autorinnen und Autoren wieder. Das CETL unterhält keine Geschäftsbeziehung zu [Unternehmen], die Inhalt oder Schlussfolgerungen dieses Beitrags beeinflusst.",
      formTitle: "Beitrag vorschlagen",
      formLead: "Sie haben eine These, die in den CETL Think Tank gehört? Skizzieren Sie sie in wenigen Sätzen. Wir melden uns persönlich.",
      form: {
        name: "Name *", email: "E-Mail *", org: "Organisation und Rolle", idea: "Ihre These in wenigen Sätzen *",
        submit: "Vorschlag senden", sending: "Wird gesendet…",
        success: "Danke! Ihr Vorschlag ist angekommen, wir melden uns persönlich.",
        error: "Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an alinkalam@cetl.institute.",
      },
    },
  },
  en: {
    nav: { think: "Think Tank" },
    landing: {
      meta: {
        title: "CETL Think Tank: Independent Analysis on AI, Data and Tech Leadership",
        description:
          "The CETL Think Tank publishes independent analysis on AI, data and tech leadership and supports organisations with executive briefings, foresight labs and ongoing sparring.",
      },
      hero: {
        eyebrow: "CETL Think Tank",
        h1: "Independent analysis on AI, data and tech leadership",
        sub: "For executive management, HR and Learning & Development. Vendor-neutral, evidence-based and drawn from the practice of more than 50 lecturers and 15 university partners across the DACH region.",
        ctaRead: "Read publications",
        ctaServices: "Think Tank Services",
        stats: [
          { value: "50+", label: "practitioners teaching" },
          { value: "15+", label: "university partners across DACH" },
          { value: "5", label: "research fields" },
          { value: "0", label: "reseller or platform partnerships" },
        ],
      },
      claim: {
        eyebrow: "Our standard",
        title: "No trend reports. Positions that carry decisions.",
        text: "The CETL Think Tank does not publish trend reports. We analyse the structural questions on which AI initiatives in organisations fail or succeed, and we take a position on them. The basis is research, data and anonymised observations from our programmes in banking, industry, aviation and the public sector.",
        standards: [
          { title: "A clear thesis", text: "Every publication takes a position and argues it, instead of summarising trends." },
          { title: "Evidence", text: "Sources, data or anonymised observations from our programmes, disclosed at the end." },
          { title: "Implications for decision-makers", text: "Every piece ends with concrete consequences for leadership, governance, architecture or capability building." },
          { title: "Named authors", text: "Published under real names with roles, including external fellows and academic co-authors." },
          { title: "Editorial review", text: "Every piece is read by at least one other member of the editorial board before publication." },
        ],
      },
      audiences: {
        eyebrow: "Who we think for",
        title: "Three audiences, three guiding questions",
        cards: [
          { id: "board", title: "Executive management and boards", questions: "Where does AI actually create value in our organisation, and which decisions on governance, architecture and investment are due now?" },
          { id: "hr", title: "HR and People", questions: "How are roles and requirement profiles changing, which skills do we need tomorrow, and how do we meet the AI literacy obligation under the EU AI Act?" },
          { id: "ld", title: "Learning & Development", questions: "How do we build AI literacy effectively and measurably, and how does AI change learning inside the organisation itself?" },
        ],
        link: "Matching publications",
      },
      fields: {
        eyebrow: "Research fields",
        title: "Five fields, each connected to our portfolio",
        lead: "The research fields mirror our services and our audiences, so every publication leads to something we can also deliver.",
        link: "Publications in this field",
        linksLabel: "Connected to",
        count: (n) => (n === 0 ? "First publication in preparation" : n === 1 ? "1 publication" : `${n} publications`),
      },
      pubs: {
        eyebrow: "Publications",
        title: "From research into practice",
        lead: "Analyses and frameworks for decision-makers thinking beyond the next pilot. Newest first.",
        filterField: "Research field", filterFormat: "Format", filterAudience: "Audience",
        all: "All", international: "International co-authorship",
        empty: "There is no publication for this selection yet. More pieces are in preparation.",
        reset: "Reset filters",
        formatsSummary: "Our formats at a glance", open: "Read publication",
        guestBadge: (name) => `Co-authored with ${name}`,
      },
      services: { eyebrow: "Think Tank Services", title: "Bring the thinking into your organisation" },
      authors: {
        eyebrow: "Authors and fellows",
        title: "The people behind the analyses",
        lead: "Every publication appears under real names. The editorial board is the founding team, joined by fellows from the trainer pool and the university network.",
        team: "CETL editorial board",
        guests: "Guest authors",
        guestsTitle: "International voices in preparation",
        guestsText: "We are inviting leading experts from research and practice to publish together with our team. The first co-authored pieces will appear here as soon as they are editorially approved.",
        guestsCta: "More about guest contributions",
        editorial: "Editorial board",
      },
      cta: {
        text: "Would you like to bring the Think Tank's topics into your leadership meeting, your HR team or your learning organisation?",
        button: "Arrange a conversation",
      },
    },
    card: { by: "by", nr: "No.", read: "Read" },
    article: {
      back: "Back to the Think Tank", version: "Version", published: "Published", byline: "Author",
      kern: "Key findings",
      implications: {
        title: "What this means for you",
        lead: "Questions every role in your organisation should ask itself. Each block can be forwarded as is.",
        groups: { board: "For executive management", hr: "For HR", ld: "For Learning & Development" },
      },
      method: "Methodology", sources: "Sources",
      cite: "Suggested citation", copy: "Copy citation", copied: "Copied",
      pdf: "Save as PDF", share: "Share", linkedin: "LinkedIn", copyLink: "Copy link",
      authorLabel: "Author", disclosure: "Disclosure",
      more: "More analyses", prev: "Previous", next: "Next",
      guestBadge: (name, org, country) => `Co-authored with ${name}${org ? `, ${org}` : ""}${country ? ` (${country})` : ""}`,
    },
    guest: {
      meta: {
        title: "CETL Think Tank: For guest authors",
        description:
          "The CETL Think Tank invites leading voices from research and practice to write analyses on AI, data and tech leadership together with the CETL team. Bilingual, with a suggested citation and joint publication.",
      },
      hero: {
        eyebrow: "CETL Guest Perspectives",
        h1: "For guest authors",
        intro:
          "The CETL Think Tank invites leading voices from research and practice to write analyses on AI, data and tech leadership together with our team. Every piece is co-authored, follows the same editorial standards as our own publications and appears in English and German, with a suggested citation and joint promotion across our channels.",
        cta: "Suggest a contribution",
        back: "Back to the Think Tank",
      },
      howTitle: "How a guest contribution comes about",
      steps: [
        { title: "Invitation", text: "We approach experts directly and decide up front who on the CETL team will act as co-author." },
        { title: "Interview", text: "A conversation of 60 to 90 minutes. Your thesis and your international perspective are at the centre, you do not have to write 3,000 words." },
        { title: "Draft and revision", text: "The CETL team writes the first draft, adds observations from our programmes in the DACH region and takes editorial responsibility. You revise in one or two rounds." },
        { title: "Publication", text: "The piece appears in English and German, with a suggested citation, a designed PDF and joint promotion on LinkedIn." },
      ],
      principlesTitle: "Our principles",
      principles: [
        { title: "Invitation-led", text: "We approach guests ourselves instead of accepting open submissions. That keeps quality high, and the list of authors becomes a statement in itself. Strong topic ideas are welcome." },
        { title: "Same editorial standard", text: "A clear thesis, evidence, implications for decision-makers and review by the editorial board, which keeps the final say on publication." },
        { title: "Bilingual", text: "Every guest piece appears in full in English and German. The translation is reviewed by the CETL co-author and approved by you. Both versions are linked." },
        { title: "Vendors welcome, with disclosure", text: "Many of the sharpest minds work at technology vendors. Their affiliation is visibly disclosed, the piece must not promote their own products, and the CETL co-author and editorial board safeguard vendor neutrality." },
        { title: "Your rights", text: "You keep the copyright, CETL receives a non-exclusive licence. After 30 days you may republish on your own channels with a link back to the original." },
        { title: "No fee, real value", text: "Guest contributions are typically unpaid in think tanks. The value lies in platform, editing, translation, design and promotion, and for pieces with significant effort, an invitation to a CETL event or the hackathon." },
      ],
      giveTitle: "What you get",
      gives: [
        "A curated, independent platform without vendor interests",
        "A professionally designed PDF with a suggested citation",
        "Joint promotion through CETL's channels and your own",
        "Visibility in the DACH market and access to our academic and industry network",
        "A publication alongside researchers from the TU Wien environment",
      ],
      disclosureTitle: "Disclosure for technology vendors",
      disclosureText: "If guests work for an AI, cloud or technology vendor, a visible note appears at the top of the piece, following this pattern:",
      disclosureExample:
        "Disclosure: [Name] is [role] at [company]. This piece reflects the personal assessment of the authors. CETL has no business relationship with [company] that influences the content or conclusions of this piece.",
      formTitle: "Suggest a contribution",
      formLead: "Do you have a thesis that belongs in the CETL Think Tank? Sketch it in a few sentences. We will get back to you personally.",
      form: {
        name: "Name *", email: "Email *", org: "Organisation and role", idea: "Your thesis in a few sentences *",
        submit: "Send proposal", sending: "Sending…",
        success: "Thank you! Your proposal has arrived, we will get back to you personally.",
        error: "Something went wrong. Please try again or write directly to alinkalam@cetl.institute.",
      },
    },
  },
};
