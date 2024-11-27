import React from 'react';

const Background = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Project Background</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The cinema industry has evolved significantly with digital transformation. Our ticketing
          system addresses the growing need for efficient, user-friendly booking solutions while
          maintaining robust backend management capabilities.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Problem Statement
          </h2>
          <p>
            Traditional ticketing systems often face challenges with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Manual booking processes</li>
            <li>Seat allocation conflicts</li>
            <li>Payment processing delays</li>
            <li>Customer data management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Background;