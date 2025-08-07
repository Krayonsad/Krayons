import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" }
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

  const scrollToSection = (href: string) => {
    if (isOnHomePage()) {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced animations - Blue to Green to Yellow to Cyan gradient */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              className="group relative text-2xl font-bold transition-all duration-500 transform hover:scale-110"
              title="Go to Home Page"
            >
              <span 
                className="relative z-10 bg-gradient-to-r from-orange-600 via-blue-800 via-yellow-500 via-violet-600 via-red-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent hover:from-orange-700 hover:via-blue-900 hover:via-yellow-600 hover:via-violet-700 hover:via-red-700 hover:via-pink-600 hover:to-cyan-600 transition-all duration-500 text-3xl"
                style={{
                  // Fallback for browsers that don't support background-clip: text
                  color: '#ea580c',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(to right, #ea580c, #1e40af, #eab308, #7c3aed, #dc2626, #ec4899, #06b6d4)',
                  backgroundClip: 'text'
                }}
              >
                KRAYONS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 via-yellow-500/10 to-cyan-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -z-10"></div>
            </button>
          </div>

          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium overflow-hidden rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
                title={isOnHomePage() ? `Go to ${link.name} section` : `Go to Home Page - ${link.name} section`}
              >
                <span className="relative z-10 transition-colors duration-300">
                  {link.name}
                </span>
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop with enhanced styling */}
          <div className="hidden lg:flex">
            <Button 
              onClick={handleGetInTouch}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 blur-lg scale-0 group-hover:scale-110 transition-transform duration-300 -z-10"></div>
            </Button>
          </div>

          {/* Mobile Menu Button with rotation animation */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute transition-all duration-300 text-gray-700 ${
                    isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  className={`w-6 h-6 absolute transition-all duration-300 text-gray-700 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-lg shadow-lg">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className={`group block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2 hover:scale-105 ${
                    isMobileMenuOpen ? 'animate-slide-in' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                  title={isOnHomePage() ? `Go to ${link.name} section` : `Go to Home Page - ${link.name} section`}
                >
                  <span className="relative">
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </span>
                </button>
              ))}
              <div className={`pt-4 ${isMobileMenuOpen ? 'animate-slide-in' : ''}`} 
                   style={{ 
                     animationDelay: `${navLinks.length * 100}ms`,
                     animationFillMode: 'both'
                   }}>
                <Button 
                  onClick={handleGetInTouch}
                  className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-in {
            animation: slide-in 0.5s ease-out forwards;
          }
          
          /* Ensure logo is always visible with fallback */
          @supports not (-webkit-background-clip: text) {
            .logo-fallback {
              color: #3b82f6 !important;
              background: none !important;
            }
          }
        `
      }} />
    </nav>
  );
};

export default Navigation;