
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    type: 'commission'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          message: '',
          type: 'commission'
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-divine-cosmic relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-divine-cosmic to-divine opacity-80"></div>
      <div className="absolute inset-0 opacity-30 stars"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-center text-white mb-4"
        >
          Let's <span className="divine-gradient">Co-Create</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-center max-w-2xl mx-auto mb-12"
        >
          Reach out for commissions, collaborations, or discussions about faith and art.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-divine/50 backdrop-blur-sm rounded-lg p-8 border border-divine-light/10"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-divine-light mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-divine/40 border border-divine-light/20 rounded-lg focus:ring-2 focus:ring-divine-light focus:border-transparent transition-all text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-divine-light mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-divine/40 border border-divine-light/20 rounded-lg focus:ring-2 focus:ring-divine-light focus:border-transparent transition-all text-white"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-divine-light mb-2 text-sm">What is this regarding?</label>
                  <select
                    id="type"
                    name="type"
                    value={formState.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-divine/40 border border-divine-light/20 rounded-lg focus:ring-2 focus:ring-divine-light focus:border-transparent transition-all text-white"
                  >
                    <option value="commission">Commission</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="faith-art">Talk about God & Art</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-divine-light mb-2 text-sm">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-divine/40 border border-divine-light/20 rounded-lg focus:ring-2 focus:ring-divine-light focus:border-transparent transition-all text-white"
                    placeholder="Share your thoughts or project details..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-divine-accent hover:bg-divine-light text-divine font-medium rounded-lg transition-all flex items-center justify-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-divine" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-divine-light/20 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-divine-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-divine-light mb-2">Message Sent!</h3>
                <p className="text-white/70">Thank you for reaching out. I'll respond to your message soon.</p>
              </motion.div>
            )}
            
            <div className="mt-8 pt-6 border-t border-divine-light/10 text-center">
              <p className="text-white/60 text-sm">Prefer email?</p>
              <a href="mailto:aaron@divinecanvas.art" className="text-divine-light hover:text-divine-gold transition-colors">
                aaron@divinecanvas.art
              </a>
            </div>
          </motion.div>
          
          {/* Inspiration quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Inspirational architecture" 
              className="w-full max-w-md rounded-lg shadow-2xl mb-8"
            />
            
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed italic">
                "Every soul is an artist waiting for the divine brushstroke."
              </p>
              <footer className="mt-4 text-divine-light/70">— Aaron</footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
