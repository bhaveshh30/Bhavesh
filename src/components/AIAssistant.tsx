import React, { useState, useEffect } from 'react';
import { Bot, MessageCircle, X, Zap } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "Hi! I'm NOVA, Alex's AI assistant. Ready to explore this digital realm?",
    "I can guide you through Alex's missions and showcase their creative prowess.",
    "Click on any project to dive deeper into the development process!",
    "Need to connect with Alex? I can help you navigate to the contact portal."
  ];

  useEffect(() => {
    if (isOpen && currentMessage < messages.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 1500);
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
      {/* AI Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Bot className="w-8 h-8 text-black" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
      </button>

      {/* AI Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-black/90 border border-cyan-400/30 rounded-lg backdrop-blur-sm animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-space-mono font-bold text-cyan-400">NOVA AI</h3>
                <p className="text-xs text-gray-400">Digital Guide</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto">
            {messages.slice(0, currentMessage + 1).map((message, index) => (
              <div key={index} className="mb-4 animate-slide-up">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-black" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-300 font-space-mono">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-gray-700">
            {currentMessage < messages.length - 1 ? (
              <button
                onClick={handleNextMessage}
                disabled={isTyping}
                className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-space-mono font-bold text-black transition-all duration-300 hover:scale-105 disabled:opacity-50"
              >
                {isTyping ? 'NOVA is thinking...' : 'Continue'}
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-3 py-2 border border-cyan-400 rounded-lg text-cyan-400 text-xs font-space-mono hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  View Projects
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-3 py-2 border border-purple-400 rounded-lg text-purple-400 text-xs font-space-mono hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Contact Alex
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;