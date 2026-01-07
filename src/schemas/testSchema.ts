// import z from "zod";
// import { process } from "zod/v4/core";

// const customerSchema = z.object({
//   customerId: z.string(),
//   email: z.string(),
//   age: z.number(),
// });

// // console.log("Schema created: ", customerSchema);

// // ✅ VALID data (like a valid JMS message)
// const validCustomer = {
//   customerId: "CUST123",
//   email: "john@example.com",
//   age: 30,
// };

// // ❌ INVALID data (like malformed JMS message)
// const invalidCustomer = {
//   customerId: "CUST123",
//   email: "not-an-email", // Wrong format
//   age: "thirty", // Wrong type!
// };

// // Validate valid data
// // console.log("Testing VALID data:");
// // try {
// //   const result = customerSchema.parse(validCustomer);
// //   console.log("✅ Validation passed:", result);
// // } catch (error) {
// //   console.log("❌ Validation failed:", error);
// // }

// // Validate invalid data
// // console.log("\nTesting INVALID data:");
// // try {
// //   const result = customerSchema.parse(invalidCustomer);
// //   console.log("✅ Validation passed:", result);
// // } catch (error) {
// //   console.log("❌ Validation failed:", error);
// // }

// // ==========================================
// // SAFE PARSE - Doesn't throw errors!
// // ==========================================

// //console.log("\n--- Testing safeParse() ---");

// // Validate with safeParse (returns result object)
// // const validResult = customerSchema.safeParse(validCustomer);
// // const invalidResult = customerSchema.safeParse(invalidCustomer);

// // Check valid result
// // console.log("Valid data result:");
// // console.log("Success?", validResult.success);
// // if (validResult.success) {
// //   console.log("Data:", validResult.data);
// // }

// // Check invalid result
// // console.log("\nInvalid data result:");
// // console.log("Success?", invalidResult.success);
// // if (!invalidResult.success) {
// //   console.log("Errors:", invalidResult.error.issues);
// // }

// // ==========================================
// // TYPE INFERENCE - Automatic TypeScript Types!
// // ==========================================

// // console.log("\n--- Type Inference Example ---");
// // type Customer = z.infer<typeof customerSchema>;

// // const newCustomer: Customer = {
// //   customerId: "CUST1435",
// //   email: "emailaja",
// //   age: 25,
// // };

// // console.log("Type-safe customer:", newCustomer);

// // function processCustomer(customer: Customer) {
// //   console.log(`Processing customer ${customer.customerId}`);
// //   console.log(`Email: ${customer.email}`);
// //   console.log(`Age: ${customer.age}`);
// // }

// // processCustomer(newCustomer);

// // ==========================================
// // STRING VALIDATORS - Form Validation Power!
// // ==========================================

// // console.log("\n--- String Validators ---");

// // // schema with various validations
// // const userSchema = z.object({
// //   email: z.string().email(),
// //   password: z.string().min(8),
// //   username: z.string().min(3).max(20),
// //   website: z.string().url(),
// //   phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/),
// // });

// // // Test valid data
// // const validUser = {
// //   email: "john@example.com",
// //   password: "securePassword123",
// //   username: "john_doe",
// //   website: "https://example.com",
// //   phone: "123-456-7890",
// // };

// // console.log("Testing valid user:");
// // const validUserResult = userSchema.safeParse(validUser);
// // console.log("Success?", validUserResult.success);
// // if (validUserResult.success) {
// //   console.log("Data:", validUserResult.data);
// // }

// // // Test INVALID data - each field fails a different validator
// // const invalidUser = {
// //   email: "not-an-email", // ❌ Invalid email format
// //   password: "short", // ❌ Too short (< 8 chars)
// //   username: "ab", // ❌ Too short (< 3 chars)
// //   website: "not-a-url", // ❌ Invalid URL
// //   phone: "1234567890", // ❌ Wrong pattern (no dashes)
// // };

// // console.log("\nTesting invalid user:");
// // const invalidUserResult = userSchema.safeParse(invalidUser);
// // console.log("Success?", invalidUserResult.success);
// // if (!invalidUserResult.success) {
// //   console.log("Errors:", invalidUserResult.error.issues);
// // }

// // ==========================================
// // CUSTOM ERROR MESSAGES - User Friendly!
// // ==========================================

// // console.log("\n--- Custom Error Messages ---");
// // // Schema with custom messages
// // const signupSchema = z.object({
// //   email: z
// //     .string()
// //     .min(1, "Email is required")
// //     .email("Please enter a valid email address"),
// //   password: z.string().min(8, "Password must be at least 8 characters long"),
// //   username: z
// //     .string()
// //     .min(3, "username must be at least 3 characters")
// //     .max(20, "Username must be no more that 20 characters"),
// //   age: z
// //     .number()
// //     .min(18, "You must be at least 18 years old")
// //     .max(120, "Please, enter a valid age"),
// // });

// // // Test with invalid data to see custom messages
// // const invalidSignup = {
// //   email: "", // Will trigger "Email is required"
// //   password: "short", // Will trigger "Password must be at least 8 characters long"
// //   username: "ab", // Will trigger "Username must be at least 3 characters"
// //   age: 15, // Will trigger "You must be at least 18 years old"
// // };

// // console.log("Testing with invalid signup data:");
// // const signupResult = signupSchema.safeParse(invalidSignup);

// // if (!signupResult.success) {
// //   console.log("Custom error message: ");
// //   signupResult.error.issues.forEach((issue) => {
// //     console.log(`- ${issue.path[0]}: ${issue.message}`);
// //   });
// // }

// // ==========================================
// // OTHER DATA TYPES - Numbers, Booleans, Optional
// // ==========================================

// console.log("\n--- Other Data Types ---");

// // Schema with various types
// const profileSchema = z.object({
//   // Number validations
//   age: z
//     .number()
//     .min(18, "Must be at least 18")
//     .max(100, "Must be at most 100"),
//   salary: z
//     .number()
//     .positive("Salary must be positive")
//     .max(1000000, "Please enter realistic salary"),
//   agreedToTerms: z.boolean(),
//   middleName: z.string().optional(),
//   newsletter: z.boolean().optional().default(false),
//   phoneNumber: z.string().nullable(),
// });

// // Test valid profile
// const validProfile = {
//   age: 25,
//   salary: 50000,
//   agreedToTerms: true,
//   // middleName not provided (optional!)
//   // newsletter not provided (will use default: false)
//   phoneNumber: null,
// };

// console.log("Testing valid profile:");
// const profileResult = profileSchema.safeParse(validProfile);
// console.log("Success?", profileResult.success);
// if (profileResult.success) {
//   console.log("Data:", profileResult.data);
//   console.log("Newsletter value:", profileResult.data.newsletter); // Should be false (default)
// }

// if (!profileResult.success) {
//   console.log("Error: ", profileResult.error.issues);
// }
