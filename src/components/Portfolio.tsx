import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Calendar, MapPin, Users, Target, Lightbulb, TrendingUp, Sparkles, Award, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Portfolio = () => {
  const carouselRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Simple autoplay implementation
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current?.scrollNext) {
        carouselRef.current.scrollNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll reveal animation
  useEffect(() => {
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

  const caseStudies = [
    {
      title: "Tech Startup Product Launch",
      client: "InnovateTech Solutions",
      challenge: "Launch a revolutionary AI product to enterprise market",
      solution: "Created immersive product demonstration experience with live AI interactions",
      impact: "250% increase in qualified leads, 40+ enterprise partnerships signed",
      category: "Product Launch",
      attendees: "500+",
      location: "Mumbai",
      duration: "3 Days",
      tags: ["AI Technology", "B2B", "Enterprise"]
    },
    {
      title: "International Brand Expansion",
      client: "Global Fashion House",
      challenge: "Enter Indian market with culturally relevant brand experience",
      solution: "Multi-city experiential campaign blending global aesthetics with local culture",
      impact: "30% brand awareness increase, 15 flagship store openings",
      category: "Brand Activation",
      attendees: "2000+",
      location: "Delhi, Mumbai, Bangalore",
      duration: "2 Months",
      tags: ["Fashion", "Cultural Integration", "Multi-city"]
    },
    {
      title: "Corporate Innovation Summit",
      client: "Fortune 500 Company",
      challenge: "Engage 1000+ employees in digital transformation initiative",
      solution: "Interactive workshops with gamified learning and real-time collaboration tools",
      impact: "95% employee engagement, 60% faster project adoption rate",
      category: "Corporate Event",
      attendees: "1000+",
      location: "Hyderabad",
      duration: "2 Days",
      tags: ["Digital Transformation", "Employee Engagement", "Innovation"]
    },
    {
      title: "Sustainable Beauty Campaign",
      client: "Eco-Beauty Startup",
      challenge: "Create awareness about sustainable beauty practices",
      solution: "Pop-up experiences in malls with DIY beauty workshops and sustainability pledges",
      impact: "500% social media engagement, 200+ retail partnerships",
      category: "Experiential Marketing",
      attendees: "5000+",
      location: "Pan-India",
      duration: "6 Weeks",
      tags: ["Sustainability", "Beauty", "Social Impact"]
    }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Discover how we've helped brands break barriers and achieve extraordinary results through strategic events and innovative marketing solutions.
          </p>
        </div>

        {/* Curved Carousel with Auto-scroll and Scroll Reveal */}
        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <Carousel
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-none"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div 
                    className={`p-1 transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    style={{
                      transitionDelay: `${index * 200 + 500}ms`,
                    }}
                  >
                    <Card className="card-hover card-tilt shadow-glow border-0 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-lg group overflow-hidden h-full transform hover:scale-[1.02] transition-all duration-500 hover:rotate-1 relative">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <CardHeader className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                              <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                            <Badge variant="secondary" className="bg-gradient-to-r from-blue-50 to-purple-50 text-primary font-semibold px-3 py-1 group-hover:scale-105 transition-transform">
                              {study.category}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm" className="p-2 hover:scale-110 hover:bg-primary/10 rounded-full transition-all duration-300 group-hover:rotate-12">
                            <ExternalLink className="w-5 h-5 text-primary" />
                          </Button>
                        </div>
                        
                        <CardTitle className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="text-primary font-semibold text-base flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          {study.client}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-6 relative z-10">
                        {/* Event Details with Enhanced Design */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 group-hover:from-blue-50/80 group-hover:to-purple-50/80 transition-colors">
                            <Users className="w-5 h-5 text-primary mb-1 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-foreground">{study.attendees}</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 group-hover:from-blue-50/80 group-hover:to-purple-50/80 transition-colors">
                            <MapPin className="w-5 h-5 text-primary mb-1 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-foreground text-center">{study.location}</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 group-hover:from-blue-50/80 group-hover:to-purple-50/80 transition-colors">
                            <Calendar className="w-5 h-5 text-primary mb-1 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-foreground">{study.duration}</span>
                          </div>
                        </div>

                        {/* Challenge with Icon */}
                        <div className="p-4 rounded-xl bg-destructive/5 border-l-4 border-destructive/30 transform group-hover:translate-x-1 transition-transform">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-5 h-5 text-destructive" />
                            <h4 className="font-bold text-foreground">Challenge</h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Solution with Icon */}
                        <div className="p-4 rounded-xl bg-primary/5 border-l-4 border-primary/50 transform group-hover:translate-x-1 transition-transform" style={{transitionDelay: '0.1s'}}>
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-5 h-5 text-primary" />
                            <h4 className="font-bold text-foreground">Our Solution</h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                        </div>

                        {/* Impact with Enhanced Styling */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-primary transform group-hover:translate-x-1 transition-transform" style={{transitionDelay: '0.2s'}}>
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <h4 className="font-bold text-foreground">Impact</h4>
                            <Zap className="w-4 h-4 text-primary animate-pulse" />
                          </div>
                          <p className="text-sm font-bold text-primary group-hover:scale-105 transition-transform origin-left leading-relaxed">
                            {study.impact}
                          </p>
                        </div>

                        {/* Enhanced Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {study.tags.map((tag, tagIndex) => (
                            <Badge 
                              key={tagIndex} 
                              variant="outline" 
                              className="text-xs font-medium px-3 py-1 rounded-full border-primary/30 bg-gradient-to-r from-blue-500/5 to-purple-500/5 hover:from-blue-500/20 hover:to-purple-500/20 hover:scale-110 hover:border-primary/60 transition-all duration-300 cursor-pointer"
                              style={{transitionDelay: `${tagIndex * 0.1}s`}}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;