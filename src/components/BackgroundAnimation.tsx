
import { useRef, useEffect } from 'react';

export const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create particles with 3D-like properties
    const particles: {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      color: string;
      opacity: number;
      depth: number;
    }[] = [];
    
    const createParticles = () => {
      const particleCount = 150;
      const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#38bdf8', '#7dd3fc']; // Blue shades
      
      for (let i = 0; i < particleCount; i++) {
        const depth = Math.random() * 2; // Depth factor (0-2)
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000, // Z-dimension for 3D effect
          size: (Math.random() * 4 + 1) * depth,
          speed: (Math.random() * 0.4 + 0.1) * depth,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.6 + 0.1,
          depth: depth
        });
      }
    };
    
    createParticles();
    
    // Create connection lines between nearby particles
    const drawLines = (p1: typeof particles[0], p2: typeof particles[0]) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) { // Only connect particles within this distance
        ctx.beginPath();
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150) * ((p1.depth + p2.depth) / 4)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };
    
    // Animation variables for 3D effect
    let angle = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse movement to create interactive effect
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Slowly rotate the entire particle field
      angle += 0.001;
      
      // Draw and update particles with pseudo-3D movement
      particles.forEach((particle, index) => {
        // Calculate 3D-like movement
        const moveFactor = 0.0005;
        const rotationRadius = 200;
        const rotationSpeed = particle.speed * 0.01;
        
        // Update z-position for depth
        particle.z -= particle.speed;
        
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
        
        // Apply perspective - particles get larger as they come "closer"
        const perspective = 300 / (300 + particle.z);
        
        // Apply motion effect based on mouse position
        const mouseEffect = 0.0001;
        const deltaX = (mouseX - window.innerWidth / 2) * mouseEffect * particle.depth;
        const deltaY = (mouseY - window.innerHeight / 2) * mouseEffect * particle.depth;
        
        // Calculate position with perspective and effects
        const posX = particle.x + Math.sin(angle + index) * 0.3 - deltaX * particle.z;
        const posY = particle.y + Math.cos(angle + index * 0.4) * 0.3 - deltaY * particle.z;
        const size = particle.size * perspective;
        
        // Draw particle
        ctx.globalAlpha = particle.opacity * perspective;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(posX, posY, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections between particles
        for (let j = index + 1; j < particles.length; j++) {
          drawLines(
            { ...particle, x: posX, y: posY },
            { 
              ...particles[j], 
              x: particles[j].x + Math.sin(angle + j) * 0.3 - deltaX * particles[j].z,
              y: particles[j].y + Math.cos(angle + j * 0.4) * 0.3 - deltaY * particles[j].z
            }
          );
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0" 
      style={{ background: 'transparent' }}
    />
  );
};
