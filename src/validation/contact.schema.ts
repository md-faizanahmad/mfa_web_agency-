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

  // for project request
  businessName: z.string().min(1, "Business name is required"),
  description: z
    .string()
    .min(10, "Please provide a bit more detail (min 10 chars)"),
  budget: z.string().min(1, "Please select a budget"),

  company: z.string().optional(), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;
