import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  const scrollToSection = (href: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      // Navigate to home page
      navigate('/');
    } else {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetInTouch = () => {
    window.location.href = 'mailto:krayonsad@gmail.com';
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-smooth"
            >
              KRAYONS
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex">
            <Button 
              onClick={handleGetInTouch}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="bg-white border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-smooth"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4 pb-2">
                  <Button 
                    onClick={handleGetInTouch}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;