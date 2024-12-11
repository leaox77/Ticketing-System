import { Link } from 'react-router-dom';

const EssentialModel = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Modelo Esencial
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          El Modelo Esencial representa la funcionalidad y estructura central de nuestro sistema de
          venta de entradas de cine, independiente de los detalles de implementación.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link to="ambiental">
            <div className="bg-gradient-to-br from-pink-500 to-indigo-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Modelo Ambiental
              </h2>
              <p className="text-white">Describe el entorno del sistema y las interacciones externas.</p>
            </div>
          </Link>
          <Link to="behavior">
            <div className="bg-gradient-to-br from-purple-500 to-teal-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Modelo de Comportamiento
              </h2>
              <p className="text-white">Detalla las respuestas del sistema a varios eventos y acciones de los usuarios.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EssentialModel;