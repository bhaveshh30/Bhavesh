import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Briefcase, BarChart3, MessageCircle, Gauge } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Sparkles },
    { id: 'projects', label: 'Work', icon: Briefcase },
    { id: 'stats', label: 'About', icon: BarChart3 },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass border-b border-gray-700/30' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Rider Theme */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 metallic-red-gradient rounded-xl flex items-center justify-center shadow-rider-glow">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-100">Bhavesh</span>
                <span className="text-xs text-gray-400 font-medium">GT 650 Rider</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    currentSection === id
                      ? 'metallic-red-gradient text-white shadow-rider-glow'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50 dark-card'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white dark-card rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-0 right-0 w-80 h-full dark-card shadow-chrome p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 metallic-red-gradient rounded-xl flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-gray-100">Menu</h2>
                  <p className="text-xs text-gray-400">GT 650 Rider</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-200">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl font-medium transition-all duration-300 ${
                    currentSection === id
                      ? 'metallic-red-gradient text-white shadow-rider-glow'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Rider Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="dark-card rounded-xl p-4 text-center">
                <div className="w-8 h-8 chrome-gradient rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Gauge className="w-4 h-4 text-gray-800" />
                </div>
                <p className="text-xs text-gray-400">Royal Enfield Continental GT 650</p>
                <p className="text-xs text-gray-500">Professional Rider & Developer</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;