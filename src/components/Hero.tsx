import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
          alt="Dubai Skyline Cinematic"
          className="w-full h-full object-cover grayscale opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/90 via-luxury-black/20 to-luxury-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          
          <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tight mb-8 leading-[0.9]">
            Architects of <br /> 
            
          </h1>
          <p className="max-w-md mx-auto text-white/50 text-sm leading-relaxed mb-12 font-light">
            End-to-end business setup and digital growth solutions for visionary brands entering the Saudi and Emirati markets. We provide the structural integrity your business deserves.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-20">
            <div className="border-l border-gold-300/40 pl-6 text-left">
              <span className="block text-3xl font-serif mb-1">150+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Formations</span>
            </div>
            <div className="border-l border-gold-300/40 pl-6 text-left">
              <span className="block text-3xl font-serif mb-1">$240M</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">AUM Managed</span>
            </div>
            <div className="border-l border-gold-300/40 pl-6 text-left">
              <span className="block text-3xl font-serif mb-1">98%</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Success Rate</span>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-gold-300 transition-all"
            >
              Start Your Journey
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Accents */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="text-[10px] uppercase tracking-[0.5em] text-stone-500 rotate-90 origin-left translate-y-10 whitespace-nowrap">
          ESTABLISHED 2023 · PREMIER PARTNER
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gold-300/60 to-transparent"
      />
    </section>
  );
};

export default Hero;
