import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Calendar, ExternalLink, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp, setDoc, getDoc } from 'firebase/firestore';

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
  id?: string;
  name: string;
  link: string;
  createdAt?: any;
}

interface HeroContent {
  heading: string;
  description: string;
  updatedAt?: any;
}

const Admin = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [heroContent, setHeroContent] = useState<HeroContent>({
    heading: "Your Premier Digital Marketing Partner For Strategic Growth",
    description: "Krayons Group excels at forging strategic partnerships that connect advertisers with publishers, delivering Performance Advertising, Content Solutions & Influencer Marketing with measurable results."
  });
  const [editingHero, setEditingHero] = useState(false);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'events'>('hero');

  const [newEvent, setNewEvent] = useState<Event>({
    name: '',
    link: ''
  });

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
    }
  };

  // Update hero content
  const handleUpdateHeroContent = async () => {
    if (!heroContent.heading.trim() || !heroContent.description.trim()) {
      alert('Please fill in both heading and description fields');
      return;
    }

    try {
      setSaving(true);
      const docRef = doc(db, 'settings', 'hero');
      await setDoc(docRef, {
        ...heroContent,
        updatedAt: serverTimestamp()
      });
      
      setEditingHero(false);
      alert('Hero content updated successfully!');
    } catch (error) {
      console.error('Error updating hero content:', error);
      alert('Failed to update hero content. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Fetch events from Firestore
  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventsData: Event[] = [];
      querySnapshot.forEach((doc) => {
        eventsData.push({ id: doc.id, ...doc.data() } as Event);
      });
      // Sort by creation date, newest first
      eventsData.sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return b.createdAt.seconds - a.createdAt.seconds;
        }
        return 0;
      });
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
      alert('Failed to fetch events. Please check your Firebase configuration.');
    }
  };

  // Add new event
  const handleAddEvent = async () => {
    if (!newEvent.name || !newEvent.link) {
      alert('Please fill in both name and link fields');
      return;
    }

    try {
      setSaving(true);
      const docRef = await addDoc(collection(db, 'events'), {
        ...newEvent,
        createdAt: serverTimestamp()
      });
      
      const addedEvent = { ...newEvent, id: docRef.id, createdAt: new Date() };
      setEvents([addedEvent, ...events]);
      setNewEvent({
        name: '',
        link: ''
      });
      setIsAddingEvent(false);
      alert('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Update event
  const handleUpdateEvent = async () => {
    if (!editingEvent || !editingEvent.id) return;

    try {
      setSaving(true);
      const eventRef = doc(db, 'events', editingEvent.id);
      await updateDoc(eventRef, {
        name: editingEvent.name,
        link: editingEvent.link
      });

      setEvents(events.map(event => 
        event.id === editingEvent.id ? editingEvent : event
      ));
      setEditingEvent(null);
      alert('Event updated successfully!');
    } catch (error) {
      console.error('Error updating event:', error);
      alert('Failed to update event. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Delete event
  const handleDeleteEvent = async (eventId: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      await deleteDoc(doc(db, 'events', eventId));
      setEvents(events.filter(event => event.id !== eventId));
      alert('Event deleted successfully!');
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event. Please try again.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchHeroContent(), fetchEvents()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage your website content and events</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/60 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/20">
            <Button
              onClick={() => setActiveTab('hero')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'hero'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 bg-transparent hover:bg-white/50'
              }`}
            >
              <Home className="w-4 h-4 mr-2" />
              Hero Content
            </Button>
            <Button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'events'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 bg-transparent hover:bg-white/50'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Events
            </Button>
          </div>
        </div>

        {/* Hero Content Tab */}
        {activeTab === 'hero' && (
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Hero Section Content</h2>
              {!editingHero && (
                <Button
                  onClick={() => setEditingHero(true)}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Content
                </Button>
              )}
            </div>

            {editingHero ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Main Heading *</label>
                  <input
                    type="text"
                    value={heroContent.heading}
                    onChange={(e) => setHeroContent({ ...heroContent, heading: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter main heading"
                  />
                  <p className="text-xs text-gray-500 mt-1">This will appear as the main heading on your homepage</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={heroContent.description}
                    onChange={(e) => setHeroContent({ ...heroContent, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    placeholder="Enter description"
                  />
                  <p className="text-xs text-gray-500 mt-1">This will appear as the subtitle/description below the main heading</p>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    onClick={() => {
                      setEditingHero(false);
                      // Reset to original values if cancelled
                      fetchHeroContent();
                    }}
                    variant="outline"
                    className="px-6 py-3"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleUpdateHeroContent}
                    disabled={saving}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white px-6 py-3"
                  >
                    {saving ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </div>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Heading:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <p className="text-gray-700 font-medium">{heroContent.heading}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Description:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <p className="text-gray-700">{heroContent.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <>
            {/* Add Event Button */}
            <div className="mb-8">
              <Button
                onClick={() => setIsAddingEvent(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add New Event
              </Button>
            </div>

            {/* Add Event Form */}
            {isAddingEvent && (
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Add New Event</h2>
                  <Button
                    onClick={() => setIsAddingEvent(false)}
                    variant="ghost"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Name *</label>
                    <input
                      type="text"
                      value={newEvent.name}
                      onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter event name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Link *</label>
                    <input
                      type="url"
                      value={newEvent.link}
                      onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="https://example.com/event"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-8">
                  <Button
                    onClick={() => setIsAddingEvent(false)}
                    variant="outline"
                    className="px-6 py-3"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddEvent}
                    disabled={saving}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3"
                  >
                    {saving ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </div>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save Event
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Events List */}
            <div className="grid gap-6">
              {events.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No events yet</h3>
                  <p className="text-gray-500">Create your first event to get started</p>
                </div>
              ) : (
                events.map((event) => (
                  <div key={event.id} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                    <div className="p-6">
                      {editingEvent?.id === event.id ? (
                        // Edit Form
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Event Name</label>
                            <input
                              type="text"
                              value={editingEvent.name}
                              onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Event Link</label>
                            <input
                              type="url"
                              value={editingEvent.link}
                              onChange={(e) => setEditingEvent({ ...editingEvent, link: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                          </div>

                          <div className="flex justify-end space-x-3">
                            <Button
                              onClick={() => setEditingEvent(null)}
                              variant="outline"
                              size="sm"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={handleUpdateEvent}
                              disabled={saving}
                              size="sm"
                              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white"
                            >
                              {saving ? 'Saving...' : 'Save'}
                            </Button>
                          </div>
                        </div>
                      ) : (
                        // Display Mode
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                            <div className="flex items-center text-gray-600">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              <a 
                                href={event.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-200"
                              >
                                {event.link}
                              </a>
                            </div>
                          </div>

                          <div className="flex space-x-2 ml-4">
                            <Button
                              onClick={() => setEditingEvent(event)}
                              variant="outline"
                              size="sm"
                              className="text-blue-600 border-blue-600 hover:bg-blue-50"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => event.id && handleDeleteEvent(event.id)}
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;