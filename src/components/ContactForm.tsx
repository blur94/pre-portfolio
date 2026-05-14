"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

import Magnet from "@/components/Magnet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Details = {
  name: string;
  email: string;
  message: string;
};

const initialDetails: Details = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [details, setDetails] = useState<Details>(initialDetails);
  const [errors, setErrors] = useState<Partial<Details>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  const handleValidation = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const error: Partial<Details> = {};

    if (!details.name.trim()) error.name = "Full name is required";
    if (!details.email.trim()) error.email = "Email is required";
    else if (!re.test(details.email)) error.email = "Invalid email format";
    if (!details.message.trim()) error.message = "Message is required";

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
      setDetails(initialDetails);
      setErrors({});
      setStatus("Message sent successfully.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Message not sent.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (prop: keyof Details, value: string) => {
    setDetails((prev) => ({ ...prev, [prop]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-5"
      noValidate
    >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="name"
              className="text-xs uppercase text-muted-foreground"
            >
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={details.name}
              onChange={(event) => handleChange("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus-visible:border-primary/50"
            />
            {errors.name ? (
              <p className="text-xs text-destructive">{errors.name}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="email"
              className="text-xs uppercase text-muted-foreground"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={details.email}
              onChange={(event) => handleChange("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              className="border-border/50 bg-background/50 backdrop-blur-sm transition-all focus-visible:border-primary/50"
            />
            {errors.email ? (
              <p className="text-xs text-destructive">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="message"
            className="text-xs uppercase text-muted-foreground"
          >
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            value={details.message}
            onChange={(event) => handleChange("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            className="min-h-28 resize-none border-border/50 bg-background/50 backdrop-blur-sm transition-all focus-visible:border-primary/50 md:min-h-32"
          />
          {errors.message ? (
            <p className="text-xs text-destructive">{errors.message}</p>
          ) : null}
        </div>

        <div className="flex justify-start">
          <Magnet padding={50} magnetStrength={3}>
            <Button
              type="submit"
              size="lg"
              className="group w-full gap-2 px-8 font-medium sm:w-auto"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send message"}
              <Send
                data-icon="inline-end"
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </Magnet>
        </div>

        {status ? (
          <p
            role="status"
            className={`text-sm ${status.includes("successfully") ? "text-primary" : "text-destructive"}`}
          >
            {status}
          </p>
        ) : null}
    </form>
  );
}
