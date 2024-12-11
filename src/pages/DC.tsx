const DC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Diagrama de Contexto (DC)
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          El Diagrama de Contexto ilustra los límites del sistema de boletería y sus interacciones con entidades externas como clientes, personal y sistemas de pago.
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
        <div className="w-full h-60 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
          Espacio para un gráfico del diagrama de contexto
        </div>
      </div>
    </div>
  );
};

export default DC;