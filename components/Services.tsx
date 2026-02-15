
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, FileText, Shield, UserCog, 
  Users, Scale, FileSignature, Briefcase,
  Compass, PieChart, Landmark, Settings,
  Calculator, Target, Globe, Wallet,
  ChevronRight
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'contabilidade',
    label: 'Contabilidade',
    shortLabel: 'Contab.',
    description: 'Soluções personalizadas para fortalecer a sua eficiência financeira e garantir conformidade legal.',
    items: [
      { title: 'Contabilidade Geral e Analítica', desc: 'Gestão completa das contas da sua empresa, adaptada às necessidades do seu negócio.', icon: <BookOpen size={24} /> },
      { title: 'Relatórios Financeiros', desc: 'Balanços e demonstrações de resultados para apoio à gestão estratégica.', icon: <FileText size={24} /> },
      { title: 'Obrigações Legais', desc: 'Cumprimento rigoroso das normas fiscais e contabilísticas em vigor.', icon: <Shield size={24} /> },
      { title: 'Consultoria Dedicada', desc: 'Apoio contínuo para a tomada de decisões financeiras mais eficientes.', icon: <UserCog size={24} /> },
    ]
  },
  {
    id: 'rh',
    label: 'Recursos Humanos',
    shortLabel: 'RH',
    description: 'Gestão eficaz do capital humano, garantindo conformidade legal e o melhor desempenho da sua equipa.',
    items: [
      { title: 'Processamento de Salários', desc: 'Gestão salarial, recibos de vencimento e envio de declarações fiscais.', icon: <Users size={24} /> },
      { title: 'Segurança Social e AT', desc: 'Cumprimento de todas as obrigações legais e entrega do Relatório Único.', icon: <Scale size={24} /> },
      { title: 'Gestão de Contratos', desc: 'Apoio especializado na elaboração de contratos de trabalho e horários.', icon: <FileSignature size={24} /> },
      { title: 'Estratégia de RH', desc: 'Políticas de gestão de pessoas para otimizar a produtividade e o bem-estar.', icon: <Briefcase size={24} /> },
    ]
  },
  {
    id: 'consultoria',
    label: 'Consultoria',
    shortLabel: 'Consul.',
    description: 'Acompanhamento estratégico para melhorar a eficiência operacional e o crescimento do seu negócio.',
    items: [
      { title: 'Planeamento Estratégico', desc: 'Desenvolvimento de planos de negócio focados no crescimento sustentável.', icon: <Compass size={24} /> },
      { title: 'Avaliações Económicas', desc: 'Estudos de viabilidade e due diligence para decisões informadas.', icon: <PieChart size={24} /> },
      { title: 'Fusões e Aquisições', desc: 'Acompanhamento completo em processos de reestruturação empresarial.', icon: <Landmark size={24} /> },
      { title: 'Otimização de Processos', desc: 'Melhoria contínua dos fluxos financeiros para aumentar a rentabilidade.', icon: <Settings size={24} /> },
    ]
  },
  {
    id: 'irs',
    label: 'IRS',
    shortLabel: 'IRS',
    description: 'Gestão especializada para minimizar a carga fiscal e otimizar a sua situação tributária individual.',
    items: [
      { title: 'Declaração de IRS', desc: 'Elaboração e submissão com foco na otimização de impostos a pagar.', icon: <Calculator size={24} /> },
      { title: 'Planeamento Fiscal', desc: 'Consultoria personalizada para maximização de benefícios fiscais.', icon: <Target size={24} /> },
      { title: 'Residentes Não Habituais', desc: 'Apoio na candidatura e gestão do regime de RNH em Portugal.', icon: <Globe size={24} /> },
      { title: 'Impostos sobre Rendimento', desc: 'Análise detalhada da tributação do rendimento individual.', icon: <Wallet size={24} /> },
    ]
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Re-trigger reveal when tab changes
  useEffect(() => {
    if ((window as any).initReveal) {
      (window as any).initReveal();
    }
  }, [activeTab]);

  return (
    <section id="servicos" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-12 md:mb-16 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Nossas Soluções Especializadas</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#121a2a] mb-6 tracking-tighter uppercase leading-[0.9]">
            Serviços <br /> Profissionais
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Explora as nossas áreas de atuação e descobre como podemos impulsionar o teu sucesso financeiro e operacional.
          </p>
          <div className="w-20 h-1.5 bg-[#202c44] rounded-full mt-8 animate-pulse"></div>
        </div>

        {/* Mobile Navigation Grid */}
        <div className="grid grid-cols-2 gap-3 mb-10 lg:hidden reveal reveal-delay-1">
          {serviceCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`py-4 px-2 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all duration-500 border shadow-sm ${
                activeTab === idx 
                ? 'bg-[#202c44] text-white border-[#202c44] shadow-lg scale-[1.05]' 
                : 'bg-white text-gray-500 border-gray-100 hover:border-blue-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Desktop Navigation Tabs */}
        <div className="hidden lg:block mb-12 reveal reveal-delay-1">
          <div className="flex border-b border-gray-200">
            {serviceCategories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`px-10 py-8 text-xs font-black uppercase tracking-[0.2em] transition-all relative group ${
                  activeTab === idx 
                  ? 'text-[#202c44] bg-white border-x border-t border-gray-200 rounded-t-3xl shadow-[0_-10px_20px_rgba(0,0,0,0.02)] scale-[1.02] z-10' 
                  : 'text-gray-400 hover:text-[#202c44] hover:bg-gray-100/50'
                }`}
              >
                {cat.label}
                <div className={`absolute -bottom-[2px] left-0 w-full h-[3px] bg-blue-600 transition-transform duration-500 origin-left ${activeTab === idx ? 'scale-x-100' : 'scale-x-0'}`}></div>
                {activeTab === idx && (
                  <div className="absolute -bottom-[2px] left-0 w-full h-[4px] bg-white z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div key={activeTab} className="fade-in-content">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 mb-8 md:mb-12 reveal">
            <div className="max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-black text-[#202c44] mb-6 uppercase tracking-tighter">
                {serviceCategories[activeTab].label}
              </h3>
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                {serviceCategories[activeTab].description}
              </p>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {serviceCategories[activeTab].items.map((item, idx) => (
              <div 
                key={idx}
                className={`bg-white p-8 md:p-10 rounded-3xl md:rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:border-blue-200 transition-all duration-700 group flex flex-col h-full reveal reveal-delay-${(idx % 2) + 1}`}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 text-[#202c44] rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#202c44] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[15deg] group-hover:scale-110 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#121a2a] mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                
                <a 
                  href="#contacto-detalhes"
                  className="pt-6 border-t border-gray-50 flex items-center justify-between group/link"
                >
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#202c44]/40 group-hover/link:text-blue-600 transition-colors">
                    Solicitar Proposta
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all duration-500 transform group-hover/link:translate-x-1">
                    <ChevronRight size={18} />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .fade-in-content {
          animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;
