import type { Metadata } from "next";
import { PageShell } from "@/components/redesign/PageShell";
import { FacultyView } from "@/components/faculty/FacultyView";

export const metadata: Metadata = {
  title: "CETL Faculty: Lektor:in oder Speaker:in werden",
  description: "Onboarding für Lektor:innen und Speaker:innen der CETL Faculty.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.cetl.institute/faculty" },
};

export default function FacultyPage() {
  return (
    <PageShell>
      <FacultyView />
    </PageShell>
  );
}
