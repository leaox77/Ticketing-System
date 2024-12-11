const BehaviorModel = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Modelo de Comportamiento
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          El Modelo de Comportamiento define cómo el sistema de boletería responde a diferentes eventos e interacciones, asegurando una operación confiable y consistente.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Comportamientos Clave
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li className="bg-gradient-to-br from-teal-500 to-green-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
              Proceso de Reserva de Boletos
            </li>
            <li className="bg-gradient-to-br from-pink-500 to-red-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
              Lógica de Selección de Asientos
            </li>
            <li className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
              Procesamiento de Pagos
            </li>
            <li className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center">
              Confirmación de Reserva
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BehaviorModel;