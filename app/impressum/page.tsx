import type { Metadata } from "next";
import { ImpressumView } from "@/components/legal/ImpressumView";

export const metadata: Metadata = {
  title: "Impressum | CETL Institute",
  description: "Impressum und rechtliche Angaben des CETL Institute.",
};

export default function ImpressumPage() {
  return <ImpressumView />;
}
