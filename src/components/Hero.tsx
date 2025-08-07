import React from 'react';
import { Button } from "@/components/ui/button";
import ThreeDBackground from "@/components/3d/ThreeDBackground";

const Hero = () => {
  const handleGetInTouch = () => {
    window.location.href = 'mailto:reachus@krayons.co.in';
  };

  const handleViewWork = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Three.js Canvas Container */}
      <ThreeDBackground 
        opacity={0.2}
        particleCount={100}
        shapeCount={8}
        colorScheme="mixed"
        animationSpeed={0.8}
        className="z-0"
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
                200+
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