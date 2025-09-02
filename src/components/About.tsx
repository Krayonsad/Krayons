import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface AboutContent {
  content: string;
  updatedAt?: any;
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [aboutContent, setAboutContent] = useState<AboutContent>({
    content: "Krayons Group is your premier partner for digital marketing, integrated communication, and project-based solutions. We excel at forging strategic partnerships that effectively connect clients, facilitate seamless communication, and deliver exceptional project outcomes.\n\nOur expertise spans cutting-edge digital strategies, comprehensive communication across all channels, and tailored project management that consistently surpasses expectations. We don't just meet industry standards – we set them.\n\nKrayons is more than an affiliate marketing platform; we are architects of successful communication strategies and project-based collaborations. Our team comprises seasoned professionals who understand the intricacies of the digital landscape."
  });
  const sectionRef = useRef<HTMLElement>(null);

  // Fetch about content from Firestore
  const fetchAboutContent = async () => {
    try {
      const docRef = doc(db, 'settings', 'about');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data() as AboutContent;
        setAboutContent(data);
      }
    } catch (error) {
      console.error('Error fetching about content:', error);
      // Keep default content if fetch fails
    }
  };

  useEffect(() => {
    fetchAboutContent();
  }, []);

  useEffect(() => {
    // Intersection Observer for visibility
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

  // Helper function to render paragraphs with styled keywords
  const renderStyledParagraph = (text: string) => {
    return text
      .replace(/Krayons Group/g, '<strong class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Krayons Group</strong>')
      .replace(/digital marketing, integrated communication, and project-based solutions/g, '<strong class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">digital marketing, integrated communication, and project-based solutions</strong>')
      .replace(/cutting-edge digital strategies/g, '<strong class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">cutting-edge digital strategies</strong>')
      .replace(/we set them/g, '<strong class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">we set them</strong>')
      .replace(/architects of successful communication strategies/g, '<strong class="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">architects of successful communication strategies</strong>');
  };

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "10+",
      label: "Years of Excellence",
      description: "Leading digital marketing solutions since 2014",
      gradient: "from-amber-400 via-orange-500 to-red-500",
      bgGradient: "from-amber-50/80 to-orange-50/50",
      hoverBg: "hover:from-amber-100/80 hover:to-orange-100/50",
      iconBg: "from-amber-500/10 to-orange-500/10",
      iconHoverBg: "group-hover:from-amber-500/20 group-hover:to-orange-500/20",
      textColor: "text-amber-600",
      hoverTextColor: "group-hover:text-amber-600",
      borderColor: "from-amber-500 via-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "1000+",
      label: "Strategic Partnerships",
      description: "Successfully connecting advertisers and publishers",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-50/80 to-teal-50/50",
      hoverBg: "hover:from-emerald-100/80 hover:to-teal-100/50",
      iconBg: "from-emerald-500/10 to-teal-500/10",
      iconHoverBg: "group-hover:from-emerald-500/20 group-hover:to-teal-500/20",
      textColor: "text-emerald-600",
      hoverTextColor: "group-hover:text-emerald-600",
      borderColor: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: "Markets Reached",
      description: "Global digital marketing presence",
      gradient: "from-purple-400 via-pink-500 to-rose-500",
      bgGradient: "from-purple-50/80 to-pink-50/50",
      hoverBg: "hover:from-purple-100/80 hover:to-pink-100/50",
      iconBg: "from-purple-500/10 to-pink-500/10",
      iconHoverBg: "group-hover:from-purple-500/20 group-hover:to-pink-500/20",
      textColor: "text-purple-600",
      hoverTextColor: "group-hover:text-purple-600",
      borderColor: "from-purple-500 via-pink-500 to-rose-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "95%",
      label: "Project Success Rate",
      description: "Consistently exceeding digital marketing objectives",
      gradient: "from-indigo-400 via-blue-500 to-cyan-500",
      bgGradient: "from-indigo-50/80 to-blue-50/50",
      hoverBg: "hover:from-indigo-100/80 hover:to-blue-100/50",
      iconBg: "from-indigo-500/10 to-blue-500/10",
      iconHoverBg: "group-hover:from-indigo-500/20 group-hover:to-blue-500/20",
      textColor: "text-indigo-600",
      hoverTextColor: "group-hover:text-indigo-600",
      borderColor: "from-indigo-500 via-blue-500 to-cyan-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Enhanced colorful floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-gradient-to-r from-lime-500 to-green-500 rounded-full animate-pulse opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full animate-ping opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content with Enhanced Colorful Animation */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent animate-pulse bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">KRAYONS GROUP</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              {aboutContent.content.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index}
                  className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                  dangerouslySetInnerHTML={{ __html: renderStyledParagraph(paragraph) }}
                />
              ))}
            </div>

            {/* Enhanced Mission Statement with rainbow border */}
            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                 style={{borderImage: 'linear-gradient(to bottom, #6366f1, #a855f7, #ec4899) 1'}}>
              <h3 className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To facilitate the connection between advertisers and publishers, enabling them to attain their 
                digital marketing objectives through our dynamic platform that broadens reach and monetizes online assets.
              </p>
            </div>
          </div>

          {/* Enhanced Achievements Grid with unique colors */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 200 + 300}ms`,
                }}
              >
                <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${achievement.bgGradient} backdrop-blur-sm ${achievement.hoverBg} transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-${achievement.textColor.split('-')[1]}-500/20 transform-gpu`}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:${achievement.gradient.replace('from-', 'group-hover:from-').replace('via-', 'group-hover:via-').replace('to-', 'group-hover:to-')}/10 transition-all duration-500`}></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className={`bg-gradient-to-r ${achievement.iconBg} p-3 rounded-full ${achievement.textColor} ${achievement.iconHoverBg} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                        <div className="group-hover:animate-bounce">
                          {achievement.icon}
                        </div>
                      </div>
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 cursor-default`}>
                      {achievement.number}
                    </div>
                    <div className={`font-semibold text-foreground mb-2 ${achievement.hoverTextColor} transition-colors duration-300`}>
                      {achievement.label}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {achievement.description}
                    </div>
                  </CardContent>
                  
                  {/* Animated rainbow border */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${achievement.borderColor} p-[1px]`}>
                      <div className="w-full h-full rounded-lg bg-white/90"></div>
                    </div>
                  </div>
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