import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginFormData, loginSchema } from "../schemas/loginSchema";

function LoginPage() {
  // Setup React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    console.log("✅ Form submitted successfully: ", data);
    console.log("error: ", errors);
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome Back</h1>
        <p className="text-gray-600 mb-6">
          Sign in to your account to continue
        </p>
        {/* <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-400">Form fields coming in chunk 2...</p>
        </div> */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
              className="border px-4 py-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
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
              className="border px-4 py-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
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
            <a href="#">Forgot passoword?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
