import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Years of Excellence",
      description: "Leading digital marketing solutions since 2014"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
      label: "Strategic Partnerships",
      description: "Successfully connecting advertisers and publishers"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: "Markets Reached",
      description: "Global digital marketing presence"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "95%",
      label: "Project Success Rate",
      description: "Consistently exceeding digital marketing objectives"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content with Animation */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">KRAYONS GROUP</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="animate-fade-in-up animate-delay-200">
                <strong className="text-foreground">Krayons Group</strong> is your premier partner for 
                <strong className="text-foreground"> digital marketing, integrated communication, and project-based solutions</strong>. 
                We excel at forging strategic partnerships that effectively connect clients, facilitate seamless 
                communication, and deliver exceptional project outcomes.
              </p>
              
              <p className="animate-fade-in-up animate-delay-300">
                Our expertise spans <strong className="text-foreground">cutting-edge digital strategies</strong>, comprehensive 
                communication across all channels, and tailored project management that consistently surpasses expectations. 
                We don't just meet industry standards – <strong className="text-foreground">we set them</strong>.
              </p>
              
              <p className="animate-fade-in-up animate-delay-400">
                Krayons is more than an affiliate marketing platform; we are <strong className="text-foreground">architects 
                of successful communication strategies</strong> and project-based collaborations. Our team comprises seasoned 
                professionals who understand the intricacies of the digital landscape.
              </p>
            </div>

            {/* Mission Statement with Animation */}
            <div className="mt-8 p-6 bg-gradient-subtle rounded-lg border-l-4 border-primary animate-slide-up animate-delay-500 hover:shadow-card transition-shadow duration-300">
              <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To facilitate the connection between advertisers and publishers, enabling them to attain their 
                digital marketing objectives through our dynamic platform that broadens reach and monetizes online assets.
              </p>
            </div>
          </div>

          {/* Achievements Grid with Staggered Animation */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {achievements.map((achievement, index) => (
              <div key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.2 + 0.3}s`}}>
                <Card className="card-hover card-tilt shadow-card border-0 bg-card group hover:bg-gradient-subtle transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 icon-bounce">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-2 counter-animate hover:scale-110 transition-transform cursor-default">
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;