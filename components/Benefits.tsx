
import React from 'react';
import { CheckCircle2, Clock, Zap, Globe, ShieldCheck } from 'lucide-react';

const benefits = [
  { icon: <CheckCircle2 className="w-6 h-6" />, title: "Atendimento personalizado" },
  { icon: <Clock className="w-6 h-6" />, title: "Cumprimento de prazos fiscais" },
  { icon: <Zap className="w-6 h-6" />, title: "Apoio ao empreendedor" },
  { icon: <Globe className="w-6 h-6" />, title: "Soluções para residentes e não residentes" },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Experiência no mercado português" }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 mb-4 reveal">
              <span className="w-8 h-px bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[11px]">Fatores diferenciadores</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#121a2a] mb-8 uppercase tracking-tighter leading-tight reveal reveal-delay-1">
              Porquê escolher a <br /> <span className="text-blue-600">CS Consulting?</span>
            </h2>
            <p className="text-gray-500 mb-12 text-lg font-light leading-relaxed max-w-xl reveal reveal-delay-2">
              Diferenciamo-nos pela agilidade e pelo conhecimento profundo da legislação fiscal portuguesa. O nosso objetivo é que o cliente foque no seu negócio enquanto nós cuidamos dos números.
            </p>
            
            <div className="grid gap-5">
              {benefits.map((b, idx) => (
                <div key={idx} className={`flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group reveal reveal-delay-${idx % 3 + 1}`}>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#202c44] group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-sm">
                    {b.icon}
                  </div>
                  <span className="font-bold text-gray-700 text-base group-hover:text-blue-600 transition-colors">{b.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full reveal reveal-delay-3 px-4 lg:px-0">
            <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">
              {/* Imagem 1 - Ferramentas de Contabilidade */}
              <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] bg-gray-100 transition-all duration-700 hover:shadow-blue-500/20 -translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" 
                  alt="Gestão Financeira e Contabilidade" 
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121a2a]/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
              </div>
              
              {/* Imagem 2 - Análise de Dados e Estratégia */}
              <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] bg-gray-100 transition-all duration-700 hover:shadow-blue-500/20 translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                  alt="Estratégia de Negócio e Dados" 
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121a2a]/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
