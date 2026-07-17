"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Lightbulb,
  Cog,
  Users,
  Flag,
  Search,
  BookOpen,
  Rocket,
  MessageCircle,
  TrendingUp,
  Database,
  Brain,
  Laptop,
  LineChart,
  Scale,
  Target,
  Briefcase,
  Code2,
  UserCheck,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Presentation,
  BarChart3,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

/* ── Shared bits ─────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-cetl-gold shrink-0 mt-0.5"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="2 8 6 12 14 4" />
    </svg>
  );
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 text-cetl-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 2v12M2 8h12" />
    </svg>
  );
}

function StepNode({ n, icon: Icon, title }: { n: number; icon: React.ElementType; title: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="text-cetl-gold/60 text-xs font-semibold tracking-widest">{n}</span>
      <div className="w-20 h-20 rounded-full border border-cetl-border bg-cetl-surface flex items-center justify-center shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-cetl-gold)_10%,transparent)]">
        <Icon className="w-7 h-7 text-cetl-gold" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <span className="font-display text-sm font-bold text-cetl-text">{title}</span>
    </div>
  );
}

/** Numbered node row with a thin connecting line — used for the 4/5/6/7-step diagrams. */
function StepFlow({
  steps,
  wrapClass = "flex flex-wrap justify-center gap-x-2 gap-y-10",
}: {
  steps: { icon: React.ElementType; title: string }[];
  wrapClass?: string;
}) {
  return (
    <div className={`relative ${wrapClass}`}>
      {steps.map((s, i) => (
        <div key={s.title} className="flex items-center">
          <StepNode n={i + 1} icon={s.icon} title={s.title} />
          {i < steps.length - 1 && (
            <div className="hidden md:block w-10 lg:w-14 h-px bg-gradient-to-r from-cetl-gold/40 via-cetl-border to-cetl-gold/40 mx-1 -translate-y-6" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Content data ────────────────────────────────────────────── */

const CYCLE_STEPS = [
  { icon: Lightbulb, title: "Verstehen" },
  { icon: Cog, title: "Anwenden" },
  { icon: Users, title: "Übertragen" },
  { icon: Flag, title: "Umsetzen" },
];

const CYCLE_DETAILS = [
  {
    n: "1",
    title: "Verstehen",
    text: "Die Teilnehmenden lernen, wie Daten, künstliche Intelligenz und moderne Automatisierung funktionieren. Sie können Potenziale, Grenzen und Risiken realistisch einordnen.",
  },
  {
    n: "2",
    title: "Anwenden",
    text: "Unternehmenseigene Werkzeuge, Prozesse und Standards werden direkt in das Programm integriert. Die Teilnehmenden erproben KI anhand typischer Aufgaben aus ihrem Arbeitsalltag.",
  },
  {
    n: "3",
    title: "Übertragen",
    text: "Praxisbeispiele aus unterschiedlichen Unternehmensbereichen und Branchen eröffnen neue Perspektiven. Erfolgreiche Muster werden auf die eigene Organisation übertragen.",
  },
  {
    n: "4",
    title: "Umsetzen",
    text: "Jede Lernreise ist mit einem konkreten Anwendungsfall verbunden. Aus ersten Ideen entstehen strukturierte Use Cases, Prototypen, Business Cases oder Umsetzungsroadmaps.",
  },
];

const PROGRAM_OUTCOMES = [
  "ein gemeinsames Verständnis von Daten, KI und Automatisierung",
  "einen sicheren und verantwortungsvollen Umgang mit KI",
  "produktive Anwendungen für den Arbeitsalltag",
  "konkrete Use Cases mit nachvollziehbarem Nutzen",
  "interne Multiplikator:innen und KI-Expert:innen",
  "eine tragfähige Grundlage für die Skalierung von KI",
];

const FOUNDATION_MODULES = [
  {
    n: "01",
    icon: Database,
    title: "Daten verstehen und nutzen",
    text: "Grundlegendes Verständnis für Datenstrukturen, Datenqualität und datenbasierte Entscheidungen.",
    items: [
      "Datentypen, Datenquellen und Datenarchitekturen",
      "Datenqualität, Governance und Verantwortlichkeiten",
      "Data Value Chain und analytisches Denken",
      "Visualisierung und Storytelling mit Daten",
      "Identifikation relevanter Daten für eigene Anwendungsfälle",
    ],
  },
  {
    n: "02",
    icon: Brain,
    title: "Wie künstliche Intelligenz funktioniert",
    text: "Technologische Grundlagen, verständlich und ohne unnötige technische Komplexität.",
    items: [
      "Grundlagen von Machine Learning und generativer KI",
      "Funktionsweise von Large Language Models",
      "Chancen, Grenzen und typische Fehlerquellen",
      "Halluzinationen, Bias und Verlässlichkeit",
      "Einordnung unterschiedlicher KI-Technologien",
    ],
  },
  {
    n: "03",
    icon: Laptop,
    title: "KI im Arbeitsalltag",
    text: "KI-Werkzeuge sicher und produktiv einsetzen.",
    items: [
      "Recherchieren, strukturieren und zusammenfassen",
      "Texte, Präsentationen und Analysen erstellen",
      "Effektives Prompting und Qualitätskontrolle",
      "KI-gestützte Arbeitsabläufe entwickeln",
      "Einsatz unternehmenseigener KI- und Copilot-Lösungen",
    ],
  },
  {
    n: "04",
    icon: LineChart,
    title: "Machine Learning und Data Science",
    text: "Praxisnahes Verständnis für analytische und prognostische KI-Anwendungen.",
    items: [
      "Grundlegende Machine-Learning-Methoden",
      "Predictive Analytics und generative KI",
      "Data-Science-Workflows und Modelllogik",
      "Machbarkeits- und Datenchecks",
      "Anwendungsfälle für Prognosen, Klassifikation und Anomalieerkennung",
    ],
  },
  {
    n: "05",
    icon: Scale,
    title: "Prozesse, Governance und Verantwortung",
    text: "KI muss nicht nur funktionieren, sondern auch sicher und verantwortungsvoll eingesetzt werden.",
    items: [
      "Prozessanalyse, Digitalisierung und Automatisierung",
      "Datenschutz und Informationssicherheit",
      "EU AI Act und regulatorische Anforderungen",
      "Responsible AI und vertrauenswürdige KI",
      "Rollen, Verantwortlichkeiten und Freigabeprozesse",
    ],
  },
  {
    n: "06",
    icon: Target,
    title: "Vom Use Case zum Business Case",
    text: "Aus einer Idee wird ein bewertbarer und umsetzbarer Anwendungsfall.",
    items: [
      "KI-Potenziale systematisch identifizieren",
      "Use Cases strukturieren und priorisieren",
      "Nutzen, Aufwand und Risiken bewerten",
      "KPIs und Erfolgskriterien definieren",
      "Business Cases und Entscheidungsvorlagen entwickeln",
      "Ergebnisse überzeugend präsentieren",
    ],
  },
];

const ROLE_JOURNEYS = [
  {
    icon: UserCheck,
    role: "KI-Anwender:innen",
    subtitle: "KI im Arbeitsalltag sicher und produktiv einsetzen",
    audience:
      "Mitarbeitende aus Fachbereichen, Administration, Vertrieb, Finance, HR, Operations und Support.",
    focus: [
      "KI-Produktivität im Arbeitsalltag",
      "Prompting und Qualitätskontrolle",
      "KI-gestützte Fachbereichsworkflows",
      "Datenschutz und verantwortungsvolle Nutzung",
      "persönliche Automatisierungen",
      "gemeinsame Standards und Best Practices",
    ],
    project:
      "Entwicklung eines eigenen KI-gestützten Workflows mit direktem Nutzen für den persönlichen Arbeitsbereich.",
  },
  {
    icon: MessageCircle,
    role: "KI-Champions und KI-Enthusiast:innen",
    subtitle: "Potenziale erkennen und Umsetzung im Fachbereich vorantreiben",
    audience:
      "Multiplikator:innen, Innovationstreiber:innen und erste Ansprechpartner:innen für KI innerhalb eines Unternehmensbereichs.",
    focus: [
      "Use-Case-Design und Priorisierung",
      "Prozessanalyse und KI-Readiness",
      "Automatisierung und Prozessneugestaltung",
      "Entwicklung einfacher Agenten und Assistenten",
      "Change, Adoption und Stakeholder-Management",
      "Business Cases und Pilotplanung",
    ],
    project:
      "Aufbau eines priorisierten KI-Use-Case-Portfolios für einen Unternehmensbereich einschließlich Pilotvorschlag und Umsetzungspfad.",
  },
  {
    icon: Code2,
    role: "Interne KI-Entwickler:innen",
    subtitle: "Technische Lösungen entwickeln und in den Betrieb überführen",
    audience:
      "Data Scientists, Data Engineers, Softwareentwickler:innen, IT-Architekt:innen und technische Spezialist:innen.",
    focus: [
      "Datenarchitekturen und Engineering",
      "Datenmodellierung und Datenpipelines",
      "Machine Learning und Advanced Analytics",
      "Large Language Models und Retrieval-Augmented Generation",
      "Vektordatenbanken und Embeddings",
      "MLOps, LLMOps und Monitoring",
      "Übergabe von Prototypen in den Betrieb",
    ],
    project: "Erarbeitung eines technischen Solution Blueprints für einen priorisierten KI-Anwendungsfall.",
  },
  {
    icon: Briefcase,
    role: "KI-Leadership",
    subtitle: "KI strategisch steuern und Unternehmenswert realisieren",
    audience: "Geschäftsführung, Bereichsleitungen, Führungskräfte und Sponsor:innen von KI-Initiativen.",
    focus: [
      "KI-Strategie und Zielbild",
      "Markt- und Technologiedynamik",
      "Governance, Risiko und Responsible AI",
      "Business Cases, ROI und Wertrealisierung",
      "Investitions- und Portfoliosteuerung",
      "Operating Model und Verantwortlichkeiten",
      "Change und Transformationsroadmap",
    ],
    project:
      "Entwicklung eines priorisierten KI-Portfolios einschließlich Investitionsentscheidungen, Governance und Transformationsroadmap.",
  },
];

const USE_CASE_STEPS = [
  { icon: AlertTriangle, title: "Problem identifizieren" },
  { icon: BarChart3, title: "Daten & Prozesse analysieren" },
  { icon: Lightbulb, title: "Nutzenhypothese formulieren" },
  { icon: FileCheck, title: "Machbarkeit prüfen" },
  { icon: ShieldCheck, title: "Risiken bewerten" },
  { icon: Presentation, title: "Business Case ausarbeiten" },
  { icon: TrendingUp, title: "Ergebnisse präsentieren" },
];

const CUSTOMIZATION = [
  {
    title: "Tools und Plattformen",
    items: [
      "unternehmenseigene KI-Assistenten",
      "Microsoft 365 Copilot",
      "Copilot Studio und Power Platform",
      "Azure, Databricks oder vergleichbare Datenplattformen",
      "interne Wissensdatenbanken und Lernplattformen",
    ],
  },
  {
    title: "Fachbereiche und Anwendungsfelder",
    items: [
      "Vertrieb und Kundenservice",
      "Finance und Controlling",
      "Human Resources",
      "Marketing und Kommunikation",
      "Produktion und Logistik",
      "Einkauf und Supply Chain",
      "Recht, Compliance und Risikomanagement",
      "IT, Datenmanagement und Innovation",
    ],
  },
  {
    title: "Strategische Zukunftsthemen",
    items: [
      "KI-Agenten und agentische Systeme",
      "Prozessautomatisierung",
      "Data und AI Security",
      "Responsible AI",
      "Advanced Analytics",
      "digitale Geschäftsmodelle",
      "zukünftige Technologieentwicklungen",
    ],
  },
];

const PROCESS_STEPS = [
  { icon: Search, title: "Analyse & Zielbild" },
  { icon: BookOpen, title: "Curriculum & Lernpfade" },
  { icon: Rocket, title: "Pilotierung" },
  { icon: MessageCircle, title: "Umsetzung & Begleitung" },
  { icon: TrendingUp, title: "Skalierung" },
];

const BENEFITS = [
  {
    title: "Gemeinsame Orientierung",
    text: "Mitarbeitende und Führungskräfte entwickeln ein einheitliches Verständnis von Daten, KI, Chancen und Verantwortlichkeiten.",
  },
  {
    title: "Produktive KI-Nutzung",
    text: "KI-Werkzeuge werden nicht nur vorgestellt, sondern in konkrete Arbeitsabläufe integriert.",
  },
  {
    title: "Priorisierte Use Cases",
    text: "Ideen werden anhand von Nutzen, Machbarkeit, Risiko und Skalierbarkeit systematisch bewertet.",
  },
  {
    title: "Interne Kompetenzen",
    text: "Das Unternehmen baut Multiplikator:innen, KI-Champions, technische Expert:innen und entscheidungsfähige Führungsteams auf.",
  },
  {
    title: "Verantwortungsvolle Umsetzung",
    text: "Governance, Datenschutz, Sicherheit und regulatorische Anforderungen werden von Beginn an berücksichtigt.",
  },
  {
    title: "Messbarer Transfer",
    text: "Das Programm erzeugt konkrete Ergebnisse wie Workflows, Use-Case-Portfolios, Business Cases, Prototypen und Roadmaps.",
  },
];

const FORMATS = [
  "kompaktes Foundation Program",
  "mehrstufige Learning Journey",
  "rollenspezifische Intensivprogramme",
  "Executive Workshops",
  "Train-the-Trainer-Programme",
  "Use-Case-Sprints",
  "technische Bootcamps",
  "begleitete Pilotprojekte",
  "unternehmensweite KI-Akademie",
];

const FAQ_ITEMS = [
  {
    q: "Für welche Unternehmen eignet sich das Programm?",
    a: "Das Programm eignet sich für Unternehmen und Organisationen, die KI strukturiert einführen, bestehende Initiativen skalieren oder ihre Mitarbeitenden gezielt für den Einsatz von KI befähigen möchten.",
  },
  {
    q: "Müssen bereits KI-Werkzeuge vorhanden sein?",
    a: "Nein. Das Programm kann sowohl die Einführung neuer Werkzeuge begleiten als auch bestehende Systeme und Lernangebote integrieren.",
  },
  {
    q: "Benötigen die Teilnehmenden technische Vorkenntnisse?",
    a: "Für das Foundation Program und den Lernpfad für KI-Anwender:innen sind keine technischen Vorkenntnisse erforderlich. Technische Inhalte werden in einem eigenen Lernpfad vertieft.",
  },
  {
    q: "Können unternehmenseigene Anwendungsfälle eingebracht werden?",
    a: "Ja. Reale Aufgaben und Use Cases aus dem Unternehmen bilden einen zentralen Bestandteil des Programms.",
  },
  {
    q: "Wird das Programm an interne Richtlinien angepasst?",
    a: "Ja. Governance, Datenschutz, Sicherheitsanforderungen, bestehende Freigabeprozesse und interne Standards werden in das Curriculum integriert.",
  },
  {
    q: "Wie wird der Lernerfolg sichtbar?",
    a: "Der Erfolg wird nicht nur über Teilnahme und Wissenschecks beurteilt. Je nach Programm entstehen konkrete Arbeitsergebnisse wie KI-Workflows, Use-Case-Portfolios, Business Cases, Prototypen und Umsetzungsroadmaps.",
  },
];

/* ── Page ────────────────────────────────────────────────────── */

export function KiKompetenzprogrammView() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <NavBar />
      <main className="bg-cetl-dark">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] rounded-full bg-cetl-blue/[0.08] blur-[160px]" />
          <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-cetl-violet/[0.07] blur-[160px]" />
        </div>
        <Container className="relative z-10 max-w-4xl text-center flex flex-col items-center">
          <Badge variant="blue" className="mb-6">
            Unternehmensprogramm
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cetl-text leading-[1.1] tracking-tight mb-6">
            KI-Kompetenzprogramm für Unternehmen
          </h1>
          <p className="text-cetl-gold text-lg md:text-xl font-display italic mb-6">
            KI verstehen. Sicher anwenden. Wirksam umsetzen.
          </p>
          <p className="text-cetl-text-muted text-lg leading-relaxed max-w-2xl mb-4">
            Künstliche Intelligenz verändert Arbeitsprozesse, Entscheidungen und Geschäftsmodelle. Der
            entscheidende Erfolgsfaktor ist jedoch nicht allein die Technologie, sondern die Fähigkeit
            einer Organisation, sie sinnvoll, verantwortungsvoll und produktiv einzusetzen.
          </p>
          <p className="text-cetl-text-muted text-lg leading-relaxed max-w-2xl mb-8">
            Unser KI-Kompetenzprogramm verbindet fundierten Wissensaufbau mit praktischer Anwendung.
            Mitarbeitende, Fachverantwortliche, technische Expert:innen und Führungskräfte entwickeln
            genau jene Kompetenzen, die sie für ihre jeweilige Rolle benötigen, von Beginn an mit
            konkreten Anwendungsfällen aus ihrem Unternehmen.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["Praxisnah", "Rollenbasiert", "Unternehmensspezifisch", "Umsetzungsorientiert"].map((tag) => (
              <Badge key={tag} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
          <MagneticButton
            href="/#contact"
            className="relative px-9 py-4 bg-cetl-blue text-white font-semibold tracking-wide text-center overflow-hidden group block shadow-[0_4px_24px_-8px_color-mix(in_srgb,var(--color-cetl-blue)_40%,transparent)]"
          >
            <span className="relative z-10">Unverbindliches Erstgespräch vereinbaren</span>
            <span className="absolute inset-0 bg-cetl-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Von Einzeltrainings zum integrierten Programm ── */}
      <section className="py-24 lg:py-32">
        <Container className="max-w-4xl">
          <SectionHeader
            label="Ausgangslage"
            title="Von einzelnen Schulungen zum integrierten Befähigungsprogramm"
            className="mb-10"
          />
          <p className="text-cetl-text-muted leading-relaxed mb-4">
            Viele Unternehmen verfügen bereits über erste KI-Tools, interne Lernangebote oder
            Pilotprojekte. Häufig fehlt jedoch ein gemeinsamer Rahmen, der Wissen, Anwendung, Governance
            und konkrete Umsetzung miteinander verbindet.
          </p>
          <p className="text-cetl-text-muted leading-relaxed mb-10">
            Das KI-Kompetenzprogramm führt bestehende Initiativen zu einem durchgängigen
            Befähigungssystem zusammen. Es integriert digitale Selbstlernangebote, Live-Trainings,
            rollenspezifische Vertiefungen und begleitete Praxisprojekte. So entsteht nicht nur Wissen
            über künstliche Intelligenz, sondern konkrete Arbeitsabläufe, priorisierte Use Cases,
            Business Cases, technische Lösungskonzepte und organisationale Kompetenzen.
          </p>
          <div className="rounded-2xl border border-cetl-border bg-cetl-surface p-8">
            <p className="text-cetl-text font-semibold text-sm tracking-widest uppercase mb-5">
              Das Programm schafft
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {PROGRAM_OUTCOMES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckIcon />
                  <span className="text-cetl-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Key visual: strategische Weitsicht ── */}
      <Container>
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden ring-1 ring-cetl-border mb-24">
          <Image
            src="/chess-queen.jpg"
            alt="Schachdame im warmen Licht, Sinnbild für strategische Weitsicht und Entscheidungskompetenz"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cetl-darker/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-6 right-6 text-white/85 font-display text-lg md:text-xl italic max-w-xl">
            Strategische Weitsicht entsteht nicht durch Zuschauen, sondern durch Zug um Zug lernen, wie das Spiel funktioniert.
          </p>
        </div>
      </Container>

      <GoldDivider />

      {/* ── Executional Learning cycle ── */}
      <section className="py-24 lg:py-32 bg-cetl-surface">
        <Container>
          <SectionHeader
            label="Methodik"
            title="Lernen, anwenden und umsetzen"
            subtitle="Unser Ansatz folgt dem Prinzip des Executional Learning. Wissen wird nicht isoliert vermittelt, sondern unmittelbar mit realen Aufgaben und Herausforderungen des Unternehmens verbunden."
            className="mb-16"
          />
          <StepFlow steps={CYCLE_STEPS} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {CYCLE_DETAILS.map((step) => (
              <div key={step.n} className="flex gap-4">
                <span className="font-display text-3xl font-bold text-cetl-gold/30 leading-none shrink-0">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-cetl-text mb-1.5">{step.title}</h3>
                  <p className="text-cetl-text-muted text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Foundation Program ── */}
      <section id="foundation" className="py-24 lg:py-32">
        <Container>
          <SectionHeader
            label="Das Foundation Program"
            title="Das gemeinsame Fundament für Daten- und KI-Kompetenz"
            subtitle="Das Foundation Program schafft eine gemeinsame Sprache innerhalb des Unternehmens. Es vermittelt die zentralen Grundlagen und bereitet die Teilnehmenden auf rollenspezifische Vertiefungen vor. Bestehende Lernplattformen, interne Richtlinien und bereits eingesetzte KI-Werkzeuge können als Vorbereitung, Vertiefung und Follow-up eingebunden werden."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDATION_MODULES.map((mod) => (
              <TiltCard
                key={mod.n}
                className="gradient-edge relative flex flex-col bg-cetl-surface rounded-2xl border border-cetl-border p-7"
              >
                <span className="font-display text-6xl font-bold text-cetl-gold/[0.08] absolute top-5 right-6 leading-none select-none">
                  {mod.n}
                </span>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cetl-gold/20 to-cetl-violet/10 border border-cetl-gold/25 flex items-center justify-center mb-4">
                  <mod.icon className="w-5 h-5 text-cetl-gold" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-cetl-text mb-2 leading-snug">
                  {mod.title}
                </h3>
                <p className="text-cetl-text-muted text-sm leading-relaxed mb-5">{mod.text}</p>
                <ul className="mt-auto flex flex-col gap-2.5">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs">
                      <CheckIcon />
                      <span className="text-cetl-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Role-based Learning Journeys ── */}
      <section id="journeys" className="py-24 lg:py-32 bg-cetl-surface">
        <Container>
          <SectionHeader
            label="Rollenbasierte Learning Journeys"
            title="Die richtigen Kompetenzen für jede Rolle"
            subtitle="Nicht alle Mitarbeitenden benötigen dieselben Kompetenzen. Deshalb wird das Programm entlang klar definierter Rollen aufgebaut."
            className="mb-16"
          />

          {/* Org-chart style overview */}
          <div className="hidden md:flex flex-col items-center mb-16">
            <div className="w-14 h-14 rounded-full border border-cetl-gold/40 bg-cetl-dark flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-cetl-gold" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="w-px h-8 bg-cetl-border" />
            <div className="w-full h-px bg-cetl-border mb-8" style={{ maxWidth: "72%" }} />
            <div className="grid grid-cols-4 gap-6 w-full max-w-4xl">
              {ROLE_JOURNEYS.map((journey) => (
                <div key={journey.role} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-11 h-11 rounded-full border border-cetl-border bg-cetl-dark flex items-center justify-center">
                    <journey.icon className="w-5 h-5 text-cetl-gold" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-cetl-text-muted text-xs font-medium leading-tight">
                    {journey.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ROLE_JOURNEYS.map((journey) => (
              <TiltCard
                key={journey.role}
                className="gradient-edge relative flex flex-col bg-cetl-dark rounded-2xl border border-cetl-border p-8"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cetl-gold/20 to-cetl-violet/10 border border-cetl-gold/25 flex items-center justify-center mb-4">
                  <journey.icon className="w-5 h-5 text-cetl-gold" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-cetl-text mb-1.5">{journey.role}</h3>
                <p className="text-cetl-gold text-sm font-medium mb-3">{journey.subtitle}</p>
                <p className="text-cetl-text-muted text-sm leading-relaxed mb-5">{journey.audience}</p>
                <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-3">
                  Schwerpunkte
                </p>
                <ul className="flex flex-col gap-2 mb-6">
                  {journey.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon />
                      <span className="text-cetl-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5 border-t border-cetl-border">
                  <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-2">
                    Praxisprojekt
                  </p>
                  <p className="text-cetl-text-muted text-sm leading-relaxed">{journey.project}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Use Case cycle ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeader
            label="Reale Use Cases als roter Faden"
            title="Vom Use Case zur Umsetzung"
            subtitle="Jede Teilnehmerin und jeder Teilnehmer arbeitet während des Programms an einem eigenen Anwendungsfall aus dem Unternehmen. Die Teilnehmenden erhalten dabei methodische Unterstützung durch Trainer:innen und Fachexpert:innen."
            className="mb-16"
          />
          <StepFlow steps={USE_CASE_STEPS} wrapClass="flex flex-wrap justify-center gap-x-1 gap-y-10" />
          <div className="mt-16 rounded-2xl border border-cetl-border bg-cetl-surface p-8 max-w-2xl mx-auto text-center">
            <p className="text-cetl-gold text-xs font-semibold tracking-widest uppercase mb-3">
              Cross-Industry Learning
            </p>
            <p className="text-cetl-text-muted text-sm leading-relaxed">
              Ergänzend zu den unternehmenseigenen Aufgaben werden ausgewählte Anwendungsfälle aus
              anderen Branchen bearbeitet. Dadurch erkennen die Teilnehmenden übertragbare Muster, neue
              Lösungsansätze und mögliche Synergien.
            </p>
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Customization ── */}
      <section className="py-24 lg:py-32 bg-cetl-surface">
        <Container>
          <SectionHeader
            label="Individuell auf Ihr Unternehmen abgestimmt"
            title="Mögliche Anpassungsbereiche"
            subtitle="Das Programm wird auf die strategischen Ziele, den technologischen Reifegrad und die bestehenden Systeme des Unternehmens zugeschnitten."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMIZATION.map((group) => (
              <div key={group.title} className="rounded-2xl border border-cetl-border bg-cetl-dark p-7">
                <h3 className="font-display text-base font-bold text-cetl-text mb-5">{group.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon />
                      <span className="text-cetl-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Process ── */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeader
            label="Vom Impuls zur Wirkung"
            title="So entsteht Ihr KI-Kompetenzprogramm"
            subtitle="Von der Analyse bis zur Skalierung."
            className="mb-16"
          />
          <StepFlow steps={PROCESS_STEPS} />
        </Container>
      </section>

      <GoldDivider />

      {/* ── Benefits ── */}
      <section className="py-24 lg:py-32 bg-cetl-surface">
        <Container>
          <SectionHeader label="Der Nutzen" title="Was Ihr Unternehmen gewinnt" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-cetl-border bg-cetl-dark p-7">
                <h3 className="font-display text-base font-bold text-cetl-gold mb-2">{benefit.title}</h3>
                <p className="text-cetl-text-muted text-sm leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── Formats & Faculty ── */}
      <section className="py-24 lg:py-32">
        <Container className="max-w-4xl">
          <SectionHeader
            label="Flexible Programmgestaltung"
            title="Umfang, Dauer und Format nach Bedarf"
            subtitle="Das KI-Kompetenzprogramm ist modular aufgebaut. Umfang, Dauer und Kombination der Lernpfade richten sich nach dem Reifegrad und den Zielen des Unternehmens. Die Durchführung ist in Präsenz, online oder in einem hybriden Format möglich."
            className="mb-10"
          />
          <div className="flex flex-wrap gap-2.5 mb-16">
            {FORMATS.map((format) => (
              <Badge key={format} variant="muted">
                {format}
              </Badge>
            ))}
          </div>

          <div className="rounded-2xl border border-cetl-border bg-cetl-surface p-8">
            <p className="text-cetl-gold text-xs font-semibold tracking-widest uppercase mb-3">
              Faculty und Expert:innen
            </p>
            <p className="text-cetl-text-muted text-sm leading-relaxed">
              Für jedes Programm wird ein passender Pool aus Trainer:innen, Wissenschaftler:innen,
              Technologieexpert:innen und Praktiker:innen zusammengestellt. Die Auswahl orientiert sich
              an den jeweiligen Modulen, Zielgruppen, Technologien und Anwendungsfällen. Die
              Teilnehmenden erhalten so nicht nur theoretisches Wissen, sondern unterschiedliche
              Perspektiven aus Forschung, Wirtschaft und konkreter Umsetzungspraxis.
            </p>
          </div>
        </Container>
      </section>

      <GoldDivider />

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32 bg-cetl-surface">
        <Container className="max-w-4xl">
          <SectionHeader label="Häufige Fragen" title="Was Unternehmen wissen möchten" className="mb-12" />
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className="rounded-xl border border-cetl-border bg-cetl-dark overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-cetl-text font-semibold text-sm md:text-base">{item.q}</span>
                    <PlusIcon open={open} />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-cetl-text-muted text-sm leading-relaxed px-6 pb-5">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 lg:py-32">
        <Container className="max-w-2xl text-center flex flex-col items-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cetl-text leading-tight mb-5">
            KI-Kompetenz, die im Unternehmen wirksam wird
          </h2>
          <p className="text-cetl-text-muted leading-relaxed mb-10">
            Ein erfolgreiches KI-Programm endet nicht mit dem letzten Trainingstag. Es schafft die
            Voraussetzungen dafür, dass Menschen KI sicher einsetzen, Potenziale eigenständig erkennen
            und gemeinsam in die Umsetzung bringen. Wir verbinden Lernen, Anwendung und Umsetzung zu
            einem integrierten Befähigungssystem für Ihr Unternehmen.
          </p>
          <MagneticButton
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-cetl-gold text-cetl-darker font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              KI-Kompetenzprogramm besprechen
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cetl-gold-light to-cetl-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
        </Container>
      </section>
      </main>
      <Footer />
    </>
  );
}
