
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
    description: 'Sabemos que a contabilidade pode parecer complicada — por isso simplificamos tudo, para que possa focar-se em fazer crescer o seu negócio.',
    items: [
      { title: 'Contabilidade Geral e Analítica', desc: 'Registo contabilístico completo, com organização por centros de custo/analíticos para que saiba exatamente onde está a gastar e a ganhar.', icon: <BookOpen size={24} /> },
      { title: 'Demonstrações Financeiras e Reporte', desc: 'Balanços, demonstrações de resultados e análises financeiras claras para apoiar as suas decisões de gestão.', icon: <FileText size={24} /> },
      { title: 'Obrigações Fiscais e Legais', desc: 'Cumprimento integral de prazos e exigências fiscais, sem sobressaltos.', icon: <Shield size={24} /> },
      { title: 'Contabilidade Digital', desc: 'Registos automáticos a partir de documentos digitais, arquivo organizado sem papel e de acesso em tempo real.', icon: <Compass size={24} /> },
    ]
  },
  {
    id: 'rh',
    label: 'Recursos Humanos',
    shortLabel: 'RH',
    description: 'O processamento salarial é a base de uma gestão de RH sem falhas — e é nisso que somos especialistas.',
    items: [
      { title: 'Processamento de Salários', desc: 'Gestão do processamento salarial, incluindo o preenchimento de recibos de vencimento e envio das declarações fiscais.', icon: <Users size={24} /> },
      { title: 'Cumprimento das Obrigações Legais', desc: 'Acompanhamento de todas as obrigações com a Segurança Social e a AT, incluindo a entrega do Relatório Único.', icon: <Scale size={24} /> },
      { title: 'Consultoria em Gestão de Contratos', desc: 'Aconselhamento especializado sobre as condições contratuais mais adequadas a cada atividade, em articulação com o nosso parceiro jurídico.', icon: <FileSignature size={24} /> },
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
      { title: 'Consultoria Económico-Financeira', desc: 'Análises detalhadas para sustentar decisões de investimento e expansão.', icon: <PieChart size={24} /> },
      { title: 'Fusões e Aquisições', desc: 'Acompanhamento completo em processos de reestruturação empresarial, em parceria com especialistas dedicados a cada etapa do processo.', icon: <Landmark size={24} /> },
      { title: 'Consultoria Fiscal', desc: 'Apoio à otimização fiscal da sua empresa, identificando oportunidades legais para reduzir a carga tributária.', icon: <Settings size={24} /> },
    ]
  },
  {
    id: 'irs',
    label: 'IRS',
    shortLabel: 'IRS',
    description: 'Gestão especializada para minimizar a carga fiscal e otimizar a sua situação tributária individual.',
    items: [
      { title: 'Declaração de IRS', desc: 'Elaboração e submissão da declaração de IRS, abrangendo as diversas categorias de rendimentos.', icon: <Calculator size={24} /> },
      { title: 'Planeamento Fiscal', desc: 'Consultoria personalizada para maximização de benefícios fiscais e otimização da carga fiscal.', icon: <Target size={24} /> },
      { title: 'Residentes não Habituais', desc: 'Apoio na candidatura e gestão do regime de RNH em Portugal.', icon: <Globe size={24} /> },
      { title: 'Acompanhamento Pós-Entrega', desc: 'Suporte em caso de notificações ou pedidos de esclarecimento da AT.', icon: <Wallet size={24} /> },
    ]
  },
  {
    id: 'escritorio-virtual',
    label: 'Escritório Virtual',
    shortLabel: 'Virtual',
    description: 'Tenha uma presença empresarial em Lisboa sem os custos de um escritório físico.',
    items: [
      { title: 'Sede Fiscal', desc: 'Domiciliação da sua empresa num endereço profissional e de confiança.', icon: <Compass size={24} /> },
      { title: 'Receção de Correspondência', desc: 'Gestão e reencaminhamento de toda a correspondência recebida.', icon: <FileText size={24} /> },
      { title: 'Apoio Administrativo', desc: 'Acompanhamento na gestão de prazos e formalidades junto de entidades oficiais.', icon: <Settings size={24} /> },
      { title: 'Espaços de Reunião', desc: 'Acesso a salas equipadas sempre que precisar de receber clientes ou parceiros.', icon: <Users size={24} /> },
    ]
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">As nossas soluções</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#121a2a] mb-6 tracking-tighter uppercase leading-[0.9]">
            Serviços <br /> Especializados
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Explora as nossas áreas de atuação e descobre como podemos impulsionar o teu sucesso financeiro e operacional.
          </p>
          <div className="w-20 h-1.5 bg-[#202c44] rounded-full mt-8 animate-pulse"></div>
        </div>

        {/* Mobile Navigation Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10 lg:hidden">
          {serviceCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`py-5 px-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-500 border ${
                activeTab === idx 
                ? 'bg-[#202c44] text-white border-[#202c44] shadow-[0_20px_40px_-5px_rgba(32,44,68,0.3)] scale-[1.04] z-10' 
                : 'bg-white text-gray-500 border-blue-600/10 shadow-[0_15px_35px_-10px_rgba(37,99,235,0.1)] hover:border-blue-600/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Desktop Navigation Tabs */}
        <div className="hidden lg:flex flex-wrap gap-5 mb-12">
          {serviceCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 border ${
                activeTab === idx 
                ? 'bg-[#202c44] text-white border-[#202c44] shadow-[0_30px_60px_-10px_rgba(32,44,68,0.35)] scale-[1.06] z-10' 
                : 'bg-white text-gray-500 border-blue-600/10 shadow-[0_20px_45px_-15px_rgba(37,99,235,0.12)] hover:border-blue-600/30 hover:bg-gray-50 hover:-translate-y-1'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div key={activeTab} className="fade-in-content">
          <div className="bg-white p-8 md:p-12 md:py-16 rounded-2xl shadow-[0_50px_100px_-20px_rgba(37,99,235,0.18)] border border-blue-600/20 mb-8 md:mb-12">
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
                className={`bg-[#202c44] p-8 md:p-10 rounded-2xl shadow-xl border border-white/5 hover:shadow-[0_40px_100px_rgba(32,44,68,0.2)] hover:border-blue-500/30 transition-all duration-700 group flex flex-col h-full`}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 text-blue-400 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-[15deg] group-hover:scale-110 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 flex-grow font-light">
                  {item.desc}
                </p>
                
                <a 
                  href="#contacto-detalhes"
                  className="pt-6 border-t border-white/5 flex items-center justify-between group/link"
                >
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/40 group-hover/link:text-blue-400 transition-colors">
                    Solicitar Proposta
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover/link:bg-blue-600 group-hover/link:text-white transition-all duration-500 transform group-hover/link:translate-x-1">
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
