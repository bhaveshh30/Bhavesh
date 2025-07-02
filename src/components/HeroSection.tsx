import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, MessageCircle, Zap } from 'lucide-react';
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Subtle Motion Lines */}
      <div className="absolute inset-0 road-pattern opacity-50"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-gray-100/40 to-red-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center reveal${inView ? ' in-view' : ''}`}>
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 light-card rounded-full shadow-professional">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse pulse-badge"></div>
                <span className="text-sm font-medium text-gray-700">Available for <span className={`underline-reveal text-red-600${inView ? ' in-view' : ''}`}>freelance</span> projects</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="block text-gray-900">Hey, I'm</span>
                <span className="block professional-gradient-text" style={{fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em', fontWeight: 700, lineHeight: 1.1}}>
                  Bhavesh
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-gray-800 font-semibold mt-2 h-10 flex items-center">
                <span className="inline-block">An </span>
                <span className="inline-block relative font-semibold text-red-600 ml-2" style={{minWidth: 140}}>
                  <span key={currentWord} className="flip-in-x absolute left-0 top-0 w-full text-red-600">
                    {words[currentWord]}
                  </span>
                </span>
                <span className="inline-block ml-2 font-bold tracking-tight text-gray-900">Web Developer</span>
              </div>
              
              <div className="text-lg lg:text-xl text-gray-700 font-medium min-h-[2.5rem]">
                {showTypewriter && (
                  <span className="typewriter">Building smart, beautiful web experiences with AI & modern tech.</span>
                )}
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                I help individuals build intelligent, high-performance websites by combining modern web development with cutting-edge AI. 
                From responsive designs to custom GPT prompt systems, I create digital experiences that are smart, fast, and future-ready.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-3 px-8 py-4 red-accent text-white rounded-2xl font-semibold transition-all duration-300 cta-btn shadow-accent"
              >
                <span className="relative z-10">View My Work</span>
                <span className="cta-overlay"></span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 light-card text-gray-700 rounded-2xl font-semibold transition-all duration-300 hover:border-red-300 cta-btn shadow-professional"
              >
                <span className="relative z-10">Let's Connect</span>
                <span className="cta-overlay"></span>
                <MessageCircle className="w-5 h-5 relative z-10" />
              </button>
            </div>
          </div>

          {/* Right Content - Clean Interactive Element */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Card */}
              <div className="relative light-card rounded-3xl shadow-professional p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 motion-element">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-professional">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">AI Development</h3>
                      <p className="text-gray-600">Smart & efficient</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {['Prompt Engineering', 'AI Integration', 'Web Development', 'Deployment'].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          index <= currentWord 
                            ? 'red-accent text-white shadow-accent' 
                            : 'bg-gray-200 text-gray-500'
                        }`}>
                          {index + 1}
                        </div>
                        <span className={`font-medium transition-colors duration-300 ${
                          index <= currentWord ? 'text-gray-800' : 'text-gray-500'
                        }`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons - Fixed Positioning */}
              <div className="pointer-events-none">
                <div className="floating-icon floating-icon-1">
                  <SiReact className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="floating-icon floating-icon-2">
                  <SiTailwindcss className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="floating-icon floating-icon-3">
                  <SiJavascript className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="floating-icon floating-icon-4">
                  <SiOpenai className="w-6 h-6 text-green-600" />
                </div>
              </div>

              {/* Accent Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 red-accent rounded-2xl opacity-80 animate-pulse shadow-accent"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 chrome-accent rounded-2xl opacity-60 animation-delay-1000" style={{ animation: 'subtleFloat 4s ease-in-out infinite 1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 chrome-accent rounded-full flex items-center justify-center shadow-professional">
          <ChevronDown className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;