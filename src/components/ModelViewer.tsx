
import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls } from '@react-three/drei';
import { useToast } from "@/components/ui/use-toast";

interface ModelViewerProps {
  modelPath: string;
  onError?: () => void;
}

function Model({ modelPath, onError }: { modelPath: string; onError?: () => void }) {
  const [error, setError] = useState<boolean>(false);
  const toast = useToast();
  
  useEffect(() => {
    const loadModel = async () => {
      try {
        await useGLTF.preload(modelPath);
      } catch (err) {
        console.error("Error preloading model:", err);
        setError(true);
        if (onError) onError();
        toast.toast({
          title: "Error loading 3D model",
          description: "There was a problem loading the 3D model. Please check that the model file exists.",
          variant: "destructive"
        });
      }
    };
    
    loadModel();
  }, [modelPath, onError, toast]);

  if (error) {
    return null;
  }
  
  try {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} dispose={null} />;
  } catch (err) {
    console.error("Error loading model:", err);
    if (!error) {
      setError(true);
      if (onError) onError();
      toast.toast({
        title: "Error loading 3D model",
        description: "There was a problem displaying the 3D model.",
        variant: "destructive"
      });
    }
    return null;
  }
}

const ModelViewerFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="purple" />
  </mesh>
);

const ModelViewer = ({ modelPath, onError }: ModelViewerProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      className="w-full h-full"
      shadows
    >
      <Environment preset="city" />
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Suspense fallback={<ModelViewerFallback />}>
          <Model modelPath={modelPath} onError={onError} />
        </Suspense>
      </PresentationControls>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default ModelViewer;
