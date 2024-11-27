import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const navItems = [
    { name: 'Content', path: '/content' },
    { name: 'Introduction', path: '/introduction' },
    { name: 'Background', path: '/background' },
    {
      name: 'Essential Model',
      path: '/essential-model',
      subItems: [
        {
          name: 'Ambiental Model',
          path: '/essential-model/ambiental',
          subItems: [
            { name: 'DP', path: '/essential-model/ambiental/dp' },
            { name: 'DC', path: '/essential-model/ambiental/dc' },
            { name: 'LA', path: '/essential-model/ambiental/la' },
          ],
        },
        { name: 'Behavior Model', path: '/essential-model/behavior' },
      ],
    },
    { name: 'AE', path: '/ae' },
    { name: 'Object Oriented Model', path: '/object-oriented' },
    { name: 'V', path: '/v' },
    { name: 'C', path: '/c' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                CinemaTickets
              </Link>
            </div>
            
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  >
                    {item.name}
                    {item.subItems && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute z-10 hidden group-hover:block w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.name} className="relative group/sub">
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subItem.name}
                            {subItem.subItems && <ChevronDown className="ml-1 h-4 w-4 inline" />}
                          </Link>
                          
                          {subItem.subItems && (
                            <div className="absolute left-full top-0 z-10 hidden group-hover/sub:block w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800">
                              {subItem.subItems.map((subSubItem) => (
                                <Link
                                  key={subSubItem.name}
                                  to={subSubItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('md:hidden', isOpen ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="pl-4">
                  {item.subItems.map((subItem) => (
                    <div key={subItem.name}>
                      <Link
                        to={subItem.path}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {subItem.name}
                      </Link>
                      {subItem.subItems && (
                        <div className="pl-4">
                          {subItem.subItems.map((subSubItem) => (
                            <Link
                              key={subSubItem.name}
                              to={subSubItem.path}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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