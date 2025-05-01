'use client';

import React, { useEffect, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
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
        transition: 'filter 0.1s ease-out',
        pointerEvents: 'none'
      }}
    >
      <iframe
        src="https://my.spline.design/colorfulcursorblur-bHEedYpmYQovkJwP9qv8WMtz/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="fixed inset-0"
        style={{
          zIndex: 1,
          pointerEvents: 'auto',
          touchAction: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          msUserSelect: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          willChange: 'transform'
        }}
        allow="autoplay; fullscreen"
      />
    </div>
  );
};

export default AnimatedBackground; 