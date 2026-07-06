export function GoldDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-cetl-gold) 30%, var(--color-cetl-violet) 70%, transparent)",
          opacity: 0.25,
        }}
      />
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 -mt-[3px] rounded-full bg-cetl-gold shadow-[0_0_12px_2px_rgba(212,175,90,0.6)]" />
    </div>
  );
}
