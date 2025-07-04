import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Monitor, Smartphone, Globe, Zap } from 'lucide-react';

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
      tech: ['React', 'Tailwind CSS', 'Responsive Design'],
      status: 'Live',
      color: 'from-pink-400 to-red-400',
      image: 'https://goamishkasmakeupartist.in/MiskasLOGO.png',
      highlights: ['Portfolio Gallery', 'Service Booking', 'Mobile Optimized'],
      link: 'https://goamishkasmakeupartist.in'
    },
    {
      id: 2,
      title: 'Custom GPT Prompt System',
      subtitle: 'Automated Workflow Solution',
      tech: ['OpenAI API', 'Python', 'FastAPI', 'React'],
      status: 'In Development',
      icon: Smartphone,
      color: 'from-red-500 to-red-600',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Custom GPT Models', 'Workflow Automation', 'Content Optimization'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Business Assistant',
      subtitle: 'Intelligent Customer Support',
      tech: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'Supabase'],
      status: 'Live',
      icon: Globe,
      color: 'from-red-600 to-red-700',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Natural Language Processing', 'Multi-language Support', 'CRM Integration'],
      link: '#'
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden min-h-screen flex items-center justify-center bg-white road-pattern"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 light-card rounded-full mb-6 shadow-professional">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse pulse-badge"></div>
            <span className="text-sm font-medium text-gray-700">Featured Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-red-600">
              AI-Powered Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Intelligent solutions built with precision and performance in mind
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div 
                key={project.id} 
                className={`light-card rounded-2xl shadow-professional p-6 flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.03] hover:shadow-accent group motion-element ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-gray-50">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                    style={{padding: project.title === 'Mishkas Makeup' ? '2rem' : '1rem'}} 
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 shadow-professional">
                    {project.status}
                  </div>
                  {project.status === 'Live' && (
                    <div className="absolute top-3 right-3 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  )}
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-600">{project.subtitle}</div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <span key={highlight} className="px-3 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-medium border border-red-200">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 red-accent text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-accent group"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Professional Quote */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="light-card rounded-3xl p-8 max-w-3xl mx-auto shadow-professional">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 red-accent rounded-full flex items-center justify-center shadow-professional">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "I craft each project with precision, attention to detail, and a passion for excellence, 
              delivering solutions that drive real results for my clients."
            </blockquote>
            <cite className="text-sm text-gray-500">— Bhavesh, Professional Developer</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;