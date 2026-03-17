import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormNotification from "@/components/ContactFormNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, name, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      to: "odogilead@gmail.com",
      from: "Gilead Odo <info@mail.gileadodo.com>",
      replyTo: email,
      subject: subject,
      react: ContactFormNotification({ name, email, subject, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    console.log("Email sent:", data);
    return NextResponse.json(
      { entity: "Email", message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: String(error) }, { status: 500 });
  }
}
