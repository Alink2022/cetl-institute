"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function TeamSection() {
  const { t } = useLanguage();
  const ui = t.UI.team;

  if (!t.TEAM_MEMBERS || t.TEAM_MEMBERS.length === 0) return null;

  return (
    <section id="team" className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <Container className="relative">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-5">
            {ui.headline}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{ui.intro}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {t.TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center gap-3 sm:gap-4 bg-white rounded-2xl border border-cetl-border p-3 sm:p-8"
            >
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                <div className="absolute inset-0 rounded-full bg-cetl-gold/15 blur-md" aria-hidden />
                {member.photo ? (
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-cetl-gold ring-offset-2 ring-offset-white">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                      style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full rounded-full ring-2 ring-cetl-gold ring-offset-2 ring-offset-white bg-gradient-to-br from-cetl-surface to-cetl-dark flex items-center justify-center">
                    <span className="font-display text-xl sm:text-2xl font-bold text-cetl-gold-deep tracking-wider">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-display text-xs sm:text-lg font-bold text-cetl-text leading-snug">{member.name}</p>
                <p className="text-cetl-text-muted text-[10px] sm:text-sm leading-snug mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
