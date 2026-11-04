import type { Metadata } from "next";
import { PageShell } from "@/components/redesign/PageShell";
import { DatenschutzView } from "@/components/legal/DatenschutzView";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Information über die Verarbeitung personenbezogener Daten gemäß Art. 13 und 14 DSGVO.",
  alternates: { canonical: "https://www.cetl.institute/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <PageShell>
      <DatenschutzView />
    </PageShell>
  );
}
