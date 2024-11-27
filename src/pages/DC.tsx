const DC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Context Diagram (DC)</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The Context Diagram shows the cinema ticketing system's boundaries and its interactions
          with external entities such as customers, staff, and payment systems.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            System Boundaries
          </h2>
          <ul className="space-y-3">
            <li>Customer Interface</li>
            <li>Admin Dashboard</li>
            <li>Payment Gateway Integration</li>
            <li>Email Notification System</li>
            <li>Reporting Module</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DC;