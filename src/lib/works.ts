export type WorkArtifact =
  | { kind: "image"; src: string }
  | { kind: "code"; body: string };

export type WorkProcessStep = {
  title: string;
  body: string;
  artifact: WorkArtifact;
};

export type WorkOutcome = {
  number: string;
  label: string;
};

export type Work = {
  slug: string;
  title: string;
  descriptor: string;
  overview: string;
  role: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  isLive: boolean;
  coverImage: string;
  context: string;
  constraints: string[];
  process: WorkProcessStep[];
  outcomes: WorkOutcome[];
  lessons: string;
};

export const works: Work[] = [
  {
    slug: "verivafrica",
    title: "VerivAfrica",
    descriptor: "Identity verification for African fintechs.",
    overview:
      "VerivAfrica provides real-time identity verification across African markets — NIN, BVN, driver's licence, passport — for fintechs, lenders, and government agencies. I led the partner dashboard and the embeddable SDK.",
    role: "Lead frontend",
    client: "VerivAfrica Ltd.",
    year: "2024",
    category: "Fintech",
    tags: ["React", "Node.js", "PostgreSQL"],
    isLive: true,
    coverImage: "/projects/verivafrica.png",
    context:
      "African KYC vendors all shipped APIs, but few shipped a usable operator surface. Partners stitched our endpoints into homegrown admin tools and lost hours every week chasing failed verifications.",
    constraints: [
      "Render up to 800 live verifications per minute without UI hiccups.",
      "Run inside partner brand shells — no Plinth chrome leaking through.",
      "Pass NDPR audit on the first review pass.",
    ],
    process: [
      {
        title: "Mapping the verification states",
        body: "Eleven outcomes, four document types, three retry paths — I diagrammed the full state graph before writing a single component, then mapped each state to a single status surface in the dashboard.",
        artifact: { kind: "image", src: "/projects/verivafrica.png" },
      },
      {
        title: "A status surface that ages",
        body: "Dashboards rot the moment marketing changes the funnel. I split the partner UI into 'stream' (rolling live events) and 'queue' (work items awaiting an operator), each owning its own data lifecycle. New event types add to the stream without touching the queue.",
        artifact: { kind: "image", src: "/projects/recurrent.png" },
      },
      {
        title: "An SDK that doesn't fight its host",
        body: "The embed SDK ships its own CSS reset and a single :host scope. Partners style the verify button to match their UI; everything inside the iframe is locked to Plinth.",
        artifact: {
          kind: "code",
          body: `// init the embed
import { Veriv } from "@veriv/sdk";

Veriv.init({
  publicKey: process.env.VERIV_KEY,
  theme: "match-parent",
  on: {
    success: (id) => analytics.track("kyc_passed", { id }),
    fail:    (err) => analytics.track("kyc_failed", { err })
  }
});`,
        },
      },
    ],
    outcomes: [
      { number: "11k", label: "Verifications / day at peak" },
      { number: "92%", label: "First-pass success rate" },
      { number: "—40%", label: "Operator time per case" },
    ],
    lessons:
      "Operators don't want 'real-time'. They want predictable. The streaming surface only became useful once we slowed it to a one-second tick and added a pause button. Speed isn't the same as throughput.",
  },
  {
    slug: "recurrent",
    title: "Recurrent.ng",
    descriptor: "Recurring billing on top of Paystack.",
    overview:
      "Nigerian SaaS founders kept losing recurring revenue to silent card failures. Recurrent abstracts Paystack into a subscription primitive — billing intervals, dunning, proration, self-service.",
    role: "Full-stack",
    client: "Recurrent.ng",
    year: "2024",
    category: "Fintech",
    tags: ["Next.js", "Paystack", "PostgreSQL"],
    isLive: true,
    coverImage: "/projects/recurrent.png",
    context:
      "Paystack's subscription primitive only handles fixed-interval billing. Real SaaS needs proration, mid-cycle plan changes, configurable dunning, and self-service — none of which exist in the gateway. Teams were rebuilding the same layer over and over.",
    constraints: [
      "Idempotent on every gateway retry.",
      "Operator dashboard renders three years of history without pagination tricks.",
      "Customer portal lives at a partner subdomain.",
    ],
    process: [
      {
        title: "Subscriptions as an event log",
        body: "Every state change is appended to an immutable log. Reports become reductions, not joins. Bugs become 'replay this customer from event N' instead of 'guess at history'.",
        artifact: { kind: "image", src: "/projects/recurrent.png" },
      },
      {
        title: "Dunning that sells itself",
        body: "The retry copy is the surface most founders touch. I built a copy editor next to the schedule editor — operators see the email a customer would get on day 3 alongside the day-3 retry attempt. No more 'I forgot we said that'.",
        artifact: { kind: "image", src: "/projects/prunepayments-admin.png" },
      },
      {
        title: "A portal that doesn't need support",
        body: "Cancellation needed a reason. I built a free-text reason capture that piped into a one-line analytics surface — not a dashboard. The founders read every reason, every Monday.",
        artifact: { kind: "image", src: "/projects/prunepayments.png" },
      },
    ],
    outcomes: [
      { number: "42", label: "SaaS teams onboarded" },
      { number: "—31%", label: "Involuntary churn after dunning" },
      { number: "₦2.4M", label: "MRR processed monthly" },
    ],
    lessons:
      "The hardest part of subscription billing isn't the math, it's the receipts. Every state change has to be explainable to a customer in one sentence, two years later, after the operator who set it up has left.",
  },
  {
    slug: "qatapolt",
    title: "Qatapolt Admin",
    descriptor: "Operator dashboard for a sports prediction platform.",
    overview:
      "Qatapolt's operations team needed a single pane of glass over live matches, user behaviour, revenue, and content moderation. I built the dashboard, the chart components, and the WebSocket layer that feeds them.",
    role: "Frontend & data viz",
    client: "Qatapolt",
    year: "2023",
    category: "Sports",
    tags: ["React", "TypeScript", "Recharts"],
    isLive: true,
    coverImage: "/projects/qatapolt.png",
    context:
      "The prediction platform was burning operator hours triaging fraud signals through three separate tools. We needed one operator surface — live, dense, and quiet enough to leave open on a second monitor.",
    constraints: [
      "Render 60s of live match ticks at 30fps on mid-tier laptops.",
      "Operator roles split four ways, with read-only audit history.",
      "Zero new dependencies — Recharts only.",
    ],
    process: [
      {
        title: "What is a 'second monitor' chart?",
        body: "I redrew every chart from a 'glance' baseline — what does this look like at 1m, peripheral vision, on a Friday afternoon? Heatmaps replaced bar charts wherever density mattered more than precision.",
        artifact: { kind: "image", src: "/projects/qatapolt.png" },
      },
      {
        title: "Streaming without flicker",
        body: "The WebSocket layer batches ticks at 100ms boundaries. The chart layer requests animation frames only when a tick crosses a redraw threshold. Operators stopped noticing the live data — which is exactly what we wanted.",
        artifact: {
          kind: "code",
          body: `// match-tick batching
useEffect(() => {
  const ws = new WebSocket(MATCH_WS);
  let queue: unknown[] = [];
  let raf: number | null = null;
  ws.onmessage = (e) => {
    queue.push(JSON.parse(e.data));
    if (raf) return;
    raf = requestAnimationFrame(() => {
      flush(queue);
      queue = [];
      raf = null;
    });
  };
  return () => ws.close();
}, []);`,
        },
      },
    ],
    outcomes: [
      { number: "<60ms", label: "Operator-perceived tick latency" },
      { number: "4", label: "Tools collapsed into one" },
      { number: "100%", label: "Audit trail coverage" },
    ],
    lessons:
      "Dense operator dashboards aren't won on chart libraries. They're won on what you leave out. The first version had 22 widgets; the shipped version has 9, and operators reach for it before their inbox.",
  },
  {
    slug: "prune",
    title: "Prune Payments",
    descriptor: "Cleaner billing for small Nigerian merchants.",
    overview:
      "Prune lets corner-shop merchants take payments without a POS. I designed and shipped both the customer-facing checkout and the merchant admin.",
    role: "Frontend & design",
    client: "Prune",
    year: "2023",
    category: "Fintech",
    tags: ["Next.js", "Tailwind", "Mantine"],
    isLive: true,
    coverImage: "/projects/prunepayments.png",
    context:
      "Most merchant tools assume a literate, English-first, smartphone-first user. Prune's first customers ran their tills on a single Android tablet in poor light, between five other things.",
    constraints: [
      "Every primary action reachable in two taps.",
      "Works in low contrast, single-handed, with greasy fingers.",
      "Receipts print to a Bluetooth thermal printer with no driver.",
    ],
    process: [
      {
        title: "Designed for the worst-case till",
        body: "I sketched the till in the worst lighting we'd ever seen one in — a kiosk under sodium street lamps. Type sizes started at 22px and went up.",
        artifact: { kind: "image", src: "/projects/prunepayments.png" },
      },
      {
        title: "An admin that respects literacy",
        body: "The merchant admin reads at a 6th-grade level. Every number has its currency symbol; every action a verb. No 'Apply'. 'Save'. 'Send'. 'Refund'.",
        artifact: { kind: "image", src: "/projects/prunepayments-admin.png" },
      },
    ],
    outcomes: [
      { number: "2.1s", label: "Median time-to-checkout" },
      { number: "880+", label: "Active merchants" },
      { number: "98.1%", label: "Receipt-print success rate" },
    ],
    lessons:
      "Accessibility isn't a checklist when the user is on a tablet in the sun. It's the whole product. Plinth's 16px minimum body size came directly from this engagement.",
  },
  {
    slug: "raia",
    title: "Raia",
    descriptor: "Compliance, distilled for African insurers.",
    overview:
      "Raia turns regulatory text into testable rules. The product reads a circular from NAICOM or the Kenya IRA, extracts obligations, and routes them to the right operator.",
    role: "Design engineering",
    client: "Raia",
    year: "2024",
    category: "Regtech",
    tags: ["React", "Next.js", "Tailwind"],
    isLive: false,
    coverImage: "/projects/raia-dark.png",
    context:
      "Compliance teams at small insurers were reading 200-page circulars in PDF and translating them into Excel by hand. Mistakes cost real money. Raia exists to turn that translation into a code review.",
    constraints: [
      "Side-by-side reading view — source text and extracted rule, always.",
      "Operators can disagree with the model, in line, with a reason.",
      "Audit-grade: every change is signed and timestamped.",
    ],
    process: [
      {
        title: "The two-column reading view",
        body: "I refused a tab. The source PDF and the extracted rule live side-by-side, scrolling in lockstep. If the operator can't see both at once, the product doesn't work.",
        artifact: { kind: "image", src: "/projects/raia-dark.png" },
      },
      {
        title: "Disagreement as a primary action",
        body: "Most regtech treats human override as an exception. Raia treats it as the loop. Every extracted rule has a 'this is wrong' affordance with a required reason; reasons become training data for the model.",
        artifact: { kind: "image", src: "/projects/raia-light.png" },
      },
    ],
    outcomes: [
      { number: "4", label: "Insurers in pilot" },
      { number: "—68%", label: "Time to translate a circular" },
      { number: "97%", label: "Operator agreement with extraction" },
    ],
    lessons:
      "When the model is the product, the disagreement UI is the product. Hide it and you lose the loop.",
  },
  {
    slug: "reunitar",
    title: "Reunitar",
    descriptor: "Family reunification logistics, simplified.",
    overview:
      "Reunitar coordinates the paperwork of family reunification for African diaspora — embassy appointments, document checklists, immigration timelines.",
    role: "Frontend",
    client: "Reunitar",
    year: "2022",
    category: "Civic",
    tags: ["Next.js", "Prisma", "shadcn/ui"],
    isLive: false,
    coverImage: "/projects/reunitar-dark.png",
    context:
      "Reunification is a multi-year, multi-jurisdiction process. Families used a different tool per step — sometimes a different tool per family member. Things got lost.",
    constraints: [
      "Works across timezones, languages, and consular calendars.",
      "Visible progress for non-technical family members.",
      "Document uploads survive a two-year archive policy.",
    ],
    process: [
      {
        title: "One timeline, many actors",
        body: "I built a vertical timeline with branching lanes — sponsor, applicant, lawyer, embassy. Each lane owns its own steps; the timeline collapses to a single trunk when there's only one active path.",
        artifact: { kind: "image", src: "/projects/reunitar-dark.png" },
      },
    ],
    outcomes: [
      { number: "1,200+", label: "Families onboarded" },
      { number: "—54%", label: "Time-to-first-appointment" },
      { number: "3", label: "Embassies integrated" },
    ],
    lessons:
      "Civic-tech UI is logistics dressed as software. Every screen has to survive a 14-month gap and still make sense.",
  },
];

export function nextOf(slug: string): Work {
  const i = works.findIndex((p) => p.slug === slug);
  if (i < 0) return works[0];
  return works[(i + 1) % works.length];
}

export function prevOf(slug: string): Work {
  const i = works.findIndex((p) => p.slug === slug);
  if (i < 0) return works[0];
  return works[(i - 1 + works.length) % works.length];
}

export const NEXT_OF = nextOf;
export const PREV_OF = prevOf;
