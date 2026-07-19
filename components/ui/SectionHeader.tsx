import { Badge } from "./Badge";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      <Badge variant="gold">{label}</Badge>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cetl-text leading-[1.08] tracking-tight max-w-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-cetl-text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
