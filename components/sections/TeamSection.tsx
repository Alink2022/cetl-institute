"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function TeamSection() {
  const { t } = useLanguage();
  const ui = t.UI.team;

  if (!t.TEAM_MEMBERS || t.TEAM_MEMBERS.length === 0) return null;

  return (
    <section className="relative py-14 lg:py-24 bg-cetl-surface overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <Container className="relative">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <p className="text-cetl-gold-700 text-xs font-semibold tracking-[0.3em] uppercase mb-4">{ui.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight mb-5">
            {ui.headline}
          </h2>
          <p className="text-cetl-text-muted text-lg leading-relaxed">{ui.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl border border-cetl-border p-8"
            >
              {member.photo ? (
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-cetl-gold/30">
                  <Image src={member.photo} alt={member.name} fill sizes="96px" className="object-cover" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full border-2 border-cetl-gold/40 bg-gradient-to-br from-cetl-surface to-cetl-dark flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-cetl-gold-deep tracking-wider">
                    {member.initials}
                  </span>
                </div>
              )}
              <div>
                <p className="font-display text-lg font-bold text-cetl-text">{member.name}</p>
                <p className="text-cetl-text-muted text-sm leading-snug mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
