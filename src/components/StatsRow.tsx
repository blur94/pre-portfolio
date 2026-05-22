"use client";

import AnimatedContent from "@/components/AnimatedContent";

const stats = [
  { value: "6+", label: "Years of\nExperience" },
  { value: "12", label: "Projects\nCompleted" },
  { value: "8", label: "Tech Stacks\nMastered" },
];

export function StatsRow() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-20">
      <div className="grid grid-cols-3 divide-x divide-border/40">
        {stats.map((stat, i) => (
          <AnimatedContent key={stat.value} distance={40} duration={0.7} delay={i * 0.1}>
            <div className="flex flex-col items-center gap-3 px-4">
              <span
                className="text-6xl font-medium leading-none tracking-tight md:text-7xl lg:text-[72px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-center text-sm font-medium text-muted-foreground md:text-base"
                style={{ fontFamily: "var(--font-heading)", whiteSpace: "pre-line" }}
              >
                {stat.label}
              </span>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}
