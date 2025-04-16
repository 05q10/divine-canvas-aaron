
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define inspiration item type
interface InspirationItem {
  id: number;
  type: 'scripture' | 'quote' | 'image';
  content: string;
  source?: string;
  description?: string;
  color: string;
}

// Placeholder inspiration items
const inspirationItems: InspirationItem[] = [
  {
    id: 1,
    type: 'scripture',
    content: '"I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well."',
    source: 'Psalm 139:14',
    color: 'bg-divine-light/20'
  },
  {
    id: 2,
    type: 'quote',
    content: 'Art is a collaboration between God and the artist, and the less the artist does, the better.',
    source: 'André Gide',
    color: 'bg-divine-gold/20'
  },
  {
    id: 3,
    type: 'image',
    content: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'The play of light through creation reminds me of divine presence in all things.',
    color: 'bg-divine-accent/20'
  },
  {
    id: 4,
    type: 'scripture',
    content: '"In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters."',
    source: 'Genesis 1:1-2',
    color: 'bg-divine-light/20'
  },
  {
    id: 5,
    type: 'quote',
    content: 'Every artist dips his brush in his own soul, and paints his own nature into his pictures.',
    source: 'Henry Ward Beecher',
    color: 'bg-divine-gold/20'
  },
  {
    id: 6,
    type: 'image',
    content: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'The majesty of mountains draws my spirit upward toward heavenly contemplation.',
    color: 'bg-divine-accent/20'
  },
  {
    id: 7,
    type: 'scripture',
    content: '"He has made everything beautiful in its time. He has also set eternity in the human heart; yet no one can fathom what God has done from beginning to end."',
    source: 'Ecclesiastes 3:11',
    color: 'bg-divine-light/20'
  },
  {
    id: 8,
    type: 'quote',
    content: 'The aim of art is to represent not the outward appearance of things, but their inward significance.',
    source: 'Aristotle',
    color: 'bg-divine-gold/20'
  },
  {
    id: 9,
    type: 'image',
    content: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Architecture that reaches toward heaven inspires my own artistic aspirations.',
    color: 'bg-divine-accent/20'
  }
];

const Inspiration = () => {
  const [shuffledInspiration, setShuffledInspiration] = useState<InspirationItem[]>(inspirationItems);
  const [highlightedItem, setHighlightedItem] = useState<InspirationItem | null>(null);
  
  const shuffleInspirations = () => {
    const shuffled = [...inspirationItems].sort(() => Math.random() - 0.5);
    setShuffledInspiration(shuffled);
    
    // Highlight a random item
    const randomIndex = Math.floor(Math.random() * shuffled.length);
    setHighlightedItem(shuffled[randomIndex]);
    
    // Reset highlight after some time
    setTimeout(() => {
      setHighlightedItem(null);
    }, 3000);
  };
  
  return (
    <section id="inspiration" className="py-20 bg-divine relative overflow-hidden">
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
          Where <span className="divine-gradient">God Whispers</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-center max-w-2xl mx-auto mb-8"
        >
          The divine inspiration behind the art—scriptures, thoughts, and images that guide my creative journey.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <motion.button
            onClick={shuffleInspirations}
            className="px-6 py-3 bg-divine-light/10 hover:bg-divine-light/20 text-divine-light rounded-full flex items-center space-x-2 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Inspire Me</span>
          </motion.button>
        </motion.div>
        
        {/* Inspiration grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {shuffledInspiration.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: highlightedItem && highlightedItem.id === item.id ? 1.05 : 1,
                  zIndex: highlightedItem && highlightedItem.id === item.id ? 10 : 1
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`${item.color} backdrop-blur-sm p-6 rounded-lg border border-divine-light/10 ${
                  highlightedItem && highlightedItem.id === item.id 
                    ? 'ring-2 ring-divine-light shadow-lg shadow-divine-light/20' 
                    : ''
                }`}
              >
                {item.type === 'image' ? (
                  <div className="space-y-3">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={item.content} 
                        alt="Inspiration" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white/80 text-sm italic">{item.description}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-divine-light/20">
                      {item.type === 'scripture' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-divine-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-divine-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-white font-serif text-lg">{item.content}</p>
                    <p className="text-divine-light/70 text-sm">— {item.source}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
