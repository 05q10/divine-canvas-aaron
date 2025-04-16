
import { useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder process data
const processItems = [
  {
    id: 1,
    title: "Spiritual Preparation",
    description: "Before approaching the canvas, I center myself through prayer and meditation, allowing divine guidance to flow through each creative decision.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - replace with actual video
  },
  {
    id: 2,
    title: "Initial Sketches",
    description: "The first marks are often intuitive—a conversation between the divine whisper and my hand, capturing the essence before details emerge.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - replace with actual video
  },
  {
    id: 3,
    title: "Color Selection",
    description: "Colors carry spiritual meaning—each palette carefully selected to evoke the emotion and divine truth the piece aims to communicate.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - replace with actual video
  },
  {
    id: 4,
    title: "Technical Execution",
    description: "Balancing technical skill with spiritual openness—allowing years of practice to merge with moments of divine inspiration.",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - replace with actual video
  }
];

const Process = () => {
  const [activeProcess, setActiveProcess] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('video');
  
  const tabs = [
    { id: 'video', label: 'Process Video' },
    { id: 'sketch', label: 'Initial Sketch' },
    { id: 'final', label: 'Final Work' }
  ];
  
  const currentProcess = processItems[activeProcess];
  
  return (
    <section id="process" className="py-20 bg-divine-cosmic relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-divine to-divine-cosmic opacity-60"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-center text-white mb-4"
        >
          From <span className="divine-gradient">Spirit</span> to Stroke
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-center max-w-2xl mx-auto mb-12"
        >
          A glimpse into the sacred journey from divine inspiration to final creation.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Process navigation sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-divine/40 backdrop-blur-sm rounded-lg p-6 border border-divine-light/10 h-fit"
          >
            <h3 className="text-xl font-serif text-divine-light mb-6">The Process</h3>
            
            <ul className="space-y-4">
              {processItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveProcess(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeProcess === index
                        ? 'bg-divine-light/20 text-divine-light'
                        : 'bg-divine/60 text-white/70 hover:bg-divine/80 hover:text-white'
                    }`}
                  >
                    <span className="block text-sm text-divine-gold/80 mb-1">{`0${index + 1}`}</span>
                    <span className="block font-serif text-lg">{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Main content area */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 bg-divine/30 backdrop-blur-sm rounded-lg border border-divine-light/10 overflow-hidden"
          >
            {/* Tabs */}
            <div className="flex border-b border-divine-light/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-divine-light/10 text-divine-light'
                      : 'text-white/60 hover:text-white hover:bg-divine-light/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Content area */}
            <div className="p-6">
              {activeTab === 'video' && (
                <div className="aspect-video rounded-lg overflow-hidden bg-divine/70">
                  <iframe
                    src={currentProcess.video}
                    title={`Process video for ${currentProcess.title}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              
              {activeTab === 'sketch' && (
                <div className="aspect-video flex items-center justify-center bg-divine/70 rounded-lg">
                  <p className="text-white/60 italic">Initial sketch would appear here</p>
                </div>
              )}
              
              {activeTab === 'final' && (
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={currentProcess.image}
                    alt={`Final artwork for ${currentProcess.title}`}
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              <div className="mt-6">
                <h3 className="text-xl font-serif text-divine-light mb-3">{currentProcess.title}</h3>
                <p className="text-white/80 leading-relaxed">{currentProcess.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
