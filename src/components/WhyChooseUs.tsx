import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Trophy, Target, Rocket, Users, BarChart3 } from "lucide-react";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const reasons = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "10+ Years of Proven Excellence",
      description: "A decade of consistent delivery and innovation in events and marketing",
      highlights: ["Industry Recognition", "Award-Winning Campaigns", "Consistent Quality"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team with Global Reach",
      description: "Local expertise combined with international perspective for maximum impact",
      highlights: ["Certified Professionals", "Cultural Intelligence", "Global Network"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Measurable ROI Focus",
      description: "Data-driven strategies that deliver quantifiable results for your investment",
      highlights: ["Performance Analytics", "ROI Tracking", "Continuous Optimization"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Flexible & Customized Solutions",
      description: "Tailored approaches that adapt to your unique brand needs and objectives",
      highlights: ["Custom Strategies", "Scalable Solutions", "Agile Methodology"]
    }
  ];

  const achievements = [
    {
      number: "98%",
      label: "Client Satisfaction Rate",
      description: "Consistently exceeding expectations"
    },
    {
      number: "500+",
      label: "Successful Projects",
      description: "Across diverse industries"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Dedicated project management"
    },
    {
      number: "15+",
      label: "Cities Covered",
      description: "Pan-India presence"
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
    <section 
      ref={sectionRef}
      id="why-us" 
      className="py-20 bg-gray-50 relative z-10" 
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Why Choose <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">KRAYONS</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            We don't just execute events – we create strategic experiences that drive business growth and build lasting brand connections.
          </p>
        </div>

        {/* Main Reasons with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{
                transitionDelay: `${index * 200 + 300}ms`,
              }}
            >
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm hover:from-gray-50/80 hover:to-purple-50/50 transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/20 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-blue-400/0 to-cyan-400/0 group-hover:from-purple-400/10 group-hover:via-blue-400/10 group-hover:to-cyan-400/10 transition-all duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg text-purple-600 flex-shrink-0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu">
                      <div className="group-hover:animate-bounce">
                        {reason.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                        {reason.description}
                      </p>
                      <ul className="space-y-2">
                        {reason.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300" style={{transitionDelay: `${idx * 0.1}s`}}>
                            <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-[1px]">
                    <div className="w-full h-full rounded-lg bg-white/90"></div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '800ms'}}>
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`text-center p-6 bg-white/70 rounded-lg transition-all duration-700 transform hover:scale-105 hover:shadow-lg hover:bg-white ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{
                transitionDelay: `${index * 150 + 900}ms`,
              }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 hover:scale-110 transition-transform duration-300">
                {achievement.number}
              </div>
              <div className="font-semibold text-gray-900 mb-2">
                {achievement.label}
              </div>
              <div className="text-sm text-gray-600">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>

        {/* Key Differentiators with Wave Animation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-12 h-12" />,
              title: "Strategic Approach",
              description: "Every project begins with deep understanding of your objectives and target audience"
            },
            {
              icon: <Rocket className="w-12 h-12" />,
              title: "Innovation Focus", 
              description: "Cutting-edge technology and creative solutions to make your brand stand out"
            },
            {
              icon: <Users className="w-12 h-12" />,
              title: "Partnership Mindset",
              description: "We become an extension of your team, invested in your long-term success"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`text-center p-6 group hover:bg-white/70 rounded-lg transition-all duration-700 transform hover:scale-105 hover:shadow-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{
                transitionDelay: `${index * 200 + 1200}ms`,
              }}
            >
              <div className="text-purple-600 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu">
                <div className="group-hover:animate-bounce">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;