"use client";

import AnimatedContent from "@/components/AnimatedContent";

export function AboutHeroSection() {
  return (
    <section className="px-6 pb-0 pt-16 md:px-10 md:pt-24">
      {/* Centered text block */}
      <div className="flex flex-col items-center gap-5 text-center">
        <AnimatedContent distance={40} duration={0.8} delay={0}>
          <h1 className="max-w-3xl text-5xl leading-tight tracking-tight md:text-6xl lg:text-[64px]">
            {/* Dim serif half */}
            <span
              className="text-muted-foreground"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              Hi there, I&apos;m{" "}
            </span>
            {/* Bold sans half */}
            <span
              className="not-italic font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Gilead Odo
            </span>{" "}
            <span aria-hidden="true">👋</span>
          </h1>
        </AnimatedContent>

        <AnimatedContent distance={20} duration={0.7} delay={0.2}>
          <p
            className="text-lg text-muted-foreground md:text-xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Web Developer partner
          </p>
        </AnimatedContent>
      </div>

      {/* Full-width photo */}
      <AnimatedContent distance={30} duration={0.8} delay={0.4}>
        <div className="relative mt-12 h-75 w-full overflow-hidden rounded-2xl border border-dashed border-border bg-muted md:h-105 lg:h-125">
          {/* Swap in: <Image src="/about-photo.jpg" alt="Gilead Odo" fill className="object-cover grayscale" /> */}
          <div className="flex h-full items-center justify-center">
            <span
              className="text-xs text-muted-foreground/40"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Profile photo
            </span>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
