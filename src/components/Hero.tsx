import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
    // Use a gorgeous, high-resolution Dubai skyline from Unsplash to avoid missing asset build breaks
    const heroBg = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop";

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Dubai Skyline Cinematic"
                    className="w-full h-full object-cover grayscale opacity-[0.35]"
                    loading="eager"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/95 via-luxury-black/40 to-luxury-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    style={{ willChange: 'transform, opacity' }} // Hardware acceleration during load
                    className="w-full flex flex-col items-center justify-center"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-400 block mb-4 md:mb-5 font-semibold font-mono">PREMIER MIDDLE EAST ENTRY</span>
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] text-white max-w-5xl mx-auto">
                        Architects of <br />
                        <span className="text-emerald-400 italic font-medium">Middle East Expansion.</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-8 md:mb-10 font-light px-2">
                        End-to-end business setup and digital growth solutions for visionary brands entering the Saudi and Emirati markets. We provide the structural integrity your business deserves.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-6 sm:gap-10 md:gap-12 mb-10 md:mb-12 max-w-lg mx-auto sm:max-w-none">
                        <div className="border-l border-emerald-400/30 pl-6 text-left">
                            <span className="block text-3xl md:text-4xl font-serif text-white font-bold mb-1">150+</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold font-mono">Formations</span>
                        </div>
                        <div className="border-l border-emerald-400/30 pl-6 text-left">
                            <span className="block text-3xl md:text-4xl font-serif text-white font-bold mb-1">$240M</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold font-mono">Capital Attracted</span>
                        </div>
                        <div className="border-l border-emerald-400/30 pl-6 text-left">
                            <span className="block text-3xl md:text-4xl font-serif text-white font-bold mb-1">98%</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold font-mono">Success Rate</span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-emerald-400 text-slate-950 font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-300 active:bg-emerald-500 transition-all rounded-full shadow-lg font-mono shadow-emerald-400/10"
                        >
                            Start Your Journey
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Hero Bottom Accents */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <div className="text-[10px] uppercase tracking-[0.5em] text-slate-600 rotate-90 origin-left translate-y-10 whitespace-nowrap selective-none font-mono">
                    ESTABLISHED 2023 · PREMIER PARTNER
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ willChange: 'transform' }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-emerald-400/50 to-transparent"
            />
        </section>
    );
};

export default Hero;
