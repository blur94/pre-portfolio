"use client";

import {
  Atom,
  Blocks,
  Brush,
  Cloud,
  Code2,
  Database,
  Globe2,
  Plug,
  Server,
  SquareTerminal,
  Triangle,
  Zap,
  type LucideIcon,
} from "lucide-react";

const items: { icon: LucideIcon; label: string }[] = [
  { icon: Atom, label: "React" },
  { icon: Zap, label: "Next.js" },
  { icon: Code2, label: "TypeScript" },
  { icon: Blocks, label: "Mantine" },
  { icon: Triangle, label: "Tailwind" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Cloud, label: "Vercel" },
  { icon: Plug, label: "Paystack" },
  { icon: Server, label: "shadcn" },
  { icon: SquareTerminal, label: "Node.js" },
  { icon: Brush, label: "Figma" },
  { icon: Globe2, label: "Cloudflare" },
];

const loopItems = [...items, ...items, ...items];

export function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y py-14"
      style={{
        borderColor: "var(--border-faint)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%)",
      }}
      aria-label="Tools I work with"
    >
      <div className="animate-marquee flex w-max gap-[72px] whitespace-nowrap [animation-play-state:running] hover:[animation-play-state:paused]">
        {loopItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <span
              key={`${item.label}-${index}`}
              className="inline-flex items-center gap-3.5 text-2xl font-medium tracking-[-0.06em]"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--misc-icon-stroke)",
              }}
            >
              <Icon size={28} aria-hidden="true" />
              {item.label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
