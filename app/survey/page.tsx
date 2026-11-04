import type { Metadata } from "next";
import { PageShell } from "@/components/redesign/PageShell";
import { SurveyView } from "@/components/survey/SurveyView";

export const metadata: Metadata = {
  title: "Enterprise AI Pulse Österreich 2026",
  description: "Anonyme Kurzumfrage zur Lage von KI in österreichischen Unternehmen. Die Fragen, die Sie stellen wollten, aber nicht gestellt haben.",
  alternates: { canonical: "https://www.cetl.institute/survey" },
};

export default function SurveyPage() {
  return (
    <PageShell>
      <SurveyView />
    </PageShell>
  );
}
