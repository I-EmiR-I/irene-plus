import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  TRANSFORMA TU PRÁCTICA CON IA
                </h1>
                <h2 className="mt-4 text-3xl text-blue-600">
                  Expediente clínico y agenda virtual
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Simplifica tu trabajo, mejora el seguimiento de tus pacientes y automatiza procesos con la tecnología más avanzada para psicólogos, psiquiatras y profesionales de la salud mental en México.
                </p>
                <div className="mt-6 flex gap-4">
                  <a href="#contact" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Agenda tu llamada
                  </a>
                  <a href="#pricing" className="inline-flex px-4 py-2 border border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50">
                    Nuestros precios
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://irene.tqr.mx/irenemk01.webp"
                alt="IRENE Dashboard"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <ChevronDown className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;