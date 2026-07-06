const WORDS = ["EXECUTION", "SOVEREIGNTY", "CAPABILITY", "TRANSFORMATION", "OWNERSHIP"];

export function WordMarquee() {
  return (
    <div className="relative py-8 md:py-10 bg-cetl-darker border-y border-cetl-border overflow-hidden select-none">
      <div className="absolute inset-0 bg-grid-gold opacity-[0.03] pointer-events-none" />
      <div className="marquee-track gap-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {[...WORDS, ...WORDS].map((word, i) => (
          <span
            key={i}
            className="font-display text-6xl md:text-8xl font-extrabold tracking-tight shrink-0 flex items-center gap-10"
            style={{
              WebkitTextStroke: i % 2 === 0 ? "1.5px var(--color-cetl-gold)" : "1.5px var(--color-cetl-violet)",
              color: "transparent",
              opacity: 0.85,
            }}
          >
            {word}
            <span className="text-cetl-gold text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
