import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Years of Excellence",
      description: "Delivering outstanding results since 2014"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Events Executed",
      description: "Successfully managed projects across industries"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "15+",
      label: "Cities Covered",
      description: "Pan-India presence with international reach"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Proven track record of exceeding expectations"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content with Animation */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">KRAYONS</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="animate-fade-in-up animate-delay-200">
                Since 2014, <strong className="text-foreground">KRAYONS</strong> has been at the forefront of 
                revolutionizing the events and marketing landscape. We are an integrated marketing group 
                dedicated to breaking traditional barriers and creating extraordinary experiences.
              </p>
              
              <p className="animate-fade-in-up animate-delay-300">
                Our mission is to empower promising brands and startups with <strong className="text-foreground">fresh, 
                strategic, and measurable</strong> event & marketing solutions that drive real business impact 
                across India and international markets.
              </p>
              
              <p className="animate-fade-in-up animate-delay-400">
                We believe in the power of <strong className="text-foreground">strategic innovation</strong> combined 
                with <strong className="text-foreground">data-driven insights</strong> to create campaigns that 
                not only capture attention but convert audiences into loyal brand advocates.
              </p>
            </div>

            {/* Vision Statement with Animation */}
            <div className="mt-8 p-6 bg-gradient-subtle rounded-lg border-l-4 border-primary animate-slide-up animate-delay-500 hover:shadow-card transition-shadow duration-300">
              <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted partner for brands looking to create meaningful connections 
                through innovative events and experiential marketing that transcends traditional boundaries.
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