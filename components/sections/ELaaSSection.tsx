import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

const FEATURES = [
  {
    title: "Sovereign Capability Transfer",
    desc: "We embed independent technical capability directly into your leadership and technical talent; your organization retains full, vendor-neutral control.",
  },
  {
    title: "Outcome-Driven Ecosystem",
    desc: "Not training for the sake of training. Every program is engineered around measurable delivery outcomes with clear ROI frameworks.",
  },
  {
    title: "Forward Deployed Engineers",
    desc: "Integrated practitioner-advisors who work alongside your teams to bridge the gap between strategy and day-to-day execution.",
  },
  {
    title: "Community + Program Synergy",
    desc: "Developed through the strategic synergy of CETL Institute and community partners, with insight and networking converting into measurable delivery outcomes.",
  },
];

export function ELaaSSection() {
  return (
    <section id="elaas" className="py-24 lg:py-32 bg-cetl-surface border-y border-cetl-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + description */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
            <SectionHeader
              label="ELaaS"
              title="Executional Learning as a Service"
              subtitle="The Premier AI & Data Capability Accelerator, engineered to dismantle the execution gap between AI hype and operational reality."
              align="left"
            />

            <div className="flex flex-col gap-4 pt-4 border-t border-cetl-border">
              <p className="text-cetl-text-muted text-sm leading-relaxed">
                The market is moving from AI hype to execution. Organizations need capability
                transfer and implementation ownership, not more slideware. ELaaS transforms
                organizational leaders from passive observers of technological disruption into
                active architects of AI-driven enterprise value.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="muted">Data Strategy</Badge>
                <Badge variant="muted">AI Operating Models</Badge>
                <Badge variant="muted">Value Creation</Badge>
                <Badge variant="muted">Use Case Prioritization</Badge>
              </div>
            </div>

            <div className="bg-cetl-dark border border-cetl-gold/20 p-6">
              <p className="text-cetl-gold text-xs font-semibold tracking-widest uppercase mb-3">
                Strategic Partnership
              </p>
              <p className="text-cetl-text text-sm leading-relaxed">
                Flagship organizer of the <strong className="text-cetl-text font-semibold">Europe Tech Hackathon</strong> in
                partnership with the City of Vienna, European Union, ÖBB, and Siemens.
              </p>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex flex-col gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="flex gap-6 p-6 bg-cetl-dark border border-cetl-border hover:border-cetl-gold/30 hover:bg-cetl-dark/80 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-cetl-gold/10 border border-cetl-gold/30 flex items-center justify-center text-cetl-gold font-bold text-xs shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="text-cetl-text font-semibold mb-2">{feature.title}</h4>
                  <p className="text-cetl-text-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
