interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "blue" | "muted";
  className?: string;
}

export function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  const variants = {
    gold: "border border-cetl-gold/40 text-cetl-gold bg-cetl-gold/10",
    blue: "border border-cetl-blue/40 text-cetl-blue bg-cetl-blue/10",
    muted: "border border-cetl-border text-cetl-text-muted bg-cetl-surface",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
