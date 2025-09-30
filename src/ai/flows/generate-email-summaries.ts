// src/ai/flows/generate-email-summaries.ts
'use server';

/**
 * @fileOverview AI-powered email thread summarization flow.
 *
 * - generateEmailSummary - A function that generates a summary of an email thread.
 * - GenerateEmailSummaryInput - The input type for the generateEmailSummary function.
 * - GenerateEmailSummaryOutput - The return type for the generateEmailSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEmailSummaryInputSchema = z.object({
  emailThread: z.string().describe('The complete email thread to summarize.'),
});
export type GenerateEmailSummaryInput = z.infer<typeof GenerateEmailSummaryInputSchema>;

const GenerateEmailSummaryOutputSchema = z.object({
  summary: z.string().describe('The summarized email thread.'),
});
export type GenerateEmailSummaryOutput = z.infer<typeof GenerateEmailSummaryOutputSchema>;

export async function generateEmailSummary(input: GenerateEmailSummaryInput): Promise<GenerateEmailSummaryOutput> {
  return generateEmailSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEmailSummaryPrompt',
  input: {schema: GenerateEmailSummaryInputSchema},
  output: {schema: GenerateEmailSummaryOutputSchema},
  prompt: `You are an AI assistant that summarizes email threads, extracting the most important information.

  Summarize the following email thread:
  \n\n  {{{emailThread}}}
  \n\n  Provide a concise and coherent summary that captures the main points, key decisions, and action items.`,
});

const generateEmailSummaryFlow = ai.defineFlow(
  {
    name: 'generateEmailSummaryFlow',
    inputSchema: GenerateEmailSummaryInputSchema,
    outputSchema: GenerateEmailSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
