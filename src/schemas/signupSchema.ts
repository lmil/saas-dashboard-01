import { z } from "zod";

// Start with just ONE field for now!
export const signupSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username cannot exceed 20 characters")
      .regex(
        /^[a-zA-Z0-9]+$/,
        "Username must be alphanumeric only (no special characters)"
      ),

    email: z
      .string()
      .email("Please enter a valid email")
      .transform((val) => val.toLowerCase()),
    // Password: 8-100 chars
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password cannot exceed 100 characters"),

    age: z
      .string()
      .min(1, "Age is required")
      .pipe(
        z.coerce
          .number({
            invalid_type_error: "Age must be a number",
          })
          .min(18, "Age must be 18 or older to sign up")
      ),

    // Confirm Password: 8+ chars (matching validation comes later!)
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),

    newsletter: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password did not match",
    path: ["confirmPassword"],
  });

// Generate TypeScript type
export type SignupFormData = z.infer<typeof signupSchema>;
