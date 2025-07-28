import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/krayons-group/", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/adkrayons/", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/AdKrayons/", label: "Facebook" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">KRAYONS GROUP</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Premier partner for digital marketing, integrated communication, and project-based solutions. 
              Connecting advertisers with publishers since 2014.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">krayonsad@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 95559 55100</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Plot A-09, 711, ITL Towers, Netaji Subhash Place, Pitampura, Delhi 110034</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Connected</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Follow us for the latest insights on digital marketing trends, affiliate marketing strategies, and success stories.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
            © {currentYear} KRAYONS GROUP. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;