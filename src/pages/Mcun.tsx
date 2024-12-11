const Mcun = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Analysis and Evaluation</h1>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Mnefy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Performance Metrics
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Response Time</li>
                <li>Transaction Success Rate</li>
                <li>User Satisfaction</li>
                <li>System Uptime</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Improvement Areas
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mobile Responsiveness</li>
                <li>Payment Processing Speed</li>
                <li>User Interface Enhancement</li>
                <li>Security Measures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Mcun;