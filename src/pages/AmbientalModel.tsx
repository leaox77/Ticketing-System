import React from 'react';

const AmbientalModel = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ambiental Model</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The Ambiental Model describes how our cinema ticketing system interacts with its
          environment, including users, external systems, and other stakeholders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">DP</h2>
            <p>Process Diagram showing system workflows.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">DC</h2>
            <p>Context Diagram illustrating system boundaries.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">LA</h2>
            <p>List of Events affecting the system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbientalModel;