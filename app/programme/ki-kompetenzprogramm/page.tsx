import type { Metadata } from "next";
import { KiKompetenzprogrammView } from "@/components/programme/KiKompetenzprogrammView";
import { de } from "@/lib/content.de";

const SITE_URL = de.SITE.url.replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}/programme/ki-kompetenzprogramm`;
const TITLE = "KI-Kompetenzprogramm für Unternehmen | Mitarbeitende und Führungskräfte befähigen";
const DESCRIPTION =
  "Modulares KI-Kompetenzprogramm für Unternehmen: Mitarbeitende, KI-Champions, Entwickler:innen und Führungskräfte lernen, künstliche Intelligenz sicher, produktiv und praxisnah einzusetzen.";

export const metadata: Metadata = {
  title: `${TITLE} — CETL Institute`,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "de_AT",
    url: PAGE_URL,
  },
};

export default function KiKompetenzprogrammPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "KI-Kompetenzprogramm für Unternehmen",
        description: DESCRIPTION,
        provider: {
          "@type": "Organization",
          name: "CETL Institute",
          sameAs: SITE_URL,
        },
        inLanguage: "de-AT",
        url: PAGE_URL,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CETL Institute", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "KI-Kompetenzprogramm für Unternehmen", item: PAGE_URL },
        ],
      },
    ],
  };
  const jsonLdText = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {jsonLdText}
      </script>
      <KiKompetenzprogrammView />
    </>
  );
}
