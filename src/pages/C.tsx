import React from 'react';

const C = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Conclusions</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          This section summarizes the key findings, achievements, and future directions for
          the cinema ticketing system project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Key Achievements
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automated Booking System</li>
              <li>Real-time Seat Management</li>
              <li>Secure Payment Integration</li>
              <li>User-friendly Interface</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Future Enhancements
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mobile App Development</li>
              <li>AI-powered Recommendations</li>
              <li>Enhanced Analytics</li>
              <li>Social Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C;