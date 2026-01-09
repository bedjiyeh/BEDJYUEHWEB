import React, { useEffect, useRef, useState } from 'react';

const AudioEngine: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const mainGainRef = useRef<GainNode | null>(null);
  const intervalsRef = useRef<number[]>([]);

  const initAudio = () => {
    if (audioCtxRef.current) return;

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    const mainGain = ctx.createGain();
    mainGain.gain.setValueAtTime(0, ctx.currentTime);
    mainGain.connect(ctx.destination);
    mainGainRef.current = mainGain;

    // --- 56K MODEM HANDSHAKE SIMULATION ---

    // 1. CARRIER HISS (Filtered Noise)
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1500, ctx.currentTime);
    noiseFilter.Q.setValueAtTime(1, ctx.currentTime);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.08, ctx.currentTime);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(mainGain);
    noise.start();

    // 2. THE DIGITAL GROWL (Low Sawtooth with Filter LFO)
    const growl = ctx.createOscillator();
    growl.type = 'sawtooth';
    growl.frequency.setValueAtTime(110, ctx.currentTime);
    
    const growlFilter = ctx.createBiquadFilter();
    growlFilter.type = 'lowpass';
    growlFilter.frequency.setValueAtTime(400, ctx.currentTime);
    growlFilter.Q.setValueAtTime(15, ctx.currentTime);
    
    const growlGain = ctx.createGain();
    growlGain.gain.setValueAtTime(0.02, ctx.currentTime);

    // LFO for the growl filter
    const growlLfo = ctx.createOscillator();
    growlLfo.frequency.setValueAtTime(8, ctx.currentTime);
    const growlLfoGain = ctx.createGain();
    growlLfoGain.gain.setValueAtTime(300, ctx.currentTime);
    growlLfo.connect(growlLfoGain);
    growlLfoGain.connect(growlFilter.frequency);
    
    growl.connect(growlFilter);
    growlFilter.connect(growlGain);
    growlGain.connect(mainGain);
    growl.start();
    growlLfo.start();

    // 3. HIGH PITCHED "SHRIEKS" (Randomized FM Chirps)
    const createChirp = () => {
      if (!isActive && mainGainRef.current?.gain.value === 0) return;
      
      const osc = ctx.createOscillator();
      const mod = ctx.createOscillator();
      const mGain = ctx.createGain();
      const cGain = ctx.createGain();

      const freq = 1200 + Math.random() * 3000;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      mod.type = 'square';
      mod.frequency.setValueAtTime(15 + Math.random() * 50, ctx.currentTime);
      mGain.gain.setValueAtTime(Math.random() * 500, ctx.currentTime);
      
      cGain.gain.setValueAtTime(0, ctx.currentTime);
      cGain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 0.1);
      cGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);

      mod.connect(mGain);
      mGain.connect(osc.frequency);
      osc.connect(cGain);
      cGain.connect(mainGain);

      osc.start();
      mod.start();
      osc.stop(ctx.currentTime + 0.5);
      mod.stop(ctx.currentTime + 0.5);
    };

    const chirpInterval = window.setInterval(createChirp, 800);
    intervalsRef.current.push(chirpInterval);
  };

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      initAudio();
    }
    
    const ctx = audioCtxRef.current!;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (isActive) {
      mainGainRef.current?.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
    } else {
      mainGainRef.current?.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 1.5);
    }
    setIsActive(!isActive);
  };

  useEffect(() => {
    return () => {
      intervalsRef.current.forEach(id => clearInterval(id));
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-2">
      <button 
        onClick={toggleAudio}
        className="mono group flex items-center gap-3 bg-black/40 border border-blue-900/30 px-4 py-2 hover:bg-blue-900/20 transition-all backdrop-blur-sm"
        aria-label="Toggle Modem Handshake Sound"
      >
        <div className="flex gap-0.5 items-end h-3 w-4">
          {[1,2,3,4].map(i => (
            <div 
              key={i} 
              className={`w-0.5 bg-blue-400 transition-all duration-300 ${isActive ? 'animate-pulse' : 'h-0.5 opacity-30'}`}
              style={{ 
                height: isActive ? `${20 + Math.random() * 80}%` : '2px',
                animationDelay: `${i * 0.05}s`,
                animationDuration: '0.1s' 
              }}
            />
          ))}
        </div>
        <span className="text-[9px] font-bold tracking-[0.3em] text-blue-500 uppercase">
          {isActive ? 'MODEM_HANDSHAKE_LIVE' : 'MODEM_OFFLINE'}
        </span>
      </button>
      <div className="mono text-[8px] text-blue-900/40 tracking-widest uppercase text-right">
        {isActive ? 'B-LINK_ESTABLISHED' : 'CARRIER_LOST'}
      </div>
    </div>
  );
};

export default AudioEngine;