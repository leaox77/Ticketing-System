import logo from '../assets/cinebollogo.png';

const Content = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-primary hover:text-primary/90 text-center">
        Bienvenido al Sistema de Venta de Entradas de Cine
      </h1>

      <div className="flex items-center justify-center mb-6">
        <img
          src={logo}
          alt="Cinema Icon"
          className="w-20 h-20 animate-bounce"
        />
      </div>

      <div className="prose dark:prose-invert">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Descubre una forma sencilla de gestionar proyecciones de películas, vender entradas sin esfuerzo,
          y mejorar las interacciones con los clientes. Nuestro sistema integra tecnología de vanguardia
          para ofrecer una experiencia de usuario inigualable.
        </p>

        <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300">
            <li><strong>Diseño Intuitivo:</strong> Navega con facilidad y simplicidad.</li>
            <li><strong>Actualizaciones en Tiempo Real:</strong> Mantente actualizado con información en vivo.</li>
            <li><strong>Pagos Seguros:</strong> Asegura la seguridad de los datos del cliente.</li>
            <li><strong>Analíticas Avanzadas:</strong> Obtén información sobre el rendimiento de tus ventas.</li>
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <a
          href="/get-started"
          className="nav-item inline-flex items-center px-3 py-2 text-sm font-medium">
          Empieza ahora
        </a>
      </div>

      <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
        <p>Explora el futuro de la venta de entradas de cine y redefine tu experiencia.</p>
      </div>
    </div>
  );
};

export default Content;
