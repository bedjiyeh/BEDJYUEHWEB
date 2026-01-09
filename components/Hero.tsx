import React from 'react';
import { HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 md:py-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.95] brightness-[0.15] scale-105"
        style={{ backgroundImage: `url("${HERO_IMAGE_URL}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070a]/80 to-[#05070a]" />
      
      <div className="relative z-10 flex flex-col items-center px-6 max-w-7xl w-full text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-blue-600/50" />
              <p className="mono text-blue-500/80 text-[10px] tracking-[1.5em] uppercase font-bold">
                  Identity as echo
              </p>
              <div className="h-px w-12 bg-blue-600/50" />
          </div>
          
          <h1 
            className="glitch text-6xl md:text-[10rem] font-black tracking-[-0.05em] text-white leading-none mb-12"
            data-text="BEDJYUEH"
          >
            BEDJYUEH
          </h1>
          
          <div className="relative inline-block mb-16">
            <p className="text-xl md:text-2xl text-slate-300 font-light italic leading-tight max-w-2xl">
              "The sound of the collapse you don't talk about. The noise you keep under your skin."
            </p>
            <div className="absolute -left-8 top-0 h-full w-[1px] bg-blue-500/30 hidden md:block" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <a href="#music" className="group relative overflow-hidden mono border border-blue-500 px-12 py-5 text-[11px] tracking-[0.5em] text-white transition-all duration-500 w-full sm:w-auto">
              <span className="relative z-10 font-black uppercase">LISTEN_STATIC</span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a href="#terminal" className="mono text-[10px] tracking-[0.6em] text-slate-500 hover:text-blue-400 transition-all uppercase">
              DECODE_SIGNAL
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden xl:block">
        <div className="mono text-[8px] text-blue-900/60 space-y-1 tracking-widest uppercase">
            <p>LAT: 45.4642 N</p>
            <p>LNG: 9.1900 E</p>
            <p>REF: 00-VOID-25</p>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden xl:block">
        <div className="mono text-[8px] text-blue-900/60 tracking-widest uppercase animate-pulse">
            SYSTEM_ACTIVE // B-LINK
        </div>
      </div>
    </section>
  );
};

export default Hero;