"use client";

import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import AnimatedContent from "@/components/AnimatedContent";

export function ContactHero() {
  return (
    <div className="mb-10">
      <AnimatedContent distance={20} duration={0.5} delay={0}>
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft
            className="size-3.5 transition-transform group-hover:-translate-x-1"
          />
          Back to home
        </Link>
      </AnimatedContent>

      <AnimatedContent distance={40} duration={0.8} delay={0.1}>
        <h1 className="mt-8 text-5xl leading-tight tracking-tight md:text-6xl lg:text-[64px] lg:tracking-[-0.06em]">
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
      </AnimatedContent>

      <AnimatedContent distance={20} duration={0.5} delay={0.2}>
        <p className="mt-4 max-w-md text-muted-foreground">
          Have a project in mind or just want to say hello? Drop me a message
          and I&apos;ll get back to you.
        </p>
      </AnimatedContent>

      <AnimatedContent distance={0} duration={0.5} delay={0.3}>
        <div className="mt-8 mb-2 h-px w-16 bg-border" />
      </AnimatedContent>
    </div>
  );
}
