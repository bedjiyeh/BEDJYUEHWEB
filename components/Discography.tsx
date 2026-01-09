
import React from 'react';
import { RELEASES } from '../constants';

const Discography: React.FC = () => {
  return (
    <section id="music" className="py-24 bg-[#0a0d14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-[0.4em] text-white mb-2 uppercase">Discography</h2>
          <div className="h-px w-16 bg-blue-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {RELEASES.map((release) => (
            <div key={release.title} className="group relative">
              <div className="aspect-square w-full overflow-hidden bg-black border border-white/10 relative">
                <img 
                  src={release.coverUrl} 
                  alt={release.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                   <a 
                    href={release.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mono border border-white px-8 py-3 text-xs tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all"
                   >
                     STREAM NOW
                   </a>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tighter uppercase group-hover:text-blue-400 transition-colors">{release.title}</h3>
                  <p className="mono text-[10px] text-blue-500 mt-1 uppercase tracking-[0.3em] font-bold">{release.type}</p>
                </div>
                <span className="mono text-xs text-slate-500 mt-2">{release.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
