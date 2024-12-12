
  import mcus from '../assets/diagrams/mcus.png';
  import useZoom from '@/hooks/zoom';

  const Mcus = () => {
    const { zoomRef } = useZoom();

    return (
      <div className="max-w-4xl mx-auto">
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
          <div className="w-full h-120 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto zoom-container">
            <img ref={zoomRef} src={mcus} alt="Modelo de Casos de Uso de Sistema" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    );
  };

  export default Mcus;
