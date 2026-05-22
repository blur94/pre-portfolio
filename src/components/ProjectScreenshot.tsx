"use client";

import Image from "next/image";

import AnimatedContent from "@/components/AnimatedContent";
import type { Work } from "@/lib/works";

interface ProjectScreenshotProps {
  work: Work;
}

export function ProjectScreenshot({ work }: ProjectScreenshotProps) {
  return (
    <div className="px-6 pb-6 md:px-10">
      <AnimatedContent distance={60} duration={1}>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900/60">
        {work.coverImage ? (
          <Image
            src={work.coverImage}
            alt={`${work.title} dashboard screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />
        ) : (
          <div className="flex h-full items-end p-6">
            <span
              className="text-xs text-muted-foreground/30"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {work.title} — dashboard screenshot
            </span>
          </div>
        )}
      </div>
      </AnimatedContent>
    </div>
  );
}
