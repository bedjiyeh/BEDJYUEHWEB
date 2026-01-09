import React from 'react';
import { RITUALS } from '../constants';

const Rituals: React.FC = () => {
  return (
    <section id="rituals" className="py-24 bg-black border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">Live_Rituals</h2>
          <span className="mono text-[9px] text-blue-500 tracking-[0.5em] mt-4 md:mt-0 font-bold">TRANSMISSION_LOG_v25</span>
        </div>

        <div className="space-y-px bg-white/5 border border-white/5">
          {RITUALS.map((ritual, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-[#05070a] hover:bg-blue-950/10 transition-colors group relative overflow-hidden"
            >
              <div className="flex flex-col">
                <span className="mono text-xs text-blue-500 font-bold tracking-widest">{ritual.date}</span>
                <span className="text-xl font-bold text-white tracking-tight uppercase group-hover:text-blue-400 transition-colors">{ritual.location}</span>
              </div>
              
              <div className="flex flex-col justify-center">
                <span className="mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">Venue</span>
                <span className="text-slate-300 font-light">{ritual.venue}</span>
              </div>

              <div className="flex flex-col justify-center hidden md:flex">
                <span className="mono text-[10px] text-slate-700 uppercase tracking-widest mb-1">Coordinates</span>
                <span className="mono text-[9px] text-slate-500">{ritual.coords}</span>
              </div>

              <div className="flex items-center justify-end">
                <button 
                  disabled={ritual.status === 'SOLD_OUT'}
                  className={`mono text-[10px] px-6 py-3 tracking-[0.3em] font-black transition-all ${
                    ritual.status === 'SOLD_OUT' 
                    ? 'border border-slate-800 text-slate-700 cursor-not-allowed' 
                    : 'border border-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {ritual.status === 'SOLD_OUT' ? 'SOLD_OUT' : 'GET_ACCESS'}
                </button>
              </div>
              
              {/* Animated scanline on hover */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rituals;