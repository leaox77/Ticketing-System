import React from 'react';

const LA = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">List of Events (LA)</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The List of Events documents all significant events that can occur within the cinema
          ticketing system and how they affect the system's state.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            System Events
          </h2>
          <ul className="space-y-3">
            <li>User Registration</li>
            <li>Login/Logout</li>
            <li>Ticket Purchase</li>
            <li>Booking Cancellation</li>
            <li>Payment Processing</li>
            <li>Seat Selection</li>
            <li>Show Time Updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LA;