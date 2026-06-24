import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

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
    >
      <polyline points="2 8 6 12 14 4" />
    </svg>
  );
}

const PILLARS = [
  {
    number: "01",
    title: "Executive Education",
    subtitle: "C-Suite & Board-Level Literacy",
    description:
      "Expert-level literacy sessions, board-level AI trend briefings, and industry-specific workshops that ensure decision-makers are fluent in emerging technologies and capable of market-driven use case prioritization.",
    items: [
      "C-Suite AI literacy sessions",
      "Board-level trend briefings",
      "Industry-specific AI assessments",
      "Use case identification & prioritization",
    ],
  },
  {
    number: "02",
    title: "Strategic Advisory",
    subtitle: "From Strategy to Execution",
    description:
      "Customized bootcamps, leadership formats, and hands-on ideation workshops that bridge the divide between theoretical academia and applied innovation, with measurable delivery outcomes.",
    items: [
      "Customized executive bootcamps",
      "Forward Deployed Engineer roles",
      "Leadership transformation programs",
      "Hands-on ideation workshops",
    ],
  },
  {
    number: "03",
    title: "Technical Assessment",
    subtitle: "Independent & Rigorous",
    description:
      "Independent architecture and feasibility reviews for large-scale projects, data modeling, and legacy decommissioning strategies. Vendor-neutral, compliance-conscious, and strictly non-insurance.",
    items: [
      "Architecture & feasibility reviews",
      "Data modeling & strategy",
      "Legacy decommissioning",
      "Vendor-neutral technology assessment",
    ],
  },
];

export function ThreePillars() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cetl-dark">
      <Container>
        <SectionHeader
          label="Our Value Proposition"
          title="Three Pillars of Transformation"
          subtitle="A comprehensive framework that moves organizations from AI awareness to AI execution, embedding sovereign capability directly into your leadership and technical talent."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="relative flex flex-col bg-cetl-surface border border-cetl-border p-8 hover:border-cetl-gold/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Number accent */}
              <span className="text-6xl font-bold text-cetl-gold/10 group-hover:text-cetl-gold/20 transition-colors absolute top-6 right-6 leading-none">
                {pillar.number}
              </span>

              <div className="mb-6">
                <p className="text-cetl-gold text-xs font-semibold tracking-widest uppercase mb-3">
                  {pillar.subtitle}
                </p>
                <h3 className="text-xl font-bold text-cetl-text">{pillar.title}</h3>
              </div>

              <p className="text-cetl-text-muted text-sm leading-relaxed mb-8">
                {pillar.description}
              </p>

              <ul className="mt-auto flex flex-col gap-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
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
  );
}
