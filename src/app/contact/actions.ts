'use server';

import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function handleContactForm(
  data: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  const { name, email, message } = parsedData.data;

  // In a real application, you would integrate an email service here.
  // For this example, we'll just log the data to the console.
  console.log('--- New Contact Form Submission ---');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('---------------------------------');

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Always return success for this example
  return { success: true };
}
