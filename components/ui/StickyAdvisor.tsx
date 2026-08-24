"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export function StickyAdvisor() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`mailto:${t.SITE.formEmail}`}
      aria-label={t.UI.community.advisorCta}
      // Solange der Button unsichtbar ist (opacity-0, vor 600px Scroll), darf er nicht
      // per Tab fokussierbar sein — sonst landet die Tastatur-Fokusreihenfolge auf einem
      // unsichtbaren Link, bevor Nav/Inhalt überhaupt erreicht werden.
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={[
        "fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full",
        "bg-cetl-navy-700 text-white text-sm font-semibold tracking-wide shadow-[0_4px_24px_-4px_color-mix(in_srgb,var(--color-cetl-navy-700)_55%,transparent)]",
        "hover:bg-cetl-navy-800 hover:scale-105 active:scale-95",
        "transition-all duration-300",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0" aria-hidden="true">
        <circle cx="8" cy="8" r="6" />
        <path d="M6 6.5C6 5.7 6.7 5 8 5s2 .7 2 1.5c0 1.2-1 1.5-2 2v.5" />
        <circle cx="8" cy="11.5" r=".5" fill="currentColor" />
      </svg>
      {t.UI.community.advisorCta}
    </a>
  );
}
