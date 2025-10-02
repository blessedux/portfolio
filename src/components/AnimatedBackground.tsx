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

  useEffect(() => {
    // Add style to hide watermark
    const style = document.createElement('style');
    style.textContent = `
      body a.spline-watermark[href*="spline.design"],
      body a.spline-watermark[href*="spline.design"] span,
      body a.spline-watermark[href*="spline.design"] svg,
      iframe[src*="spline.design"] a.spline-watermark[href*="spline.design"],
      iframe[src*="spline.design"] a.spline-watermark[href*="spline.design"] span,
      iframe[src*="spline.design"] a.spline-watermark[href*="spline.design"] svg {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        position: absolute !important;
        z-index: -9999 !important;
        width: 0 !important;
        height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        clip-path: inset(100%) !important;
      }
    `;
    document.head.appendChild(style);

    // Direct DOM manipulation with iframe content
    const hideWatermark = () => {
      // Hide in main document
      const watermark = document.querySelector('a.spline-watermark[href*="spline.design"]');
      if (watermark instanceof HTMLElement) {
        watermark.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
        watermark.remove();
      }

      // Hide in iframe
      const iframe = document.querySelector('iframe[src*="spline.design"]');
      if (iframe instanceof HTMLIFrameElement && iframe.contentDocument) {
        // Inject styles into iframe
        const iframeStyle = iframe.contentDocument.createElement('style');
        iframeStyle.textContent = `
          a.spline-watermark[href*="spline.design"],
          a.spline-watermark[href*="spline.design"] span,
          a.spline-watermark[href*="spline.design"] svg {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            position: absolute !important;
            z-index: -9999 !important;
            width: 0 !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            clip-path: inset(100%) !important;
          }
        `;
        iframe.contentDocument.head.appendChild(iframeStyle);

        // Remove watermark from iframe
        const iframeWatermark = iframe.contentDocument.querySelector('a.spline-watermark[href*="spline.design"]');
        if (iframeWatermark instanceof HTMLElement) {
          iframeWatermark.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
          iframeWatermark.remove();
        }
      }
    };

    // Run immediately and periodically
    hideWatermark();
    const interval = setInterval(hideWatermark, 50);

    return () => {
      document.head.removeChild(style);
      clearInterval(interval);
    };
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
          background: 'transparent',
          transform: 'scale(1.2)',
          transformOrigin: 'center center',
          overflow: 'hidden'
        }}
        allow="autoplay; fullscreen; pointer-lock"
      />
    </div>
  );
};

export default AnimatedBackground; 