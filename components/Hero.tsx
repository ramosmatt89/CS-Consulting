
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#121a2a] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121a2a] via-[#121a2a]/90 to-transparent z-10" />
        
        <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
          <div className="relative h-full w-full">
            <div className="absolute bottom-[10%] right-[10%] w-12 md:w-24 bg-white/5 backdrop-blur-3xl rounded-lg animate-float-slow opacity-50 md:opacity-100 will-change-transform" style={{ height: '60%', animationDelay: '0s' }}></div>
            <div className="absolute bottom-[10%] right-[22%] w-12 md:w-24 bg-white/10 backdrop-blur-2xl rounded-lg animate-float-slow opacity-50 md:opacity-100 will-change-transform" style={{ height: '45%', animationDelay: '1s' }}></div>
            <div className="absolute bottom-[10%] right-[34%] w-12 md:w-24 bg-white/5 backdrop-blur-xl rounded-lg animate-float-slow opacity-50 md:opacity-100 will-change-transform" style={{ height: '30%', animationDelay: '2s' }}></div>
            <div className="absolute bottom-[10%] right-[46%] w-12 md:w-24 bg-white/10 backdrop-blur-lg rounded-lg animate-float-slow opacity-50 md:opacity-100 will-change-transform" style={{ height: '20%', animationDelay: '0.5s' }}></div>
            
            <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/20 blur-[80px] md:blur-[120px] rounded-full animate-pulse will-change-opacity"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 pt-40 md:pt-60 lg:pt-72 pb-16 md:pb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-white leading-[1.05] md:leading-[1.05] mb-6 md:mb-8 uppercase tracking-tighter">
            CONTABILIDADE<br />
            ESTRATÉGICA PARA <br className="sm:hidden" />
            SUA <br className="hidden sm:block" /> EMPRESA
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10 md:mb-12">
            Gestão fiscal rigorosa, acompanhamento próximo e soluções personalizadas para proteger e fazer o seu negócio evoluir.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 md:gap-6">
            <a 
              href="#contacto-detalhes" 
              className="px-8 md:px-10 py-4 bg-[#202c44] text-white rounded-full font-bold text-base md:text-lg hover:bg-[#2b3a5a] transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
            >
              Fale Connosco
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .will-change-transform { will-change: transform; }
        .will-change-opacity { will-change: opacity; }
      `}</style>
    </section>
  );
};

export default Hero;
