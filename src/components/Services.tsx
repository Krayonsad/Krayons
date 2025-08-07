import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      {/* Sophisticated Background */}
      <div className="absolute inset-0 opacity-40">
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

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Enhanced Header */}
        <div className={`text-center mb-24 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200/50 shadow-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse mr-3"></span>
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Professional Services</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Your Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive approach to transforming your vision into measurable results through strategic excellence and innovative execution.
          </p>
        </div>

        {/* Professional Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Spine */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            
            {/* Animated Progress Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transition-all duration-1000 ease-out"
              style={{
                height: `${Math.min(100, (activeStep + 1) * (100 / services.length))}%`,
                opacity: isInView ? 1 : 0
              }}
            >
              {/* Glowing tip */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg animate-pulse" />
            </div>

            {/* Service Nodes */}
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative flex items-center mb-40 transition-all duration-1200 ease-out ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Enhanced Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`relative w-20 h-20 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-2xl transition-all duration-700 ${
                    index <= activeStep 
                      ? `bg-gradient-to-br ${service.gradient} scale-110 shadow-2xl` 
                      : 'bg-white scale-100 shadow-md'
                  }`}>
                    {/* Node glow effect */}
                    {index <= activeStep && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-full opacity-30 animate-ping`} />
                    )}
                    
                    <span className={`relative z-10 ${index <= activeStep ? 'filter drop-shadow-sm' : 'grayscale opacity-60'}`}>
                      {service.icon}
                    </span>
                  </div>
                  
                  {/* Enhanced Step Indicator */}
                  <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                    index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2'
                  }`}>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-500 ${
                      index <= activeStep 
                        ? `bg-gradient-to-r ${service.accentColor} text-white shadow-md` 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      STEP {index + 1}
                    </div>
                  </div>
                </div>

                {/* Enhanced Service Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-20' : 'ml-auto pl-20'}`}>
                  <div className={`relative group transition-all duration-1000 transform ${
                    index <= activeStep 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : index === activeStep + 1 
                        ? 'translate-y-4 opacity-70 scale-98'
                        : 'translate-y-8 opacity-40 scale-95'
                  }`}>
                    {/* Premium Card Glow */}
                    {index === activeStep && (
                      <>
                        <div className={`absolute -inset-4 bg-gradient-to-br ${service.accentColor} opacity-20 blur-2xl rounded-3xl animate-pulse`} />
                        <div className={`absolute -inset-2 bg-gradient-to-br ${service.accentColor} opacity-10 blur-xl rounded-2xl`} />
                      </>
                    )}
                    
                    {/* Main Professional Card */}
                    <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-200/50 group-hover:border-gray-300/50 ${
                      index === activeStep ? 'ring-1 ring-gray-200/50 shadow-xl' : ''
                    }`}>
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center">
                          <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center text-2xl mr-5 transition-all duration-500 ${
                            index <= activeStep ? 'animate-bounce' : ''
                          } shadow-sm border border-gray-100`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-1`}>
                              {service.title}
                            </h3>
                            <div className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full transition-all duration-500 ${
                              index <= activeStep 
                                ? `bg-gradient-to-r ${service.accentColor} text-white` 
                                : 'bg-gray-100 text-gray-500'
                            }`}>
                              {service.stats}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Description */}
                      <p className="text-gray-600 leading-relaxed text-base font-light mb-6">
                        {service.description}
                      </p>
                      
                      {/* Professional Progress Bar */}
                      <div className="relative">
                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${service.accentColor} rounded-full transition-all duration-1000 ease-out ${
                            index <= activeStep ? 'w-full' : 'w-0'
                          }`}>
                            <div className="h-full w-full bg-white/30 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;