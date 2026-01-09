import React from 'react';
import { HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.95] brightness-[0.15] scale-105"
        style={{ backgroundImage: `url("${HERO_IMAGE_URL}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070a]/80 to-[#05070a]" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-8 bg-blue-600/50" />
            <p className="mono text-blue-500/80 text-[10px] tracking-[1.2em] uppercase font-bold">
                Identity as echo
            </p>
            <div className="h-px w-8 bg-blue-600/50" />
        </div>
        
        <h1 
          className="glitch text-6xl md:text-[11rem] font-black tracking-[-0.05em] text-white leading-none mb-10"
          data-text="BEDJYUEH"
        >
          BEDJYUEH
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 font-light italic leading-tight max-w-2xl mx-auto mb-16 border-l border-blue-600/30 pl-6 text-left md:text-center">
          "The sound of the collapse you don't talk about. <br className="hidden md:block" /> The noise you keep under your skin."
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a href="#visuals" className="group relative overflow-hidden mono border border-blue-500/40 px-12 py-5 text-[11px] tracking-[0.4em] text-white transition-all duration-500">
            <span className="relative z-10 font-black">WATCH CHEMICAL VOID</span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a href="#music" className="mono text-[10px] tracking-[0.5em] text-slate-500 hover:text-blue-400 transition-all uppercase flex items-center gap-3">
            <span className="w-8 h-px bg-slate-800" />
            LISTEN_STATIC
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="mono text-[8px] text-blue-900/60 space-y-1 tracking-widest uppercase">
            <p>LAT: 45.4642 N</p>
            <p>LNG: 9.1900 E</p>
            <p>REF: 00-VOID-24</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;