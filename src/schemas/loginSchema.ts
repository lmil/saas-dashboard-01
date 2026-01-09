import { z } from "zod";

export const loginSchema = z.object({
  // Email: valid format + auto-lowercase transformation
  email: z
    .string()
    .min(1, "Email required!")
    .email("Please enter a valid email address")
    .transform((val) => val.toLocaleLowerCase()),

  // Password: Minimum 8 characters (no max, no confirmation needed!)
  password: z.string().min(8, "Password must be at least 8 characters"),

  // Remember me: Optional checkbox with default false
  rememberMe: z.boolean().default(false),
});

export type LoginFormData = z.infer<typeof loginSchema>;
