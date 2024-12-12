import { Link } from "react-router-dom";
import tiktok from "../assets/tiktok.svg";

const C = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-xl text-white">
      <h1 className="text-4xl font-bold mb-6 text-center animate-pulse">
        Contáctanos
      </h1>
      <div className="space-y-4 text-lg">
        <p className="text-center">
          Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Teléfono: +591 75859771</li>
              <li>Dirección: Alfredo Sanjines, El Alto, Bolivia</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Horario de Atención</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Lunes a Viernes: 9:00 AM - 10:00 PM</li>
              <li>Sábado: 9:00 AM - 10:00 PM</li>
              <li>Domingo: 9:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SVG Section */}
      <div className="flex justify-center mt-8 space-x-8">
        {/* Facebook Link */}
        <Link
          to="https://www.facebook.com/groups/266884298106456/?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-blue-500 group-hover:text-blue-400 group-hover:scale-125 transition-transform duration-300"
          >
            <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24h11.495v-9.293H9.69V11.01h3.129V8.409c0-3.1 1.894-4.787 4.659-4.787 1.324 0 2.462.099 2.792.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.764v2.312h3.586l-.467 3.696h-3.119V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .594 23.406 0 22.675 0z" />
          </svg>
        </Link>
        {/* Instagram Link */}
        <Link
          to="https://www.instagram.com/cinebol_elalto/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-pink-500 group-hover:text-pink-400 group-hover:scale-125 transition-transform duration-300"
            >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.163.27-2.905.57-.8.32-1.47.75-2.14 1.42-.67.67-1.1 1.34-1.42 2.14-.3.742-.511 1.624-.57 2.905-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.27 2.163.57 2.905.32.8.75 1.47 1.42 2.14.67.67 1.34 1.1 2.14 1.42.742.3 1.624.511 2.905.57 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.163-.27 2.905-.57.8-.32 1.47-.75 2.14-1.42.67-.67 1.1-1.34 1.42-2.14.3-.742.511-1.624.57-2.905.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.27-2.163-.57-2.905-.32-.8-.75-1.47-1.42-2.14-.67-.67-1.34-1.1-2.14-1.42-.742-.3-1.624-.511-2.905-.57-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
        </Link>
        {/* External Website */}
        <Link
          to="https://www.tiktok.com/@cinebol?lang=es"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <img
            src={tiktok}
            alt="TikTok Logo"
            className="w-12 h-12 text-pink-500 group-hover:text-pink-400 group-hover:scale-125 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default C;
