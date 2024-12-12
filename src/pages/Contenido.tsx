import logo from '../assets/cinebollogo.png';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 dark:bg-gray-800 p-4 rounded-lg shadow-2xl border-4 border-purple-300 hover:border-purple-400 transition-all duration-500">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-800 dark:text-gray-100 text-center drop-shadow-lg animate-pulse">
        ¡Bienvenido al Sistema de Venta de Entradas de Cine!
      </h1>

      <div className="flex items-center justify-center mb-6 ">
        <img
          src={logo}
          alt="Cinema Icon"
          className="w-20 h-20 animate-bounce bg-gray-500 dark:bg-transparent rounded-lg p-2"
        />
      </div>

      <div className="prose prose-lg text-white text-center">
        <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-100">
          Descubre una forma <span className="font-bold underline decoration-wavy decoration-purple-300">sencilla</span> de gestionar proyecciones de películas, vender entradas sin esfuerzo,
          y mejorar las interacciones con los clientes. Nuestro sistema integra tecnología de vanguardia
          para ofrecer una experiencia de usuario inigualable.
        </p>

        <ul className="list-none mt-6 space-y-4">
          <li className="flex items-center gap-4">
            <span className="text-purple-300 text-3xl">★</span>
            <p className='text-gray-800 dark:text-gray-100'><strong className="text-gray-800 dark:text-gray-100">Diseño Intuitivo:</strong> Navega con facilidad y simplicidad.</p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-purple-300 text-3xl">★</span>
            <p className='text-gray-800 dark:text-gray-100'><strong className="text-gray-800 dark:text-gray-100">Documentación Completa:</strong> Accede a una guía detallada y bien estructurada.</p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-purple-300 text-3xl">★</span>
            <p className='text-gray-800 dark:text-gray-100'><strong className="text-gray-800 dark:text-gray-100">Diagramas Claros:</strong> Visualiza el flujo del sistema con diagramas precisos.</p>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-purple-300 text-3xl">★</span>
            <p className='text-gray-800 dark:text-gray-100'><strong className="text-gray-800 dark:text-gray-100">Video Explicativo:</strong> Aprende a usar el sistema con un video tutorial.</p>
          </li>
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          to="/introduction"
          className="nav-item inline-flex items-center px-3 py-2 text-sm font-medium bg-purple-400 text-white rounded-lg hover:bg-gray-300 transition-colors duration-300">
          Empieza ahora
        </Link>
      </div>

      <div className="mt-12 text-center text-gray-100">
        <p className="text-lg italic text-gray-800 dark:text-gray-100">
          Explora el <span className="text-purple-300 font-semibold">futuro</span> de la venta de entradas de cine y redefine tu experiencia.
        </p>
      </div>
    </div>
  );
};

export default Content;