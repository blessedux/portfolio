import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const LandingPage: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatedBackground />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Add your custom content here */}
      </div>
    </div>
  );
};

export default LandingPage; 