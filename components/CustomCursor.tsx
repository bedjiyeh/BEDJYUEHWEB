import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Central Core - High Visibility Dot */}
      <div 
        className={`absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(37,99,235,1)] transition-transform duration-300 ${isHovering ? 'scale-150' : ''}`} 
      />

      {/* Outer Targeting Ring */}
      <div 
        className={`absolute -translate-x-1/2 -translate-y-1/2 border-2 rounded-full transition-all duration-500 ease-out ${
          isHovering 
            ? 'w-16 h-16 border-blue-400/80 bg-blue-500/5 rotate-90 scale-110' 
            : 'w-10 h-10 border-blue-500/40'
        }`}
      />

      {/* Crosshair Lines - Top */}
      <div 
        className={`absolute -translate-x-1/2 -top-1 w-[1.5px] bg-blue-400 shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-all duration-300 ${
          isHovering ? 'h-6 -translate-y-full opacity-100' : 'h-3 -translate-y-full opacity-60'
        }`}
      />
      {/* Crosshair Lines - Bottom */}
      <div 
        className={`absolute -translate-x-1/2 -bottom-1 w-[1.5px] bg-blue-400 shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-all duration-300 ${
          isHovering ? 'h-6 translate-y-full opacity-100' : 'h-3 translate-y-full opacity-60'
        }`}
      />
      {/* Crosshair Lines - Left */}
      <div 
        className={`absolute -translate-y-1/2 -left-1 h-[1.5px] bg-blue-400 shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-all duration-300 ${
          isHovering ? 'w-6 -translate-x-full opacity-100' : 'w-3 -translate-x-full opacity-60'
        }`}
      />
      {/* Crosshair Lines - Right */}
      <div 
        className={`absolute -translate-y-1/2 -right-1 h-[1.5px] bg-blue-400 shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-all duration-300 ${
          isHovering ? 'w-6 translate-x-full opacity-100' : 'w-3 translate-x-full opacity-60'
        }`}
      />

      {/* Coordinate Display (Optional visual detail) */}
      {isHovering && (
        <div className="absolute top-10 left-10 mono text-[8px] text-blue-400/60 font-black tracking-widest whitespace-nowrap animate-pulse">
          X:{position.x} Y:{position.y} // TARGET_LOCKED
        </div>
      )}
    </div>
  );
};

export default CustomCursor;