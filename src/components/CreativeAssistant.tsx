import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, ArrowRight } from 'lucide-react';

const CreativeAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "Hi! I'm here to help you explore Bhavesh's AI-powered development work.",
    "Want to see some intelligent projects? I can guide you through the portfolio!",
    "Curious about AI integration or prompt engineering? Just ask!",
    "Ready to start an AI project together? Let's connect!"
  ];

  useEffect(() => {
    if (isOpen && currentMessage < messages.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentMessage]);

  const handleNextMessage = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(prev => prev + 1);
    }
  };

  return (
    <>
      {/* Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 red-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-accent ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 light-card rounded-2xl shadow-professional border border-gray-200 animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 red-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">AI Assistant</h3>
                <p className="text-xs text-gray-600">Development Helper</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-6 h-64 overflow-y-auto">
            {messages.slice(0, currentMessage + 1).map((message, index) => (
              <div key={index} className="mb-4 animate-slide-up">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 red-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-md p-4 max-w-xs border border-gray-100">
                    <p className="text-sm text-gray-700">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 red-accent rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-50 rounded-2xl rounded-tl-md p-4 border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="p-6 border-t border-gray-200">
            {currentMessage < messages.length - 1 ? (
              <button
                onClick={handleNextMessage}
                disabled={isTyping}
                className="w-full px-4 py-3 red-accent rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 shadow-accent"
              >
                {isTyping ? 'Thinking...' : 'Continue'}
                {!isTyping && <ArrowRight className="w-4 h-4" />}
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-3 border border-red-300 rounded-xl text-red-600 text-sm font-medium hover:bg-red-50 transition-all duration-300"
                >
                  View Work
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-3 red-accent rounded-xl text-white text-sm font-medium hover:scale-105 transition-all duration-300 shadow-accent"
                >
                  Get in Touch
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CreativeAssistant;