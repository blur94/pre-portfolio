"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { ArticleCard, type Article } from "@/components/ArticleCard";

const articles: Article[] = [
  {
    slug: "accessible-uis-nextjs",
    title: "Building Accessible UIs with Next.js 14",
    description:
      "A practical guide to shipping inclusive web experiences — from semantic HTML to ARIA patterns — without slowing down your Next.js app.",
    date: "Jan 2025",
    url: "#",
  },
  {
    slug: "designing-with-instrument-serif",
    title: "The Art of Type: Designing with Instrument Serif",
    description:
      "How choosing an expressive display typeface can transform a portfolio from functional to memorable — and why contrast between fonts matters.",
    date: "Feb 2025",
    url: "#",
  },
  {
    slug: "building-for-african-markets",
    title: "From Nigeria to the World: Building for African Markets",
    description:
      "Lessons from shipping production apps in Nigeria — handling unreliable networks, local payment gateways, and designing for low-end devices.",
    date: "Mar 2025",
    url: "#",
  },
];

export function ArticlesSection() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <AnimatedContent distance={30}>
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Recent Articles
          </h2>
        </AnimatedContent>
        <a
          href="#"
          className="flex min-h-[44px] items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          All Articles →
        </a>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
