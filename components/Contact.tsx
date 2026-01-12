import React from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';

// Cast motion components to any to avoid TypeScript errors with framer-motion props
const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;

interface ContactProps {
  t: Translation['contact'];
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-dark text-white">
      {/* Background with Texture and Morphing Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop')" }} 
         ></div>
         {/* Organic Morphing Blobs */}
         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-green/20 rounded-full blur-[100px] animate-blob"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
         <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-brand-sun/10 rounded-full blur-[80px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass-panel bg-brand-dark/60 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-white/10 backdrop-blur-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-brand-sun to-brand-blue"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Info Side */}
            <div>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-3 py-1 mb-6 rounded-lg bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-widest border border-brand-green/30"
              >
                Start Your Expedition
              </MotionDiv>
              <MotionH2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
              >
                {t.title}
              </MotionH2>
              <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                The Huayhuash range is remote and requires careful planning. Our team in Llamac and Chiquián is ready to handle all logistics for you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Operations Base", text: "Plaza de Armas, Llamac & Chiquián", color: "text-brand-green", bg: "bg-brand-green/10" },
                  { icon: Mail, title: "Email Us", text: "info@huayhuashtrekperu.com", color: "text-brand-blue", bg: "bg-brand-blue/10" },
                  { icon: Phone, title: "WhatsApp", text: "+51 943 000 000", color: "text-brand-sun", bg: "bg-brand-sun/10" }
                ].map((item, idx) => (
                  <MotionDiv 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-all cursor-default"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} ${item.bg} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 group-hover:text-brand-green transition-colors">{item.text}</p>
                    </div>
                  </MotionDiv>
                ))}
              </div>

              <div className="flex gap-4 mt-12">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-brand-dark hover:border-brand-green hover:scale-110 transition-all shadow-lg">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <form className="space-y-6 relative z-10">
                <div className="group/input">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block group-focus-within/input:text-brand-green transition-colors">{t.name}</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all"
                  />
                </div>
                <div className="group/input">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block group-focus-within/input:text-brand-blue transition-colors">{t.email}</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                  />
                </div>
                <div className="group/input">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block group-focus-within/input:text-brand-sun transition-colors">{t.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-brand-sun focus:outline-none focus:ring-2 focus:ring-brand-sun/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-brand-green to-brand-blue text-brand-dark font-black py-5 rounded-xl hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-lg">
                  <span>{t.submit}</span>
                  <Send size={20} strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer minimal */}
      <div className="text-center text-gray-500 text-sm mt-20 pb-10">
        &copy; {new Date().getFullYear()} Huayhuash Trek Peru. All rights reserved.
      </div>
    </section>
  );
};