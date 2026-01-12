import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Translation } from '../types';
import { ChevronDown, Sparkles, ArrowRight, Camera, MapPin, X, ZoomIn } from 'lucide-react';

// Cast motion components to any to avoid TypeScript errors with framer-motion props
const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

interface HeroProps {
  t: Translation;
  theme: 'light' | 'dark';
}

const PHOTO_MARQUEE = [
  { 
    title: "Yerupajá (6,635m)", 
    subtitle: "Highest in Huayhuash",
    description: "Known as 'The Butcher' for its formidable ice walls, Yerupajá is the crown jewel of the range. Its massive summit dominates the skyline and turns golden at sunrise.",
    img: "https://images.unsplash.com/photo-1580137197581-df2bb346a786?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Laguna Jahuacocha", 
    subtitle: "The Mirror of the Andes",
    description: "The perfect finale to the trek. This turquoise lake reflects the Jirishanca and Yerupajá peaks, offering some of the best sunsets in the entire Andes.",
    img: "https://images.unsplash.com/photo-1533400586-4f937e2a445f?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Siula Grande", 
    subtitle: "Touching The Void",
    description: "Made famous by Joe Simpson's survival epic 'Touching the Void', this mountain presents a dramatic limestone face that inspires awe and respect in all trekkers.",
    img: "https://images.unsplash.com/photo-1544198365-f5d60b6f8d3e?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Carhuacocha", 
    subtitle: "Sunrise Magic",
    description: "Often cited as the most beautiful camp in the circuit. Watching the sunrise paint the peaks of Siula and Yerupajá while reflecting in these waters is a spiritual experience.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Paso Cuyoc (5,000m)", 
    subtitle: "High Altitude Challenge",
    description: "At 5,000m, this is one of the highest points of the classic trek. The summit offers breathtaking 360-degree panoramic views of both the Huayhuash and Raura ranges.",
    img: "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Rondoy Peak", 
    subtitle: "Dramatic Faces",
    description: "A sharp, dramatic peak that greets trekkers near the start of the circuit. Its distinct shape and steep fluted ice faces are a photographer's dream.",
    img: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=800&auto=format&fit=crop" 
  },
];

export const Hero: React.FC<HeroProps> = ({ t, theme }) => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]); // Parallax for BG
  const yText = useTransform(scrollY, [0, 500], [0, 100]); // Parallax for Text
  
  const [selectedImage, setSelectedImage] = useState<typeof PHOTO_MARQUEE[0] | null>(null);
  
  // Staggered text animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-28 pb-20">
      
      {/* Spectacular Huayhuash Background with Parallax */}
      <MotionDiv style={{ y: yBg }} className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1544198365-f5d60b6f8d3e?q=80&w=2800&auto=format&fit=crop')", // High Andes Peak
          }}
        ></div>

        {/* Gradient Overlays adapted to Brand Colors */}
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-brand-dark/70 via-brand-dark/30 to-brand-dark' : 'from-brand-blue/30 via-white/10 to-light-bg'}`}></div>
        
        {/* Color Tint for Atmosphere - Turquoise/Green Hue */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/30 to-brand-blue/30 mix-blend-overlay"></div>
      </MotionDiv>
      
      {/* Floating Particles/Dust */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: Math.random() * 1000, y: Math.random() * 800 }}
            animate={{ 
              opacity: [0, 0.6, 0], 
              y: [null, Math.random() * -100],
              x: [null, (Math.random() - 0.5) * 50] 
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            className="absolute w-2 h-2 rounded-full bg-brand-green/60 blur-sm"
          />
        ))}
      </div>

      <MotionDiv style={{ y: yText }} className="container relative z-20 px-6 text-center flex-1 flex flex-col justify-center">
        
        {/* Floating Pill Badge */}
        <div className="flex justify-center">
          <MotionDiv 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel bg-white/60 dark:bg-brand-dark/60 border-brand-green/50 text-brand-dark dark:text-brand-green font-bold mb-10 shadow-lg hover:scale-105 transition-transform cursor-default backdrop-blur-md"
          >
            <Sparkles size={18} className="text-brand-green animate-pulse" />
            <span className="text-sm tracking-wide uppercase">The Andes' Best Kept Secret</span>
          </MotionDiv>
        </div>

        <MotionH1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-8 leading-tight tracking-tight drop-shadow-2xl"
        >
          <MotionDiv className="block text-white drop-shadow-lg mb-2">Huayhuash</MotionDiv>
          <MotionDiv className="inline-block relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-sun to-brand-blue drop-shadow-sm filter brightness-110 pb-4">
              Trek Peru
            </span>
            <motion.div 
               className="absolute -bottom-2 left-0 w-full h-4 bg-brand-green/30 -z-10 blur-lg rounded-full"
               animate={{ opacity: [0.5, 0.8, 0.5], scaleX: [0.9, 1.1, 0.9] }}
               transition={{ duration: 3, repeat: Infinity }}
            />
          </MotionDiv>
        </MotionH1>

        <MotionP 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-md bg-brand-dark/20 backdrop-blur-md rounded-2xl p-6 border border-white/10"
        >
          {t.hero.subtitle}
        </MotionP>
        
        <MotionDiv 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <a 
            href="#treks"
            className="group relative px-10 py-5 bg-brand-green text-brand-dark rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-110 hover:shadow-[0_0_50px_rgba(163,230,53,0.5)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.cta} <ArrowRight size={20} />
            </span>
          </a>
          
          <a 
            href="#ai-planner"
            className="px-10 py-5 glass-panel bg-brand-blue/30 text-white border-brand-blue/40 rounded-full font-bold text-lg transition-all hover:bg-brand-blue hover:text-white hover:border-transparent hover:shadow-xl backdrop-blur-md"
          >
            {t.nav.aiPlanner}
          </a>
        </MotionDiv>
      </MotionDiv>

      {/* INFINITE PHOTO MARQUEE */}
      <MotionDiv 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full relative z-20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 z-30">
             <div className="bg-brand-dark/80 backdrop-blur-md text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-brand-green/30 flex items-center gap-2 shadow-lg">
                <Camera size={14} /> Views You Can't Miss
             </div>
        </div>
        
        <div className="mask-fade-sides overflow-hidden w-full py-4 bg-brand-dark/20 backdrop-blur-sm border-y border-white/5">
            <div className="flex w-max animate-scroll pause-hover">
                {/* Double the array for seamless infinite scroll */}
                {[...PHOTO_MARQUEE, ...PHOTO_MARQUEE].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedImage(item)} 
                      className="relative w-72 h-48 mx-3 rounded-2xl overflow-hidden glass-panel border border-white/20 group cursor-pointer hover:border-brand-green/50 transition-colors"
                    >
                        <img 
                          src={item.img} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        
                        {/* Zoom Icon Hint */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-dark/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 backdrop-blur-sm border border-white/30 z-20">
                            <ZoomIn className="text-white w-6 h-6" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                           <div className="flex items-center gap-1 text-brand-green text-[10px] font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                              <MapPin size={10} /> {item.subtitle}
                           </div>
                           <h3 className="text-white font-bold text-lg leading-none shadow-black drop-shadow-md">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </MotionDiv>

      <MotionDiv 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 z-20"
      >
        <ChevronDown size={32} />
      </MotionDiv>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <MotionDiv
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-brand-dark rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
              onClick={(e: any) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-brand-sun hover:text-brand-dark text-white rounded-full transition-all backdrop-blur-md"
                >
                  <X size={24} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-3/4 h-[50vh] md:h-auto bg-black relative">
                   <img 
                      src={selectedImage.img.replace('w=800', 'w=1600')} 
                      alt={selectedImage.title}
                      className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-brand-dark/50 opacity-50"></div>
                </div>

                {/* Info Section */}
                <div className="w-full md:w-1/4 p-8 flex flex-col justify-center bg-brand-dark/95 backdrop-blur-md border-l border-white/5 relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-brand-green font-bold uppercase tracking-widest text-xs mb-4">
                           <MapPin size={14} /> Location
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                          {selectedImage.title}
                        </h3>
                        <p className="text-xl text-brand-blue font-medium mb-6">
                          {selectedImage.subtitle}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-8 border-t border-white/10 pt-4">
                          {selectedImage.description}
                        </p>
                        
                        <a href="#contact" onClick={() => setSelectedImage(null)} className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-green transition-colors group">
                           Plan this Trip <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};