import { Link } from "react-router-dom";

const AmbientalModel = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Modelo Ambiental
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          El Modelo Ambiental describe cómo nuestro sistema de boletería interactúa con su entorno, incluyendo usuarios, sistemas externos y otros actores.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="dp">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-xl font-semibold text-white mb-3">Declaración de Propositos</h2>
              <p className="text-white">Diagrama de Procesos mostrando flujos de trabajo del sistema.</p>
            </div>
          </Link>
          <Link to="dc">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-xl font-semibold text-white mb-3">Diagrama de Contexto</h2>
              <p className="text-white">Diagrama de Contexto ilustrando los límites del sistema.</p>
            </div>
          </Link>
          <Link to="la">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-xl font-semibold text-white mb-3">Lista de Acontecimientos</h2>
              <p className="text-white">Lista de eventos que afectan y describen al sistema.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AmbientalModel;
