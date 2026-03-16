import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center p-6 md:p-12">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl md:text-5xl">Gilead Odo</CardTitle>
          <CardDescription>Software Developer</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">
            Hi, I&apos;m Gilead. This page is currently under construction. Follow me on{" "}
            <a href="https://twitter.com/balmofcodes" className="underline">
              Twitter
            </a>{" "}
            and{" "}
            <a href="https://instagram.com/balmofcodes" className="underline">
              Instagram
            </a>{" "}
            for thoughts on design, music, and more.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button>Contact Me</Button>
            </Link>
            <p className="text-sm text-muted-foreground">Press d to toggle dark mode.</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
