import niv0 from '../assets/diagrams/niv0.png';
import niv from '../assets/diagrams/niv.png';
import niv2 from '../assets/diagrams/niv2.png';
import niv3 from '../assets/diagrams/niv3.png';
import mr from '../assets/diagrams/mr.png';


import { useState } from 'react';

const BehaviorModel = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<keyof typeof diagrams | null>(null);

  const diagrams = {
    niv0,
    niv,
    niv2,
    niv3,
    mr,
  };

  const handleDiagramClick = (diagram: keyof typeof diagrams) => {
    setSelectedDiagram(diagram === selectedDiagram ? null : diagram);
  };


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
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <li
              className="bg-gradient-to-br from-teal-500 to-green-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center cursor-pointer"
              onClick={() => handleDiagramClick('niv0')}
            >
              Diagrama de Flujo de Datos | Nivel 0
            </li>
            <li
              className="bg-gradient-to-br from-pink-500 to-red-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center cursor-pointer"
              onClick={() => handleDiagramClick('niv')}
            >
              Procesamiento de Compras 2.0 | Nivel 1
            </li>
            <li
              className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center cursor-pointer"
              onClick={() => handleDiagramClick('niv2')}
            >
              Gestion de Pagos 3.0 | Nivel 2
            </li>
            <li
              className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center cursor-pointer"
              onClick={() => handleDiagramClick('niv3')}
            >
              Generacion de Boletos 4.0 | Nivel 3
            </li>
            <li
              className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center cursor-pointer"
              onClick={() => handleDiagramClick('mr')}
            >
              Diagrama Entidad Relacion | Modelo Relacional
            </li>
          </ul>
          {selectedDiagram && (
            <div className="mt-10">
              <img
                src={diagrams[selectedDiagram]}
                alt="Diagrama"
                className="w-3/4 h-100 rounded-lg shadow-lg mx-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BehaviorModel;