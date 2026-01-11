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

    // --- VOID ENGINE SYNTHESIS ---

    // 1. SUB DRONE (The Industrial Hum)
    const drone = ctx.createOscillator();
    drone.type = 'sawtooth';
    drone.frequency.setValueAtTime(43.65, ctx.currentTime); // F1 Note
    
    const droneFilter = ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(120, ctx.currentTime);
    droneFilter.Q.setValueAtTime(5, ctx.currentTime);
    
    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.15, ctx.currentTime);

    drone.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(mainGain);
    drone.start();

    // 2. RHYTHMIC DATA PULSE (Synthetic Heartbeat)
    const createPulse = () => {
      if (!isActive && mainGainRef.current?.gain.value === 0) return;
      
      const osc = ctx.createOscillator();
      const pGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'square';
      osc.frequency.setValueAtTime(60 + Math.random() * 20, ctx.currentTime);
      
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      
      pGain.gain.setValueAtTime(0, ctx.currentTime);
      pGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.01);
      pGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);

      osc.connect(filter);
      filter.connect(pGain);
      pGain.connect(mainGain);

      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    };

    const pulseInterval = window.setInterval(createPulse, 500); // Steady 120BPM pulse
    intervalsRef.current.push(pulseInterval);

    // 3. ATMOSPHERIC GHOST (Filtered Noise Sweeps)
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
    noiseFilter.frequency.setValueAtTime(1000, ctx.currentTime);
    noiseFilter.Q.setValueAtTime(2, ctx.currentTime);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.03, ctx.currentTime);

    // LFO for noise filter sweep
    const sweepLfo = ctx.createOscillator();
    sweepLfo.frequency.setValueAtTime(0.1, ctx.currentTime);
    const sweepLfoGain = ctx.createGain();
    sweepLfoGain.gain.setValueAtTime(800, ctx.currentTime);
    
    sweepLfo.connect(sweepLfoGain);
    sweepLfoGain.connect(noiseFilter.frequency);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(mainGain);
    noise.start();
    sweepLfo.start();

    // 4. HIGH GLITCH BURSTS (Occasional digital artifacts)
    const createGlitch = () => {
      if (!isActive && mainGainRef.current?.gain.value === 0) return;
      if (Math.random() > 0.3) return; // Only trigger sometimes

      const osc = ctx.createOscillator();
      const gGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(2000 + Math.random() * 3000, ctx.currentTime);
      
      gGain.gain.setValueAtTime(0, ctx.currentTime);
      gGain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.005);
      gGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

      osc.connect(gGain);
      gGain.connect(mainGain);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    };

    const glitchInterval = window.setInterval(createGlitch, 150);
    intervalsRef.current.push(glitchInterval);
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
      mainGainRef.current?.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
    } else {
      mainGainRef.current?.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 2);
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
        className="mono group flex items-center gap-3 bg-black/40 border border-blue-900/30 px-5 py-3 hover:bg-blue-900/20 transition-all backdrop-blur-sm shadow-[0_0_20px_rgba(37,99,235,0.05)] hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]"
        aria-label="Toggle Electronic Engine Sound"
      >
        <div className="flex gap-1 items-end h-4 w-6">
          {[1,2,3,4,5].map(i => (
            <div 
              key={i} 
              className={`w-0.5 bg-blue-500 transition-all duration-300 ${isActive ? 'animate-pulse' : 'h-1 opacity-20'}`}
              style={{ 
                height: isActive ? `${30 + Math.random() * 70}%` : '2px',
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.15s' 
              }}
            />
          ))}
        </div>
        <span className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">
          {isActive ? 'VOID_ENGINE_LIVE' : 'ENGINE_STANDBY'}
        </span>
      </button>
      <div className="mono text-[8px] text-blue-900/50 tracking-[0.5em] uppercase text-right font-bold">
        {isActive ? 'SIGNAL_STABLE // NEURAL_DRONE' : 'CARRIER_LOST'}
      </div>
    </div>
  );
};

export default AudioEngine;