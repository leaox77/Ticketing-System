import { Link } from 'react-router-dom';

const AE = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Modelo de Casos de Uso
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          Esta sección proporciona un análisis detallado y una evaluación del rendimiento, eficiencia y áreas de mejora del sistema de venta de entradas de cine.
        </p>
        <p className="text-lg">
          Los modelos de casos de uso son una herramienta fundamental en el desarrollo de software, ya que permiten identificar y documentar las interacciones entre los usuarios y el sistema. Estos modelos ayudan a comprender mejor los requisitos del sistema y a diseñar soluciones que satisfagan las necesidades de los usuarios.
        </p>
        <p className="text-lg">
          En el contexto de un sistema de venta de entradas de cine, los casos de uso pueden incluir escenarios como la compra de entradas, la selección de asientos, el procesamiento de pagos y la gestión de reservas. Cada uno de estos casos de uso describe una secuencia de pasos que los usuarios siguen para completar una tarea específica, así como las interacciones con el sistema y las posibles excepciones que pueden ocurrir.
        </p>
        <p className="text-lg">
          Al modelar estos casos de uso, es posible identificar áreas de mejora en el sistema, como la optimización del tiempo de respuesta, la mejora de la experiencia del usuario y la implementación de medidas de seguridad más robustas. Además, los modelos de casos de uso facilitan la comunicación entre los desarrolladores, los diseñadores y los stakeholders, asegurando que todos tengan una comprensión clara de los objetivos y requisitos del sistema.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="mcun">
            <div className="bg-gradient-to-br from-pink-500 to-indigo-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Modelo de Casos de Uso de Negocio
              </h2>
                <ul className="list-disc pl-6 space-y-2 text-white">
                <li>Identificación de Actores</li>
                <li>Descripción de Casos de Uso</li>
                <li>Interacciones del Negocio</li>
                <li>Objetivos del Negocio</li>
                </ul>
            </div>
          </Link>
          <Link to="mcus">
            <div className="bg-gradient-to-br from-purple-500 to-teal-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Modelo de Casos de Uso de Sistema
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white">
                <li>Identificación de Actores</li>
                <li>Descripción de Casos de Uso</li>
                <li>Interacciones del Sistema</li>
                <li>Requisitos Funcionales</li>
              </ul>
            </div>
          </Link>
            <Link to="cune">
            <div className="bg-gradient-to-br from-green-500 to-pink-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-white mb-4">
              Modelo de Casos de Uso de Texto Expandido
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-white">
              <li>Descripción Detallada de Casos de Uso</li>
              <li>Flujos Alternativos</li>
              <li>Precondiciones y Postcondiciones</li>
              <li>Requisitos No Funcionales</li>
              </ul>
            </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AE;