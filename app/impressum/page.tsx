import type { Metadata } from "next";
import { PageShell } from "@/components/redesign/PageShell";
import { ImpressumView } from "@/components/legal/ImpressumView";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Offenlegung des CETL Institute.",
  alternates: { canonical: "https://www.cetl.institute/impressum" },
};

export default function ImpressumPage() {
  return (
    <PageShell>
      <ImpressumView />
    </PageShell>
  );
}
