import { z } from 'zod';

// Validation schemas
export const step1Schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  role: z.enum(['user', 'volunteer']).default('user'),
});

export const step2Schema = z.object({
  phone: z.string().optional(),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    zip: z.string().optional(),
  }).optional(),
  dateOfBirth: z.string().optional(),
  avatar: z.any().optional(),
  interests: z.array(z.string()).default([]),
  skills: z.array(z.string()).default([]),
});

export const fullFormSchema = step1Schema.merge(step2Schema);