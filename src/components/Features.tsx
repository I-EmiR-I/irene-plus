import React from 'react';
import { Brain, Calendar, Shield } from 'lucide-react';

const features = [
  {
    name: 'EXPEDIENTE IA',
    description: 'Graba, transcribe y analiza tus sesiones de manera automática, liberando tiempo valioso para concentrarte en tus pacientes.',
    icon: Brain,
  },
  {
    name: 'AGENDA VIRTUAL',
    description: 'Control total de citas, historial clínico y evaluaciones psicométricas todo en una plataforma intuitiva.',
    icon: Calendar,
  },
  {
    name: 'SEGURIDAD TOTAL',
    description: 'Protección garantizada de datos sensibles mediante encriptación de alto nivel y estricto cumplimiento de normativas de privacidad.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ¿POR QUÉ ELEGIR IRENE?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            La diferencia entre gestionar tu consulta y elevarla al siguiente nivel está en las herramientas que eliges.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          {features.map((feature) => (
            <div key={feature.name} className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;