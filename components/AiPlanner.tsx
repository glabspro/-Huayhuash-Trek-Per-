import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, Loader2, Zap } from 'lucide-react';
import { Translation, Message } from '../types';
import { generateResponse } from '../services/gemini';

// Cast motion components to any to avoid TypeScript errors with framer-motion props
const MotionDiv = motion.div as any;
const MotionSpan = motion.span as any;

// Custom Chasqui Robot Icon with Animated Eyes
const ChasquiIcon = ({ className, blinking = false }: { className?: string, blinking?: boolean }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Robot Head Body */}
    <rect x="5" y="9" width="14" height="12" rx="3" strokeWidth="2" />
    
    {/* Chullo Hat Base */}
    <path d="M5 12V9c0-3 3-5 7-5s7 2 7 5v3" strokeWidth="2" />
    
    {/* Chullo Earflaps */}
    <path d="M5 15v4l3-2" strokeWidth="2" />
    <path d="M19 15v4l-3-2" strokeWidth="2" />
    
    {/* Pompom on top */}
    <circle cx="12" cy="3" r="1.5" fill="currentColor" stroke="none" />
    
    {/* Zigzag Pattern on Hat */}
    <path d="M5 10l2-1 2 1 2-1 2 1 2-1 2 1 2-1" strokeWidth="1.5" opacity="0.8" />
    
    {/* Robot Eyes - Animated */}
    <motion.g
       animate={blinking ? { scaleY: [1, 0.1, 1] } : {}}
       transition={{ repeat: Infinity, duration: 3, times: [0, 0.9, 1] }}
       style={{ transformOrigin: "12px 14px" }}
    >
        <line x1="9" y1="14" x2="9.01" y2="14" strokeWidth="3" />
        <line x1="15" y1="14" x2="15.01" y2="14" strokeWidth="3" />
    </motion.g>
    
    {/* Smile */}
    <path d="M10 17.5a3.5 3.5 0 0 0 4 0" strokeWidth="1.5" />
  </svg>
);

interface AiPlannerProps {
  t: Translation['ai'];
  lang: 'en' | 'es';
}

export const AiPlanner: React.FC<AiPlannerProps> = ({ t, lang }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'model', text: t.welcome }]);
  }, [t.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateResponse(input, lang);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-planner" className="py-24 relative overflow-hidden bg-white dark:bg-brand-dark/95">
      {/* Dynamic Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-normal"></div>
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-normal"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-brand-sun/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-normal"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side Info */}
          <MotionDiv 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            
            <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-dark dark:text-white mb-6 leading-tight">
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue animate-shimmer bg-[length:200%_100%]">Powered by AI</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 font-light leading-relaxed">
              {t.subtitle}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { en: "Packing Lists", es: "Listas de Empaque" },
                { en: "Weather Forecasts", es: "Pronóstico del Clima" },
                { en: "Acclimatization Tips", es: "Tips de Aclimatación" },
                { en: "Route Difficulty", es: "Dificultad de Rutas" },
              ].map((item, idx) => (
                <MotionDiv 
                  whileHover={{ scale: 1.05, x: 5 }}
                  key={idx} 
                  className="flex items-center gap-4 p-4 glass-panel bg-white/60 dark:bg-brand-dark/40 rounded-2xl cursor-default border-l-4 border-l-transparent hover:border-l-brand-green hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center text-white font-bold shadow-lg">
                    {idx + 1}
                  </div>
                  <span className="text-brand-dark dark:text-gray-200 font-bold">{lang === 'en' ? item.en : item.es}</span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Chat Interface */}
          <MotionDiv 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative glass-panel bg-white/70 dark:bg-brand-dark/70 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[650px] border border-white/50 dark:border-white/10 backdrop-blur-2xl ring-1 ring-white/50">
              {/* Chat Header */}
              <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-md border-b border-gray-100 dark:border-white/5 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-green to-brand-blue flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      {/* Using the Custom Chasqui Icon */}
                      <ChasquiIcon className="text-brand-dark w-9 h-9" blinking={true} />
                    </div>
                    <span className="absolute bottom-1 right-0 w-4 h-4 bg-brand-sun border-2 border-white dark:border-brand-dark rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="text-brand-dark dark:text-white font-bold text-xl tracking-tight">Chasqu-IA</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
                      <p className="text-xs text-brand-green font-bold uppercase tracking-wider">Online & Ready</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/50 dark:bg-white/10 rounded-full shadow-sm backdrop-blur-sm border border-white/20">
                  <Sparkles className="text-brand-sun w-5 h-5 animate-pulse-slow" />
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {messages.map((msg, idx) => (
                  <MotionDiv 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'model' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-green to-brand-blue flex items-center justify-center shadow-sm mr-2 flex-shrink-0 self-end mb-1">
                             <ChasquiIcon className="text-brand-dark w-5 h-5" />
                        </div>
                    )}
                    <div className={`max-w-[85%] p-5 rounded-2xl text-base leading-relaxed shadow-md relative ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-brand-blue to-brand-dark text-white rounded-tr-sm' 
                        : 'bg-white dark:bg-white/10 dark:text-gray-100 text-brand-dark rounded-tl-sm border border-gray-100 dark:border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                  </MotionDiv>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-green to-brand-blue flex items-center justify-center shadow-sm mr-2 flex-shrink-0 self-end mb-1">
                        <ChasquiIcon className="text-brand-dark w-5 h-5" blinking={true} />
                    </div>
                    <div className="bg-white dark:bg-white/10 p-4 rounded-2xl rounded-tl-sm flex gap-3 items-center border border-gray-100 dark:border-white/5 shadow-sm">
                      <Loader2 className="w-5 h-5 text-brand-green animate-spin" />
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Chasqu-IA is thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-4 bg-white/40 dark:bg-white/5 border-t border-gray-200 dark:border-white/5 backdrop-blur-md">
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t.placeholder}
                    className="w-full bg-white dark:bg-brand-dark/80 dark:text-white text-gray-900 pl-6 pr-14 py-4 rounded-full border border-gray-200 dark:border-white/10 focus:border-brand-green focus:outline-none focus:ring-4 focus:ring-brand-green/10 placeholder-gray-400 transition-all shadow-inner"
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 p-3 bg-brand-green text-brand-dark rounded-full hover:scale-110 hover:bg-brand-blue hover:text-white disabled:opacity-50 disabled:scale-100 transition-all shadow-lg"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <div className="text-center mt-3">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold opacity-70">{t.disclaimer}</span>
                </div>
              </form>
            </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};