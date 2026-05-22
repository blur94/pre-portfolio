const items = [
  "Frontend Development",
  "UI Design",
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "GSAP",
  "Motion",
  "Open to Work",
];

const repeated = [...items, ...items, ...items];

export function MarqueeSeparator() {
  return (
    <div
      className="overflow-hidden border-y py-4"
      style={{ borderColor: "var(--misc-separator, var(--border))" }}
    >
      <div className="flex animate-marquee gap-0 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-xs font-medium uppercase tracking-widest"
            style={{
              color: "var(--misc-separator, var(--muted-foreground))",
              fontFamily: "var(--font-heading)",
            }}
          >
            {item}
            <span
              className="inline-block size-1 rounded-full"
              style={{ backgroundColor: "var(--misc-separator, var(--muted-foreground))" }}
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
