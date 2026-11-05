// Datenschutztexte (DE/EN) nach Art. 13 und 14 DSGVO. Eine Quelle für die Datenschutzerklärung (/datenschutz)
// und die Hinweise direkt an den Formularen. Der Verantwortliche wird einmal genannt, sonst gilt "wir".

export type Lang = "de" | "en";
export type Sec = { h: string; p: readonly string[] };
export type FormKind = "survey" | "faculty" | "contact";

export const PRIVACY_STAND = { de: "Stand: November 2026", en: "Version: November 2026" };

const T = {
  de: {
    controller: {
      h: "Verantwortlicher",
      p: ["Verantwortlicher im Sinne des Art. 4 Z 7 DSGVO ist die CETL Institute GmbH, Wipplinger Straße 4/2. OG, 1010 Wien, Österreich (FN 688297 b, Handelsgericht Wien). Die Kontaktdaten sind im Impressum angegeben."],
    },
    recipients: {
      h: "Empfänger und Auftragsverarbeiter",
      p: ["Personenbezogene Daten werden nur an Empfänger weitergegeben, soweit dies für den jeweiligen Zweck erforderlich ist. Zur technischen Bereitstellung setzen wir sorgfältig ausgewählte Dienstleister als Auftragsverarbeiter im Sinne des Art. 28 DSGVO ein (Hosting, Datenbank- und Cloud-Speicherdienste, Bürodienste, E-Mail-Versand und E-Mail-Empfang). Mit diesen bestehen die erforderlichen Auftragsverarbeitungsverträge. Eine Weitergabe an sonstige Dritte erfolgt nicht, es sei denn, wir sind gesetzlich dazu verpflichtet."],
    },
    third: {
      h: "Übermittlung in Drittländer",
      p: ["Die Verarbeitung durch Auftragsverarbeiter kann auch in Drittländern, insbesondere in den Vereinigten Staaten, erfolgen. Die Übermittlung stützt sich auf einen Angemessenheitsbeschluss der Europäischen Kommission (Art. 45 DSGVO) oder auf Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) samt ergänzender Schutzmaßnahmen."],
    },
    rights: {
      h: "Ihre Rechte",
      p: [
        "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie das Recht, der Verarbeitung zu widersprechen (Art. 21).",
        "Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt. Zur Ausübung Ihrer Rechte wenden Sie sich an den Verantwortlichen, die Kontaktdaten stehen im Impressum.",
      ],
    },
    complaint: {
      h: "Beschwerderecht",
      p: ["Sind Sie der Ansicht, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie Beschwerde bei der Aufsichtsbehörde erheben: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, www.dsb.gv.at."],
    },
    automated: {
      h: "Automatisierte Entscheidungsfindung",
      p: ["Eine ausschließlich automatisierte Entscheidungsfindung einschließlich Profiling im Sinne des Art. 22 DSGVO findet nicht statt."],
    },
    spam: "Zum Schutz vor automatisierten Missbrauchsversuchen wird eine Spamschutz-Prüfung ohne Cookies und ohne Weitergabe an Dritte durchgeführt (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse an der Sicherheit und Integrität des Angebots).",
    local: "Ihre Sprach-, gegebenenfalls Länder- und Toneinstellung wird im lokalen Speicher Ihres Endgeräts abgelegt. Das ist für die Funktion des Angebots technisch erforderlich (§ 165 Abs. 3 TKG 2021) und wird nicht an uns oder Dritte übermittelt.",
    survey: {
      purpose: {
        h: "Zweck und Rechtsgrundlage",
        p: [
          "Die Daten werden verarbeitet, um die Umfrage durchzuführen, statistisch auszuwerten und die Ergebnisse ausschließlich in aggregierter Form zu veröffentlichen. Verarbeitet werden Ihre Antworten, Ihre Rolle, optional Branche, Unternehmensgröße und Freitext, das Land (abgeleitet aus Zeitzone, Spracheinstellung oder Netzwerk-Standort beziehungsweise Ihrer Auswahl), die Sprache sowie Zeitpunkt und Dauer der Teilnahme. Ihre IP-Adresse wird nicht gespeichert.",
          "Rechtsgrundlage ist Ihre Einwilligung durch das Absenden des Formulars (Art. 6 Abs. 1 lit. a DSGVO). Eine E-Mail-Adresse wird nur auf Ihren Wunsch erfasst und ausschließlich verwendet, um Ihnen die Ergebnisse zu übermitteln (Art. 6 Abs. 1 lit. a DSGVO).",
        ],
      },
      storage: {
        h: "Speicherdauer",
        p: ["Die Antworten werden bis zum Abschluss der Auswertung gespeichert, längstens jedoch 24 Monate nach der Teilnahme, und danach gelöscht oder anonymisiert. E-Mail-Adressen werden bis zum Widerruf gespeichert und spätestens zwölf Monate nach Übermittlung der Ergebnisse gelöscht."],
      },
      provision: {
        h: "Freiwilligkeit",
        p: ["Die Teilnahme ist freiwillig. Es besteht weder eine gesetzliche noch eine vertragliche Pflicht zur Bereitstellung der Daten. Angaben, die nicht als Pflichtangabe gekennzeichnet sind, können Sie weglassen."],
      },
    },
    faculty: {
      purpose: {
        h: "Zweck und Rechtsgrundlage",
        p: [
          "Die Angaben (Kontakt-, Berufs-, Qualifikations- und Verfügbarkeitsdaten) werden verarbeitet, um Lehr- und Speaker-Einsätze zu planen, geeignete Personen auszuwählen und die Kontaktaufnahme sowie die Anbahnung eines Vertrags durchzuführen.",
          "Rechtsgrundlagen sind Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und die Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO).",
        ],
      },
      recipients: {
        h: "Weitergabe an Kundenorganisationen",
        p: ["Ihre Daten werden an Kundenorganisationen nur mit Ihrer vorherigen Zustimmung weitergegeben."],
      },
      storage: {
        h: "Speicherdauer",
        p: ["Ihre Angaben werden gespeichert, solange Sie für Einsätze in Betracht kommen, längstens bis zum Widerruf Ihrer Einwilligung. Kommt es zu einem Einsatz, gelten für vertrags- und abrechnungsrelevante Daten die gesetzlichen Aufbewahrungsfristen, insbesondere § 132 BAO (sieben Jahre)."],
      },
      provision: {
        h: "Freiwilligkeit",
        p: ["Die Bereitstellung der Daten ist freiwillig und weder gesetzlich noch vertraglich vorgeschrieben. Ohne die als Pflichtfeld gekennzeichneten Angaben kann das Formular nicht abgeschickt und eine Planung nicht vorgenommen werden."],
      },
    },
    contact: {
      purpose: {
        h: "Zweck und Rechtsgrundlage",
        p: ["Ihre Angaben werden verarbeitet, um Ihre Anfrage zu beantworten und das Gespräch vorzubereiten. Rechtsgrundlage sind vorvertragliche Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO) sowie unser berechtigtes Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO)."],
      },
      storage: {
        h: "Speicherdauer",
        p: ["Anfragen werden gelöscht, sobald der Zweck entfallen ist und keine gesetzlichen Aufbewahrungs- oder Verjährungsfristen entgegenstehen."],
      },
      provision: {
        h: "Freiwilligkeit",
        p: ["Die Bereitstellung der Daten ist freiwillig. Ohne die als Pflichtfeld gekennzeichneten Angaben kann die Anfrage nicht bearbeitet werden."],
      },
    },
  },
  en: {
    controller: {
      h: "Controller",
      p: ["The controller within the meaning of Art. 4(7) GDPR is CETL Institute GmbH, Wipplinger Straße 4/2nd floor, 1010 Vienna, Austria (company register no. FN 688297 b, Vienna Commercial Court). The contact details are stated in the legal notice."],
    },
    recipients: {
      h: "Recipients and processors",
      p: ["Personal data is passed on to recipients only to the extent necessary for the respective purpose. For technical provision we use carefully selected service providers as processors within the meaning of Art. 28 GDPR (hosting, database and cloud storage services, office services, sending and receiving email). The required data processing agreements are in place. Data is not passed on to other third parties unless we are legally obliged to do so."],
    },
    third: {
      h: "Transfers to third countries",
      p: ["Processing by processors may also take place in third countries, in particular the United States. Transfers rely on an adequacy decision of the European Commission (Art. 45 GDPR) or on standard contractual clauses (Art. 46(2)(c) GDPR) together with supplementary safeguards."],
    },
    rights: {
      h: "Your rights",
      p: [
        "You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and the right to object to processing (Art. 21).",
        "You may withdraw any consent at any time with effect for the future (Art. 7(3) GDPR). Processing carried out before the withdrawal remains lawful. To exercise your rights, please contact the controller, whose contact details are in the legal notice.",
      ],
    },
    complaint: {
      h: "Right to lodge a complaint",
      p: ["If you believe that the processing of your data infringes data protection law, you may lodge a complaint with the supervisory authority: Austrian Data Protection Authority (Datenschutzbehörde), Barichgasse 40–42, 1030 Vienna, www.dsb.gv.at."],
    },
    automated: {
      h: "Automated decision-making",
      p: ["There is no solely automated decision-making, including profiling, within the meaning of Art. 22 GDPR."],
    },
    spam: "To protect against automated abuse, a spam-protection check is carried out without cookies and without passing data on to third parties (Art. 6(1)(f) GDPR, legitimate interest in the security and integrity of the service).",
    local: "Your language, where applicable country and sound settings are stored in your device’s local storage. This is technically necessary for the service to work (§ 165(3) TKG 2021) and is not transmitted to us or to third parties.",
    survey: {
      purpose: {
        h: "Purpose and legal basis",
        p: [
          "The data is processed to carry out the survey, to evaluate it statistically and to publish the results in aggregated form only. We process your answers, your role, optionally sector, company size and free text, the country (derived from time zone, language setting or network location, or your selection), the language, and the time and duration of participation. Your IP address is not stored.",
          "The legal basis is your consent by submitting the form (Art. 6(1)(a) GDPR). An email address is collected only at your request and used exclusively to send you the results (Art. 6(1)(a) GDPR).",
        ],
      },
      storage: {
        h: "Storage period",
        p: ["Answers are stored until the evaluation is complete, at most 24 months after participation, and then deleted or anonymised. Email addresses are stored until withdrawal and deleted at the latest twelve months after the results have been sent."],
      },
      provision: {
        h: "Voluntary participation",
        p: ["Participation is voluntary. There is no statutory or contractual obligation to provide the data. You may leave out any information that is not marked as mandatory."],
      },
    },
    faculty: {
      purpose: {
        h: "Purpose and legal basis",
        p: [
          "The details (contact, professional, qualification and availability data) are processed to plan teaching and speaking engagements, to select suitable persons, and to make contact and initiate a contract.",
          "The legal bases are your consent (Art. 6(1)(a) GDPR) and the implementation of pre-contractual measures at your request (Art. 6(1)(b) GDPR).",
        ],
      },
      recipients: {
        h: "Disclosure to client organisations",
        p: ["Your data is disclosed to client organisations only with your prior consent."],
      },
      storage: {
        h: "Storage period",
        p: ["Your details are stored for as long as you are considered for engagements, at most until you withdraw your consent. If an engagement takes place, statutory retention periods apply to contract and billing data, in particular § 132 BAO (seven years)."],
      },
      provision: {
        h: "Voluntary provision",
        p: ["Providing the data is voluntary and not required by law or contract. Without the details marked as mandatory the form cannot be submitted and planning cannot take place."],
      },
    },
    contact: {
      purpose: {
        h: "Purpose and legal basis",
        p: ["Your details are processed to answer your enquiry and to prepare the conversation. The legal bases are pre-contractual measures at your request (Art. 6(1)(b) GDPR) and our legitimate interest in answering enquiries (Art. 6(1)(f) GDPR)."],
      },
      storage: {
        h: "Storage period",
        p: ["Enquiries are deleted once the purpose has ceased and no statutory retention or limitation periods stand in the way."],
      },
      provision: {
        h: "Voluntary provision",
        p: ["Providing the data is voluntary. Without the details marked as mandatory the enquiry cannot be processed."],
      },
    },
  },
} as const;

/** Der Hinweis direkt am Formular: vollständig nach Art. 13 DSGVO, in der Reihenfolge der Informationspflichten. */
export function formNotice(kind: FormKind, lang: Lang): Sec[] {
  const t = T[lang];
  const k = t[kind];
  const out: Sec[] = [t.controller, k.purpose];
  const recipients = kind === "faculty"
    ? { h: t.recipients.h, p: [...t.recipients.p, ...t.faculty.recipients.p] }
    : t.recipients;
  out.push(recipients, t.third, k.storage, k.provision, t.rights, t.complaint, t.automated);
  if (kind !== "contact") out.push({ h: lang === "de" ? "Spamschutz und lokale Speicherung" : "Spam protection and local storage", p: [t.spam, t.local] });
  return out.map((s) => ({ h: s.h, p: [...s.p] }));
}

/** Die vollständige Datenschutzerklärung der Website. */
export function fullNotice(lang: Lang): Sec[] {
  const t = T[lang];
  const de = lang === "de";
  const own = (kind: FormKind): Sec => ({
    h: kind === "survey" ? (de ? "Umfrage „Enterprise AI Pulse“" : "Survey “Enterprise AI Pulse”") : kind === "faculty" ? (de ? "Faculty-Onboarding (Lehrende und Speaker)" : "Faculty onboarding (lecturers and speakers)") : (de ? "Kontaktaufnahme" : "Contact"),
    p: [...t[kind].purpose.p, ...(kind === "faculty" ? t.faculty.recipients.p : []), ...t[kind].storage.p, ...t[kind].provision.p],
  });
  return [
    { h: t.controller.h, p: [...t.controller.p] },
    {
      h: de ? "Allgemeines zur Datenverarbeitung" : "General information on data processing",
      p: de
        ? ["Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, ihrer Inhalte und Funktionen sowie für die unten beschriebenen Zwecke erforderlich ist. Die Verarbeitung erfolgt auf Grundlage einer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), zur Durchführung vorvertraglicher Maßnahmen oder eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO) oder zur Wahrung berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO)."]
        : ["We process personal data only to the extent necessary to provide this website, its content and functions, and for the purposes described below. Processing is based on consent (Art. 6(1)(a) GDPR), on the implementation of pre-contractual measures or a contract (Art. 6(1)(b) GDPR), or on legitimate interests (Art. 6(1)(f) GDPR)."],
    },
    {
      h: de ? "Hosting und Server-Protokolldaten" : "Hosting and server log data",
      p: de
        ? ["Beim Aufruf der Website werden technisch erforderliche Daten verarbeitet: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer sowie Browser- und Geräteinformationen. Zweck ist die Auslieferung der Website, die Gewährleistung von Stabilität und Sicherheit sowie die Abwehr von Angriffen. Rechtsgrundlage ist unser berechtigtes Interesse am sicheren und effizienten Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nur so lange gespeichert, wie es für den sicheren Betrieb erforderlich ist."]
        : ["When the website is accessed, technically necessary data is processed: IP address, date and time, page requested, referrer, and browser and device information. The purpose is to deliver the website, to ensure stability and security, and to defend against attacks. The legal basis is our legitimate interest in secure and efficient operation (Art. 6(1)(f) GDPR). The data is stored only as long as necessary for secure operation."],
    },
    {
      h: de ? "Reichweitenmessung und Leistungsanalyse" : "Audience measurement and performance analysis",
      p: de
        ? ["Wir messen Seitenaufrufe und Ladezeiten mit einem datenschutzfreundlichen Dienst. Es werden keine Cookies gesetzt und keine Profile über mehrere Websites hinweg gebildet. Verarbeitet werden verkürzte beziehungsweise pseudonymisierte Nutzungs- und Leistungsdaten (aufgerufene Seite, Browser, Gerätetyp, ungefähres Herkunftsland). Rechtsgrundlage ist unser berechtigtes Interesse an Stabilität, Leistung und Verbesserung des Angebots (Art. 6 Abs. 1 lit. f DSGVO). Sie können der Verarbeitung jederzeit widersprechen."]
        : ["We measure page views and load times with a privacy-friendly service. No cookies are set and no profiles are formed across websites. Shortened or pseudonymised usage and performance data is processed (page requested, browser, device type, approximate country of origin). The legal basis is our legitimate interest in stability, performance and improvement of the service (Art. 6(1)(f) GDPR). You may object to the processing at any time."],
    },
    own("contact"),
    own("faculty"),
    own("survey"),
    { h: de ? "Spamschutz" : "Spam protection", p: [t.spam] },
    {
      h: de ? "Cookies und lokale Speicherung" : "Cookies and local storage",
      p: de
        ? ["Wir setzen keine Cookies ein, die einer Einwilligung bedürfen. " + t.local]
        : ["We do not use cookies that require consent. " + t.local],
    },
    { h: t.recipients.h, p: [...t.recipients.p] },
    { h: t.third.h, p: [...t.third.p] },
    {
      h: de ? "Datensicherheit" : "Data security",
      p: de
        ? ["Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten (Art. 32 DSGVO), insbesondere verschlüsselte Übertragung (TLS), Zugriffsbeschränkungen auf berechtigte Personen, Schutz vor automatisierten Zugriffen und regelmäßige Aktualisierung der eingesetzten Software."]
        : ["We take appropriate technical and organisational measures to protect your data (Art. 32 GDPR), in particular encrypted transmission (TLS), access restrictions to authorised persons, protection against automated access and regular updating of the software used."],
    },
    { h: t.rights.h, p: [...t.rights.p] },
    { h: t.complaint.h, p: [...t.complaint.p] },
    { h: t.automated.h, p: [...t.automated.p] },
    {
      h: de ? "Externe Links" : "External links",
      p: de
        ? ["Diese Website enthält Links zu externen Websites Dritter. Für deren Datenverarbeitung sind ausschließlich deren Betreiber verantwortlich."]
        : ["This website contains links to external third-party websites. Their operators are solely responsible for their data processing."],
    },
    {
      h: de ? "Änderungen" : "Changes",
      p: de
        ? ["Wir passen diese Datenschutzerklärung an, wenn sich die Verarbeitung oder die Rechtslage ändert. Es gilt die jeweils hier veröffentlichte Fassung."]
        : ["We update this privacy notice when the processing or the legal situation changes. The version published here applies."],
    },
  ];
}
