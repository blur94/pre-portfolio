'use server';

import { Resend } from 'resend';
import ContactFormNotification from '@/components/ContactFormNotification';

type Values = { name: string; email: string; message: string };

export type ContactActionState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string };

export async function sendContactEmail(
  _prev: ContactActionState,
  values: Values,
): Promise<ContactActionState> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: 'error', message: 'Email service is not configured.' };
  }

  const resend = new Resend(apiKey);
  const subject = `New portfolio message from ${values.name}`;

  try {
    const { error } = await resend.emails.send({
      to: 'odogilead@gmail.com',
      from: 'Gilead Odo <info@mail.gileadodo.com>',
      replyTo: values.email,
      subject,
      react: ContactFormNotification({
        name: values.name,
        email: values.email,
        subject,
        message: values.message,
      }),
    });

    if (error) return { status: 'error', message: error.message };
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: String(err) };
  }
}
