import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="flex flex-col items-center gap-5 px-6 py-20 text-center md:py-28">
      <h2
        className="max-w-sm text-4xl leading-snug md:max-w-md md:text-5xl"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        Have a project in mind?
      </h2>
      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:max-w-sm">
        Whether it&apos;s a product, a brand, or just an idea — I&apos;d love to
        help bring it to life with thoughtful design and solid code.
      </p>
      <Button
        render={<Link href="/contact" />}
        nativeButton={false}
        variant="outline"
        className="mt-1 rounded-full px-7"
      >
        Send me a message here
      </Button>
    </section>
  );
}
