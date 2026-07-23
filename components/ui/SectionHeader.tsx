import { Badge } from "./Badge";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
  dark = false,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      <Badge variant="gold">{label}</Badge>
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight max-w-4xl ${
          dark ? "text-white" : "text-cetl-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl leading-relaxed max-w-2xl ${
            dark ? "text-white/70" : "text-cetl-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
