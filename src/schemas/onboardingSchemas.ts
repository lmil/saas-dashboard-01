import { z } from "zod";

/**
 * COMPLETE ONBOARDING SCHEMA
 * Single source of truth for all onboarding validation
 * Individual steps pick from this schema
 */

export const onboardingSchema = z.object({
  // Step 1: Personal info
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .transform((val) => val.toLowerCase()),
  phone: z.string().min(10, "Phone must be at least 10 digits"),

  // Step 2: Company info
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  teamSize: z.string().min(1, "Please select team size"),

  // Step 3: Preference
  interests: z.array(z.string().min(1, "Select at least one interest")),
  notifications: z.boolean().default(false),
});

/**
 * PER-STEP SCHEMAS
 * Pick only the fields needed for each step
 */

export const personalInfoSchema = onboardingSchema.pick({
  name: true,
  email: true,
  phone: true,
});

export const companyInfoSchema = onboardingSchema.pick({
  company: true,
  role: true,
  teamSize: true,
});

export const preferencesSchema = onboardingSchema.pick({
  interests: true,
  notifications: true,
});

/**
 * TYPE INFERENCE
 * Single type for complete form data
 */
export type OnboardingFormData = z.infer<typeof onboardingSchema>;

// Optional: Individual step types
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type CompanyInfo = z.infer<typeof companyInfoSchema>;
export type Preferences = z.infer<typeof preferencesSchema>;
