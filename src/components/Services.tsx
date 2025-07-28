import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import strategicEvents from "@/assets/strategic-events.jpg";
import experientialMarketing from "@/assets/experiential-marketing.jpg";
import dataSolutions from "@/assets/data-solutions.jpg";
import { Lightbulb, Target, BarChart3, Globe, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Event Experiences",
      description: "Crafting memorable experiences that align with your brand objectives and drive meaningful engagement.",
      image: strategicEvents,
      features: ["Brand Activations", "Corporate Events", "Product Launches", "Conference Management"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Experiential Marketing",
      description: "Innovative campaigns that create emotional connections between brands and their audiences.",
      image: experientialMarketing,
      features: ["Interactive Experiences", "Pop-up Events", "Brand Storytelling", "Customer Journey Mapping"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-driven Solutions",
      description: "Measurable strategies backed by analytics to optimize your marketing ROI and event success.",
      image: dataSolutions,
      features: ["Performance Analytics", "ROI Tracking", "Audience Insights", "Strategy Optimization"]
    }
  ];

  const additionalServices = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Collaborations",
      description: "Global partnerships for expanding your reach across international markets."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Integrated Campaigns",
      description: "Multi-channel approaches that unify your brand message across all touchpoints."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Consulting",
      description: "Forward-thinking strategies to keep your brand ahead of industry trends."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            We specialize in creating breakthrough experiences that elevate brands and drive measurable results through strategic innovation.
          </p>
        </div>

        {/* Main Services with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <Card className="card-hover card-tilt border-0 shadow-card bg-card/50 backdrop-blur-sm group overflow-hidden">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white icon-bounce transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  {/* Overlay effect on hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="group-hover:bg-gradient-subtle transition-colors duration-300">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300" style={{transitionDelay: `${idx * 0.1}s`}}>
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Services with Wave Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${(index + 3) * 0.1}s`}}>
              <Card className="card-hover border border-border/50 bg-card/30 backdrop-blur-sm group hover:bg-card/60 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 icon-bounce">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;