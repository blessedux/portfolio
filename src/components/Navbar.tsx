'use client';

import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollThreshold = documentHeight - windowHeight * 1.5; // Show navbar when we're 1.5 viewport heights from the bottom
      
      setIsVisible(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - empty for now */}
          <div className="w-1/3" />
          
          {/* Center - HMU button */}
          <div className="w-1/3 flex justify-center">
            <a 
              href="https://t.me/blessedux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 text-white hover:text-white/80 transition-colors duration-300 font-handwriting text-2xl tracking-wider"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              hmu
            </a>
          </div>
          
          {/* Right side - Social icons */}
          <div className="w-1/3 flex justify-end space-x-4">
            <a 
              href="https://github.com/blessedux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://x.com/blessed_ux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors duration-300"
            >
              <FaXTwitter size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/joaquin-farfan-torres" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 