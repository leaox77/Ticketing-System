import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const navItems = [
    { name: 'Contenido', path: '/content' },
    { name: 'Marco Teorico', path: '/introduction' },
    { name: 'Antecedentes', path: '/background' },
    {
      name: 'Paradigma del Analisis Estructurado',
      path: '/essential-model',
      subItems: [
        {
          name: 'Modelo Ambiental',
          path: '/essential-model/ambiental',
          subItems: [
            { name: 'Declaración de propósitos', path: '/essential-model/ambiental/dp' },
            { name: 'Diagrama de Contexto', path: '/essential-model/ambiental/dc' },
            { name: 'Listado de Acontecimientos', path: '/essential-model/ambiental/la' },
          ],
        },
        { name: 'Modelo de Comportamiento', path: '/essential-model/behavior' },
      ],
    },
    { name: 'Modelo Orientado a Objetos', path: '/object-oriented' },
    { name: 'Modelos de Casos de Uso', path: '/ae',
      subItems: [
        { name: 'Modelo de Caso de Uso de Negocio', path: '/ae/mcun' },
        { name: 'Modelo de Caso se Uso de Sistema', path: '/ae/mcus' },
        { name: 'Caso de Uso a Nivel Extendido', path: '/ae/cune' },
      ],
     },
    { name: 'Video Explicativo', path: '/v' },
    { name: 'Contacatos', path: '/c' },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-primary hover:text-primary/90 transition-colors">
                CinemaTickets
              </Link>
            </div>
            
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="nav-item inline-flex items-center px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                    {item.subItems && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute z-10 hidden group-hover:block w-48 mt-1 rounded-lg shadow-lg py-1 bg-card border border-border">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.name} className="relative group/sub">
                          <Link
                            to={subItem.path}
                            className="nav-item block px-4 py-2 text-sm"
                          >
                            {subItem.name}
                            {subItem.subItems && <ChevronDown className="ml-1 h-4 w-4 inline" />}
                          </Link>
                          
                          {subItem.subItems && (
                            <div className="absolute left-full top-0 z-10 hidden group-hover/sub:block w-48 ml-1 rounded-lg shadow-lg py-1 bg-card border border-border">
                              {subItem.subItems.map((subSubItem) => (
                                <Link
                                  key={subSubItem.name}
                                  to={subSubItem.path}
                                  className="nav-item block px-4 py-2 text-sm"
                                >
                                  {subSubItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <button type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('md:hidden border-t border-border', isOpen ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                className="nav-item block px-3 py-2 rounded-lg text-base font-medium"
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="pl-4">
                  {item.subItems.map((subItem) => (
                    <div key={subItem.name}>
                      <Link
                        to={subItem.path}
                        className="nav-item block px-3 py-2 rounded-lg text-base font-medium"
                      >
                        {subItem.name}
                      </Link>
                      {subItem.subItems && (
                        <div className="pl-4">
                          {subItem.subItems.map((subSubItem) => (
                            <Link
                              key={subSubItem.name}
                              to={subSubItem.path}
                              className="nav-item block px-3 py-2 rounded-lg text-base font-medium"
                            >
                              {subSubItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;