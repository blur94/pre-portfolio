"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

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
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p
        className="text-8xl font-bold tracking-tight text-muted-foreground/20 md:text-[160px]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        500
      </p>
      <div className="-mt-4 flex flex-col items-center gap-3">
        <h1
          className="text-3xl font-semibold tracking-tight md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Something went wrong
        </h1>
        <p className="max-w-sm text-muted-foreground">
          An unexpected error occurred. Try refreshing, or come back later.
        </p>
      </div>
      <Button
        size="lg"
        className="rounded-full px-8"
        onClick={reset}
      >
        Try again
      </Button>
    </main>
  );
}
