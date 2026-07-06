import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MANAGING_DIRECTOR } from "@/lib/content";

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.33V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function LeadershipSection() {
  return (
    <section id="leadership" className="relative py-24 lg:py-32 bg-cetl-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cetl-violet/[0.08] blur-[140px] pointer-events-none" />

      <Container className="relative">
        <SectionHeader
          label="Leadership"
          title="Managing Director"
          subtitle="The academic and operational lead behind CETL Institute's Executional Learning as a Service model."
          className="mb-16"
        />

        <div className="gradient-edge grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 bg-cetl-surface rounded-2xl border border-cetl-border p-8 lg:p-12">
          {/* Avatar + identity */}
          <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cetl-gold-light via-cetl-gold to-cetl-violet opacity-60 blur-md" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cetl-gold-light via-cetl-gold to-cetl-violet flex items-center justify-center">
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-cetl-darker">
                  {MANAGING_DIRECTOR.initials}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-cetl-text">{MANAGING_DIRECTOR.name}</h3>
              <p className="text-gradient-gold font-semibold text-sm tracking-wide uppercase mt-1">
                {MANAGING_DIRECTOR.title}
              </p>
              <p className="text-cetl-text-muted text-sm leading-snug mt-2">{MANAGING_DIRECTOR.headline}</p>
              <p className="text-cetl-text-muted/70 text-xs mt-2">{MANAGING_DIRECTOR.location}</p>
            </div>

            <MagneticButton
              href={MANAGING_DIRECTOR.linkedin}
              external
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cetl-gold/40 text-cetl-gold text-sm font-semibold tracking-wide hover:border-cetl-gold hover:bg-cetl-gold/10"
            >
              <LinkedInIcon />
              LinkedIn Profile
            </MagneticButton>
          </div>

          {/* Bio + credentials */}
          <div className="flex flex-col gap-8">
            <p className="text-cetl-text-muted text-base leading-relaxed">{MANAGING_DIRECTOR.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MANAGING_DIRECTOR.credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-cetl-dark border border-cetl-border"
                >
                  <span className="text-cetl-text font-semibold text-sm">{c.label}</span>
                  <span className="text-cetl-text-muted text-xs leading-snug">{c.sub}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-cetl-border">
              <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-3">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {MANAGING_DIRECTOR.focus.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-cetl-border text-cetl-text-muted bg-cetl-dark"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
