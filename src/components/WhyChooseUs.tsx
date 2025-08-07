import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Trophy, Target, Rocket, Users, BarChart3 } from "lucide-react";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const reasons = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "10+ Years of Proven Excellence",
      description: "A decade of consistent delivery and innovation in events and marketing",
      highlights: ["Industry Recognition", "Award-Winning Campaigns", "Consistent Quality"],
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgGradient: "from-amber-50/80 to-orange-50/50",
      hoverBg: "hover:from-amber-100/80 hover:to-orange-100/50",
      iconBg: "from-amber-500/10 to-orange-500/10",
      iconHoverBg: "group-hover:from-amber-500/20 group-hover:to-orange-500/20",
      textColor: "text-amber-600",
      hoverTextColor: "group-hover:text-amber-600",
      borderColor: "from-amber-500 via-orange-500 to-red-500",
      shadowColor: "hover:shadow-amber-500/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team with Global Reach",
      description: "Local expertise combined with international perspective for maximum impact",
      highlights: ["Certified Professionals", "Cultural Intelligence", "Global Network"],
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50/80 to-teal-50/50",
      hoverBg: "hover:from-emerald-100/80 hover:to-teal-100/50",
      iconBg: "from-emerald-500/10 to-teal-500/10",
      iconHoverBg: "group-hover:from-emerald-500/20 group-hover:to-teal-500/20",
      textColor: "text-emerald-600",
      hoverTextColor: "group-hover:text-emerald-600",
      borderColor: "from-emerald-500 via-teal-500 to-cyan-500",
      shadowColor: "hover:shadow-emerald-500/20"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Measurable ROI Focus",
      description: "Data-driven strategies that deliver quantifiable results for your investment",
      highlights: ["Performance Analytics", "ROI Tracking", "Continuous Optimization"],
      gradient: "from-purple-400 via-pink-500 to-rose-500",
      bgGradient: "from-purple-50/80 to-pink-50/50",
      hoverBg: "hover:from-purple-100/80 hover:to-pink-100/50",
      iconBg: "from-purple-500/10 to-pink-500/10",
      iconHoverBg: "group-hover:from-purple-500/20 group-hover:to-pink-500/20",
      textColor: "text-purple-600",
      hoverTextColor: "group-hover:text-purple-600",
      borderColor: "from-purple-500 via-pink-500 to-rose-500",
      shadowColor: "hover:shadow-purple-500/20"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Flexible & Customized Solutions",
      description: "Tailored approaches that adapt to your unique brand needs and objectives",
      highlights: ["Custom Strategies", "Scalable Solutions", "Agile Methodology"],
      gradient: "from-indigo-400 via-blue-500 to-cyan-500",
      bgGradient: "from-indigo-50/80 to-blue-50/50",
      hoverBg: "hover:from-indigo-100/80 hover:to-blue-100/50",
      iconBg: "from-indigo-500/10 to-blue-500/10",
      iconHoverBg: "group-hover:from-indigo-500/20 group-hover:to-blue-500/20",
      textColor: "text-indigo-600",
      hoverTextColor: "group-hover:text-indigo-600",
      borderColor: "from-indigo-500 via-blue-500 to-cyan-500",
      shadowColor: "hover:shadow-indigo-500/20"
    }
  ];

  const achievements = [
    {
      number: "98%",
      label: "Client Satisfaction Rate",
      description: "Consistently exceeding expectations",
      gradient: "from-rose-400 to-pink-600",
      bgColor: "bg-gradient-to-br from-rose-50/80 to-pink-50/50",
      hoverBg: "hover:bg-gradient-to-br hover:from-rose-100/90 hover:to-pink-100/70",
      shadowColor: "hover:shadow-rose-500/20"
    },
    {
      number: "500+",
      label: "Successful Projects",
      description: "Across diverse industries",
      gradient: "from-violet-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-violet-50/80 to-purple-50/50",
      hoverBg: "hover:bg-gradient-to-br hover:from-violet-100/90 hover:to-purple-100/70",
      shadowColor: "hover:shadow-violet-500/20"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Dedicated project management",
      gradient: "from-teal-400 to-cyan-600",
      bgColor: "bg-gradient-to-br from-teal-50/80 to-cyan-50/50",
      hoverBg: "hover:bg-gradient-to-br hover:from-teal-100/90 hover:to-cyan-100/70",
      shadowColor: "hover:shadow-teal-500/20"
    },
    {
      number: "15+",
      label: "Cities Covered",
      description: "Pan-India presence",
      gradient: "from-orange-400 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50/80 to-red-50/50",
      hoverBg: "hover:bg-gradient-to-br hover:from-orange-100/90 hover:to-red-100/70",
      shadowColor: "hover:shadow-orange-500/20"
    }
  ];

  const differentiators = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Approach",
      description: "Every project begins with deep understanding of your objectives and target audience",
      gradient: "from-blue-400 to-indigo-600",
      textColor: "text-blue-600",
      hoverTextColor: "group-hover:text-blue-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-blue-50/80 hover:to-indigo-50/50",
      shadowColor: "hover:shadow-blue-500/10",
      borderColor: "hover:border-blue-200/50"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Innovation Focus",
      description: "Cutting-edge technology and creative solutions to make your brand stand out",
      gradient: "from-green-400 to-emerald-600",
      textColor: "text-green-600",
      hoverTextColor: "group-hover:text-green-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-green-50/80 hover:to-emerald-50/50",
      shadowColor: "hover:shadow-green-500/10",
      borderColor: "hover:border-green-200/50"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Partnership Mindset",
      description: "We become an extension of your team, invested in your long-term success",
      gradient: "from-fuchsia-400 to-pink-600",
      textColor: "text-fuchsia-600",
      hoverTextColor: "group-hover:text-fuchsia-600",
      hoverBg: "hover:bg-gradient-to-br hover:from-fuchsia-50/80 hover:to-pink-50/50",
      shadowColor: "hover:shadow-fuchsia-500/10",
      borderColor: "hover:border-fuchsia-200/50"
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
      className="py-20 bg-background relative overflow-hidden" 
      style={{ minHeight: "100vh" }}
    >
      {/* Enhanced colorful floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-gradient-to-r from-lime-500 to-green-500 rounded-full animate-pulse opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full animate-ping opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header with colorful animation */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Why Choose <span className="bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent animate-pulse bg-[length:200%_100%]">KRAYONS</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            We don't just execute events – we create <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">strategic experiences</strong> that drive business growth and build lasting brand connections.
          </p>
        </div>

        {/* Enhanced Main Reasons with unique colors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{
                transitionDelay: `${index * 200 + 300}ms`,
              }}
            >
              <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${reason.bgGradient} backdrop-blur-sm ${reason.hoverBg} transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl ${reason.shadowColor} transform-gpu`}>
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:${reason.gradient.replace('from-', 'group-hover:from-').replace('via-', 'group-hover:via-').replace('to-', 'group-hover:to-')}/10 transition-all duration-500`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${reason.iconBg} p-4 rounded-lg ${reason.textColor} flex-shrink-0 ${reason.iconHoverBg} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                      <div className="group-hover:animate-bounce">
                        {reason.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold text-foreground mb-3 ${reason.hoverTextColor} transition-colors duration-300`}>
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                        {reason.description}
                      </p>
                      <ul className="space-y-2">
                        {reason.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300" style={{transitionDelay: `${idx * 0.1}s`}}>
                            <CheckCircle className={`w-4 h-4 ${reason.textColor} mr-2 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                
                {/* Enhanced animated border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${reason.borderColor} p-[1px]`}>
                    <div className="w-full h-full rounded-lg bg-white/90"></div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Achievements Grid with unique colors */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '800ms'}}>
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`text-center p-6 ${achievement.bgColor} backdrop-blur-sm rounded-lg transition-all duration-700 transform hover:scale-105 hover:shadow-xl ${achievement.shadowColor} ${achievement.hoverBg} border border-white/50 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{
                transitionDelay: `${index * 150 + 900}ms`,
              }}
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2 hover:scale-110 transition-transform duration-300 cursor-default`}>
                {achievement.number}
              </div>
              <div className="font-semibold text-foreground mb-2">
                {achievement.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Key Differentiators with unique colors */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className={`text-center p-6 group ${item.hoverBg} hover:backdrop-blur-sm rounded-lg transition-all duration-700 transform hover:scale-105 hover:shadow-lg ${item.shadowColor} border border-transparent ${item.borderColor} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{
                transitionDelay: `${index * 200 + 1200}ms`,
              }}
            >
              <div className={`${item.textColor} mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                <div className="group-hover:animate-bounce">
                  {item.icon}
                </div>
              </div>
              <h3 className={`font-semibold mb-2 text-foreground ${item.hoverTextColor} transition-colors duration-300`}>
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
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