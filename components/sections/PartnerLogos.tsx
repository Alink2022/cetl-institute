const PARTNERS = [
  { name: "TU Wien", sub: "Academic Partner" },
  { name: "City of Vienna", sub: "Government Partner" },
  { name: "European Union", sub: "Institutional Partner" },
  { name: "ÖBB", sub: "Industry Partner" },
  { name: "Siemens", sub: "Industry Partner" },
];

export function PartnerLogos() {
  return (
    <section id="partners" className="py-20 bg-cetl-surface border-y border-cetl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-12">
          Trusted by Leading Institutions &amp; Organizations
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="px-6 py-3 border border-cetl-border bg-cetl-dark/60 hover:border-cetl-gold/30 transition-colors duration-300">
                <span className="text-cetl-text-muted group-hover:text-cetl-text font-semibold text-sm tracking-wide transition-colors duration-200 whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
              <span className="text-cetl-text-muted/60 text-xs tracking-wide">{partner.sub}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-cetl-text-muted text-sm leading-relaxed">
            Flagship organizer of the{" "}
            <span className="text-cetl-text font-medium">Europe Tech Hackathon</span> —
            bringing together public institutions, global enterprises, and academic leaders
            to accelerate technology-driven transformation across Central Europe.
          </p>
        </div>
      </div>
    </section>
  );
}
