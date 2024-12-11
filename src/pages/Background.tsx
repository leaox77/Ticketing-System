const Background = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Antecedentes del Proyecto</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          La industria del cine ha evolucionado significativamente con la transformación digital. Nuestro sistema de venta de entradas aborda la creciente necesidad de soluciones de reserva eficientes y fáciles de usar, al tiempo que mantiene capacidades robustas de gestión de backend.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Declaración del Problema
          </h2>
          <p>
            Los sistemas tradicionales de venta de entradas a menudo enfrentan desafíos con:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Procesos de reserva manuales</li>
            <li>Conflictos en la asignación de asientos</li>
            <li>Retrasos en el procesamiento de pagos</li>
            <li>Gestión de datos de clientes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Background;
