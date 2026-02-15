
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
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[11px] mb-4 block reveal">Vantagens Exclusivas</span>
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

          <div className="lg:w-1/2 w-full reveal reveal-delay-3">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* Imagem 3D 1 - Análise e Gráficos */}
              <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] bg-gray-100 transition-all duration-700 hover:shadow-blue-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1611974717482-48a4788874d6?q=80&w=800&auto=format&fit=crop" 
                  alt="Financial Analysis 3D" 
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121a2a]/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                {/* Floating shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
              </div>
              
              {/* Imagem 3D 2 - Crescimento e Dados */}
              <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] mt-12 bg-gray-100 transition-all duration-700 hover:shadow-blue-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop" 
                  alt="Business Strategy 3D Coins" 
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121a2a]/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
