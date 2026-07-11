"use client";

import { useLanguage } from "@/lib/i18n";

export function WordMarquee() {
  const { t } = useLanguage();
  const words = t.UI.wordMarquee;

  return (
    <div className="relative py-5 bg-cetl-darker border-y border-cetl-border select-none">
      <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 px-6">
        {words.map((word, i) => (
          <div key={i} className="flex items-center gap-6">
            <span
              className="text-[10px] font-semibold tracking-[0.3em] uppercase"
              style={{
                color: "transparent",
                WebkitTextStroke: i % 2 === 0
                  ? "1px var(--color-cetl-blue)"
                  : "1px var(--color-cetl-gold)",
                opacity: 0.8,
              }}
            >
              {word}
            </span>
            {i < words.length - 1 && (
              <span className="text-cetl-gold/30 text-[8px]">✦</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
