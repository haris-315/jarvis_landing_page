import { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const parsedData = contactFormSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({ success: false, error: 'Invalid data provided.' });
  }

  const { name, email, message } = parsedData.data;

  // ─── Email via Resend ───────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (apiKey && toEmail) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: 'Jarvis Contact <onboarding@resend.dev>',
        to: [toEmail],
        replyTo: email,
        subject: `New message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        `,
      });
      
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ success: false, error: 'Failed to send email.' });
    }
  }
  // ───────────────────────────────────────────────────────────────────────────

  // Development fallback: log to console
  console.log('--- New Contact Form Submission ---');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('---------------------------------');

  await new Promise((resolve) => setTimeout(resolve, 500));

  return res.status(200).json({ success: true });
}