'use client';

import React, { useEffect, useState } from 'react';

interface TextFadeInProps {
  text: string;
  className?: string;
  animate?: boolean;
  keywords?: string[];
  isHovered?: boolean;
}

const TextFadeIn: React.FC<TextFadeInProps> = ({ 
  text, 
  className = '', 
  animate = true,
  keywords = [],
  isHovered = false
}) => {
  const [words, setWords] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const splitWords = text.split(' ');
    const wordElements = splitWords.map((word, index) => {
      const isKeyword = keywords.some(keyword => 
        word.toLowerCase().includes(keyword.toLowerCase())
      );
      
      return (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            animate ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-sm translate-y-2'
          } ${isKeyword && isHovered ? 'font-bold text-white' : ''}`}
          style={{
            transitionDelay: animate ? `${index * 50}ms` : '0ms',
          }}
        >
          {word}&nbsp;
        </span>
      );
    });
    setWords(wordElements);
  }, [text, animate, keywords, isHovered]);

  return (
    <div className={`${className}`}>
      {words}
    </div>
  );
};

export default TextFadeIn; 