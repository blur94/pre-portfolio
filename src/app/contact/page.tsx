"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      if (!response.ok) throw new Error(result.message ?? "Failed to send email");
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
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center p-6">
      <Card className="w-full">
        <CardHeader className="space-y-2">
          <CardTitle>Send a message</CardTitle>
          <Link href="/" className="text-sm text-muted-foreground underline">
            Back to home
          </Link>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter Name"
                value={details.name}
                onChange={(event) => handleChange("name", event.target.value)}
              />
              {errors.name ? <p className="text-xs text-red-500">{errors.name}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Email Address"
                value={details.email}
                onChange={(event) => handleChange("email", event.target.value)}
              />
              {errors.email ? <p className="text-xs text-red-500">{errors.email}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter Subject"
                value={details.subject}
                onChange={(event) => handleChange("subject", event.target.value)}
              />
              {errors.subject ? <p className="text-xs text-red-500">{errors.subject}</p> : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter Message"
                value={details.message}
                onChange={(event) => handleChange("message", event.target.value)}
              />
              {errors.message ? <p className="text-xs text-red-500">{errors.message}</p> : null}
            </div>

            <Button type="submit" className="w-full">
              {submitting ? "Sending..." : "Send"}
            </Button>
            {status ? <p className="text-sm text-muted-foreground">{status}</p> : null}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
