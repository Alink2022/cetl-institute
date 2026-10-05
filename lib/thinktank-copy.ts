import type { AudienceId, Lang } from "./thinktank";

// Oberflächentexte der Think-Tank-Seiten (Landing, Artikel, Gastbeiträge).
// Deutsch ist die Leitsprache, die englische Fassung folgt 1:1.

export interface TTCopy {
  nav: { think: string };
  landing: {
    meta: { title: string; description: string };
    hero: { eyebrow: string; h1: string; sub: string; ctaRead: string; ctaServices: string; stats: { value: string; label: string }[] };
    purpose: {
      eyebrow: string; title: string; lead: string;
      hero: { tag: string; title: string; claim: string; points: { title: string; text: string }[]; formula: string[]; result: string };
      compareLabel: string;
      others: { label: string; title: string; items: string[] }[];
      mobileTabs: string[];
    };
    audiences: { title: string; cards: { id: AudienceId; title: string; questions: string }[]; link: string };
    pubs: {
      eyebrow: string; title: string; lead: string;
      fieldsLabel: string; linksLabel: string; count: (n: number) => string;
      filterFormat: string; filterAudience: string;
      all: string; international: string; empty: string; reset: string; resetField: string;
      formatsSummary: string; guestBadge: (name: string) => string;
    };
    guests: { eyebrow: string; title: string; text: string; chips: string[]; cta: string; ctaPropose: string; ghostTitle: string; ghostText: string };
    services: { eyebrow: string; title: string };
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
        description: "Der CETL Think Tank veröffentlicht unabhängige Analysen zu KI, Daten und Tech Leadership und unterstützt Organisationen mit Executive Briefings, Foresight Labs und laufendem Sparring.",
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
      purpose: {
        eyebrow: "Wozu ein Think Tank?",
        title: "Keine Trendberichte. Positionen, die Entscheidungen tragen.",
        lead: "KI-Initiativen scheitern selten an der Technologie, sondern an strukturellen Fragen zu Governance, Souveränität, Kompetenz und Urteilsvermögen. Der CETL Think Tank beantwortet sie mit klarer Haltung, herstellerneutral und aus der Praxis, damit Führung, HR und Learning & Development besser entscheiden.",
        hero: {
          tag: "Der CETL Think Tank",
          title: "Positionen statt Trends",
          claim: "Wir analysieren die strukturellen Fragen, an denen KI-Initiativen scheitern oder gelingen, und beziehen Position.",
          points: [
            { title: "Eine klare These", text: "Jede Publikation bezieht Position." },
            { title: "Belege offengelegt", text: "Quellen, Daten, anonymisierte Praxisbeobachtungen." },
            { title: "Konsequenzen für Entscheider", text: "Jeder Beitrag endet mit konkreten Folgen." },
            { title: "Namentliche Autorenschaft", text: "Echte Namen mit Rolle, auch bei Gästen." },
            { title: "Redaktionell geprüft", text: "Gegengelesen im Redaktionsboard." },
            { title: "Herstellerneutral", text: "Keine Reseller- oder Plattformpartnerschaften." },
          ],
          formula: ["Forschung", "Industriepraxis", "Programmerfahrung"],
          result: "Analysen, die Entscheidungen vorbereiten",
        },
        compareLabel: "Zum Vergleich: gängige Formate",
        others: [
          { label: "Trendbericht", title: "Überblick ohne Haltung", items: ["Fasst Trends zusammen, ohne Position", "Quellenlage bleibt vage", "Endet ohne Konsequenzen", "Austauschbare Autorenschaft"] },
          { label: "Anbieter-Whitepaper", title: "Haltung mit Produktinteresse", items: ["Argumentation folgt dem Produkt", "Selektive Evidenz", "Kaufempfehlung statt Entscheidungshilfe", "Interessenkonflikt bleibt unsichtbar"] },
        ],
        mobileTabs: ["Think Tank", "Trendbericht", "Whitepaper"],
      },
      audiences: {
        title: "Für wen wir denken",
        cards: [
          { id: "board", title: "Geschäftsführung und Vorstand", questions: "Wo schafft KI in unserer Organisation tatsächlich Wert, und welche Entscheidungen zu Governance, Architektur und Investitionen stehen jetzt an?" },
          { id: "hr", title: "HR und People", questions: "Wie verändern sich Rollen und Anforderungsprofile, welche Kompetenzen brauchen wir morgen, und wie erfüllen wir die Pflicht zur KI-Kompetenz nach dem EU AI Act?" },
          { id: "ld", title: "Learning & Development", questions: "Wie bauen wir KI-Kompetenz wirksam und messbar auf, und wie verändert KI das Lernen in der Organisation selbst?" },
        ],
        link: "Passende Publikationen",
      },
      pubs: {
        eyebrow: "Publikationen",
        title: "Aus der Forschung in die Praxis",
        lead: "Fünf Forschungsfelder, jedes mit Anschluss an unser Angebot. Wählen Sie ein Feld oder filtern Sie nach Format und Zielgruppe. Neueste zuerst.",
        fieldsLabel: "Forschungsfeld wählen",
        linksLabel: "Verbunden mit",
        count: (n) => (n === 0 ? "In Vorbereitung" : n === 1 ? "1 Publikation" : `${n} Publikationen`),
        filterFormat: "Format", filterAudience: "Zielgruppe",
        all: "Alle", international: "Internationale Co-Autorenschaft",
        empty: "Zu dieser Auswahl gibt es noch keine Publikation. Weitere Beiträge sind in Vorbereitung.",
        reset: "Filter zurücksetzen", resetField: "Alle Felder",
        formatsSummary: "Unsere Formate im Überblick",
        guestBadge: (name) => `Co-Autorenschaft mit ${name}`,
      },
      guests: {
        eyebrow: "Internationale Stimmen",
        title: "Gemeinsam mit führenden Köpfen publizieren",
        text: "Wir laden führende Expertinnen und Experten aus Forschung und Praxis ein, gemeinsam mit unserem Team zu publizieren. Die ersten Beiträge sind in Vorbereitung.",
        chips: ["Co-Autorenschaft", "Englisch und Deutsch", "Offenlegung bei Anbietern"],
        cta: "Mehr zu den Gastbeiträgen",
        ctaPropose: "Beitrag vorschlagen",
        ghostTitle: "Die erste Stimme folgt",
        ghostText: "Co-Autorenschaft mit dem CETL-Team, veröffentlicht auf Englisch und Deutsch.",
      },
      services: { eyebrow: "Think Tank Services", title: "Das Denken in Ihre Organisation holen" },
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
        description: "The CETL Think Tank publishes independent analysis on AI, data and tech leadership and supports organisations with executive briefings, foresight labs and ongoing sparring.",
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
      purpose: {
        eyebrow: "Why a think tank?",
        title: "No trend reports. Positions that carry decisions.",
        lead: "AI initiatives rarely fail on the technology. They fail on structural questions of governance, sovereignty, capability and judgment. The CETL Think Tank answers them with a clear position, vendor-neutral and drawn from practice, so that leadership, HR and Learning & Development decide better.",
        hero: {
          tag: "The CETL Think Tank",
          title: "Positions, not trends",
          claim: "We analyse the structural questions on which AI initiatives fail or succeed, and we take a position.",
          points: [
            { title: "A clear thesis", text: "Every publication takes a position." },
            { title: "Evidence disclosed", text: "Sources, data, anonymised practice observations." },
            { title: "Implications for decision-makers", text: "Every piece ends in concrete consequences." },
            { title: "Named authors", text: "Real names with roles, guests included." },
            { title: "Editorially reviewed", text: "Read by the editorial board." },
            { title: "Vendor-neutral", text: "No reseller or platform partnerships." },
          ],
          formula: ["Research", "Industry practice", "Programme experience"],
          result: "Analysis that prepares decisions",
        },
        compareLabel: "For comparison: common formats",
        others: [
          { label: "Trend report", title: "Overview without a stance", items: ["Summarises trends, takes no position", "Evidence stays vague", "Ends without consequences", "Interchangeable authorship"] },
          { label: "Vendor whitepaper", title: "A stance with a product interest", items: ["The argument follows the product", "Selective evidence", "A purchase recommendation, not decision support", "The conflict of interest stays invisible"] },
        ],
        mobileTabs: ["Think Tank", "Trend report", "Whitepaper"],
      },
      audiences: {
        title: "Who we think for",
        cards: [
          { id: "board", title: "Executive management and boards", questions: "Where does AI actually create value in our organisation, and which decisions on governance, architecture and investment are due now?" },
          { id: "hr", title: "HR and People", questions: "How are roles and requirement profiles changing, which skills do we need tomorrow, and how do we meet the AI literacy obligation under the EU AI Act?" },
          { id: "ld", title: "Learning & Development", questions: "How do we build AI literacy effectively and measurably, and how does AI change learning inside the organisation itself?" },
        ],
        link: "Matching publications",
      },
      pubs: {
        eyebrow: "Publications",
        title: "From research into practice",
        lead: "Five research fields, each connected to our services. Pick a field or filter by format and audience. Newest first.",
        fieldsLabel: "Choose a research field",
        linksLabel: "Connected to",
        count: (n) => (n === 0 ? "In preparation" : n === 1 ? "1 publication" : `${n} publications`),
        filterFormat: "Format", filterAudience: "Audience",
        all: "All", international: "International co-authorship",
        empty: "There is no publication for this selection yet. More pieces are in preparation.",
        reset: "Reset filters", resetField: "All fields",
        formatsSummary: "Our formats at a glance",
        guestBadge: (name) => `Co-authored with ${name}`,
      },
      guests: {
        eyebrow: "International voices",
        title: "Publishing together with leading minds",
        text: "We are inviting leading experts from research and practice to publish together with our team. The first pieces are in preparation.",
        chips: ["Co-authorship", "English and German", "Vendor disclosure"],
        cta: "More about guest contributions",
        ctaPropose: "Suggest a contribution",
        ghostTitle: "The first voice is coming",
        ghostText: "Co-authored with the CETL team, published in English and German.",
      },
      services: { eyebrow: "Think Tank Services", title: "Bring the thinking into your organisation" },
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
