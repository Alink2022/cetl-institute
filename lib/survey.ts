// CETL Enterprise AI Pulse: Fragenkatalog, Länderlogik und Texte der Umfrage.
// Single Source of Truth für die Seite (SurveyView), die API-Validierung und die Auswertung.
// Die Option-IDs werden gespeichert. Beschriftungen frei ändern, IDs nach dem Start stabil halten (oder version erhöhen).

export type L = { en: string; de: string };
export type Opt = { id: string; label: L; exclusive?: boolean };
export type Tip = L & { src: string };
export type Q = { id: string; type: "single" | "multi"; max?: number; optional?: boolean; tip?: Tip; text?: L; options: Opt[] };
type FreeText = { id: string; label: L; placeholder: L; max: number };
type SurveyDef = {
  id: string; version: string; imprint: string[];
  player: Q; levels: { id: string; title: L; questions: Q[] }[];
  boss: { id: string; title: L; question: Q; freeText: FreeText[] };
  card: { sector: { id: string; options: Opt[] }; size: { id: string; options: Opt[] } };
};

export const SURVEY = {
  id: 'cetl-pulse-at-2026',
  version: '1.0.0',

  imprint: ['CETL Institute GmbH', 'Wipplinger Straße 4/2. OG', '1010 Wien', 'Österreich'],

  // Player select: the one demographic every run records.
  player: {
    id: 'role',
    type: 'single',
    text: { en: 'Choose your role.', de: 'Wählen Sie Ihre Rolle.' },
    options: [
      { id: 'ceo', label: { en: 'CEO / board', de: 'CEO / Vorstand / Geschäftsführung' } },
      { id: 'cio', label: { en: 'CIO / CTO', de: 'CIO / CTO' } },
      { id: 'cdo', label: { en: 'CDO / CAIO / Head of Data & AI', de: 'CDO / CAIO / Head of Data & AI' } },
      { id: 'biz', label: { en: 'Business unit lead', de: 'Fachbereichsleitung' } },
      { id: 'pract', label: { en: 'IT, data or AI practitioner', de: 'IT-, Daten- oder KI-Praktiker:in' } },
      { id: 'cons', label: { en: 'Consultant / vendor', de: 'Berater:in / Anbieter' } },
      { id: 'other', label: { en: 'Other', de: 'Andere' } },
    ],
  },

  levels: [
    {
      id: 'reorg',
      title: { en: 'THE REORG', de: 'DIE REORG' },
      questions: [
        {
          id: 'org_chart',
          type: 'single',
          tip: {
            en: '30% of Austrian enterprises use AI, against 20% across the EU. Only 8% have scaled it company-wide.',
            de: '30 % der österreichischen Unternehmen nutzen KI, EU-weit sind es 20 %. Nur 8 % haben sie unternehmensweit skaliert.',
            src: 'Statistik Austria, IKT-Einsatz 2025 · EY, July 2026',
          },
          text: { en: 'Has AI changed your org chart yet?', de: 'Hat KI Ihr Organigramm schon verändert?' },
          options: [
            { id: 'reorg_done', label: { en: 'Yes. We reorganised around AI: new units, roles or reporting lines', de: 'Ja. Wir haben uns um KI herum neu organisiert: neue Einheiten, Rollen oder Berichtslinien' } },
            { id: 'roles_only', label: { en: 'Partly. New roles, same structure', de: 'Teilweise. Neue Rollen, gleiche Struktur' } },
            { id: 'planned', label: { en: 'Planned for 2027', de: 'Für 2027 geplant' } },
            { id: 'discussing', label: { en: 'Under discussion, nothing decided', de: 'In Diskussion, nichts entschieden' } },
            { id: 'no', label: { en: 'No, and no plans', de: 'Nein, und nichts geplant' } },
          ],
        },
        {
          id: 'ai_owner',
          type: 'single',
          tip: {
            en: 'Fewer than a third of Austrian companies already using AI have a clear AI strategy.',
            de: 'Weniger als ein Drittel der österreichischen Unternehmen, die KI bereits nutzen, hat eine klare KI-Strategie.',
            src: 'EY Austria, July 2026',
          },
          text: { en: 'Who actually owns AI in your company?', de: 'Wer verantwortet KI in Ihrem Unternehmen tatsächlich?' },
          options: [
            { id: 'cio', label: { en: 'CIO / CTO (IT)', de: 'CIO / CTO (IT)' } },
            { id: 'cdo', label: { en: 'A dedicated CDO, CAIO or Head of AI', de: 'Ein:e eigene:r CDO, CAIO oder Head of AI' } },
            { id: 'biz', label: { en: 'The business units, each for themselves', de: 'Die Fachbereiche, jeder für sich' } },
            { id: 'ceo', label: { en: 'The CEO or the board directly', de: 'CEO oder Vorstand direkt' } },
            { id: 'committee', label: { en: 'A cross-functional committee', de: 'Ein bereichsübergreifendes Gremium' } },
            { id: 'nobody', label: { en: 'Nobody, really', de: 'Eigentlich niemand' } },
          ],
        },
      ],
    },
    {
      id: 'factory',
      title: { en: 'THE SOFTWARE FACTORY', de: 'DIE SOFTWARE-FABRIK' },
      questions: [
        {
          id: 'biz_builds',
          type: 'single',
          tip: {
            en: 'Talent is the weakest AI dimension in Austrian companies: 2.7 out of 5. Two thirds report a systematic talent bottleneck.',
            de: 'Talent ist die schwächste KI-Dimension österreichischer Unternehmen: 2,7 von 5. Zwei Drittel melden einen systematischen Talente-Engpass.',
            src: 'McKinsey, State of AI in Austria 2026',
          },
          text: { en: 'Are business units outside IT building their own software with AI tools?', de: 'Bauen Fachbereiche außerhalb der IT mit KI-Tools eigene Software?' },
          options: [
            { id: 'production', label: { en: 'Yes, and some of it runs in production', de: 'Ja, und einiges davon läuft produktiv' } },
            { id: 'prototypes', label: { en: 'Yes, prototypes and internal tools only', de: 'Ja, aber nur Prototypen und interne Tools' } },
            { id: 'unofficial', label: { en: 'It happens, but it is not allowed', de: 'Es passiert, ist aber nicht erlaubt' } },
            { id: 'no', label: { en: 'No', de: 'Nein' } },
            { id: 'unknown', label: { en: 'I don’t know', de: 'Weiß ich nicht' } },
          ],
        },
        {
          id: 'dev_demand',
          type: 'single',
          tip: {
            en: 'About 60% of Austrian companies struggle to run AI models in an industrialised way.',
            de: 'Rund 60 % der österreichischen Unternehmen tun sich schwer, KI-Modelle industrialisiert zu betreiben.',
            src: 'McKinsey, State of AI in Austria 2026',
          },
          text: { en: 'What has AI done to your need for developers?', de: 'Was hat KI mit Ihrem Bedarf an Entwickler:innen gemacht?' },
          options: [
            { id: 'more', label: { en: 'We need more than before', de: 'Wir brauchen mehr als vorher' } },
            { id: 'same_diff', label: { en: 'Same number, different skills', de: 'Gleich viele, andere Skills' } },
            { id: 'fewer', label: { en: 'Fewer', de: 'Weniger' } },
            { id: 'no_juniors', label: { en: 'We stopped hiring juniors', de: 'Wir stellen keine Juniors mehr ein' } },
            { id: 'early', label: { en: 'Too early to tell', de: 'Zu früh, um das zu sagen' } },
          ],
        },
      ],
    },
    {
      id: 'intern_extern',
      title: { en: 'INTERN VS EXTERN', de: 'INTERN VS. EXTERN' },
      questions: [
        {
          id: 'fde',
          type: 'single',
          tip: {
            en: 'Forward deployed engineers: 78% of vendor FDE teams expect to at least double in 2027, in a survey of 1,500 FDEs.',
            de: 'Forward Deployed Engineers: 78 % der FDE-Teams bei Anbietern erwarten für 2027 mindestens eine Verdoppelung, laut einer Umfrage unter 1.500 FDEs.',
            src: 'Perspective AI, State of FDE 2026',
          },
          text: { en: 'Would you let a vendor’s engineers work embedded inside your teams (forward deployed)?', de: 'Würden Sie Engineers eines Anbieters eingebettet in Ihren Teams arbeiten lassen (forward deployed)?' },
          options: [
            { id: 'already', label: { en: 'We already do', de: 'Machen wir bereits' } },
            { id: 'if_transfer', label: { en: 'Yes, if they transfer knowledge to our people', de: 'Ja, wenn sie Wissen an unsere Leute weitergeben' } },
            { id: 'pilot', label: { en: 'Only for a time-boxed pilot', de: 'Nur für einen zeitlich begrenzten Piloten' } },
            { id: 'no_security', label: { en: 'No: security, IP or compliance', de: 'Nein: Sicherheit, IP oder Compliance' } },
            { id: 'first_heard', label: { en: 'First time I hear the term', de: 'Höre den Begriff zum ersten Mal' } },
          ],
        },
        {
          id: 'capability_2027',
          type: 'single',
          tip: {
            en: 'Among Austrian companies that considered AI but did not adopt it, the top reason is a lack of internal expertise (15%), ahead of data protection (11%) and legal uncertainty (11%).',
            de: 'Bei österreichischen Unternehmen, die KI erwogen, aber nicht eingeführt haben, ist fehlende interne Expertise der häufigste Grund (15 %), vor Datenschutz (11 %) und Rechtsunsicherheit (11 %).',
            src: 'Statistik Austria, IKT-Einsatz 2025',
          },
          text: { en: 'Where will your AI capability live in 2027?', de: 'Wo wird Ihre KI-Kompetenz 2027 sitzen?' },
          options: [
            { id: 'inhouse', label: { en: 'Mostly in-house, own team', de: 'Überwiegend intern, eigenes Team' } },
            { id: 'external', label: { en: 'Mostly external: consultants and vendors', de: 'Überwiegend extern: Berater und Anbieter' } },
            { id: 'hybrid', label: { en: 'Hybrid: core in-house, external for peaks', de: 'Hybrid: Kern intern, extern für Spitzen' } },
            { id: 'embedded', label: { en: 'Inside the products we buy (Copilot, SAP, Salesforce and the like)', de: 'In den Produkten, die wir kaufen (Copilot, SAP, Salesforce und Co.)' } },
            { id: 'undecided', label: { en: 'Undecided', de: 'Unentschieden' } },
          ],
        },
      ],
    },
    {
      id: 'fears',
      title: { en: 'FEARS & RISKS', de: 'ÄNGSTE & RISIKEN' },
      questions: [
        {
          id: 'risks',
          type: 'multi',
          max: 3,
          tip: {
            en: '51% of Austrians expect AI to replace more jobs than it creates. 46% think others will benefit more from it than they will.',
            de: '51 % der Österreicher:innen erwarten, dass KI mehr Jobs ersetzt als schafft. 46 % glauben, dass andere mehr davon profitieren als sie selbst.',
            src: 'Ipsos, March 2026, n=800',
          },
          text: { en: 'Which AI risks are real for you, but rarely said out loud?', de: 'Welche KI-Risiken sind für Sie real, werden aber selten ausgesprochen?' },
          options: [
            { id: 'headcount', label: { en: 'Headcount cuts driven by AI', de: 'Personalabbau durch KI' } },
            { id: 'leak', label: { en: 'Confidential data leaking through AI tools', de: 'Vertrauliche Daten, die über KI-Tools abfließen' } },
            { id: 'error', label: { en: 'An AI error reaching customers or production', de: 'Ein KI-Fehler, der Kunden oder die Produktion erreicht' } },
            { id: 'lockin', label: { en: 'Dependence on a single US vendor', de: 'Abhängigkeit von einem einzelnen US-Anbieter' } },
            { id: 'aiact', label: { en: 'EU AI Act compliance gaps', de: 'Lücken bei der EU-AI-Act-Compliance' } },
            { id: 'cost', label: { en: 'Costs nobody can forecast', de: 'Kosten, die niemand prognostizieren kann' } },
            { id: 'skills', label: { en: 'Our people are not ready', de: 'Unsere Leute sind nicht bereit' } },
            { id: 'competitors', label: { en: 'Competitors moving faster', de: 'Wettbewerber, die schneller sind' } },
            { id: 'hype', label: { en: 'That the whole thing is overrated', de: 'Dass das Ganze überschätzt wird' } },
            { id: 'none', exclusive: true, label: { en: 'None of these', de: 'Keines davon' } },
          ],
        },
        {
          id: 'incident',
          type: 'single',
          tip: {
            en: '7 in 10 Austrian companies cannot say how many AI tokens they consume per month. Under agentic workflows the same task can consume up to 30 times more tokens depending on the execution path.',
            de: '7 von 10 österreichischen Unternehmen können nicht sagen, wie viele KI-Tokens sie pro Monat verbrauchen. Bei agentischen Workflows kann dieselbe Aufgabe je nach Ausführungspfad bis zu 30-mal mehr Tokens verbrauchen.',
            src: 'McKinsey, State of AI in Austria 2026',
          },
          text: { en: 'Has an AI incident already happened in your company that the board never heard about?', de: 'Gab es in Ihrem Unternehmen schon einen KI-Vorfall, von dem der Vorstand nie erfahren hat?' },
          options: [
            { id: 'quiet', label: { en: 'Yes, handled quietly', de: 'Ja, still geregelt' } },
            { id: 'escalated', label: { en: 'Yes, and it was escalated properly', de: 'Ja, und er wurde ordentlich eskaliert' } },
            { id: 'not_known', label: { en: 'Not that I know of', de: 'Nicht, dass ich wüsste' } },
            { id: 'no_answer', label: { en: 'Prefer not to say', de: 'Keine Angabe' } },
          ],
        },
      ],
    },
    {
      id: 'platforms',
      title: { en: 'DATA PLATFORMS VS SOVEREIGN AI', de: 'DATENPLATTFORMEN VS. SOUVERÄNE KI' },
      questions: [
        {
          id: 'data_home',
          type: 'single',
          tip: {
            en: 'Around 90% of Europe’s digital infrastructure is controlled by non-European firms. Forrester expects no European enterprise to fully leave US hyperscalers in 2026.',
            de: 'Rund 90 % der digitalen Infrastruktur Europas kontrollieren nicht-europäische Firmen. Forrester erwartet, dass 2026 kein europäisches Unternehmen US-Hyperscaler vollständig verlässt.',
            src: 'EuroStack via The Register, Dec 2025 · Forrester',
          },
          text: { en: 'Where does your data actually live for AI work?', de: 'Wo liegen Ihre Daten für KI-Arbeit tatsächlich?' },
          options: [
            { id: 'cloud_platform', label: { en: 'A cloud data platform: Snowflake, Databricks, Microsoft Fabric, BigQuery', de: 'Auf einer Cloud-Datenplattform: Snowflake, Databricks, Microsoft Fabric, BigQuery' } },
            { id: 'hyperscaler', label: { en: 'Native hyperscaler services (Azure, AWS, Google Cloud)', de: 'In nativen Hyperscaler-Diensten (Azure, AWS, Google Cloud)' } },
            { id: 'onprem', label: { en: 'On premises, our own data centre', de: 'On-Premises, im eigenen Rechenzentrum' } },
            { id: 'eu_cloud', label: { en: 'A European or sovereign cloud provider', de: 'Bei einem europäischen oder souveränen Cloud-Anbieter' } },
            { id: 'mixed', label: { en: 'Mixed, no clear centre of gravity', de: 'Gemischt, ohne klaren Schwerpunkt' } },
            { id: 'files', label: { en: 'Mostly in spreadsheets and file shares', de: 'Vor allem in Tabellen und Dateiablagen' } },
          ],
        },
        {
          id: 'sovereign',
          type: 'single',
          tip: {
            en: 'Austria’s Federal Ministry for Economy, Energy and Tourism moved 1,200 employees to Nextcloud in four months, after a three-month proof of concept.',
            de: 'Das österreichische Wirtschaftsministerium hat 1.200 Mitarbeitende in vier Monaten auf Nextcloud umgestellt, nach einem dreimonatigen Proof of Concept.',
            src: 'The Register, Dec 2025',
          },
          text: { en: 'Sovereign AI, meaning EU-hosted and EU-controlled models and infrastructure: what is your real position?', de: 'Souveräne KI, also in der EU gehostete und kontrollierte Modelle und Infrastruktur: Wie ist Ihre tatsächliche Position?' },
          options: [
            { id: 'premium_10', label: { en: 'We would pay a premium of up to 10% for it', de: 'Wir würden dafür bis zu 10 % Aufpreis zahlen' } },
            { id: 'premium_20', label: { en: 'We would pay 20% or more', de: 'Wir würden 20 % oder mehr zahlen' } },
            { id: 'mandated', label: { en: 'It is required: regulation or board mandate', de: 'Es ist Pflicht: Regulierung oder Vorstandsvorgabe' } },
            { id: 'capability_wins', label: { en: 'Nice to have, but US hyperscalers win on capability', de: 'Wäre schön, aber US-Hyperscaler gewinnen bei den Fähigkeiten' } },
            { id: 'not_agenda', label: { en: 'Not on our agenda', de: 'Nicht auf unserer Agenda' } },
          ],
        },
      ],
    },
  ],

  boss: {
    id: 'boss',
    title: { en: 'THE ELEPHANT', de: 'DER ELEFANT' },
    question: {
      id: 'upside',
      type: 'single',
      tip: {
        en: 'About half of Austrian companies lack a reliable method to quantify AI’s economic potential before launch, and 70% find measuring success a key challenge afterwards.',
        de: 'Rund die Hälfte der österreichischen Unternehmen hat keine verlässliche Methode, das wirtschaftliche Potenzial von KI vor dem Start zu beziffern, und 70 % finden die Erfolgsmessung danach eine zentrale Herausforderung.',
        src: 'McKinsey, State of AI in Austria 2026',
      },
      text: { en: 'Where is your biggest AI upside in 2027?', de: 'Wo liegt Ihr größtes KI-Potenzial 2027?' },
      options: [
        { id: 'revenue', label: { en: 'New revenue: products or services we could not offer before', de: 'Neuer Umsatz: Produkte oder Services, die vorher nicht möglich waren' } },
        { id: 'cost', label: { en: 'Cost: doing the same with fewer people', de: 'Kosten: dasselbe mit weniger Leuten' } },
        { id: 'speed', label: { en: 'Speed: faster decisions and delivery', de: 'Tempo: schnellere Entscheidungen und Umsetzung' } },
        { id: 'talent', label: { en: 'Talent: attracting and keeping people', de: 'Talente: Menschen gewinnen und halten' } },
        { id: 'unknown', label: { en: 'We don’t know yet', de: 'Wissen wir noch nicht' } },
      ],
    },
    freeText: [
      {
        id: 'elephant',
        label: { en: 'The elephant in the room at your company is…', de: 'Der Elefant im Raum in Ihrem Unternehmen ist…' },
        placeholder: { en: 'Type it. Nobody will see your name.', de: 'Schreiben Sie es. Niemand sieht Ihren Namen.' },
        max: 600,
      },
      {
        id: 'unasked',
        label: { en: 'The question you want asked in the next pulse, but nobody dares to:', de: 'Die Frage, die der nächste Pulse stellen sollte, die aber niemand zu stellen wagt:' },
        placeholder: { en: 'We will ask it. Promise.', de: 'Wir stellen sie. Versprochen.' },
        max: 400,
      },
    ],
  },

  // Optional player card at the end. Stored like answers, never required.
  card: {
    sector: {
      id: 'sector',
      options: [
        { id: 'finance', label: { en: 'Banking & insurance', de: 'Banken & Versicherungen' } },
        { id: 'industry', label: { en: 'Industry & manufacturing', de: 'Industrie & Produktion' } },
        { id: 'energy', label: { en: 'Energy & utilities', de: 'Energie & Versorger' } },
        { id: 'public', label: { en: 'Public sector', de: 'Öffentlicher Sektor' } },
        { id: 'retail', label: { en: 'Retail & consumer', de: 'Handel & Konsumgüter' } },
        { id: 'tech', label: { en: 'Tech & telecom', de: 'Tech & Telekom' } },
        { id: 'health', label: { en: 'Healthcare & pharma', de: 'Gesundheit & Pharma' } },
        { id: 'other', label: { en: 'Other', de: 'Andere' } },
      ],
    },
    size: {
      id: 'size',
      options: [
        { id: 'lt250', label: { en: 'under 250 employees', de: 'unter 250 Mitarbeitende' } },
        { id: '250_1000', label: { en: '250 to 1,000', de: '250 bis 1.000' } },
        { id: '1000_5000', label: { en: '1,000 to 5,000', de: '1.000 bis 5.000' } },
        { id: 'gt5000', label: { en: 'over 5,000', de: 'über 5.000' } },
      ],
    },
  },
} satisfies SurveyDef;

export const GEO: { home: string; codes: string[]; names: Record<string, string>; tzPrefix: Record<string, string>; tz: Record<string, string> } = {
  home: 'AT',
  codes: ('AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ ' +
    'CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR ' +
    'GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP ' +
    'KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT ' +
    'MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW ' +
    'SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG ' +
    'UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW').split(' '),
  // English fallback names for the likeliest respondents, used only when Intl.DisplayNames is missing.
  names: { AT: 'Austria', DE: 'Germany', CH: 'Switzerland', LI: 'Liechtenstein', IT: 'Italy', FR: 'France', GB: 'United Kingdom', US: 'United States', NL: 'Netherlands', BE: 'Belgium', CZ: 'Czechia', SK: 'Slovakia', HU: 'Hungary', SI: 'Slovenia', HR: 'Croatia', PL: 'Poland', ES: 'Spain', PT: 'Portugal', SE: 'Sweden', DK: 'Denmark', NO: 'Norway', FI: 'Finland', IE: 'Ireland', RO: 'Romania', BG: 'Bulgaria', GR: 'Greece', TR: 'Türkiye', RS: 'Serbia', UA: 'Ukraine', CA: 'Canada', AU: 'Australia', IN: 'India', SG: 'Singapore', AE: 'United Arab Emirates', JP: 'Japan', CN: 'China', BR: 'Brazil' },
  tzPrefix: { 'Australia/': 'AU', 'America/Argentina/': 'AR', 'America/Indiana/': 'US', 'America/Kentucky/': 'US', 'America/North_Dakota/': 'US', 'Antarctica/': 'AQ' },
  tz: {
    'Europe/Vienna': 'AT', 'Europe/Berlin': 'DE', 'Europe/Busingen': 'DE', 'Europe/Zurich': 'CH', 'Europe/Vaduz': 'LI', 'Europe/Paris': 'FR',
    'Europe/London': 'GB', 'Europe/Dublin': 'IE', 'Europe/Lisbon': 'PT', 'Europe/Madrid': 'ES', 'Europe/Rome': 'IT', 'Europe/Vatican': 'VA',
    'Europe/San_Marino': 'SM', 'Europe/Amsterdam': 'NL', 'Europe/Brussels': 'BE', 'Europe/Luxembourg': 'LU', 'Europe/Copenhagen': 'DK',
    'Europe/Oslo': 'NO', 'Europe/Stockholm': 'SE', 'Europe/Helsinki': 'FI', 'Europe/Tallinn': 'EE', 'Europe/Riga': 'LV', 'Europe/Vilnius': 'LT',
    'Europe/Warsaw': 'PL', 'Europe/Prague': 'CZ', 'Europe/Bratislava': 'SK', 'Europe/Budapest': 'HU', 'Europe/Ljubljana': 'SI', 'Europe/Zagreb': 'HR',
    'Europe/Belgrade': 'RS', 'Europe/Sarajevo': 'BA', 'Europe/Skopje': 'MK', 'Europe/Podgorica': 'ME', 'Europe/Tirane': 'AL', 'Europe/Athens': 'GR',
    'Europe/Sofia': 'BG', 'Europe/Bucharest': 'RO', 'Europe/Chisinau': 'MD', 'Europe/Kyiv': 'UA', 'Europe/Kiev': 'UA', 'Europe/Simferopol': 'UA',
    'Europe/Minsk': 'BY', 'Europe/Moscow': 'RU', 'Europe/Kaliningrad': 'RU', 'Europe/Samara': 'RU', 'Europe/Istanbul': 'TR', 'Asia/Istanbul': 'TR',
    'Europe/Nicosia': 'CY', 'Asia/Nicosia': 'CY', 'Europe/Malta': 'MT', 'Europe/Andorra': 'AD', 'Europe/Monaco': 'MC', 'Europe/Gibraltar': 'GI',
    'Europe/Jersey': 'JE', 'Europe/Guernsey': 'GG', 'Europe/Isle_of_Man': 'IM', 'Atlantic/Reykjavik': 'IS', 'Atlantic/Faroe': 'FO',
    'Atlantic/Canary': 'ES', 'Atlantic/Madeira': 'PT', 'Atlantic/Azores': 'PT',
    'America/New_York': 'US', 'America/Detroit': 'US', 'America/Chicago': 'US', 'America/Denver': 'US', 'America/Phoenix': 'US',
    'America/Los_Angeles': 'US', 'America/Anchorage': 'US', 'America/Juneau': 'US', 'America/Boise': 'US', 'Pacific/Honolulu': 'US',
    'America/Toronto': 'CA', 'America/Montreal': 'CA', 'America/Vancouver': 'CA', 'America/Edmonton': 'CA', 'America/Winnipeg': 'CA',
    'America/Halifax': 'CA', 'America/St_Johns': 'CA', 'America/Regina': 'CA', 'America/Mexico_City': 'MX', 'America/Cancun': 'MX',
    'America/Monterrey': 'MX', 'America/Tijuana': 'MX', 'America/Sao_Paulo': 'BR', 'America/Manaus': 'BR', 'America/Fortaleza': 'BR',
    'America/Recife': 'BR', 'America/Bahia': 'BR', 'America/Buenos_Aires': 'AR', 'America/Santiago': 'CL', 'America/Bogota': 'CO',
    'America/Lima': 'PE', 'America/Caracas': 'VE', 'America/Montevideo': 'UY', 'America/Asuncion': 'PY', 'America/La_Paz': 'BO',
    'America/Guayaquil': 'EC', 'America/Panama': 'PA', 'America/Costa_Rica': 'CR', 'America/Guatemala': 'GT', 'America/Havana': 'CU',
    'America/Santo_Domingo': 'DO', 'America/Puerto_Rico': 'PR', 'America/Jamaica': 'JM',
    'Asia/Tokyo': 'JP', 'Asia/Seoul': 'KR', 'Asia/Shanghai': 'CN', 'Asia/Chongqing': 'CN', 'Asia/Urumqi': 'CN', 'Asia/Hong_Kong': 'HK',
    'Asia/Macau': 'MO', 'Asia/Taipei': 'TW', 'Asia/Singapore': 'SG', 'Asia/Kuala_Lumpur': 'MY', 'Asia/Bangkok': 'TH', 'Asia/Ho_Chi_Minh': 'VN',
    'Asia/Saigon': 'VN', 'Asia/Jakarta': 'ID', 'Asia/Makassar': 'ID', 'Asia/Manila': 'PH', 'Asia/Kolkata': 'IN', 'Asia/Calcutta': 'IN',
    'Asia/Karachi': 'PK', 'Asia/Dhaka': 'BD', 'Asia/Colombo': 'LK', 'Asia/Kathmandu': 'NP', 'Asia/Dubai': 'AE', 'Asia/Riyadh': 'SA',
    'Asia/Qatar': 'QA', 'Asia/Bahrain': 'BH', 'Asia/Kuwait': 'KW', 'Asia/Muscat': 'OM', 'Asia/Jerusalem': 'IL', 'Asia/Tel_Aviv': 'IL',
    'Asia/Amman': 'JO', 'Asia/Beirut': 'LB', 'Asia/Baghdad': 'IQ', 'Asia/Tehran': 'IR', 'Asia/Baku': 'AZ', 'Asia/Tbilisi': 'GE',
    'Asia/Yerevan': 'AM', 'Asia/Almaty': 'KZ', 'Asia/Tashkent': 'UZ', 'Asia/Bishkek': 'KG', 'Asia/Ulaanbaatar': 'MN', 'Asia/Yangon': 'MM',
    'Asia/Phnom_Penh': 'KH', 'Asia/Vientiane': 'LA', 'Asia/Kabul': 'AF', 'Asia/Yekaterinburg': 'RU', 'Asia/Novosibirsk': 'RU',
    'Asia/Vladivostok': 'RU', 'Asia/Krasnoyarsk': 'RU',
    'Africa/Cairo': 'EG', 'Africa/Johannesburg': 'ZA', 'Africa/Lagos': 'NG', 'Africa/Nairobi': 'KE', 'Africa/Casablanca': 'MA',
    'Africa/Algiers': 'DZ', 'Africa/Tunis': 'TN', 'Africa/Accra': 'GH', 'Africa/Addis_Ababa': 'ET', 'Africa/Dar_es_Salaam': 'TZ',
    'Africa/Kampala': 'UG', 'Africa/Kinshasa': 'CD', 'Africa/Luanda': 'AO', 'Africa/Maputo': 'MZ', 'Africa/Windhoek': 'NA',
    'Africa/Tripoli': 'LY', 'Africa/Khartoum': 'SD', 'Africa/Dakar': 'SN', 'Africa/Abidjan': 'CI',
    'Pacific/Auckland': 'NZ', 'Pacific/Fiji': 'FJ', 'Pacific/Guam': 'GU', 'Pacific/Port_Moresby': 'PG',
  },
};

// Alle Auswahlfragen in Spielreihenfolge. Auf der Seite, im Server-Validator und in der Auswertung identisch.
export function allQuestions(survey: SurveyDef = SURVEY): Q[] {
  const out: Q[] = [survey.player];
  for (const level of survey.levels) out.push(...level.questions);
  out.push(survey.boss.question);
  out.push({ id: survey.card.sector.id, type: "single", optional: true, options: survey.card.sector.options });
  out.push({ id: survey.card.size.id, type: "single", optional: true, options: survey.card.size.options });
  return out;
}
