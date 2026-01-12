import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Translation } from '../types';

// Cast motion components to any to avoid TypeScript errors with framer-motion props
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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 }
    }
  };

  return (
    <MotionNav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className={`
        pointer-events-auto
        relative w-full max-w-6xl rounded-full transition-all duration-300
        ${scrolled 
          ? 'glass-panel py-2 px-6 shadow-xl' 
          : 'bg-transparent py-4 px-6'}
        flex justify-between items-center
      `}>
        {/* LOGO SECTION */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Logo Icon / Graphic Representation */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-brand-sun rounded-full shadow-lg group-hover:scale-110 transition-transform">
             <Mountain className="text-brand-dark w-6 h-6 absolute bottom-2" fill="currentColor" />
             <div className="absolute w-full h-2 bg-brand-green bottom-0 rounded-b-full opacity-80"></div>
          </div>

          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-1">
              <span className="font-sans text-xl font-black text-brand-dark dark:text-white tracking-tight">
                Huayhuash
              </span>
              <span className="font-script text-2xl text-brand-green font-bold -rotate-3 transform translate-y-1">
                Trek
              </span>
              <span className="font-sans text-xl font-black text-brand-dark dark:text-white tracking-tight">
                Perú
              </span>
            </div>
            <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">
              By Rocio & Family
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {['home', 'treks', 'aiPlanner', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'home' ? 'home' : item === 'treks' ? 'treks' : item === 'aiPlanner' ? 'ai-planner' : 'contact'}`}
              className="relative py-2 px-1 group text-brand-dark dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-sun transition-colors"
            >
              {(t as any)[item]}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          ))}
          
          <div className="h-6 w-px bg-gray-300 dark:bg-white/20 mx-2"></div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-brand-dark dark:text-brand-sun"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border dark:border-white/10 border-brand-dark/20 hover:border-brand-green hover:bg-brand-green/5 transition-all dark:text-white text-brand-dark font-bold text-xs"
          >
            <Globe size={14} className="text-brand-green" />
            {lang.toUpperCase()}
          </button>

          <a 
            href="#contact" 
            className="bg-brand-green text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-brand-green/30 hover:bg-brand-blue hover:shadow-brand-blue/30 hover:scale-105 transition-all active:scale-95 flex items-center gap-2"
          >
            {t.bookNow}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-brand-dark dark:text-brand-sun"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="text-brand-dark dark:text-white bg-gray-100 dark:bg-white/10 p-2.5 rounded-full hover:bg-gray-200 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-panel bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl z-50 overflow-hidden border border-brand-green/20 pointer-events-auto"
          >
            <div className="flex flex-col gap-4 text-center">
              {['home', 'treks', 'aiPlanner', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item === 'home' ? 'home' : item === 'treks' ? 'treks' : item === 'aiPlanner' ? 'ai-planner' : 'contact'}`}
                  onClick={() => setIsOpen(false)} 
                  className="text-brand-dark dark:text-white text-lg py-3 hover:bg-brand-green/10 rounded-2xl transition-colors font-medium"
                >
                  {(t as any)[item]}
                </a>
              ))}
              <div className="h-px bg-gray-200 dark:bg-white/10 my-2"></div>
              <button 
                onClick={() => { toggleLang(); setIsOpen(false); }} 
                className="text-brand-blue dark:text-brand-sun flex items-center justify-center gap-2 py-3 font-bold"
              >
                <Globe size={18} /> Switch to {lang === 'en' ? 'Español' : 'English'}
              </button>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionNav>
  );
};