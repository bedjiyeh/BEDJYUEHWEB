import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{role: 'user' | 'ai' | 'system', text: string}[]>([
    {role: 'ai', text: 'BEDJYUEH NEURAL LINK ESTABLISHED.'},
    {role: 'ai', text: 'B-SYSTEM KERNEL v1.0.5 BOOT SUCCESSFUL.'},
    {role: 'system', text: 'DIGITA /HELP PER LA LISTA DEI COMANDI DISPONIBILI.'}
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd || isTyping) return;

    setInput('');
    setHistory(prev => [...prev, {role: 'user', text: cmd.toUpperCase()}]);

    // Easter Egg Logic
    if (cmd === '/help') {
      setHistory(prev => [...prev, {role: 'system', text: 'COMMANDS: /VOID, /LYRICS, /GLITCH, /CLEAR, /HELP.'}]);
      return;
    }

    if (cmd === '/clear') {
      setHistory([{role: 'ai', text: 'SESSION_RESTARTED. CACHE_PURGED.'}]);
      return;
    }

    if (cmd === '/void') {
      setHistory(prev => [...prev, {role: 'ai', text: 'IL VUOTO NON È SILENZIO. È RUMORE BIANCO CHE DIVORA L\'IDENTITÀ.'}]);
      return;
    }

    if (cmd === '/lyrics') {
      const fragments = [
        "\"La mia pelle è una mappa di luoghi che non ho mai visitato...\"",
        "\"Synthetic heartbeat, chemical rain, I am the echo of your pain.\"",
        "\"Trattieni lo statico finché non urla il tuo nome.\"",
        "\"Siamo solo pixel dispersi in una città che non dorme mai.\""
      ];
      const randomLyric = fragments[Math.floor(Math.random() * fragments.length)];
      setHistory(prev => [...prev, {role: 'ai', text: `FRAGMENT_DECODED: ${randomLyric}`}]);
      return;
    }

    if (cmd === '/glitch') {
      setGlitchActive(true);
      setHistory(prev => [...prev, {role: 'system', text: 'ERROR_001: SYSTEM_STABILITY_COMPROMISED...'}]);
      setTimeout(() => setGlitchActive(false), 2000);
      return;
    }

    // AI Fallback
    setIsTyping(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: cmd,
        config: {
          systemInstruction: "Sei l'eco digitale dei Bedjyueh. Parla come una macchina malfunzionante ma poetica. Temi: isolamento urbano, perdita di identità, estetica rock/industriale. Risposte brevi (max 20 parole), toni freddi e criptici. Non usare mai emoji.",
        },
      });

      setHistory(prev => [...prev, {role: 'ai', text: response.text || 'SIGNAL_LOST'}]);
    } catch (err) {
      setHistory(prev => [...prev, {role: 'ai', text: 'CONNECTION_REFUSED_BY_VOID'}]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`scanlines relative bg-black/95 border-2 border-blue-900/60 rounded-sm overflow-hidden transition-all duration-500 backdrop-blur-xl ${glitchActive ? 'animate-pulse scale-[1.02] border-red-500 shadow-[0_0_50px_rgba(255,0,0,0.2)]' : 'shadow-[0_0_60px_rgba(37,99,235,0.15)]'}`}>
      
      {/* Interactive Top Bar */}
      <div className="bg-[#0a0d14] px-8 py-4 border-b border-blue-900/40 flex justify-between items-center relative overflow-hidden">
        {/* Animated Scan Bar */}
        <div className="absolute inset-0 bg-blue-500/5 -translate-y-full animate-[scan_4s_linear_infinite]" />
        
        <div className="flex items-center gap-4 relative z-10">
           <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-red-900/40 rounded-full border border-red-500/30" />
              <div className="w-2.5 h-2.5 bg-yellow-900/40 rounded-full border border-yellow-500/30" />
              <div className="w-2.5 h-2.5 bg-green-900/40 rounded-full border border-green-500/30 animate-pulse" />
           </div>
           <div className="h-4 w-px bg-white/10 mx-2" />
           <span className="mono text-[11px] text-blue-400 font-black uppercase tracking-[0.4em] drop-shadow-[0_0_5px_rgba(37,99,235,0.5)]">
             B-System_Secure_Link
           </span>
        </div>
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="mono text-[9px] text-blue-900 font-bold hidden sm:block tracking-widest uppercase">
            CPU_LOAD: 12% // TMP: 38°C
          </div>
          <div className="w-4 h-4 border border-blue-900/60 rounded-sm flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-blue-500/20" />
          </div>
        </div>
      </div>
      
      {/* Terminal Main Content */}
      <div 
        ref={scrollRef} 
        className="h-[450px] p-10 overflow-y-auto mono text-[13px] md:text-[14px] text-blue-300/90 space-y-5 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative"
      >
        {history.map((entry, i) => (
          <div 
            key={i} 
            className={`flex gap-4 group transition-all duration-300 ${entry.role === 'system' ? 'text-blue-500 font-bold bg-blue-500/5 p-4 border-l-2 border-blue-500/50' : ''} ${entry.role === 'user' ? 'text-white' : ''}`}
          >
            <span className={`opacity-40 font-black min-w-[50px] ${entry.role === 'user' ? 'text-blue-400 opacity-80' : ''}`}>
              {entry.role === 'user' ? 'USR>' : entry.role === 'system' ? 'SYS#' : 'VOID//'}
            </span>
            <span className="leading-relaxed drop-shadow-[0_0_2px_rgba(37,99,235,0.3)]">
              {entry.text}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
            <div className="animate-pulse text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase">
              ATTESA_RISPOSTA_DAL_VUOTO...
            </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <form onSubmit={handleQuery} className="p-6 bg-black border-t border-blue-900/40 flex items-center group relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
        
        <div className="relative flex items-center w-full z-10">
          <span className="mono text-lg text-blue-500 mr-6 font-black animate-pulse">{'>'}</span>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="SCRIVI UN MESSAGGIO O UN COMANDO..."
            className="w-full bg-transparent border-none outline-none mono text-[13px] md:text-[14px] text-white uppercase placeholder:text-blue-900/30 tracking-[0.2em] font-medium"
            autoFocus
          />
          <div className="w-3 h-6 bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)] animate-[blink_0.8s_infinite] ml-4" />
        </div>
      </form>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scan { 
          from { transform: translateY(-100%); } 
          to { transform: translateY(1000%); } 
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default Terminal;