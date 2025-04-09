import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // Height of the fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="https://irene.plus/web/image/website/1/logo/I.R.E.N.E.@unique=bc67c16" alt="IRENE" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button onClick={() => handleClick('why-irene')} className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                ¿Por qué IRENE?
              </button>
              <button onClick={() => handleClick('pricing')} className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Planes
              </button>
              <button onClick={() => handleClick('resources')} className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Recursos Psicológicos
              </button>
              <button onClick={() => handleClick('about')} className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Nosotros
              </button>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <button onClick={() => handleClick('why-irene')} className="text-gray-900 block px-3 py-2 text-base font-medium w-full text-left">
              ¿Por qué IRENE?
            </button>
            <button onClick={() => handleClick('pricing')} className="text-gray-900 block px-3 py-2 text-base font-medium w-full text-left">
              Planes
            </button>
            <button onClick={() => handleClick('resources')} className="text-gray-900 block px-3 py-2 text-base font-medium w-full text-left">
              Recursos Psicológicos
            </button>
            <button onClick={() => handleClick('about')} className="text-gray-900 block px-3 py-2 text-base font-medium w-full text-left">
              Nosotros
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;