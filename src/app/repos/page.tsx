'use client';

import { useEffect, useState } from 'react';

export default function ReposPage() {
  const [preloaderStep, setPreloaderStep] = useState(0);

  useEffect(() => {
    // Animate the preloader
    const interval = setInterval(() => {
      setPreloaderStep(prev => (prev + 1) % 12);
    }, 80);

    // Add fadeout effect and redirect to the built Codeology app
    const fadeoutTimer = setTimeout(() => {
      const preloaderElement = document.querySelector('.preloader-container');
      if (preloaderElement) {
        preloaderElement.style.transition = 'opacity 0.5s ease-out';
        preloaderElement.style.opacity = '0';
      }
    }, 800);

    const redirectTimer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location.href = '/codeology/index.html';
      }
    }, 1300);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeoutTimer);
      clearTimeout(redirectTimer);
    };
  }, []);
  
  const renderSlashes = () => {
    let slashes = "";
    for (let i = 0; i < 6; i++) {
      if (i > preloaderStep && i < preloaderStep + 6) {
        slashes += "&nbsp;";
      } else {
        slashes += "/";
      }
    }
    return slashes;
  };
  
  return (
    <div 
      className="preloader-container"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"BTMono", "Courier New", Courier, monospace',
        color: '#fff',
        fontSize: '16px'
      }}>
      <div 
        className="loader"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          marginLeft: '-15px',
          marginTop: '-5px',
          width: '30px',
          height: '10px',
          textAlign: 'left'
        }}
        dangerouslySetInnerHTML={{ __html: renderSlashes() }}
      />
    </div>
  );
}
