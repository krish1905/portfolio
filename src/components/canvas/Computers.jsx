import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const desktopComputer = useGLTF('./desktop_pc/scene.gltf');
  const mobileComputer = useGLTF('./mobile_pc/scene.gltf'); // Simplified model for mobile

  // Load lower-resolution or fewer textures for mobile
  const computerTextures = isMobile
    ? {
        baseColor: './textures/mobile/computer_details_baseColor.jpeg',
        normalMap: null,
        metallicRoughnessMap: null,
      }
    : {
        baseColor: './textures/desktop/computer_details_baseColor.jpeg',
        normalMap: './textures/desktop/computer_details_normal.png',
        metallicRoughnessMap: './textures/desktop/computer_details_metallicRoughness.png',
      };

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 1 : 2.5} groundColor={"black"} />
      <pointLight intensity={isMobile ? 2 : 5} />
      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={5000}
          castShadow
          shadow-mapSize={1024}
        />
      )}
      <primitive
        object={isMobile ? mobileComputer.scene : desktopComputer.scene}
        scale={isMobile ? 0.5 : 1}
        position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows={!isMobile}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
