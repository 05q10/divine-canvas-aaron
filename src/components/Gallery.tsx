
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define artwork type
interface Artwork {
  id: number;
  title: string;
  description: string;
  medium: string;
  image: string;
}

// Placeholder artwork data until real content is provided
const artworks: Artwork[] = [
  {
    id: 1,
    title: "Divine Light",
    description: "An exploration of the Genesis creation narrative, with light breaking through the darkness.",
    medium: "painting",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Whispered Prayer",
    description: "Visual representation of the intimate communication between creation and Creator.",
    medium: "sketching",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Sanctuary",
    description: "Finding divine presence in the ordinary, a reminder of God's dwelling within us.",
    medium: "digital",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Eternal Promise",
    description: "The covenant between heaven and earth, bridging the gap through faithful devotion.",
    medium: "painting",
    image: "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Broken Vessels",
    description: "The beauty found in our brokenness, where divine light shines through the cracks.",
    medium: "abstract",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Still Waters",
    description: "Moments of peace amid life's storms, a meditation on divine presence within chaos.",
    medium: "digital",
    image: "https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const handleOpenModal = (artwork) => {
    setSelectedArtwork(artwork);
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseModal = () => {
    setSelectedArtwork(null);
    document.body.style.overflow = 'auto';
  };
  
  const filterOptions = [
    { value: 'all', label: 'All Works' },
    { value: 'painting', label: 'Paintings' },
    { value: 'sketching', label: 'Sketches' },
    { value: 'digital', label: 'Digital' },
    { value: 'abstract', label: 'Abstract' }
  ];
  
  const filteredArtworks = activeFilter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.medium === activeFilter);
  
  return (
    <section id="gallery" className="py-20 bg-divine relative overflow-hidden">
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
          Divine <span className="divine-gradient">Creations</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-center max-w-2xl mx-auto mb-12"
        >
          Each artwork is a spiritual exploration—a moment when divine inspiration meets human expression.
        </motion.p>
        
        {/* Filter options */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filterOptions.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter.value
                  ? 'bg-divine-light text-divine'
                  : 'bg-divine-cosmic/50 text-white/70 hover:bg-divine-cosmic hover:text-white'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
        
        {/* Artwork grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {filteredArtworks.map((artwork: Artwork) => (
            <motion.div
              key={artwork.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl"
              whileHover={{ y: -5 }}
              onClick={() => handleOpenModal(artwork)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-divine/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-xl font-serif text-white">{artwork.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Artwork modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-divine/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-divine-cosmic border border-divine-light/10 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-divine/50 rounded-full p-2"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="w-full md:w-3/5 h-[300px] md:h-auto overflow-hidden">
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-2/5 p-6 flex flex-col">
                <h3 className="text-2xl font-serif text-divine-light mb-2">{selectedArtwork.title}</h3>
                <p className="text-sm text-divine-gold/80 uppercase tracking-wider mb-4">{selectedArtwork.medium}</p>
                <div className="bg-divine/30 h-px w-full mb-4"></div>
                <div className="prose prose-invert prose-sm">
                  <h4 className="text-white/90 font-serif text-lg mb-2">The Creator's Note</h4>
                  <p className="text-white/70 leading-relaxed">{selectedArtwork.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
