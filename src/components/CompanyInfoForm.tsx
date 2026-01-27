import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companyInfoSchema } from "../schemas/onboardingSchemas";
import { type CompanyInfo } from "../schemas/onboardingSchemas";

type CompanyInfoProps = {
  initialData: CompanyInfo;
  onSubmit: (data: CompanyInfo) => void;
};
function CompanyInfoForm({ initialData, onSubmit }: CompanyInfoProps) {
  const teamSizeOptions = [
    "Just me",
    "2-10",
    "11-50",
    "51-200",
    "201-500",
    "500+",
  ];
  // Setup RHF
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyInfo>({
    resolver: zodResolver(companyInfoSchema),
    mode: "onBlur",
    defaultValues: initialData,
  });

  // submit handler
  function onFormSubmit(data: CompanyInfo) {
    console.log("✅ Form validation passed! Data:", data);
    onSubmit(data);
  }
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Company Information
      </h2>
      <form
        className="space-y-4"
        id="company-info-form"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        {/* Company Name field */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            placeholder="Enter your company name"
            {...register("company")}
            className={`border w-full px-4 py-3 rounded-lg outline-none transition ${errors.company ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"} focus:ring-2 `}
          />
          {errors.company && (
            <p className="text-red-600 text-sm mt-1">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Role FIeld */}
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="role"
            placeholder="e.g., Product Manager, Developer"
            {...register("role")}
            className={`w-full px-4 py-3 border rounded-lg outline-none transition
              ${errors.role ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
              focus:ring-2`}
          />
          {errors.role && (
            <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Team Size Field */}
        <div>
          <label
            htmlFor="teamSize"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Team Size <span className="text-red-500">*</span>
          </label>
          <select
            id="teamSize"
            {...register("teamSize")}
            className={`w-full px-4 py-3 border rounded-lg outline-none transition
              ${errors.teamSize ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"}
              focus:ring-2`}
          >
            <option value="">Select team size</option>
            {teamSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.teamSize && (
            <p className="text-red-600 text-sm mt-1">
              {errors.teamSize.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default CompanyInfoForm;
