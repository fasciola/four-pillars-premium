import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-gold-300 selection:text-luxury-black">
      {/* Noise / Grain overlay */}
      <div className="noise-overlay" />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-300 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Floating Elements */}
      <ScrollLightRing />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        
        {/* Subtle section transitions */}
        <div className="relative z-10 bg-luxury-black">
          <BusinessSetup />
          <DigitalMarketing />
          <Comparison />
          <Process />
          <WhyUs />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/971567074922"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-[70] w-14 h-14 bg-white text-black rounded-sm flex items-center justify-center shadow-xl transition-all"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Cinematic Background Accents */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-gold-300/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}

export default App;

