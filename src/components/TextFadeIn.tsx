'use client';

import React, { useEffect, useState } from 'react';

interface TextFadeInProps {
  text: string;
  className?: string;
}

const TextFadeIn: React.FC<TextFadeInProps> = ({ text, className = '' }) => {
  const [words, setWords] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const splitWords = text.split(' ');
    const wordElements = splitWords.map((word, index) => (
      <span
        key={index}
        className="opacity-0 blur-sm transition-all duration-800 ease-out"
        style={{
          animationDelay: `${index * 150}ms`,
          animationFillMode: 'forwards',
          animationName: 'fadeIn',
          animationDuration: '0.8s',
          animationTimingFunction: 'cubic-bezier(0.11, 0, 0.5, 0)',
        }}
      >
        {word}&nbsp;
      </span>
    ));
    setWords(wordElements);
  }, [text]);

  return (
    <div className={`fading ${className}`}>
      {words}
    </div>
  );
};

export default TextFadeIn; 