import dc from "../assets/diagrams/dc.png";

const DC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Diagrama de Contexto
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          El Diagrama de Contexto ilustra los límites del sistema de boletería y sus interacciones con entidades externas como clientes, personal y sistemas de pago.
        </p>
        <p className="text-lg">
          Este diagrama es una herramienta fundamental en el análisis y diseño de sistemas, ya que permite identificar claramente las fronteras del sistema y las relaciones con los actores externos. Los actores externos pueden ser personas, organizaciones o sistemas que interactúan con el sistema de boletería.
        </p>
        <p className="text-lg">
          En el contexto de este sistema, los clientes representan a los usuarios finales que compran boletos para eventos. El personal incluye a los administradores y operadores que gestionan el sistema y aseguran su correcto funcionamiento. Los sistemas de pago son servicios externos que facilitan las transacciones financieras, permitiendo a los clientes pagar por sus boletos de manera segura y eficiente.
        </p>
        <p className="text-lg">
          Además, el sistema de boletería puede interactuar con otros sistemas externos, como servicios de notificación por correo electrónico, que envían confirmaciones y recordatorios a los clientes, y módulos de reportes, que generan informes.
        </p>
        <p className="text-lg">
          Comprender estas interacciones es crucial para el diseño de un sistema robusto y eficiente, ya que permite anticipar posibles puntos de fallo y diseñar soluciones que aseguren la continuidad del servicio. El Diagrama de Contexto también facilita la comunicación entre los diferentes stakeholders del proyecto, proporcionando una visión clara y concisa del alcance del sistema.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Límites del Sistema
          </h2>
          <ul className="space-y-3">
            <li>Interfaz de Cliente</li>
            <li>Panel de Administración</li>
            <li>Integración con Pasarelas de Pago</li>
            <li>Sistema de Notificaciones por Correo</li>
            <li>Módulo de Reportes</li>
          </ul>
        </div>
        <div className="w-3/4 h-100 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto">
          <img src={dc} alt="Sala de cine" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default DC;