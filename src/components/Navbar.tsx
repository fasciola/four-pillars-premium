import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Business Setup', href: '#business-setup' },
    { name: 'Digital Marketing', href: '#digital-marketing' },
    { name: 'UAE vs KSA', href: '#comparison' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-luxury-black/80 backdrop-blur-xl border-b border-white/10' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 flex flex-wrap gap-1">
            <div className="w-3 h-3 bg-gold-300" />
            <div className="w-3 h-3 border border-white/30" />
            <div className="w-3 h-3 border border-white/30" />
            <div className="w-3 h-3 bg-gold-300" />
          </div>
          <span className="text-xl tracking-[0.2em] font-semibold uppercase text-white">
            Four Pillars
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.15em] font-medium text-white/60 hover:text-gold-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-white/10 mx-2" />
          <div className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold">
            WhatsApp <span className="ml-2 text-white">+971 50 000 0000</span>
          </div>
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gold-300 transition-all"
          >
            Consult
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-charcoal border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-stone-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 bg-gold-300 text-luxury-black text-center rounded-lg text-xs uppercase tracking-widest font-bold"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
