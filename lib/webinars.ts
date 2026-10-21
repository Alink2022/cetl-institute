import type { Lang } from "@/lib/i18n";

type L10n = { de: string; en: string };

export interface WebinarPerson {
  id: string;
  name: string;
  role: L10n;
  bio: L10n;
  photo: string;
}

export interface Webinar {
  slug: string;
  startISO: string;
  endISO: string;
  title: string;
  platform: string;
  /** Sprache des Webinars, ISO 639-1 */
  language: "en" | "de";
  /** Link zum LinkedIn-Live-Event. Solange leer, führt der Button zur Erinnerungs-Anfrage. */
  linkedinUrl: string;
  ics: string;
  speaker: WebinarPerson;
  moderator: WebinarPerson;
  copy: Record<Lang, {
    kicker: string;
    abstract: string[];
    topicsTitle: string;
    topics: { title: string; text: string }[];
    short: string;
  }>;
}

const MARIO: WebinarPerson = {
  id: "mario",
  name: "Mario Meir-Huber",
  role: { de: "Experte für AI Transformation, CETL", en: "Expert for AI transformation, CETL" },
  bio: {
    de: "Daten- und KI-Experte aus Wien und Autor von „Designing Data Products“. Er baut seit über 20 Jahren Daten- und KI-Plattformen für Unternehmen.",
    en: "Data and AI expert from Vienna and author of “Designing Data Products”. He has built data and AI platforms for enterprises for more than 20 years.",
  },
  photo: "/team-mario.jpg",
};

const IVO: WebinarPerson = {
  id: "ivo",
  name: "Karl Ivo Sokolov",
  role: { de: "Co-Founder & Cross-Business Expert, CETL", en: "Co-founder & cross-business expert, CETL" },
  bio: {
    de: "Moderiert das Gespräch und bringt die Fragen aus der Praxis der Unternehmen mit.",
    en: "Moderates the conversation and brings the questions from enterprise practice.",
  },
  photo: "/team-ivo-v2.png",
};

export const WEBINARS: Webinar[] = [
  {
    slug: "software-factories",
    startISO: "2026-11-05T16:00:00+01:00",
    endISO: "2026-11-05T17:00:00+01:00",
    title: "Software Factories: What Comes After Vibe Coding",
    platform: "LinkedIn Live",
    language: "en",
    linkedinUrl: "",
    ics: "/webinar-software-factories-2026-11-05.ics",
    speaker: MARIO,
    moderator: IVO,
    copy: {
      en: {
        kicker: "CETL Webinar · LinkedIn Live",
        abstract: [
          "AI has made producing code cheap, and the industry is discovering that producing code was never the expensive part. Anyone can prompt their way to a working demo now, and most teams are stuck on everything after that: the tests, the reviews, the security gates and a release process they can trust.",
          "In this CETL webinar, expert AI author Mario Meir-Huber shows how a Software Factory wraps AI-assisted development in a proper SDLC, so the speed you gain from AI ends up in production rather than in a folder of prototypes.",
        ],
        topicsTitle: "What it is about",
        topics: [
          { title: "From demo to production", text: "Why a working prototype is where the real work starts." },
          { title: "Tests and reviews", text: "How quality keeps up when code is generated at speed." },
          { title: "Security gates", text: "Controls that run in the pipeline, not after the incident." },
          { title: "A release process you can trust", text: "A Software Factory around AI-assisted development." },
        ],
        short: "How a Software Factory turns AI speed into software in production.",
      },
      de: {
        kicker: "CETL Webinar · LinkedIn Live",
        abstract: [
          "KI hat das Schreiben von Code billig gemacht, und die Branche merkt gerade, dass Code zu schreiben nie der teure Teil war. Einen funktionierenden Demo-Prototypen bekommt heute jeder per Prompt. Die meisten Teams scheitern an allem danach: an Tests, Reviews, Sicherheits-Gates und einem Release-Prozess, dem man vertrauen kann.",
          "In diesem CETL Webinar zeigt der KI-Autor und Experte Mario Meir-Huber, wie eine Software Factory KI-gestützte Entwicklung in einen sauberen Entwicklungsprozess (SDLC) einbettet. So landet der Geschwindigkeitsgewinn durch KI in Produktion und nicht in einem Ordner voller Prototypen.",
        ],
        topicsTitle: "Worum es geht",
        topics: [
          { title: "Von der Demo in die Produktion", text: "Warum mit dem funktionierenden Prototyp die eigentliche Arbeit beginnt." },
          { title: "Tests und Reviews", text: "Wie die Qualität mithält, wenn Code in hohem Tempo entsteht." },
          { title: "Sicherheits-Gates", text: "Kontrollen, die in der Pipeline laufen und nicht erst nach dem Vorfall." },
          { title: "Ein Release-Prozess mit Vertrauen", text: "Eine Software Factory rund um KI-gestützte Entwicklung." },
        ],
        short: "Wie eine Software Factory KI-Tempo in Software in Produktion verwandelt.",
      },
    },
  },
];

export function getWebinar(slug: string) {
  return WEBINARS.find((w) => w.slug === slug);
}

/** Das nächste Webinar, das noch nicht zu Ende ist. */
export function nextWebinar(now = new Date()) {
  return [...WEBINARS].sort((a, b) => a.startISO.localeCompare(b.startISO)).find((w) => new Date(w.endISO) > now);
}

const TZ = "Europe/Vienna";

export function webinarWhen(w: Webinar, lang: Lang) {
  const loc = lang === "de" ? "de-AT" : "en-GB";
  const start = new Date(w.startISO);
  const end = new Date(w.endISO);
  const date = new Intl.DateTimeFormat(loc, { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: TZ }).format(start);
  const t = (d: Date) => new Intl.DateTimeFormat(loc, { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: TZ }).format(d);
  const day = new Intl.DateTimeFormat(loc, { day: "numeric", timeZone: TZ }).format(start);
  const month = new Intl.DateTimeFormat(loc, { month: "short", timeZone: TZ }).format(start).replace(".", "");
  return { date, day, month, time: `${t(start)}–${t(end)}`, tz: lang === "de" ? "Uhr (Wien)" : "(Vienna time)" };
}
