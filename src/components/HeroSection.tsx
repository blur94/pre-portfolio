"use client";

import Link from "next/link";

import Aurora from "@/components/Aurora";
import SplitText from "@/components/SplitText";
import AnimatedContent from "@/components/AnimatedContent";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 opacity-40">
        <Aurora
          colorStops={["#d4a040", "#1a1a2e", "#d4a040"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.4}
        />
      </div>


<div className="relative z-10 grid min-h-[90vh] items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
        {/* Profile photo — left column, desktop only */}
        <div className="hidden aspect-4/5 w-full overflow-hidden rounded-2xl bg-zinc-900/60 md:block">
          {/* Swap in: <Image src="/profile.jpg" alt="Gilead Odo" fill className="object-cover" /> */}
          <div className="flex h-full items-end p-6">
            <span className="text-xs text-muted-foreground/30">
              profile photo
            </span>
          </div>
        </div>

        {/* Text content — right column */}
        <div className="flex flex-col gap-7">
          <div className="flex items-end gap-3">
            <SplitText
              text="Gilead Odo"
              tag="h1"
              className="text-5xl font-normal leading-tight tracking-tight md:text-6xl lg:text-7xl"
              textAlign="left"
              splitType="chars"
              delay={40}
              duration={1}
              from={{ opacity: 0, y: 60, rotateX: -40 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
            />
            <span
              className="mb-1 text-4xl md:text-5xl lg:text-6xl"
              aria-hidden="true"
            >
              👋
            </span>
          </div>

          <AnimatedContent distance={30} duration={0.7} delay={0.4}>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
              Software developer exploring the intersection of{" "}
              <span className="text-foreground">design</span>,{" "}
              <span className="text-foreground">music</span>, and{" "}
              <span className="text-foreground">code</span>.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={20} duration={0.6} delay={0.6}>
            <div className="flex flex-wrap gap-3">
              <Button
                render={<Link href="/works" />}
                nativeButton={false}
                size="lg"
                className="h-11 rounded-full px-8"
              >
                See my works
              </Button>
              <Button
                render={<a href="/cv.pdf" download />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-11 rounded-full px-8"
              >
                Download my CV
              </Button>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
