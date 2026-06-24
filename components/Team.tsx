
import React, { useRef, useState, useEffect } from 'react';
import { Mail, Linkedin, ArrowRight, ArrowLeft } from 'lucide-react';

const teamMembers = [
  { id: 1, name: "Rúben Cruz", role: "CO-CEO", image: "https://i.ibb.co/Y4jCXTrm/20260320-123715.jpg", email: "ruben.cruz@cs-consulting.pt" },
  { id: 2, name: "Tiago Domingues", role: "CO-CEO", image: "https://i.ibb.co/3mRgFQQw/Tiago-melhorada.png", email: "tiago.domingues@cs-consulting.pt" },
  { id: 3, name: "Raquel Branquinho", role: "Manager Accountant", image: "/src/assets/images/raquel_branquinho_portrait_1782285878565.jpg", email: "raquel.branquinho@cs-consulting.pt" },
  { id: 4, name: "Ana Silva", role: "Manager Accountant", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format,compress&q=75&w=600&fit=crop", email: "ana.silva@cs-consulting.pt" },
  { id: 5, name: "Carla Silva", role: "Senior Accountant", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format,compress&q=75&w=600&fit=crop", email: "carla.silva@cs-consulting.pt" },
  { id: 6, name: "Rosa Ferreira", role: "Accountant", image: "https://i.ibb.co/BRvN8KF/Rosa-melhorada.png", email: "rosa.ferreira@cs-consulting.pt" },
  { id: 7, name: "Inês Martins", role: "Accountant", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&q=75&w=600&fit=crop", email: "ines.martins@cs-consulting.pt" },
  { id: 8, name: "Rodrigo Freire", role: "Outsourcing", image: "https://i.ibb.co/WNX3yjhs/Rodrigo-melhorada.png", email: "rodrigo.freire@cs-consulting.pt" },
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
    <section id="equipa" className="bg-[#0c121e] py-16 md:py-24 relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-blue-500"></span>
              <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs">Talento & Experiência</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
              Equipa
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Mais do que experiência, procuramos as pessoas certas para entregar um serviço consistente, rigoroso e que acrescenta valor.
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
          className="flex gap-0 sm:gap-6 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="flex-none w-full md:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-7.5rem)/4)] snap-center md:snap-start group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#161f2e] mb-6 md:mb-8 shadow-2xl mx-auto max-w-[90vw] sm:max-w-none transition-all duration-700 group-hover:translate-y-[-10px] group-hover:shadow-blue-500/10">
                {/* Photo with B&W effect only on Desktop (md+) */}
                <div className="absolute inset-0 grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width="600"
                height="750"
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
              <div className="px-2 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 transition-colors group-hover:text-blue-400">
                  {member.name}
                </h3>
                <p className="text-gray-500 uppercase tracking-widest text-[9px] md:text-[10px] font-bold mb-4 md:mb-6">
                  {member.role}
                </p>
                
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-3 px-6 md:px-8 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95 group/btn hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
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
        <div className="lg:hidden w-full h-px bg-white/5 mt-4 relative">
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
