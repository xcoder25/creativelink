'use server';

/**
 * @fileOverview A flow that generates concise and engaging summaries of graphic design projects.
 *
 * - generateProjectSummary - A function that generates a project summary.
 * - ProjectSummaryInput - The input type for the generateProjectSummary function.
 * - ProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectSummaryInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  designChoices: z.string().describe('Key design choices made during the project.'),
  outcomes: z.string().describe('The outcomes and results of the project.'),
  clientTestimonial: z.string().optional().describe('A testimonial from the client, if available.'),
});
export type ProjectSummaryInput = z.infer<typeof ProjectSummaryInputSchema>;

const ProjectSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise and engaging summary of the project.'),
});
export type ProjectSummaryOutput = z.infer<typeof ProjectSummaryOutputSchema>;

export async function generateProjectSummary(input: ProjectSummaryInput): Promise<ProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectSummaryPrompt',
  input: {schema: ProjectSummaryInputSchema},
  output: {schema: ProjectSummaryOutputSchema},
  prompt: `You are a marketing expert specializing in creating compelling project summaries for graphic designers.

  Given the following information about a project, generate a concise and engaging summary that highlights the project's value and key outcomes for potential clients.

  Project Name: {{{projectName}}}
  Design Choices: {{{designChoices}}}
  Outcomes: {{{outcomes}}}
  {{#if clientTestimonial}}
  Client Testimonial: {{{clientTestimonial}}}
  {{/if}}

  Summary:`,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: ProjectSummaryInputSchema,
    outputSchema: ProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
