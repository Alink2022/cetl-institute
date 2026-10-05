"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import type { RedesignContent } from "@/lib/redesign-content";
import { PortfolioCard } from "./PortfolioCard";

type TabId = "learning" | "assessment" | "thinkTank";
const ORDER: TabId[] = ["learning", "assessment", "thinkTank"];

// Drei Leistungsbereiche als Tabs: weniger Auswahl auf einmal, gleicher Inhalt.
// Deep-Link: /#portfolio-think-tank öffnet direkt den Think-Tank-Tab.
export function PortfolioTabs({ portfolio }: { portfolio: RedesignContent["portfolio"] }) {
  const [tab, setTab] = useState<TabId>("learning");
  const refs = useRef<Record<TabId, HTMLButtonElement | null>>({ learning: null, assessment: null, thinkTank: null });

  useEffect(() => {
    if (window.location.hash === "#portfolio-think-tank") setTab("thinkTank");
  }, []);

  const panels: Record<TabId, { lead: string; cards: RedesignContent["portfolio"]["learning"]; grid: string }> = {
    learning: { lead: portfolio.learningLead, cards: portfolio.learning, grid: "grid g4" },
    assessment: { lead: portfolio.assessmentLead, cards: portfolio.assessment, grid: "grid g3" },
    thinkTank: { lead: portfolio.thinkTankLead, cards: portfolio.thinkTank, grid: "grid g3" },
  };

  const onKey = (e: KeyboardEvent, id: TabId) => {
    const i = ORDER.indexOf(id);
    const next = e.key === "ArrowRight" ? ORDER[(i + 1) % 3] : e.key === "ArrowLeft" ? ORDER[(i + 2) % 3] : null;
    if (!next) return;
    e.preventDefault();
    setTab(next);
    refs.current[next]?.focus();
  };

  return (
    <div>
      <div className="tabs" role="tablist" aria-label={portfolio.title}>
        {ORDER.map((id) => (
          <button
            key={id}
            ref={(el) => { refs.current[id] = el; }}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={tab === id}
            aria-controls={`panel-${id}`}
            tabIndex={tab === id ? 0 : -1}
            className="tab"
            onClick={() => setTab(id)}
            onKeyDown={(e) => onKey(e, id)}
          >
            {portfolio.tabs[id]}
            <span className="n">{panels[id].cards.length}</span>
          </button>
        ))}
      </div>

      {ORDER.map((id) => (
        <div key={id} role="tabpanel" id={`panel-${id}`} aria-labelledby={`tab-${id}`} hidden={tab !== id} className="tabpanel">
          <p className="muted" style={{ margin: "0 0 1.75rem", maxWidth: "72ch" }}>{panels[id].lead}</p>
          <div className={panels[id].grid}>
            {panels[id].cards.map((c) => <PortfolioCard key={c.title} {...c} />)}
          </div>
          {id === "thinkTank" && (
            <p style={{ marginTop: "2.5rem" }}>
              <Link className="btn btn-primary" href="/think-tank#services">{portfolio.thinkTankCta}</Link>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
