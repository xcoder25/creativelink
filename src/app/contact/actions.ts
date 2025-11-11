'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors[Object.keys(validatedFields.error.flatten().fieldErrors)[0]][0] || 'Validation failed.',
      status: 'error',
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  // For this example, we'll just log the data and simulate a delay.
  console.log('Contact form submitted:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: 'Thank you for your message! I will get back to you shortly.',
    status: 'success',
  };
}
