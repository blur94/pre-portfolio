import Image from "next/image";

interface ProjectGalleryProps {
  images?: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const slots = images && images.length > 0 ? images : [null, null, null];

  return (
    <section className="border-t border-border/40 px-6 py-12 md:px-10 md:py-16">
      <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
        <h2
          className="text-xl font-semibold tracking-tight text-muted-foreground md:text-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Gallery
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {slots.map((src, i) => (
            <div
              key={i}
              className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900/60"
            >
              {src ? (
                <Image
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-end p-3">
                  <span
                    className="text-xs text-muted-foreground/30"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    screenshot {i + 1}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
