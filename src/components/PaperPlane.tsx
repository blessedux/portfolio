'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PaperPlaneProps {
  isVisible: boolean;
}

const PaperPlane: React.FC<PaperPlaneProps> = ({ isVisible }) => {
  return (
    <motion.div
      className="relative w-48 h-36 flex items-start justify-center -mt-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <motion.video
        src="/paperplane.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[75%] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default PaperPlane; 