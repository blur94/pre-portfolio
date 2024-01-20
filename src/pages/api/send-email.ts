import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type Data = {
  entity?: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, subject, message } = req.body;
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) return;

  // const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(apiKey);
  const msg = {
    to: "odogilead@gmail.com",
    from: "info@gileadodo.xyz",
    subject: subject,
    text: message,
    // html: message,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <title>The HTML5 Herald</title>
    <meta name="description" content="The HTML5 Herald" />
    <meta name="author" content="SitePoint" />
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

    <link rel="stylesheet" href="css/styles.css?v=1.0" />
  </head>

  <body>
    <div
      class="img-container"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        overflow: hidden;
        font-family: 'helvetica', 'ui-sans';
      "
    ></div>
    <div class="container" style="margin-left: 20px; margin-right: 20px">
      <h3>
        You've got a new mail from ${req.body.name}, their email is:
        ✉️${req.body.email}
      </h3>
      <div style="font-size: 16px">
        <p>Message:</p>
        <p>${req.body.message}</p>
        <br />
      </div>
      <img
        src="https://s3.amazonaws.com/re.current/current.png"
        class="logo-image"
        style="height: 50px; width: 50px; border-radius: 5px; overflow: hidden"
      />
      <p
        class="footer"
        style="
          font-size: 16px;
          padding-bottom: 20px;
          border-bottom: 1px solid #d1d5db;
        "
      >
        Regards<br />Gilead Odo<br />Software Developer<br />+2348183406181
      </p>
      <div
        class="footer-links"
        style="display: flex; justify-content: center; align-items: center"
      >
        <a
          href="https://gileadodo.xyz/"
          style="text-decoration: none; margin: 8px; color: #9ca3af"
          >Website</a
        >
        <a
          href="https://blog.gileadodo.xyz/"
          style="text-decoration: none; margin: 8px; color: #9ca3af"
          >Blog</a
        >
        <a
          href="https://github.com/blur94/"
          style="text-decoration: none; margin: 8px; color: #9ca3af"
          >GitHub</a
        >
        <a
          href="https://instagram.com/balmofcodes/"
          style="text-decoration: none; margin: 8px; color: #9ca3af"
          >Instagram</a
        >
        <a
          href="https://linkedin.com/in/gilead-odo/"
          style="text-decoration: none; margin: 8px; color: #9ca3af"
          >LinkedIn</a
        >
        <a
          href="https://twitter.com/balmofcodes/"
          style="text-decoration: none; margin: 8px; color: #9ca3af"
          >Twitter</a
        >
      </div>
    </div>
  </body>
</html>

  `,
  };
  if (req.method === "POST") {
    try {
      await sgMail.send(msg);
      res
        .status(200)
        .json({ entity: "Email", message: "Email sent successfully" });

      // return res.redirect(307, "/");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error as string });
    }
  }
}
