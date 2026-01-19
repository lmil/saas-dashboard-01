import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "../schemas/signupSchema";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  // State for loading and success
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // get auth function and navigate
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  if (Object.keys(errors).length > 0) {
    console.log("Current errors:", errors);
  }

  const onSubmit = (data: SignupFormData) => {
    setIsSubmitting(true);
    setSuccessMessage("");

    //Simulate API call (in real app, this would create account on server)
    setTimeout(() => {
      console.log("✅ Account created with data: ", data);

      // Automatically log the user in with their new account
      login(data.email, data.username);

      setSuccessMessage("Account created successfully! Redirecting...");
      setIsSubmitting(false);

      // Navigate to the dashboard after some times
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white max-w-md mx-auto p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign Up</h1>
        <p className="text-gray-600 mb-6">Create your account to get started</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              id="username"
              type="text"
              {...register("username")}
              placeholder="john123"
              className={`border  w-full px-4 py-2 rounded-lg focus:ring-2 outline-none transition ${
                errors.username
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "border border-gray-300 border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.username && (
              <p className="text-red-600 text-sm">
                ❌ {errors.username.message}
              </p>
            )}
            <p className="text-gray-500 text-xs">
              3-20 characters, alphanumeric only
            </p>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("email")}
              className={`px-4 py-2 rounded-lg w-full focus:ring-2 focus:border-blue-500 outline-none transition ${
                errors.email
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "border border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">❌ {errors.email.message}</p>
            )}
            <p className="text-gray-500 text-sm">
              We'll convert this to lowercase automatically
            </p>
          </div>

          {/* Age */}
          <div className="space-y-1">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              {...register("age")}
              className={`px-4 py-2 rounded-lg w-full focus:ring-2 focus:border-blue-500 outline-none transition ${
                errors.age
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "border border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.age && (
              <p className="text-red-600 text-sm">❌ {errors.age.message}</p>
            )}
            <p className="text-gray-500 text-sm">Must be 18 or older</p>
          </div>

          {/* NEW: Password Field */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("password")}
              className={`w-full px-4 py-2 rounded-lg focus:ring-2 focus:border-blue-500 outline-none transition ${
                errors.password
                  ? "border-2 border-red-500 focus:ring-red-500" // ← Error state
                  : "border border-gray-300 focus:ring-blue-500"
              }`} // ← Normal state
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">
                ❌ {errors.password.message}
              </p>
            )}
            <p className="text-gray-500 text-xs">Minimum 8 characters</p>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="confirm"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              className={`w-full py-2 px-4 rounded-lg focus:border-blue-500 outline-none transition focus:ring-2 ${
                errors.confirmPassword
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "border border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                ❌ {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              {...register("terms")}
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex-1">
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 cursor-pointer"
              >
                I accept the <a href="#">Terms and Conditions</a>{" "}
                <span className="text-red-500">*</span>
              </label>
              {errors.terms && (
                <p className="text-red-600 text-sm mt-1">
                  ❌ {errors.terms.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="newsletter"
              {...register("newsletter")}
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex-1">
              <label
                htmlFor="newsletter"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Subscribe to our newsletter for updates and promotions
              </label>
            </div>
          </div>

          {/* New Success message */}
          {successMessage && (
            <div className="border border-green-200 border-2 bg-green-50 text-green-800 px-4 py-4 rounded-lg">
              <div className="flex gap-2 items-center">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-semibold">Account created successfully!</p>
                  <p className="text-sm text-green-700">
                    Welcome aboard! Check your email for verification
                  </p>
                </div>
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              isSubmitting
                ? "bg-blue-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            // className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        {/* Already have account link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
