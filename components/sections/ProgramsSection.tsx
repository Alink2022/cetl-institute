import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const PROGRAMS = [
  {
    tag: "Executive Education",
    title: "C-Suite AI Literacy",
    format: "Half-Day / Full-Day",
    level: "Board & C-Suite",
    description:
      "Intensive literacy sessions that give board members and C-Suite executives a working understanding of AI capabilities, limitations, and strategic implications — without requiring technical backgrounds.",
  },
  {
    tag: "Strategic Advisory",
    title: "AI Strategy Bootcamp",
    format: "2–3 Day Intensive",
    level: "Leadership Teams",
    description:
      "Hands-on bootcamp translating AI strategy into executable roadmaps. Teams leave with prioritized use cases, clear ownership, and a governance framework.",
  },
  {
    tag: "ELaaS",
    title: "Forward Deployed Engineer Program",
    format: "3–6 Month Engagement",
    level: "Technical & Business",
    description:
      "CETL engineers embed directly into your teams, working alongside technical and business talent to transfer sovereign AI and data capabilities — accelerating execution from day one.",
  },
  {
    tag: "Technical Assessment",
    title: "AI Architecture Review",
    format: "4–6 Weeks",
    level: "Technical Leadership",
    description:
      "Independent, vendor-neutral assessment of your current AI and data architecture. Delivers a feasibility report, risk register, and legacy decommissioning roadmap.",
  },
  {
    tag: "Executive Education",
    title: "Industry AI Trend Briefing",
    format: "2–3 Hours",
    level: "Expert / Industry",
    description:
      "Curated briefings on AI developments specific to your industry vertical — covering regulatory landscape, competitive benchmarks, and emerging use cases.",
  },
  {
    tag: "ELaaS",
    title: "Ideation & Innovation Workshop",
    format: "1 Day",
    level: "Cross-Functional Teams",
    description:
      "Facilitated ideation workshops that surface high-value AI use cases from within your organization, prioritize them by ROI and feasibility, and produce an actionable innovation backlog.",
  },
];

const TAG_COLORS: Record<string, "gold" | "blue" | "muted"> = {
  "Executive Education": "gold",
  "Strategic Advisory": "blue",
  ELaaS: "gold",
  "Technical Assessment": "muted",
};

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-cetl-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Programs"
          title="Formats Built for Execution"
          subtitle="Every program is designed to close the gap between knowledge and action — from board briefings to embedded engineering engagements."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="flex flex-col bg-cetl-surface border border-cetl-border p-7 hover:border-cetl-gold/30 transition-colors duration-300"
            >
              <div className="mb-5">
                <Badge variant={TAG_COLORS[program.tag] ?? "muted"} className="mb-4">
                  {program.tag}
                </Badge>
                <h3 className="text-cetl-text font-bold text-lg leading-snug">{program.title}</h3>
              </div>

              <p className="text-cetl-text-muted text-sm leading-relaxed mb-6 flex-1">
                {program.description}
              </p>

              <div className="pt-4 border-t border-cetl-border flex gap-4 text-xs text-cetl-text-muted">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="12" height="11" rx="1" />
                    <path d="M5 1v4M11 1v4M2 7h12" />
                  </svg>
                  {program.format}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="5" r="3" />
                    <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" />
                  </svg>
                  {program.level}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cetl-gold text-cetl-darker font-semibold tracking-wide hover:bg-cetl-gold-light transition-colors duration-200"
          >
            Discuss a Custom Program
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
