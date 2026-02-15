
import React, { useRef, useState, useEffect } from 'react';
import { Mail, Linkedin, ArrowRight, ArrowLeft } from 'lucide-react';

const teamMembers = [
  { id: 1, name: "Carlos Silva", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", email: "carlos.silva@cs-consulting.pt" },
  { id: 2, name: "Mariana Santos", role: "Diretora Financeira", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", email: "mariana.santos@cs-consulting.pt" },
  { id: 3, name: "João Ferreira", role: "Consultor Fiscal Senior", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", email: "joao.ferreira@cs-consulting.pt" },
  { id: 4, name: "Ana Oliveira", role: "Gestora de RH", image: "https://images.unsplash.com/photo-1573496359-136d475583dc?q=80&w=800&auto=format&fit=crop", email: "ana.oliveira@cs-consulting.pt" },
  { id: 5, name: "Pedro Martins", role: "Contabilista Certificado", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", email: "pedro.martins@cs-consulting.pt" },
  { id: 6, name: "Sofia Costa", role: "Auditoria Financeira", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop", email: "sofia.costa@cs-consulting.pt" },
  { id: 7, name: "Miguel Rodrigues", role: "Consultoria Estratégica", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop", email: "miguel.rodrigues@cs-consulting.pt" },
  { id: 8, name: "Beatriz Almeida", role: "Gestão de Clientes", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", email: "beatriz.almeida@cs-consulting.pt" },
  { id: 9, name: "André Costa", role: "Inovação Digital", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop", email: "andre.costa@cs-consulting.pt" },
  { id: 10, name: "Cláudia Sousa", role: "Legal & Compliance", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop", email: "claudia.sousa@cs-consulting.pt" },
  { id: 11, name: "Tiago Mendes", role: "Análise de Risco", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", email: "tiago.mendes@cs-consulting.pt" },
  { id: 12, name: "Inês Pereira", role: "Comunicação Corporativa", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop", email: "ines.pereira@cs-consulting.pt" }
];

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const amount = direction === 'left' ? -containerWidth : containerWidth;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="equipa" className="bg-[#0c121e] py-24 lg:py-32 relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 reveal">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Talento & Experiência</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
              Equipa
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Conheça os especialistas dedicados a transformar o potencial da sua empresa em resultados reais.
            </p>
          </div>
          
          <div className="flex items-center gap-6 self-center md:self-auto">
            {/* Progress Bar (Desktop) */}
            <div className="hidden lg:block w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 group active:scale-90 focus:outline-none"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 group active:scale-90 focus:outline-none"
              >
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport - Full Width Mobile (One post at a time) */}
        <div 
          ref={scrollRef}
          className="flex gap-0 sm:gap-6 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 reveal reveal-delay-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="flex-none w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-5rem)/3)] snap-center sm:snap-start group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#161f2e] mb-6 md:mb-8 shadow-2xl mx-auto max-w-[90vw] sm:max-w-none transition-all duration-700 group-hover:translate-y-[-10px] group-hover:shadow-blue-500/10">
                {/* Photo with B&W effect only on Desktop (md+) */}
                <div className="absolute inset-0 grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent opacity-80 lg:opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Hover Content / Social (Visible on Mobile too for easy tap) */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 md:translate-x-12 opacity-0 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Info Container */}
              <div className="px-2 text-center reveal">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 transition-colors group-hover:text-blue-400">
                  {member.name}
                </h3>
                <p className="text-gray-500 uppercase tracking-widest text-[9px] md:text-[10px] font-bold mb-4 md:mb-6">
                  {member.role}
                </p>
                
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-3 px-6 md:px-8 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95 group/btn hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  Contactar
                  <Mail size={14} className="group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          ))}
          {/* Extra spacer for padding-right on mobile scroll */}
          <div className="flex-none w-1 h-px pr-2 md:pr-0"></div>
        </div>

        {/* Mobile Indicator Bar */}
        <div className="lg:hidden w-full h-px bg-white/5 mt-4 relative reveal">
          <div 
            className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Team;
