"use client";

import AnimatedContent from "@/components/AnimatedContent";

export function PictureGallery() {
  return (
    <AnimatedContent distance={40}>
      <section className="px-6 py-16 md:px-10 md:py-20">
        <h2
          className="mb-8 text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Picture
        </h2>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="size-48 shrink-0 overflow-hidden rounded-2xl bg-zinc-900/60 md:size-56 lg:size-64"
            >
            {/* Swap in: <Image src={`/gallery/${i+1}.jpg`} alt="" fill className="object-cover grayscale" /> */}
            <div className="flex h-full items-end p-3">
              <span className="text-xs text-muted-foreground/30">
                photo {i + 1}
              </span>
            </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedContent>
  );
}
