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
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <Badge variant="gold">{label}</Badge>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cetl-text leading-tight tracking-tight max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-cetl-text-muted text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
