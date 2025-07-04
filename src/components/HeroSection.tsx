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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-100"></div>
      
      {/* Subtle Motion Lines */}
      <div className="absolute inset-0 road-pattern opacity-30"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-red-100/20 to-red-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-gray-100/30 to-red-100/30 rounded-full blur-3xl" style={{ animation: 'subtleFloat 8s ease-in-out infinite' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div ref={ref} className={`grid lg:grid-cols-12 gap-12 xl:gap-16 items-center reveal${inView ? ' in-view' : ''}`}>
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 light-card rounded-full shadow-professional backdrop-blur-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse pulse-badge"></div>
                <span className="text-sm font-medium text-gray-700">
                  Available for <span className={`underline-reveal text-red-600${inView ? ' in-view' : ''}`}>freelance</span> projects
                </span>
              </div>
              
              {/* Main Heading - Clean and Professional */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                <span className="block text-gray-900 mb-2">Hey, I'm</span>
                <span className="block text-red-600" style={{
                  fontFamily: 'Playfair Display, serif', 
                  letterSpacing: '-0.02em', 
                  fontWeight: 700, 
                  lineHeight: 1.1
                }}>
                  Bhavesh
                </span>
              </h1>
              
              {/* Dynamic Subtitle */}
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-800 font-semibold h-12 flex items-center">
                <span className="inline-block">An </span>
                <span className="inline-block relative font-semibold text-red-600 ml-2 min-w-[160px]">
                  <span key={currentWord} className="flip-in-x absolute left-0 top-0 w-full text-red-600">
                    {words[currentWord]}
                  </span>
                </span>
                <span className="inline-block ml-2 font-bold tracking-tight text-gray-900">Web Developer</span>
              </div>
              
              {/* Typewriter Effect */}
              <div className="text-lg lg:text-xl text-gray-700 font-medium min-h-[3rem] flex items-center">
                {showTypewriter && (
                  <span className="typewriter">Building smart, beautiful web experiences with AI & modern tech.</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                I help individuals build intelligent, high-performance websites by combining modern web development with cutting-edge AI. 
                From responsive designs to custom GPT prompt systems, I create digital experiences that are smart, fast, and future-ready.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 red-accent text-white rounded-2xl font-semibold transition-all duration-300 cta-btn shadow-accent hover:shadow-lg"
              >
                <span className="relative z-10">View My Work</span>
                <span className="cta-overlay"></span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 light-card text-gray-700 rounded-2xl font-semibold transition-all duration-300 hover:border-red-300 cta-btn shadow-professional hover:shadow-lg"
              >
                <span className="relative z-10">Let's Connect</span>
                <span className="cta-overlay"></span>
                <MessageCircle className="w-5 h-5 relative z-10" />
              </button>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Interactive Card */}
              <div className="relative light-card rounded-3xl shadow-professional p-8 transform rotate-1 hover:rotate-0 transition-all duration-500 motion-element backdrop-blur-sm border border-white/50">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-professional">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">AI Development</h3>
                      <p className="text-gray-600">Smart & efficient</p>
                    </div>
                  </div>
                  
                  {/* Process Steps */}
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

              {/* Floating Tech Icons with Smooth Animations */}
              <div className="absolute inset-0 pointer-events-none">
                {/* React Icon - Orbital Animation */}
                <div 
                  className="floating-icon-orbit absolute z-20"
                  style={{
                    top: '10%',
                    right: '-20%',
                    animationDelay: '0s'
                  }}
                >
                  <SiReact className="w-6 h-6 text-cyan-500" />
                </div>
                
                {/* Tailwind Icon - Counter Orbital */}
                <div 
                  className="floating-icon-counter-orbit absolute z-20"
                  style={{
                    top: '40%',
                    right: '-25%',
                    animationDelay: '2s'
                  }}
                >
                  <SiTailwindcss className="w-6 h-6 text-cyan-600" />
                </div>
                
                {/* JavaScript Icon - Elliptical */}
                <div 
                  className="floating-icon-elliptical absolute z-20"
                  style={{
                    bottom: '10%',
                    right: '-20%',
                    animationDelay: '4s'
                  }}
                >
                  <SiJavascript className="w-6 h-6 text-yellow-500" />
                </div>
                
                {/* OpenAI Icon - Figure Eight */}
                <div 
                  className="floating-icon-figure-eight absolute z-20"
                  style={{
                    top: '30%',
                    left: '-25%',
                    animationDelay: '6s'
                  }}
                >
                  <SiOpenai className="w-6 h-6 text-green-600" />
                </div>
              </div>

              {/* Decorative Accent Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 red-accent rounded-2xl opacity-80 shadow-accent z-0" style={{ animation: 'subtleFloat 6s ease-in-out infinite' }}></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 chrome-accent rounded-2xl opacity-60 z-0" style={{ animation: 'subtleFloat 4s ease-in-out infinite 1.5s' }}></div>
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