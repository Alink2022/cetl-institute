"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/lib/i18n";

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.33V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function FacultyCard({ initials, role, desc }: { initials: string; role: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-cetl-border bg-cetl-surface/40 hover:border-cetl-gold/30 hover:bg-cetl-surface transition-all duration-300">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border border-cetl-gold/40 bg-gradient-to-br from-cetl-surface to-cetl-dark flex items-center justify-center">
          <span className="font-display text-xl font-bold text-cetl-gold/70 tracking-wider">{initials}</span>
        </div>
        <div className="absolute inset-0 rounded-full bg-cetl-gold/[0.04] blur-md" />
      </div>
      <div>
        <p className="text-cetl-text font-semibold text-sm">{role}</p>
        <p className="text-cetl-text-muted text-xs leading-relaxed mt-1">{desc}</p>
      </div>
    </div>
  );
}

export function LeadershipSection() {
  const { t } = useLanguage();
  const leadership = t.UI.leadership;
  const faculty = t.UI.faculty;
  const md = t.MANAGING_DIRECTOR;

  return (
    <section id="leadership" className="relative py-32 lg:py-44 bg-cetl-dark overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cetl-gold-400/[0.08] blur-[140px] pointer-events-none" />

      <Container className="relative">
        <SectionHeader
          label={leadership.label}
          title={leadership.title}
          subtitle={leadership.subtitle}
          className="mb-16"
        />

        <div className="gradient-edge grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 bg-cetl-surface rounded-2xl border border-cetl-border p-8 lg:p-12">
          {/* Photo + identity */}
          <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
            <div className="relative w-full max-w-[280px]">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-cetl-gold-light via-cetl-gold to-cetl-gold-400 opacity-50 blur-xl" />
              <div className="gradient-edge relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/alin-kalam.webp"
                  alt={leadership.photoAlt}
                  fill
                  sizes="280px"
                  className="object-cover object-[58%_22%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cetl-darker via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-3 left-3 right-3 text-cetl-gold-light text-xs font-semibold tracking-widest uppercase">
                  {leadership.photoTag}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-cetl-text">{md.name}</h3>
              <p className="text-cetl-gold-deep font-semibold text-sm tracking-wide uppercase mt-1">{md.title}</p>
              <p className="text-cetl-text-muted text-sm leading-snug mt-2">{md.headline}</p>
              <p className="text-cetl-text-muted/70 text-xs mt-2">{md.location}</p>
            </div>

            <MagneticButton
              href={md.linkedin}
              external
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cetl-gold/40 text-cetl-gold-deep text-sm font-semibold tracking-wide hover:border-cetl-gold hover:bg-cetl-gold/10"
            >
              <LinkedInIcon />
              {leadership.linkedin}
            </MagneticButton>
          </div>

          {/* Bio + credentials */}
          <div className="flex flex-col gap-8">
            <p className="text-cetl-text-muted text-base leading-relaxed">{md.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {md.credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-cetl-dark border border-cetl-border"
                >
                  {c.logo && (
                    <div className="w-10 h-10 rounded-lg bg-white border border-cetl-border flex items-center justify-center p-1.5 shrink-0">
                      <Image src={c.logo} alt={c.label} width={32} height={32} className="object-contain" unoptimized />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-cetl-text font-semibold text-sm">{c.label}</span>
                    <span className="text-cetl-text-muted text-xs leading-snug">{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-cetl-border">
              <p className="text-cetl-text-muted text-xs font-semibold tracking-widest uppercase mb-3">
                {leadership.focus}
              </p>
              <div className="flex flex-wrap gap-2">
                {md.focus.map((f) => (
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

        {/* Faculty positions grid */}
        <div className="mt-16">
          <p className="text-cetl-text-muted/60 text-xs font-semibold tracking-[0.25em] uppercase mb-6">{faculty.label}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.FACULTY_POSITIONS.map((pos) => (
              <FacultyCard key={pos.initials} {...pos} />
            ))}
            {/* Featured experts card */}
            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-cetl-border/50 bg-cetl-surface/20 col-span-1">
              <div className="w-20 h-20 rounded-full border border-cetl-gold/20 bg-cetl-dark flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-cetl-gold/50 italic">+</span>
              </div>
              <div>
                <p className="text-cetl-gold-deep text-sm font-semibold italic">{faculty.featuredTitle}</p>
                <p className="text-cetl-text-muted text-xs leading-relaxed mt-1">{faculty.featuredDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
