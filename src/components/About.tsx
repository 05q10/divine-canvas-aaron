
import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeStory, setActiveStory] = useState<number>(0);
  
  const storyMilestones = [
    {
      title: "Genesis",
      year: "Birth",
      content: "Aaron's journey begins with a deep connection to the divine, apparent from his earliest days.",
    },
    {
      title: "Awakening",
      year: "Faith",
      content: "A spiritual awakening during Aaron's formative years planted the seeds for future artistic expressions.",
    },
    {
      title: "Calling",
      year: "Artistic Discovery",
      content: "The moment when brush met canvas and divine inspiration flowed through, revealing his purpose.",
    },
    {
      title: "Wilderness",
      year: "Struggles",
      content: "Every artist faces periods of drought and challenge, moments that ultimately deepen the work.",
    },
    {
      title: "Revelation",
      year: "Breakthrough",
      content: "Divine whispers became clear visions, bringing clarity and direction to Aaron's artistic voice.",
    },
  ];
  
  return (
    <section id="about" className="py-20 relative bg-divine-cosmic overflow-hidden">
      {/* Light beam effect */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-divine-light/10 to-transparent transform -rotate-45 translate-x-[-50%] translate-y-[-10%]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-center text-white mb-12"
        >
          Genesis of the <span className="divine-gradient">Artist</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-divine-accent to-divine-gold opacity-20 blur-xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Aaron - Artist portrait" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
          
          {/* Story */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-3/5"
          >
            <h3 className="text-2xl font-serif text-divine-light mb-6">The Divine Journey</h3>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              Aaron's spiritual and artistic journey has been one of divine inspiration, constant growth, and faithful expression. From early childhood fascinations with light and shadow to mature explorations of the sacred through visual language, each stroke of the brush has been guided by something greater.
            </p>
            
            {/* Story Timeline */}
            <div className="space-y-8">
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-none">
                {storyMilestones.map((milestone, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full transition-all ${
                      activeStory === index
                        ? 'bg-divine-light/20 text-divine-light'
                        : 'bg-divine/40 text-white/60 hover:bg-divine/60'
                    }`}
                  >
                    {milestone.title}
                  </button>
                ))}
              </div>
              
              <motion.div
                key={activeStory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-divine/50 backdrop-blur-sm p-6 rounded-lg border border-divine-light/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-serif text-divine-light">
                    {storyMilestones[activeStory].title}
                  </h4>
                  <span className="text-sm text-divine-gold/80">
                    {storyMilestones[activeStory].year}
                  </span>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {storyMilestones[activeStory].content}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
