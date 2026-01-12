import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation, Trek } from '../types';
import { Clock, TrendingUp, MapPin, ArrowRight, Heart, MountainSnow, X, Calendar, Flag } from 'lucide-react';
import { TREKS } from '../constants';

// Cast motion components to any to avoid TypeScript errors with framer-motion props
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;

interface TreksProps {
  t: Translation['treks'];
  lang: 'en' | 'es';
}

export const Treks: React.FC<TreksProps> = ({ t, lang }) => {
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedTrek) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedTrek]);

  return (
    <section id="treks" className="py-32 relative overflow-hidden bg-light-bg dark:bg-brand-dark transition-colors duration-500">
       {/* Animated Background Pattern */}
       <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
            style={{ 
                backgroundImage: "radial-gradient(#a3e635 1px, transparent 1px)", 
                backgroundSize: "40px 40px" 
            }}>
       </div>
       
       {/* Floating Orbs */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-brand-green/20 text-brand-dark dark:text-brand-green font-bold text-sm tracking-wider uppercase border border-brand-green/30"
          >
             <MountainSnow size={16} /> Explore The Andes
          </MotionDiv>
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 text-brand-dark dark:text-white leading-tight"
          >
            {t.title}
          </MotionH2>
          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-xl font-light"
          >
            {t.subtitle}
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TREKS.map((trek, index) => (
            <MotionDiv
              key={trek.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => setSelectedTrek(trek)}
              className="group relative glass-panel rounded-[2.5rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_20px_50px_rgba(163,230,53,0.1)] transition-all duration-500 flex flex-col bg-white/70 dark:bg-brand-dark/70 border border-white/50 dark:border-white/10 cursor-pointer"
            >
              {/* Image Container with Glare Effect */}
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={trek.image} 
                  alt={trek.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-70"></div>
                
                {/* Glare/Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none z-10"></div>

                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-md border border-white/20
                    ${trek.difficulty === 'Easy' ? 'bg-emerald-500/90' : 
                      trek.difficulty === 'Moderate' ? 'bg-brand-green/90' : 
                      trek.difficulty === 'Hard' ? 'bg-brand-blue/90' : 'bg-rose-600/90'}`}>
                    {trek.difficultyLabel[lang]}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-brand-sun hover:text-brand-dark transition-all hover:scale-110">
                  <Heart size={18} fill="none" className="group-hover:fill-current" />
                </div>
              </div>
              
              <div className="p-8 relative flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-3 font-display leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-green transition-colors">{trek.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">{trek.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-brand-green/10 dark:bg-brand-green/5 text-center group-hover:bg-brand-green/20 transition-colors">
                    <Clock className="w-5 h-5 mb-1 text-brand-green" />
                    <span className="text-xs font-bold text-brand-dark dark:text-gray-300">{trek.days} {t.days}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/5 text-center group-hover:bg-brand-blue/20 transition-colors">
                    <TrendingUp className="w-5 h-5 mb-1 text-brand-blue" />
                    <span className="text-xs font-bold text-brand-dark dark:text-gray-300">{trek.maxAltitude}</span>
                  </div>
                </div>

                <button className="w-full py-4 flex items-center justify-center gap-2 rounded-2xl font-bold text-sm transition-all duration-300
                  bg-brand-dark text-white hover:bg-brand-green hover:text-brand-dark hover:shadow-lg hover:shadow-brand-green/20
                  dark:bg-white/10 dark:text-white dark:hover:bg-brand-green dark:hover:text-brand-dark"
                >
                  {t.viewDetails} <ArrowRight size={18} />
                </button>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* IMMERSIVE TREK MODAL */}
      <AnimatePresence>
        {selectedTrek && (
            <MotionDiv
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed inset-0 z-[100] flex flex-col bg-light-bg dark:bg-brand-dark overflow-hidden"
            >
                {/* Close Button - Fixed to be always visible */}
                <div className="absolute top-6 right-6 z-[110]">
                    <button 
                    onClick={() => setSelectedTrek(null)}
                    className="p-3 rounded-full bg-black/50 hover:bg-brand-sun hover:text-brand-dark text-white backdrop-blur-md transition-all shadow-xl group border border-white/20"
                    >
                        <X size={24} className="group-hover:rotate-90 transition-transform" />
                    </button>
                </div>

                {/* Content Container - Scrollable */}
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    {/* Hero Header */}
                    <div className="relative h-[60vh] w-full shrink-0">
                        <img src={selectedTrek.image} alt={selectedTrek.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-light-bg dark:to-brand-dark"></div>
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                            <div className="container mx-auto">
                                <motion.div
                                   initial={{ y: 50, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ delay: 0.2 }}
                                >
                                    <span className="bg-brand-green text-brand-dark font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-4 inline-block shadow-lg">
                                        {selectedTrek.difficultyLabel[lang]} Expedition
                                    </span>
                                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 drop-shadow-2xl leading-tight">
                                        {selectedTrek.title}
                                    </h2>
                                    <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed drop-shadow-md">
                                        {selectedTrek.description}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Itinerary Timeline */}
                    <div className="container mx-auto px-6 py-20">
                        {selectedTrek.itinerary ? (
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-16">
                                    <h3 className="text-3xl font-bold text-brand-dark dark:text-white mb-2">Expedition Itinerary</h3>
                                    <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">Day by Day Journey</p>
                                </div>
                                
                                <div className="relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-green via-brand-blue to-brand-dark opacity-30 rounded-full transform -translate-x-1/2"></div>
                                    
                                    {selectedTrek.itinerary.map((stop, i) => (
                                        <div key={i} className={`relative flex items-center mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                                            
                                            {/* Center Dot */}
                                            <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-brand-dark dark:bg-white border-4 border-brand-green z-10 transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.5)]">
                                                <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                                            </div>

                                            {/* Content Card */}
                                            <div className={`flex-1 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                                <MotionDiv
                                                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <div className="text-brand-green font-black text-6xl opacity-20 absolute -top-10 z-0 select-none hidden md:block w-full">Day {stop.day}</div>
                                                    
                                                    <div className="relative z-10 glass-panel bg-white/50 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10 hover:border-brand-green/50 transition-colors shadow-lg group text-left">
                                                        {/* Mobile Day indicator */}
                                                        <div className="md:hidden text-xs font-bold text-brand-green uppercase tracking-wider mb-2">Day {stop.day}</div>
                                                        
                                                        {/* Image */}
                                                        <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative">
                                                            <img src={stop.image} alt={stop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                                <TrendingUp size={12} className="text-brand-green" /> {stop.altitude}
                                                            </div>
                                                        </div>

                                                        <h4 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">{stop.title}</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{stop.description}</p>
                                                    </div>
                                                </MotionDiv>
                                            </div>

                                            {/* Empty Space for layout balance */}
                                            <div className="flex-1 hidden md:block"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Flag size={40} className="text-brand-green" />
                                </div>
                                <p className="text-2xl text-gray-400">Detailed itinerary being updated.</p>
                                <a href="#contact" className="inline-block mt-6 px-8 py-3 rounded-full bg-brand-green/10 text-brand-green font-bold hover:bg-brand-green hover:text-brand-dark transition-all">Request full itinerary PDF</a>
                            </div>
                        )}
                        
                        {/* Bottom CTA */}
                        <div className="max-w-xl mx-auto text-center pb-20 pt-10">
                            <h3 className="text-3xl font-display font-bold text-brand-dark dark:text-white mb-6">Ready to start this journey?</h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button onClick={() => setSelectedTrek(null)} className="px-8 py-4 rounded-xl border border-gray-300 dark:border-white/20 text-brand-dark dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                                    Keep Exploring
                                </button>
                                <a href="#contact" onClick={() => setSelectedTrek(null)} className="px-8 py-4 rounded-xl bg-brand-green text-brand-dark font-bold hover:bg-brand-blue hover:text-white hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2">
                                    Book This Trek <Calendar size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};