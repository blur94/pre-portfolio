import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p
        className="text-8xl font-bold tracking-tight text-muted-foreground/20 md:text-[160px]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        404
      </p>
      <div className="-mt-4 flex flex-col items-center gap-3">
        <h1
          className="text-3xl font-semibold tracking-tight md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Page not found
        </h1>
        <p className="max-w-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Button
        render={<Link href="/" />}
        nativeButton={false}
        size="lg"
        className="rounded-full px-8"
      >
        Back to home
      </Button>
    </main>
  );
}
