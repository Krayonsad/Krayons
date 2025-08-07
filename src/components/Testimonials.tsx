import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      quote: "KRAYONS transformed our product launch from a simple announcement to an unforgettable experience. Their strategic approach and attention to detail resulted in 300% higher engagement than our previous launches.",
      author: "Priya Sharma",
      position: "CMO",
      company: "TechVantage Solutions",
      rating: 5,
      colorScheme: "from-red-400 to-pink-500",
      bgGradient: "from-red-50/80 via-pink-50/60 to-rose-50/80",
      hoverGradient: "hover:from-red-100/90 hover:via-pink-100/70 hover:to-rose-100/90"
    },
    {
      quote: "Working with KRAYONS for our international expansion was game-changing. They understood our brand perfectly and created culturally relevant experiences that resonated with Indian audiences while maintaining our global identity.",
      author: "Marcus Johnson",
      position: "Global Marketing Director",
      company: "Luxe Fashion International",
      rating: 5,
      colorScheme: "from-orange-400 to-amber-500",
      bgGradient: "from-orange-50/80 via-amber-50/60 to-yellow-50/80",
      hoverGradient: "hover:from-orange-100/90 hover:via-amber-100/70 hover:to-yellow-100/90"
    },
    {
      quote: "The data-driven insights and ROI tracking that KRAYONS provided were exceptional. We could see exactly how our investment translated into business results. Their experiential marketing campaign delivered 250% ROI.",
      author: "Rajesh Gupta",
      position: "Founder & CEO",
      company: "GreenTech Innovations",
      rating: 5,
      colorScheme: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50/80 via-teal-50/60 to-green-50/80",
      hoverGradient: "hover:from-emerald-100/90 hover:via-teal-100/70 hover:to-green-100/90"
    },
    {
      quote: "KRAYONS doesn't just execute events – they craft experiences. Our corporate summit became a catalyst for company-wide digital transformation. The engagement levels and employee feedback were outstanding.",
      author: "Sarah Chen",
      position: "VP People & Culture",
      company: "Global Dynamics Corp",
      rating: 5,
      colorScheme: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50/80 via-indigo-50/60 to-slate-50/80",
      hoverGradient: "hover:from-blue-100/90 hover:via-indigo-100/70 hover:to-slate-100/90"
    },
    {
      quote: "From concept to execution, KRAYONS exceeded every expectation. Their team's creativity combined with strategic thinking helped us achieve our sustainability goals while creating buzz in the market.",
      author: "Ananya Reddy",
      position: "Marketing Head",
      company: "EcoBeauty Brand",
      rating: 5,
      colorScheme: "from-purple-400 to-violet-500",
      bgGradient: "from-purple-50/80 via-violet-50/60 to-fuchsia-50/80",
      hoverGradient: "hover:from-purple-100/90 hover:via-violet-100/70 hover:to-fuchsia-100/90"
    },
    {
      quote: "The level of professionalism and innovation KRAYONS brings is unmatched. They turned our vision into reality and helped us connect with our audience in ways we never thought possible.",
      author: "David Thompson",
      position: "Director of Marketing",
      company: "Innovation Labs",
      rating: 5,
      colorScheme: "from-cyan-400 to-sky-500",
      bgGradient: "from-cyan-50/80 via-sky-50/60 to-blue-50/80",
      hoverGradient: "hover:from-cyan-100/90 hover:via-sky-100/70 hover:to-blue-100/90"
    }
  ];

  const brandLogos = [
    { 
      name: "Ministry of Jal Shakti", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png",
      category: "Government",
      colorScheme: "from-red-100 to-orange-100"
    },
    { 
      name: "Bharti Airtel", 
      logo: "https://images.seeklogo.com/logo-png/16/2/airtel-logo-png_seeklogo-168291.png",
      category: "Telecommunications",
      colorScheme: "from-red-100 to-pink-100"
    },
    { 
      name: "Mahindra COMVIVA", 
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo-2012.png",
      category: "Technology Solutions",
      colorScheme: "from-orange-100 to-yellow-100"
    },
    { 
      name: "MACROKIOSK", 
      logo: "https://macrokiosk.com/assets/img/og-img/og-image-macrokiosk.png",
      category: "Digital Payments",
      colorScheme: "from-green-100 to-emerald-100"
    },
    { 
      name: "India Tourism Development Corporation", 
      logo: "https://e7.pngegg.com/pngimages/423/867/png-clipart-india-tourism-development-corporation-limited-company-civil-engineering-india-brand-equity-foundation-cost-effective-company-text.png",
      category: "Tourism",
      colorScheme: "from-blue-100 to-cyan-100"
    },
    { 
      name: "Namami Gange", 
      logo: "https://nmcg.nic.in/logo/Namami%20Gange%20Logo_Hindi.jpg",
      category: "Environmental Initiative",
      colorScheme: "from-teal-100 to-green-100"
    },
    { 
      name: "DigiTantra", 
      logo: "https://cdn.prod.website-files.com/64b3e49ec17f22371194291a/65531c82fd58535248724d82_OG-Image.png",
      category: "Digital Solutions",
      colorScheme: "from-purple-100 to-violet-100"
    },
    { 
      name: "Mobi2Fun", 
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1450613668/s2m8wz2zafohudracjsz.png",
      category: "Mobile Technology",
      colorScheme: "from-indigo-100 to-blue-100"
    },
    { 
      name: "Infobip", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qXUM4Q3p99Rk6ENjtjMbaJYGFsbwtuYUOw&s",
      category: "Communications Platform",
      colorScheme: "from-pink-100 to-rose-100"
    },
    { 
      name: "Ministry of Urban Development", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91M-t3DBHQyuMKjVybiqiXOrhB1dTqADNKA&s",
      category: "Government",
      colorScheme: "from-yellow-100 to-amber-100"
    },
    { 
      name: "Osho World", 
      logo: "https://images.seeklogo.com/logo-png/10/1/osho-logo-png_seeklogo-104432.png",
      category: "Spiritual & Wellness",
      colorScheme: "from-lime-100 to-green-100"
    },
    { 
      name: "WOTR", 
      logo: "https://projectheena.com/uploads/ngo/31147029532871/profileImage/images/wotr-pune.jpg",
      category: "Water & Development",
      colorScheme: "from-cyan-100 to-teal-100"
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      category: "Technology",
      colorScheme: "from-red-100 via-yellow-100 to-blue-100"
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      category: "Technology",
      colorScheme: "from-gray-100 to-slate-100"
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      category: "E-commerce",
      colorScheme: "from-orange-100 to-yellow-100"
    }
  ];

  useEffect(() => {
    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 overflow-hidden">
      {/* Colorful floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-300/15 to-cyan-300/15 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-green-300/20 to-emerald-300/20 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about their experience with 
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> KRAYONS GROUP</span>.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{
                transitionDelay: `${index * 150 + 500}ms`,
              }}
            >
              <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${testimonial.bgGradient} backdrop-blur-sm ${testimonial.hoverGradient} transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transform-gpu h-full`}>
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.colorScheme} p-[2px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="w-full h-full rounded-lg bg-white/95"></div>
                </div>
                
                <CardContent className="p-6 relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Quote className={`w-6 h-6 text-purple-500 group-hover:text-pink-500 transition-colors duration-300`} />
                    <div className="flex ml-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:fill-yellow-400 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 flex-grow group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mt-auto">
                    <div className="font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-300 text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-pink-600 transition-colors duration-300 font-medium">
                      {testimonial.position}
                    </div>
                    <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Three-Layer Infinite Scrolling Brand Logos */}
        <div className={`text-center transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} overflow-hidden`}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-12">
            Trusted by <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent font-bold">Leading Brands</span>
          </h3>
          
          {/* First Row - Scroll Right */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex animate-scroll-right space-x-8 whitespace-nowrap">
              {[...brandLogos.slice(0, 6), ...brandLogos.slice(0, 6)].map((brand, index) => (
                <div 
                  key={`row1-${index}`}
                  className={`flex-shrink-0 bg-gradient-to-br ${brand.colorScheme} backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer border border-white/50 min-w-[180px]`}
                >
                  <div className="flex items-center justify-center h-16 mb-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-12 max-w-24 object-contain filter group-hover:brightness-110 group-hover:saturate-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="logo-fallback hidden text-center">
                      <div className="text-gray-700 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 text-center group-hover:text-purple-700 transition-colors font-medium">
                    {brand.category}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Left */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex animate-scroll-left space-x-8 whitespace-nowrap">
              {[...brandLogos.slice(6, 12), ...brandLogos.slice(6, 12)].map((brand, index) => (
                <div 
                  key={`row2-${index}`}
                  className={`flex-shrink-0 bg-gradient-to-br ${brand.colorScheme} backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer border border-white/50 min-w-[180px]`}
                >
                  <div className="flex items-center justify-center h-16 mb-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-12 max-w-24 object-contain filter group-hover:brightness-110 group-hover:saturate-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="logo-fallback hidden text-center">
                      <div className="text-gray-700 font-semibold text-sm group-hover:text-orange-700 transition-colors">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 text-center group-hover:text-orange-700 transition-colors font-medium">
                    {brand.category}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Row - Scroll Right (Faster) */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right-fast space-x-8 whitespace-nowrap">
              {[...brandLogos.slice(12, 16), ...brandLogos.slice(0, 4), ...brandLogos.slice(12, 16), ...brandLogos.slice(0, 4)].map((brand, index) => (
                <div 
                  key={`row3-${index}`}
                  className={`flex-shrink-0 bg-gradient-to-br ${brand.colorScheme} backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer border border-white/50 min-w-[180px]`}
                >
                  <div className="flex items-center justify-center h-16 mb-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-12 max-w-24 object-contain filter group-hover:brightness-110 group-hover:saturate-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="logo-fallback hidden text-center">
                      <div className="text-gray-700 font-semibold text-sm group-hover:text-cyan-700 transition-colors">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 text-center group-hover:text-cyan-700 transition-colors font-medium">
                    {brand.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced colorful floating elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-ping opacity-70 shadow-lg"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse opacity-60 shadow-lg"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-bounce opacity-80 shadow-lg"></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-ping opacity-60 shadow-lg" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse opacity-50 shadow-lg" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-5 w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-bounce opacity-70 shadow-lg" style={{animationDelay: '1.5s'}}></div>

      {/* Custom animations */}
      <style>
        {`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scroll-right-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(-1deg); }
          66% { transform: translateY(-25px) rotate(1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(0.5deg); }
        }
        .animate-scroll-right { animation: scroll-right 30s linear infinite; }
        .animate-scroll-left { animation: scroll-left 35s linear infinite; }
        .animate-scroll-right-fast { animation: scroll-right-fast 25s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default Testimonials;