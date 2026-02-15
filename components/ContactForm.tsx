
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telemovel: '',
    servico: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pedido enviado com sucesso! Entraremos em contacto em breve.');
    setFormData({ nome: '', email: '', telemovel: '', servico: '', mensagem: '' });
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 transform transition-all duration-500 hover:scale-[1.01]">
      <h3 className="text-2xl font-black text-[#202c44] mb-2 uppercase tracking-tighter">FALE CONNOSCO</h3>
      <p className="text-gray-500 mb-8 text-sm">Preencha o formulário e receba uma análise personalizada.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Nome Completo</label>
          <input
            required
            type="text"
            placeholder="Ex: João Silva"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#202c44] focus:ring-2 focus:ring-[#202c44]/10 transition-all outline-none"
            value={formData.nome}
            onChange={e => setFormData({...formData, nome: e.target.value})}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">E-mail</label>
            <input
              required
              type="email"
              placeholder="email@empresa.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#202c44] focus:ring-2 focus:ring-[#202c44]/10 transition-all outline-none"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Telemóvel</label>
            <input
              required
              type="tel"
              placeholder="+351 900 000 000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#202c44] focus:ring-2 focus:ring-[#202c44]/10 transition-all outline-none"
              value={formData.telemovel}
              onChange={e => setFormData({...formData, telemovel: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Tipo de Serviço</label>
          <select
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#202c44] focus:ring-2 focus:ring-[#202c44]/10 transition-all outline-none appearance-none bg-white"
            value={formData.servico}
            onChange={e => setFormData({...formData, servico: e.target.value})}
          >
            <option value="">Selecione um serviço...</option>
            <option value="contabilidade-empresas">Contabilidade para Empresas</option>
            <option value="abertura-empresas">Abertura de Empresa / Atividade</option>
            <option value="consultoria-fiscal">Consultoria Fiscal</option>
            <option value="irs">IRS e Obrigações Fiscais</option>
            <option value="apoio-independentes">Apoio a Trabalhadores Independentes</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Mensagem (Opcional)</label>
          <textarea
            rows={3}
            placeholder="Como podemos ajudar o seu negócio?"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#202c44] focus:ring-2 focus:ring-[#202c44]/10 transition-all outline-none resize-none"
            value={formData.mensagem}
            onChange={e => setFormData({...formData, mensagem: e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#202c44] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-opacity-95 transform transition-all active:scale-95 uppercase tracking-widest text-xs"
        >
          ENVIAR MENSAGEM
        </button>
      </form>
      
      <p className="mt-4 text-[10px] text-gray-400 text-center">
        Ao enviar, concorda com a nossa política de proteção de dados.
      </p>
    </div>
  );
};

export default ContactForm;
