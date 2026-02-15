
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#202c44] selection:text-white">
      <Navbar currentPath={currentPath} />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Benefits />
        <Testimonials />
        <CTASection />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
};

export default App;
