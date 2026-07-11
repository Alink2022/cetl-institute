import type { Metadata } from "next";
import { InsightsIndexView } from "@/components/insights/InsightsIndexView";

export const metadata: Metadata = {
  title: "Insights & Publikationen — CETL Institute",
  description:
    "Research Briefs, Whitepaper und Frameworks für Entscheider in Banken, Industrie und öffentlichem Sektor — aus der Forschung in die Praxis.",
};

export default function InsightsPage() {
  return <InsightsIndexView />;
}
