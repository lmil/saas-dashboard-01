import { useState } from "react";
import { type OnboardingFormData } from "../schemas/onboardingSchemas";
import ProgressIndicator from "../components/ProgressIndicator";

function OnboardingPage() {
  // Track which step we're on (1, 2, 3 or 4)
  const [currentStep, setCurrentStep] = useState(1);

  // Store all form data as we go
  const [formData, setformData] = useState<OnboardingFormData>({
    // step 1 data
    name: "",
    email: "",
    phone: "",
    // Step 2 data
    company: "",
    role: "",
    teamSize: "",
    // Step 3 data
    interests: [],
    notifications: false,
  });

  // Define steps statically (should be before the return statement)
  const steps = [
    { label: "Personal Info" },
    { label: "Company Info" },
    { label: "Preferences" },
    { label: "Review" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome! Let's get you set up
        </h1>
        <p className="text-gray-600 mb-8">
          Complete all steps to finish your onboarding
        </p>

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} steps={steps} />

        {/* Step content will go here */}
        <div className="mt-8">
          <p className="text-gray-600">Current step: {currentStep}</p>
        </div>

        {/* Navigation buttons will go here */}
      </div>
    </div>
  );
}

export default OnboardingPage;
