
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
    // Reduced loading time for better debugging
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Simple loading indicator
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-divine flex items-center justify-center z-50">
        <div className="text-4xl md:text-5xl font-serif divine-gradient">
          Aaron
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-divine text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Process />
      <ModelsSection />
      <Inspiration />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
