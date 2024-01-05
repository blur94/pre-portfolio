import { NextApiRequest, NextApiResponse } from "next";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

type Data = {
  entity?: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, subject, message } = req.body;

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
    // text: message,
    html: `
    Email: ${email} <br>  <br>
    Name: ${name} <br>  <br>
    ${message}`,
  };

  if (req.method === "POST") {
    try {
      await transport.sendMail(mailOptions);
      res
        .status(200)
        .json({ entity: "Email", message: "Email sent successfully" });

      return res.redirect(307, "/");
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err as string });
    }
  }
}
