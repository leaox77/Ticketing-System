import React from 'react';

const BehaviorModel = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Behavior Model</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The Behavior Model defines how the cinema ticketing system responds to various events
          and user interactions, ensuring consistent and reliable operation.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Key Behaviors
          </h2>
          <ul className="space-y-3">
            <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              Ticket Booking Process
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              Seat Selection Logic
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              Payment Processing
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              Booking Confirmation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BehaviorModel;