"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { REDESIGN_DE, REDESIGN_EN } from "@/lib/redesign-content";
import { LogoWordmark } from "@/components/ui/Logo";

export function RedesignFooter() {
  const { lang } = useLanguage();
  const rd = lang === "de" ? REDESIGN_DE : REDESIGN_EN;

  return (
    <div className="rd">
      <footer className="rdfoot">
        <div className="wrap">
          <div className="fgrid">
            <div>
              <LogoWordmark className="h-10 text-white mb-4" />
              <p className="muted max-w-sm">{rd.footer.tagline}</p>
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
