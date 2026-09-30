"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { REDESIGN_DE, REDESIGN_EN } from "@/lib/redesign-content";
import { LogoWordmark } from "@/components/ui/Logo";

const NAV_ANCHORS = ["methodik", "portfolio", "oekosystem", "markt", "faq"] as const;

export function RedesignFooter() {
  const { lang } = useLanguage();
  const rd = lang === "de" ? REDESIGN_DE : REDESIGN_EN;

  const navLabels: Record<(typeof NAV_ANCHORS)[number], string> = {
    methodik: rd.nav.methodik,
    portfolio: rd.nav.portfolio,
    oekosystem: rd.nav.oekosystem,
    markt: rd.nav.markt,
    faq: rd.nav.faq,
  };

  return (
    <div className="rd">
      <footer className="rdfoot">
        <div className="wrap">
          <div className="fgrid">
            <div>
              <LogoWordmark className="h-6 text-white mb-4" />
              <p className="muted max-w-sm">{rd.footer.tagline}</p>
            </div>
            <div>
              <h4 className="text-white mb-4">{rd.footer.navLabel}</h4>
              <ul className="list-none pl-0 m-0 flex flex-col gap-2">
                {NAV_ANCHORS.map((a) => (
                  <li key={a} className="m-0">
                    <a href={`#${a}`} className="muted">{navLabels[a]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">{rd.footer.contactLabel}</h4>
              <address className="not-italic muted" style={{ lineHeight: 2 }}>
                {rd.kontakt.addressName}<br />
                {rd.kontakt.addressStreet}<br />
                {rd.kontakt.addressCity}<br />
                <a href="mailto:alinkalam@cetl.institute">alinkalam@cetl.institute</a>
              </address>
            </div>
          </div>

          <div className="legal">
            <span className="muted">{rd.footer.legal}</span>
            <span className="muted">
              <Link href="/impressum">{rd.footer.imprint}</Link> · {rd.footer.insuranceNote}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
