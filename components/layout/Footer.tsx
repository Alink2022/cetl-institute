"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const footer = t.UI.footer;
  const footerLinks = [...t.NAV_LINKS, { label: footer.contactLabel, href: "#contact" }];
  // Auf Unterseiten müssen Anker-Links zurück zur Startseite führen.
  const toHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <footer className="relative border-t border-cetl-border bg-cetl-darker overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cetl-gold to-transparent opacity-40" />
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/[0.07] ring-1 ring-white/10 p-1.5">
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
                <span className="text-cetl-text-muted text-xs tracking-widest uppercase">Institute</span>
              </div>
            </div>
            <p className="text-cetl-text-muted text-sm leading-relaxed max-w-xs">{footer.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-cetl-text text-xs font-semibold tracking-widest uppercase mb-1">
              {footer.navLabel}
            </span>
            {footerLinks.map((item) => (
              <a
                key={item.href}
                href={toHref(item.href)}
                className="text-cetl-text-muted hover:text-cetl-gold text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-cetl-text text-xs font-semibold tracking-widest uppercase mb-1">
              {footer.contactLabel}
            </span>
            <p className="text-cetl-text-muted text-sm">{footer.location}</p>
            <p className="text-cetl-text-muted text-sm">{footer.region}</p>
            <a
              href={`mailto:${t.SITE.email}`}
              className="text-cetl-gold hover:text-cetl-gold-light text-sm transition-colors duration-200"
            >
              {t.SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cetl-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cetl-text-muted text-xs">
            © {new Date().getFullYear()} CETL Institute. {footer.copyright}
          </p>
          <p className="text-cetl-text-muted text-xs">{footer.complianceLine}</p>
        </div>
      </Container>
    </footer>
  );
}
