import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

const MotionDiv = motion.div as any;

interface HeroProps {
  t: Translation;
  theme: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ t, theme }) => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-16 overflow-hidden bg-brand-dark">
      {/* Background with robust source & fallback */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <img 
          src="https://images.unsplash.com/photo-1596708761234-a4b7f8303f29?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60 md:opacity-100"
          alt="Yerupajá Mountain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-brand-dark/80 via-brand-dark/40 to-brand-dark' : 'from-black/60 via-transparent to-light-bg'}`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-md mx-auto"
        >
          <Sparkles size={14} className="text-brand-green" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Andes Expedition</span>
        </MotionDiv>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[2.75rem] md:text-8xl lg:text-9xl font-display font-black text-white mb-6 drop-shadow-2xl leading-[1.1] md:leading-[0.9]"
        >
          Huayhuash <br/>
          <span className="text-brand-green italic">Trek Peru</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light px-4"
        >
          {t.hero.subtitle}
        </motion.p>

        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
        >
          <a href="#treks" className="w-full sm:w-auto px-8 py-4 bg-brand-green text-brand-dark rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(163,230,53,0.3)] flex items-center justify-center gap-2">
            View Circuits <ArrowRight size={18} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <MapPin size={18} /> Book Trip
          </a>
        </MotionDiv>
      </div>
      
      {/* Visual indicator for scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-green rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};