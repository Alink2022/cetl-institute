"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { useLanguage } from "@/lib/i18n";

export function NavBar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const rafRef = useRef<number | null>(null);

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-4">
      <Container>
        <div
          className={`flex items-center justify-between h-14 md:h-16 px-4 md:px-5 rounded-full transition-all duration-500 ${
            scrolled
              ? "glass-panel shadow-[0_8px_40px_-12px_rgba(212,175,90,0.25)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="rounded-full bg-white/[0.07] ring-1 ring-white/10 p-1 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/cetl-logo.png"
                alt="CETL Institute"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-cetl-text font-display font-bold text-sm tracking-wide">CETL</span>
              <span className="text-cetl-text-muted text-[10px] tracking-[0.2em] uppercase">Institute</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {t.NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-cetl-text-muted hover:text-cetl-text text-sm font-medium tracking-wide transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-cetl-gold to-cetl-violet scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitch />
            <a
              href="#contact"
              className="relative px-5 py-2.5 rounded-sm bg-cetl-blue text-white text-sm font-semibold tracking-wide overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">{t.UI.nav.ctaContact}</span>
              <span className="absolute inset-0 bg-cetl-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cetl-text-muted hover:text-cetl-text p-2"
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
      </Container>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-0 bg-cetl-darker/98 backdrop-blur-xl transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-full bg-white/[0.07] ring-1 ring-white/10 p-1.5">
              <Image src="/cetl-logo.png" alt="CETL Institute" width={40} height={40} className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-cetl-text font-display font-bold text-base tracking-wide">CETL</span>
              <span className="text-cetl-text-muted text-xs tracking-widest uppercase">Institute</span>
            </div>
          </div>
          {t.NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-cetl-text text-3xl font-display font-semibold py-4 border-b border-cetl-border transition-all duration-500"
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
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-6 py-4 rounded-sm bg-cetl-blue text-white font-semibold tracking-wide text-center"
          >
            {t.UI.nav.ctaContact}
          </a>
        </div>
      </div>
    </nav>
  );
}
