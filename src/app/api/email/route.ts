import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: Request) {
  const { email, name, subject, message } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: `${name} ${email}`,
    to: process.env.NEXT_PUBLIC_MAIL,
    subject: subject,
    html: `
    Email: ${email} <br>  <br>
    Name: ${name} <br>  <br>
    ${message}`,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json(
      { entity: "Email", message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: String(err) }, { status: 500 });
  }
}
