const LA = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Lista de Acontecimientos
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          La Lista de Acontecimientos detalla los eventos significativos que pueden ocurrir dentro del sistema de boletería de cine y su impacto en el estado del sistema.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Acontecimientos Clave
          </h2>
          <ul className="space-y-3">
            <li>Consulta de disponibilidad de boletos</li>
            <li>Selección de función y asiento</li>
            <li>Confirmación de compra de boletos</li>
            <li>Procesamiento de pagos (tarjeta, efectivo, transferencia)</li>
            <li>Generación de boletos electrónicos o físicos</li>
            <li>Creación o modificación de eventos en el sistema</li>
            <li>Generación de reportes de ventas y estadísticas</li>
            <li>Procesamiento seguro de transacciones</li>
            <li>Verificación de cumplimiento fiscal y generación de reportes</li>
            <li>Sincronización de datos entre cajeros de autoservicio y el sistema central</li>
            <li>Emisión de boletos físicos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LA;