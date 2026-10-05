"use client";

import type { ReactNode } from "react";
import { IconSprite } from "@/components/ui/IconSprite";
import { RedesignNavBar } from "./RedesignNavBar";
import { RedesignFooter } from "./RedesignFooter";

// Gemeinsamer Rahmen aller Seiten im Redesign (Startseite, Think Tank).
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="rd" id="top">
      <IconSprite />
      <RedesignNavBar />
      <main id="main-content">{children}</main>
      <RedesignFooter />
    </div>
  );
}
