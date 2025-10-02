'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50; // Show navbar after scrolling 50px from the top
      
      setIsVisible(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      style={{
        background: isVisible 
          ? 'rgba(0, 0, 0, 0.8)' 
          : 'rgba(0, 0, 0, 0)',
        backdropFilter: isVisible ? 'blur(10px)' : 'blur(0px)',
        borderBottom: isVisible ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0)',
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation links */}
          <div className="w-1/3 flex justify-start">
            <Link 
              href="/repos" 
              className="text-white hover:text-white/80 transition-colors duration-300 font-medium"
            >
              Repos
            </Link>
          </div>
          
          {/* Center - Paper Plane animation */}
          <div className="w-1/3 flex justify-center">
            <a 
              href="https://t.me/blessedux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
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
              href="https://linkedin.com/in/joaquinfarfan" 
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