import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Discography from './components/Discography';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AudioEngine from './components/AudioEngine';
import CustomCursor from './components/CustomCursor';
import Terminal from './components/Terminal';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#05070a] selection:bg-blue-500 selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <AudioEngine />
      
      <main>
        <Hero />
        
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <Manifesto />
        </div>

        {/* Enhanced Terminal Section */}
        <section id="terminal" className="py-32 bg-black border-y border-blue-900/20 relative overflow-hidden reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-1 w-12 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,1)]" />
                  <h2 className="glitch text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none" data-text="B-SYSTEM_INTERFACE">
                    B-SYSTEM_INTERFACE
                  </h2>
                </div>
                <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-lg border-l border-blue-900/40 pl-6 mt-6">
                  Accesso diretto all'archivio neurale dei Bedjyueh. 
                  <span className="text-blue-500 font-bold block mt-2">DECODIFICA I FRAMMENTI DEL VUOTO CHIMICO.</span>
                </p>
              </div>
              <div className="mono text-[11px] text-blue-400 font-bold tracking-[0.2em] bg-blue-900/10 border border-blue-900/30 p-6 backdrop-blur-sm self-stretch md:self-auto flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>CONNECTION: STABLE</span>
                </div>
                <div className="opacity-50 text-[10px]">
                  REF: 00-VOID-2025-V.1.0.5<br />
                  ENCRYPTION: 256-STATIC-BIT
                </div>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-blue-500 opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-blue-500 opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-blue-500 opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-blue-500 opacity-40 group-hover:opacity-100 transition-opacity" />
              
              <Terminal />
              
              <div className="mt-8 flex justify-between items-center opacity-30 group-hover:opacity-60 transition-opacity">
                <div className="mono text-[8px] text-blue-500 tracking-[0.5em] uppercase">Hardware_Rev_B</div>
                <div className="mono text-[8px] text-blue-500 tracking-[0.5em] uppercase">Secure_Terminal_v5</div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
          <Discography />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
          <Gallery />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-400">
          <Newsletter />
        </div>
      </main>

      <Footer />
      
      {/* Background elements */}
      <div className="fixed -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed -top-32 -right-32 w-96 h-96 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </div>
  );
};

export default App;