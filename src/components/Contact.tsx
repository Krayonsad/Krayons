import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@krayons.in",
      description: "Drop us a line anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Mumbai, India",
      description: "Our headquarters"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We're always here to help"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Ready to Break <span className="text-gradient">Barriers?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Let's discuss how we can elevate your brand through strategic events and innovative marketing solutions. 
            Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form with Animation */}
          <div className="lg:col-span-2 animate-fade-in-left">
            <Card className="shadow-card border-0 bg-card group hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">Let's Collaborate</CardTitle>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Fill out the form below and we'll get back to you with a customized proposal.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, event requirements, or how we can help you break barriers..."
                      required
                      rows={6}
                      className="border-border resize-none focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-hero w-full md:w-auto group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information with Staggered Animation */}
          <div className="space-y-6 animate-fade-in-right">
            {contactInfo.map((info, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <Card className="card-hover shadow-card border-0 bg-card group hover:bg-gradient-subtle transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 icon-bounce">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium mb-1 group-hover:scale-105 transition-transform origin-left">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* CTA Card with Pulse Animation */}
            <div className="animate-scale-in animate-delay-500">
              <Card className="bg-gradient-primary text-white border-0 hover:shadow-glow transition-shadow duration-300 pulse-glow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    For urgent project discussions or quick questions
                  </p>
                  <Button variant="secondary" className="w-full hover:scale-105 transition-transform">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional CTA Section with Animation */}
        <div className="mt-16 text-center bg-gradient-subtle rounded-2xl p-12 animate-slide-up animate-delay-600 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-500">
          <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
            Not sure where to start?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto hover:text-foreground transition-colors">
            Book a free 30-minute consultation with our strategy experts. We'll analyze your needs 
            and provide actionable insights to help you achieve your marketing goals.
          </p>
          <Button className="btn-hero pulse-glow">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;