'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from './AnimatedBackground';
import Navbar from './Navbar';
import NoiseOverlay from './NoiseOverlay';
import TextFadeIn from './TextFadeIn';
import AnimatedSkillBar from './AnimatedSkillBar';
import { LogoCarousel } from "./LogoCarousel"

const LandingPage: React.FC = () => {
  const [hoveredText, setHoveredText] = useState<number | null>(null);
  const [preloaderStep, setPreloaderStep] = useState(0);
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderFading, setPreloaderFading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    // Animate the preloader
    const interval = setInterval(() => {
      setPreloaderStep(prev => (prev + 1) % 12);
    }, 80);

    // Start fadeout after 1.2 seconds
    const fadeTimer = setTimeout(() => {
      setPreloaderFading(true);
    }, 1200);

    // Hide preloader after fadeout completes
    const hideTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 1800); // 1.2s + 0.6s fadeout

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
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

  const bioCardSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { 
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0px)' : 'translateY(40px)'
    },
    config: {
      mass: 1,
      tension: 280,
      friction: 60
    }
  });

  const bioTexts = [
    {
      text: "Hey! I'm Joaquín: a frontend developer obsessed with clarity, flow, and making complex things feel simple.",
      keywords: ["frontend developer", "clarity", "flow", "simple"]
    },
    {
      text: "I've built award-winning Web3 products at hackathons around the world and contributed to open-source design through the Bitcoin Design Foundation.",
      keywords: ["Web3", "hackathons", "open-source", "Bitcoin Design Foundation"]
    },
    {
      text: "I care (a lot) about clean interfaces, thoughtful interactions, and telling powerful stories through design.",
      keywords: ["clean interfaces", "thoughtful interactions", "powerful stories", "design"]
    },
    {
      text: "I'm deeply committed to decentralization and building the internet of the future. Open, permissionless, and made for people, not platforms.",
      keywords: ["decentralization", "internet of the future", "permissionless", "people", "platforms"]
    }
  ];

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
      {/* Preloader */}
      {showPreloader && (
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
            fontSize: '16px',
            zIndex: 9999,
            opacity: preloaderFading ? 0 : 1,
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: preloaderFading ? 'none' : 'auto'
          }}>
          <div 
            className="loader"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              marginLeft: '-18px',
              marginTop: '-5px',
              width: '36px',
              height: '10px',
              textAlign: 'left',
              transform: preloaderFading ? 'scale(0.95)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            dangerouslySetInnerHTML={{ __html: renderSlashes() }}
          />
        </div>
      )}
      
      <Navbar />
      <NoiseOverlay />
      
      {/* Hero Section with Spline Background */}
      <section className="relative w-full h-screen">
        <AnimatedBackground />
      </section>

      {/* Bio Section */}
      <section className="relative w-full min-h-screen" ref={ref}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="container mx-auto px-4 py-20 relative h-full">
          <animated.div 
            style={bioCardSpring}
            className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-xl relative z-10"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-2/3">
                  <h2 className="text-6xl font-display-bold mb-8 text-white tracking-tight">Bio</h2>
                  <div className="space-y-4">
                    {bioTexts.map((item, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredText(index)}
                        onMouseLeave={() => setHoveredText(null)}
                        className="cursor-pointer transition-all duration-500 ease-out"
                        style={{
                          opacity: hoveredText === null ? 1 : (hoveredText === index ? 1 : 0.2),
                          filter: hoveredText === null ? 'blur(0px)' : (hoveredText === index ? 'blur(0px)' : 'blur(1px)'),
                        }}
                      >
                        <TextFadeIn
                          text={item.text}
                          className="text-lg text-white/90"
                          animate={inView}
                          keywords={item.keywords}
                          isHovered={hoveredText === index}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="flex justify-center mb-8">
                    <LogoCarousel columnCount={3} />
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
          </animated.div>
        </div>
      </section>


      {/* Currently Working On Section */}
      <section className="relative w-full min-h-screen py-20" style={{ zIndex: 2 }}>
        <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
          <h2 className="text-6xl font-display-bold mb-12 text-white text-center tracking-tight">Currently working on</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="relative backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300 group">
              <Image 
                src="/blessedlogos/sozucash_card.png" 
                alt="Sozu Cash Card" 
                fill
                className="object-cover transition-transform duration-300 scale-105 group-hover:scale-110"
              />
            </div>

            {/* Project Card 2 */}
            <div className="relative backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300 group">
              <Image 
                src="/blessedlogos/sozucash_card.png" 
                alt="Sozu Cash Card" 
                fill
                className="object-cover transition-transform duration-300 scale-105 group-hover:scale-110"
              />
            </div>

            {/* Project Card 3 */}
            <div className="relative backdrop-blur-md bg-white/5 dark:bg-black/5 rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 shadow-xl aspect-square hover:bg-white/10 transition-all duration-300 group">
              <Image 
                src="/blessedlogos/sozucash_card.png" 
                alt="Sozu Cash Card" 
                fill
                className="object-cover transition-transform duration-300 scale-105 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 