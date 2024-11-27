const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Introduction</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The Cinema Ticketing System is designed to streamline the process of movie ticket booking
          and management. It serves both customers and cinema staff with an intuitive interface
          and robust backend functionality.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Real-time seat availability</li>
          <li>Multiple payment methods</li>
          <li>Session management</li>
          <li>Booking history</li>
          <li>Admin dashboard</li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;