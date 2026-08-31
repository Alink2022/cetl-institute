"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { useLanguage } from "@/lib/i18n";

export function NavBar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Auf Unterseiten müssen Anker-Links zurück zur Startseite führen; echte Routen bleiben unverändert.
  const isHome = pathname === "/";
  const toHref = (href: string) => (href.startsWith("#") && !isHome ? `/${href}` : href);

  // "Central European Tech Leadership Institute" auf zwei Zeilen aufteilen fürs Logo-Lockup.
  const fullNameWords = t.SITE.fullName.split(" ");
  const fullNameLine1 = fullNameWords.slice(0, 3).join(" ");
  const fullNameLine2 = fullNameWords.slice(3).join(" ");

  const rafRef = useRef<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        rafRef.current = null;
      });
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Fokus-Management für das mobile Vollbild-Menü: Escape schließt es, Fokus bleibt
  // innerhalb des Menüs gefangen (Tab/Shift+Tab wrappen), und beim Öffnen/Schließen
  // wandert der Fokus sichtbar mit (kein Fokusverlust in verdeckten Hintergrund-Inhalt).
  useEffect(() => {
    if (!mobileOpen) return;

    const menu = mobileMenuRef.current;
    const firstLink = menu?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menu) return;
      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>("a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])")
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-20 md:h-24 px-4 md:px-5 rounded-xl transition-all duration-500 ${
            scrolled
              ? "glass-panel shadow-[0_8px_40px_-12px_color-mix(in_srgb,var(--color-cetl-gold)_25%,transparent)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a href={isHome ? "#" : "/"} className="flex items-center gap-1 group shrink-0">
            <div className="relative w-14 h-14 md:w-20 md:h-20 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/cetl-logo.webp"
                alt="CETL Institute"
                fill
                sizes="80px"
                className="object-cover scale-125"
              />
            </div>
            <div className="w-px h-10 md:h-12 self-center bg-white/20" aria-hidden="true" />
            <div className="flex flex-col items-start text-left leading-tight pl-2">
              <span className="text-white font-display font-normal text-sm md:text-base tracking-wide">
                {fullNameLine1}
              </span>
              <span className="text-white font-display font-normal text-sm md:text-base tracking-wide">
                {fullNameLine2}
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden 2xl:flex items-center">
            {t.NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={toHref(link.href)}
                className="relative px-3 py-2 text-white/70 hover:text-white text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-cetl-gold to-cetl-gold-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden 2xl:flex items-center gap-3">
            <LanguageSwitch />
            <a
              href={`mailto:${t.SITE.formEmail}`}
              className="relative px-5 py-2.5 rounded-sm bg-cetl-navy-700 text-white text-sm font-semibold tracking-wide whitespace-nowrap overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">{t.UI.nav.ctaContact}</span>
              <span className="absolute inset-0 bg-cetl-navy-700-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={mobileToggleRef}
            className="2xl:hidden text-white/70 hover:text-white p-3"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.UI.nav.toggleMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.UI.nav.toggleMenu}
        // `inert` hält das Menü (und alle Links darin) aus dem Tab-Fokus heraus, solange es
        // unsichtbar ist — sonst könnten Tastaturnutzer:innen unsichtbare Links fokussieren.
        inert={!mobileOpen}
        className={`2xl:hidden fixed inset-0 top-0 bg-cetl-navy-900/98 backdrop-blur-xl transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Explicit close affordance — the toggle button in the bar above is visually
            covered by this overlay's backdrop once open, so without this the menu had
            no visible way out other than Escape or clicking a link. */}
        <button
          type="button"
          onClick={() => {
            setMobileOpen(false);
            mobileToggleRef.current?.focus();
          }}
          aria-label={t.UI.nav.toggleMenu}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 p-2"
        >
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 15l-5-5 5-5M7 10h9" />
          </svg>
        </button>

        <div className="flex flex-col h-full pt-20 px-8 pb-8 overflow-y-auto">
          <div className="flex items-center gap-1 mb-8">
            <div className="relative w-16 h-16 overflow-hidden shrink-0">
              <Image src="/cetl-logo.webp" alt="CETL Institute" fill sizes="64px" className="object-cover scale-125" />
            </div>
            <div className="w-px h-11 self-center bg-white/20" aria-hidden="true" />
            <div className="flex flex-col items-start text-left leading-tight pl-2">
              <span className="text-white font-display font-normal text-sm tracking-wide">{fullNameLine1}</span>
              <span className="text-white font-display font-normal text-sm tracking-wide">{fullNameLine2}</span>
            </div>
          </div>
          {t.NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={toHref(link.href)}
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-display font-semibold py-3 border-b border-white/10 transition-all duration-500"
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitch className="mt-8 self-start" />
          <a
            href={`mailto:${t.SITE.formEmail}`}
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-6 py-4 rounded-sm bg-cetl-navy-700 text-white font-semibold tracking-wide text-center"
          >
            {t.UI.nav.ctaContact}
          </a>
        </div>
      </div>
    </nav>
  );
}
