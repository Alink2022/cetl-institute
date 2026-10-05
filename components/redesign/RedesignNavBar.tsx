"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { REDESIGN_DE, REDESIGN_EN, type RedesignContent } from "@/lib/redesign-content";
import { LogoMonogram, LogoWordmark } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/IconSprite";

type NavId = "methodik" | "portfolio" | "oekosystem" | "markt" | "praxis" | "thinkTank" | "faq";

const DESKTOP_ITEMS: NavId[] = ["methodik", "portfolio", "thinkTank", "oekosystem", "markt", "praxis"];
const MOBILE_ITEMS: NavId[] = [...DESKTOP_ITEMS, "faq"];

// Think Tank ist eine eigene Seite, alle anderen Punkte sind Anker der Startseite.
export function navHref(id: NavId, onHome: boolean): string {
  if (id === "thinkTank") return "/think-tank";
  return onHome ? `#${id}` : `/#${id}`;
}

export function navLabel(rd: RedesignContent, id: NavId): string {
  return rd.nav[id];
}

export function RedesignNavBar() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const rd = lang === "de" ? REDESIGN_DE : REDESIGN_EN;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const current = (id: NavId) => (id === "thinkTank" && pathname.startsWith("/think-tank") ? "page" : undefined);
  const cta = onHome ? "#kontakt" : "/#kontakt";

  const langSwitch = (
    <>
      <button
        type="button"
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        className={lang === "de" ? "text-[color:var(--brand-700)]" : "text-[color:var(--ink-500)]"}
      >
        DE
      </button>
      <span className="text-[color:var(--line)]">/</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={lang === "en" ? "text-[color:var(--brand-700)]" : "text-[color:var(--ink-500)]"}
      >
        EN
      </button>
    </>
  );

  return (
    <div className="rd">
      <header className="top">
        <div className="topbar">
          <Link href={onHome ? "#top" : "/"} className="brand" aria-label={rd.nav.home}>
            <LogoWordmark className="brand-full" />
            <LogoMonogram className="brand-mono" />
          </Link>

          <nav className="main" aria-label={rd.nav.langLabel}>
            {DESKTOP_ITEMS.map((id) => (
              <Link key={id} href={navHref(id, onHome)} aria-current={current(id)}>
                {navLabel(rd, id)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="topbar-lang flex items-center gap-1 text-xs font-semibold tracking-wide" aria-label={rd.nav.langLabel}>
              {langSwitch}
            </div>

            <Link href={cta} className="btn btn-primary topbar-cta">
              {rd.nav.cta}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? rd.nav.menuClose : rd.nav.menuOpen}
              className="burger-btn"
            >
              <Icon name={menuOpen ? "x" : "list"} className="ic" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="burger-panel">
            <nav className="flex flex-col gap-1" aria-label={rd.nav.langLabel}>
              {MOBILE_ITEMS.map((id) => (
                <Link key={id} href={navHref(id, onHome)} onClick={() => setMenuOpen(false)} className="burger-link" aria-current={current(id)}>
                  {navLabel(rd, id)}
                </Link>
              ))}
            </nav>
            <Link href={cta} onClick={() => setMenuOpen(false)} className="btn btn-primary w-full justify-center mt-4">
              {rd.nav.cta}
            </Link>
            <div className="flex items-center gap-2 mt-5 text-xs font-semibold tracking-wide">{langSwitch}</div>
          </div>
        )}
      </header>

      {showTop && (
        <button
          type="button"
          id="totop"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.querySelector<HTMLAnchorElement>("header.top .brand")?.focus();
          }}
          aria-label={rd.nav.home}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg"
          style={{ background: "var(--brand-600)" }}
        >
          <Icon name="arrow-up" className="ic" />
        </button>
      )}

      <style jsx global>{`
        .rd .burger-btn { display: none; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 999px; border: 1px solid var(--line); background: transparent; color: var(--ink-900); }
        @media (max-width: 1080px) { .rd .burger-btn { display: inline-flex; } }
        .rd .topbar-lang { display: flex; }
        @media (max-width: 1080px) { .rd .topbar-lang { display: none; } }
        .rd .burger-panel { border-top: 1px solid var(--line); padding: 20px 24px 28px; background: #fff; }
        @media (min-width: 1081px) { .rd .burger-panel { display: none !important; } }
        .rd .burger-link { padding: 12px 4px; font-size: 1rem; color: var(--ink-900); border-bottom: 1px solid var(--line); }
        .rd .burger-link:hover { color: var(--brand-700); }
        .rd .burger-link[aria-current="page"] { color: var(--brand-700); font-weight: 500; }
      `}</style>
    </div>
  );
}
