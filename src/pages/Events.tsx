import { useState, useEffect } from 'react';
import { Calendar, Users, Sparkles, Star, ArrowRight, CheckCircle, Trophy, Globe, Lightbulb, Target, Zap, Building, Mic, Camera, Palette, Wrench, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

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

interface Event {
  id: string;
  name: string;
  link: string;
  createdAt?: any;
}

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const services = [
    {
      category: "Event Planning & Strategy",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600",
      items: [
        "Event Conceptualization",
        "Activation Campaign", 
        "Talent Procurement",
        "Trade Shows",
        "Strategy Alliances + Partnership"
      ]
    },
    {
      category: "Creative & Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      items: [
        "Creative Direction",
        "Design & Décor",
        "Custom Builds", 
        "Interactive Experiences",
        "Exhibition/Stall Design",
        "Exhibit Display/Signage's"
      ]
    },
    {
      category: "Technical & Production",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-600 to-red-600",
      items: [
        "Audio Visual, Lighting & Staging",
        "Venue Management",
        "Travel Management",
        "Technical Direction & Production",
        "Permissions",
        "Gifting/Memento"
      ]
    },
    {
      category: "Operations & Logistics",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-green-600 to-teal-600",
      items: [
        "Logistics & Planning",
        "Registration and attendee management",
        "Technical infrastructure and support"
      ]
    }
  ];

  const eventTypes = [
    { name: "Trade Shows", icon: <Building className="w-8 h-8" />, color: "from-blue-500 to-blue-700" },
    { name: "Trade Fairs", icon: <Globe className="w-8 h-8" />, color: "from-green-500 to-green-700" },
    { name: "Exhibitions", icon: <Star className="w-8 h-8" />, color: "from-purple-500 to-purple-700" },
    { name: "Conferences", icon: <Mic className="w-8 h-8" />, color: "from-orange-500 to-orange-700" },
    { name: "Summits", icon: <Trophy className="w-8 h-8" />, color: "from-red-500 to-red-700" }
  ];

  const coreServices = [
    "International trade shows and exhibitions",
    "Corporate summits and conferences", 
    "Industry fairs and expositions",
    "Virtual and hybrid events",
    "Registration and attendee management",
    "Technical infrastructure and support"
  ];

  // Fetch events from Firebase
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const eventsQuery = query(
        collection(db, 'events'),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(eventsQuery);
      const eventsData: Event[] = [];
      
      querySnapshot.forEach((doc) => {
        const eventData = { id: doc.id, ...doc.data() } as Event;
        eventsData.push(eventData);
      });
      
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    fetchEvents();
  }, []);

  const handleGetInTouch = () => {
    window.location.href = 'mailto:reachus@krayons.co.in';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative pt-24 pb-16 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Main Title */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Calendar className="w-12 h-12 text-indigo-600 animate-bounce" />
                <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent animate-gradient-shift">
                  EVENTS
                </h1>
                <Sparkles className="w-12 h-12 text-pink-600 animate-spin-slow" />
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Creating <span className="font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">extraordinary experiences</span> through 
                seamless execution of exhibitions, conferences, and trade fairs that connect businesses and people.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={handleGetInTouch}
                  className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your Event Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Our <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Events</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading events...</p>
                </div>
              ) : events.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No events available</h3>
                  <p className="text-gray-500">Check back soon for upcoming events</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event, index) => (
                    <div 
                      key={event.id}
                      className="group bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/30"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                          {event.name}
                        </h3>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            <span className="text-sm">Event Link</span>
                          </div>
                          
                          <Button
                            onClick={() => window.open(event.link, '_blank')}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                          >
                            Visit Event
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Who <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">We Are</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    For a decade, We take pride in bringing visions to life through seamless execution of exhibitions, conferences, and trade fairs that connect businesses and people. Our experienced team handles every aspect of event planning and execution, combining traditional event management excellence with modern digital capabilities.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We understand what it takes to create impactful experiences that deliver results. Whether you're planning an intimate corporate summit or a large-scale international exhibition, our team ensures flawless execution at every step.
                  </p>

                  <div className="flex items-center space-x-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                      <span className="font-semibold text-gray-800">10+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-6 h-6 text-blue-500" />
                      <span className="font-semibold text-gray-800">Expert Team</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Core Services Include:</h3>
                  {coreServices.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Our <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Services</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/30"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{service.category}</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-start space-x-3 group/item"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 group-hover/item:scale-150 transition-transform duration-300`}></div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  What <span className="text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text">We Do</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {eventTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 border border-white/30 overflow-hidden"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Background gradient animation */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 text-center">
                      <div className={`mx-auto mb-4 p-4 rounded-xl bg-gradient-to-r ${type.color} text-white group-hover:scale-125 transition-transform duration-300 w-fit`}>
                        {type.icon}
                      </div>
                      <h3 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {type.name}
                      </h3>
                    </div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-twinkle-1"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-twinkle-2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Your Next 
                <span className="block mt-2">Extraordinary Event?</span>
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Let's bring your vision to life with our decade of expertise in creating impactful experiences that deliver results.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }
        
        @keyframes spin-slow {
          from { 
            transform: rotate(0deg); 
          }
          to { 
            transform: rotate(360deg); 
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-10px) rotate(1deg); 
          }
          66% { 
            transform: translateY(5px) rotate(-1deg); 
          }
        }
        
        @keyframes twinkle-1 {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes twinkle-2 {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2); 
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-twinkle-1 {
          animation: twinkle-1 2s ease-in-out infinite;
        }
        
        .animate-twinkle-2 {
          animation: twinkle-2 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Events;