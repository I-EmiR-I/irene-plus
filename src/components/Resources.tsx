import React from 'react';

const Resources = () => {
  return (
    <div id="resources" className="bg-white py-16 lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Recursos Psicológicos
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Descubre nuestros recursos psicológicos, creados para acompañar el crecimiento emocional y el bienestar de personas de todas las edades.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Niños Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://www.irene.plus/web/image/795-d9dad785/ni%C3%83%C2%B1os.webp" 
              alt="Recursos para niños" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Niños</h3>
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
                Ver Recursos
              </a>
            </div>
          </div>

          {/* Adolescentes Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://www.irene.plus/web/image/793-0c3185ba/teens.webp" 
              alt="Recursos para adolescentes" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adolescentes</h3>
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
                Ver Recursos
              </a>
            </div>
          </div>

          {/* Adultos Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://www.irene.plus/web/image/794-047484dd/adultos.webp" 
              alt="Recursos para adultos" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adultos</h3>
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
                Ver Recursos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;