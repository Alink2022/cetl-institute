import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLE_SLUGS, getArticle } from "@/lib/insights-articles";
import { ArticleView } from "@/components/insights/ArticleView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("de", slug);
  if (!article) return {};
  return {
    title: `${article.title} — CETL Institute`,
    description: article.teaser,
    openGraph: {
      title: article.title,
      description: article.teaser,
      type: "article",
      locale: "de_AT",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  if (!getArticle("de", slug)) notFound();
  return <ArticleView slug={slug} />;
}
