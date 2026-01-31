type ProgressIndicatorProps = {
  currentStep: number;
  steps: Array<{ label: string }>;
  completedSteps: number[];
};

function ProgressIndicator({
  currentStep,
  steps,
  completedSteps,
}: ProgressIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="hidden md:flex">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted =
            completedSteps.includes(stepNumber) && stepNumber !== currentStep;
          const isActive = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div key={stepNumber} className="flex flex-1 items-center flex-col">
              <div className="relative flex w-full justify-center">
                {/* circle */}
                <div
                  className={`w-10 h-10 rounded-full font-semibold flex items-center justify-center text-white z-10
                    ${isCompleted ? "bg-green-500" : ""} 
                    ${isActive ? "bg-blue-600" : ""} 
                    ${isUpcoming ? "bg-gray-300 text-gray-600" : ""}`}
                >
                  {isCompleted ? "✓" : stepNumber}
                </div>

                {/* Line (Show for all steps except the last one) */}
                {stepNumber < steps.length && (
                  <div
                    className={`w-full h-1 absolute top-1/2 -translate-y-1/2 left-1/2
                    ${isCompleted ? "bg-green-500" : "bg-gray-300"}`}
                  ></div>
                )}
              </div>
              {/* Label */}
              <p
                className={`
                  mt-2 text-sm text-center
                  ${isCompleted ? "text-green-600 font-medium" : ""}
                  ${isActive ? "text-blue-600 font-bold" : ""}
                  ${isUpcoming ? "text-gray-500" : ""}
                `}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
      {/* Mobile view */}
      <div className="md:hidden text-center">
        {/* Step counter */}
        <div className="text-sm text-gray-600 mb-2">
          Step {currentStep} of {steps.length}
        </div>

        {/* Current step label */}
        <div className="font-semibold text-lg text-blue-600 mb-3">
          {steps[currentStep - 1].label}
        </div>

        {/* Progress bar */}
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-3000"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressIndicator;
