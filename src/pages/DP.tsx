import { Link } from 'react-router-dom';

const DP = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        Declaracion de Propositos
      </h1>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="text-lg">
          En la boletería de CINEBOL, nuestro propósito es brindar un servicio rápido, eficiente y amigable para facilitar el acceso al mundo del cine. Nos comprometemos a ofrecer información clara, opciones convenientes de compra y una atención personalizada que haga del proceso de adquisición de boletos una experiencia sencilla y agradable, asegurando que cada cliente pueda disfrutar del cine sin contratiempos.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Procesos Clave
          </h2>
          <ul className="space-y-3">
            <li>Flujo de Autenticación de Usuarios</li>
            <li>Proceso de Reserva de Boletos</li>
            <li>Procesamiento de Pagos</li>
            <li>Asignación de Asientos</li>
            <li>Confirmación de Reservas</li>
          </ul>
        </div>
        <div className="w-full h-60 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
          Espacio para un gráfico del diagrama de procesos
        </div>
      </div>
    </div>
  );
};

export default DP;