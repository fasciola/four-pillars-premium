import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isBlogPage = window.location.pathname === '/blog/ajman-license-cost-visa';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = isBlogPage
        ? [
            { name: 'Home', href: '/' },
            { name: 'Calculator', href: '/#ajman-license-calculator' },
            { name: 'Contact', href: '#contact' },
        ]
        : [
            { name: 'Business Setup', href: '#business-setup' },
            { name: 'Cost Calculator', href: '#ajman-license-calculator' },
            { name: 'Cost Guide', href: '/blog/ajman-license-cost-visa' },
            { name: 'Digital Marketing', href: '#digital-marketing' },
            { name: 'Process', href: '#process' },
        ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isBlogPage ? 'py-4 bg-luxury-black/95 backdrop-blur-md border-b border-slate-800' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="/" className="flex items-center gap-3">
                    <div className="w-8 h-8 flex flex-wrap gap-1">
                        <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                        <div className="w-3 h-3 border border-slate-700 rounded-sm" />
                        <div className="w-3 h-3 border border-slate-700 rounded-sm" />
                        <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                    </div>
                    <span className="text-lg tracking-[0.2em] font-bold uppercase text-white font-serif">
                        Four Pillars
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-4 w-px bg-slate-800 mx-1" />
                    <a
                        href="https://wa.me/971567074922"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold hover:text-white transition-colors font-mono"
                    >
                        WhatsApp +971 56 707 4922
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-2 bg-emerald-400 text-slate-950 text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-300 transition-all rounded-full font-mono shadow-sm shadow-emerald-400/5"
                    >
                        Consult
                    </a>
                </div>

                <button
                    className="md:hidden text-slate-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-850 p-6 md:hidden z-50 backdrop-blur-lg bg-slate-900/95"
                    >
                        <div className="flex flex-col gap-6 text-left">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xs uppercase tracking-widest text-slate-300 hover:text-emerald-400 transition-colors font-bold font-mono"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-3 bg-emerald-400 text-slate-950 text-center rounded-full text-xs uppercase tracking-widest font-bold block font-mono"
                            >
                                Consultation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
