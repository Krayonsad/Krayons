import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeDBackgroundProps {
  opacity?: number;
  particleCount?: number;
  shapeCount?: number;
  colorScheme?: 'blue' | 'purple' | 'cyan' | 'mixed';
  animationSpeed?: number;
  className?: string;
}

const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({
  opacity = 0.3,
  particleCount = 80,
  shapeCount = 12,
  colorScheme = 'mixed',
  animationSpeed = 1,
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationRef = useRef<number>();
  const meshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Consistent geometries
    const geometries = [
      new THREE.IcosahedronGeometry(0.7, 0),
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.TetrahedronGeometry(0.8, 0),
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.SphereGeometry(0.6, 16, 16),
      new THREE.ConeGeometry(0.5, 1, 8)
    ];

    // Color schemes
    const colorSchemes = {
      blue: [0x3b82f6, 0x1e40af, 0x60a5fa, 0x93c5fd],
      purple: [0x8b5cf6, 0x7c3aed, 0xa78bfa, 0xc4b5fd],
      cyan: [0x06b6d4, 0x0891b2, 0x22d3ee, 0x67e8f9],
      mixed: [0x3b82f6, 0x8b5cf6, 0x06b6d4, 0x10b981, 0xf59e0b, 0xef4444]
    };

    const colors = colorSchemes[colorScheme];

    // Consistent materials
    const materials = colors.map(color => 
      new THREE.MeshPhongMaterial({ 
        color,
        shininess: 30, 
        transparent: true, 
        opacity: opacity * 0.6,
        wireframe: true
      })
    );

    const meshes: THREE.Mesh[] = [];

    // Create floating objects with consistent positioning
    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Consistent positioning pattern
      const angle = (i / shapeCount) * Math.PI * 2;
      const radius = 6 + Math.random() * 4;
      const layer = Math.floor(i / 4); // 4 objects per layer
      
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = Math.sin(angle) * radius * 0.6 + (layer - 1) * 2;
      mesh.position.z = -2 - Math.random() * 3;
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Store animation data
      mesh.userData = {
        initialX: mesh.position.x,
        initialY: mesh.position.y,
        initialZ: mesh.position.z,
        floatSpeed: (0.3 + Math.random() * 0.3) * animationSpeed,
        rotationSpeed: (0.005 + Math.random() * 0.01) * animationSpeed,
        offsetPhase: Math.random() * Math.PI * 2
      };
      
      meshes.push(mesh);
      scene.add(mesh);
    }

    meshesRef.current = meshes;

    // Consistent lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(colors[0], 0.3, 15);
    pointLight.position.set(-5, 3, 5);
    scene.add(pointLight);

    // Consistent particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: colors[0],
      transparent: true,
      opacity: opacity * 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Consistent animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate floating objects with consistent pattern
      meshes.forEach((mesh, index) => {
        const userData = mesh.userData;
        
        // Consistent floating motion
        mesh.position.y = userData.initialY + Math.sin(time * userData.floatSpeed + userData.offsetPhase) * 0.4;
        mesh.position.x = userData.initialX + Math.cos(time * userData.floatSpeed * 0.8 + userData.offsetPhase) * 0.3;
        mesh.position.z = userData.initialZ + Math.sin(time * userData.floatSpeed * 0.6 + userData.offsetPhase) * 0.2;
        
        // Consistent rotation
        mesh.rotation.x += userData.rotationSpeed;
        mesh.rotation.y += userData.rotationSpeed * 0.8;
        mesh.rotation.z += userData.rotationSpeed * 0.6;
      });

      // Animate particles consistently
      particlesMesh.rotation.y += 0.001 * animationSpeed;
      particlesMesh.rotation.x += 0.0005 * animationSpeed;

      // Subtle camera movement
      if (cameraRef.current) {
        cameraRef.current.position.x = Math.sin(time * 0.04) * 0.05;
        cameraRef.current.position.y = Math.cos(time * 0.05) * 0.03;
        cameraRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Consistent mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      meshes.forEach((mesh, index) => {
        const factor = (index % 3 + 1) * 0.05;
        mesh.rotation.x += mouseY * factor * 0.005;
        mesh.rotation.y += mouseX * factor * 0.005;
      });
    };

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of Three.js objects
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      rendererRef.current?.dispose();
    };
  }, [opacity, particleCount, shapeCount, colorScheme, animationSpeed]);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeDBackground;