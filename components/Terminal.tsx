import React, { useState, useRef, useEffect } from 'react';

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

  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd || isTyping) return;

    setInput('');
    setHistory(prev => [...prev, {role: 'user', text: cmd.toUpperCase()}]);

    setIsTyping(true);

    // Simula un tempo di elaborazione della macchina
    setTimeout(() => {
      if (cmd === '/help') {
        setHistory(prev => [...prev, {role: 'system', text: 'COMMANDS: /VOID, /LYRICS, /GLITCH, /CLEAR, /HELP.'}]);
      } else if (cmd === '/clear') {
        setHistory([{role: 'ai', text: 'SESSION_RESTARTED. CACHE_PURGED.'}]);
      } else if (cmd === '/void') {
        setHistory(prev => [...prev, {role: 'ai', text: 'IL VUOTO NON È SILENZIO. È RUMORE BIANCO CHE DIVORA L\'IDENTITÀ.'}]);
      } else if (cmd === '/lyrics') {
        const fragments = [
          "\"La mia pelle è una mappa di luoghi che non ho mai visitato...\"",
          "\"Synthetic heartbeat, chemical rain, I am the echo of your pain.\"",
          "\"Trattieni lo statico finché non urla il tuo nome.\"",
          "\"Siamo solo pixel dispersi in una città che non dorme mai.\""
        ];
        const randomLyric = fragments[Math.floor(Math.random() * fragments.length)];
        setHistory(prev => [...prev, {role: 'ai', text: `FRAGMENT_DECODED: ${randomLyric}`}]);
      } else if (cmd === '/glitch') {
        setGlitchActive(true);
        setHistory(prev => [...prev, {role: 'system', text: 'ERROR_001: SYSTEM_STABILITY_COMPROMISED...'}]);
        setTimeout(() => setGlitchActive(false), 2000);
      } else {
        // Risposte criptiche per comandi ignoti (Static responses instead of AI)
        const randomResponses = [
          "ERROR: SIGNAL_DEGRADED. RE-ENCRYPTING...",
          "NO_CARRIER_FOUND. ATTENTION: DATA_VOID_DETECTED.",
          "UNAUTHORIZED_ACCESS_ATTEMPT. LOGGING_IP...",
          "FRAGMENT_00_LOCKED. REQUIRES_MANUAL_BYPASS.",
          "STATIC_INTERFERENCE_DETECTED. RE-SUBMIT_QUERY."
        ];
        const randomMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];
        setHistory(prev => [...prev, {role: 'ai', text: randomMsg}]);
      }
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className={`scanlines relative bg-black/95 border-2 border-blue-900/60 rounded-sm overflow-hidden transition-all duration-500 backdrop-blur-xl ${glitchActive ? 'animate-pulse scale-[1.02] border-red-500 shadow-[0_0_50px_rgba(255,0,0,0.2)]' : 'shadow-[0_0_60px_rgba(37,99,235,0.2)]'}`}>
      
      {/* Interactive Top Bar */}
      <div className="bg-[#0a0d14] px-8 py-5 border-b border-blue-900/50 flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 -translate-y-full animate-[scan_6s_linear_infinite]" />
        
        <div className="flex items-center gap-4 relative z-10">
           <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500/20 rounded-full border border-red-500/40" />
              <div className="w-3 h-3 bg-yellow-500/20 rounded-full border border-yellow-500/40" />
              <div className="w-3 h-3 bg-green-500/40 rounded-full border border-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
           </div>
           <div className="h-5 w-px bg-white/20 mx-2" />
           <span className="mono text-[12px] text-blue-400 font-black uppercase tracking-[0.5em] drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]">
             B-System_Secure_Link
           </span>
        </div>
        
        <div className="hidden sm:flex items-center gap-8 relative z-10">
          <div className="mono text-[10px] text-blue-700 font-black tracking-widest uppercase">
            LINK: <span className="text-blue-400">ENCRYPTED</span>
          </div>
          <div className="mono text-[10px] text-blue-700 font-black tracking-widest uppercase">
            CPU: <span className="text-blue-400">OK</span>
          </div>
        </div>
      </div>
      
      {/* Terminal Main Content */}
      <div 
        ref={scrollRef} 
        className="h-[500px] p-12 overflow-y-auto mono text-[14px] md:text-[16px] text-blue-200 space-y-6 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative"
      >
        {history.map((entry, i) => (
          <div 
            key={i} 
            className={`flex gap-6 group transition-all duration-300 ${entry.role === 'system' ? 'text-blue-400 font-black bg-blue-500/10 p-5 border-l-4 border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.1)]' : ''} ${entry.role === 'user' ? 'text-white' : ''}`}
          >
            <span className={`font-black min-w-[60px] select-none ${entry.role === 'user' ? 'text-blue-500 opacity-100 drop-shadow-[0_0_5px_rgba(37,99,235,0.8)]' : 'text-blue-800'}`}>
              {entry.role === 'user' ? 'USR>' : entry.role === 'system' ? 'SYS#' : 'VOID//'}
            </span>
            <span className={`leading-relaxed ${entry.role === 'ai' ? 'drop-shadow-[0_0_5px_rgba(191,219,254,0.4)]' : ''}`}>
              {entry.text}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-4 py-2">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
            </div>
            <div className="text-blue-500 font-black tracking-[0.4em] text-[11px] uppercase animate-pulse">
              DECODIFICA_SEGNALE...
            </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <form onSubmit={handleQuery} className="p-8 bg-[#020305] border-t border-blue-900/60 flex items-center group relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
        
        <div className="relative flex items-center w-full z-10">
          <span className="mono text-2xl text-blue-500 mr-8 font-black animate-pulse drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]">{'>'}</span>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="DIGITA COMANDO O INTERROGA IL VUOTO..."
            className="w-full bg-transparent border-none outline-none mono text-[15px] md:text-[17px] text-white uppercase placeholder:text-blue-900/40 tracking-[0.25em] font-bold"
            autoFocus
          />
          <div className="w-3.5 h-7 bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,1)] animate-[blink_0.8s_infinite] ml-6" />
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