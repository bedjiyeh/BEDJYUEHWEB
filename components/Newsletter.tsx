import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this to your backend/service
    }
  };

  return (
    <section className="py-32 bg-[#05070a] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
            Stay in the <span className="text-blue-600">Static</span>
          </h2>
          <p className="mono text-[10px] text-slate-500 tracking-[0.4em] uppercase">
            Subscribe for whispers of new fragments and rituals.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="YOUR_EMAIL@STATIC.COM"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-black/50 border border-white/10 px-6 py-4 mono text-xs text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500 transition-colors uppercase tracking-widest"
              />
              <button
                type="submit"
                className="mono bg-white text-black px-8 py-4 text-[10px] font-black tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all duration-500"
              >
                JOIN_VOID
              </button>
            </div>
            <p className="mt-6 mono text-[9px] text-slate-800 text-center tracking-widest">
              BY JOINING, YOU CONSENT TO THE ARCHIVE.
            </p>
          </form>
        ) : (
          <div className="text-center p-12 border border-blue-900/30 bg-blue-950/5 animate-pulse">
            <p className="mono text-blue-400 text-sm tracking-[0.3em] font-bold">
              // CONNECTION_ESTABLISHED. CHECK YOUR ECHO.
            </p>
          </div>
        )}
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </section>
  );
};

export default Newsletter;