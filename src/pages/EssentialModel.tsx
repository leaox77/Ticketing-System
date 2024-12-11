import { Link } from 'react-router-dom';

const EssentialModel = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Modelo Esencial</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          El Modelo Esencial representa la funcionalidad y estructura central de nuestro sistema de
          venta de entradas de cine, independiente de los detalles de implementación.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Link to="ambiental">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Modelo Ambiental
            </h2>
            <p>Describe el entorno del sistema y las interacciones externas.</p>
          </div>
          </Link>
          <Link to="behavior">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Modelo de Comportamiento
            </h2>
            <p>Detalla las respuestas del sistema a varios eventos y acciones de los usuarios.</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EssentialModel;