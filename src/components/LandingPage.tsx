'use client';

import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import Navbar from './Navbar';
import NoiseOverlay from './NoiseOverlay';
import TextFadeIn from './TextFadeIn';
import Gallery from './Gallery';
import AnimatedSkillBar from './AnimatedSkillBar';

const LandingPage: React.FC = () => {
  const skills = [
    { skill: "React / Next.js", level: 95 },
    { skill: "TypeScript", level: 90 },
    { skill: "Tailwind", level: 93 },
    { skill: "Figma", level: 88 },
    { skill: "JavaScript", level: 92 },
    { skill: "Solidity", level: 85 },
    { skill: "Clarity", level: 82 }
  ];

  return (
    <div className="relative w-full">
      <Navbar />
      <NoiseOverlay />
      
      {/* Hero Section with Spline Background */}
      <section className="relative w-full h-screen">
        <AnimatedBackground />
      </section>

      {/* Bio Section */}
      <section className="relative w-full min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="container mx-auto px-4 py-20 relative h-full">
          <div 
            className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-xl"
            style={{ 
              zIndex: 2,
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 className="text-6xl font-display-bold mb-8 text-white tracking-tight">Bio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <TextFadeIn 
                    text="Hey! I'm Joaquín — a UX designer and frontend developer obsessed with clarity, flow, and making complex things feel simple."
                    className="text-lg text-white/90"
                  />
                  <TextFadeIn 
                    text="I've built award-winning Web3 products at hackathons around the world and contributed to open-source design through the Bitcoin Design Foundation."
                    className="text-lg text-white/90"
                  />
                  <TextFadeIn 
                    text="I care (a lot) about clean interfaces, thoughtful interactions, and telling powerful stories through design."
                    className="text-lg text-white/90"
                  />
                  <TextFadeIn 
                    text="I'm deeply committed to decentralization and building the internet of the future—open, permissionless, and made for people, not platforms."
                    className="text-lg text-white/90"
                  />
                </div>
                <div className="space-y-8">
                  <h3 className="text-4xl font-display-bold text-white tracking-tight">Skills</h3>
                  <div className="space-y-4">
                    {skills.map((item, index) => (
                      <AnimatedSkillBar
                        key={index}
                        skill={item.skill}
                        level={item.level}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Currently Working On Section */}
      <section className="relative w-full min-h-screen py-20" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
          <h2 className="text-6xl font-display-bold mb-12 text-white text-center tracking-tight">Currently working on</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300">
              <h3 className="text-3xl font-display-bold text-white mb-4 tracking-tight">Project 1</h3>
              <TextFadeIn 
                text="Description of your first current project goes here."
                className="text-white/80"
              />
            </div>

            {/* Project Card 2 */}
            <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300">
              <h3 className="text-3xl font-display-bold text-white mb-4 tracking-tight">Project 2</h3>
              <TextFadeIn 
                text="Description of your second current project goes here."
                className="text-white/80"
              />
            </div>

            {/* Project Card 3 */}
            <div className="backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl p-6 border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300">
              <h3 className="text-3xl font-display-bold text-white mb-4 tracking-tight">Project 3</h3>
              <TextFadeIn 
                text="Description of your third current project goes here."
                className="text-white/80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 