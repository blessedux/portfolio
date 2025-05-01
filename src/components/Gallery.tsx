import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-20" style={{ zIndex: 2 }}>
      <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
        <h2 className="text-6xl font-display-bold mb-12 text-white text-center tracking-tight">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery items will be added here */}
          <div className="aspect-video rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 shadow-xl hover:bg-white/10 transition-all duration-300">
            {/* Placeholder for now */}
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-400/10" />
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 shadow-xl hover:bg-white/10 transition-all duration-300">
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-400/10" />
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 shadow-xl hover:bg-white/10 transition-all duration-300">
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-400/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 