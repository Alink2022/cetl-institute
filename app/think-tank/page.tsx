import type { Metadata } from "next";
import { PageShell } from "@/components/redesign/PageShell";
import { ThinkTankLanding } from "@/components/thinktank/ThinkTankLanding";
import { TT_COPY } from "@/lib/thinktank-copy";

const SITE_URL = "https://www.cetl.institute";
const meta = TT_COPY.de.landing.meta;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/think-tank` },
  openGraph: { title: meta.title, description: meta.description, type: "website", locale: "de_AT", url: `${SITE_URL}/think-tank` },
};

export default function ThinkTankPage() {
  return (
    <PageShell>
      <ThinkTankLanding />
    </PageShell>
  );
}
