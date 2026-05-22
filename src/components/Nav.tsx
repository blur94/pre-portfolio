"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/balmofcodes" },
  { label: "Twitter(X)", href: "https://x.com/balmofcodes" },
  { label: "Github", href: "https://github.com/blur94" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-5 md:px-10">
      <Logo asLink />

      <div className="flex items-center gap-6">
        {/* Social links — visible on md+ */}
        <div className="hidden items-center gap-6 md:flex">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger — always visible */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="size-11 text-muted-foreground hover:text-foreground"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-zinc-300 bg-zinc-50 px-6 pt-12 text-zinc-950 dark:border-white/10 dark:bg-zinc-950 dark:text-white"
          >
            <nav className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-sm text-2xl font-semibold text-zinc-950 transition-colors hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-50 dark:text-white dark:hover:text-primary dark:focus-visible:ring-zinc-600 dark:focus-visible:ring-offset-zinc-950"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-zinc-300 pt-6 dark:border-white/10">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm text-sm text-zinc-700 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-3 focus-visible:ring-offset-zinc-50 dark:text-zinc-400 dark:hover:text-white dark:focus-visible:ring-zinc-600 dark:focus-visible:ring-offset-zinc-950"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
