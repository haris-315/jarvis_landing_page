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

    // In a real application, you would integrate an email service here.
    // For this example, we'll just log the data to the console.
    console.log('--- New Contact Form Submission ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('---------------------------------');

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Always return success for this example
    return res.status(200).json({ success: true });
}