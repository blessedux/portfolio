'use client';

import React from 'react';

const NoiseOverlay: React.FC = () => {
  return (
    <div 
      className="noise-overlay fixed inset-0 pointer-events-none"
      style={{ zIndex: 3 }}
    />
  );
};

export default NoiseOverlay; 