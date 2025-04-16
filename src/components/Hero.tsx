
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  const parallaxBg = useParallax({ speed: 0.1, direction: 'up' });
  const parallaxLeftArm = useParallax({ speed: 0.05, direction: 'left' });
  const parallaxRightArm = useParallax({ speed: 0.05, direction: 'right' });

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-divine stars">
      {/* Background gradient overlay with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-divine/80 via-divine to-divine-cosmic stars"
        style={{ transform: parallaxBg.transform }}
      ></motion.div>
      
      {/* Audio element (hidden) */}
      <audio ref={audioRef} loop className="hidden">
        <source src="https://orangefreesounds.com/wp-content/uploads/2022/04/Ambient-choir-sound-effect.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Audio toggle button */}
      <button 
        onClick={toggleAudio}
        className="absolute top-24 right-6 z-10 text-white/80 hover:text-divine-light focus:outline-none"
        aria-label={audioPlaying ? "Mute ambient sound" : "Play ambient sound"}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-divine-cosmic/50 backdrop-blur-sm px-3 py-2 rounded-full"
        >
          <span className="text-xs uppercase tracking-wider">
            {audioPlaying ? "Sound On" : "Sound Off"}
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {audioPlaying ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M17.07 6.93a8 8 0 010 10.14M9 17l-4-4H3a1 1 0 01-1-1v-4a1 1 0 011-1h2l4-4v14z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0110 4.586v14.828a1 1 0 01-1.707.707L3.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            )}
          </svg>
        </motion.div>
      </button>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Arm */}
        <motion.div 
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5 
          }}
          style={{ transform: parallaxLeftArm.transform }}
          className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-end"
        >
          <img 
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Creation representation - left arm" 
            className="w-2/3 h-auto object-contain transform -rotate-12"
          />
        </motion.div>
        
        {/* Electric Arc/Connection */}
        <motion.div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-full h-full bg-divine-light opacity-60 rounded-full blur-xl animate-pulse-arc"></div>
        </motion.div>
        
        {/* Right Arm */}
        <motion.div 
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.8 
          }}
          style={{ transform: parallaxRightArm.transform }}
          className="w-full md:w-1/2 flex justify-start"
        >
          <img 
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Creation representation - right arm" 
            className="w-2/3 h-auto object-contain transform rotate-12 scale-x-[-1]"
          />
        </motion.div>
      </div>
      
      {/* Scripture quote */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-20 left-0 right-0 text-center px-6"
      >
        <p className="text-white/90 text-xl md:text-2xl italic font-serif max-w-xl mx-auto leading-relaxed">
          "And the Spirit of God was hovering over the face of the waters."
        </p>
        <p className="text-divine-light/80 mt-2 text-sm md:text-base">Genesis 1:2</p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white/70" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
