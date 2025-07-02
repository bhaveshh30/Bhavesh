import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Briefcase, Users, Coffee, Award, TrendingUp, Brain, Code, Zap, Globe, Bot, Cpu } from 'lucide-react';

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    satisfaction: 0,
    coffee: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalStats = {
    experience: 3,
    projects: 15,
    satisfaction: 100,
    coffee: 500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        experience: Math.floor(finalStats.experience * easeOut),
        projects: Math.floor(finalStats.projects * easeOut),
        satisfaction: Math.floor(finalStats.satisfaction * easeOut),
        coffee: Math.floor(finalStats.coffee * easeOut)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const skills = [
    { name: 'Prompt Engineering', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Integration', icon: Cpu, color: 'from-purple-500 to-pink-500' },
    { name: 'React & TypeScript', icon: Code, color: 'from-emerald-500 to-teal-500' },
    { name: 'Tailwind CSS', icon: Zap, color: 'from-orange-500 to-red-500' },
    { name: 'Chatbot Development', icon: Bot, color: 'from-indigo-500 to-purple-500' },
    { name: 'Web Development', icon: Globe, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">About Me</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized in AI-powered web development, prompt engineering, and creating intelligent digital solutions that drive results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Calendar,
              label: 'Years Experience',
              value: animatedStats.experience,
              suffix: '+',
              color: 'from-blue-500 to-cyan-500',
              description: 'Building AI-powered solutions'
            },
            {
              icon: Briefcase,
              label: 'AI Projects Completed',
              value: animatedStats.projects,
              suffix: '+',
              color: 'from-purple-500 to-pink-500',
              description: 'Smart & efficient solutions'
            },
            {
              icon: Users,
              label: 'Client Satisfaction',
              value: animatedStats.satisfaction,
              suffix: '%',
              color: 'from-emerald-500 to-teal-500',
              description: 'Happy clients worldwide'
            },
            {
              icon: Coffee,
              label: 'Lines of Code',
              value: animatedStats.coffee,
              suffix: 'K+',
              color: 'from-orange-500 to-red-500',
              description: 'Clean & efficient code'
            }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Technical Expertise
              </h3>
              <p className="text-gray-600">
                Specialized skills in AI integration and modern web development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`group transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <div className="max-w-3xl mx-auto">
              <Award className="w-12 h-12 mx-auto mb-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Approach
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in combining modern web development with cutting-edge AI to create intelligent, 
                high-performance websites. From custom GPT prompt systems to AI-integrated chatbots, 
                I build digital experiences that are smart, fast, and future-ready. Let's connect and bring your next idea to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;