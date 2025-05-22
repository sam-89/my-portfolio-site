
import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const BackgroundAnimation = () => {
  const ref = useRef<THREE.Points>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  const particleCount = 5000;
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    
    return positions;
  }, []);

  // Check for dark mode
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkTheme();
    
    // Setup observer for class changes on document.documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const { mouse } = useThree();

  useFrame((state) => {
    if (ref.current) {
      // Basic rotation
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      
      // Interactive movement based on mouse position
      ref.current.rotation.x += (mouse.y * 0.1 - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (mouse.x * 0.1 - ref.current.rotation.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDarkMode ? "#5b21b6" : "#3b82f6"} // purple in dark mode, blue in light
          size={isDarkMode ? 0.7 : 0.8}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDarkMode ? 0.5 : 0.6}
        />
      </Points>
    </group>
  );
};
