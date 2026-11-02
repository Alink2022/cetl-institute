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

export const BILLING: { value: string; label: L }[] = [
  { value: "Stundensatz", label: { de: "Stundensatz", en: "Hourly rate" } },
  { value: "Halbtagessatz", label: { de: "Halbtagessatz", en: "Half-day rate" } },
  { value: "Tagessatz", label: { de: "Tagessatz", en: "Day rate" } },
  { value: "Pauschalhonorar", label: { de: "Pauschalhonorar pro Veranstaltung", en: "Flat fee per event" } },
  { value: "Honorar + Spesen", label: { de: "Honorar plus Spesen", en: "Fee plus expenses" } },
  { value: "Nach Vereinbarung", label: { de: "Nach Vereinbarung", en: "By arrangement" } },
  { value: "Pro-bono", label: { de: "Pro bono", en: "Pro bono" } },
];

export const BILLING_VIA: { value: string; label: L }[] = [
  { value: "Einzelunternehmen", label: { de: "Eigenes Einzelunternehmen oder Freiberuf", en: "Own sole proprietorship or freelance" } },
  { value: "Eigene Gesellschaft", label: { de: "Eigene Gesellschaft (zum Beispiel GmbH)", en: "Own company (for example GmbH)" } },
  { value: "Arbeitgeber", label: { de: "Über meinen Arbeitgeber", en: "Via my employer" } },
  { value: "Agentur", label: { de: "Über eine Agentur oder Vermittlung", en: "Via an agency or broker" } },
  { value: "Offen", label: { de: "Noch offen", en: "Not decided yet" } },
];

export const SIDE_JOB: { value: string; label: L }[] = [
  { value: "Nicht erforderlich", label: { de: "Nicht erforderlich", en: "Not required" } },
  { value: "Liegt vor", label: { de: "Freigabe liegt vor", en: "Approval available" } },
  { value: "In Klärung", label: { de: "In Klärung", en: "Being clarified" } },
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
    title: "Werden Sie Teil der CETL Faculty",
    lead: "Wir stellen KI- und Datenkompetenz in Organisationen mit einem Pool aus Praktiker:innen, Forscher:innen und Community-Expert:innen auf. Teilen Sie Ihre Angaben einmal selbst, damit wir Sie passend einsetzen und uns bei Anfragen schnell melden können. Das dauert etwa 8 Minuten.",
    steps: ["Stammdaten", "Ausbildung und Fachexpertise", "Honorar und Verfügbarkeit"],
    s1: {
      role: "Ich möchte mitwirken als", salutation: "Anrede", title: "Titel", first: "Vorname", last: "Nachname", company: "Unternehmen", position: "Rolle im Unternehmen",
      email: "E-Mail", phone: "Telefon", city: "Wohnort und Land", linkedin: "LinkedIn-Profil", website: "Website", birth: "Geburtsdatum", birthHint: "freiwillig",
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
      billing: "Gewünschte Abrechnungsart", rate: "Honorarvorstellung in Euro, netto", rateHint: "Das ist Ihre Vorstellung. Verträge und Konditionen klären wir danach persönlich.",
      via: "Abrechnung über", uid: "UID-Nummer", sideJob: "Freigabe des Arbeitgebers für Nebentätigkeit", delivery: "Einsatzformate",
      availability: "Verfügbarkeit und Präferenzen", availabilityHint: "Zum Beispiel Wochentage, Zeiträume, Vorlaufzeit, maximale Einsätze pro Monat.",
      conflict: "Kundenkonflikte", conflictHint: "Bei diesen Kunden oder Branchen möchten Sie nicht eingesetzt werden, etwa wegen Wettbewerb, Interessenkonflikt oder Vertraulichkeit.",
    },
    consent: "Ich willige ein, dass das CETL Institute meine Angaben zur Planung von Lehr- und Speaker-Einsätzen speichert und mich dazu kontaktiert. Ich kann das jederzeit widerrufen.",
    privacyTitle: "Datenschutzhinweis",
    privacy: [
      "Verantwortlich ist die CETL Institute GmbH, Wipplinger Straße 4/2. OG, 1010 Wien, alinkalam@cetl.institute.",
      "Wir verarbeiten Ihre Angaben, um Sie für Lehr- und Speaker-Einsätze zu planen und Ihnen Anfragen zu senden. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) beziehungsweise die Anbahnung eines Vertrags.",
      "Die Daten liegen in einem Google-Workspace-Konto der CETL Institute GmbH und werden nicht an Dritte verkauft. Wir geben sie nur an Kundenorganisationen weiter, wenn Sie vorab zugestimmt haben.",
      "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit und Widerruf, sowie auf Beschwerde bei der Datenschutzbehörde. Schreiben Sie uns dazu an alinkalam@cetl.institute.",
    ],
    submit: "Angaben absenden", sending: "Wird gesendet …", required: "Pflichtfeld",
    errors: { fields: "Bitte füllen Sie alle Pflichtfelder aus.", email: "Bitte geben Sie eine gültige E-Mail-Adresse an.", consent: "Bitte stimmen Sie dem Datenschutzhinweis zu.", send: "Das Senden hat nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie an alinkalam@cetl.institute." },
    thanks: { title: "Vielen Dank", text: "Ihre Angaben sind bei uns angekommen. Wir melden uns persönlich, sobald es einen passenden Einsatz gibt. Wenn sich etwas ändert, schreiben Sie uns einfach an alinkalam@cetl.institute." },
    choose: "Bitte wählen",
  },
  en: {
    eyebrow: "CETL Faculty",
    title: "Join the CETL Faculty",
    lead: "We build AI and data capability in organisations with a pool of practitioners, researchers and community experts. Share your details once, so we can match you well and reach out quickly when requests come in. It takes about 8 minutes.",
    steps: ["Personal details", "Education and expertise", "Fees and availability"],
    s1: {
      role: "I would like to contribute as", salutation: "Salutation", title: "Title", first: "First name", last: "Last name", company: "Company", position: "Role in the company",
      email: "Email", phone: "Phone", city: "City and country", linkedin: "LinkedIn profile", website: "Website", birth: "Date of birth", birthHint: "optional",
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
      billing: "Preferred billing type", rate: "Expected fee in euros, net", rateHint: "This is your expectation. We agree contracts and terms with you personally afterwards.",
      via: "Invoicing via", uid: "VAT ID", sideJob: "Employer approval for side activity", delivery: "Delivery formats",
      availability: "Availability and preferences", availabilityHint: "For example weekdays, periods, lead time, maximum engagements per month.",
      conflict: "Client conflicts", conflictHint: "Clients or industries where you do not want to be assigned, for example due to competition, conflict of interest or confidentiality.",
    },
    consent: "I consent to CETL Institute storing my details to plan teaching and speaking engagements and contacting me about them. I can withdraw this at any time.",
    privacyTitle: "Privacy notice",
    privacy: [
      "The controller is CETL Institute GmbH, Wipplinger Straße 4/2nd floor, 1010 Vienna, alinkalam@cetl.institute.",
      "We process your details to plan you for teaching and speaking engagements and to send you requests. The legal basis is your consent (Art. 6(1)(a) GDPR) or the initiation of a contract.",
      "The data is stored in a Google Workspace account of CETL Institute GmbH and is not sold to third parties. We share it with client organisations only if you agreed beforehand.",
      "You have the right of access, rectification, erasure, restriction, portability and withdrawal, and to lodge a complaint with the data protection authority. Write to alinkalam@cetl.institute.",
    ],
    submit: "Send details", sending: "Sending …", required: "Required",
    errors: { fields: "Please fill in all required fields.", email: "Please enter a valid email address.", consent: "Please accept the privacy notice.", send: "Sending did not work. Please try again or write to alinkalam@cetl.institute." },
    thanks: { title: "Thank you", text: "We have received your details and will get in touch personally when a suitable engagement comes up. If anything changes, simply write to alinkalam@cetl.institute." },
    choose: "Please choose",
  },
} as const;
