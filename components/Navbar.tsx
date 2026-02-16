
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Equipa', href: '#equipa' },
    { name: 'Contacto', href: '#contacto-detalhes' },
  ];

  const logoUrl = "https://www.dropbox.com/scl/fi/2n6fkrxgj2t46hfxaq8ta/cs-horizontal-white.png?rlkey=z1gpl3r3hzwzkcnkgicvln8g3&st=vicgxtfv&raw=1";

  return (
    <nav 
      className={`top-0 left-0 right-0 z-50 transition-all duration-500 w-full
        ${isScrolled 
          ? 'fixed bg-[#121a2a]/95 backdrop-blur-md py-4 md:absolute md:bg-transparent md:pt-12 lg:pt-16' 
          : 'fixed bg-transparent pt-8 md:absolute md:pt-12 lg:pt-16 pb-8'
        }
      `}
    >
      <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
        <a href="#home" className="flex items-center group h-20 md:h-24 lg:h-32">
          <img 
            src={logoUrl} 
            alt="CS Consulting & Accounting" 
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            // @ts-ignore
            fetchpriority="high"
            decoding="async"
          />
        </a>

        <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:text-blue-400 ${
                currentPath === link.href ? 'text-blue-400' : 'text-white/80'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121a2a] flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in duration-300">
          <button 
            className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          <img 
            src={logoUrl} 
            alt="CS Consulting" 
            className="h-28 w-auto mb-8"
            decoding="async"
          />

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-black text-white uppercase tracking-tighter hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
