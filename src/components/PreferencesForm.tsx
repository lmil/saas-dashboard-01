import { useForm, type SubmitHandler } from "react-hook-form";
import {
  preferencesSchema,
  type Preferences,
} from "../schemas/onboardingSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

type PreferencesFormProps = {
  initialData: Preferences;
  onSubmit: (data: Preferences) => void;
};

function PreferencesForm({ initialData, onSubmit }: PreferencesFormProps) {
  const interestOptions = [
    "Development",
    "Design",
    "Marketing",
    "Sales",
    "Support",
    "Other",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Preferences>({
    resolver: zodResolver(preferencesSchema),
    mode: "onSubmit",
    defaultValues: initialData,
  });

  const onFormSubmit: SubmitHandler<Preferences> = (data: Preferences) => {
    console.log("Form submitted with data interests:", data);
    onSubmit(data);
  };

  return (
    <form
      id="preferences-form"
      onSubmit={handleSubmit(onFormSubmit)}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your Preferences
        </h2>
        <p className="text-gray-600">Tell us about your interests</p>
      </div>

      <div className="space-y-4">
        <label>
          Interests <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-2">
          {interestOptions.map((interest) => (
            <label
              key={interest}
              className="cursor-pointer flex items-center space-x-2"
            >
              <input
                type="checkbox"
                value={interest}
                {...register("interests")}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
        {errors.interests && (
          <p className="text-sm text-red-600">{errors.interests.message}</p>
        )}

        {/* Notifications Field */}
        <div className="space-y-1">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              {...register("notifications")}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              Send me email notifications
            </span>
          </label>
        </div>
      </div>
    </form>
  );
}

export default PreferencesForm;
