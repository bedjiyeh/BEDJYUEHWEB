import React from 'react';
import { GALLERY_IMAGES, YOUTUBE_VIDEO_ID } from '../constants';

const Gallery: React.FC = () => {
  const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&controls=1&showinfo=0`;

  return (
    <section id="visuals" className="py-24 bg-[#05070a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- PART 1: VIDEO PLAYER --- */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Signal_Output</h2>
              <p className="mono text-[10px] text-blue-500 mt-2 tracking-[0.4em] uppercase font-bold">Official Transmission / Chemical Void</p>
            </div>
            <div className="h-[px] bg-blue-900/30 flex-grow mx-12 hidden md:block mb-4 opacity-50" />
            <span className="mono text-xs text-slate-800 font-bold hidden md:block tracking-widest">LIVE_VOID_24</span>
          </div>

          <div className="relative aspect-video w-full bg-black border border-white/10 shadow-2xl shadow-blue-900/5 group">
            <iframe 
              className="absolute inset-0 w-full h-full z-10"
              src={embedUrl}
              title="Bedjyueh - Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ border: 0 }}
            ></iframe>
            <div className="absolute -inset-1 bg-blue-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </div>

        {/* --- PART 2: STILLNESS GALLERY --- */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="mono text-[11px] text-slate-400 tracking-[0.6em] uppercase">Fragmented_Stills</h3>
            <div className="h-px flex-grow bg-white/5" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {GALLERY_IMAGES.map((url, index) => (
               <div 
                key={index} 
                className="aspect-square bg-[#0a0d14] overflow-hidden border border-white/10 group relative"
               >
                 <img 
                  src={url} 
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110 
                    transition-all duration-700 ease-out
                    group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110" 
                  alt={`visual detail ${index}`} 
                  loading="lazy"
                  onError={(e) => {
                    // Se l'immagine fallisce, mostra un segnaposto scuro invece di un'icona rotta
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600/05070a/2563eb?text=LOADING_ERROR";
                  }}
                 />
                 
                 <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors pointer-events-none" />
                 <div className="absolute bottom-3 left-3 mono text-[8px] text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest bg-black/60 px-1">
                   IMG_REF_0{index + 1}
                 </div>
                 
                 {/* Scanning line effect on hover */}
                 <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(37,99,235,0.25)_50%)] bg-[size:100%_8px] transition-opacity"></div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;