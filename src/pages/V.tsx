const V = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        Documentación en Video
      </h1>
      <div className="space-y-6 text-gray-600 dark:text-gray-300">
        <p className="text-lg leading-relaxed">
          Mira nuestra guía en video que explica las características, arquitectura y detalles de implementación del sistema de venta de entradas de cine.
        </p>

        <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Visión General del Sistema
          </h2>
          {/* Contenedor para iframe */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/sNZ7AUnYYZg?si=nJtggz7c35POPADJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Sección de Contenidos y Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Contenidos del Video
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Arquitectura del Sistema</li>
            <li>Recorrido por la Interfaz de Usuario</li>
            <li>Explicación del Sistemas </li>
          </ul>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Recursos Adicionales
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Manual de Usuario</li>
            <li>Documentación</li>
            <li>Antecedentes y Marco Teorico</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default V;
