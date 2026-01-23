type ProgressIndicatorProps = {
  currentStep: number;
  steps: Array<{ label: string }>;
};

function ProgressIndicator({ currentStep = 2, steps }: ProgressIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
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
    </div>
  );
}

export default ProgressIndicator;
