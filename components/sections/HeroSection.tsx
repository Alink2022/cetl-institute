import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cetl-dark">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-cetl-gold/5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 text-center">
        <div className="flex justify-center mb-8">
          <Badge variant="gold">Central European Tech Leadership Institute</Badge>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cetl-text leading-[0.95] tracking-tight mb-8">
          Bridging the Gap:
          <br />
          <span className="text-cetl-gold">Academic Excellence</span>
          <br />
          Meets Industry Execution
        </h1>

        <p className="text-cetl-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          We translate complex AI and data strategies into executable roadmaps that empower
          C-Suite leaders to actively steer digital transformation — not just observe it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#elaas"
            className="w-full sm:w-auto px-8 py-4 bg-cetl-gold text-cetl-darker font-semibold tracking-wide hover:bg-cetl-gold-light transition-colors duration-200 text-center"
          >
            Discover ELaaS
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-cetl-gold/50 text-cetl-gold font-semibold tracking-wide hover:border-cetl-gold hover:bg-cetl-gold/10 transition-all duration-200 text-center"
          >
            Schedule a Briefing
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-cetl-border pt-12">
          {[
            { value: "3", label: "Core Pillars" },
            { value: "C-Suite", label: "Target Audience" },
            { value: "Non-Insurance", label: "Sector Focus" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-cetl-gold">{stat.value}</span>
              <span className="text-cetl-text-muted text-sm tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cetl-dark to-transparent" />
    </section>
  );
}
