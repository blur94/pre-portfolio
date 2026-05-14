import Image from "next/image";

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  url: string;
  coverImage?: string;
};

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col gap-4">
      {/* Cover image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900/60">
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-end p-4">
            <span className="text-xs text-muted-foreground/30">article image</span>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-xl font-semibold leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {article.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span style={{ fontFamily: "var(--font-heading)" }}>{article.date}</span>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition-colors hover:text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Read Article ↗
        </a>
      </div>
    </article>
  );
}
