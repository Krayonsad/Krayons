import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Trophy, Target, Rocket, Users, BarChart3 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "10+ Years of Proven Excellence",
      description: "A decade of consistent delivery and innovation in events and marketing",
      highlights: ["Industry Recognition", "Award-Winning Campaigns", "Consistent Quality"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team with Global Reach",
      description: "Local expertise combined with international perspective for maximum impact",
      highlights: ["Certified Professionals", "Cultural Intelligence", "Global Network"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Measurable ROI Focus",
      description: "Data-driven strategies that deliver quantifiable results for your investment",
      highlights: ["Performance Analytics", "ROI Tracking", "Continuous Optimization"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Flexible & Customized Solutions",
      description: "Tailored approaches that adapt to your unique brand needs and objectives",
      highlights: ["Custom Strategies", "Scalable Solutions", "Agile Methodology"]
    }
  ];

  const achievements = [
    {
      number: "98%",
      label: "Client Satisfaction Rate",
      description: "Consistently exceeding expectations"
    },
    {
      number: "500+",
      label: "Successful Projects",
      description: "Across diverse industries"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Dedicated project management"
    },
    {
      number: "15+",
      label: "Cities Covered",
      description: "Pan-India presence"
    }
  ];

  return (
    <section className="py-20 bg-background relative z-10" style={{ minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Why Choose <span className="text-gradient">KRAYONS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            We don't just execute events – we create strategic experiences that drive business growth and build lasting brand connections.
          </p>
        </div>

        {/* Main Reasons with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <Card className="card-hover card-tilt shadow-card border-0 bg-card group hover:bg-gradient-subtle transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary/10 p-4 rounded-lg text-primary flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 icon-bounce">
                      {reason.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                        {reason.description}
                      </p>
                      <ul className="space-y-2">
                        {reason.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300" style={{transitionDelay: `${idx * 0.1}s`}}>
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Achievements Bar with Animation */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white animate-scale-in animate-delay-400 hover:shadow-glow transition-shadow duration-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-bounce-in" style={{animationDelay: `${index * 0.1 + 0.5}s`}}>
                <div className="text-3xl md:text-4xl font-bold mb-2 counter-animate hover:scale-110 transition-transform cursor-default">
                  {achievement.number}
                </div>
                <div className="font-semibold mb-1 hover:scale-105 transition-transform">
                  {achievement.label}
                </div>
                <div className="text-sm text-white/80 hover:text-white transition-colors">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Differentiators with Wave Animation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 animate-fade-in-up animate-delay-600 group hover:bg-card/50 rounded-lg transition-all duration-300">
            <Target className="w-12 h-12 text-primary mx-auto mb-4 icon-bounce group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Strategic Approach</h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
              Every project begins with deep understanding of your objectives and target audience
            </p>
          </div>
          <div className="text-center p-6 animate-fade-in-up animate-delay-700 group hover:bg-card/50 rounded-lg transition-all duration-300">
            <Rocket className="w-12 h-12 text-primary mx-auto mb-4 icon-bounce group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Innovation Focus</h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
              Cutting-edge technology and creative solutions to make your brand stand out
            </p>
          </div>
          <div className="text-center p-6 animate-fade-in-up animate-delay-800 group hover:bg-card/50 rounded-lg transition-all duration-300">
            <Users className="w-12 h-12 text-primary mx-auto mb-4 icon-bounce group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Partnership Mindset</h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
              We become an extension of your team, invested in your long-term success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;