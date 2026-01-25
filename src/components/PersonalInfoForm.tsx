import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../schemas/onboardingSchemas";
import { type PersonalInfo } from "../schemas/onboardingSchemas";

type PersonalInfoProps = {
  initialData: PersonalInfo;
  onSubmit: (data: PersonalInfo) => void;
};

function PersonalInfoForm({ initialData, onSubmit }: PersonalInfoProps) {
  // Set up react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onBlur",
    defaultValues: initialData,
  });

  // Temporary submit handler (we'll replace this later)
  function onFormSubmit(data: PersonalInfo) {
    // console.log("Form data:", data);
    onSubmit(data);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Personal Information
      </h2>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="space-y-4"
        id="personal-info-form"
      >
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            {...register("name")}
            className={`w-full px-4 py-3 border rounded-lg outline-none transition
    ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
    focus:ring-2`}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`w-full px-4 py-3 border rounded-lg outline-none transition
    ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
    focus:ring-2`}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            {...register("phone")}
            className={`
    w-full px-4 py-3 border rounded-lg outline-none transition
    ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
    focus:ring-2
  `}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
