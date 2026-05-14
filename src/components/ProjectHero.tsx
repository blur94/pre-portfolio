import Link from "next/link";

import { LiveBadge } from "@/components/LiveBadge";
import { Button } from "@/components/ui/button";
import type { Work } from "@/lib/works";

interface ProjectHeroProps {
  work: Work;
}

export function ProjectHero({ work }: ProjectHeroProps) {
  return (
    <section className="px-6 pb-12 pt-10 md:px-10 md:pt-14">
      {/* Back link */}
      <Link
        href="/works"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        ← Back to works
      </Link>

      <div className="flex max-w-3xl flex-col gap-6">
        {/* Title + badge */}
        <div className="flex flex-wrap items-center gap-4">
          <h1
            className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {work.title}
          </h1>
          {work.isLive && <LiveBadge />}
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {work.description}
        </p>

        {/* Links */}
        {(work.liveUrl || work.repoUrl) && (
          <div className="flex flex-wrap gap-3 pt-1">
            {work.liveUrl && (
              <Button
                render={<a href={work.liveUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg"
                className="rounded-full px-8"
              >
                Live Preview ↗
              </Button>
            )}
            {work.repoUrl && (
              <Button
                render={<a href={work.repoUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                View Repository ↗
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
