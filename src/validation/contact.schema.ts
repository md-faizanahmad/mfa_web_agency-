import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  email: z.string().email("Invalid email address"),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

  goal: z.string().optional(),

  message: z.string().trim().min(10, "Message must be at least 10 characters"),

  company: z.string().optional(), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;
