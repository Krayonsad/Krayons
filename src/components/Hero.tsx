import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleGetInTouch = () => {
    window.location.href = 'mailto:krayonsad@gmail.com';
  };

  const handleViewWork = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
            Your Premier{" "}
            <span className="text-gradient animate-pulse">Digital Marketing</span>{" "}
            Partner For{" "}
            <span className="text-gradient animate-pulse" style={{animationDelay: '0.5s'}}>Strategic Growth</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Krayons Group excels at forging strategic partnerships that connect advertisers with publishers, 
            delivering{" "}
            <strong>Performance Advertising</strong>, <strong>Content Solutions</strong> &{" "}
            <strong>Influencer Marketing</strong> with measurable results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up animate-delay-300">
            <Button onClick={handleGetInTouch} className="btn-hero text-lg group">
              Let's Collaborate
              <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
            </Button>
            <Button onClick={handleViewWork} variant="outline" className="btn-outline-gradient text-black bg-white border-white hover:bg-white/90 hover:scale-105 transition-all duration-300">
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
              <div className="text-4xl font-bold text-gradient counter-animate hover:scale-110 transition-transform">1000+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Strategic Partnerships</div>
            </div>
            <div className="text-center group animate-delay-200">
              <div className="text-4xl font-bold text-gradient counter-animate hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-300 group-hover:text-white transition-colors">Markets Reached</div>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="pt-16 animate-fade-in-up animate-delay-500">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-6">Watch Our Story</h3>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <video 
                  className="w-full h-auto" 
                  controls 
                  autoPlay
                  muted
                  loop
                  poster="/placeholder.svg"
                  preload="metadata"
                >
                  <source src="https://krayons.co.in/wp-content/uploads/2025/02/An-Event-Company-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
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