import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href: string;
    color: string;
  }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="w-full max-w-[60rem] mx-auto flex flex-row flex-wrap [transform:rotateX(45deg)_rotateZ(45deg)] [perspective:1000px]">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="w-1/2 min-h-[11.25rem] p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="tile">
            <a 
              href={image.href}
              className="block group relative aspect-square"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-full h-full transition-all duration-300 ease-in-out group-hover:[transform:translate(-1rem,-1rem)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="transition-all duration-125 ease-in object-cover"
                  style={{
                    boxShadow: `group-hover:5px 5px ${image.color}66,
                               group-hover:10px 10px ${image.color}4D,
                               group-hover:15px 15px ${image.color}33,
                               group-hover:20px 20px ${image.color}1A,
                               group-hover:25px 25px ${image.color}0D`
                  }}
                />
              </div>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid; 