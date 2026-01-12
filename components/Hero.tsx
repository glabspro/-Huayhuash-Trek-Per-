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
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544198365-f5d60b6f8d3e?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Huayhuash Mountains"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-brand-dark/80 via-brand-dark/40 to-brand-dark' : 'from-black/40 via-transparent to-light-bg'}`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel bg-white/20 dark:bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-brand-green" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Ultimate Trekking Experience</span>
        </MotionDiv>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl lg:text-9xl font-display font-black text-white mb-6 drop-shadow-2xl leading-[0.9]"
        >
          Huayhuash <br/>
          <span className="text-brand-green">Trek Peru</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#treks" className="w-full sm:w-auto px-8 py-4 bg-brand-green text-brand-dark rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2">
            Explore Circuits <ArrowRight size={20} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <MapPin size={20} /> Book Now
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};