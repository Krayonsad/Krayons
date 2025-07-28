import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import * as THREE from 'three';

const About = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Years of Excellence",
      description: "Leading digital marketing solutions since 2014"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
      label: "Strategic Partnerships",
      description: "Successfully connecting advertisers and publishers"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: "Markets Reached",
      description: "Global digital marketing presence"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "95%",
      label: "Project Success Rate",
      description: "Consistently exceeding digital marketing objectives"
    }
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 8, 6),
      new THREE.ConeGeometry(0.6, 1.2, 8),
      new THREE.OctahedronGeometry(0.8),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10b981, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
    ];

    const meshes = [];
    
    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 0.5) * 10;
      
      // Random rotation speeds
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatOffset: Math.random() * Math.PI * 2,
      };
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animate meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;
        
        // Floating motion
        mesh.position.y += Math.sin(time * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 0.01;
      });
      
      // Animate particles
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Rotate entire particle system
      particles.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (observer && mountRef.current) {
        observer.unobserve(mountRef.current);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* 3D Background */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 opacity-30"
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: isVisible ? 'blur(0px)' : 'blur(2px)',
          transition: 'filter 1s ease-in-out'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content with Animation */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">KRAYONS GROUP</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <strong className="text-foreground">Krayons Group</strong> is your premier partner for 
                <strong className="text-foreground"> digital marketing, integrated communication, and project-based solutions</strong>. 
                We excel at forging strategic partnerships that effectively connect clients, facilitate seamless 
                communication, and deliver exceptional project outcomes.
              </p>
              
              <p className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                Our expertise spans <strong className="text-foreground">cutting-edge digital strategies</strong>, comprehensive 
                communication across all channels, and tailored project management that consistently surpasses expectations. 
                We don't just meet industry standards – <strong className="text-foreground">we set them</strong>.
              </p>
              
              <p className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                Krayons is more than an affiliate marketing platform; we are <strong className="text-foreground">architects 
                of successful communication strategies</strong> and project-based collaborations. Our team comprises seasoned 
                professionals who understand the intricacies of the digital landscape.
              </p>
            </div>

            {/* Mission Statement with 3D hover effect */}
            <div className={`mt-8 p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-lg border-l-4 border-blue-500 transition-all duration-1000 delay-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To facilitate the connection between advertisers and publishers, enabling them to attain their 
                digital marketing objectives through our dynamic platform that broadens reach and monetizes online assets.
              </p>
            </div>
          </div>

          {/* Achievements Grid with 3D effects */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 200 + 300}ms`,
                }}
              >
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm hover:from-blue-50/80 hover:to-purple-50/50 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/20 transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-cyan-400/10 transition-all duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 rounded-full text-blue-600 group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu">
                        <div className="group-hover:animate-bounce">
                          {achievement.icon}
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 cursor-default">
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {achievement.description}
                    </div>
                  </CardContent>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-[1px]">
                      <div className="w-full h-full rounded-lg bg-white/90"></div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-cyan-500 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default About;