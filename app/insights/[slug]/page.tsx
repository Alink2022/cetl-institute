import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLE_IMAGES, ARTICLE_SLUGS, getArticle } from "@/lib/insights-articles";
import { ArticleView } from "@/components/insights/ArticleView";
import { de } from "@/lib/content.de";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = de.SITE.url.replace(/\/$/, "");
const AUTHOR = de.MANAGING_DIRECTOR;
// Artikel-Serie im Juli 2026 publiziert (Anzeige-Datum steht in article.date).
const PUBLISHED_ISO = "2026-07-11";

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("de", slug);
  if (!article) return {};
  return {
    title: `${article.title} | CETL Institute`,
    description: article.teaser,
    alternates: { canonical: `${SITE_URL}/insights/${slug}` },
    openGraph: {
      title: article.title,
      description: article.teaser,
      type: "article",
      locale: "de_AT",
      url: `${SITE_URL}/insights/${slug}`,
      publishedTime: PUBLISHED_ISO,
      authors: [AUTHOR.name],
      tags: [article.tag, article.category],
      images: ARTICLE_IMAGES[slug] ? [{ url: ARTICLE_IMAGES[slug].src, alt: ARTICLE_IMAGES[slug].alt }] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle("de", slug);
  if (!article) notFound();

  const url = `${SITE_URL}/insights/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.teaser,
        inLanguage: "de-AT",
        url,
        datePublished: PUBLISHED_ISO,
        image: ARTICLE_IMAGES[slug] ? `${SITE_URL}${ARTICLE_IMAGES[slug].src}` : undefined,
        author: {
          "@type": "Person",
          name: AUTHOR.name,
          jobTitle: AUTHOR.title,
          url: AUTHOR.linkedin,
        },
        publisher: {
          "@type": "Organization",
          name: "CETL Institute",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/cetl-logo.png` },
        },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "CETL Institute", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
  // Statischer Eigen-Content; "<" wird escaped, damit der Script-Block nicht vorzeitig endet.
  const jsonLdText = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>
        {jsonLdText}
      </script>
      <ArticleView slug={slug} />
    </>
  );
}
