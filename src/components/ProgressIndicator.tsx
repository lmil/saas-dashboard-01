function ProgressIndicator() {
  return (
    <div className="mb-8">
      <div className="flex">
        {/* Step 1 */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative flex w-full justify-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold z-10">
              1
            </div>
            <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gray-300 -translate-y-1/2" />
          </div>
          <p className="mt-2 text-sm text-blue-600 font-bold text-center">
            Personal info
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative flex w-full justify-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold z-10">
              2
            </div>
            <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gray-300 -translate-y-1/2" />
          </div>
          <p className="mt-2 text-sm text-gray-500 text-center">Company Info</p>
        </div>

        {/* Step 3 */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex relative justify-center w-full">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold z-10">
              3
            </div>
            <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gray-300 -translate-y-1/2" />
          </div>
          <p className="mt-2 text-sm text-gray-500 text-center">Preferences</p>
        </div>

        {/* Step 4 (no line) */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-semibold z-10">
            4
          </div>
          <p className="mt-2 text-sm text-gray-500 text-center">Review</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressIndicator;
