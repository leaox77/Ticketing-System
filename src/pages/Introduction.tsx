import boleteria from '../assets/boleteria.jpg';
import sala from '../assets/sala.jpg'; 
import cinebol from '../assets/cinebol.jpg';
import enc1 from '../assets/enc1.png';
import enc2 from '../assets/enc2.png';
import enc3 from '../assets/enc3.png';
import enc4 from '../assets/enc4.png';
import enc5 from '../assets/enc5.png';
import enc6 from '../assets/enc6.png';
import ben from '../assets/ben.png';
import arb from '../assets/arb.png';

const Introduction = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Marco Teórico del Sistema de Boletería
      </h1>

      {/* Introducción */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Introducción
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Comprar boletos para el cine era un proceso manual, lento e ineficiente, marcado por largas filas y 
          errores en la asignación de asientos. La llegada de la tecnología ha transformado esta experiencia, 
          permitiendo a los usuarios disfrutar de una compra más rápida, segura y cómoda a través de plataformas 
          digitales. Sin embargo, persisten desafíos que necesitan soluciones innovadoras.
        </p>
        <div className="w-1/4 h-120 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto">
          <img src={boleteria} alt="Evolución de la boletería" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Historia y evolución */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Historia y Evolución de los Cines
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Desde los primeros eventos cinematográficos gestionados manualmente hasta las plataformas de venta en línea, 
          la boletería ha evolucionado para adaptarse a las demandas del consumidor moderno. La transformación digital 
          ha permitido gestionar asientos en tiempo real, integrar pagos en línea y mejorar la experiencia general del usuario.
        </p>
        <div className="w-2/4 h-80 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto">
          <img src={sala} alt="Sala de cine" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      <section className="space-y-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-semibold">
          Referencias a Plataformas de Cine
        </h2>
        <p className="text-lg leading-relaxed">
          Plataformas como Cinebol y Multicine han revolucionado la industria cinematográfica, permitiendo a los usuarios 
          gestionar sus boletos de forma eficiente y cómoda. Estas herramientas han integrado opciones como la selección 
          de asientos en tiempo real, pagos en línea seguros y programas de fidelización.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cinebol: Gestión en tiempo real de asientos y pagos en línea.</li>
          <li>Multicine: Flexibilidad entre boletos físicos y digitales.</li>
        </ul>
        <div className="w-2/4 h-90 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto">
          <img src={cinebol} alt="cinebol" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Importancia de la digitalización */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Importancia de la Digitalización
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          La digitalización ha eliminado las largas filas y los errores manuales, ofreciendo a los usuarios una experiencia de 
          compra más ágil y personalizada. Además, permite a los cines optimizar sus operaciones, reduciendo costos y 
          mejorando la satisfacción del cliente.
        </p>
        <div className="w-2/4 h-90 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto">
          <img src={ben} alt="cinebol" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Árbol del problema */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Árbol del Problema
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        El problema central radica en la ineficiencia del proceso actual de compra de boletos, que afecta tanto a los clientes como a los cines. El sistema manual, basado en taquillas físicas, genera una serie de inconvenientes, como largas filas, tiempos de espera excesivos y la posibilidad de cometer errores en la selección de asientos o en la emisión de boletos. Estos problemas no solo afectan la experiencia del usuario, sino que también impactan negativamente en la productividad de los cines, ya que el personal debe dedicar tiempo a resolver estos inconvenientes en lugar de centrarse en otros aspectos operativos. La falta de un sistema ágil y automatizado se traduce en una pérdida de tiempo considerable, lo que hace evidente la necesidad de una solución que optimice y agilice todo el proceso de compra.

        </p>
        <div className="w-2/4 h-120 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto">
          <img src={arb} alt="cinebol" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Formulación del problema */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Formulación del Problema
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        La formulación del problema en torno a la implementación de un sistema de boletería de cine en línea se refiere a la necesidad de crear una solución digital eficiente y funcional que facilite el proceso de compra de boletos para los usuarios, al tiempo que optimiza la gestión administrativa para los responsables del cine. Este sistema debe abordar diversas áreas que impactan tanto en la experiencia del cliente como en la operatividad del negocio.

Uno de los principales desafíos a resolver es cómo garantizar que los usuarios puedan acceder a la plataforma de boletería de manera rápida y sin problemas, lo que implica que el sistema debe ser intuitivo y fácil de usar, de la misma manera este debe ser accesible en diferentes plataformas. La interfaz debe permitir a los usuarios navegar sin dificultades entre las opciones de películas, horarios, y asientos disponibles y entre el diseño de sistemas que se presenta en el trabajo. Para lograrlo fue necesario diseñar una estructura clara que agilice la selección de funciones asegurando que el cliente pueda la adquisición de su boleto de manera eficiente sin tener que pasar por un proceso largo y tedioso

        </p>
      </section>

      {/* Propósito del estudio */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Propósito del Estudio
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        El propósito del estudio es desarrollar una plataforma digital que facilite la compra de boletos en línea, optimizando todo el proceso para los usuarios. La plataforma permitirá a los clientes seleccionar películas, horarios y asientos de manera sencilla y rápida, eliminando la necesidad de esperar en largas filas. Además, integrará múltiples métodos de pago, ofreciendo opciones seguras y convenientes. También incluirá funcionalidades para la emisión de boletos electrónicos y la generación automática de reportes de ventas, proporcionando a los administradores herramientas eficientes para gestionar las operaciones del cine de manera más efectiva.
Por otro lado, el sistema incluirá una función para generar reportes automáticos sobre las ventas y la ocupación de las salas, lo que ayudará a los administradores de los cines a gestionar sus operaciones de manera más eficiente. Los reportes permitirán obtener datos en tiempo real sobre la cantidad de boletos vendidos, el rendimiento de cada función y las preferencias de los clientes, lo que facilitará la toma de decisiones informadas y la planificación de estrategias más efectivas.
Este sistema debe mejorar la experiencia del usuario al permitirle poder ver una película, permitiendo que seleccione el horario, asiento y película de manera sencilla, al mismo tiempo que optimiza la gestión administrativa mediante la automatización de tarea de la venta de boletos y la generación de reporte. El propósito debe contribuir a una experiencia fluida y placentera para el usuario siendo una manera más eficaz para conseguir un boleto

        </p>
      </section>

      {/* Instrumentos de investigación */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Instrumentos de Investigación
        </h2>
        {/* Encuestas */}
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Encuestas
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Las encuestas realizadas a usuarios revelaron problemas como largas filas y dificultades con la asignación de asientos. 
          La mayoría de los encuestados prefieren sistemas digitales que permitan la selección de asientos en tiempo real.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center text-gray-500 mx-auto">
        <img src={enc1} alt="Encuesta 5" className="w-3/4 h-90 object-cover rounded-lg mx-auto" />
              <img src={enc2} alt="Encuesta 2" className="w-3/4 h-90 object-cover rounded-lg mx-auto" />

            <img src={enc3} alt="Encuesta 3" className="w-3/4 h-90 object-cover rounded-lg mx-auto" />

             <img src={enc4} alt="Encuesta 4" className="w-3/4 h-90 object-cover rounded-lg mx-auto" />

              
              <img src={enc5} alt="Encuesta 5" className="w-3/4 h-90 object-cover rounded-lg mx-auto" />
          </div>

        {/* Entrevistas */}
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Entrevistas
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Las entrevistas a administradores y personal de cines identificaron los siguientes puntos clave:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li>El proceso actual de venta es manual y toma varios minutos, especialmente en horarios pico.</li>
          <li>Problemas frecuentes incluyen largas filas, errores en la asignación de asientos y fallos ocasionales en el sistema.</li>
          <li>Un sistema automatizado reduciría errores, agilizaría las filas y permitiría al personal enfocarse en otras tareas.</li>
          <li>Funcionalidades deseadas: selección de asientos en tiempo real, pagos en línea, y reportes automáticos de ventas.</li>
        </ul>
      </section>

      {/* Análisis de plataforma existente */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Análisis de Plataforma Existente
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Se estudiaron plataformas actuales para identificar sus funcionalidades y áreas de mejora. Esto incluye evaluar 
          la experiencia de usuario, los métodos de pago y la integración de reportes automáticos.
        </p>
      </section>

      {/* Anexos */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Anexos
        </h2>
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Ciclo de Vida del Desarrollo de Software
        </h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>Planificación:</strong> Definir objetivos, actores y recursos necesarios para el desarrollo del sistema.</li>
          <li><strong>Análisis:</strong> Recopilar requisitos funcionales y no funcionales, como selección de películas, horarios y asientos.</li>
          <li><strong>Diseño:</strong> Crear diagramas de casos de uso, secuencia y modelos de datos.</li>
          <li><strong>Implementación:</strong> Representar gráficamente los procesos del sistema con diagramas de contexto, flujo de datos y entidad-relación.</li>
        </ul>
        <div className="w-2/4 h-120 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mx-auto">
          <img src={enc6} alt="cinebol" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export default Introduction;
