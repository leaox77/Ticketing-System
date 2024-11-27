import React from 'react';

const EssentialModel = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Essential Model</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The Essential Model represents the core functionality and structure of our cinema
          ticketing system, independent of implementation details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Ambiental Model
            </h2>
            <p>Describes the system's environment and external interactions.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Behavior Model
            </h2>
            <p>Details the system's responses to various events and user actions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialModel;