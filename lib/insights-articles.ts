import type { Article } from "./content-types";

// Volltexte der Insights-Publikationen. Inline-Markup: **fett** wird im Renderer zu <strong>.
// Slugs sind locale-neutral und identisch für DE/EN.

export const ARTICLE_SLUGS = [
  "poc-to-production-gap",
  "vendor-lock-in-sovereignty",
  "ai-judgment-gap",
  "eu-ai-act-governance",
  "embedded-engineering",
] as const;

const de: Article[] = [
  {
    slug: "poc-to-production-gap",
    category: "Research Brief",
    tag: "AI Governance",
    title: "Die PoC-to-Production-Lücke: Warum 85% der AI-Projekte nicht skalieren",
    teaser:
      "Eine strukturelle Analyse der häufigsten Scheiternsmuster bei großflächigen KI-Initiativen — und was Governance-Reife damit zu tun hat.",
    readTime: "8 Min. Lesezeit",
    date: "Juli 2026",
    blocks: [
      {
        type: "p",
        text: "Die Zahlen sind seit Jahren konsistent — und sie werden nicht besser. Unabhängige Analysen von McKinsey, Gartner und MIT Sloan Management Review kommen zum gleichen Befund: Der überwiegende Teil aller KI-Initiativen in großen Organisationen erreicht nie den produktiven Enterprise-Betrieb. Die Piloten funktionieren. Die Demos überzeugen. Der Vorstand ist begeistert. Und dann passiert — nichts.",
      },
      {
        type: "p",
        text: "Wir nennen dieses Phänomen den **PoC-Friedhof**: eine wachsende Sammlung technisch erfolgreicher Proof-of-Concepts, die nie den Sprung in skalierte Wertschöpfung schaffen. Wer heute durch die Innovationsabteilungen zentraleuropäischer Banken und Industrieunternehmen geht, findet ihn fast überall.",
      },
      { type: "h2", text: "Das Scheitern beginnt nicht beim Modell" },
      {
        type: "p",
        text: "Die intuitive Erklärung — „die Technologie war noch nicht reif“ — ist fast immer falsch. Die Modelle funktionieren. Was fehlt, ist etwas anderes: die strukturelle Kompatibilität zwischen dem Piloten und der Organisation, die ihn betreiben soll.",
      },
      {
        type: "p",
        text: "Ein Proof-of-Concept lebt in einer geschützten Umgebung: kuratierte Daten, keine Legacy-Integration, keine regulatorische Prüfung, kein 24/7-Betrieb, keine Haftungsfrage. Der Enterprise-Betrieb kennt keine dieser Freiheiten. Der Übergang vom einen zum anderen ist kein Deployment-Schritt — er ist ein organisatorischer Strukturwandel. Vier Muster tauchen in unseren Architektur-Reviews immer wieder auf:",
      },
      { type: "h3", text: "1. Datenreife wurde als gelöst angenommen" },
      {
        type: "p",
        text: "Der Pilot lief auf einem handverlesenen Datensatz. Die Produktion braucht Datenpipelines, die über Systemgrenzen, Datenqualitätsschwankungen und historisch gewachsene Silos hinweg stabil liefern. In den meisten Organisationen existiert diese Infrastruktur nicht — und niemand hat sie ins Projektbudget eingepreist.",
      },
      { type: "h3", text: "2. Governance kam nach der Technik" },
      {
        type: "p",
        text: "Modellrisiko-Management, Nachvollziehbarkeit von Entscheidungen, Eskalationspfade bei Fehlverhalten, Zuständigkeit für laufende Validierung: All das lässt sich nachträglich nur teuer und unvollständig einbauen. Organisationen, die Governance als nachgelagertes Compliance-Thema behandeln, bauen strukturell nicht skalierbare Systeme — unabhängig davon, wie gut das Modell ist.",
      },
      { type: "h3", text: "3. Der Pilot hatte einen Champion, der Betrieb hat keinen Eigentümer" },
      {
        type: "p",
        text: "PoCs werden von motivierten Einzelpersonen getragen. Produktion braucht institutionalisierte Verantwortung: ein Operating Model, das definiert, wer das System betreibt, wer es weiterentwickelt, wer bei Drift eingreift und wer die Kosten trägt. Fehlt dieses Modell, stirbt das Projekt in dem Moment, in dem der Champion die Abteilung wechselt.",
      },
      { type: "h3", text: "4. Die Architektur-Entscheidung fiel unter Informationsasymmetrie" },
      {
        type: "p",
        text: "Plattform- und Vendor-Entscheidungen wurden auf Basis von Hersteller-Narrativen getroffen, nicht auf Basis unabhängiger technischer Bewertung. Was im Piloten wie eine Abkürzung aussah, erweist sich in der Skalierung als Lock-in mit strukturellen Folgekosten.",
      },
      { type: "h2", text: "Governance-Reife ist der eigentliche Prädiktor" },
      {
        type: "p",
        text: "Der gemeinsame Nenner dieser Muster: Keines davon ist ein Technologieproblem. Es sind Reifegradlücken — in Datenarchitektur, in Governance-Strukturen, in Operating Models und in der Urteilskompetenz der Entscheidungsebene.",
      },
      {
        type: "quote",
        text: "Die Frage „Welches Modell setzen wir ein?“ ist nachrangig gegenüber der Frage „Kann unsere Organisation ein solches System tragen?“",
      },
      {
        type: "p",
        text: "Organisationen, die die zweite Frage ehrlich beantworten, bevor sie die erste stellen, skalieren. Die anderen bauen Friedhöfe. Für regulierte Branchen — Banken, kritische Infrastruktur, öffentlicher Sektor — verschärft sich diese Logik zusätzlich: Der EU AI Act macht Governance-Reife von der Empfehlung zur Pflicht. Wer heute Systeme ohne dokumentierte Risikoklassifizierung, Datenqualitätsnachweise und menschliche Aufsichtsstrukturen baut, produziert Altlasten mit Ansage.",
      },
      { type: "h2", text: "Was funktionierende Organisationen anders machen" },
      {
        type: "olist",
        items: [
          "**Sie beginnen mit einem Architektur- und Reifegrad-Review, nicht mit einem Use Case.** Erst wenn klar ist, was die Organisation tragen kann, wird priorisiert, was sie bauen soll.",
          "**Sie bauen Governance parallel zur Technik, nicht danach.** Modellrisiko-Prozesse, Dokumentationsstandards und Zuständigkeiten entstehen im selben Projekt wie das System selbst.",
          "**Sie internalisieren Kompetenz, statt sie dauerhaft einzukaufen.** Externe Expertise wird so eingesetzt, dass sie Wissen überträgt — mit dem Ziel, dass die Organisation danach eigenständig priorisieren, bauen und betreiben kann.",
          "**Sie behandeln die Use-Case-Pipeline als Portfolio.** Nicht jeder Pilot muss skalieren — aber jeder Pilot braucht vor dem Start ein dokumentiertes Kriterium, unter welchen Bedingungen er skaliert wird oder stirbt.",
        ],
      },
      { type: "h2", text: "Fazit" },
      {
        type: "p",
        text: "Die PoC-to-Production-Lücke ist kein Naturgesetz. Sie ist das vorhersehbare Ergebnis einer Reihenfolge-Entscheidung: Technik vor Struktur, Ambition vor Reife, Pilot vor Operating Model. Organisationen, die die Reihenfolge umdrehen, verwandeln dieselben Budgets in produktive Systeme statt in Friedhöfe. Strategiepapiere gibt es genug. Der Enterprise-Betrieb wartet.",
      },
    ],
  },
  {
    slug: "vendor-lock-in-sovereignty",
    category: "Architecture Whitepaper",
    tag: "Technische Bewertung",
    title: "Vendor Lock-In in Enterprise AI: Architekturmuster für technologische Souveränität",
    teaser:
      "Welche Plattform-Entscheidungen heute Lock-in-Strukturen erzeugen, die in drei Jahren operative Abhängigkeiten bedeuten — und wie man sie vermeidet.",
    readTime: "12 Min. Lesezeit",
    date: "Juli 2026",
    blocks: [
      {
        type: "p",
        text: "Jede Architektur-Entscheidung ist eine Wette auf die Zukunft. Bei Enterprise-AI-Plattformen ist der Einsatz dieser Wette höher als bei fast jeder anderen IT-Entscheidung der letzten zwanzig Jahre — aus einem einfachen Grund: KI-Systeme akkumulieren organisationsspezifisches Wissen. Wer die Plattform kontrolliert, kontrolliert zunehmend nicht nur die Infrastruktur, sondern die operative Intelligenz der Organisation.",
      },
      {
        type: "p",
        text: "Technologische Souveränität ist deshalb kein politisches Schlagwort. Sie ist eine Architektureigenschaft — und sie wird in genau den Entscheidungen gewonnen oder verloren, die heute unter Zeitdruck in Plattform-Evaluierungen getroffen werden.",
      },
      { type: "h2", text: "Die vier Lock-in-Ebenen" },
      {
        type: "p",
        text: "Lock-in wird meist als Lizenzfrage diskutiert. Das greift zu kurz. In technischen Bewertungen unterscheiden wir vier Ebenen, die sich in ihrer Reversibilität dramatisch unterscheiden:",
      },
      { type: "h3", text: "Ebene 1: Infrastruktur-Lock-in" },
      {
        type: "p",
        text: "Der klassische Fall: Workloads laufen auf proprietären Diensten eines Hyperscalers. Diese Ebene ist die sichtbarste — und paradoxerweise die am wenigsten gefährliche. Compute ist substituierbar, Migrationspfade existieren, der Markt ist kompetitiv. Wer nur hier gebunden ist, hat ein Kostenproblem, kein Souveränitätsproblem.",
      },
      { type: "h3", text: "Ebene 2: Daten- und Format-Lock-in" },
      {
        type: "p",
        text: "Kritischer: Embeddings, Feature Stores, Vektorindizes und Trainingsdaten in proprietären Formaten, deren Export technisch möglich, aber praktisch wertlos ist, weil die semantische Struktur an die Plattform gebunden ist. Eine Organisation, die drei Jahre lang Dokumenten-Embeddings in einem geschlossenen System akkumuliert hat, migriert nicht — sie beginnt von vorn.",
      },
      { type: "h3", text: "Ebene 3: Workflow- und Integrations-Lock-in" },
      {
        type: "p",
        text: "Die unterschätzte Ebene: Wenn Orchestrierung, Agenten-Logik, Prompt-Bibliotheken und Governance-Workflows in plattformspezifischen Abstraktionen gebaut sind, wird jeder Geschäftsprozess, der auf ihnen aufsetzt, zur Geisel der Plattform-Roadmap. Preiserhöhungen, Feature-Deprecations und Strategiewechsel des Anbieters schlagen direkt auf die eigene Prozesslandschaft durch.",
      },
      { type: "h3", text: "Ebene 4: Kompetenz-Lock-in" },
      {
        type: "p",
        text: "Die gefährlichste und am seltensten diskutierte Ebene: Wenn das interne Wissen der Organisation ausschließlich in den Kategorien eines Anbieters existiert — dessen Zertifizierungen, dessen Referenzarchitekturen, dessen Denkmodelle — verliert die Organisation die Fähigkeit, Alternativen überhaupt zu bewerten. Der Lock-in sitzt dann nicht mehr im System, sondern in den Köpfen. An diesem Punkt ist jede „herstelleroffene Evaluierung“ eine Formalität mit vorbestimmtem Ergebnis.",
      },
      { type: "h2", text: "Warum das Problem jetzt akut ist" },
      {
        type: "list",
        items: [
          "**Plattform-Konsolidierung:** Die großen Anbieter bündeln Modelle, Daten-Infrastruktur, Orchestrierung und Governance-Tooling zu integrierten Stacks. Die Bequemlichkeit ist real — und genau kalkuliert. Jede Integrationsschicht, die man nicht selbst besitzt, ist eine künftige Verhandlungsposition, die man nicht hat.",
          "**Regulatorischer Druck:** Der EU AI Act verlangt Nachvollziehbarkeit, Dokumentation und Kontrolle über eingesetzte Systeme. Eine Organisation, die nicht erklären kann, wie ihr System zu Entscheidungen kommt, weil die relevanten Komponenten Blackboxes eines Anbieters sind, hat ein Compliance-Problem, das sich nicht durch Vertragsklauseln lösen lässt.",
          "**Geopolitische Realität:** Für Banken, kritische Infrastruktur und den öffentlichen Sektor ist die Frage, unter welcher Jurisdiktion die eigene operative Intelligenz liegt, keine theoretische mehr. Souveränität wird zur Anforderung von Aufsichtsräten, nicht nur von Architekten.",
        ],
      },
      { type: "h2", text: "Architekturmuster für Reversibilität" },
      {
        type: "p",
        text: "Souveränität heißt nicht, alles selbst zu bauen. Das wäre die teuerste Form des Scheiterns. Souveränität heißt: **bewusst entscheiden, wo Abhängigkeit akzeptabel ist — und Reversibilität dort erhalten, wo sie strategisch zählt.** Vier Muster haben sich in der Praxis bewährt:",
      },
      { type: "h3", text: "1. Abstraktions-Disziplin an der Modellgrenze" },
      {
        type: "p",
        text: "Modell-Zugriffe laufen über eine eigene, schmale Abstraktionsschicht — nicht über die SDKs des Anbieters direkt in der Geschäftslogik. Der Wechsel eines Foundation Models darf ein Konfigurationsereignis sein, kein Migrationsprojekt. Diese Schicht ist billig, solange man sie von Anfang an baut, und fast unbezahlbar, wenn man sie nachrüsten muss.",
      },
      { type: "h3", text: "2. Datenhoheit als nicht verhandelbare Grundlinie" },
      {
        type: "p",
        text: "Rohdaten, Trainingsdaten, Embeddings und Evaluationsdatensätze liegen in offenen Formaten unter eigener Kontrolle. Plattformen dürfen Kopien verarbeiten — die kanonische Quelle bleibt im eigenen Haus. Wer diese Linie hält, behält die Option, jede nachgelagerte Komponente zu ersetzen.",
      },
      { type: "h3", text: "3. Governance-Tooling plattformneutral bauen" },
      {
        type: "p",
        text: "Modellrisiko-Register, Audit-Trails, Evaluations-Pipelines und Dokumentation gehören in eigene, anbieterunabhängige Strukturen. Sie sind das institutionelle Gedächtnis der KI-Landschaft — und genau die Artefakte, die Regulatoren sehen wollen. Sie an einen Anbieter zu binden heißt, die eigene Compliance-Fähigkeit zu verpfänden.",
      },
      { type: "h3", text: "4. Kompetenz-Portfolio statt Zertifikats-Monokultur" },
      {
        type: "p",
        text: "Interne Teams werden bewusst über mehrere Stacks und Paradigmen entwickelt. Nicht, weil man alles nutzt — sondern weil Bewertungsfähigkeit Vergleichswissen voraussetzt. Die günstigste Versicherung gegen Ebene-4-Lock-in ist ein Team, das die Frage „Warum eigentlich dieser Anbieter?“ kompetent stellen kann.",
      },
      { type: "h2", text: "Die Bewertungsfrage vor der Beschaffungsfrage" },
      {
        type: "p",
        text: "Die praktische Konsequenz: Vor jeder Plattform-Entscheidung mit mehrjähriger Tragweite gehört eine herstellerneutrale technische Bewertung, die explizit die Exit-Kosten modelliert — nicht nur die Einführungskosten. Die entscheidende Frage an jede Architektur lautet nicht „Was kostet der Einstieg?“, sondern:",
      },
      {
        type: "quote",
        text: "Was kostet es uns in drei Jahren, diese Entscheidung zu revidieren — und wer in unserer Organisation kann das dann noch beurteilen?",
      },
      {
        type: "p",
        text: "Organisationen, die diese Frage vor der Unterschrift beantworten, kaufen Werkzeuge. Die anderen kaufen Abhängigkeiten.",
      },
    ],
  },
  {
    slug: "ai-judgment-gap",
    category: "Executive Education",
    tag: "Leadership",
    title: "Die AI-Urteilskompetenz-Lücke: Warum Strategie ohne technologisches Urteilsvermögen scheitert",
    teaser:
      "Führungsteams, die Vendor-Narrative nicht dekodieren können, treffen Architekturentscheidungen unter Informationsasymmetrie. Ein Framework für strukturierte Urteilskompetenz.",
    readTime: "6 Min. Lesezeit",
    date: "Juli 2026",
    blocks: [
      {
        type: "p",
        text: "Es gibt eine Frage, die in Vorstandssitzungen zu KI-Investitionen fast nie gestellt wird — und die mehr über den Erfolg der Initiative entscheidet als jede Budgetzeile:",
      },
      {
        type: "quote",
        text: "Wer in diesem Raum kann beurteilen, ob das stimmt, was uns gerade präsentiert wurde?",
      },
      {
        type: "p",
        text: "In den meisten Führungsgremien lautet die ehrliche Antwort: niemand. Nicht aus mangelnder Intelligenz — sondern weil technologisches Urteilsvermögen eine eigene Kompetenz ist, die weder betriebswirtschaftliche Exzellenz noch Branchenerfahrung automatisch mitliefern. Wir nennen diese Lücke die **AI-Urteilskompetenz-Lücke**, und sie ist der am meisten unterschätzte Risikofaktor in Enterprise-AI-Portfolios.",
      },
      { type: "h2", text: "Entscheiden unter Informationsasymmetrie" },
      {
        type: "p",
        text: "Die Struktur des Problems ist klassisch: Auf der einen Seite Anbieter, Integratoren und Berater mit tiefem technischen Wissen und klaren kommerziellen Interessen. Auf der anderen Seite Entscheider mit Budgetverantwortung, aber ohne unabhängige Bewertungsfähigkeit. Das Ergebnis ist ein Markt, in dem Narrative gewinnen — nicht Architekturen. Die Symptome sind überall sichtbar:",
      },
      {
        type: "list",
        items: [
          "**Benchmark-Gläubigkeit:** Modell-Rankings werden als Kaufargument akzeptiert, ohne dass jemand fragt, ob der Benchmark irgendetwas mit dem eigenen Anwendungsfall zu tun hat.",
          "**Demo-Extrapolation:** Eine überzeugende Live-Demo wird mental auf den Enterprise-Betrieb hochgerechnet — die Differenz zwischen beiden ist aber genau der Teil, der scheitert.",
          "**Vokabel-Camouflage:** Begriffe wie „agentic“, „souverän“ oder „enterprise-ready“ werden übernommen, ohne dass ihre konkrete technische Bedeutung im Angebot geprüft wird.",
          "**Delegations-Illusion:** Die Bewertung wird an genau die Partei delegiert, die am Ergebnis verdient.",
        ],
      },
      {
        type: "p",
        text: "Keine dieser Dynamiken ist böswillig. Sie sind das natürliche Ergebnis einer Asymmetrie, die niemand aktiv abbaut.",
      },
      { type: "h2", text: "Urteilskompetenz ist nicht Programmierkompetenz" },
      {
        type: "p",
        text: "Das häufigste Missverständnis: Führungskräfte müssten „technischer werden“, um diese Lücke zu schließen. Das ist weder realistisch noch nötig. Ein CFO muss keine Bilanz buchen können, um Bilanzen zu beurteilen — aber er muss wissen, welche Fragen eine Bilanz beantworten muss und welche Antworten Warnsignale sind. Technologische Urteilskompetenz funktioniert identisch. Sie besteht aus drei erlernbaren Fähigkeiten:",
      },
      { type: "h3", text: "1. Sprachfähigkeit: Claims dekodieren können" },
      {
        type: "p",
        text: "Was bedeutet es konkret, wenn ein Anbieter „Fine-Tuning auf Ihren Daten“ verspricht? Welche Frage unterscheidet ein RAG-System von einem trainierten Modell — und warum ist der Unterschied für Datenschutz und Haftung entscheidend? Entscheider brauchen kein Implementierungswissen, aber ein präzises Verständnis der Kategorien, in denen geworben, verhandelt und geliefert wird.",
      },
      { type: "h3", text: "2. Prüffähigkeit: Die richtigen Gegenfragen stellen" },
      {
        type: "p",
        text: "Urteilskompetenz zeigt sich in Gegenfragen: Auf welchen Daten wurde evaluiert? Was passiert bei Modell-Drift? Wer haftet bei fehlerhaften Ausgaben? Wie sieht der Exit-Pfad aus? Welche laufenden Kosten entstehen nach Jahr eins? Ein Führungsteam, das diese Fragen systematisch stellt, verändert das Verhalten seiner Anbieter — noch bevor ein Vertrag unterschrieben ist.",
      },
      { type: "h3", text: "3. Einordnungsfähigkeit: Technologie gegen die eigene Realität spiegeln" },
      {
        type: "p",
        text: "Die anspruchsvollste Ebene: beurteilen können, ob eine technisch valide Lösung zur eigenen Datenreife, Governance-Struktur und Betriebsrealität passt. Die meisten gescheiterten KI-Investitionen waren keine schlechten Produkte — sie waren richtige Antworten auf die falsche Organisationsrealität.",
      },
      { type: "h2", text: "Warum das Thema auf die Vorstandsagenda gehört" },
      {
        type: "p",
        text: "Man könnte einwenden: Dafür gibt es doch den CIO. Drei Gründe, warum das nicht reicht: **Erstens** fallen die folgenreichsten KI-Entscheidungen — Make-or-Buy, Plattform-Strategie, Partnerschaften — auf Vorstandsebene, nicht im IT-Ressort. **Zweitens** verlangt der EU AI Act nachweisbare Aufsichts- und Kontrollstrukturen; ein Aufsichtsgremium, das die überwachten Systeme kategorial nicht versteht, kann dieser Pflicht formal nicht nachkommen. **Drittens** ist Urteilskompetenz auf Führungsebene die Voraussetzung dafür, dass alle nachgelagerten Strukturen funktionieren: Wer oben Narrative nicht von Substanz unterscheiden kann, budgetiert unten die falschen Projekte.",
      },
      { type: "h2", text: "Der Weg zur strukturierten Urteilskompetenz" },
      {
        type: "p",
        text: "Urteilskompetenz entsteht nicht durch Keynotes und nicht durch einmalige Awareness-Workshops. Sie entsteht durch strukturierte Auseinandersetzung mit echten Entscheidungssituationen: reale Angebote sezieren, reale Architekturen bewerten, reale Vendor-Gespräche simulieren — mit Sparringspartnern, die kein kommerzielles Interesse am Ergebnis haben.",
      },
      {
        type: "p",
        text: "Das ist der Kern dessen, was Executive Education in diesem Feld leisten muss: nicht Wissen über KI vermitteln, sondern **Urteilsfähigkeit unter Asymmetrie** aufbauen. Der Unterschied zeigt sich nicht im Zertifikat, sondern in der nächsten Verhandlung.",
      },
    ],
  },
  {
    slug: "eu-ai-act-governance",
    category: "Research Brief",
    tag: "AI Governance",
    title: "Der EU AI Act ist keine Compliance-Übung: Governance-Reife als Wettbewerbsvorteil",
    teaser:
      "Während die meisten Organisationen den AI Act als Rechtsabteilungsthema behandeln, bauen die klügsten daraus einen strukturellen Vorsprung. Eine Einordnung für Entscheider in regulierten Branchen.",
    readTime: "9 Min. Lesezeit",
    date: "Juli 2026",
    blocks: [
      {
        type: "p",
        text: "Es gibt zwei Arten, auf Regulierung zu reagieren. Die erste: minimal erfüllen, Aufwand begrenzen, an die Rechtsabteilung delegieren. Die zweite: verstehen, dass Regulierung die Spielregeln eines Marktes neu ordnet — und dass derjenige gewinnt, der die neuen Regeln zuerst operativ beherrscht.",
      },
      {
        type: "p",
        text: "Beim EU AI Act entscheidet sich gerade quer durch Zentraleuropa, welche Organisationen welchen Weg wählen. Unsere These aus der Arbeit mit Banken, Industrie und öffentlichem Sektor: **Der AI Act belohnt strukturell genau die Fähigkeiten, die ohnehin über Erfolg oder Scheitern von KI-Initiativen entscheiden.** Wer ihn als lästige Pflicht behandelt, zahlt doppelt — einmal für die Compliance und einmal für die verpasste Reife.",
      },
      { type: "h2", text: "Was der AI Act wirklich verlangt" },
      {
        type: "p",
        text: "Jenseits der juristischen Details verlangt der AI Act von Organisationen, die KI-Systeme mit relevantem Risiko einsetzen, im Kern vier Dinge:",
      },
      {
        type: "olist",
        items: [
          "**Wissen, was man betreibt:** ein vollständiges Inventar der eingesetzten KI-Systeme inklusive Risikoklassifizierung. Klingt trivial — ist es nicht. KI-Funktionalität kommt längst eingebettet in SaaS-Produkte, Fachbereichs-Tools und Schatten-IT ins Haus.",
          "**Erklären können, wie es funktioniert:** Dokumentation von Datengrundlagen, Modellverhalten und Entscheidungslogik in einer Tiefe, die einer Prüfung standhält.",
          "**Menschen in der Verantwortung halten:** wirksame menschliche Aufsicht — nicht als Feigenblatt, sondern als definierter Prozess mit qualifizierten Personen, die eingreifen können und dürfen.",
          "**Kompetenz nachweisen:** Artikel 4 verpflichtet Betreiber, für ausreichende AI-Kompetenz des Personals zu sorgen, das mit den Systemen arbeitet. Weiterbildung wird von der freiwilligen Investition zur regulatorischen Anforderung.",
        ],
      },
      {
        type: "p",
        text: "Wer diese Liste neben die Scheiternsmuster gescheiterter KI-Projekte legt, erkennt das Muster sofort: **Es ist dieselbe Liste.** Fehlendes System-Inventar, undokumentierte Datengrundlagen, unklare Verantwortlichkeiten und Kompetenzlücken sind exakt die Gründe, aus denen Piloten den Enterprise-Betrieb nie erreichen. Der Regulator verlangt nichts, was eine reife Organisation nicht ohnehin bräuchte.",
      },
      { type: "h2", text: "Die Kostenasymmetrie zwischen früh und spät" },
      {
        type: "p",
        text: "Die Pflichten des AI Act treten gestaffelt in Kraft, und die anspruchsvollsten Anforderungen — insbesondere für Hochrisiko-Systeme — erreichen Organisationen jetzt und in den kommenden Monaten. Das eigentliche Problem ist aber nicht der Stichtag. Es ist die Vorlaufzeit: Belastbares Modellrisiko-Management, saubere Daten-Lineage und funktionierende Aufsichtsprozesse entstehen über Monate, in denen Systeme inventarisiert, Prozesse definiert, Zuständigkeiten verhandelt und Teams qualifiziert werden. Organisationen, die erst unter Prüfungsdruck beginnen, haben strukturell nur zwei Optionen: teuer improvisieren oder Systeme abschalten.",
      },
      {
        type: "quote",
        text: "Früh begonnene Governance kostet Projektbudget. Spät begonnene Governance kostet Handlungsfähigkeit.",
      },
      { type: "h2", text: "Drei strategische Fehler, die wir derzeit beobachten" },
      { type: "h3", text: "Fehler 1: Der AI Act wird als reines Rechtsthema geführt" },
      {
        type: "p",
        text: "Die Rechtsabteilung kann Anforderungen interpretieren — sie kann keine Datenarchitektur umbauen, keine Evaluations-Pipeline aufsetzen und keine Aufsichtsprozesse in den Betrieb integrieren. AI-Act-Readiness ist zu großen Teilen ein Architektur- und Organisationsthema. Wo sie ausschließlich juristisch geführt wird, entstehen Papierberge ohne operative Substanz — Compliance-Theater, das der ersten ernsthaften Prüfung nicht standhält.",
      },
      { type: "h3", text: "Fehler 2: Kompetenzaufbau wird auf E-Learning reduziert" },
      {
        type: "p",
        text: "Die Kompetenzpflicht des Artikel 4 lässt sich formal mit Klick-Schulungen bedienen. Aber der Regulator fragt im Ernstfall nicht nach Teilnahmequoten, sondern nach wirksamer Aufsicht — und wirksame Aufsicht setzt Personal voraus, das Systemverhalten tatsächlich beurteilen kann. Der Unterschied zwischen absolvierter Schulung und vorhandener Urteilskompetenz ist genau der Unterschied, der vor einer Aufsichtsbehörde trägt.",
      },
      { type: "h3", text: "Fehler 3: Governance wird gegen Innovation ausgespielt" },
      {
        type: "p",
        text: "Das hartnäckigste Narrativ: Regulierung bremse die KI-Adoption. Die operative Realität zeigt das Gegenteil. Organisationen mit klaren Governance-Strukturen skalieren schneller, weil jede einzelne Initiative nicht mehr bei null verhandeln muss, was erlaubt, dokumentiert und verantwortet ist. Governance ist keine Bremse — sie ist die Fahrbahn. Ohne sie fährt jedes Projekt querfeldein.",
      },
      { type: "h2", text: "Governance-Reife als Marktposition" },
      {
        type: "p",
        text: "Für regulierte Branchen kommt eine zweite Ebene hinzu: Banken, kritische Infrastruktur und öffentliche Auftraggeber werden AI-Governance-Nachweise zunehmend in ihre Lieferketten und Vergabekriterien durchreichen. Wer heute prüffähige Strukturen aufbaut, ist morgen der Partner, der Ausschreibungen gewinnt, während Wettbewerber Fragebögen nicht beantworten können. Damit dreht sich die Logik: Governance-Reife ist nicht der Preis für die Teilnahme am Markt. Sie wird zum Differenzierungsmerkmal in ihm.",
      },
      { type: "h2", text: "Wo anfangen" },
      {
        type: "olist",
        items: [
          "**Inventar und Risiko-Triage:** Vollständige Erfassung aller KI-Systeme — inklusive eingebetteter und eingekaufter — mit erster Risikoklassifizierung. Ohne diese Landkarte ist jede weitere Maßnahme Spekulation.",
          "**Gap-Analyse gegen die eigene Zielarchitektur:** Nicht gegen den Gesetzestext, sondern gegen die Frage: Welche Governance-Struktur bräuchten wir, um unsere KI-Ambitionen sicher zu skalieren? Der AI Act ist dann eine Teilmenge davon.",
          "**Kompetenzaufbau auf beiden Ebenen:** Urteilskompetenz in Führung und Aufsicht, operative Kompetenz in den Teams, die Systeme betreiben und überwachen — mit messbarem Transfer statt Teilnahmezertifikaten.",
        ],
      },
      {
        type: "p",
        text: "Der AI Act stellt Organisationen vor eine Wahl, die keine ist: Die Fähigkeiten, die er verlangt, sind dieselben, die aus KI-Investitionen Wertschöpfung machen. Die Frage ist nur, ob man sie unter Druck aufbaut — oder mit Vorsprung.",
      },
    ],
  },
  {
    slug: "embedded-engineering",
    category: "Perspective",
    tag: "ELaaS",
    title: "Kompetenz, die bleibt: Warum Embedded Engineering das klassische Beratungsmodell ablöst",
    teaser:
      "Jedes Beratungsengagement endet mit einem Abschlussbericht — und einem Kompetenzverlust. Forward Deployed Engineers drehen das Modell um: externe Expertise, deren Erfolgskriterium die eigene Überflüssigkeit ist.",
    readTime: "7 Min. Lesezeit",
    date: "Juli 2026",
    blocks: [
      {
        type: "p",
        text: "Es gibt eine unbequeme Rechnung, die in kaum einem Lenkungsausschuss aufgemacht wird: Was bleibt von einem Beratungsprojekt, wenn die Berater gehen?",
      },
      {
        type: "p",
        text: "Die ehrliche Bilanz nach einem typischen KI-Transformationsprojekt: Die Slides bleiben. Die Roadmap bleibt. Vielleicht bleibt ein Pilot. Was nicht bleibt, ist die Fähigkeit, das Gebaute zu verstehen, weiterzuentwickeln und die nächste Initiative eigenständig zu stemmen. Diese Fähigkeit war nie im Haus — sie war gemietet, und sie ist mit dem letzten Abrechnungsmonat ausgezogen. Wir nennen das den **strukturellen Kompetenzverlust des klassischen Beratungsmodells**. Er ist kein Versagen einzelner Beratungen — er ist die logische Konsequenz eines Geschäftsmodells, dessen Umsatz mit der Dauer der Abhängigkeit wächst.",
      },
      { type: "h2", text: "Die Anreizstruktur ist das Problem" },
      {
        type: "p",
        text: "Man muss keinem Beteiligten Böswilligkeit unterstellen, um das Muster zu erkennen. Klassische Beratung wird nach Aufwand bezahlt. Der ökonomisch rationale Zustand für den Anbieter ist ein Klient, der dauerhaft Unterstützung braucht. Wissenstransfer ist in diesem Modell eine Nebenleistung — im Zweifel eine umsatzschädliche. Die Folgen sind in Enterprise-Umgebungen überall zu besichtigen:",
      },
      {
        type: "list",
        items: [
          "**Systeme, die niemand im Haus erklären kann.** Die Architektur-Entscheidungen liegen in den Köpfen ehemaliger Projektmitarbeiter externer Partner.",
          "**Dauermandate für Betriebsaufgaben,** die längst interne Routine sein könnten — als stille Kostenposition, die nie wieder hinterfragt wird.",
          "**Strategische Erpressbarkeit:** Wer die eigene KI-Landschaft nicht versteht, kann Folgeangebote nicht bewerten und Alternativen nicht prüfen. Der Dienstleister wird faktisch unkündbar.",
          "**Stagnierende interne Teams,** die jahrelang neben externen Experten sitzen, ohne je Verantwortung übertragen zu bekommen — die teuerste Form der Demotivation.",
        ],
      },
      {
        type: "p",
        text: "Für KI-Initiativen ist dieses Muster besonders fatal, weil KI-Systeme keine Projekte sind, sondern lebende Systeme: Sie driften, sie brauchen laufende Evaluation, sie müssen an veränderte Daten und Regulierung angepasst werden. Ein Modell, bei dem die Betriebskompetenz extern liegt, produziert permanente Abhängigkeit — mit Ansage.",
      },
      { type: "h2", text: "Das umgekehrte Modell: Embedded statt parallel" },
      {
        type: "p",
        text: "Die Alternative ist kein Verzicht auf externe Expertise. Organisationen, die komplexe KI-Systeme erstmals in den Enterprise-Betrieb bringen, brauchen Erfahrung, die sie intern noch nicht haben können. Die Frage ist nicht ob extern, sondern wie. Das Embedded-Engineering-Modell — in der Industrie unter dem Begriff **Forward Deployed Engineers** etabliert — beantwortet diese Frage strukturell anders:",
      },
      { type: "h3", text: "1. Arbeit in den Initiativen, nicht neben ihnen" },
      {
        type: "p",
        text: "Embedded Engineers arbeiten innerhalb der laufenden Vorhaben der Organisation — im selben Backlog, in denselben Reviews, mit Umsetzungsverantwortung. Kein Lab, keine Parallelorganisation, kein Bericht ohne Lieferung. Wer mitbaut, kann Wissen nicht zurückhalten; es entsteht im gemeinsamen Arbeitskontext.",
      },
      { type: "h3", text: "2. Tandem-Prinzip statt Expertenenklave" },
      {
        type: "p",
        text: "Jede externe Rolle ist mit internen Mitarbeitenden gepaart, die schrittweise Verantwortung übernehmen. Der Kompetenztransfer ist nicht Begleitprogramm, sondern Arbeitsmodus — dokumentiert, überprüfbar, mit definierten Übergabepunkten.",
      },
      { type: "h3", text: "3. Erfolgskriterium: eigene Überflüssigkeit" },
      {
        type: "p",
        text: "Das Engagement hat ein explizites Zielbild: Am Ende verfügt die Organisation über validierte interne Experten, dokumentierte Governance-Strukturen und eine Use-Case-Pipeline, die sie eigenständig priorisieren und weiterentwickeln kann. Der Erfolg misst sich nicht an verkauften Folgetagen, sondern daran, was die Organisation ohne den Partner kann.",
      },
      { type: "h3", text: "4. Zeitlich begrenzt by design" },
      {
        type: "p",
        text: "Embedded-Engagements sind von Anfang an als Übergangszustand konzipiert — Monate, nicht Jahre. Die zeitliche Begrenzung ist kein Vertragsdetail, sondern der Mechanismus, der die Anreize sauber hält: Ein Modell, das enden soll, muss Kompetenz übertragen, um erfolgreich zu sein.",
      },
      { type: "h2", text: "Executional Learning: Bildung und Umsetzung sind untrennbar" },
      {
        type: "p",
        text: "Hinter dem Modell steht ein Grundprinzip, das wir **Executional Learning** nennen: Die Trennung zwischen Weiterbildung (Wissen ohne Umsetzung) und Beratung (Umsetzung ohne Wissenstransfer) ist das strukturelle Problem beider Branchen. Kompetenz, die bleibt, entsteht nur dort, wo Lernen und Liefern derselbe Vorgang sind. Die entscheidende Frage an jedes Angebot — ob Schulungskatalog oder Transformationsmandat — lautet:",
      },
      {
        type: "quote",
        text: "Was kann unsere Organisation nach diesem Engagement eigenständig, was sie vorher nicht konnte — und wie wird das gemessen?",
      },
      {
        type: "p",
        text: "Ein Partner, der auf diese Frage keine präzise Antwort hat, verkauft Abhängigkeit. Ein Partner, der sie mit definierten Kompetenz-Outcomes, Übergabepunkten und einem Enddatum beantwortet, verkauft Souveränität.",
      },
      { type: "h2", text: "Fazit" },
      {
        type: "p",
        text: "Technologische Souveränität ist kein Zustand — sie ist eine Kompetenz. Und Kompetenz lässt sich nicht dauerhaft mieten, nur aufbauen. Das Beratungsmodell der letzten zwanzig Jahre hat für die KI-Ära die falsche Anreizstruktur. Organisationen, die das erkennen, stellen ihren externen Partnern eine neue Anforderung: Macht euch überflüssig — nachweisbar.",
      },
    ],
  },
];

const en: Article[] = [
  {
    slug: "poc-to-production-gap",
    category: "Research Brief",
    tag: "AI Governance",
    title: "The PoC-to-Production Gap: Why 85% of AI Projects Never Scale",
    teaser:
      "A structural analysis of the most common failure patterns in large-scale AI initiatives — and what governance maturity has to do with it.",
    readTime: "8 min read",
    date: "July 2026",
    blocks: [
      {
        type: "p",
        text: "The numbers have been consistent for years — and they are not improving. Independent analyses by McKinsey, Gartner and MIT Sloan Management Review arrive at the same finding: the vast majority of AI initiatives in large organisations never reach productive enterprise operation. The pilots work. The demos convince. The board is enthusiastic. And then — nothing happens.",
      },
      {
        type: "p",
        text: "We call this phenomenon the **PoC graveyard**: a growing collection of technically successful proofs-of-concept that never make the leap into scaled value creation. Walk through the innovation departments of Central European banks and industrial companies today and you will find it almost everywhere.",
      },
      { type: "h2", text: "Failure does not start with the model" },
      {
        type: "p",
        text: "The intuitive explanation — “the technology wasn't ready” — is almost always wrong. The models work. What is missing is something else: structural compatibility between the pilot and the organisation that is supposed to operate it.",
      },
      {
        type: "p",
        text: "A proof-of-concept lives in a protected environment: curated data, no legacy integration, no regulatory scrutiny, no 24/7 operation, no liability question. Enterprise operation knows none of these freedoms. The transition from one to the other is not a deployment step — it is organisational structural change. Four patterns recur in our architecture reviews:",
      },
      { type: "h3", text: "1. Data maturity was assumed to be solved" },
      {
        type: "p",
        text: "The pilot ran on a hand-picked dataset. Production requires data pipelines that deliver reliably across system boundaries, quality fluctuations and historically grown silos. In most organisations this infrastructure does not exist — and nobody priced it into the project budget.",
      },
      { type: "h3", text: "2. Governance came after the technology" },
      {
        type: "p",
        text: "Model risk management, traceability of decisions, escalation paths for misbehaviour, ownership of ongoing validation: all of this can only be retrofitted expensively and incompletely. Organisations that treat governance as a downstream compliance topic build structurally unscalable systems — regardless of how good the model is.",
      },
      { type: "h3", text: "3. The pilot had a champion; operations has no owner" },
      {
        type: "p",
        text: "PoCs are carried by motivated individuals. Production requires institutionalised responsibility: an operating model that defines who runs the system, who evolves it, who intervenes on drift and who carries the cost. Without it, the project dies the moment the champion changes departments.",
      },
      { type: "h3", text: "4. The architecture decision was made under information asymmetry" },
      {
        type: "p",
        text: "Platform and vendor decisions were made on the basis of vendor narratives, not independent technical assessment. What looked like a shortcut in the pilot turns out to be lock-in with structural follow-on costs at scale.",
      },
      { type: "h2", text: "Governance maturity is the real predictor" },
      {
        type: "p",
        text: "The common denominator of these patterns: none of them is a technology problem. They are maturity gaps — in data architecture, governance structures, operating models and the judgment capability of the decision-making level.",
      },
      {
        type: "quote",
        text: "The question “Which model do we deploy?” is secondary to the question “Can our organisation carry such a system?”",
      },
      {
        type: "p",
        text: "Organisations that answer the second question honestly before asking the first one scale. The others build graveyards. For regulated industries — banks, critical infrastructure, the public sector — this logic sharpens further: the EU AI Act turns governance maturity from recommendation into obligation. Building systems today without documented risk classification, data quality evidence and human oversight structures means producing legacy liabilities by design.",
      },
      { type: "h2", text: "What functioning organisations do differently" },
      {
        type: "olist",
        items: [
          "**They start with an architecture and maturity review, not a use case.** Only when it is clear what the organisation can carry is it prioritised what it should build.",
          "**They build governance in parallel with the technology, not afterwards.** Model risk processes, documentation standards and responsibilities emerge in the same project as the system itself.",
          "**They internalise capability instead of renting it permanently.** External expertise is deployed to transfer knowledge — with the goal that the organisation can prioritise, build and operate independently afterwards.",
          "**They treat the use-case pipeline as a portfolio.** Not every pilot has to scale — but every pilot needs a documented criterion, before launch, for the conditions under which it scales or dies.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "The PoC-to-production gap is not a law of nature. It is the predictable result of a sequencing decision: technology before structure, ambition before maturity, pilot before operating model. Organisations that reverse the sequence turn the same budgets into productive systems instead of graveyards. There are enough strategy papers. Enterprise operation is waiting.",
      },
    ],
  },
  {
    slug: "vendor-lock-in-sovereignty",
    category: "Architecture Whitepaper",
    tag: "Technical Assessment",
    title: "Vendor Lock-In in Enterprise AI: Architecture Patterns for Technological Sovereignty",
    teaser:
      "Which platform decisions create lock-in structures today that will mean operational dependency in three years — and how to avoid them.",
    readTime: "12 min read",
    date: "July 2026",
    blocks: [
      {
        type: "p",
        text: "Every architecture decision is a bet on the future. With enterprise AI platforms, the stakes of this bet are higher than in almost any other IT decision of the past twenty years — for a simple reason: AI systems accumulate organisation-specific knowledge. Whoever controls the platform increasingly controls not just the infrastructure, but the operational intelligence of the organisation.",
      },
      {
        type: "p",
        text: "Technological sovereignty is therefore not a political slogan. It is an architectural property — and it is won or lost in precisely the decisions being made under time pressure in platform evaluations today.",
      },
      { type: "h2", text: "The four levels of lock-in" },
      {
        type: "p",
        text: "Lock-in is usually discussed as a licensing question. That falls short. In technical assessments we distinguish four levels that differ dramatically in their reversibility:",
      },
      { type: "h3", text: "Level 1: Infrastructure lock-in" },
      {
        type: "p",
        text: "The classic case: workloads run on a hyperscaler's proprietary services. This level is the most visible — and paradoxically the least dangerous. Compute is substitutable, migration paths exist, the market is competitive. If you are only bound here, you have a cost problem, not a sovereignty problem.",
      },
      { type: "h3", text: "Level 2: Data and format lock-in" },
      {
        type: "p",
        text: "More critical: embeddings, feature stores, vector indices and training data in proprietary formats whose export is technically possible but practically worthless because the semantic structure is bound to the platform. An organisation that has accumulated three years of document embeddings in a closed system does not migrate — it starts over.",
      },
      { type: "h3", text: "Level 3: Workflow and integration lock-in" },
      {
        type: "p",
        text: "The underestimated level: when orchestration, agent logic, prompt libraries and governance workflows are built in platform-specific abstractions, every business process that depends on them becomes hostage to the platform roadmap. Price increases, feature deprecations and vendor strategy shifts hit your process landscape directly.",
      },
      { type: "h3", text: "Level 4: Capability lock-in" },
      {
        type: "p",
        text: "The most dangerous and least discussed level: when the organisation's internal knowledge exists exclusively in one vendor's categories — its certifications, reference architectures, mental models — the organisation loses the ability to evaluate alternatives at all. The lock-in then no longer sits in the system, but in people's heads. At that point, every “vendor-open evaluation” is a formality with a predetermined outcome.",
      },
      { type: "h2", text: "Why the problem is acute now" },
      {
        type: "list",
        items: [
          "**Platform consolidation:** The major vendors are bundling models, data infrastructure, orchestration and governance tooling into integrated stacks. The convenience is real — and precisely calculated. Every integration layer you do not own is a future negotiating position you do not have.",
          "**Regulatory pressure:** The EU AI Act demands traceability, documentation and control over deployed systems. An organisation that cannot explain how its system reaches decisions because the relevant components are a vendor's black boxes has a compliance problem that contract clauses cannot solve.",
          "**Geopolitical reality:** For banks, critical infrastructure and the public sector, the question of which jurisdiction their operational intelligence sits under is no longer theoretical. Sovereignty is becoming a supervisory board requirement, not just an architect's concern.",
        ],
      },
      { type: "h2", text: "Architecture patterns for reversibility" },
      {
        type: "p",
        text: "Sovereignty does not mean building everything yourself. That would be the most expensive form of failure. Sovereignty means: **deliberately deciding where dependency is acceptable — and preserving reversibility where it matters strategically.** Four patterns have proven themselves in practice:",
      },
      { type: "h3", text: "1. Abstraction discipline at the model boundary" },
      {
        type: "p",
        text: "Model access runs through your own thin abstraction layer — not through the vendor's SDKs directly in business logic. Switching a foundation model should be a configuration event, not a migration project. This layer is cheap if you build it from the start, and almost priceless if you have to retrofit it.",
      },
      { type: "h3", text: "2. Data ownership as a non-negotiable baseline" },
      {
        type: "p",
        text: "Raw data, training data, embeddings and evaluation datasets live in open formats under your own control. Platforms may process copies — the canonical source stays in-house. Hold this line and you retain the option to replace any downstream component.",
      },
      { type: "h3", text: "3. Build governance tooling platform-neutral" },
      {
        type: "p",
        text: "Model risk registers, audit trails, evaluation pipelines and documentation belong in your own vendor-independent structures. They are the institutional memory of your AI landscape — and exactly the artefacts regulators want to see. Binding them to a vendor means pawning your own compliance capability.",
      },
      { type: "h3", text: "4. Capability portfolio instead of certification monoculture" },
      {
        type: "p",
        text: "Internal teams are deliberately developed across multiple stacks and paradigms. Not because you use everything — but because evaluation capability requires comparative knowledge. The cheapest insurance against level-4 lock-in is a team that can competently ask: “Why this vendor, actually?”",
      },
      { type: "h2", text: "The assessment question before the procurement question" },
      {
        type: "p",
        text: "The practical consequence: every platform decision with multi-year impact deserves a vendor-neutral technical assessment that explicitly models exit costs — not just adoption costs. The decisive question for any architecture is not “What does entry cost?”, but:",
      },
      {
        type: "quote",
        text: "What will it cost us in three years to reverse this decision — and who in our organisation will still be able to judge that?",
      },
      {
        type: "p",
        text: "Organisations that answer this question before signing buy tools. The others buy dependencies.",
      },
    ],
  },
  {
    slug: "ai-judgment-gap",
    category: "Executive Education",
    tag: "Leadership",
    title: "The AI Judgment Gap: Why Strategy Fails Without Technological Judgment",
    teaser:
      "Leadership teams that cannot decode vendor narratives make architecture decisions under information asymmetry. A framework for structured technological judgment.",
    readTime: "6 min read",
    date: "July 2026",
    blocks: [
      {
        type: "p",
        text: "There is a question that is almost never asked in board meetings on AI investments — and it decides more about the initiative's success than any budget line:",
      },
      {
        type: "quote",
        text: "Who in this room can judge whether what was just presented to us is true?",
      },
      {
        type: "p",
        text: "In most leadership bodies, the honest answer is: nobody. Not for lack of intelligence — but because technological judgment is a distinct capability that neither business excellence nor industry experience automatically provides. We call this gap the **AI judgment gap**, and it is the most underestimated risk factor in enterprise AI portfolios.",
      },
      { type: "h2", text: "Deciding under information asymmetry" },
      {
        type: "p",
        text: "The structure of the problem is classic: on one side, vendors, integrators and consultants with deep technical knowledge and clear commercial interests. On the other, decision-makers with budget responsibility but no independent evaluation capability. The result is a market in which narratives win — not architectures. The symptoms are visible everywhere:",
      },
      {
        type: "list",
        items: [
          "**Benchmark credulity:** Model rankings are accepted as a buying argument without anyone asking whether the benchmark has anything to do with the actual use case.",
          "**Demo extrapolation:** A convincing live demo is mentally extrapolated to enterprise operation — but the difference between the two is exactly the part that fails.",
          "**Vocabulary camouflage:** Terms like “agentic”, “sovereign” or “enterprise-ready” are adopted without examining their concrete technical meaning in the offer.",
          "**The delegation illusion:** The evaluation is delegated to precisely the party that profits from the outcome.",
        ],
      },
      {
        type: "p",
        text: "None of these dynamics is malicious. They are the natural result of an asymmetry that nobody actively dismantles.",
      },
      { type: "h2", text: "Judgment is not programming skill" },
      {
        type: "p",
        text: "The most common misconception: executives would have to “become more technical” to close this gap. That is neither realistic nor necessary. A CFO does not need to post journal entries to judge financial statements — but they must know which questions a balance sheet has to answer and which answers are warning signs. Technological judgment works identically. It consists of three learnable capabilities:",
      },
      { type: "h3", text: "1. Language capability: decoding the claims" },
      {
        type: "p",
        text: "What does it concretely mean when a vendor promises “fine-tuning on your data”? Which question distinguishes a RAG system from a trained model — and why is the difference decisive for data protection and liability? Decision-makers need no implementation knowledge, but a precise understanding of the categories in which products are marketed, negotiated and delivered.",
      },
      { type: "h3", text: "2. Scrutiny capability: asking the right counter-questions" },
      {
        type: "p",
        text: "Judgment shows in counter-questions: What data was the evaluation based on? What happens on model drift? Who is liable for faulty outputs? What does the exit path look like? What running costs arise after year one? A leadership team that asks these questions systematically changes its vendors' behaviour — before any contract is signed.",
      },
      { type: "h3", text: "3. Contextualisation: mirroring technology against your own reality" },
      {
        type: "p",
        text: "The most demanding level: being able to judge whether a technically valid solution fits your own data maturity, governance structure and operational reality. Most failed AI investments were not bad products — they were right answers to the wrong organisational reality.",
      },
      { type: "h2", text: "Why this belongs on the board agenda" },
      {
        type: "p",
        text: "One could object: that is what the CIO is for. Three reasons why that is not enough: **First,** the most consequential AI decisions — make-or-buy, platform strategy, partnerships — are made at board level, not in the IT department. **Second,** the EU AI Act demands demonstrable oversight and control structures; a supervisory body that categorically does not understand the systems it oversees cannot formally fulfil this duty. **Third,** judgment at the top is the precondition for everything downstream: those who cannot distinguish narrative from substance at the top budget the wrong projects below.",
      },
      { type: "h2", text: "The path to structured judgment" },
      {
        type: "p",
        text: "Judgment does not emerge from keynotes or one-off awareness workshops. It emerges from structured engagement with real decision situations: dissecting real offers, evaluating real architectures, simulating real vendor conversations — with sparring partners who have no commercial interest in the outcome.",
      },
      {
        type: "p",
        text: "That is the core of what executive education in this field must deliver: not knowledge about AI, but **judgment capability under asymmetry**. The difference shows not in the certificate, but in the next negotiation.",
      },
    ],
  },
  {
    slug: "eu-ai-act-governance",
    category: "Research Brief",
    tag: "AI Governance",
    title: "The EU AI Act Is Not a Compliance Exercise: Governance Maturity as Competitive Advantage",
    teaser:
      "While most organisations treat the AI Act as a legal department topic, the smartest are building structural advantage from it. A perspective for decision-makers in regulated industries.",
    readTime: "9 min read",
    date: "July 2026",
    blocks: [
      {
        type: "p",
        text: "There are two ways to respond to regulation. The first: comply minimally, limit effort, delegate to the legal department. The second: understand that regulation reorders the rules of a market — and that whoever masters the new rules operationally first, wins.",
      },
      {
        type: "p",
        text: "With the EU AI Act, organisations across Central Europe are choosing their path right now. Our thesis from working with banks, industry and the public sector: **the AI Act structurally rewards exactly the capabilities that decide the success or failure of AI initiatives anyway.** Those who treat it as a tiresome duty pay twice — once for compliance and once for the maturity they failed to build.",
      },
      { type: "h2", text: "What the AI Act actually demands" },
      {
        type: "p",
        text: "Beyond the legal detail, the AI Act demands four things at its core from organisations deploying AI systems with relevant risk:",
      },
      {
        type: "olist",
        items: [
          "**Know what you operate:** a complete inventory of deployed AI systems including risk classification. Sounds trivial — it is not. AI functionality has long been entering organisations embedded in SaaS products, departmental tools and shadow IT.",
          "**Be able to explain how it works:** documentation of data foundations, model behaviour and decision logic at a depth that withstands an audit.",
          "**Keep humans in responsibility:** effective human oversight — not as a fig leaf, but as a defined process with qualified people who can and may intervene.",
          "**Demonstrate competence:** Article 4 obliges deployers to ensure sufficient AI literacy among staff working with the systems. Training shifts from voluntary investment to regulatory requirement.",
        ],
      },
      {
        type: "p",
        text: "Place this list next to the failure patterns of unsuccessful AI projects and the pattern is immediately recognisable: **it is the same list.** Missing system inventories, undocumented data foundations, unclear responsibilities and competence gaps are exactly the reasons pilots never reach enterprise operation. The regulator demands nothing a mature organisation would not need anyway.",
      },
      { type: "h2", text: "The cost asymmetry between early and late" },
      {
        type: "p",
        text: "The AI Act's obligations take effect in stages, and the most demanding requirements — particularly for high-risk systems — are reaching organisations now and in the coming months. But the real problem is not the deadline. It is the lead time: robust model risk management, clean data lineage and functioning oversight processes emerge over months in which systems are inventoried, processes defined, responsibilities negotiated and teams qualified. Organisations that only start under audit pressure structurally have two options: improvise expensively or switch systems off.",
      },
      {
        type: "quote",
        text: "Governance started early costs project budget. Governance started late costs the ability to act.",
      },
      { type: "h2", text: "Three strategic mistakes we currently observe" },
      { type: "h3", text: "Mistake 1: The AI Act is run as a purely legal topic" },
      {
        type: "p",
        text: "The legal department can interpret requirements — it cannot rebuild a data architecture, set up an evaluation pipeline or integrate oversight processes into operations. AI Act readiness is largely an architecture and organisation topic. Where it is run exclusively legally, paper mountains without operational substance emerge — compliance theatre that will not withstand the first serious audit.",
      },
      { type: "h3", text: "Mistake 2: Competence building is reduced to e-learning" },
      {
        type: "p",
        text: "Article 4's literacy obligation can formally be served with click-through training. But in the decisive case, the regulator does not ask about participation rates — it asks about effective oversight, and effective oversight requires staff who can actually judge system behaviour. The difference between completed training and present judgment is exactly the difference that holds up before a supervisory authority.",
      },
      { type: "h3", text: "Mistake 3: Governance is played off against innovation" },
      {
        type: "p",
        text: "The most persistent narrative: regulation slows AI adoption. Operational reality shows the opposite. Organisations with clear governance structures scale faster, because each individual initiative no longer has to negotiate from scratch what is permitted, documented and accounted for. Governance is not the brake — it is the road. Without it, every project drives cross-country.",
      },
      { type: "h2", text: "Governance maturity as market position" },
      {
        type: "p",
        text: "For regulated industries there is a second layer: banks, critical infrastructure and public-sector buyers will increasingly pass AI governance evidence down their supply chains and procurement criteria. Whoever builds audit-ready structures today is tomorrow the partner who wins tenders while competitors cannot answer questionnaires. This reverses the logic: governance maturity is not the price of market participation. It becomes a differentiator within it.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "olist",
        items: [
          "**Inventory and risk triage:** Complete capture of all AI systems — including embedded and procured ones — with initial risk classification. Without this map, every further measure is speculation.",
          "**Gap analysis against your own target architecture:** Not against the legal text, but against the question: what governance structure would we need to scale our AI ambitions safely? The AI Act then becomes a subset of that.",
          "**Competence building on both levels:** judgment capability in leadership and oversight, operational capability in the teams running and monitoring systems — with measurable transfer instead of participation certificates.",
        ],
      },
      {
        type: "p",
        text: "The AI Act confronts organisations with a choice that is none: the capabilities it demands are the same ones that turn AI investments into value creation. The only question is whether you build them under pressure — or with a head start.",
      },
    ],
  },
  {
    slug: "embedded-engineering",
    category: "Perspective",
    tag: "ELaaS",
    title: "Capability That Stays: Why Embedded Engineering Is Replacing the Classic Consulting Model",
    teaser:
      "Every consulting engagement ends with a final report — and a loss of capability. Forward Deployed Engineers invert the model: external expertise whose success criterion is its own obsolescence.",
    readTime: "7 min read",
    date: "July 2026",
    blocks: [
      {
        type: "p",
        text: "There is an uncomfortable calculation that is rarely made in any steering committee: what remains of a consulting project when the consultants leave?",
      },
      {
        type: "p",
        text: "The honest balance after a typical AI transformation project: the slides remain. The roadmap remains. Perhaps a pilot remains. What does not remain is the ability to understand what was built, to evolve it, and to carry the next initiative independently. That ability was never in-house — it was rented, and it moved out with the last billing month. We call this the **structural capability loss of the classic consulting model**. It is not the failure of individual consultancies — it is the logical consequence of a business model whose revenue grows with the duration of dependency.",
      },
      { type: "h2", text: "The incentive structure is the problem" },
      {
        type: "p",
        text: "You do not have to assume bad faith to recognise the pattern. Classic consulting is paid by effort. The economically rational state for the provider is a client who permanently needs support. Knowledge transfer in this model is a side deliverable — if in doubt, a revenue-damaging one. The consequences are on display throughout enterprise environments:",
      },
      {
        type: "list",
        items: [
          "**Systems nobody in-house can explain.** The architecture decisions live in the heads of former project staff of external partners.",
          "**Permanent mandates for operational tasks** that could long be internal routine — a silent cost position never questioned again.",
          "**Strategic vulnerability:** Those who do not understand their own AI landscape cannot evaluate follow-up offers or examine alternatives. The provider becomes de facto unfireable.",
          "**Stagnating internal teams** that sit next to external experts for years without ever being handed responsibility — the most expensive form of demotivation.",
        ],
      },
      {
        type: "p",
        text: "For AI initiatives this pattern is especially fatal, because AI systems are not projects but living systems: they drift, they need ongoing evaluation, they must be adapted to changing data and regulation. A model in which operational capability sits externally produces permanent dependency — by design.",
      },
      { type: "h2", text: "The inverted model: embedded instead of parallel" },
      {
        type: "p",
        text: "The alternative is not renouncing external expertise. Organisations bringing complex AI systems into enterprise operation for the first time need experience they cannot yet have internally. The question is not whether external, but how. The embedded engineering model — established in industry under the term **Forward Deployed Engineers** — answers this question structurally differently:",
      },
      { type: "h3", text: "1. Work inside the initiatives, not beside them" },
      {
        type: "p",
        text: "Embedded engineers work within the organisation's running initiatives — in the same backlog, in the same reviews, with delivery responsibility. No lab, no parallel organisation, no report without delivery. Those who build alongside cannot withhold knowledge; it emerges in the shared working context.",
      },
      { type: "h3", text: "2. Tandem principle instead of expert enclave" },
      {
        type: "p",
        text: "Every external role is paired with internal staff who progressively take over responsibility. Capability transfer is not an accompanying programme but the working mode — documented, verifiable, with defined handover points.",
      },
      { type: "h3", text: "3. Success criterion: your own obsolescence" },
      {
        type: "p",
        text: "The engagement has an explicit target picture: at the end, the organisation has validated internal experts, documented governance structures and a use-case pipeline it can prioritise and evolve independently. Success is not measured in follow-up days sold, but in what the organisation can do without the partner.",
      },
      { type: "h3", text: "4. Time-boxed by design" },
      {
        type: "p",
        text: "Embedded engagements are conceived as a transitional state from the start — months, not years. The time limit is not a contract detail; it is the mechanism that keeps incentives clean: a model that is supposed to end must transfer capability to succeed.",
      },
      { type: "h2", text: "Executional Learning: education and execution are inseparable" },
      {
        type: "p",
        text: "Behind the model stands a principle we call **Executional Learning**: the separation between training (knowledge without execution) and consulting (execution without knowledge transfer) is the structural problem of both industries. Capability that stays emerges only where learning and delivering are the same act. The decisive question for any offer — training catalogue or transformation mandate — is:",
      },
      {
        type: "quote",
        text: "What can our organisation do independently after this engagement that it could not do before — and how is that measured?",
      },
      {
        type: "p",
        text: "A partner without a precise answer to this question sells dependency. A partner who answers it with defined capability outcomes, handover points and an end date sells sovereignty.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Technological sovereignty is not a state — it is a capability. And capability cannot be rented permanently, only built. The consulting model of the past twenty years has the wrong incentive structure for the AI era. Organisations that recognise this set a new requirement for their external partners: make yourselves obsolete — verifiably.",
      },
    ],
  },
];

export const ARTICLES: Record<"de" | "en", Article[]> = { de, en };

export function getArticle(lang: "de" | "en", slug: string): Article | undefined {
  return ARTICLES[lang].find((a) => a.slug === slug);
}

// Key-Visuals der Publikationen (KI-generiert, Brand-Farbwelt Dark/Gold).
// a.png dient zugleich als Hero-Hintergrund der Startseite.
export const ARTICLE_IMAGES: Record<string, { src: string; alt: string }> = {
  "poc-to-production-gap": {
    src: "/d.png",
    alt: "Fragmentierte Wireframe-Struktur, die in eine präzise goldene Brückenkonstruktion übergeht — Metapher für den Weg vom Prototyp in die Produktion",
  },
  "vendor-lock-in-sovereignty": {
    src: "/c.png",
    alt: "Goldener Schachkönig zwischen gläsernen Bauern auf dunkler Fläche — Metapher für strategische Kontrolle und Unabhängigkeit",
  },
  "ai-judgment-gap": {
    src: "/e.png",
    alt: "Abstraktes goldenes Netzwerk-Gitter auf dunklem Grund — Visualisierung von KI-Infrastruktur",
  },
  "eu-ai-act-governance": {
    src: "/b.png",
    alt: "Goldener Pfad durch eine geordnete labyrinthartige Struktur — Metapher für Navigation durch Regulierung",
  },
  "embedded-engineering": {
    src: "/a.png",
    alt: "Führungskräfte im Gespräch vor einem dunklen Display mit goldenen Datenvisualisierungen in einem Wiener Büro",
  },
};
