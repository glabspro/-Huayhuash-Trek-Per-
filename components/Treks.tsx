import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translation, Trek } from '../types';
import { Clock, TrendingUp, ArrowRight, Heart, MountainSnow, X, Calendar, Flag } from 'lucide-react';
import { TREKS } from '../constants';

const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;

interface TreksProps {
  t: Translation['treks'];
  lang: 'en' | 'es';
}

export const Treks: React.FC<TreksProps> = ({ t, lang }) => {
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);

  React.useEffect(() => {
    if (selectedTrek) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedTrek]);

  return (
    <section id="treks" className="py-20 md:py-32 relative overflow-hidden bg-light-bg dark:bg-brand-dark transition-colors duration-500">
       <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
            style={{ backgroundImage: "radial-gradient(#a3e635 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
       </div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-brand-green/20 text-brand-dark dark:text-brand-green font-bold text-xs md:text-sm tracking-wider uppercase border border-brand-green/30"
          >
             <MountainSnow size={16} /> Explore The Andes
          </MotionDiv>
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-bold mb-4 text-brand-dark dark:text-white leading-tight"
          >
            {t.title}
          </MotionH2>
          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            {t.subtitle}
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TREKS.map((trek, index) => (
            <MotionDiv
              key={trek.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedTrek(trek)}
              className="group relative glass-panel rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col bg-white/70 dark:bg-brand-dark/70 border border-white/50 dark:border-white/10 cursor-pointer"
            >
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img src={trek.image} alt={trek.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-3 left-3 z-20">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-lg backdrop-blur-md border border-white/20
                    ${trek.difficulty === 'Easy' ? 'bg-emerald-500/90' : 
                      trek.difficulty === 'Moderate' ? 'bg-brand-green/90' : 
                      trek.difficulty === 'Hard' ? 'bg-brand-blue/90' : 'bg-rose-600/90'}`}>
                    {trek.difficultyLabel[lang]}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-2 font-display">{trek.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">{trek.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-brand-green/10 text-center">
                    <Clock size={14} className="text-brand-green" />
                    <span className="text-[10px] font-bold dark:text-gray-300">{trek.days} {t.days}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-brand-blue/10 text-center">
                    <TrendingUp size={14} className="text-brand-blue" />
                    <span className="text-[10px] font-bold dark:text-gray-300">{trek.maxAltitude}</span>
                  </div>
                </div>

                <button className="w-full py-3 flex items-center justify-center gap-2 rounded-xl font-bold text-xs transition-all bg-brand-dark text-white dark:bg-white/10">
                  {t.viewDetails} <ArrowRight size={14} />
                </button>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedTrek && (
            <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed inset-0 z-[100] flex flex-col bg-light-bg dark:bg-brand-dark overflow-hidden"
            >
                <div className="absolute top-4 right-4 z-[110]">
                    <button 
                      onClick={() => setSelectedTrek(null)}
                      className="p-2 md:p-3 rounded-full bg-black/50 hover:bg-brand-sun hover:text-brand-dark text-white backdrop-blur-md transition-all shadow-xl"
                    >
                        <X size={20} md:size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    <div className="relative h-[35vh] md:h-[60vh] w-full shrink-0">
                        <img src={selectedTrek.image} alt={selectedTrek.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-light-bg dark:to-brand-dark"></div>
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
                            <div className="container mx-auto">
                                <MotionDiv initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                                    <span className="bg-brand-green text-brand-dark font-bold px-3 py-1 rounded-full text-[10px] md:text-sm uppercase mb-2 inline-block">
                                        {selectedTrek.difficultyLabel[lang]} Expedition
                                    </span>
                                    <h2 className="text-3xl md:text-7xl font-display font-black text-white mb-2 md:mb-6 drop-shadow-lg">
                                        {selectedTrek.title}
                                    </h2>
                                    <p className="text-sm md:text-xl text-gray-200 max-w-2xl font-light line-clamp-3 md:line-clamp-none">
                                        {selectedTrek.description}
                                    </p>
                                </MotionDiv>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-6 py-10 md:py-20">
                        {selectedTrek.itinerary ? (
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-10 md:mb-16">
                                    <h3 className="text-2xl md:text-3xl font-bold text-brand-dark dark:text-white">Expedition Itinerary</h3>
                                    <p className="text-gray-500 uppercase tracking-widest text-[10px] md:text-sm font-bold">Day by Day</p>
                                </div>
                                
                                <div className="relative">
                                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-green/30 transform -translate-x-1/2"></div>
                                    
                                    {selectedTrek.itinerary.map((stop, i) => (
                                        <div key={i} className={`relative flex items-start mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-green z-10 transform -translate-x-1/2 mt-1 md:mt-10 shadow-[0_0_10px_rgba(163,230,53,0.8)]"></div>

                                            <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                                                <MotionDiv initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                                    <div className="glass-panel bg-white/50 dark:bg-white/5 p-4 md:p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-md group text-left">
                                                        <div className="text-[10px] font-black text-brand-green uppercase mb-1">Day {stop.day}</div>
                                                        <div className="h-32 md:h-48 w-full rounded-xl overflow-hidden mb-4 relative">
                                                            <img src={stop.image} alt={stop.title} className="w-full h-full object-cover" />
                                                            <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[9px] font-bold text-white flex items-center gap-1">
                                                                <TrendingUp size={10} className="text-brand-green" /> {stop.altitude}
                                                            </div>
                                                        </div>
                                                        <h4 className="text-lg md:text-2xl font-bold text-brand-dark dark:text-white mb-1">{stop.title}</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">{stop.description}</p>
                                                    </div>
                                                </MotionDiv>
                                            </div>
                                            <div className="flex-1 hidden md:block"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <Flag size={40} className="text-brand-green mx-auto mb-4" />
                                <p className="text-lg text-gray-400">Detailed itinerary being updated.</p>
                            </div>
                        )}
                        
                        <div className="max-w-xl mx-auto text-center py-10">
                            <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-6">Ready to start?</h3>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button onClick={() => setSelectedTrek(null)} className="px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20 text-xs font-bold">Close</button>
                                <a href="#contact" onClick={() => setSelectedTrek(null)} className="px-6 py-3 rounded-xl bg-brand-green text-brand-dark font-bold text-xs shadow-lg flex items-center justify-center gap-2">
                                    Book This Trek <Calendar size={14} />
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