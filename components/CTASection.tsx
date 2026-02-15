
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#202c44] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: 'white', stopOpacity: 0.1}} />
                  <stop offset="100%" style={{stopColor: 'white', stopOpacity: 0.3}} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight relative z-10 max-w-4xl mx-auto">
            Fale com um contabilista e mantenha o seu negócio em conformidade
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Estamos prontos para otimizar a sua fiscalidade. Agende agora uma consultoria gratuita de 15 minutos.
          </p>
          <div className="relative z-10">
            <a 
              href="#contacto"
              className="inline-block bg-white text-[#202c44] px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
