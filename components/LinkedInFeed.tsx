
import React, { useEffect } from 'react';

const LinkedInFeed: React.FC = () => {
  useEffect(() => {
    // Load Elfsight script if not already present
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.currentScript ? document.currentScript.parentNode?.insertBefore(script, document.currentScript) : document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center reveal">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">LinkedIn</span>
            <span className="w-8 h-px bg-blue-600"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#121a2a] uppercase tracking-tighter">
            O nosso <span className="text-blue-600">Feed</span>
          </h2>
        </div>
        
        <div className="reveal reveal-delay-1 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-1 shadow-[0_50px_100px_-20px_rgba(37,99,235,0.18)] border border-blue-600/20 overflow-hidden">
            <div 
              className="elfsight-app-07faa308-3ae6-43cc-8fbd-64d467d06867" 
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeed;
