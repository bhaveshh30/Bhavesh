import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, Play, Sparkles, MessageCircle } from 'lucide-react';
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
    }, 2000);
    setTimeout(() => setShowTypewriter(true), 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center reveal${inView ? ' in-view' : ''}`}>
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse pulse-badge"></div>
                <span className="text-sm font-medium text-gray-700">Available for <span className={`underline-reveal${inView ? ' in-view' : ''}`}>freelancer</span> projects</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="block text-gray-900">Hey, I'm</span>
                <span className="block animated-gradient-text" style={{fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em', fontWeight: 700, lineHeight: 1.1}}>
                  Bhavesh
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl text-gray-800 font-semibold mt-2 h-10 flex items-center">
                <span className="inline-block">An </span>
                <span className="inline-block relative font-semibold text-blue-700 ml-2" style={{minWidth: 140}}>
                  <span key={currentWord} className="flip-in-x absolute left-0 top-0 w-full text-blue-700">
                    {words[currentWord]}
                  </span>
                </span>
                <span className="inline-block ml-2 font-bold tracking-tight">Web Developer</span>
              </div>
              <div className="text-lg lg:text-xl text-gray-600 font-medium min-h-[2.5rem]">
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold transition-all duration-300 cta-btn"
              >
                <span className="relative z-10">View My Work</span>
                <span className="cta-overlay"></span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 cta-btn"
              >
                <span className="relative z-10">Let's Connect</span>
                <span className="cta-overlay"></span>
                <MessageCircle className="w-5 h-5 relative z-10" />
              </button>
            </div>
          </div>
          {/* Right Content - Interactive Element */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">AI Development</h3>
                      <p className="text-gray-600">Smart & efficient</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {['Prompt Engineering', 'AI Integration', 'Web Development', 'Deployment'].map((step, index) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index <= currentWord ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gray-100 text-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                        <span className={`font-medium ${index <= currentWord ? 'text-gray-900' : 'text-gray-400'}`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating Tech Icons */}
              <div className="pointer-events-none">
                <span className="floating-icon floating-icon-1 bg-white shadow-lg flex items-center justify-center text-blue-500">
                  <SiReact size={28} />
                </span>
                <span className="floating-icon floating-icon-2 bg-white shadow-lg flex items-center justify-center text-cyan-500">
                  <SiTailwindcss size={28} />
                </span>
                <span className="floating-icon floating-icon-3 bg-white shadow-lg flex items-center justify-center text-yellow-400">
                  <SiJavascript size={28} />
                </span>
                <span className="floating-icon floating-icon-4 bg-white shadow-lg flex items-center justify-center text-green-600">
                  <SiOpenai size={28} />
                </span>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-80 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;