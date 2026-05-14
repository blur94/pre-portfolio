import type { ReactNode } from "react";

interface ContentSectionProps {
  heading: string;
  children: ReactNode;
}

export function ContentSection({ heading, children }: ContentSectionProps) {
  return (
    <section className="border-t border-border/40 px-6 py-12 md:px-10 md:py-16">
      <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
        <h2
          className="text-xl font-semibold tracking-tight text-muted-foreground md:text-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {heading}
        </h2>
        <div className="max-w-2xl">{children}</div>
      </div>
    </section>
  );
}
