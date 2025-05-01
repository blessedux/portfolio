import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import Navbar from './Navbar';
import NoiseOverlay from './NoiseOverlay';

const LandingPage: React.FC = () => {
  return (
    <div className="relative w-full">
      <Navbar />
      <NoiseOverlay />
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
          <div 
            className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-xl min-h-[80vh]"
            style={{ 
              zIndex: 2,
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
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
        </div>
      </section>

      {/* Currently Working On Section */}
      <section className="relative w-full min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-white text-center">Currently working on</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Project 1</h3>
              <p className="text-white/80">Description of your first current project goes here.</p>
            </div>

            {/* Project Card 2 */}
            <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Project 2</h3>
              <p className="text-white/80">Description of your second current project goes here.</p>
            </div>

            {/* Project Card 3 */}
            <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Project 3</h3>
              <p className="text-white/80">Description of your third current project goes here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 