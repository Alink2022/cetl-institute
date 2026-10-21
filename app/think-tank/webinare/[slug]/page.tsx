import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/redesign/PageShell";
import { WebinarView } from "@/components/thinktank/WebinarView";
import { WEBINARS, getWebinar } from "@/lib/webinars";

const SITE_URL = "https://www.cetl.institute";

export function generateStaticParams() {
  return WEBINARS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getWebinar(slug);
  if (!w) return {};
  const url = `${SITE_URL}/think-tank/webinare/${w.slug}`;
  const title = `${w.title} | CETL Webinar`;
  const description = w.copy.de.abstract[0];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "website", locale: "de_AT", url },
  };
}

export default async function WebinarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWebinar(slug);
  if (!w) notFound();
  const url = `${SITE_URL}/think-tank/webinare/${w.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: w.title,
    description: w.copy.en.abstract.join(" "),
    startDate: w.startISO,
    endDate: w.endISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    inLanguage: w.language,
    url,
    location: { "@type": "VirtualLocation", url: w.linkedinUrl || url },
    organizer: { "@type": "Organization", name: "CETL Institute", url: SITE_URL },
    performer: { "@type": "Person", name: w.speaker.name },
  };
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WebinarView webinar={w} />
    </PageShell>
  );
}
