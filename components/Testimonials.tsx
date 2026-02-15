
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: "Ricardo Mendes",
    type: "Empresa de Tecnologia",
    comment: "A CS Consulting transformou a nossa gestão financeira. Profissionais competentes e sempre disponíveis para tirar dúvidas.",
    rating: 5
  },
  {
    id: '2',
    name: "Ana Patrícia",
    type: "Trabalhadora Independente",
    comment: "Abrir atividade foi muito simples com a ajuda deles. Recomendo vivamente a todos os freelancers em Portugal.",
    rating: 5
  },
  {
    id: '3',
    name: "Carlos Fernandes",
    type: "Restauração",
    comment: "Rigor absoluto com prazos e uma consultoria fiscal que realmente nos faz poupar dinheiro todos os meses.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 400);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 400);
  };

  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-[#202c44] mb-4">O que dizem os nossos clientes</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Parcerias de longo prazo baseadas na transparência e resultados.</p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal reveal-delay-2">
          {/* Decorative Quote Mark */}
          <div className="absolute -top-10 -left-10 opacity-5 text-[#202c44] hidden md:block">
            <Quote size={120} />
          </div>

          <div className={`flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.02)] relative z-10 transition-all duration-500 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="flex-1">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                   <Star key={i} className={`w-5 h-5 fill-current transition-all duration-700 ${!animating ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <p className="text-xl md:text-2xl italic text-[#202c44] font-medium leading-relaxed mb-8">
                "{testimonials[active].comment}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[active].name}</h4>
                  <p className="text-gray-500 font-medium">{testimonials[active].type}</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex flex-col gap-4">
              <button 
                onClick={prev}
                className="p-4 rounded-full bg-white shadow-md hover:bg-[#202c44] hover:text-white transition-all border border-gray-100 active:scale-90"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={next}
                className="p-4 rounded-full bg-white shadow-md hover:bg-[#202c44] hover:text-white transition-all border border-gray-100 active:scale-90"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          
          {/* Mobile Buttons */}
          <div className="flex justify-center gap-6 mt-8 md:hidden reveal">
              <button onClick={prev} className="p-4 rounded-full bg-[#202c44] text-white shadow-lg active:scale-90"><ChevronLeft /></button>
              <button onClick={next} className="p-4 rounded-full bg-[#202c44] text-white shadow-lg active:scale-90"><ChevronRight /></button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${active === i ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
