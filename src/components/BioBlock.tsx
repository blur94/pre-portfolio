import Link from "next/link";

import { Button } from "@/components/ui/button";

export function BioBlock() {
  return (
    <section className="px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-3xl flex flex-col items-center gap-8 text-center">
        <p
          className="text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-loose"
          style={{ fontFamily: "var(--font-body)" }}
        >
          I&apos;m a passionate software developer with over 6 years of
          experience crafting meaningful digital experiences. I specialise in
          frontend engineering — building fast, accessible, and beautifully
          designed interfaces with React, Next.js, and TypeScript. When
          I&apos;m not writing code I&apos;m exploring the intersection of
          music, design, and technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            render={<Link href="/works" />}
            nativeButton={false}
            variant="outline"
            className="rounded-full px-8"
          >
            See my works
          </Button>
          <Button
            render={<a href="/cv.pdf" download />}
            nativeButton={false}
            variant="outline"
            className="rounded-full px-8"
          >
            Download my CV
          </Button>
        </div>
      </div>
    </section>
  );
}
