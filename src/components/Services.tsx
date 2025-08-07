import React, { useState, useEffect } from 'react';
import { Lightbulb, Palette, Smartphone, Megaphone, Calendar, Star } from 'lucide-react';

const Services = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const services = [
    {
      id: 1,
      title: "Strategy",
      description: "Strategy is the foundation of everything we do at Crayons. Our strategic thinking is human-centric and focuses on solutions that go beyond conventions, media, and formats.",
      icon: Lightbulb,
      colorFrom: "#3b82f6",
      colorTo: "#60a5fa"
    },
    {
      id: 2,
      title: "Creative",
      description: "At Crayons we produce creatives which not only win consumers hearts but awards accolades too. More than 65 Awards in last 3 years.",
      icon: Palette,
      colorFrom: "#ec4899",
      colorTo: "#f472b6"
    },
    {
      id: 3,
      title: "Digital",
      description: "Everyone has digital technology. It's what you do with it that matters.",
      icon: Smartphone,
      colorFrom: "#10b981",
      colorTo: "#34d399"
    },
    {
      id: 4,
      title: "Media",
      description: "It's not only what you put in your ad that matters, but where you put your ad.",
      icon: Megaphone,
      colorFrom: "#f59e0b",
      colorTo: "#fbbf24"
    },
    {
      id: 5,
      title: "Events",
      description: "When events need to be truly eventful.",
      icon: Calendar,
      colorFrom: "#6366f1",
      colorTo: "#818cf8"
    },
    {
      id: 6,
      title: "WOW",
      description: "It's all about location, location, location.",
      icon: Star,
      colorFrom: "#8b5cf6",
      colorTo: "#a78bfa"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      if (elementBottom < 0 || elementTop > windowHeight) {
        return;
      }
      
      const scrolled = Math.max(0, windowHeight - elementTop);
      const totalScrollableHeight = elementHeight + windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCarPosition = (progress) => {
    const totalServices = services.length;
    const currentService = Math.floor(progress * totalServices);
    const serviceProgress = (progress * totalServices) % 1;
    
    return {
      currentService: Math.min(currentService, totalServices - 1),
      serviceProgress
    };
  };

  const { currentService, serviceProgress } = getCarPosition(scrollProgress);

  // Calculate car position along the curved path
  const getCarTransform = (progress) => {
    const roadHeight = (services.length - 1) * 250;
    const carY = progress * roadHeight;
    const curveX = Math.sin(progress * Math.PI * 3) * 30; // Gentle curve effect
    return `translate(${curveX}px, ${carY}px)`;
  };

  return (
    <section id="services-section" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Services Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our roadmap of excellence as we guide you through our comprehensive service offerings
          </p>
        </div>

        <div className="relative">
          {/* Road SVG */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
            <svg
              width="400"
              height={`${(services.length - 1) * 250 + 200}`}
              viewBox={`0 0 400 ${(services.length - 1) * 250 + 200}`}
              className="drop-shadow-sm"
            >
              {/* Road Path */}
              <path
                d={`M 200 50 ${services.map((_, index) => 
                  index === 0 ? '' : `Q ${200 + (index % 2 === 0 ? -50 : 50)} ${50 + index * 250 - 125} 200 ${50 + index * 250}`
                ).join(' ')}`}
                stroke="#e2e8f0"
                strokeWidth="80"
                fill="none"
                className="drop-shadow-md"
              />
              
              {/* Road center dashed line */}
              <path
                d={`M 200 50 ${services.map((_, index) => 
                  index === 0 ? '' : `Q ${200 + (index % 2 === 0 ? -50 : 50)} ${50 + index * 250 - 125} 200 ${50 + index * 250}`
                ).join(' ')}`}
                stroke="#f8fafc"
                strokeWidth="3"
                fill="none"
                strokeDasharray="25,15"
              />
              
              {/* Service Stop Points */}
              {services.map((_, index) => (
                <circle
                  key={index}
                  cx="200"
                  cy={50 + index * 250}
                  r="8"
                  fill="#cbd5e1"
                  className="drop-shadow-sm"
                />
              ))}
              
              {/* Animated Car */}
              <g
                style={{
                  transform: getCarTransform(scrollProgress),
                  transformOrigin: '200px 50px',
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Car Body */}
                <rect
                  x="185"
                  y="-15"
                  width="30"
                  height="20"
                  rx="3"
                  fill="#3b82f6"
                  className="drop-shadow-lg"
                />
                
                {/* Car Top */}
                <rect
                  x="190"
                  y="-20"
                  width="20"
                  height="10"
                  rx="2"
                  fill="#1e40af"
                />
                
                {/* Car Windows */}
                <rect
                  x="192"
                  y="-18"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#e0f2fe"
                />
                <rect
                  x="202"
                  y="-18"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#e0f2fe"
                />
                
                {/* Car Wheels */}
                <circle cx="190" cy="5" r="4" fill="#1f2937" />
                <circle cx="210" cy="5" r="4" fill="#1f2937" />
                <circle cx="190" cy="5" r="2" fill="#6b7280" />
                <circle cx="210" cy="5" r="2" fill="#6b7280" />
                
                {/* Headlights */}
                <circle cx="186" cy="-8" r="2" fill="#fef3c7" className="opacity-80" />
                <circle cx="186" cy="-2" r="2" fill="#fef3c7" className="opacity-80" />
              </g>
            </svg>
          </div>

          {/* Service Cards */}
          <div className="relative z-20 space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index <= currentService;
              const isCurrentlyActive = index === currentService;
              const cardOffset = index % 2 === 0 ? 'justify-start' : 'justify-end';
              
              return (
                <div
                  key={service.id}
                  className={`flex items-center ${cardOffset} transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-8'
                  }`}
                >
                  <div
                    className={`max-w-md p-8 rounded-3xl backdrop-blur-sm border-2 border-white transform transition-all duration-500 ${
                      isCurrentlyActive 
                        ? 'scale-105 shadow-2xl' 
                        : isActive 
                        ? 'scale-100 shadow-xl' 
                        : 'scale-95 shadow-lg'
                    } ${
                      index % 2 === 0 ? 'lg:mr-32 ml-8' : 'lg:ml-32 mr-8'
                    }`}
                    style={{
                      background: isActive 
                        ? `linear-gradient(135deg, ${service.colorFrom}, ${service.colorTo})`
                        : 'rgba(255, 255, 255, 0.95)',
                      boxShadow: isCurrentlyActive 
                        ? `0 25px 50px -12px ${service.colorFrom}40` 
                        : isActive 
                        ? `0 20px 25px -5px ${service.colorFrom}20`
                        : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`p-4 rounded-2xl ${
                        isActive ? 'bg-white bg-opacity-20' : 'bg-gray-50'
                      }`}>
                        <Icon 
                          size={28} 
                          className={isActive ? 'text-white' : 'text-gray-600'} 
                        />
                      </div>
                      <span className={`ml-4 text-sm font-semibold px-3 py-1 rounded-full ${
                        isActive ? 'text-white bg-white bg-opacity-20' : 'text-gray-500 bg-gray-100'
                      }`}>
                        0{service.id}
                      </span>
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-4 ${
                      isActive ? 'text-white' : 'text-gray-800'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-base leading-relaxed ${
                      isActive ? 'text-white text-opacity-90' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                    
                    {isCurrentlyActive && (
                      <div className="mt-6">
                        <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mb-2">
                          <div 
                            className="bg-white h-2 rounded-full transition-all duration-500"
                            style={{ width: `${serviceProgress * 100}%` }}
                          />
                        </div>
                        <p className="text-white text-opacity-70 text-sm">
                          Progress: {Math.round(serviceProgress * 100)}%
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Progress Indicator */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-3 shadow-lg">
          <div className="flex flex-col space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                  index <= currentService 
                    ? 'scale-110 shadow-md border-white' 
                    : 'scale-75 bg-gray-200 border-gray-300'
                }`}
                style={{
                  backgroundColor: index <= currentService ? service.colorFrom : '',
                  boxShadow: index <= currentService ? `0 0 15px ${service.colorFrom}60` : 'none'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Light Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 rounded-full opacity-25 animate-pulse" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-5 w-40 h-40 bg-gradient-to-br from-green-50 via-teal-100 to-blue-100 rounded-full opacity-30 animate-bounce" />
        
        {/* Road side elements */}
        <div className="absolute top-32 right-20 w-8 h-24 bg-gray-200 rounded opacity-40" />
        <div className="absolute top-80 left-16 w-6 h-20 bg-gray-200 rounded opacity-40" />
        <div className="absolute bottom-40 right-32 w-10 h-28 bg-gray-200 rounded opacity-40" />
      </div>
    </section>
  );
};

export default Services;