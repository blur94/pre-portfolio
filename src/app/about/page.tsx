import { Fragment } from "react";

import { Kicker } from "@/components/Kicker";

export const metadata = {
  title: "About",
  description:
    "About Gilead Odo, a frontend developer building durable operator surfaces and web platforms.",
};

const articles = [
  {
    title: "What I work on",
    body: [
      "Most of my work is taking a process someone already does in spreadsheets, on paper, or across three browser tabs and turning it into a single screen that gets out of their way.",
      "The projects I&rsquo;m proudest of share a pattern: a clear operator, a real workflow, and constraints that make the interesting decisions obvious. VerivAfrica, Recurrent, Qatapolt Admin: these all started as the question, how do we stop using spreadsheets for this?",
    ],
  },
  {
    title: "How I work",
    body: [
      "I lean on React and Next.js because that&rsquo;s where the ecosystem is, but I&rsquo;ve shipped production code in Mantine, Tailwind, shadcn, Recharts, Prisma, and whatever fits the brief.",
      "On the design side, I&rsquo;m a builder, not a stylist. A tight type system, two or three colours, no decoration that hasn&rsquo;t earned its place. Most project decisions begin and end with that constraint.",
    ],
  },
  {
    title: "How I think about the work",
    body: [
      "Operator-grade software is durable software. It has to survive a feature freeze, a marketing pivot, three staff turnovers, and the audit that happens two years later. I write for that horizon.",
      "The best engagements look like four to twelve weeks of focused building, often inside an existing team. I work best as a hands-on IC, sometimes as a fractional lead, never as the loudest voice in the room.",
    ],
  },
];

const experience = [
  {
    title: "Senior frontend engineer",
    company: "VerivAfrica",
    years: "2023 - Present",
    bullets: [
      "Led the partner dashboard from greenfield to production at 800 verifications / minute.",
      "Built the embeddable verification SDK and shipped the Plinth design system to four partners.",
      "Co-ran operator interviews that shaped the queue / stream split.",
    ],
  },
  {
    title: "Frontend engineer",
    company: "Recurrent.ng",
    years: "2022 - 2023",
    bullets: [
      "Architected the subscription event log; reports became reductions, not joins.",
      "Designed and shipped the customer self-service portal.",
      "Wrote the copy editor for retry sequences.",
    ],
  },
  {
    title: "Frontend engineer",
    company: "Prune Payments",
    years: "2021 - 2022",
    bullets: [
      "Built the merchant till for low-light, single-handed use on a budget tablet.",
      "Brought type sizes up from a 14px floor to a 22px floor; complaints dropped by half.",
    ],
  },
  {
    title: "Frontend developer",
    company: "Freelance / contract",
    years: "2019 - 2021",
    bullets: [
      "Worked across regtech, fintech, and civic-tech briefs.",
      "Started keeping a personal token system, the seed of what became Plinth.",
    ],
  },
];

export default function About() {
  return (
    <>
      <section className="mx-auto px-6 pb-20 pt-20 md:px-12" style={{ maxWidth: "var(--container-max)" }}>
        <p
          className="mb-6 text-[32px] font-semibold tracking-[-0.06em]"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-muted)" }}
        >
          About
        </p>
        <h1
          className="mb-8 leading-[0.98] tracking-[-0.06em]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 7vw, 96px)",
            color: "var(--text-primary)",
          }}
        >
          <span style={{ color: "var(--text-display-dim)" }}>I&rsquo;m </span>Gilead Odo,
          <br />a frontend developer.
        </h1>
        <p
          className="mx-auto max-w-[44ch] text-center text-[22px] leading-[1.4] tracking-[-0.02em]"
          style={{ color: "var(--text-secondary)" }}
        >
          I build operator surfaces, billing primitives, and the dull, durable parts of African internet products.
        </p>
      </section>

      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "var(--container-max)" }}>
        <div className="h-px" style={{ backgroundColor: "var(--border-faint)" }} />
      </div>

      <section className="mx-auto px-6 py-24 md:px-12" style={{ maxWidth: "var(--container-max)" }}>
        <div className="mx-auto flex max-w-[720px] flex-col gap-16">
          {articles.map((article) => (
            <article key={article.title}>
              <h2
                className="mb-4 text-2xl font-semibold leading-[1.2] tracking-[-0.06em]"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
              >
                {article.title}
              </h2>
              {article.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-[18px] text-[22px] leading-[1.55] tracking-[-0.02em] last:mb-0"
                  style={{ color: "var(--text-secondary)" }}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto px-6 pb-24 md:px-12" style={{ maxWidth: "var(--container-max)" }}>
        <div className="mb-14">
          <Kicker>Experience</Kicker>
          <h2
            className="text-[32px] font-semibold leading-[1.15] tracking-[-0.06em]"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            A short, honest track record.
          </h2>
        </div>

        <div className="flex flex-col">
          {experience.map((role, index) => (
            <Fragment key={`${role.title}-${role.company}`}>
              <article className="grid gap-8 py-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
                <div>
                  <h3
                    className="mb-1.5 text-2xl font-semibold leading-[1.2] tracking-[-0.06em]"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                  >
                    {role.title}
                  </h3>
                  <p
                    className="text-lg font-medium tracking-[-0.04em]"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--text-muted)" }}
                  >
                    {role.company}
                  </p>
                </div>
                <div>
                  <span
                    className="mb-[18px] inline-block rounded-full border px-2.5 py-1 text-xs font-medium uppercase tracking-[-0.02em]"
                    style={{
                      fontFamily: "var(--font-heading)",
                      borderColor: "var(--border-faint)",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {role.years}
                  </span>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-6 text-base font-medium leading-[1.5] tracking-[-0.02em]"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--text-secondary)" }}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-[0.7em] h-px w-2.5"
                          style={{ backgroundColor: "var(--text-muted)" }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              {index < experience.length - 1 ? (
                <div className="h-px" style={{ backgroundColor: "var(--border-default)" }} />
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
