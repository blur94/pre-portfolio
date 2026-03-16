"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";

import Aurora from "@/components/Aurora";
import SplitText from "@/components/SplitText";
import AnimatedContent from "@/components/AnimatedContent";
import Magnet from "@/components/Magnet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Details = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialDetails: Details = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [details, setDetails] = useState<Details>(initialDetails);
  const [errors, setErrors] = useState<Partial<Details>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");
  const router = useRouter();

  const handleValidation = () => {
    const re = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
    const error: Partial<Details> = {};

    if (!details.name) error.name = "Full Name is required";
    if (!details.email) error.email = "Email is required";
    else if (!re.test(details.email)) error.email = "Invalid email format";
    if (!details.subject) error.subject = "Subject is required";
    if (!details.message) error.message = "Message is required";

    setErrors(error);
    return error;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("");

    const error = handleValidation();
    if (Object.keys(error).length > 0) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      const result = (await response.json()) as { message?: string };
      if (!response.ok)
        throw new Error(result.message ?? "Failed to send email");
      setStatus("Email sent successfully.");
      router.push("/");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Email not sent.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (prop: keyof Details, value: string) => {
    setDetails((prev) => ({ ...prev, [prop]: value }));
  };

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
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
        {/* Back link */}
        <AnimatedContent distance={20} duration={0.5} delay={0}>
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </AnimatedContent>

        {/* Heading */}
        <div className="mb-10">
          <SplitText
            text="Get in touch"
            tag="h1"
            className="pr-3 text-5xl leading-tight font-normal tracking-tight md:text-7xl"
            textAlign="left"
            splitType="chars"
            delay={35}
            duration={0.9}
            from={{ opacity: 0, y: 50, rotateX: -30 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
          <AnimatedContent distance={30} duration={0.6} delay={0.2}>
            <p className="mt-4 max-w-md text-muted-foreground">
              Have a project in mind or just want to say hello? Drop me a
              message and I&apos;ll get back to you.
            </p>
          </AnimatedContent>
        </div>

        {/* Divider */}
        <AnimatedContent
          distance={0}
          duration={0.5}
          delay={0.3}
          initialOpacity={0}
        >
          <div className="mb-10 h-px w-16 bg-border" />
        </AnimatedContent>

        {/* Form */}
        <AnimatedContent distance={40} duration={0.8} delay={0.4}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={details.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus-visible:border-primary/50"
                />
                {errors.name ? (
                  <p className="text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={details.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus-visible:border-primary/50"
                />
                {errors.email ? (
                  <p className="text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="subject"
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
              >
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="What's this about?"
                value={details.subject}
                onChange={(event) =>
                  handleChange("subject", event.target.value)
                }
                className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus-visible:border-primary/50"
              />
              {errors.subject ? (
                <p className="text-xs text-destructive">{errors.subject}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                value={details.message}
                onChange={(event) =>
                  handleChange("message", event.target.value)
                }
                className="min-h-35 resize-none border-border/50 bg-background/50 backdrop-blur-sm transition-all focus-visible:border-primary/50"
              />
              {errors.message ? (
                <p className="text-xs text-destructive">{errors.message}</p>
              ) : null}
            </div>

            <Magnet padding={50} magnetStrength={3}>
              <Button
                type="submit"
                size="lg"
                className="group w-full gap-2 font-medium sm:w-auto"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Magnet>

            {status ? (
              <p
                className={`text-sm ${status.includes("successfully") ? "text-primary" : "text-destructive"}`}
              >
                {status}
              </p>
            ) : null}
          </form>
        </AnimatedContent>
      </div>
    </main>
  );
}
