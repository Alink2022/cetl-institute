import type { Metadata } from "next";
import { PageShell } from "@/components/redesign/PageShell";
import { GuestView } from "@/components/thinktank/GuestView";
import { TT_COPY } from "@/lib/thinktank-copy";

const SITE_URL = "https://www.cetl.institute";
const meta = TT_COPY.de.guest.meta;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/think-tank/gastbeitraege` },
  openGraph: { title: meta.title, description: meta.description, type: "website", locale: "de_AT", url: `${SITE_URL}/think-tank/gastbeitraege` },
};

export default function GuestContributionsPage() {
  return (
    <PageShell>
      <GuestView />
    </PageShell>
  );
}
