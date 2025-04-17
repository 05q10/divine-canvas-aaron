
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import ModelsSection from '../components/ModelsSection';
import Inspiration from '../components/Inspiration';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-divine flex items-center justify-center z-50"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2
            }}
            className="text-4xl md:text-5xl font-serif divine-gradient"
          >
            Aaron
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-divine text-white overflow-x-hidden"
        >
          <Navbar />
          <Hero />
          <About />
          <Gallery />
          <Process />
          <ModelsSection />
          <Inspiration />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
