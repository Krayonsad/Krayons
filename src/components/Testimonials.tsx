import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "KRAYONS transformed our product launch from a simple announcement to an unforgettable experience. Their strategic approach and attention to detail resulted in 300% higher engagement than our previous launches.",
      author: "Priya Sharma",
      position: "CMO",
      company: "TechVantage Solutions",
      rating: 5
    },
    {
      quote: "Working with KRAYONS for our international expansion was game-changing. They understood our brand perfectly and created culturally relevant experiences that resonated with Indian audiences while maintaining our global identity.",
      author: "Marcus Johnson",
      position: "Global Marketing Director",
      company: "Luxe Fashion International",
      rating: 5
    },
    {
      quote: "The data-driven insights and ROI tracking that KRAYONS provided were exceptional. We could see exactly how our investment translated into business results. Their experiential marketing campaign delivered 250% ROI.",
      author: "Rajesh Gupta",
      position: "Founder & CEO",
      company: "GreenTech Innovations",
      rating: 5
    },
    {
      quote: "KRAYONS doesn't just execute events – they craft experiences. Our corporate summit became a catalyst for company-wide digital transformation. The engagement levels and employee feedback were outstanding.",
      author: "Sarah Chen",
      position: "VP People & Culture",
      company: "Global Dynamics Corp",
      rating: 5
    },
    {
      quote: "From concept to execution, KRAYONS exceeded every expectation. Their team's creativity combined with strategic thinking helped us achieve our sustainability goals while creating buzz in the market.",
      author: "Ananya Reddy",
      position: "Marketing Head",
      company: "EcoBeauty Brand",
      rating: 5
    },
    {
      quote: "The level of professionalism and innovation KRAYONS brings is unmatched. They turned our vision into reality and helped us connect with our audience in ways we never thought possible.",
      author: "David Thompson",
      position: "Director of Marketing",
      company: "Innovation Labs",
      rating: 5
    }
  ];

  const brandLogos = [
    { 
      name: "Ministry of Jal Shakti", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png",
      category: "Government" 
    },
    { 
      name: "Bharti Airtel", 
      logo: "https://images.seeklogo.com/logo-png/16/2/airtel-logo-png_seeklogo-168291.png",
      category: "Telecommunications" 
    },
    { 
      name: "Mahindra COMVIVA", 
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo-2012.png",
      category: "Technology Solutions" 
    },
    { 
      name: "MACROKIOSK", 
      logo: "https://macrokiosk.com/assets/img/og-img/og-image-macrokiosk.png",
      category: "Digital Payments" 
    },
    { 
      name: "India Tourism Development Corporation", 
      logo: "https://e7.pngegg.com/pngimages/423/867/png-clipart-india-tourism-development-corporation-limited-company-civil-engineering-india-brand-equity-foundation-cost-effective-company-text.png",
      category: "Tourism" 
    },
    { 
      name: "Namami Gange", 
      logo: "https://nmcg.nic.in/logo/Namami%20Gange%20Logo_Hindi.jpg",
      category: "Environmental Initiative" 
    },
    { 
      name: "DigiTantra", 
      logo: "https://cdn.prod.website-files.com/64b3e49ec17f22371194291a/65531c82fd58535248724d82_OG-Image.png",
      category: "Digital Solutions" 
    },
    { 
      name: "Mobi2Fun", 
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1450613668/s2m8wz2zafohudracjsz.png",
      category: "Mobile Technology" 
    },
    { 
      name: "Infobip", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qXUM4Q3p99Rk6ENjtjMbaJYGFsbwtuYUOw&s",
      category: "Communications Platform" 
    },
    { 
      name: "Ministry of Urban Development", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91M-t3DBHQyuMKjVybiqiXOrhB1dTqADNKA&s",
      category: "Government" 
    },
    { 
      name: "Osho World", 
      logo: "https://images.seeklogo.com/logo-png/10/1/osho-logo-png_seeklogo-104432.png",
      category: "Spiritual & Wellness" 
    },
    { 
      name: "WOTR", 
      logo: "https://projectheena.com/uploads/ngo/31147029532871/profileImage/images/wotr-pune.jpg",
      category: "Water & Development" 
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      category: "Technology" 
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      category: "Technology" 
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      category: "E-commerce" 
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30 overflow-hidden">
      {/* Subtle Background Decorations */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-cyan-500 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-40 right-10 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-30" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Three-Layer Infinite Scrolling Brand Logos */}
        <div className="text-center animate-fade-in-up animation-delay-[600ms] animation-fill-mode-both overflow-hidden">
          <h3 className="text-2xl font-semibold text-gray-900 mb-12">
            Trusted by <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Leading Brands</span>
          </h3>
          
          {/* First Row - Scroll Right */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex animate-scroll-right space-x-8 whitespace-nowrap">
              {[...brandLogos.slice(0, 6), ...brandLogos.slice(0, 6)].map((brand, index) => (
                <div 
                  key={`row1-${index}`}
                  className="flex-shrink-0 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm hover:shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 group cursor-pointer border border-gray-200/50 min-w-[180px]"
                >
                  <div className="flex items-center justify-center h-16 mb-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-12 max-w-24 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="logo-fallback hidden text-center">
                      <div className="text-gray-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 text-center group-hover:text-blue-600 transition-colors">
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
                  className="flex-shrink-0 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm hover:shadow-lg hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300 group cursor-pointer border border-blue-200/50 min-w-[180px]"
                >
                  <div className="flex items-center justify-center h-16 mb-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-12 max-w-24 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="logo-fallback hidden text-center">
                      <div className="text-gray-900 font-semibold text-sm group-hover:text-purple-600 transition-colors">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 text-center group-hover:text-purple-600 transition-colors">
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
                  className="flex-shrink-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-blue-50/60 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm hover:shadow-lg hover:from-white hover:to-blue-50/80 hover:scale-105 transition-all duration-300 group cursor-pointer border border-gray-300/40 min-w-[180px]"
                >
                  <div className="flex items-center justify-center h-16 mb-2">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-12 max-w-24 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <div className="logo-fallback hidden text-center">
                      <div className="text-gray-900 font-semibold text-sm group-hover:text-cyan-600 transition-colors">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 text-center group-hover:text-cyan-600 transition-colors">
                    {brand.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;