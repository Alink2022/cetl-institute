import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/redesign/PageShell";
import { ArticleView } from "@/components/thinktank/ArticleView";
import { getThinkTankArticle } from "@/lib/thinktank-articles";
import { fieldTitle, formatName, getPublication, TT_AUTHORS, TT_PUBLICATIONS } from "@/lib/thinktank";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = "https://www.cetl.institute";

export function generateStaticParams() {
  return TT_PUBLICATIONS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pub = getPublication(slug);
  const article = getThinkTankArticle("de", slug);
  if (!pub || !article) return {};
  const url = `${SITE_URL}/think-tank/${slug}`;
  return {
    title: article.title,
    description: article.teaser,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.teaser,
      type: "article",
      locale: "de_AT",
      url,
      publishedTime: pub.dateISO,
      authors: pub.authors.map((id) => TT_AUTHORS[id]?.name).filter(Boolean),
      tags: [fieldTitle(pub.field, "de"), formatName(pub.format, "de")],
    },
  };
}

export default async function ThinkTankArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const pub = getPublication(slug);
  const de = getThinkTankArticle("de", slug);
  if (!pub || !de) notFound();
  const en = getThinkTankArticle("en", slug) ?? de;

  const url = `${SITE_URL}/think-tank/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: de.title,
        description: de.teaser,
        inLanguage: "de-AT",
        url,
        datePublished: pub.dateISO,
        articleSection: fieldTitle(pub.field, "de"),
        isAccessibleForFree: true,
        author: pub.authors
          .map((id) => TT_AUTHORS[id])
          .filter(Boolean)
          .map((a) => ({ "@type": "Person", name: a.name, jobTitle: a.role.de, ...(a.linkedin ? { url: a.linkedin } : {}) })),
        publisher: {
          "@type": "Organization",
          name: "CETL Institute",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
        },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CETL Institute", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Think Tank", item: `${SITE_URL}/think-tank` },
          { "@type": "ListItem", position: 3, name: de.title, item: url },
        ],
      },
    ],
  };
  const jsonLdText = JSON.stringify(jsonLd).replace(/</g, "\u003c");

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {jsonLdText}
      </script>
      <PageShell>
        <ArticleView pub={pub} article={{ de, en }} />
      </PageShell>
    </>
  );
}
