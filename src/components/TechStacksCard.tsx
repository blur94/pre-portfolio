"use client";

import AnimatedContent from "@/components/AnimatedContent";

const categories = [
  {
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Server-Side",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    name: "Tools",
    items: ["Git", "Figma", "VS Code", "Vercel", "Docker", "Linear"],
  },
];

export function TechStacksCard() {
  return (
    <AnimatedContent distance={50}>
      <div className="flex flex-col gap-8 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "var(--bg-surface, var(--card))" }}>
        <h2
          className="text-2xl font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          My Tech Stacks
        </h2>

        <div className="flex flex-col gap-8">
          {categories.map((cat, i) => (
            <AnimatedContent key={cat.name} distance={20} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                {/* Category label with lime underline */}
                <div className="flex flex-col gap-1.5">
                  <span
                    className="text-sm font-semibold uppercase tracking-widest text-muted-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cat.name}
                  </span>
                  <div className="h-px w-full bg-border/40">
                    <div className="h-full w-8 bg-primary" />
                  </div>
                </div>

                {/* Tech items */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 px-3 py-1 text-xs text-foreground/80"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
}
