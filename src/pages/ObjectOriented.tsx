const ObjectOriented = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Object Oriented Model</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          The Object Oriented Model describes the system's structure using classes, objects,
          and their relationships in the cinema ticketing system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Core Classes
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>User</li>
              <li>Ticket</li>
              <li>Movie</li>
              <li>Screening</li>
              <li>Booking</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Relationships
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>User - Booking</li>
              <li>Booking - Ticket</li>
              <li>Movie - Screening</li>
              <li>Screening - Ticket</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectOriented;