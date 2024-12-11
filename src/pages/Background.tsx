const Background = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
        Antecedentes del Proyecto
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p className="text-lg leading-relaxed">
          Desde su nacimiento en el siglo XIX, los cines han experimentado una evolución significativa en su sistema de boletería, impulsada por avances tecnológicos y cambios en las expectativas de los consumidores. Las primeras proyecciones, gestionadas manualmente, fueron reemplazadas por taquillas físicas a principios del siglo XX, donde el proceso seguía siendo manual pero más estructurado.
        </p>
        <p className="text-lg leading-relaxed">
          La llegada de tecnologías como las impresoras y máquinas automáticas en el siglo XX mejoró la eficiencia, aunque las taquillas seguían siendo indispensables. Con la digitalización en los años 90 y el auge de Internet, los cines empezaron a ofrecer plataformas en línea que permitían la compra de boletos desde casa. Estas plataformas evolucionaron hacia aplicaciones móviles, ofreciendo servicios más personalizados, como selección de asientos en tiempo real, pagos en línea seguros y programas de fidelización.
        </p>
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Ejemplos Actuales</h2>
          <p className="leading-relaxed">
            Ejemplos actuales como Cinebol y Multicine destacan por integrar boletos digitales, pagos rápidos y opciones de compra adaptadas a las preferencias del cliente, optimizando la experiencia del usuario y las operaciones internas de los cines.
          </p>
        </div>
        <p className="text-lg leading-relaxed">
          La tecnología ha transformado completamente la interacción de los clientes con los cines, eliminando largas filas y tiempos de espera, y posicionando a la digitalización como una herramienta clave para el futuro de la industria.
        </p>
      </div>
    </div>
  );
};

export default Background;