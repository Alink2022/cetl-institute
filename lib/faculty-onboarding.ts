import type { Lang } from "@/lib/i18n";

type L = { de: string; en: string };
export interface FacultyGroup { title: L; items: string[] }

export const FACULTY_ROLES: { value: string; label: L }[] = [
  { value: "Lektor", label: { de: "Lektor:in (Trainings, Workshops, Programme)", en: "Lecturer (trainings, workshops, programmes)" } },
  { value: "Speaker", label: { de: "Speaker:in (Keynotes, Vorträge, Panels)", en: "Speaker (keynotes, talks, panels)" } },
  { value: "Beides", label: { de: "Beides", en: "Both" } },
];

export const SALUTATIONS: { value: string; label: L }[] = [
  { value: "", label: { de: "Keine Angabe", en: "Prefer not to say" } },
  { value: "Frau", label: { de: "Frau", en: "Ms" } },
  { value: "Herr", label: { de: "Herr", en: "Mr" } },
  { value: "Divers", label: { de: "Divers", en: "Non-binary" } },
];

export const LANGUAGES = ["Deutsch", "Englisch", "Französisch", "Spanisch", "Italienisch", "Portugiesisch", "Bosnisch/Kroatisch/Serbisch", "Türkisch", "Polnisch", "Tschechisch", "Ungarisch", "Rumänisch"];

export const EDUCATION: { value: string; label: L }[] = [
  { value: "HTL / Matura", label: { de: "HTL, AHS oder berufsbildende Matura", en: "Upper secondary / technical college (HTL, A-levels)" } },
  { value: "Bachelor", label: { de: "Bachelor (Universität oder Fachhochschule)", en: "Bachelor's degree" } },
  { value: "Master / Mag.", label: { de: "Master oder Magister:a", en: "Master's degree" } },
  { value: "Dipl.-Ing.", label: { de: "Diplom-Ingenieur:in (DI)", en: "Diploma engineer (DI)" } },
  { value: "MBA", label: { de: "MBA", en: "MBA" } },
  { value: "Dr. / PhD", label: { de: "Doktorat (Dr. oder PhD)", en: "Doctorate (Dr. or PhD)" } },
  { value: "Habilitation / Professur", label: { de: "Habilitation oder Professur", en: "Habilitation or professorship" } },
  { value: "Sonstige", label: { de: "Sonstige", en: "Other" } },
];

export const CERTIFICATIONS = [
  "Microsoft Certified Trainer", "PL-300 Power BI Data Analyst", "DP-600 Fabric Analytics Engineer", "AI-102 Azure AI Engineer", "AI-900 Azure AI Fundamentals",
  "Databricks Data Engineer", "Databricks Generative AI Engineer", "AWS Machine Learning Specialty", "Google Cloud Professional ML Engineer",
  "CDMP (DAMA)", "TOGAF", "PMP", "Scrum (PSM/CSM)", "ITIL",
];

export const EXPERTISE: FacultyGroup[] = [
  { title: { de: "KI und GenAI", en: "AI and GenAI" }, items: ["Generative AI und LLMs", "Prompt Engineering", "Agentic AI", "KI-Strategie", "AI Governance und EU AI Act", "Responsible AI", "AI Literacy und Kompetenzaufbau", "Computer Vision", "NLP"] },
  { title: { de: "Daten", en: "Data" }, items: ["Data Strategy", "Data Governance", "Data Engineering", "Data Science und Machine Learning", "Analytics und BI", "Data Literacy", "MLOps", "Datenqualität"] },
  { title: { de: "Advanced Data", en: "Advanced data" }, items: ["Lakehouse-Architekturen", "Streaming und Echtzeitdaten", "Data Products und Data Mesh", "RAG und Vektordatenbanken", "Knowledge Graphs", "Feature Stores", "Data Platforms in der Cloud"] },
  { title: { de: "Business Transformation", en: "Business transformation" }, items: ["Digitale Transformation", "Change Management", "Operating Models", "Prozessautomatisierung", "Innovation und Zukunftstrends", "Use-Case-Entwicklung", "Wertbeitrag und ROI von KI"] },
  { title: { de: "Executive und Rollen", en: "Executive and roles" }, items: ["C-Level und Board Briefings", "CDO und CAIO Rolle", "Führung und New Work", "HR und Learning & Development", "Betriebsrat und Mitbestimmung", "Recht und Compliance"] },
];

export const TOOLS: { title: L; items: string[] }[] = [
  { title: { de: "Daten und Plattformen", en: "Data and platforms" }, items: ["Databricks", "Microsoft Fabric", "Snowflake", "Azure Synapse", "BigQuery", "dbt", "Apache Spark", "Apache Kafka", "Apache Airflow", "SAP Datasphere"] },
  { title: { de: "KI und Copilots", en: "AI and copilots" }, items: ["Microsoft 365 Copilot", "Microsoft Copilot Studio", "GitHub Copilot", "Claude", "Claude Code", "OpenAI Codex", "ChatGPT Enterprise", "Gemini", "Cursor", "Azure AI Foundry", "Azure OpenAI", "AWS Bedrock", "Google Vertex AI", "Hugging Face", "LangChain", "LlamaIndex", "n8n"] },
  { title: { de: "BI und Automatisierung", en: "BI and automation" }, items: ["Power BI", "Power Automate", "Power Apps", "Tableau", "Qlik", "Looker", "Excel und Power Query"] },
  { title: { de: "Entwicklung und Betrieb", en: "Engineering and ops" }, items: ["Python", "SQL", "R", "Docker und Kubernetes", "Terraform", "MLflow", "Git und GitHub", "Azure DevOps"] },
];

export const DELIVERY: { value: string; label: L }[] = [
  { value: "Online", label: { de: "Online", en: "Online" } },
  { value: "Vor Ort Wien", label: { de: "Vor Ort in Wien", en: "On site in Vienna" } },
  { value: "Vor Ort Österreich", label: { de: "Vor Ort in Österreich", en: "On site in Austria" } },
  { value: "Vor Ort DACH", label: { de: "Vor Ort im DACH-Raum", en: "On site in DACH" } },
  { value: "Abendtermine", label: { de: "Abendtermine", en: "Evenings" } },
  { value: "Wochenende", label: { de: "Wochenende", en: "Weekends" } },
];

export const EXPERIENCE_YEARS = ["unter 3 Jahre", "3 bis 5 Jahre", "6 bis 10 Jahre", "11 bis 15 Jahre", "über 15 Jahre"];
export const TEACHING_EXPERIENCE: { value: string; label: L }[] = [
  { value: "Erste Erfahrungen", label: { de: "Erste Erfahrungen", en: "First experience" } },
  { value: "Regelmäßig", label: { de: "Regelmäßig neben dem Beruf", en: "Regularly alongside my job" } },
  { value: "Hauptberuflich", label: { de: "Hauptberuflich Trainer:in oder Dozent:in", en: "Full-time trainer or lecturer" } },
];

export const pick = (l: L, lang: Lang) => l[lang];

export const COPY = {
  de: {
    eyebrow: "CETL Faculty",
    title: "Gestalten Sie die CETL Faculty mit",
    lead: "Wir bauen KI- und Datenkompetenz in Organisationen auf, mit Praktiker:innen, Forscher:innen und Community-Expert:innen aus dem DACH-Raum. Zeigen Sie uns einmal, was Sie können, und wir planen Sie passend ein.",
    heroStats: [
      { v: "120+", l: "Lehrende im Pool" },
      { v: "15+", l: "Hochschulen im DACH-Raum" },
      { v: "8 Min.", l: "bis zum fertigen Profil" },
      { v: "1×", l: "ausfüllen, danach nur bei Änderungen" },
    ],
    steps: ["Über Sie", "Expertise", "Verfügbarkeit"],
    stepSub: [
      "Wer sind Sie, und wie erreichen wir Sie?",
      "Was können Sie, und womit arbeiten Sie?",
      "Wie arbeiten Sie am liebsten mit uns?",
    ],
    ui: {
      complete: "Profil vollständig", previewTitle: "So sehen wir Ihr Profil", previewName: "Ihr Name", previewRole: "Rolle und Unternehmen",
      expertise: "Expertise", tools: "Toolstack", languages: "Sprachen", empty: "Wird beim Ausfüllen sichtbar",
      search: "Tool suchen", selected: (n: number) => `${n} gewählt`,
      next1: "Wir prüfen Ihre Angaben sorgfältig.",
      next2: "Sobald ein passender Einsatz ansteht, melden wir uns persönlich bei Ihnen.",
      next3: "Wenn sich bei Ihnen etwas ändert, sprechen Sie uns jederzeit an. Die Kontaktdaten stehen im Impressum.",
      imprint: "Zum Impressum",
    },
    s1: {
      role: "Ich möchte mitwirken als", salutation: "Anrede", title: "Titel", first: "Vorname", last: "Nachname", company: "Unternehmen", position: "Rolle im Unternehmen",
      email: "E-Mail", phone: "Telefon", city: "Wohnort und Land", linkedin: "LinkedIn-Profil", website: "Website",
      languages: "Sprachen, in denen Sie unterrichten", languagesMore: "Weitere Sprachen", bio: "Kurzprofil", bioHint: "Zwei bis vier Sätze, die wir in Programmunterlagen verwenden dürfen.",
    },
    s2: {
      education: "Höchste abgeschlossene Ausbildung", school: "Bildungsstätte", field: "Studien- oder Ausbildungsrichtung",
      certs: "Zertifizierungen", certsHint: "Auswahl anklicken, die Liste lässt sich im Feld ergänzen.",
      expertise: "Fachexpertise", expertiseHint: "Klicken Sie Ihre Schwerpunkte an. Sie landen im Textfeld, dort können Sie weitere ergänzen.",
      tools: "Toolstack", toolsHint: "Alles, womit Sie praktisch arbeiten und unterrichten. Ergänzen Sie im Feld, was fehlt.",
      years: "Berufserfahrung", teaching: "Erfahrung als Lektor:in oder Speaker:in", topics: "Themenvorschläge oder Keynote-Titel", refs: "Referenzen, Auftritte, Veröffentlichungen",
    },
    s3: {
      delivery: "Einsatzformate",
      availability: "Verfügbarkeit und Präferenzen", availabilityHint: "Zum Beispiel Wochentage, Zeiträume, Vorlaufzeit, maximale Einsätze pro Monat.",
      conflict: "Kundenkonflikte", conflictHint: "Bei diesen Kunden oder Branchen möchten Sie nicht eingesetzt werden, etwa wegen Wettbewerb, Interessenkonflikt oder Vertraulichkeit.",
    },
    consent: "Ich willige ein, dass die CETL Institute GmbH meine Angaben zur Planung von Lehr- und Speaker-Einsätzen speichert und mich dazu kontaktiert. Ich kann das jederzeit widerrufen.",
    privacyTitle: "Datenschutzhinweis",
    privacy: [
      "Verantwortlich für die Verarbeitung ist die CETL Institute GmbH, Wipplinger Straße 4/2. OG, 1010 Wien. Die Kontaktdaten finden Sie im Impressum.",
      "Wir verarbeiten Ihre Angaben, um Sie für Lehr- und Speaker-Einsätze zu planen und Ihnen Anfragen zu senden. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) beziehungsweise die Anbahnung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO).",
      "Ihre Angaben sind nur einem kleinen Kreis berechtigter Personen bei uns zugänglich. Zur technischen Bereitstellung setzen wir sorgfältig ausgewählte IT-Dienstleister als Auftragsverarbeiter ein. An Kundenorganisationen geben wir Ihre Daten nur mit Ihrer vorherigen Zustimmung weiter.",
      "Wir speichern Ihre Angaben, solange Sie für Einsätze in Betracht kommen, längstens bis zum Widerruf Ihrer Einwilligung.",
      "Zum Schutz vor Missbrauch verwendet dieses Formular einen Spamschutz ohne Cookies.",
      "Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch zu, ebenso das Recht, Ihre Einwilligung jederzeit zu widerrufen. Zudem können Sie sich bei der österreichischen Datenschutzbehörde beschweren. Wenden Sie sich dazu an uns, die Kontaktdaten stehen im Impressum.",
    ],
    submit: "Angaben absenden", sending: "Wird gesendet …", required: "Pflichtfeld",
    errors: { fields: "Bitte ergänzen Sie die markierten Pflichtfelder.", email: "Bitte geben Sie eine gültige E-Mail-Adresse an.", consent: "Bitte stimmen Sie dem Datenschutzhinweis zu.", send: "Das Senden hat nicht geklappt. Bitte versuchen Sie es in einem Moment erneut.", captcha: "Der Spamschutz prüft noch. Bitte setzen Sie das Häkchen und senden Sie dann erneut." },
    thanks: { title: "Vielen Dank", text: "Ihre Angaben sind bei uns angekommen." },
    choose: "Bitte wählen",
  },
  en: {
    eyebrow: "CETL Faculty",
    title: "Help shape the CETL Faculty",
    lead: "We build AI and data capability in organisations with practitioners, researchers and community experts from the DACH region. Show us once what you can do, and we will plan you in where you fit best.",
    heroStats: [
      { v: "120+", l: "lecturers in the pool" },
      { v: "15+", l: "universities across DACH" },
      { v: "8 min", l: "to a finished profile" },
      { v: "1×", l: "fill in once, then only for changes" },
    ],
    steps: ["About you", "Expertise", "Availability"],
    stepSub: [
      "Who are you, and how do we reach you?",
      "What can you do, and what do you work with?",
      "How do you prefer to work with us?",
    ],
    ui: {
      complete: "Profile complete", previewTitle: "How we see your profile", previewName: "Your name", previewRole: "Role and company",
      expertise: "Expertise", tools: "Tool stack", languages: "Languages", empty: "Appears as you fill in",
      search: "Search tools", selected: (n: number) => `${n} selected`,
      next1: "We review your details carefully.",
      next2: "As soon as a suitable engagement comes up, we will get in touch personally.",
      next3: "If anything changes, talk to us at any time. The contact details are in the legal notice.",
      imprint: "Legal notice",
    },
    s1: {
      role: "I would like to contribute as", salutation: "Salutation", title: "Title", first: "First name", last: "Last name", company: "Company", position: "Role in the company",
      email: "Email", phone: "Phone", city: "City and country", linkedin: "LinkedIn profile", website: "Website",
      languages: "Languages you teach in", languagesMore: "Other languages", bio: "Short profile", bioHint: "Two to four sentences we may use in programme materials.",
    },
    s2: {
      education: "Highest completed education", school: "Institution", field: "Field of study or training",
      certs: "Certifications", certsHint: "Click what applies, and add more in the field.",
      expertise: "Expertise", expertiseHint: "Click your focus areas. They land in the text field, where you can add more.",
      tools: "Tool stack", toolsHint: "Everything you work and teach with. Add what is missing in the field.",
      years: "Professional experience", teaching: "Experience as lecturer or speaker", topics: "Topic ideas or keynote titles", refs: "References, talks, publications",
    },
    s3: {
      delivery: "Delivery formats",
      availability: "Availability and preferences", availabilityHint: "For example weekdays, periods, lead time, maximum engagements per month.",
      conflict: "Client conflicts", conflictHint: "Clients or industries where you do not want to be assigned, for example due to competition, conflict of interest or confidentiality.",
    },
    consent: "I consent to CETL Institute GmbH storing my details to plan teaching and speaking engagements and contacting me about them. I can withdraw this at any time.",
    privacyTitle: "Privacy notice",
    privacy: [
      "The controller is CETL Institute GmbH, Wipplinger Straße 4/2nd floor, 1010 Vienna. You will find the contact details in the legal notice.",
      "We process your details to plan you for teaching and speaking engagements and to send you requests. The legal basis is your consent (Art. 6(1)(a) GDPR) or the initiation of a contract (Art. 6(1)(b) GDPR).",
      "Your details are accessible only to a small circle of authorised people at our company. For technical operation we use carefully selected IT service providers as processors. We share your data with client organisations only with your prior consent.",
      "We store your details for as long as you are considered for engagements, and at most until you withdraw your consent.",
      "To protect against abuse, this form uses spam protection that does not use cookies.",
      "You have the rights of access, rectification, erasure, restriction of processing, data portability and objection, as well as the right to withdraw your consent at any time. You can also lodge a complaint with the Austrian data protection authority. Please contact us for this, the contact details are in the legal notice.",
    ],
    submit: "Send details", sending: "Sending …", required: "Required",
    errors: { fields: "Please complete the highlighted required fields.", email: "Please enter a valid email address.", consent: "Please accept the privacy notice.", send: "Sending did not work. Please try again in a moment.", captcha: "The spam protection is still checking. Please tick the box and send again." },
    thanks: { title: "Thank you", text: "We have received your details." },
    choose: "Please choose",
  },
} as const;
