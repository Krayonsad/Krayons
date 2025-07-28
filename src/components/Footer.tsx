import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Strategic Event Experiences", href: "#" },
    { name: "Experiential Marketing", href: "#" },
    { name: "Data-driven Solutions", href: "#" },
    { name: "International Collaborations", href: "#" },
    { name: "Brand Activations", href: "#" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">KRAYONS</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Breaking the barriers of events & marketing since 2014. We empower brands with 
              strategic experiences and data-driven solutions across India and beyond.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@krayons.in</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground text-sm hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-muted-foreground text-sm hover:text-primary transition-smooth"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Connected</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Follow us for the latest insights on events, marketing trends, and success stories.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-muted/50 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} KRAYONS. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;