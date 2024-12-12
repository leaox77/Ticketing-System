import oo from '../assets/diagrams/oo.png';
import useZoom from '@/hooks/zoom';

const ObjectOriented = () => {
  const { zoomRef } = useZoom();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Modelo Orientado a Objetos</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          El Modelo Orientado a Objetos describe la estructura del sistema utilizando clases, objetos
          y sus relaciones en el sistema de venta de entradas de cine.
        </p>
        <p>
          Este modelo es fundamental para entender cómo interactúan los diferentes componentes del sistema,
          permitiendo una mejor organización y mantenimiento del código. A continuación, se presentan las clases
          principales y sus relaciones.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border-2 border-transparent hover:border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Clases Principales
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usuario</li>
              <li>Entrada</li>
              <li>Película</li>
              <li>Proyección</li>
              <li>Reserva</li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border-2 border-transparent hover:border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Relaciones
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usuario - Reserva</li>
              <li>Reserva - Entrada</li>
              <li>Película - Proyección</li>
              <li>Proyección - Entrada</li>
            </ul>
          </div>
        </div>
        <div className="zoom-container w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto">
          <img ref={zoomRef} src={oo} alt="Sala de cine" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ObjectOriented;