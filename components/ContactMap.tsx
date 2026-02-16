
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, User, MessageSquare, Send } from 'lucide-react';

const ContactMap: React.FC = () => {
  return (
    <section id="contacto-detalhes" className="py-20 md:py-32 lg:pt-72 lg:pb-48 bg-white relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          
          {/* Coluna: Formulário de Contacto 
              Mobile & Tablet: Aparece primeiro (order-1)
              Desktop (lg+): Aparece depois (lg:order-2)
          */}
          <div className="lg:w-7/12 xl:w-8/12 order-1 lg:order-2">
            <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 xl:p-16 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.1)] border border-slate-200/60 relative z-10">
              <div className="mb-10 text-center lg:text-left">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Contacto Prioritário</span>
                <h3 className="text-3xl md:text-4xl font-black text-[#121a2a] uppercase tracking-tighter mb-4">FALE <span className="text-blue-600">CONNOSCO</span></h3>
                <p className="text-gray-400 text-sm font-medium max-w-lg mx-auto lg:mx-0">Deixe os seus dados e um consultor entrará em contacto para uma análise estratégica gratuita.</p>
              </div>
              
              <form className="space-y-6">
                <div className="group relative">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">Nome ou Empresa</label>
                  <div className="relative">
                    <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Como devemos tratar?"
                      className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl focus:border-blue-600 outline-none transition-all text-sm font-semibold text-[#121a2a] shadow-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">Email</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                      <input 
                        type="email" 
                        placeholder="email@exemplo.pt"
                        className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl focus:border-blue-600 outline-none transition-all text-sm font-semibold text-[#121a2a] shadow-sm"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">Telemóvel</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                      <input 
                        type="tel" 
                        placeholder="+351 9XX XXX XXX"
                        className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl focus:border-blue-600 outline-none transition-all text-sm font-semibold text-[#121a2a] shadow-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="group relative">
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-blue-600 transition-colors">Mensagem</label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-5 top-5 text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                    <textarea 
                      rows={4}
                      placeholder="Como podemos ajudar o seu negócio?"
                      className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl focus:border-blue-600 outline-none transition-all resize-none text-sm font-semibold text-[#121a2a] shadow-sm"
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="group/btn w-full bg-[#121a2a] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-600 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-blue-900/10"
                >
                  ENVIAR MENSAGEM
                  <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </form>

              <div className="mt-10 flex gap-4 justify-center md:justify-start pt-8 border-t border-slate-200/60">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#121a2a] hover:bg-[#121a2a] hover:text-white transition-all border border-slate-100 shadow-sm">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna: Info de Contacto & Mapa
              Mobile & Tablet: Aparece depois (order-2)
              Desktop (lg+): Aparece primeiro (lg:order-1)
          */}
          <div className="lg:w-5/12 xl:w-4/12 flex flex-col justify-center order-2 lg:order-1">
            <div className="mb-10 text-center lg:text-left">
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Localização</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#121a2a] mb-6 uppercase tracking-tighter">Onde Estamos</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
            </div>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-5 p-4 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-[#202c44] text-white rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-blue-900/10 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-0.5">Telemóvel</h4>
                  <p className="text-[#121a2a] font-bold text-base">+351 928 166 443</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 p-4 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-[#202c44] text-white rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-blue-900/10 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-0.5">Email</h4>
                  <p className="text-[#121a2a] font-bold text-sm md:text-base break-all">geral@cs-consulting.pt</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-[#202c44] text-white rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-blue-900/10 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-0.5">Morada</h4>
                  <p className="text-[#121a2a] font-bold text-sm md:text-base">Carnaxide, Portugal</p>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="w-full h-[300px] md:h-[350px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-50 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.62343887258!2d-9.239327623456385!3d38.72149027176251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecc889988888b%3A0x8888888888888888!2sR.%20Am%C3%A9lia%20Rey%20Cola%C3%A7o%2038A%2C%202790-017%20Carnaxide!5e0!3m2!1spt-PT!2spt!4v1709123456789!5m2!1spt-PT!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="transition-all duration-700"
              ></iframe>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
