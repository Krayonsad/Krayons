import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import strategicEvents from "@/assets/strategic-events.jpg";
import experientialMarketing from "@/assets/experiential-marketing.jpg";
import dataSolutions from "@/assets/data-solutions.jpg";
import { Target, Users, MessageSquare, Radio, Database, TrendingUp, Globe, Mail, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Advertising",
      description: "Payment only for successful transactions like leads, sales, downloads, and applications. Risk-free digital marketing with measurable outcomes.",
      image: strategicEvents,
      features: ["Cost per Lead", "Cost per Sale", "Cost per Download", "Cost per Application"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Advertising",
      description: "Tailored content management solutions that streamline workflow, drive engagement, and achieve marketing goals.",
      image: experientialMarketing,
      features: ["Content Marketing", "Content Websites", "Content Strategy", "Native Advertising"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Advertising",
      description: "Collaborate with diverse influencers and content creators to connect with new audiences and achieve positive ROI.",
      image: dataSolutions,
      features: ["Campaign Management", "ROI Focused", "Diverse Network", "Full Lifecycle Support"]
    }
  ];

  const additionalServices = [
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Media Advertising",
      description: "Comprehensive media agency services across all advertising channels - online, airport, newspaper, magazine, outdoor, radio, and television."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SMS Marketing (India Only)",
      description: "70 million contacts database with advanced SMS marketing capabilities, A2P integration, 2-way SMS, and global connectivity."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email & Social Media",
      description: "Strategic email marketing campaigns and social media management to maximize your digital reach and engagement."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Comprehensive digital marketing solutions that connect advertisers with publishers, driving measurable results through strategic partnerships and innovative campaigns.
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