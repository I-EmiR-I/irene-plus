import React from 'react';

const teamMembers = [
  {
    name: "Irene Delgado Vargas",
    role: "Psicóloga clínica",
    image: "https://irene.plus/web/image/1332-191cbe73/01irene.webp",
    description: "Irene Delgado Vargas es una psicóloga con más de 15 años de experiencia en el diagnóstico, tratamiento y seguimiento de pacientes en contextos de terapia individual y grupal."
  },
  {
    name: "Jesús Leonel Izabal Delgado",
    role: "Psicología diagnóstica",
    image: "https://irene.plus/web/image/1325-26d30908/01leonel.webp",
    description: "Leonel Izabal Delgado es un psicólogo con amplia experiencia en psicología diagnóstica, un área en la que ha dedicado 5 años de especialización."
  },
  {
    name: "Aida Carolina Espinoza Osuna",
    role: "Pasante de Psicología",
    image: "https://irene.plus/web/image/1326-eacbd8b7/01aida.webp",
    description: "Con una sólida formación en el ámbito tecnológico. Carolina es egresada de ofimática, ha desarrollado competencias en la creación de contenido virtual y en el diseño instruccional."
  },
  {
    name: "Esmeralda Urrea Barraza",
    role: "Pasante de Psicología",
    image: "https://irene.plus/web/image/1327-504c4e62/01esmeralda.webp",
    description: "Esmeralda cuenta con una destacada trayectoria en la organización y coordinación de proyectos."
  },
  {
    name: "José Ramón Díaz López",
    role: "Asesor Legal",
    image: "https://irene.plus/web/image/1328-e65104e2/01jose.webp",
    description: "José Ramón es un Licenciado en Derecho especializado en brindar servicios legales a empresas."
  },
  {
    name: "José Francisco Velazquez Sonoqui",
    role: "Asesor de Marketing",
    image: "https://irene.plus/web/image/1329-dc35ca32/01francisco.webp",
    description: "José Francisco Velázquez Sonoqui es un profesional en mercadotecnia, especializado en inteligencia de mercados y análisis de datos."
  },
  {
    name: "Roberto Rodríguez",
    role: "Diseñador de software",
    image: "https://irene.plus/web/image/1330-9dd96a12/01josee.webp",
    description: "Roberto es un profesional con una sólida formación en arquitectura y cine, quien ha enfocado su carrera en la creación de experiencias de usuario que fusionan el arte y la tecnología."
  },
  {
    name: "Román Alejandro Mendoza Urdiales",
    role: "Investigador",
    image: "https://irene.plus/web/image/1331-04f0aa26/01roman.webp",
    description: "Román Alejandro Mendoza Urdiales es un académico destacado en inteligencia artificial (IA), procesamiento del lenguaje natural (NLP) y economía conductual."
  }
];

const About = () => {
  return (
    <div id="about" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Conoce a los profesionales detrás de IRENE
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-40">
                <img 
                  className="w-40 h-40 rounded-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-500">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;