const experiences = [
  {
    company: "Freelance",
    period: "2023 — Present",
    role: "Senior Frontend Developer",
    description:
      "Delivering end-to-end frontend solutions for clients across Nigeria and beyond — from design system implementation to production deployment.",
  },
  {
    company: "Previous Company",
    period: "2021 — 2023",
    role: "Frontend Developer",
    description:
      "Built and maintained responsive web applications, integrated third-party APIs, and contributed to a shared component library used across 4 products.",
  },
  {
    company: "Early Career",
    period: "2019 — 2021",
    role: "Junior Developer",
    description:
      "Learned the fundamentals of web development, contributed to client projects, and developed a strong foundation in React and modern CSS.",
  },
];

export function ExperienceCard() {
  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-card p-6 md:p-8">
      <h2
        className="text-2xl font-semibold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Experience
      </h2>

      <div className="flex flex-col divide-y divide-border/40">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-3 py-6 first:pt-0 last:pb-0">
            {/* Company + date */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className="font-semibold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {exp.company}
              </span>
              <span
                className="rounded-full border border-border/60 px-3 py-0.5 text-xs font-medium text-muted-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {exp.period}
              </span>
            </div>

            {/* Role */}
            <p
              className="text-sm font-medium text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {exp.role}
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
