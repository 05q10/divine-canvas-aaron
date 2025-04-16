
import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 50,
  direction = 'up',
  className = '',
  once = true
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  
  // Map directions to transform values
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return `translateY(${distance}px)`;
    }
  };
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transform: 'translate(0, 0)',
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0] // easeOutQuart
        }
      });
    }
  }, [isInView, controls, delay, duration]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, transform: getTransform() }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
