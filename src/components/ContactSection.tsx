import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MessageSquare, User, MapPin, Github, Linkedin, Clock, Gauge, Zap } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Message sent:', formData);
    setFormData({ name: '', email: '', project: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden tire-pattern"
      style={{background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)'}}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 dark-card rounded-full mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse speedometer-glow"></div>
            <span className="text-sm font-medium text-gray-300">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="rider-gradient-text">
              Ready to Build Something Smart?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have an AI project in mind? I'd love to help you build intelligent, high-performance solutions that are future-ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="dark-card rounded-3xl p-8 shadow-chrome">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 metallic-red-gradient rounded-2xl flex items-center justify-center vintage-gauge">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100">Email</div>
                    <div className="text-gray-400">gawadebhaveshlaxman@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 chrome-gradient rounded-2xl flex items-center justify-center vintage-gauge">
                    <MessageSquare className="w-6 h-6 text-gray-800" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100">Phone</div>
                    <div className="text-gray-400">+91-9356648430</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center vintage-gauge">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100">Location</div>
                    <div className="text-gray-400">Goa / Bengaluru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center vintage-gauge">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-100">Response Time</div>
                    <div className="text-gray-400">Usually within 24 hours</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold text-gray-100 mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/bhaveshh30" target="_blank" rel="noopener noreferrer" className="w-12 h-12 dark-card rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-rider-glow">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/bhaveshh30/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 dark-card rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:shadow-rider-glow">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-800/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse speedometer-glow"></div>
                <span className="font-semibold text-green-300">Available for Freelance</span>
              </div>
              <p className="text-green-400 text-sm">
                I'm actively taking on new AI and web development projects. 
                Let's connect and bring your next intelligent idea to life!
              </p>
            </div>

            {/* Rider Badge */}
            <div className="dark-card rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 metallic-red-gradient rounded-full flex items-center justify-center shadow-rider-glow">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-100">Royal Enfield Continental GT 650</div>
                  <div className="text-gray-400 text-sm">Professional Developer & Passionate Rider</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="dark-card rounded-3xl p-8 shadow-chrome">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-semibold text-sm mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-gray-100 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 font-semibold text-sm mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-gray-100 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold text-sm mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="ai-website">AI-Integrated Website</option>
                    <option value="chatbot">AI Chatbot Development</option>
                    <option value="prompt-engineering">Prompt Engineering</option>
                    <option value="web-app">Web Application</option>
                    <option value="automation">Workflow Automation</option>
                    <option value="consulting">AI Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold text-sm mb-2">
                    Project Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-gray-100 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors resize-none"
                      placeholder="Tell me about your AI project, goals, timeline, and any specific requirements..."
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full metallic-red-gradient text-white rounded-xl py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-rider-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-rider-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;