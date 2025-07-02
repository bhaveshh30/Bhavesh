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
      <div className={`min-h-screen text-gray-900 overflow-x-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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