import React, { useEffect, useRef, useState } from 'react';

// Mock ThreeDBackground component for this example
const ThreeDBackground = ({ opacity, particleCount, shapeCount, colorScheme, animationSpeed, className }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" />
  </div>
);

const Services = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const services = [
    {
      id: 'strategy',
      title: 'Strategic Planning',
      description: 'We develop comprehensive strategies that align with your business objectives, market dynamics, and competitive landscape to ensure sustainable growth.',
      icon: '🎯',
      gradient: 'from-slate-600 via-slate-700 to-slate-800',
      accentColor: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-slate-50',
      stats: '95% Success Rate'
    },
    {
      id: 'creative',
      title: 'Creative Excellence',
      description: 'Our award-winning creative team delivers innovative solutions that captivate audiences and drive meaningful engagement across all touchpoints.',
      icon: '🎨',
      gradient: 'from-purple-600 via-purple-700 to-indigo-800',
      accentColor: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      stats: '65+ Awards'
    },
    {
      id: 'digital',
      title: 'Digital Innovation',
      description: 'Leveraging cutting-edge technology and data-driven insights to create digital experiences that transform how customers interact with your brand.',
      icon: '💻',
      gradient: 'from-emerald-600 via-teal-700 to-cyan-800',
      accentColor: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-emerald-50',
      stats: '300% ROI Average'
    },
    {
      id: 'media',
      title: 'Media Strategy',
      description: 'Strategic media placement and optimization across traditional and digital channels to maximize reach, engagement, and conversion rates.',
      icon: '📺',
      gradient: 'from-orange-600 via-red-600 to-pink-700',
      accentColor: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      stats: '2B+ Impressions'
    },
    {
      id: 'events',
      title: 'Experience Design',
      description: 'Creating immersive brand experiences and memorable events that forge lasting connections between your brand and your audience.',
      icon: '🎪',
      gradient: 'from-violet-600 via-purple-700 to-fuchsia-800',
      accentColor: 'from-violet-600 to-purple-600',
      bgColor: 'bg-violet-50',
      stats: '500K+ Attendees'
    },
    {
      id: 'transformation',
      title: 'Brand Transformation',
      description: 'Complete brand evolution that positions your company for future success while honoring your core values and heritage.',
      icon: '✨',
      gradient: 'from-amber-600 via-orange-600 to-red-700',
      accentColor: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-50',
      stats: '100% Satisfaction'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in view
      const inView = rect.top < windowHeight && rect.bottom > 0;
      setIsInView(inView);

      if (!inView) return;

      // Calculate scroll progress through the section
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      
      const relativeScroll = scrollY - sectionTop + windowHeight * 0.5;
      const progress = Math.max(0, Math.min(1, relativeScroll / (sectionHeight * 0.8)));
      
      // Calculate active step with smooth transitions
      const stepProgress = progress * (services.length - 1);
      const newActiveStep = Math.floor(stepProgress);
      
      setActiveStep(Math.max(0, Math.min(services.length - 1, newActiveStep)));
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [services.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      style={{ minHeight: '300vh' }}
    >
      {/* 3D Background - Consistent with other components */}
      <ThreeDBackground 
        opacity={0.25}
        particleCount={120}
        shapeCount={15}
        colorScheme="mixed"
        animationSpeed={0.8}
        className={`opacity-25 ${isInView ? 'blur-0' : 'blur-sm'} transition-all duration-1000`}
      />

      {/* Sophisticated Background with 3D effect */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)
            `
          }}
        />
      </div>

      {/* Enhanced Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000 transform ${
              isInView ? 'scale-100 opacity-20' : 'scale-95 opacity-10'
            }`}
            style={{
              left: `${15 + i * 8}%`,
              top: `${20 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${i * 30}deg) translateZ(${i * 10}px)`
            }}
          >
            {/* 3D Geometric Shapes */}
            <div 
              className={`w-3 h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse hover:scale-150 transition-transform duration-300`}
              style={{
                boxShadow: `0 0 20px rgba(59, 130, 246, 0.3)`,
                animation: `float 3s ease-in-out infinite ${i * 0.5}s, spin 8s linear infinite`
              }}
            />
            {/* Additional 3D geometric elements */}
            {i % 3 === 0 && (
              <div 
                className="absolute -top-2 -left-2 w-6 h-6 border border-purple-300/30 rotate-45 animate-spin"
                style={{ animationDuration: '12s' }}
              />
            )}
            {i % 4 === 0 && (
              <div 
                className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-cyan-300/20 to-blue-400/20 transform rotate-12 animate-bounce"
                style={{ 
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            )}
          </div>
        ))}
        
        {/* Large 3D Accent Shapes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-blue-200/10 to-purple-300/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-3/4 right-10 w-32 h-32 bg-gradient-to-br from-purple-200/10 to-pink-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-200/10 to-blue-300/10 transform rotate-45 blur-lg animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Enhanced Header with 3D effects */}
        <div className={`text-center mb-24 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
        }`}>
          <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse mr-3"></span>
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Professional Services</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-6 leading-tight hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Your Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive approach to transforming your vision into measurable results through strategic excellence and innovative execution.
          </p>
        </div>

        {/* Professional Timeline with Split Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Spine with 3D depth */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent shadow-lg" />
            
            {/* Animated Progress Line with 3D glow */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transition-all duration-1000 ease-out"
              style={{
                height: `${Math.min(100, (activeStep + 1) * (100 / services.length))}%`,
                opacity: isInView ? 1 : 0,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
              }}
            >
              {/* Enhanced glowing tip with 3D effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl animate-pulse" 
                style={{ 
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)' 
                }}
              />
            </div>

            {/* Service Nodes with Split Layout */}
            {services.map((service, index) => (
              <div
                key={service.id}
                className="relative flex items-center mb-40 transition-all duration-1200 ease-out"
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Enhanced Timeline Node with 3D depth */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`relative w-20 h-20 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-2xl transition-all duration-700 hover:scale-125 hover:rotate-6 transform-gpu ${
                    index <= activeStep 
                      ? `bg-gradient-to-br ${service.gradient} scale-110 shadow-2xl` 
                      : 'bg-white scale-100 shadow-md hover:shadow-xl'
                  }`}
                  style={{
                    boxShadow: index <= activeStep 
                      ? '0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(168, 85, 247, 0.4), inset 0 2px 10px rgba(255,255,255,0.2)'
                      : '0 5px 20px rgba(0,0,0,0.1)'
                  }}>
                    {/* Enhanced node glow effect with 3D depth */}
                    {index <= activeStep && (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-full opacity-30 animate-ping`} />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-full opacity-20 blur-md animate-pulse`} />
                      </>
                    )}
                    
                    <span className={`relative z-10 transition-all duration-300 hover:scale-110 ${
                      index <= activeStep ? 'filter drop-shadow-lg' : 'grayscale opacity-60'
                    }`}>
                      {service.icon}
                    </span>
                  </div>
                  
                  {/* Enhanced Step Indicator with 3D effect */}
                  <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-500 hover:scale-110 ${
                    index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2'
                  }`}>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-500 shadow-lg ${
                      index <= activeStep 
                        ? `bg-gradient-to-r ${service.accentColor} text-white shadow-md` 
                        : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                    }`}
                    style={{
                      boxShadow: index <= activeStep ? '0 4px 15px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      STEP {index + 1}
                    </div>
                  </div>
                </div>

                {/* Alternating Layout */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left Side - Title Card */}
                    <div className="w-5/12 pr-20">
                      <div className={`relative group transition-all duration-1000 transform hover:scale-105 hover:-rotate-1 transform-gpu ${
                        index <= activeStep 
                          ? 'translate-y-0 opacity-100 scale-100' 
                          : index === activeStep + 1 
                            ? 'translate-y-4 opacity-70 scale-98'
                            : 'translate-y-8 opacity-40 scale-95'
                      }`}>
                        {/* Premium Card Glow for Title */}
                        {index === activeStep && (
                          <>
                            <div className={`absolute -inset-4 bg-gradient-to-br ${service.accentColor} opacity-20 blur-2xl rounded-3xl animate-pulse`} />
                            <div className={`absolute -inset-2 bg-gradient-to-br ${service.accentColor} opacity-10 blur-xl rounded-2xl`} />
                          </>
                        )}
                        
                        {/* Title Card */}
                        <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-200/50 group-hover:border-gray-300/50 transform-gpu ${
                          index === activeStep ? 'ring-1 ring-gray-200/50 shadow-xl' : ''
                        }`}
                        style={{
                          boxShadow: index === activeStep 
                            ? '0 20px 60px rgba(0,0,0,0.1), 0 8px 25px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
                            : '0 10px 30px rgba(0,0,0,0.05), 0 4px 15px rgba(0,0,0,0.04)'
                        }}>
                          <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center text-xl mr-4 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-3 transform-gpu ${
                              index <= activeStep ? 'animate-bounce' : ''
                            } border border-gray-100`}>
                              {service.icon}
                            </div>
                            <div>
                              <h3 className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}>
                                {service.title}
                              </h3>
                            </div>
                          </div>
                          
                          <div className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105 transform-gpu ${
                            index <= activeStep 
                              ? `bg-gradient-to-r ${service.accentColor} text-white` 
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}>
                            {service.stats}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Description Card */}
                    <div className="w-5/12 ml-auto pl-20">
                      <div className={`relative group transition-all duration-1000 transform hover:scale-105 hover:rotate-1 transform-gpu ${
                        index <= activeStep 
                          ? 'translate-y-0 opacity-100 scale-100' 
                          : index === activeStep + 1 
                            ? 'translate-y-4 opacity-70 scale-98'
                            : 'translate-y-8 opacity-40 scale-95'
                      }`}
                      style={{ transitionDelay: '150ms' }}>
                        {/* Premium Card Glow for Description */}
                        {index === activeStep && (
                          <>
                            <div className={`absolute -inset-4 bg-gradient-to-br ${service.accentColor} opacity-15 blur-2xl rounded-3xl animate-pulse`} />
                            <div className={`absolute -inset-2 bg-gradient-to-br ${service.accentColor} opacity-8 blur-xl rounded-2xl`} />
                          </>
                        )}
                        
                        {/* Description Card */}
                        <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-200/50 group-hover:border-gray-300/50 transform-gpu ${
                          index === activeStep ? 'ring-1 ring-gray-200/50 shadow-xl' : ''
                        }`}
                        style={{
                          boxShadow: index === activeStep 
                            ? '0 20px 60px rgba(0,0,0,0.1), 0 8px 25px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
                            : '0 10px 30px rgba(0,0,0,0.05), 0 4px 15px rgba(0,0,0,0.04)'
                        }}>
                          <p className="text-gray-600 leading-relaxed text-base font-light mb-4 hover:text-gray-700 transition-colors duration-300">
                            {service.description}
                          </p>
                          
                          {/* Professional Progress Bar with 3D effect */}
                          <div className="relative">
                            <div className="h-1 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                              <div className={`h-full bg-gradient-to-r ${service.accentColor} rounded-full transition-all duration-1000 ease-out ${
                                index <= activeStep ? 'w-full' : 'w-0'
                              }`}
                              style={{
                                boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
                              }}>
                                <div className="h-full w-full bg-white/30 animate-pulse" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side - Description Card */}
                    <div className="w-5/12 pr-20">
                      <div className={`relative group transition-all duration-1000 transform hover:scale-105 hover:-rotate-1 transform-gpu ${
                        index <= activeStep 
                          ? 'translate-y-0 opacity-100 scale-100' 
                          : index === activeStep + 1 
                            ? 'translate-y-4 opacity-70 scale-98'
                            : 'translate-y-8 opacity-40 scale-95'
                      }`}
                      style={{ transitionDelay: '150ms' }}>
                        {/* Premium Card Glow for Description */}
                        {index === activeStep && (
                          <>
                            <div className={`absolute -inset-4 bg-gradient-to-br ${service.accentColor} opacity-15 blur-2xl rounded-3xl animate-pulse`} />
                            <div className={`absolute -inset-2 bg-gradient-to-br ${service.accentColor} opacity-8 blur-xl rounded-2xl`} />
                          </>
                        )}
                        
                        {/* Description Card */}
                        <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-200/50 group-hover:border-gray-300/50 transform-gpu ${
                          index === activeStep ? 'ring-1 ring-gray-200/50 shadow-xl' : ''
                        }`}
                        style={{
                          boxShadow: index === activeStep 
                            ? '0 20px 60px rgba(0,0,0,0.1), 0 8px 25px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
                            : '0 10px 30px rgba(0,0,0,0.05), 0 4px 15px rgba(0,0,0,0.04)'
                        }}>
                          <p className="text-gray-600 leading-relaxed text-base font-light mb-4 hover:text-gray-700 transition-colors duration-300">
                            {service.description}
                          </p>
                          
                          {/* Professional Progress Bar with 3D effect */}
                          <div className="relative">
                            <div className="h-1 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                              <div className={`h-full bg-gradient-to-r ${service.accentColor} rounded-full transition-all duration-1000 ease-out ${
                                index <= activeStep ? 'w-full' : 'w-0'
                              }`}
                              style={{
                                boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
                              }}>
                                <div className="h-full w-full bg-white/30 animate-pulse" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Title Card */}
                    <div className="w-5/12 ml-auto pl-20">
                      <div className={`relative group transition-all duration-1000 transform hover:scale-105 hover:rotate-1 transform-gpu ${
                        index <= activeStep 
                          ? 'translate-y-0 opacity-100 scale-100' 
                          : index === activeStep + 1 
                            ? 'translate-y-4 opacity-70 scale-98'
                            : 'translate-y-8 opacity-40 scale-95'
                      }`}>
                        {/* Premium Card Glow for Title */}
                        {index === activeStep && (
                          <>
                            <div className={`absolute -inset-4 bg-gradient-to-br ${service.accentColor} opacity-20 blur-2xl rounded-3xl animate-pulse`} />
                            <div className={`absolute -inset-2 bg-gradient-to-br ${service.accentColor} opacity-10 blur-xl rounded-2xl`} />
                          </>
                        )}
                        
                        {/* Title Card */}
                        <div className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-200/50 group-hover:border-gray-300/50 transform-gpu ${
                          index === activeStep ? 'ring-1 ring-gray-200/50 shadow-xl' : ''
                        }`}
                        style={{
                          boxShadow: index === activeStep 
                            ? '0 20px 60px rgba(0,0,0,0.1), 0 8px 25px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
                            : '0 10px 30px rgba(0,0,0,0.05), 0 4px 15px rgba(0,0,0,0.04)'
                        }}>
                          <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center text-xl mr-4 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-3 transform-gpu ${
                              index <= activeStep ? 'animate-bounce' : ''
                            } border border-gray-100`}>
                              {service.icon}
                            </div>
                            <div>
                              <h3 className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}>
                                {service.title}
                              </h3>
                            </div>
                          </div>
                          
                          <div className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full transition-all duration-500 shadow-md hover:shadow-lg hover:scale-105 transform-gpu ${
                            index <= activeStep 
                              ? `bg-gradient-to-r ${service.accentColor} text-white` 
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}>
                            {service.stats}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional 3D floating elements specific to services */}
        <div className="absolute top-32 left-16 w-4 h-4 bg-blue-500/20 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-64 right-20 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-24 w-2 h-2 bg-cyan-500/30 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-64 right-16 w-5 h-5 bg-pink-500/20 rounded-full animate-ping opacity-30" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-8 w-3 h-3 bg-green-500/25 rounded-full animate-pulse opacity-35" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-3/4 right-12 w-4 h-4 bg-yellow-500/20 rounded-full animate-bounce opacity-45" style={{animationDelay: '2s'}}></div>
      </div>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;