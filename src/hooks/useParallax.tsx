
import { useEffect, useState } from 'react';

interface ParallaxConfig {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  startOffset?: number;
}

export const useParallax = (config: ParallaxConfig = {}) => {
  const { 
    speed = 0.05, 
    direction = 'up',
    startOffset = 0
  } = config;
  
  const [offset, setOffset] = useState(startOffset);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffset = startOffset + scrollY * speed;
      setOffset(newOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, startOffset]);
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(-${offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(-${offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(-${offset}px)`;
    }
  };
  
  return { transform: getTransform(), offset };
};
