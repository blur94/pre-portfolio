"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCcw, TriangleAlert } from "lucide-react";

import GridMotion from "@/components/GridMotion";
import Magnet from "@/components/Magnet";
import { Button } from "@/components/ui/button";

const GRID_ITEMS = [
  "Next.js",
  "TypeScript",
  "Design systems",
  "Case studies",
  "Frontend",
  "Motion",
  "React",
  "Interfaces",
  "BalmofCodes",
  "GSAP",
  "Contact",
  "Portfolio",
  "Live project",
  "Accessibility",
  "Tailwind CSS",
  "Resend",
  "WebGL",
  "About",
  "Gilead Odo",
  "APIs",
  "Code reviews",
  "Shipping",
  "UI polish",
  "Open graph",
  "Performance",
  "Works",
  "Animations",
  "Build logs",
];

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-70">
        <GridMotion
          items={GRID_ITEMS}
          gradientColor="transparent"
          tileClassName="min-h-32 !border-zinc-300/70 !bg-zinc-100/85 !text-zinc-600/70 text-sm font-semibold uppercase tracking-normal shadow-2xl shadow-zinc-300/30 dark:!border-white/10 dark:!bg-zinc-950/85 dark:!text-zinc-300/55 dark:shadow-black/40 md:text-base"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_58%_62%_at_50%_48%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.86)_42%,rgba(255,255,255,0.58)_72%,rgba(255,255,255,0.94)_100%)] dark:bg-[radial-gradient(ellipse_58%_62%_at_50%_48%,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.78)_42%,rgba(0,0,0,0.48)_72%,rgba(0,0,0,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),transparent_24%,transparent_70%,rgba(255,255,255,0.9))] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.7),transparent_24%,transparent_70%,rgba(0,0,0,0.82))]" />

      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-7 flex size-16 items-center justify-center rounded-full border border-primary/45 bg-background/85 shadow-[0_0_40px_rgba(120,140,0,0.12)] backdrop-blur dark:shadow-[0_0_40px_rgba(242,251,122,0.14)]">
          <TriangleAlert className="size-7 text-primary" aria-hidden="true" />
        </div>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-destructive/25 bg-destructive/10 px-4 py-2 text-xs font-semibold uppercase text-destructive">
          <span className="size-1.5 rounded-full bg-destructive" />
          {error.digest ? `Error #${error.digest}` : "Runtime error"}
        </div>

        <h1 className="max-w-3xl text-5xl font-bold leading-none text-foreground md:text-7xl">
          <span className="font-display italic font-normal text-muted-foreground">
            Something
          </span>{" "}
          <span className="font-heading not-italic">went wrong</span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
          A portfolio page hit an unexpected snag. You can retry the render or
          step back to the homepage.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Magnet magnetStrength={3} padding={50}>
            <Button onClick={reset} size="lg" className="rounded-full px-8">
              Try again
              <RotateCcw data-icon="inline-end" aria-hidden="true" />
            </Button>
          </Magnet>
          <Button
            render={<Link href="/" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            Back home
            <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
