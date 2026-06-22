
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
    <section id="feed-linkedin" className="bg-white py-12 md:py-20 overflow-hidden">
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">LinkedIn</span>
            <span className="w-8 h-px bg-blue-600"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#121a2a] uppercase tracking-tighter">
            O nosso <span className="text-blue-600">Feed</span>
          </h2>
        </div>
        
        <div className="w-full">
          <div className="bg-white rounded-2xl pt-8 px-5 pb-2 md:pt-16 md:px-12 shadow-[0_50px_100px_-20px_rgba(37,99,235,0.18)] border border-blue-600/20 overflow-hidden">
            <div 
              className="elfsight-app-07faa308-3ae6-43cc-8fbd-64d467d06867" 
              data-elfsight-app-lazy
              data-elfsight-app-columns="4"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeed;
