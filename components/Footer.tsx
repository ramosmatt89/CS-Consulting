
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://www.dropbox.com/scl/fi/2n6fkrxgj2t46hfxaq8ta/cs-horizontal-white.png?rlkey=z1gpl3r3hzwzkcnkgicvln8g3&st=vicgxtfv&raw=1";

  return (
    <footer className="bg-gray-50 pt-20 pb-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
              <img 
                src={logoUrl} 
                alt="CS Consulting" 
                className="h-24 md:h-20 w-auto object-contain brightness-0 opacity-80" 
                loading="lazy"
                decoding="async"
              />
              <p className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase mt-2">Premium Accounting</p>
            </div>
            <p className="text-gray-500 mb-8 max-w-xs text-sm leading-relaxed">
              Especialistas em contabilidade para empresas e trabalhadores independentes em Portugal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full text-[#202c44] shadow-sm flex items-center justify-center hover:bg-[#202c44] hover:text-white transition-all border border-gray-100"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white rounded-full text-[#202c44] shadow-sm flex items-center justify-center hover:bg-[#202c44] hover:text-white transition-all border border-gray-100"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 bg-white rounded-full text-[#202c44] shadow-sm flex items-center justify-center hover:bg-[#202c44] hover:text-white transition-all border border-gray-100"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-[#202c44] mb-6 uppercase tracking-wider text-xs">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-600 text-sm hover:text-[#202c44] transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-gray-600 text-sm hover:text-[#202c44] transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-600 text-sm hover:text-[#202c44] transition-colors">Sobre Nós</a></li>
              <li><a href="#contacto-detalhes" className="text-gray-600 text-sm hover:text-[#202c44] transition-colors">Contactos</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-[#202c44] mb-6 uppercase tracking-wider text-xs">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <Phone className="w-4 h-4 text-[#202c44] mt-0.5 flex-shrink-0" />
                <span>+351 928 166 443</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-[#202c44] mt-0.5 flex-shrink-0" />
                <span className="break-all">geral@cs-consulting.pt</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-[#202c44] mt-0.5 flex-shrink-0" />
                <span>Carnaxide, Portugal</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-bold text-[#202c44] mb-6 uppercase tracking-wider text-xs">Horário</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <Clock className="w-4 h-4 text-[#202c44] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Segunda a Sexta</p>
                  <p className="text-xs text-gray-400">09:00 - 18:00</p>
                </div>
              </li>
              <li className="bg-[#202c44] text-white p-5 rounded-2xl text-[11px] font-bold uppercase tracking-widest mt-6 text-center shadow-lg shadow-blue-900/10">
                Atendimento Presencial e Digital
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
