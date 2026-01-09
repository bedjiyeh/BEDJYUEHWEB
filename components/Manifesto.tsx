
import React from 'react';
import { MANIFESTO_DATA } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-[#05070a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              ARTIST <br />
              <span className="text-blue-500">IDENTITY</span>
            </h2>
            <div className="h-0.5 w-12 bg-blue-500 mb-8" />
            <p className="mono text-xs text-slate-500 leading-relaxed uppercase tracking-widest">
              Visual Keywords:<br />
              Desaturated blues, industrial greys, faded textures, geometric type, cold sans-serif, monospaced grids.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {MANIFESTO_DATA.map((item) => (
              <div key={item.category} className="border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
                <h3 className="mono text-blue-500 text-sm tracking-widest mb-6 font-bold border-b border-blue-900/30 pb-2">
                  // {item.category}
                </h3>
                <ul className="space-y-4">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-slate-400 leading-relaxed font-light">
                      — {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Quote Block */}
        <div className="mt-24 border-l-2 border-blue-500 pl-8 max-w-2xl py-8">
          <p className="text-2xl font-light text-slate-300 italic mb-4">
            "Soundtrack for the collapse you don't talk about. The noise you keep under your skin."
          </p>
          <span className="mono text-xs text-blue-500 tracking-widest uppercase">
            — Bedjyueh / 2024
          </span>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
