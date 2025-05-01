'use client';

import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  skill: string;
  level: number;
}

const AnimatedSkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const barSpring = useSpring({
    width: inView ? `${level}%` : '0%',
    from: { width: '0%' },
    config: {
      mass: 1,
      tension: 180,
      friction: 24,
    },
    delay: 100,
  });

  const textSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(10px)',
    config: config.gentle,
    delay: 200,
  });

  const numberSpring = useSpring({
    number: inView ? level : 0,
    from: { number: 0 },
    config: {
      mass: 1,
      tension: 140,
      friction: 20,
    },
    delay: 300,
  });

  return (
    <div ref={ref} className="skill-bar">
      <animated.div style={textSpring} className="flex justify-between mb-1">
        <span className="text-white/90 text-sm font-medium">{skill}</span>
        <animated.span className="text-white/90 text-sm">
          {numberSpring.number.to((val) => Math.floor(val))}
        </animated.span>
      </animated.div>
      <div className="w-full bg-white/5 rounded-sm h-2 overflow-hidden">
        <animated.div
          style={{
            ...barSpring,
            background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.3) 0%, rgba(168, 85, 247, 0.2) 100%)',
          }}
          className="h-full rounded-sm relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent" />
        </animated.div>
      </div>
    </div>
  );
};

export default AnimatedSkillBar; 