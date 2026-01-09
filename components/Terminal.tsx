import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: 'ARCHIVE_ACCESS_GRANTED. B-SYSTEM v1.0.5. READY...'}
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input;
    setInput('');
    setHistory(prev => [...prev, {role: 'user', text: userText}]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: "You are Bedjyueh's digital echo. Crytpic, industrial, brief. Talk about the Chemical Void. Never break character. Max 20 words per response.",
        },
      });

      setHistory(prev => [...prev, {role: 'ai', text: response.text || 'SIGNAL_LOST'}]);
    } catch (err) {
      setHistory(prev => [...prev, {role: 'ai', text: 'CONNECTION_REFUSED'}]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="scanlines relative bg-black border border-blue-900/40 rounded overflow-hidden">
      <div className="bg-blue-900/20 px-4 py-2 border-b border-blue-900/30 flex justify-between items-center">
        <span className="mono text-[9px] text-blue-500 font-bold uppercase tracking-widest">Archive_Terminal</span>
      </div>
      <div ref={scrollRef} className="h-48 p-4 overflow-y-auto mono text-[10px] text-blue-400 space-y-2">
        {history.map((entry, i) => (
          <div key={i}>
            <span className="opacity-40 mr-2">{entry.role === 'user' ? '>' : '//'}</span>
            {entry.text}
          </div>
        ))}
        {isTyping && <div className="animate-pulse text-blue-600">DECODING...</div>}
      </div>
      <form onSubmit={handleQuery} className="p-3 bg-black/80 border-t border-blue-900/20">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="COMMAND..."
          className="w-full bg-transparent border-none outline-none mono text-[10px] text-white uppercase"
        />
      </form>
    </div>
  );
};

export default Terminal;