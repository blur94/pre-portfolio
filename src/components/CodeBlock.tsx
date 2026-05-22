"use client";

import AnimatedContent from "@/components/AnimatedContent";

interface CodeBlockProps {
  content: string;
  label?: string;
}

export function CodeBlock({ content, label = "Project structure" }: CodeBlockProps) {
  return (
    <section className="border-t border-border/40 px-6 py-12 md:px-10 md:py-16">
      <AnimatedContent distance={40} duration={0.7}>
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <h2
            className="text-xl font-semibold tracking-tight text-muted-foreground md:text-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {label}
          </h2>
          <div className="overflow-x-auto rounded-xl bg-zinc-950 p-6 md:p-8">
            <pre className="text-xs leading-relaxed text-zinc-400 md:text-sm">
              <code>{content}</code>
            </pre>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
