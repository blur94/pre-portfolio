"use client";

import { useState, useEffect } from "react";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siMantine,
  siTailwindcss,
  siPostgresql,
  siVercel,
  siCloudflare,
  siFigma,
  siNodedotjs,
  siShadcnui,
  siReactquery,
  SimpleIcon,
} from "simple-icons";

const items: { icon: SimpleIcon; label: string }[] = [
  { icon: siReact, label: "React" },
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siMantine, label: "Mantine" },
  { icon: siTailwindcss, label: "Tailwind" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siVercel, label: "Vercel" },
  { icon: siReactquery, label: "React Query" },
  { icon: siShadcnui, label: "shadcn" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siFigma, label: "Figma" },
  { icon: siCloudflare, label: "Cloudflare" },
];

const loopItems = [...items, ...items, ...items, ...items];

export function Marquee() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.getAttribute("data-theme") || "dark");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

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
          const color =
            item.icon.hex === "000000"
              ? theme === "dark"
                ? "#FFFFFF"
                : "#000000"
              : `#${item.icon.hex}`;

          return (
            <span
              key={`${item.label}-${index}`}
              className="inline-flex items-center gap-3.5 text-2xl font-medium tracking-[-0.06em]"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--misc-icon-stroke)",
              }}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width={28}
                height={28}
                // fill="currentColor"
                fill={color}
                dangerouslySetInnerHTML={{ __html: item.icon.svg }}
                aria-hidden="true"
              />
              {item.label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
