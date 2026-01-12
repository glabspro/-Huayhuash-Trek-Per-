import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Translation } from '../types';

const MotionNav = motion.nav as any;
const MotionDiv = motion.div as any;

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en');

  return (
    <MotionNav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-2' : 'py-4 md:py-6'}`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex justify-between items-center rounded-full transition-all duration-500 ${scrolled ? 'glass-panel px-4 py-2 shadow-lg' : 'px-2'}`}>
          
          {/* LOGO: Matching the user's screenshot */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#facc15] rounded-full shadow-inner overflow-hidden flex-shrink-0">
               <Mountain className="text-[#022c22] w-6 h-6 md:w-8 md:h-8 absolute bottom-1" fill="currentColor" />
               <div className="absolute w-full h-3 bg-[#a3e635] bottom-0 opacity-40 blur-sm"></div>
            </div>

            <div className="flex flex-col leading-tight">
              <div className="flex items-baseline gap-1">
                <span className="text-lg md:text-xl font-black text-brand-dark dark:text-white tracking-tighter">
                  Huayhuash
                </span>
                <span className="text-lg md:text-xl font-black text-[#a3e635] tracking-tighter">
                  Trek
                </span>
                <span className="text-lg md:text-xl font-black text-brand-dark dark:text-white tracking-tighter">
                  Perú
                </span>
              </div>
              <span className="text-[0.55rem] font-bold tracking-[0.15em] text-gray-500 dark:text-gray-400 uppercase">
                BY ROCIO & FAMILY
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-sm font-bold uppercase tracking-widest text-brand-dark dark:text-gray-200">
               <a href="#home" className="hover:text-brand-green transition-colors">Home</a>
               <a href="#treks" className="hover:text-brand-green transition-colors">Expeditions</a>
               <a href="#ai-planner" className="hover:text-brand-green transition-colors">Guide</a>
            </nav>
            <div className="flex items-center gap-2 border-l border-gray-300 dark:border-white/10 pl-4">
               <button onClick={toggleTheme} className="p-2 text-brand-dark dark:text-brand-sun hover:scale-110 transition-transform">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
               </button>
               <button onClick={toggleLang} className="text-xs font-black px-3 py-1.5 rounded-lg border border-brand-dark/20 dark:border-white/20 hover:bg-brand-green hover:text-brand-dark transition-all">
                {lang.toUpperCase()}
               </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2 text-brand-dark dark:text-brand-sun">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              className="p-2 bg-brand-dark dark:bg-white/10 text-white rounded-full" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl border-b border-brand-green/20"
          >
            <div className="flex flex-col p-6 gap-4 text-center font-black uppercase tracking-widest">
              <a href="#home" onClick={() => setIsOpen(false)} className="py-2">Home</a>
              <a href="#treks" onClick={() => setIsOpen(false)} className="py-2">Expeditions</a>
              <a href="#ai-planner" onClick={() => setIsOpen(false)} className="py-2">Digital Guide</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="py-2 bg-brand-green text-brand-dark rounded-xl">Book Now</a>
              <button onClick={() => { toggleLang(); setIsOpen(false); }} className="text-brand-blue py-2 border-t border-gray-100 dark:border-white/5 mt-2">
                Switch to {lang === 'en' ? 'Español' : 'English'}
              </button>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionNav>
  );
};