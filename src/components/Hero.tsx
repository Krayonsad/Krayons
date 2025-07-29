import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import * as THREE from 'three';

const Hero = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationRef = useRef<number>();

  const handleGetInTouch = () => {
    window.location.href = 'mailto:reachus@krayons.co.in';
  };

  const handleViewWork = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.SphereGeometry(0.5, 16, 16)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0xe0f2fe, 
        shininess: 30, 
        transparent: true, 
        opacity: 0.15,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xf3e8ff, 
        shininess: 30, 
        transparent: true, 
        opacity: 0.12,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xe0f7fa, 
        shininess: 30, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xe6fffa, 
        shininess: 30, 
        transparent: true, 
        opacity: 0.15,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xfef7cd, 
        shininess: 30, 
        transparent: true, 
        opacity: 0.12,
        wireframe: true
      })
    ];

    const meshes: THREE.Mesh[] = [];

    // Create multiple floating objects
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position objects more to the sides and background
      const angle = (i / 8) * Math.PI * 2;
      const radius = 6 + Math.random() * 3;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = Math.sin(angle) * radius * 0.5;
      mesh.position.z = -2 - Math.random() * 3; // Push further back
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      // Store initial position for animation
      mesh.userData = {
        initialX: mesh.position.x,
        initialY: mesh.position.y,
        initialZ: mesh.position.z,
        floatSpeed: 0.2 + Math.random() * 0.2,
        rotationSpeed: 0.003 + Math.random() * 0.007
      };
      
      meshes.push(mesh);
      scene.add(mesh);
    }

    // Lighting setup - softer, more ambient
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Particle system for background effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate floating objects
      meshes.forEach((mesh, index) => {
        const userData = mesh.userData;
        
        // Floating motion
        mesh.position.y = userData.initialY + Math.sin(time * userData.floatSpeed + index) * 0.3;
        mesh.position.x = userData.initialX + Math.cos(time * userData.floatSpeed * 0.7 + index) * 0.2;
        
        // Rotation
        mesh.rotation.x += userData.rotationSpeed;
        mesh.rotation.y += userData.rotationSpeed * 0.7;
        mesh.rotation.z += userData.rotationSpeed * 0.5;
      });

      // Animate particles
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      // Camera subtle movement based on mouse position
      if (cameraRef.current) {
        cameraRef.current.position.x = Math.sin(time * 0.05) * 0.1;
        cameraRef.current.position.y = Math.cos(time * 0.08) * 0.05;
        cameraRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      meshes.forEach((mesh, index) => {
        const factor = (index % 3 + 1) * 0.1;
        mesh.rotation.x += mouseY * factor * 0.01;
        mesh.rotation.y += mouseX * factor * 0.01;
      });
    };

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerWidth;
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
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-5xl my-20 font-bold text-gray-900 leading-tight animate-fade-in-up">
            Your Premier{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
              Digital Marketing
            </span>{" "}
            Partner For{" "}
            <span 
              className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse" 
              style={{animationDelay: '0.5s'}}
            >
              Strategic Growth
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Krayons Group excels at forging strategic partnerships that connect advertisers with publishers, 
            delivering{" "}
            <strong className="text-blue-600">Performance Advertising</strong>, 
            <strong className="text-purple-600"> Content Solutions</strong> &{" "}
            <strong className="text-cyan-600">Influencer Marketing</strong> with measurable results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up animate-delay-300">
            <Button 
              onClick={handleGetInTouch} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Let's Collaborate
              <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
            </Button>
            <Button 
              onClick={handleViewWork} 
              variant="outline" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-400">
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors">Years of Excellence</div>
            </div>
            <div className="text-center group animate-delay-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent hover:scale-110 transition-transform">
                1000+
              </div>
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors">Strategic Partnerships</div>
            </div>
            <div className="text-center group animate-delay-200">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors">Markets Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;