import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="KRAYONS Events Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      {/* Floating Elements with Enhanced Animation */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl hero-float animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent/20 rounded-full blur-xl hero-float pulse-glow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary/20 rounded-full blur-lg hero-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-32 w-20 h-20 bg-primary/15 rounded-full blur-lg hero-float" style={{animationDelay: '1s'}}></div>
      
      {/* Content with Staggered Animations */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
            Breaking The{" "}
            <span className="text-gradient animate-pulse">Barriers</span>{" "}
            Of Events &{" "}
            <span className="text-gradient animate-pulse" style={{animationDelay: '0.5s'}}>Marketing!</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Since 2014, KRAYONS has empowered brands & startups with{" "}
            <strong>Strategic Events</strong>, <strong>Experiential Marketing</strong> &{" "}
            <strong>Data-driven Solutions</strong> across India and beyond.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up animate-delay-300">
            <Button className="btn-hero text-lg group">
              Let's Collaborate
              <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
            </Button>
            <Button variant="outline" className="btn-outline-gradient text-white border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300">
              View Our Work
            </Button>
          </div>
          
          {/* Stats with Counter Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-400">
            <div className="text-center group">
              <div className="text-4xl font-bold text-gradient counter-animate hover:scale-110 transition-transform">10+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Years of Excellence</div>
            </div>
            <div className="text-center group animate-delay-100">
              <div className="text-4xl font-bold text-gradient counter-animate hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Successful Events</div>
            </div>
            <div className="text-center group animate-delay-200">
              <div className="text-4xl font-bold text-gradient counter-animate hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-fade-in-up animate-delay-500">
        <div className="flex flex-col items-center space-y-2 hover:text-white transition-colors cursor-pointer group">
          <span className="text-sm group-hover:scale-105 transition-transform">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;