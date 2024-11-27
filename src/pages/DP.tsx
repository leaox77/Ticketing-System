import React from 'react';

const DP = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Process Diagram (DP)</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The Process Diagram illustrates the workflow and data flow within the cinema ticketing
          system, showing how different components interact during ticket booking and management.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Key Processes
          </h2>
          <ul className="space-y-3">
            <li>User Authentication Flow</li>
            <li>Ticket Booking Process</li>
            <li>Payment Processing</li>
            <li>Seat Allocation</li>
            <li>Booking Confirmation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DP;