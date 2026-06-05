import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck } from 'lucide-react';

const Comparison: React.FC = () => {
    const uaeFeatures = [
        '100% Foreign Ownership',
        'Zero Corporate Tax (Free Zones)',
        'World-class Infrastructure',
        'Global Talent Hub',
        'Strategic Trading Location',
    ];

    const ksaFeatures = [
        'Largest GCC Market',
        'Vision 2030 Incentives',
        'Major Gov Projects Access',
        'Rapid Digital Transformation',
        'Emerging Regional HQ Center',
    ];

    return (
        <section id="comparison" className="py-24 relative overflow-hidden bg-luxury-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Market Evaluation</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl mb-6 text-white font-bold"
                    >
                        Regional <span className="text-emerald-400 italic">Powerhouses.</span>
                    </motion.h2>
                    <p className="max-w-xl mx-auto text-slate-400 font-light text-xs tracking-widest uppercase">
                        Choosing your primary gateway in the GCC
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto z-10 relative">
                    {/* UAE Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative p-[1px] bg-slate-800/80 rounded-3xl group hover:bg-slate-705 transition-all duration-300 shadow-xl"
                    >
                        <div className="bg-slate-900 p-8 md:p-10 h-full rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="text-left">
                                        <span className="text-[9px] font-bold font-mono py-1 px-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full mb-3 inline-block">
                                            GLOBAL EXPANSION SCORE: 98/100
                                        </span>
                                        <h3 className="font-serif text-3xl font-bold text-white mb-2">UAE Setup</h3>
                                        <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold font-mono">International Hub</p>
                                    </div>
                                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                                        <ShieldCheck size={24} />
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {uaeFeatures.map((f) => (
                                        <li key={f} className="flex items-center gap-4 text-slate-300 text-sm font-light text-left">
                                            <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} className="text-emerald-400" />
                                            </div>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 pt-8 border-t border-slate-800 text-left">
                                <p className="text-[11px] leading-relaxed text-slate-500 italic">
                                    "Ideal for businesses seeking global connectivity and tax-efficient structures in a mature digital ecosystem."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* KSA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative p-[1px] bg-slate-800/80 rounded-3xl group hover:bg-slate-705 transition-all duration-300 shadow-xl"
                    >
                        <div className="bg-slate-900 p-8 md:p-10 h-full rounded-3xl flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="text-left">
                                        <span className="text-[9px] font-bold font-mono py-1 px-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full mb-3 inline-block font-sans">
                                            GROWTH POTENTIAL: 99/100
                                        </span>
                                        <h3 className="font-serif text-3xl font-bold text-white mb-2">KSA Setup</h3>
                                        <p className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold font-mono">Market Growth</p>
                                    </div>
                                    <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
                                        <ShieldCheck size={24} />
                                    </div>
                                </div>
                                <ul className="space-y-4">
                                    {ksaFeatures.map((f) => (
                                        <li key={f} className="flex items-center gap-4 text-slate-300 text-sm font-light text-left">
                                            <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} className="text-amber-400" />
                                            </div>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 pt-8 border-t border-slate-800 text-left">
                                <p className="text-[11px] leading-relaxed text-slate-500 italic">
                                    "Perfect for companies targeting the GCC's largest consumer base and significant government-led sectors."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Visual Separation overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/[0.012] -z-10 select-none pointer-events-none font-bold">
                VS
            </div>
        </section>
    );
};

export default Comparison;
