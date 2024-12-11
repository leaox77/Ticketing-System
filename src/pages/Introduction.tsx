const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Marco Teorico</h1>
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          El Sistema de Venta de Entradas de Cine está diseñado para agilizar el proceso de reserva
          y gestión de entradas de cine. Sirve tanto a los clientes como al personal del cine con una
          interfaz intuitiva y una funcionalidad robusta en el backend.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6">Características Clave</h2>
        <ul className="list-disc pl-6 space-y-2">
            <li>Múltiples métodos de pago</li>

          <li>Gestión de sesiones</li>

           <li>Historial de reservas</li>

            <li>Panel de administración</li>

          <li>Booking history</li>
          <li>Admin dashboard</li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;