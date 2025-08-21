import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ThreeDBackground from "@/components/3d/ThreeDBackground";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzqGpJHM3vObDG4MggKBcRw5Mmz6Y1V_M",
  authDomain: "krayons-ca5fd.firebaseapp.com",
  projectId: "krayons-ca5fd",
  storageBucket: "krayons-ca5fd.firebasestorage.app",
  messagingSenderId: "170700101143",
  appId: "1:170700101143:web:18c6991983c281ce12ee52",
  measurementId: "G-W51CKRESVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface HeroContent {
  heading: string;
  description: string;
}

const Hero = () => {
  const [heroContent, setHeroContent] = useState<HeroContent>({
    heading: "Your Premier Digital Marketing Partner For Strategic Growth",
    description: "Krayons Group excels at forging strategic partnerships that connect advertisers with publishers, delivering Performance Advertising, Content Solutions & Influencer Marketing with measurable results."
  });
  const [loading, setLoading] = useState(true);

  // Fetch hero content from Firestore
  const fetchHeroContent = async () => {
    try {
      const docRef = doc(db, 'settings', 'hero');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data() as HeroContent;
        setHeroContent(data);
      }
    } catch (error) {
      console.error('Error fetching hero content:', error);
      // Keep default content if fetch fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroContent();
    
    // Add gradient animation styles to the document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient-shift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function to remove the style when component unmounts
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleGetInTouch = () => {
    window.location.href = 'mailto:reachus@krayons.co.in';
  };

  const handleViewWork = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to parse and render the heading with gradient spans
  const renderHeading = (heading: string) => {
    // Define patterns for gradient highlighting with enhanced animations
    const gradientPatterns = [
      {
        regex: /Digital Marketing/gi,
        className: "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent",
        style: {
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease-in-out infinite'
        }
      },
      {
        regex: /Strategic Growth/gi,
        className: "bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent",
        style: {
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease-in-out infinite',
          animationDelay: '0.5s'
        }
      }
    ];

    let components: (string | JSX.Element)[] = [heading];

    gradientPatterns.forEach((pattern, index) => {
      const newComponents: (string | JSX.Element)[] = [];
      
      components.forEach((component, compIndex) => {
        if (typeof component === 'string') {
          const parts = component.split(pattern.regex);
          const matches = component.match(pattern.regex);
          
          if (matches) {
            for (let i = 0; i < parts.length; i++) {
              if (parts[i]) {
                newComponents.push(parts[i]);
              }
              if (i < matches.length) {
                newComponents.push(
                  <span 
                    key={`gradient-${index}-${compIndex}-${i}`} 
                    className={pattern.className}
                    style={pattern.style}
                  >
                    {matches[i]}
                  </span>
                );
              }
            }
          } else {
            newComponents.push(component);
          }
        } else {
          newComponents.push(component);
        }
      });
      
      components = newComponents;
    });

    return components;
  };

  // Function to parse and render the description with bold highlights and color transitions
  const renderDescription = (description: string) => {
    // Define patterns for bold highlighting with colors and transitions
    const boldPatterns = [
      {
        regex: /Performance Advertising/gi,
        className: "font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent",
        style: {
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 2.5s ease-in-out infinite'
        }
      },
      {
        regex: /Content Solutions/gi,
        className: "font-bold bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent",
        style: {
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 2.5s ease-in-out infinite',
          animationDelay: '0.3s'
        }
      },
      {
        regex: /Influencer Marketing/gi,
        className: "font-bold bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 bg-clip-text text-transparent",
        style: {
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 2.5s ease-in-out infinite',
          animationDelay: '0.6s'
        }
      }
    ];

    let components: (string | JSX.Element)[] = [description];

    boldPatterns.forEach((pattern, index) => {
      const newComponents: (string | JSX.Element)[] = [];
      
      components.forEach((component, compIndex) => {
        if (typeof component === 'string') {
          const parts = component.split(pattern.regex);
          const matches = component.match(pattern.regex);
          
          if (matches) {
            for (let i = 0; i < parts.length; i++) {
              if (parts[i]) {
                newComponents.push(parts[i]);
              }
              if (i < matches.length) {
                newComponents.push(
                  <span 
                    key={`bold-${index}-${compIndex}-${i}`} 
                    className={pattern.className}
                    style={pattern.style}
                  >
                    {matches[i]}
                  </span>
                );
              }
            }
          } else {
            newComponents.push(component);
          }
        } else {
          newComponents.push(component);
        }
      });
      
      components = newComponents;
    });

    return components;
  };

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <ThreeDBackground 
          opacity={0.2}
          particleCount={100}
          shapeCount={8}
          colorScheme="mixed"
          animationSpeed={0.8}
          className="z-0"
        />
        <div className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Three.js Canvas Container */}
      <ThreeDBackground 
        opacity={0.2}
        particleCount={100}
        shapeCount={8}
        colorScheme="mixed"
        animationSpeed={0.8}
        className="z-0"
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-5xl my-20 font-bold text-gray-900 leading-tight animate-fade-in-up">
            {renderHeading(heroContent.heading)}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            {renderDescription(heroContent.description)}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up animate-delay-300">
            <Button 
              onClick={handleGetInTouch} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Let's Collaborate
              <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-400">
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors">Years of Excellence</div>
            </div>
            <div className="text-center group animate-delay-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent hover:scale-110 transition-transform">
                200+
              </div>
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors">Strategic Partnerships</div>
            </div>
            <div className="text-center group animate-delay-200">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-600 group-hover:text-gray-900 transition-colors">Markets Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;