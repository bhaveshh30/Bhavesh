import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Monitor, Smartphone, Globe } from 'lucide-react';
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
      className="py-20 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Parallax Background Layer */}
      <ParallaxLayer speed={0.2} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Parallax background"
          className="w-full h-full object-cover opacity-60"
        />
      </ParallaxLayer>
      {/* Parallax Foreground Floating Layer */}
      <ParallaxLayer speed={0.6} className="absolute top-10 right-10 z-20">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40"></div>
      </ParallaxLayer>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Featured Work</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Projects
            </span>
          </h2>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div key={project.id} className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-pink-300 group">
                <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-110" style={{padding: project.title === 'Mishkas Makeup' ? '1.5rem' : undefined}} />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold bg-white/80 text-gray-700 shadow">
                    {project.status}
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <div className="text-sm text-gray-500">{project.subtitle}</div>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <span key={highlight} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-pink-100">
                  Visit Site
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;