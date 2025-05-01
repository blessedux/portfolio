'use client';

import React, { useEffect, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full"
      style={{ 
        zIndex: 1,
        filter: `blur(${scrollProgress * 20}px)`,
        transition: 'filter 0.2s ease-out',
      }}
    >
      <iframe
        src="https://my.spline.design/colorfulcursorblur-bHEedYpmYQovkJwP9qv8WMtz/"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'auto',
          zIndex: 1,
          background: 'transparent'
        }}
        allow="autoplay; fullscreen; pointer-lock"
      />
    </div>
  );
};

export default AnimatedBackground; 