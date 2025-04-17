
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ModelViewer from './ModelViewer';
import { Card, CardContent } from "@/components/ui/card";

interface ModelCardProps {
  id: string;
  name: string;
  description: string;
  modelPath: string;
  thumbnail?: string;
  onError?: () => void;
}

const ModelCard = ({ id, name, description, modelPath, thumbnail, onError }: ModelCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modelError, setModelError] = useState(false);

  const handleModelError = () => {
    setModelError(true);
    if (onError) onError();
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="h-full"
      >
        <Card 
          className="h-full overflow-hidden cursor-pointer border-divine-light/10 bg-divine-cosmic hover:border-divine-light/30 transition-colors duration-300"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative aspect-square bg-divine">
            {thumbnail ? (
              <img 
                src={thumbnail} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-divine-light/20 text-5xl font-serif">3D</div>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="font-serif text-xl text-divine-light mb-1">{name}</h3>
            <p className="text-white/60 text-sm line-clamp-2">{description}</p>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0 bg-divine border-divine-light/10 overflow-hidden">
          <DialogHeader className="p-4 bg-divine-cosmic border-b border-divine-light/10">
            <DialogTitle className="text-divine-light font-serif">{name}</DialogTitle>
          </DialogHeader>
          <div className="h-[70vh] w-full bg-divine/70">
            {modelError ? (
              <div className="w-full h-full flex items-center justify-center text-center p-4">
                <div>
                  <div className="text-divine-light/40 text-6xl mb-4">?</div>
                  <p className="text-white/80">Unable to load 3D model</p>
                </div>
              </div>
            ) : (
              <ModelViewer modelPath={modelPath} onError={handleModelError} />
            )}
          </div>
          <div className="p-4 bg-divine-cosmic border-t border-divine-light/10">
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModelCard;
