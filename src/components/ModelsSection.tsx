
import { motion } from 'framer-motion';
import ModelCard from './ModelCard';

// Define model type
interface Model3D {
  id: string;
  name: string;
  description: string;
  modelPath: string;
  thumbnail?: string;
}

// Sample 3D models data (replace with actual models)
const models: Model3D[] = [
  {
    id: "model1",
    name: "Divine Light Sculpture",
    description: "A 3D interpretation of divine light breaking through darkness, symbolizing creation and revelation.",
    modelPath: "/models/sample.glb", // Update with your actual model path
    thumbnail: "https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "model2",
    name: "Spiritual Vessel",
    description: "An interactive vessel that represents the human spirit as a container for divine inspiration.",
    modelPath: "/models/sample.glb", // Update with your actual model path
    thumbnail: "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "model3",
    name: "Sacred Geometry",
    description: "A 3D exploration of sacred geometric patterns found throughout creation and spiritual architecture.",
    modelPath: "/models/sample.glb", // Update with your actual model path
    thumbnail: "https://images.unsplash.com/photo-1566979674220-2ec1b24cec60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ModelsSection = () => {
  return (
    <section id="models" className="py-20 bg-divine relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 stars"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-center text-white mb-4"
        >
          Divine <span className="divine-gradient">Dimensions</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-center max-w-2xl mx-auto mb-12"
        >
          Explore spiritual concepts brought to life in three-dimensional form, where divine inspiration takes shape beyond the canvas.
        </motion.p>
        
        {/* 3D Models Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {models.map((model) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <ModelCard 
                id={model.id}
                name={model.name}
                description={model.description}
                modelPath={model.modelPath}
                thumbnail={model.thumbnail}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsSection;
