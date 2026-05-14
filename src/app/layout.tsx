import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ThemeHotkey } from "@/components/theme-hotkey";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { cn } from "@/lib/utils";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const visbyCF = localFont({
  src: [
    {
      path: "../assets/fonts/visby/VisbyCF-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/visby/VisbyCF-MediumOblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/visby/VisbyCF-DemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/visby/VisbyCF-DemiBoldOblique.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/visby/VisbyCF-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/visby/VisbyCF-BoldOblique.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Gilead Odo — Software Developer",
  description:
    "Portfolio of Gilead Odo — software developer exploring the intersection of design, music, and code.",
  openGraph: {
    title: "Gilead Odo — Software Developer",
    description:
      "Portfolio of Gilead Odo — software developer exploring the intersection of design, music, and code.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilead Odo — Software Developer",
    description:
      "Portfolio of Gilead Odo — software developer exploring the intersection of design, music, and code.",
    creator: "@balmofcodes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(visbyCF.variable)}>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} ${visbyCF.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <ThemeHotkey />
          <div className="flex min-h-screen flex-col overflow-x-hidden">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
