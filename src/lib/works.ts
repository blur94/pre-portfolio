export type Work = {
  slug: string;
  title: string;
  description: string;
  isLive: boolean;
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
  coverImage?: string;
  // Detail page fields
  overview?: string;
  roles?: string[];
  features?: string[];
  fileTree?: string;
  galleryImages?: string[];
};

export const works: Work[] = [
  {
    slug: "legipro",
    title: "LegiPro",
    description:
      "A legal practice management platform designed to streamline case management, document handling, and client communication for law firms across Nigeria.",
    isLive: true,
    liveUrl: "https://legipro.com",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    overview:
      "LegiPro is a comprehensive practice management suite built specifically for Nigerian law firms. It replaces fragmented spreadsheets and paper files with a unified platform covering the full matter lifecycle — from client intake through billing and archiving. The system handles multi-user roles (partner, associate, paralegal, client) and integrates document generation, deadline tracking, and secure client communication in one place.",
    roles: [
      "Frontend architecture & implementation",
      "Design system build-out",
      "Authentication & role-based access control",
      "Document upload and versioning UI",
      "Billing and invoice generation screens",
    ],
    features: [
      "Matter & case dashboard with status tracking",
      "Document storage with version history",
      "Secure client communication portal",
      "Billing, invoice generation & payment tracking",
      "Role-based access (partner / associate / paralegal / client)",
      "Deadline and court date calendar integration",
    ],
    fileTree: `legipro/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── login/
│   │   ├── dashboard/
│   │   │   ├── matters/
│   │   │   ├── documents/
│   │   │   ├── clients/
│   │   │   └── billing/
│   │   └── api/
│   ├── components/
│   │   ├── ui/
│   │   └── matter/
│   └── lib/
│       ├── auth.ts
│       └── db.ts
├── prisma/
│   └── schema.prisma
└── next.config.ts`,
  },
  {
    slug: "verivafrica",
    title: "VerivAfrica",
    description:
      "An identity verification platform helping African businesses verify customer identities quickly and reliably using government-issued ID documents.",
    isLive: true,
    liveUrl: "https://verivafrica.com",
    tags: ["React", "Node.js", "PostgreSQL"],
    overview:
      "VerivAfrica provides real-time identity verification for African markets, supporting NIN, BVN, driver's licence, and international passport checks across multiple countries. The platform serves fintechs, lending apps, and government agencies that need to verify user identity at scale. It exposes both a developer-facing API and a white-label dashboard, allowing partners to integrate verification flows directly into their products.",
    roles: [
      "Frontend dashboard development",
      "Verification flow UI & UX implementation",
      "API integration and SDK wiring",
      "Real-time status polling and webhook display",
      "Compliance reporting screens",
    ],
    features: [
      "Multi-document verification (NIN, BVN, passport, driver's licence)",
      "Real-time verification status with live polling",
      "Webhook management & event log",
      "Team management and API key provisioning",
      "Compliance & audit reporting",
      "Embeddable verification widget SDK",
    ],
    fileTree: `verivafrica/
├── apps/
│   ├── web/               # Partner dashboard
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   ├── verifications/
│   │   │   │   └── settings/
│   │   │   └── components/
│   └── api/               # Verification engine
│       └── src/
│           ├── providers/
│           └── webhooks/
├── packages/
│   ├── ui/
│   └── sdk/               # Embed SDK
└── pnpm-workspace.yaml`,
  },
  {
    slug: "apas",
    title: "APAS",
    description:
      "An automated procurement and approval system that reduces administrative overhead for government and enterprise procurement workflows.",
    isLive: true,
    tags: ["Next.js", "TypeScript", "Prisma"],
    overview:
      "APAS (Automated Procurement & Approval System) digitises the full procurement lifecycle for government agencies and large enterprises — from purchase requisition through multi-level approval chains to vendor payment. It replaces paper-based workflows that were slow, opaque, and prone to bottlenecks. The system enforces configurable approval hierarchies, maintains an immutable audit trail, and integrates with existing ERP systems via REST APIs.",
    roles: [
      "Lead frontend engineer",
      "Approval workflow engine UI",
      "Multi-level hierarchy configuration screens",
      "Vendor portal implementation",
      "Audit trail and compliance dashboard",
    ],
    features: [
      "Configurable multi-level approval chains",
      "Purchase requisition and PO management",
      "Vendor onboarding and management portal",
      "Budget tracking and spend visibility",
      "Immutable audit trail for compliance",
      "Document e-signing integration",
    ],
    fileTree: `apas/
├── src/
│   ├── app/
│   │   ├── requisitions/
│   │   ├── approvals/
│   │   │   ├── pending/
│   │   │   └── history/
│   │   ├── vendors/
│   │   ├── reports/
│   │   └── api/
│   └── server/
│       ├── workflows/
│       │   └── engine.ts
│       └── notifications/
├── prisma/
│   └── schema.prisma
└── next.config.ts`,
  },
  {
    slug: "qatapolt-admin",
    title: "Qatapolt Admin",
    description:
      "A comprehensive admin dashboard for the Qatapolt platform, providing real-time analytics, user management, and operational controls.",
    isLive: true,
    tags: ["React", "TypeScript", "Recharts"],
    overview:
      "Qatapolt Admin is the internal operations hub for Qatapolt, a sports prediction and analytics platform. It gives operators a single pane of glass over match events, user behaviour, revenue, and content moderation in real time. The dashboard handles high-frequency data — live match ticks, bet placements, and fraud signals — and renders it clearly for non-technical operators. Custom chart components were built to handle the data volume without compromising responsiveness.",
    roles: [
      "Frontend development & architecture",
      "Custom data visualisation components",
      "Real-time data integration (WebSockets)",
      "User management and moderation UI",
      "Admin role permission system",
    ],
    features: [
      "Real-time match event monitoring via WebSocket",
      "User management, KYC review, and account actions",
      "Revenue and subscription analytics with custom charts",
      "Configurable notification and alert rules",
      "Content moderation queue",
      "Audit log for all admin actions",
    ],
    fileTree: `qatapolt-admin/
├── src/
│   ├── pages/
│   │   ├── dashboard/
│   │   ├── users/
│   │   │   ├── list/
│   │   │   └── [id]/
│   │   ├── matches/
│   │   └── analytics/
│   ├── components/
│   │   ├── charts/
│   │   │   ├── RevenueChart.tsx
│   │   │   └── ActivityHeatmap.tsx
│   │   └── tables/
│   └── hooks/
│       └── useMatchStream.ts
└── vite.config.ts`,
  },
  {
    slug: "recurrent",
    title: "Recurrent.ng",
    description:
      "A recurring payment infrastructure for Nigerian businesses, enabling subscription billing and automated payment collection at scale.",
    isLive: true,
    liveUrl: "https://recurrent.ng",
    tags: ["Next.js", "Paystack", "PostgreSQL"],
    overview:
      "Recurrent.ng abstracts the complexity of recurring billing on top of Paystack, Nigeria's leading payment gateway. It handles subscription creation, payment retries, dunning management, and proration — so SaaS businesses can launch subscription tiers in hours rather than weeks. A customer self-service portal lets subscribers upgrade, downgrade, and manage payment methods without contacting support, reducing churn from billing failures.",
    roles: [
      "Full-stack development",
      "Paystack subscription API integration",
      "Dunning and retry logic implementation",
      "Customer self-service portal",
      "Revenue analytics dashboard",
    ],
    features: [
      "Flexible billing intervals (daily, weekly, monthly, annual)",
      "Automatic payment retry with configurable dunning sequences",
      "Customer self-service portal (upgrade, downgrade, cancel)",
      "Proration on mid-cycle plan changes",
      "Revenue and churn analytics dashboard",
      "Webhook event management and delivery logs",
    ],
    fileTree: `recurrent/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   ├── subscriptions/
│   │   ├── customers/
│   │   │   └── [id]/
│   │   ├── invoices/
│   │   └── api/
│   │       ├── webhooks/
│   │       │   └── paystack/
│   │       └── subscriptions/
│   └── lib/
│       ├── paystack/
│       │   └── client.ts
│       └── dunning.ts
└── next.config.ts`,
  },
];
