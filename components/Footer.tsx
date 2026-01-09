import React from 'react';
import { CONTACT_EMAIL } from '../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    { label: 'INSTAGRAM', href: 'https://www.instagram.com/bedjiyeh/' },
    { label: 'SPOTIFY', href: 'https://open.spotify.com/intl-it/album/7novTY7aSCMCE149bBDaV8?si=DczS9r8ASViwM8F9dzy4qA' },
    { label: 'YOUTUBE', href: 'https://www.youtube.com/playlist?list=OLAK5uy_lbRD9F7PPLPnBFl1Nkpml9HP25GmsK09g' },
  ];

  return (
    <footer id="contact" className="py-32 border-t border-white/5 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-white tracking-[-0.05em]">BEDJYUEH</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-light">
              This is not music. This is withdrawal, in stereo. Explore the collapse. Identity is an echo.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="mono text-[10px] text-blue-500 tracking-[0.4em] font-bold uppercase">Connect</h4>
            <div className="flex flex-col space-y-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target={link.href !== '#' ? "_blank" : undefined}
                  rel={link.href !== '#' ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-white transition-all tracking-[0.3em] text-[11px] font-bold border-l border-white/0 hover:border-blue-500 hover:pl-4"
                >
                  // {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="mono text-[10px] text-blue-500 tracking-[0.4em] font-bold uppercase">Contact</h4>
            <p className="text-slate-500 text-sm italic font-light">For bookings and inquiries:</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-blue-400 transition-all text-2xl font-light border-b border-white/10 pb-2 inline-block">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="mono text-[10px] text-slate-700 uppercase tracking-[0.5em]">
            © 2024 BEDJYUEH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 text-[10px] mono text-slate-800 font-bold">
             <span className="tracking-widest">45.4642 N / 9.1900 E</span>
             <span className="tracking-widest opacity-50 underline">TERMS OF STATIC</span>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-blue-900/0 via-blue-900/20 to-transparent" />
    </footer>
  );
};

export default Footer;
