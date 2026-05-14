export type Work = {
  slug: string;
  title: string;
  description: string;
  isLive: boolean;
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
  coverImage?: string;
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
  },
  {
    slug: "verivafrica",
    title: "VerivAfrica",
    description:
      "An identity verification platform helping African businesses verify customer identities quickly and reliably using government-issued ID documents.",
    isLive: true,
    liveUrl: "https://verivafrica.com",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    slug: "apas",
    title: "APAS",
    description:
      "An automated procurement and approval system that reduces administrative overhead for government and enterprise procurement workflows.",
    isLive: true,
    tags: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    slug: "qatapolt-admin",
    title: "Qatapolt Admin",
    description:
      "A comprehensive admin dashboard for the Qatapolt platform, providing real-time analytics, user management, and operational controls.",
    isLive: true,
    tags: ["React", "TypeScript", "Recharts"],
  },
  {
    slug: "recurrent",
    title: "Recurrent.ng",
    description:
      "A recurring payment infrastructure for Nigerian businesses, enabling subscription billing and automated payment collection at scale.",
    isLive: true,
    liveUrl: "https://recurrent.ng",
    tags: ["Next.js", "Paystack", "PostgreSQL"],
  },
];
