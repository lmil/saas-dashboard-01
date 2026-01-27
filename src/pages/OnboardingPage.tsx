import { useState } from "react";
import { type OnboardingFormData } from "../schemas/onboardingSchemas";
import ProgressIndicator from "../components/ProgressIndicator";
import PersonalInfoForm from "../components/PersonalInfoForm";
import CompanyInfoForm from "../components/CompanyInfoForm";

function OnboardingPage() {
  // Track which step we're on (1, 2, 3 or 4)
  const [currentStep, setCurrentStep] = useState(1);

  // Store all form data as we go
  const [formData, setFormData] = useState<OnboardingFormData>({
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
  // Temporary: Log formData whenever it changes
  console.log("📦 Current formData:", formData);

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
          {currentStep === 1 && (
            <PersonalInfoForm
              initialData={{
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
              }}
              onSubmit={(data) => {
                console.log("Parent received validated data: ", data);
                // Update parent's formData with validated data
                setFormData({
                  ...formData,
                  name: data.name,
                  email: data.email,
                  phone: data.phone,
                });
                // Move to next step AFTER data is saved
                setCurrentStep(2);
              }}
            />
          )}
          {/* 
          //TODO re learn about this 'data' variable
           */}
          {currentStep === 2 && (
            <CompanyInfoForm
              initialData={{
                company: formData.company,
                role: formData.role,
                teamSize: formData.teamSize,
              }}
              onSubmit={(data) => {
                console.log("Company info received: ", data);
                setFormData({
                  ...formData,
                  company: data.company,
                  role: data.role,
                  teamSize: data.teamSize,
                });
                // Move to next step
                setCurrentStep(3);
              }}
            />
          )}
          {/* Temporary Navigation Buttons */}
          <div className="mt-6 flex gap-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Previous
              </button>
            )}

            <button
              type="submit"
              form={
                currentStep === 1 ? "personal-info-form" : "company-info-form"
              }
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* Navigation buttons will go here */}
      </div>
    </div>
  );
}

export default OnboardingPage;
