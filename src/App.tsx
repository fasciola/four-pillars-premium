import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import BusinessSetup from './components/BusinessSetup';
import DigitalMarketing from './components/DigitalMarketing';
import Comparison from './components/Comparison';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollLightRing from './components/ScrollLightRing';
import { MessageCircle } from 'lucide-react';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    // Enable fast viewport scrolling and smooth transitions
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="relative min-h-screen selection:bg-gold-300 selection:text-luxury-black bg-luxury-black overflow-x-hidden">
            {/* Pre-baked repeatable, light performance SVG grain background overlay */}
            <div className="noise-overlay" />

            {/* Ultra Lightweight Scroll Progress indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-gold-300 origin-left z-[100]"
                style={{ scaleX, willChange: 'transform' }}
            />

            {/* Optimized scroll-driven tracking highlight ring */}
            <ScrollLightRing />

            {/* Navigation Layer */}
            <Navbar />

            {/* Main Sections */}
            <main className="relative z-10">
                <Hero />
                <Partners />

                <div className="relative z-10 bg-luxury-black">
                    <BusinessSetup />
                    <DigitalMarketing />
                    <Comparison />
                    <Process />
                    <WhyUs />
                    <Contact />
                </div>
            </main>

            {/* Footer Block */}
            <Footer />

            {/* Hardware Accelerated Sticky WhatsApp Chat link */}
            <motion.a
                href="https://wa.me/971567074922"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact WhatsApp Support"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                className="fixed bottom-8 right-8 z-[70] w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-gold-300 transition-colors cursor-pointer"
            >
                <MessageCircle size={28} />
            </motion.a>

            {/* Fixed Ambient Glow Elements (Unweighted to avoid rendering bottlenecks) */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-gold-300/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-white/3 blur-[120px] rounded-full" />
            </div>
        </div>
    );
}

export default App;
