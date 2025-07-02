import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, MessageCircle, Zap, Gauge } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SiReact, SiTailwindcss, SiJavascript, SiOpenai } from 'react-icons/si';

const HeroSection: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['AI-Powered', 'Innovative', 'Future-Ready', 'Intelligent'];

  const [ref, inView] = useInView({ threshold: 0.2 });
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    setTimeout(() => setShowTypewriter(true), 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden tire-pattern">
      {/* GT 650 Silhouette */}
      <div className="bike-silhouette"></div>
      
      {/* Chrome Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-900/20 to-gray-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-gray-700/10 to-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-900/5 to-red-900/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Chrome Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 chrome-gradient rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center reveal${inView ? ' in-view' : ''}`}>
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 dark-card rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse pulse-badge speedometer-glow"></div>
                <span className="text-sm font-medium text-gray-300">Available for <span className={`underline-reveal text-red-400${inView ? ' in-view' : ''}`}>freelance</span> projects</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="block text-gray-100">Hey, I'm</span>
                <span className="block rider-gradient-text" style={{fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em', fontWeight: 700, lineHeight: 1.1}}>
                  Bhavesh
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-gray-200 font-semibold mt-2 h-10 flex items-center">
                <span className="inline-block">An </span>
                <span className="inline-block relative font-semibold text-red-400 ml-2" style={{minWidth: 140}}>
                  <span key={currentWord} className="flip-in-x absolute left-0 top-0 w-full text-red-400">
                    {words[currentWord]}
                  </span>
                </span>
                <span className="inline-block ml-2 font-bold tracking-tight text-gray-100">Web Developer</span>
              </div>
              
              <div className="text-lg lg:text-xl text-gray-300 font-medium min-h-[2.5rem]">
                {showTypewriter && (
                  <span className="typewriter">Building smart, beautiful web experiences with AI & modern tech.</span>
                )}
              </div>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                I help individuals build intelligent, high-performance websites by combining modern web development with cutting-edge AI. 
                From responsive designs to custom GPT prompt systems, I create digital experiences that are smart, fast, and future-ready.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-red-400" />
                  <span>Royal Enfield Continental GT 650 Rider</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-3 px-8 py-4 metallic-red-gradient text-white rounded-2xl font-semibold transition-all duration-300 cta-btn shadow-rider-glow"
              >
                <span className="relative z-10">View My Work</span>
                <span className="cta-overlay"></span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 dark-card text-gray-200 rounded-2xl font-semibold transition-all duration-300 hover:border-red-400/50 cta-btn"
              >
                <span className="relative z-10">Let's Connect</span>
                <span className="cta-overlay"></span>
                <MessageCircle className="w-5 h-5 relative z-10" />
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Interactive Element */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Card with Chrome Effect */}
              <div className="relative dark-card rounded-3xl shadow-chrome p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="speedometer vintage-gauge">
                      <Zap className="w-8 h-8 text-green-400" style={{filter: 'drop-shadow(0 0 10px #00ff88)'}} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-100">AI Development</h3>
                      <p className="text-gray-400">Smart & efficient</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {['Prompt Engineering', 'AI Integration', 'Web Development', 'Deployment'].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          index <= currentWord 
                            ? 'metallic-red-gradient text-white shadow-rider-glow' 
                            : 'bg-gray-700 text-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                        <span className={`font-medium transition-colors duration-300 ${
                          index <= currentWord ? 'text-gray-200' : 'text-gray-500'
                        }`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Tech Icons */}
              <div className="pointer-events-none">
                <span className="floating-icon floating-icon-1 flex items-center justify-center text-cyan-400">
                  <SiReact size={24} />
                </span>
                <span className="floating-icon floating-icon-2 flex items-center justify-center text-cyan-500">
                  <SiTailwindcss size={24} />
                </span>
                <span className="floating-icon floating-icon-3 flex items-center justify-center text-yellow-400">
                  <SiJavascript size={24} />
                </span>
                <span className="floating-icon floating-icon-4 flex items-center justify-center text-green-400">
                  <SiOpenai size={24} />
                </span>
              </div>

              {/* Chrome Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 metallic-red-gradient rounded-2xl opacity-80 animate-float shadow-rider-glow"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 chrome-gradient rounded-2xl opacity-60 animate-float shadow-chrome" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 chrome-gradient rounded-full flex items-center justify-center">
          <ChevronDown className="w-5 h-5 text-gray-800" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;