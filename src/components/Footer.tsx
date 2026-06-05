import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 border-t border-slate-800 relative bg-luxury-black text-slate-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-left">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 flex flex-wrap gap-1">
                                <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                                <div className="w-3 h-3 border border-slate-700 rounded-sm" />
                                <div className="w-3 h-3 border border-slate-700 rounded-sm" />
                                <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                            </div>
                            <span className="font-serif text-xl font-bold text-white">
                                Four Pillars
                            </span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed font-light tracking-wide max-w-xs">
                            Premier business setup and digital growth studio specializing in the UAE and Saudi Arabian markets. Crafting excellence since 2023.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {['Market Entry', 'Service Lifecycle', 'UAE vs KSA', 'Process', 'Contact'].map((link) => {
                                const targetId = link === 'UAE vs KSA' ? 'comparison' : link === 'Market Entry' ? 'business-setup' : link === 'Service Lifecycle' ? 'business-setup' : link.toLowerCase();
                                return (
                                    <li key={link}>
                                        <a href={`#${targetId}`} className="text-slate-500 hover:text-emerald-400 text-[11px] uppercase tracking-widest transition-colors font-semibold">
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Expertise</h4>
                        <ul className="space-y-4">
                            {['Mainland Setup', 'Free Zone Entity', 'MISA Licensing', 'SEO Strategy', 'Luxury Branding'].map((link) => (
                                <li key={link} className="text-slate-600 text-[11px] uppercase tracking-widest font-semibold">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Social Presence</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/fourpillarsfzllc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                                <Instagram size={16} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=615933361599231" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all font-sans">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-all font-sans">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-850 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-[10px] uppercase tracking-widest font-light">
                        © 2026 Four Pillars Business Setup & Digital Marketing. All Rights Reserved.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-slate-600 hover:text-slate-400 text-[10px] uppercase tracking-[0.3em] font-light transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-600 hover:text-slate-400 text-[10px] uppercase tracking-[0.3em] font-light transition-colors font-sans">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
