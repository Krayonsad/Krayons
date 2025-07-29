import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, MessageSquare, Radio, Database, TrendingUp, Globe, Mail, FileText } from "lucide-react";
import * as THREE from 'three';

const Services = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(false);

  // Image paths for service images from public/Images folder
  const serviceImages = {
    performance: "/Images/Performance.png",
    content: "/Images/Content.png",
    influencer: "/Images/Influencer.png",
    media: "/Images/Media.png",
    sms: "/Images/SMS.png",
    email: "/Images/Email.png"
  };

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Advertising",
      description: "Payment only for successful transactions like leads, sales, downloads, and applications. Risk-free digital marketing with measurable outcomes.",
      image: serviceImages.performance,
      features: ["Cost per Lead", "Cost per Sale", "Cost per Download", "Cost per Application"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Advertising",
      description: "Tailored content management solutions that streamline workflow, drive engagement, and achieve marketing goals.",
      image: serviceImages.content,
      features: ["Content Marketing", "Content Websites", "Content Strategy", "Native Advertising"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Advertising",
      description: "Collaborate with diverse influencers and content creators to connect with new audiences and achieve positive ROI.",
      image: serviceImages.influencer,
      features: ["Campaign Management", "ROI Focused", "Diverse Network", "Full Lifecycle Support"]
    }
  ];

  const additionalServices = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Media Advertising",
      description: "Comprehensive media agency services across all advertising channels - online, airport, newspaper, magazine, outdoor, radio, and television.",
      image: serviceImages.media,
      features: ["Multi-Channel Reach", "Traditional & Digital", "Brand Visibility", "Audience Targeting"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "SMS Marketing (India Only)",
      description: "70 million contacts database with advanced SMS marketing capabilities, A2P integration, 2-way SMS, and global connectivity.",
      image: serviceImages.sms,
      features: ["70M+ Database", "A2P Integration", "2-Way SMS", "Global Connectivity"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email & Social Media",
      description: "Strategic email marketing campaigns and social media management to maximize your digital reach and engagement.",
      image: serviceImages.email,
      features: ["Email Campaigns", "Social Management", "Digital Reach", "Engagement Analytics"]
    }
  ];

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

    // Create floating geometric shapes for services
    const geometries = [
      new THREE.DodecahedronGeometry(0.6, 0),
      new THREE.IcosahedronGeometry(0.7, 0),
      new THREE.OctahedronGeometry(0.5, 0),
      new THREE.TetrahedronGeometry(0.8, 0),
      new THREE.BoxGeometry(0.6, 0.6, 0.6),
      new THREE.ConeGeometry(0.5, 1, 8)
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x3b82f6, 
        shininess: 50, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x8b5cf6, 
        shininess: 50, 
        transparent: true, 
        opacity: 0.25,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x06b6d4, 
        shininess: 50, 
        transparent: true, 
        opacity: 0.2,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x10b981, 
        shininess: 50, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xf59e0b, 
        shininess: 50, 
        transparent: true, 
        opacity: 0.25,
        wireframe: true
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xef4444, 
        shininess: 50, 
        transparent: true, 
        opacity: 0.2,
        wireframe: true
      })
    ];

    const meshes: THREE.Mesh[] = [];

    // Create floating objects positioned around the content area
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position objects in multiple layers and areas
      const layer = Math.floor(i / 5); // 3 layers of 5 objects each
      const angle = (i % 5) * (Math.PI * 2 / 5);
      
      if (layer === 0) {
        // Top layer - above content
        mesh.position.x = Math.cos(angle) * (6 + Math.random() * 2);
        mesh.position.y = 4 + Math.random() * 2;
        mesh.position.z = -1 + Math.random() * 2;
      } else if (layer === 1) {
        // Side layers - beside content
        mesh.position.x = Math.cos(angle) * (8 + Math.random() * 3);
        mesh.position.y = Math.sin(angle) * 3;
        mesh.position.z = Math.random() * 3;
      } else {
        // Background layer
        mesh.position.x = Math.cos(angle) * (10 + Math.random() * 4);
        mesh.position.y = Math.sin(angle) * 4;
        mesh.position.z = -2 - Math.random() * 2;
      }
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      // Store initial position for animation
      mesh.userData = {
        initialX: mesh.position.x,
        initialY: mesh.position.y,
        initialZ: mesh.position.z,
        floatSpeed: 0.3 + Math.random() * 0.3,
        rotationSpeed: 0.005 + Math.random() * 0.01,
        offsetPhase: Math.random() * Math.PI * 2
      };
      
      meshes.push(mesh);
      scene.add(mesh);
    }

    // Lighting setup - brighter to make objects more visible
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 0.5, 15);
    pointLight.position.set(-5, 3, 5);
    scene.add(pointLight);

    // Subtle particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 60;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 25;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.4
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate floating objects with different patterns
      meshes.forEach((mesh, index) => {
        const userData = mesh.userData;
        
        // More visible floating motion
        mesh.position.y = userData.initialY + Math.sin(time * userData.floatSpeed + userData.offsetPhase) * 0.5;
        mesh.position.x = userData.initialX + Math.cos(time * userData.floatSpeed * 0.8 + userData.offsetPhase) * 0.3;
        mesh.position.z = userData.initialZ + Math.sin(time * userData.floatSpeed * 0.6 + userData.offsetPhase) * 0.2;
        
        // Gentle rotation
        mesh.rotation.x += userData.rotationSpeed;
        mesh.rotation.y += userData.rotationSpeed * 0.8;
        mesh.rotation.z += userData.rotationSpeed * 0.6;
      });

      // Animate particles
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Very subtle camera movement
      if (cameraRef.current) {
        cameraRef.current.position.x = Math.sin(time * 0.03) * 0.05;
        cameraRef.current.position.y = Math.cos(time * 0.04) * 0.03;
        cameraRef.current.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Mouse interaction - very subtle
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      meshes.forEach((mesh, index) => {
        const factor = (index % 4 + 1) * 0.05;
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

      if (observer && mountRef.current) {
        observer.unobserve(mountRef.current);
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
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0"
        style={{ 
          pointerEvents: 'none',
          filter: isVisible ? 'blur(0px)' : 'blur(2px)',
          transition: 'filter 1s ease-in-out'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className={`text-xl text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Comprehensive digital marketing solutions that connect advertisers with publishers, driving measurable results through strategic partnerships and innovative campaigns.
          </p>
        </div>

        {/* Main Services with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{
                transitionDelay: `${index * 200 + 300}ms`,
              }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg bg-white backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-rotate-1 transform-gpu">
                
                <div className="relative h-48 overflow-hidden rounded-t-lg z-10 bg-white flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu">
                    <div className="group-hover:animate-bounce bg-blue-600/90 p-2 rounded-lg backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="relative z-20">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base group-hover:text-gray-700 transition-colors">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-20">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300" style={{transitionDelay: `${idx * 0.1}s`}}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 p-[1px]">
                    <div className="w-full h-full rounded-lg bg-white"></div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{
                transitionDelay: `${(index + 3) * 200 + 300}ms`,
              }}
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg bg-white backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-rotate-1 transform-gpu">
                
                <div className="relative h-48 overflow-hidden rounded-t-lg z-10 bg-white flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu">
                    <div className="group-hover:animate-bounce bg-blue-600/90 p-2 rounded-lg backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="relative z-20">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base group-hover:text-gray-700 transition-colors">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-20">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300" style={{transitionDelay: `${idx * 0.1}s`}}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 p-[1px]">
                    <div className="w-full h-full rounded-lg bg-white"></div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
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

export default Services;