import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginFormData, loginSchema } from "../schemas/loginSchema";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Get auth functions and navigate
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect immediately
  if (isAuthenticated) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  // Setup React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    setIsSubmitting(true);
    setSuccessMessage("");

    const username = data.email.split("@")[0];

    //simulate brief loading(in)
    setTimeout(() => {
      // call login from authcontext
      login(data.email, username);

      setSuccessMessage("Login successful! Redirecting...");
      setIsSubmitting(false);

      //Navigate to  dashboard after short delay
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 500);
    }, 1000);

    console.log("✅ Form submitted successfully: ", data);
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome Back</h1>
        <p className="text-gray-600 mb-6">
          Sign in to your account to continue
        </p>

        <form
          className="space-y-5"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className={`border px-4 py-2 border-gray-300 rounded-lg w-full focus:ring-2  outline-none transition ${
                errors.email
                  ? "border-2 border-red-500 focus:ring-red-500"
                  : "border border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">❌ {errors.email.message}</p>
            )}
          </div>

          {/* Passwords */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className={`border px-4 py-2 border-gray-300 rounded-lg w-full focus:ring-2 transition outline-none ${
                errors.password
                  ? "border-red-600 focus:ring-red-600 border-2"
                  : "focus:ring-blue-500 focus:border-blue-500 "
              }`}
              //className="  "
            />
            {errors.password && (
              <p className="text-sm text-red-600">
                ❌ {errors.password.message}
              </p>
            )}
          </div>
          {/* Remember me & forgot password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="rememberMe"
                type="checkbox"
                {...register("rememberMe")}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm text-blue-600 hover:underline cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          {successMessage && (
            <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-4 rounded-lg">
              <div className="flex gap-2 items-center">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-semibold">Login successful!</p>
                  <p className="text-sm text-green-700">
                    Redirecting to dashboard...
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white font-semibold py-3 rounded-lg transition-colors ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}{" "}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>

        {/* Security Message */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            🔒 Your information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
