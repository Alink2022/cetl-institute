"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-cetl-border bg-cetl-surface/60 p-0.5 text-xs font-semibold tracking-wide ${className}`}
    >
      {(["de", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`px-2.5 py-1 rounded-full uppercase transition-colors duration-200 ${
            lang === option ? "bg-cetl-gold text-cetl-darker" : "text-cetl-text-muted hover:text-cetl-text"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
