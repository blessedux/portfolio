import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const LandingPage: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section with Spline Background */}
      <div className="relative w-full h-screen">
        <AnimatedBackground />
        
        {/* Content Overlay - Empty for now, ready for your custom content */}
        <div 
          className="relative z-10 flex items-center justify-center min-h-screen"
          style={{ pointerEvents: 'none' }}
        >
          {/* Your hero content will go here */}
        </div>
      </div>

      {/* Bio Section */}
      <section className="relative w-full min-h-[200vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="container mx-auto px-4 py-20 relative h-full">
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-xl min-h-[80vh]">
            <h2 className="text-4xl font-bold mb-8 text-white">Bio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-white/90">
                  Welcome to my portfolio! I'm a passionate developer with expertise in web technologies.
                </p>
                <p className="text-lg text-white/90">
                  I specialize in creating beautiful, interactive experiences that push the boundaries of what's possible on the web.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-white/90">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>WebGL & Three.js</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 