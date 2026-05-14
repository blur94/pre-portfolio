"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ContactHero() {
  return (
    <div className="mb-8">
      <Link
        href="/"
        className="group mb-7 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft
          className="size-3.5 transition-transform group-hover:-translate-x-1"
          aria-hidden="true"
        />
        Back to home
      </Link>

      <h1 className="text-5xl leading-tight tracking-tight md:text-6xl lg:text-[64px] lg:tracking-[-0.06em]">
        <span
          className="text-muted-foreground"
          style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
        >
          Hi there,{" "}
        </span>
        <span
          className="not-italic font-bold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s Talk
        </span>
      </h1>

      <p className="mt-4 max-w-md text-muted-foreground">
        Have a project in mind or just want to say hello? Drop me a message and
        I&apos;ll get back to you.
      </p>

      <div className="mt-6 mb-1 h-px w-16 bg-border" />
    </div>
  );
}
