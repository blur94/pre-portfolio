import Image from "next/image";
import Link from "next/link";

import { LiveBadge } from "@/components/LiveBadge";
import type { Work } from "@/lib/works";

interface ProjectRowProps {
  work: Work;
}

export function ProjectRow({ work }: ProjectRowProps) {
  return (
    <article className="grid items-start gap-8 border-t border-border/40 py-12 md:grid-cols-2 md:gap-14 md:py-16">
      {/* Screenshot */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900/60">
        {work.coverImage ? (
          <Image
            src={work.coverImage}
            alt={`${work.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-end p-4">
            <span className="text-xs text-muted-foreground/30">screenshot</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 md:pt-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3
            className="text-3xl font-semibold leading-tight md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {work.title}
          </h3>
          {work.isLive && <LiveBadge />}
        </div>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          {work.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 pt-1 text-sm font-medium">
          {work.liveUrl && (
            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              View Project ↗
            </a>
          )}
          {work.repoUrl && (
            <a
              href={work.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              View Repository ↗
            </a>
          )}
          <Link
            href={`/works/${work.slug}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Case Study →
          </Link>
        </div>
      </div>
    </article>
  );
}
