import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import CreativeAssistant from './components/CreativeAssistant';
import ProjectsSection from './components/ProjectsSection';
import StatsSection from './components/StatsSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import DotCursor from './components/DotCursor';
import './styles/animations.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'stats', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DotCursor />
      <div className={`min-h-screen bg-white text-gray-900 overflow-x-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-orange-100 to-pink-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Floating Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <Navigation currentSection={currentSection} />
        <CreativeAssistant />
        
        <main className="relative z-10">
          <HeroSection />
          <ProjectsSection />
          <StatsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}

export default App;