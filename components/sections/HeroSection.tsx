import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cetl-dark">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-cetl-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-cetl-gold) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "300px 300px",
        }}
      />

      {/* Primary radial glow — centre */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full bg-cetl-gold/[0.07] blur-[140px]" />
      </div>

      {/* Secondary glow — upper-left offset */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cetl-blue/[0.04] blur-[120px] pointer-events-none" />

      {/* Content */}
      <Container className="relative z-10 pt-24 pb-20 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="gold">Central European Tech Leadership Institute</Badge>
        </div>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cetl-text leading-[0.95] tracking-tight mb-8 animate-fade-in-up"
          style={{ animationDelay: "120ms" }}
        >
          Bridging the Gap:
          <br />
          <span className="text-cetl-gold">Academic Excellence</span>
          <br />
          Meets Industry Execution
        </h1>

        <p
          className="text-cetl-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up"
          style={{ animationDelay: "260ms" }}
        >
          We translate complex AI and data strategies into executable roadmaps that empower
          C-Suite leaders to actively steer digital transformation, not just observe it.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
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
        <div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-cetl-border pt-12 animate-fade-in-up"
          style={{ animationDelay: "560ms" }}
        >
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
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cetl-dark to-transparent" />
    </section>
  );
}
