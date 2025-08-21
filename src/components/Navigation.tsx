import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Calendar, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { 
      name: "About", 
      href: "#about",
      color: "from-red-500 to-pink-500",
      hoverBg: "from-red-50 to-pink-50",
      textHover: "hover:text-red-600",
      isPage: false
    },
    { 
      name: "Strategy", 
      href: "#services",
      color: "from-orange-500 to-amber-500",
      hoverBg: "from-orange-50 to-amber-50",
      textHover: "hover:text-orange-600",
      isPage: false
    },
    { 
      name: "What We Do", 
      href: "/what-we-do",
      color: "from-blue-500 to-indigo-500",
      hoverBg: "from-blue-50 to-indigo-50",
      textHover: "hover:text-blue-600",
      isPage: true
    },
    { 
      name: "Why Us", 
      href: "#why-us",
      color: "from-emerald-500 to-teal-500",
      hoverBg: "from-emerald-50 to-teal-50",
      textHover: "hover:text-emerald-600",
      isPage: false
    },
    { 
      name: "Testimonials", 
      href: "#testimonials",
      color: "from-purple-500 to-violet-500",
      hoverBg: "from-purple-50 to-violet-50",
      textHover: "hover:text-purple-600",
      isPage: false
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we're on the home page
  const isOnHomePage = () => {
    return window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname.endsWith('/');
  };

  const scrollToSection = (href: string, isPage: boolean) => {
    if (isPage) {
      // If it's a page route, navigate directly
      window.location.href = href;
    } else if (isOnHomePage()) {
      // If on home page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, redirect to home page with hash
      window.location.href = `/${href}`;
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isOnHomePage()) {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, redirect to home page
      window.location.href = '/';
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetInTouch = () => {
    window.location.href = 'mailto:reachus@krayons.co.in';
    setIsMobileMenuOpen(false);
  };

  const handleEventsClick = () => {
    // Navigate to events page
    window.location.href = '/events';
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-gradient-to-r from-white/95 via-blue-50/90 to-purple-50/90 backdrop-blur-md shadow-xl border-b-2 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200' 
        : 'bg-gradient-to-r from-white/85 via-rose-50/80 to-orange-50/80 backdrop-blur-sm shadow-lg border-b border-gradient-to-r from-rose-200 to-orange-200'
    }`}>
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 via-pink-500/5 to-orange-500/5 animate-gradient-shift"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-16 relative">
          {/* Enhanced Colorful Logo */}
          <div className="flex-shrink-0 w-1/4">
            <button 
              onClick={handleLogoClick}
              className="group relative text-2xl font-bold transition-all duration-500 transform hover:scale-110"
              title="Go to Home Page"
            >
              <span 
                className="relative z-10 bg-gradient-to-r from-red-600 via-orange-500 via-yellow-500 via-green-500 via-blue-600 via-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-pink-600 hover:via-purple-600 hover:via-indigo-600 hover:via-blue-600 hover:via-green-500 hover:via-yellow-500 hover:via-orange-500 hover:to-red-600 transition-all duration-700 text-3xl font-extrabold animate-rainbow-text"
                style={{
                  // Enhanced rainbow gradient
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(45deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #6366f1, #8b5cf6, #ec4899, #ef4444)',
                  backgroundClip: 'text'
                }}
              >
                KRAYONS
              </span>
              {/* Colorful glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl scale-0 group-hover:scale-110 transition-all duration-500 ease-out -z-10 blur-lg"></div>
            </button>
          </div>

          {/* Desktop Navigation with individual colors - Absolutely centered */}
          <div className="hidden lg:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href, link.isPage)}
                className={`group relative px-4 py-2 text-gray-700 ${link.textHover} transition-all duration-300 font-medium overflow-hidden rounded-lg transform hover:scale-105`}
                style={{ animationDelay: `${index * 100}ms` }}
                title={link.isPage ? `Go to ${link.name} page` : (isOnHomePage() ? `Go to ${link.name} section` : `Go to Home Page - ${link.name} section`)}
              >
                <span className="relative z-10 transition-colors duration-300 font-semibold">
                  {link.name}
                </span>
                {/* Colorful hover background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.hoverBg} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-lg`}></div>
                {/* Colorful bottom border animation */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${link.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full`}></div>
                {/* Enhanced shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
                {/* Floating particles effect */}
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-current rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-up transition-all duration-500"></div>
              </button>
            ))}
            
          </div>

          {/* Right side buttons - Events & Get in Touch */}
          <div className="hidden lg:flex items-center space-x-4 w-1/4 justify-end">
            {/* Special Events Button */}
            <button
              onClick={handleEventsClick}
              className="group relative px-6 py-3 overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1 focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
              title="Go to Events Page"
            >
              {/* Animated background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 via-pink-500 via-purple-500 via-blue-500 via-cyan-400 to-yellow-400 animate-events-rainbow rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/90 via-orange-500/90 to-red-500/90 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl animate-pulse"></div>
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur-xl scale-0 group-hover:scale-125 transition-all duration-500 animate-events-glow -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 rounded-2xl blur-2xl scale-0 group-hover:scale-150 transition-all duration-700 animate-events-glow-outer -z-20"></div>
              
              {/* Floating particles */}
              <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-events-particle-1 transition-all duration-300"></div>
              <div className="absolute top-1 right-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-events-particle-2 transition-all duration-400"></div>
              <div className="absolute bottom-1 left-1/3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-events-particle-3 transition-all duration-500"></div>
              
              {/* Sparkles effect */}
              <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Sparkles className="w-3 h-3 text-white animate-spin" />
              </div>
              <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <Sparkles className="w-2 h-2 text-white animate-pulse" />
              </div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center space-x-2 text-white font-bold transition-all duration-300 group-hover:scale-105">
                <Calendar className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm tracking-wide">EVENTS</span>
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
              
              {/* Border animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/30 via-transparent to-white/30 bg-clip-border opacity-0 group-hover:opacity-100 transition-all duration-500 animate-events-border"></div>
            </button>
            
            {/* Enhanced CTA Button */}
            <Button 
              onClick={handleGetInTouch}
              className="group relative bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 hover:from-cyan-500 hover:via-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden animate-gradient-shift"
              style={{
                backgroundSize: '200% 100%'
              }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get in Touch</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
              {/* Enhanced shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              {/* Multi-layered glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/50 via-purple-400/50 via-blue-400/50 to-cyan-400/50 blur-xl scale-0 group-hover:scale-125 transition-transform duration-500 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 via-purple-300/30 via-blue-300/30 to-cyan-300/30 blur-2xl scale-0 group-hover:scale-150 transition-transform duration-700 -z-20"></div>
            </Button>
          </div>

          {/* Colorful Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-gradient-to-r hover:from-blue-300 hover:to-purple-300"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen 
                      ? 'rotate-180 opacity-0 text-purple-600' 
                      : 'rotate-0 opacity-100 text-blue-600 hover:text-purple-600'
                  }`} 
                />
                <X 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen 
                      ? 'rotate-0 opacity-100 text-red-600' 
                      : '-rotate-180 opacity-0 text-blue-600'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/90 backdrop-blur-md border-t-2 border-gradient-to-r from-blue-200 to-purple-200 rounded-b-2xl shadow-2xl">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href, link.isPage)}
                  className={`group block w-full text-left px-6 py-4 text-gray-700 ${link.textHover} hover:bg-gradient-to-r ${link.hoverBg} rounded-xl transition-all duration-300 font-semibold transform hover:translate-x-3 hover:scale-105 border border-transparent hover:border-gradient-to-r ${link.color.replace('to-', 'to-').replace('from-', 'from-').replace('500', '300')} ${
                    isMobileMenuOpen ? 'animate-slide-in' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                  title={link.isPage ? `Go to ${link.name} page` : (isOnHomePage() ? `Go to ${link.name} section` : `Go to Home Page - ${link.name} section`)}
                >
                  <span className="relative flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${link.color} group-hover:animate-pulse`}></div>
                    <span>{link.name}</span>
                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${link.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                  </span>
                </button>
              ))}
              
              {/* Mobile Events Button */}
              <button
                onClick={handleEventsClick}
                className={`group relative w-full px-6 py-4 overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 hover:translate-x-3 ${
                  isMobileMenuOpen ? 'animate-slide-in' : ''
                }`}
                style={{ 
                  animationDelay: `${navLinks.length * 100}ms`,
                  animationFillMode: 'both'
                }}
                title="Go to Events Page"
              >
                {/* Mobile events background */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 to-pink-500 animate-events-rainbow rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-500/20 rounded-xl"></div>
                
                {/* Mobile events glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 rounded-xl blur-lg scale-0 group-hover:scale-110 transition-all duration-500 -z-10"></div>
                
                <span className="relative z-10 flex items-center space-x-3 text-white font-bold">
                  <Calendar className="w-5 h-5 group-hover:animate-bounce" />
                  <span>EVENTS</span>
                  <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                  <Sparkles className="w-4 h-4 animate-spin ml-auto" />
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
              
              <div className={`pt-4 ${isMobileMenuOpen ? 'animate-slide-in' : ''}`} 
                   style={{ 
                     animationDelay: `${(navLinks.length + 1) * 100}ms`,
                     animationFillMode: 'both'
                   }}>
                <Button 
                  onClick={handleGetInTouch}
                  className="group relative w-full bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 hover:from-cyan-500 hover:via-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden animate-gradient-shift"
                  style={{
                    backgroundSize: '200% 100%'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get in Touch</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced custom styles */}
      <style>
        {`
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes rainbow-text {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
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
          
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes float-up {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(-20px) scale(0);
              opacity: 0;
            }
          }

          /* Special Events Button Animations */
          @keyframes events-rainbow {
            0%, 100% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 100% 50%;
            }
            50% {
              background-position: 200% 50%;
            }
            75% {
              background-position: 300% 50%;
            }
          }

          @keyframes events-glow {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          @keyframes events-glow-outer {
            0%, 100% {
              opacity: 0.1;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.2);
            }
          }

          @keyframes events-particle-1 {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0;
            }
            25% {
              opacity: 1;
            }
            100% {
              transform: translateY(-25px) translateX(10px) scale(0);
              opacity: 0;
            }
          }

          @keyframes events-particle-2 {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            100% {
              transform: translateY(-20px) translateX(-15px) scale(0);
              opacity: 0;
            }
          }

          @keyframes events-particle-3 {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translateY(20px) translateX(20px) scale(0);
              opacity: 0;
            }
          }

          @keyframes events-border {
            0%, 100% {
              background-position: 0% 50%;
              opacity: 0.3;
            }
            50% {
              background-position: 100% 50%;
              opacity: 0.8;
            }
          }
          
          .animate-slide-in {
            animation: slide-in 0.5s ease-out forwards;
          }
          
          .animate-rainbow-text {
            animation: rainbow-text 3s ease-in-out infinite;
          }
          
          .animate-gradient-shift {
            animation: gradient-shift 4s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          
          .animate-float-up {
            animation: float-up 1s ease-out;
          }

          .animate-events-rainbow {
            animation: events-rainbow 3s ease-in-out infinite;
            background-size: 400% 100%;
          }

          .animate-events-glow {
            animation: events-glow 2s ease-in-out infinite;
          }

          .animate-events-glow-outer {
            animation: events-glow-outer 3s ease-in-out infinite;
          }

          .animate-events-particle-1 {
            animation: events-particle-1 2s ease-out infinite;
          }

          .animate-events-particle-2 {
            animation: events-particle-2 2.5s ease-out infinite;
          }

          .animate-events-particle-3 {
            animation: events-particle-3 3s ease-out infinite;
          }

          .animate-events-border {
            animation: events-border 2s ease-in-out infinite;
          }
          
          /* Enhanced rainbow logo effect */
          @supports not (-webkit-background-clip: text) {
            .logo-fallback {
              color: #3b82f6 !important;
              background: none !important;
            }
          }
          
          /* Colorful scrollbar for mobile menu */
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: linear-gradient(to bottom, #f3f4f6, #e5e7eb);
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #7c3aed, #2563eb);
          }
        `}
      </style>
    </nav>
  );
};

export default Navigation;