import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '998',
    description: 'Ideal para comenzar tu transformación digital',
    features: [
      'Agenda',
      'Registro de pacientes',
      'Expediente electrónico',
      'Tests psicométricos: Aplicación',
    ],
  },
  {
    name: 'Estándar',
    price: '1,450',
    description: 'Para terapeutas que buscan optimizar resultados',
    features: [
      'Todas las funciones del plan Básico',
      'Grabación de sesión',
      'Estadísticas de pacientes',
      'Tests psicométricos: Interpretación',
      'Asistente Virtual: Recordatorios',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '2,498',
    description: 'La experiencia completa para profesionales exigentes',
    features: [
      'Todas las funciones del plan Estándar',
      'Transcripción automática',
      'Manejo de crisis',
      'Control de cobranza',
      'Asistente Virtual avanzado',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-white py-16 lg:py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planes diseñados para tu práctica
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Elige el plan que mejor se adapte a tus necesidades y comienza a transformar tu consulta
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                {plan.popular && (
                  <p className="absolute top-0 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Más popular
                  </p>
                )}

                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/mes</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-8 block w-full py-3 px-6 border rounded-md text-center font-medium ${
                  plan.popular
                    ? 'bg-blue-600 border-transparent text-white hover:bg-blue-700'
                    : 'bg-white border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Comenzar ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;