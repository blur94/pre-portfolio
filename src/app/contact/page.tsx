import { Metadata } from "next";

import Aurora from "@/components/Aurora";
import { ContactHero } from "@/components/ContactHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Gilead Odo",
  description:
    "Get in touch with Gilead Odo — available for freelance projects, collaborations, and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 opacity-30">
        <Aurora
          colorStops={["#d4a040", "#1a1a2e", "#d4a040"]}
          amplitude={0.8}
          blend={0.7}
          speed={0.3}
        />
      </div>

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 py-16 md:px-12">
        <ContactHero />
        <ContactForm />
      </div>
    </div>
  );
}
