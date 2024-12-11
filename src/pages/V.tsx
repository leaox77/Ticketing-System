

const V = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Video Documentation</h1>
      <div className="space-y-6 text-gray-600 dark:text-gray-300">
        <p>
          Watch our comprehensive video guide explaining the cinema ticketing system's features,
          architecture, and implementation details.
        </p>
        
        <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg h-[30rem] flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          System Overview
        </h2>
        <div className="flex-grow h-full rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/5Aa44RdjCAg`}
          title='YouTube video player'
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        />
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Video Contents
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>System Architecture</li>
              <li>User Interface Walkthrough</li>
              <li>Booking Process Demo</li>
              <li>Admin Features</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Additional Resources
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>User Manual</li>
              <li>API Documentation</li>
              <li>Installation Guide</li>
              <li>Troubleshooting Tips</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V;