import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Monitor, Smartphone, Globe, Zap } from 'lucide-react';
import ParallaxLayer from './ParallaxLayer';

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const projects = [
    {
      id: 1,
      title: 'Mishkas Makeup',
      subtitle: 'Professional Makeup Artistry',
      tech: ['React', 'Tailwind'],
      status: 'Live',
      color: 'from-pink-400 to-red-400',
      image: 'https://goamishkasmakeupartist.in/MiskasLOGO.png',
      highlights: ['Portfolio Gallery', 'Service Booking', 'Mobile Friendly'],
      link: 'https://goamishkasmakeupartist.in'
    },
    {
      id: 2,
      title: 'Custom GPT Prompt System',
      subtitle: 'Automated Workflow Solution',
      tech: ['React Native', 'OpenAI API', 'Python', 'FastAPI', 'PostgreSQL'],
      status: 'In Development',
      icon: Smartphone,
      color: 'from-blue-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Custom GPT Models', 'Workflow Automation', 'Content Optimization'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Business Assistant',
      subtitle: 'Intelligent Customer Support',
      tech: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'Vercel', 'Supabase'],
      status: 'Live',
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Natural Language Processing', 'Multi-language Support', 'CRM Integration'],
      link: '#'
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden min-h-screen flex items-center justify-center tire-pattern"
      style={{background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)'}}
    >
      {/* Chrome Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-900/10 to-gray-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-gray-700/5 to-red-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 dark-card rounded-full mb-6">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse pulse-badge"></div>
            <span className="text-sm font-medium text-gray-300">Featured Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="rider-gradient-text">
              AI-Powered Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Intelligent solutions built with precision and performance in mind
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div 
                key={project.id} 
                className={`dark-card rounded-2xl shadow-chrome p-6 flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.03] hover:shadow-rider-glow group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain bg-gray-900 transition-transform duration-500 group-hover:scale-110" 
                    style={{padding: project.title === 'Mishkas Makeup' ? '2rem' : '1rem'}} 
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold dark-card text-gray-300 shadow-chrome">
                    {project.status}
                  </div>
                  {project.status === 'Live' && (
                    <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse speedometer-glow"></div>
                  )}
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-400">{project.subtitle}</div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <span key={highlight} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs font-medium border border-gray-700">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-red-900/20 text-red-300 rounded-lg text-xs font-medium border border-red-800/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 metallic-red-gradient text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-rider-glow group"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Rider Quote */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="dark-card rounded-3xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 chrome-gradient rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-gray-800" />
              </div>
            </div>
            <blockquote className="text-lg text-gray-300 italic mb-4">
              "Like tuning a Continental GT 650 for peak performance, I craft each project with precision, 
              attention to detail, and a passion for excellence."
            </blockquote>
            <cite className="text-sm text-gray-500">— Bhavesh, Developer & GT 650 Rider</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;