import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Brain, 
  Palette, 
  ShoppingCart, 
  Building2,
  ArrowRight,
  Sparkles,
  Globe,
  Lightbulb,
  Rocket,
  Monitor,
  ChevronRight,
  Mail
} from "lucide-react";

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Integrated Media Solutions",
      subtitle: "Unified Marketing Excellence",
      description: "Fully integrated brand and performance marketing to ensure all media investment is unified to deliver growth outcomes.",
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      features: [
        "Media investment and portfolio management",
        "Communications strategy and planning",
        "Integrated message and channel planning",
        "Implementation and tactical planning",
        "Performance and outcome optimisation",
        "Client data strategy",
        "Effectiveness measurement and feedback"
      ],
      ctaText: "Get in touch",
      imageAlt: "Integrated media solutions dashboard"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Analytics & Insight",
      subtitle: "Data-Driven Intelligence",
      description: "Forward-looking analytics and data science to drive greater effectiveness and better decisions in clients' media investments.",
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-100",
      borderColor: "border-purple-200",
      features: [
        "Closed-loop effectiveness measurement",
        "Category dynamics and growth segmentations",
        "Audience planning",
        "Strategic analytics and business planning",
        "Predictive modelling & simulations",
        "Machine learning & Artificial Intelligence",
        "Performance testing and optimisation"
      ],
      ctaText: "Get in touch",
      imageAlt: "Analytics and insight dashboard"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Futures",
      subtitle: "Content & Context Integration",
      description: "Integration of content, context, creative, collaborations to maximise the potential of modern media.",
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-100",
      borderColor: "border-orange-200",
      features: [
        "Addressable creative",
        "Creative analytics",
        "Social creative",
        "SEO",
        "Performance content",
        "Publisher & platform partnerships",
        "eSports & gaming",
        "Sport & entertainment",
        "Branded entertainment"
      ],
      ctaText: "Get in touch",
      imageAlt: "Creative solutions showcase"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Frictionless Commerce",
      subtitle: "Seamless Shopping Experience",
      description: "Commerce consultancy, implementation and retail media activation to help brands connect and sell across D2C, platforms and marketplaces.",
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      features: [
        "Business strategy & growth analytics",
        "D2C strategy",
        "Retailer & marketplace strategy",
        "Integrated commerce media",
        "Content merchandising",
        "Commerce performance measurement",
        "Technology & tool development"
      ],
      ctaText: "Get in touch",
      imageAlt: "E-commerce solutions platform"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Specialist B2B Marketing",
      subtitle: "Enterprise Growth Solutions",
      description: "Our global specialist B2B Practice combines our expertise in strategy, customer experience, marketing automation and advanced analytics and media for B2B brands.",
      color: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-100",
      borderColor: "border-teal-200",
      features: [
        "Strategy & Experience",
        "Demand management",
        "Content marketing",
        "Marketing technology & orchestration"
      ],
      ctaText: "Get in touch",
      imageAlt: "B2B marketing solutions"
    }
  ];

  const handleGetInTouch = () => {
    window.location.href = 'mailto:reachus@krayons.co.in';
  };

  return (
    <section id="what-we-do" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-shift"></div>
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-orange-300/20 rounded-full blur-xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-200/20 to-teal-300/20 rounded-full blur-xl animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6 border border-blue-200/50">
            <Rocket className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">What We Do</span>
            <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            What We Do
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Krayons exists to radically improve the value and relevance of advertising for the benefit of brands and consumers.
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 ${service.borderColor} overflow-hidden`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-start space-x-3 group/feature"
                      style={{ 
                        animationDelay: `${featureIndex * 100}ms`,
                        opacity: hoveredCard === index ? 1 : 0.8
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2`}></div>
                      <span className="text-gray-700 text-sm transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Sparkles className={`w-4 h-4 text-${service.color.split('-')[1]}-500 animate-spin`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-shift"></div>
            
            {/* Floating elements */}
            <div className="absolute top-6 left-6 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-8 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's work together to create innovative solutions that drive real results for your business.
              </p>
              
              <Button
                onClick={handleGetInTouch}
                className="group bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Start Your Journey</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          
          @keyframes float-reverse {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(20px) rotate(-180deg);
            }
          }
          
          @keyframes gradient-shift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          @keyframes what-we-do-fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          
          .animate-float-reverse {
            animation: float-reverse 8s ease-in-out infinite;
          }
          
          .animate-gradient-shift {
            animation: gradient-shift 8s ease-in-out infinite;
            background-size: 200% 200%;
          }
          
          .animate-what-we-do-fade-in {
            animation: what-we-do-fade-in 0.6s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default WhatWeDo;