import type { PortfolioIcon } from "@/lib/redesign-content";
import { Icon, type IconName } from "@/components/ui/IconSprite";

interface PortfolioCardProps {
  icon: PortfolioIcon;
  flag?: string;
  label: string;
  title: string;
  desc: string;
  items: string[];
  foot: string;
}

export function PortfolioCard({ icon, flag, label, title, desc, items, foot }: PortfolioCardProps) {
  return (
    <div className="card prod">
      {flag && <span className="flag">{flag}</span>}
      <span className="ico ico-sm"><Icon name={icon as IconName} /></span>
      <p className="label">{label}</p>
      <h4>{title}</h4>
      <p className="muted" style={{ marginTop: 10, fontSize: ".95rem" }}>{desc}</p>
      <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
      <p className="foot">{foot}</p>
    </div>
  );
}
