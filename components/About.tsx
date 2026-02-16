
import React from 'react';
import { ShieldCheck, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-20 text-[#202c44]/5 select-none pointer-events-none hidden lg:block font-black text-8xl leading-tight text-right pr-12 animate-float-decal">
        ACCOUNTING<br />
        FINANCE<br />
        STRATEGY<br />
        SALES
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2 relative group reveal">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-4 border-white transition-all duration-700 group-hover:scale-[1.02] bg-gray-50 aspect-[4/3]">
              <img 
                src="https://www.dropbox.com/scl/fi/16y0oq3r33p4oxdk3mts9/Sobre-a-CS.jpeg?rlkey=0cg4uxmwwj5kzse9svfpuyyo3&st=6yrxrxmx&raw=1" 
                alt="CS Consulting Office - Carnaxide" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-[#202c44]/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-3xl -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 mb-6 reveal">
              <span className="w-8 h-px bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[11px]">Sobre a CS Consulting</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#121a2a] mb-8 leading-tight uppercase tracking-tighter reveal reveal-delay-1">
              Tradição no Rigor <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#202c44] to-blue-600">Inovação na Gestão</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed reveal reveal-delay-2">
              <p>
                A <strong>CS Consulting & Accounting</strong> nasceu para simplificar a vida de empresários e profissionais em Portugal. O nosso espaço em Carnaxide reflete a nossa cultura: moderno, organizado e focado em resultados.
              </p>
              <p>
                Acreditamos que a contabilidade não deve ser apenas um cumprimento de obrigações, mas uma ferramenta poderosa de <strong>tomada de decisão</strong>. Por isso, aliamos a proximidade do atendimento presencial à eficiência das ferramentas digitais.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group reveal reveal-delay-3">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#202c44] mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-[#121a2a] mb-2">Total Compliance</h4>
                <p className="text-sm text-gray-500">Segurança absoluta no cumprimento de prazos e leis fiscais.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group reveal reveal-delay-3">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#202c44] mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Target size={24} />
                </div>
                <h4 className="font-bold text-[#121a2a]">Visão de Negócio</h4>
                <p className="text-sm text-gray-500">Análise de métricas para ajudar a sua empresa a crescer.</p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 reveal reveal-delay-3">
              <a href="#contacto-detalhes" className="text-[#202c44] font-black text-sm uppercase tracking-widest border-b-2 border-[#202c44] pb-1 hover:text-blue-600 hover:border-blue-600 hover:translate-x-1 transition-all">
                Visite o nosso escritório
              </a>
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm hover:scale-110 transition-transform">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Equipa" className="w-full h-full object-cover" loading="lazy" decoding="async" width="40" height="40" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#202c44] flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                  +12
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
