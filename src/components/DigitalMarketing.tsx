import React from 'react';
import { motion } from 'motion/react';
import { Search, Share2, Palette, BarChart3 } from 'lucide-react';

const DigitalMarketing: React.FC = () => {
    const steps = [
        {
            title: 'Luxury Branding',
            icon: <Palette className="w-6 h-6" />,
            text: 'Visual identities that command respect in elite markets.'
        },
        {
            title: 'Strategic SEO',
            icon: <Search className="w-6 h-6" />,
            text: 'Performance driven search visibility for regional dominance.'
        },
        {
            title: 'Growth Ads',
            icon: <BarChart3 className="w-6 h-6" />,
            text: 'Precisely targeted campaigns across GCC demographics.'
        },
        {
            title: 'Social Authority',
            icon: <Share2 className="w-6 h-6" />,
            text: 'Building influence and community engagement for your brand.'
        }
    ];

    return (
        <section id="digital-marketing" className="py-24 bg-luxury-charcoal relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl bg-slate-950 border border-slate-800"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                                alt="Digital Strategy Meeting"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                            {/* High-fidelity Bento Stat Overlay inspired by SwiftCheck Pro score card */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl flex items-center justify-between gap-4">
                                <div className="text-left">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[9px] font-bold font-mono py-0.5 px-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                                            EXCELLENT
                                        </span>
                                        <span className="text-[9px] uppercase font-bold text-slate-500 font-mono">RETENTION</span>
                                    </div>
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">GROWTH PARTNERS</div>
                                </div>
                                <div className="relative flex items-center justify-center w-12 h-12 flex-shrink-0">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-slate-800" />
                                        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray="131.9" strokeDashoffset="2.6" className="text-emerald-400" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[11px] font-bold text-emerald-400 font-mono">98%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 border border-emerald-400/5 rounded-full animate-[spin_45s_linear_infinite] pointer-events-none" />
                    </div>

                    <div className="lg:w-1/2 text-left">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">High Performance Studio</span>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white font-bold tracking-tight"
                        >
                            Digital Growth <br />
                            <span className="text-emerald-400 italic">Studio.</span>
                        </motion.h2>

                        <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                            Setup is just the beginning. Our digital marketing solutions are designed to turn your new entity into a market leader.
                            We blend creative elegance with technical precision to scale your business in the digital age.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: 15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.5 }}
                                    className="flex gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 flex-shrink-0 bg-slate-800 border border-slate-700/50 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                                        {step.icon}
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider font-sans">{step.title}</h4>
                                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">{step.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-12"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-4 text-emerald-400 hover:text-white transition-colors uppercase tracking-[0.3em] text-xs font-bold font-mono"
                            >
                                Start Scaling <div className="w-12 h-px bg-emerald-400 group-hover:w-20 transition-all" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalMarketing;
