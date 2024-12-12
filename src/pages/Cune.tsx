

const Cune = () => {

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Modelo de Casos de Uso de Sistema</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <div className="bg-gradient-to-br from-green-500 to-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 mt-6">
          <p className="text-white mb-4">
            El Modelo de Casos de Uso de Sistema es una representación gráfica y textual de las interacciones entre los actores externos y el sistema. Este modelo ayuda a identificar y documentar los requisitos funcionales del sistema desde la perspectiva del usuario.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>
              <strong>Identificación de Actores:</strong> Los actores son entidades externas que interactúan con el sistema. Pueden ser personas, otros sistemas o dispositivos. Identificar los actores es crucial para entender quiénes utilizarán el sistema y cómo interactuarán con él.
            </li>
            <li>
              <strong>Objetivos del Sistema:</strong> Los objetivos del sistema son las metas que el sistema debe cumplir para ser considerado exitoso. Estos objetivos deben estar alineados con las necesidades y expectativas de los actores y del negocio en general.
            </li>
            <li>
              <strong>Interacciones del Sistema:</strong> Las interacciones del sistema detallan cómo los actores y el sistema se comunican entre sí. Esto incluye el flujo de información y las acciones que se realizan en respuesta a las entradas de los actores.
            </li>
            <li>
              <strong>Descripción de Casos de Uso:</strong> Los casos de uso describen las acciones que los actores pueden realizar con el sistema. Cada caso de uso debe tener un objetivo claro y describir los pasos necesarios para alcanzar ese objetivo.
            </li>
          </ul>
        </div>

        {/* Tabla de Casos de Uso */}
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Casos de Uso</h2>
          <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Caso de Uso</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Actores</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Propósito</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Resumen</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tipo</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Referencias Cruzadas</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Precondiciones</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Postcondiciones</th>
              </tr>
            </thead>
            <tbody>
  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Comprar boletos</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cliente, Sistema de Pago</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Adquisición de boletos por parte del cliente</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El cliente selecciona una función, asiento, y tipo de boleto. Luego, realiza el pago correspondiente.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Principal</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Vender boletos, Realizar pago
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El cliente debe estar registrado. Deben existir funciones disponibles.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El cliente recibe el boleto. Se registra la transacción.
    </td>
  </tr>
  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Vender boletos</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cajero, Sistema de Generación de Boletos</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Facilitar la venta de boletos en taquilla
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El cajero selecciona la función, asiento, y tipo de boleto. Imprime el boleto y registra la venta.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Secundario</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Comprar boletos, Generar reportes</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Existencia de boletos disponibles</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El cliente recibe el boleto impreso. Se registra la venta.
    </td>
  </tr>
  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Realizar pago</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cliente, Sistema de Pago</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Procesar los pagos realizados por los clientes
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El cliente ingresa los datos de pago y confirma la transacción. El sistema verifica la información y procesa el pago.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Principal</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Comprar boletos
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El cliente debe contar con un método de pago válido.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      La transacción es procesada exitosamente. Se registra el pago.
    </td>
  </tr>
  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Generar reportes</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Administrador</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Obtener informes sobre ventas y operaciones
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El administrador selecciona el rango de fechas y el tipo de reporte. El sistema genera el informe solicitado.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Secundario</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Vender boletos
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Deben existir datos de ventas registrados en el sistema.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Se genera y entrega el informe al administrador.
    </td>
  </tr>
  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Resolver problemas</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Soporte Técnico</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Brindar soluciones a fallos técnicos en el sistema
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El equipo de soporte analiza el problema reportado y realiza las acciones necesarias para solucionarlo.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Secundario</td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      Todas las operaciones del sistema
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El sistema debe estar operativo y registrar el problema en un log.
    </td>
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      El problema es resuelto y el sistema vuelve a operar con normalidad.
    </td>
  </tr>
</tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default Cune;
