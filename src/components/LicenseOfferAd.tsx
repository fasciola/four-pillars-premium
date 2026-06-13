import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, MessageCircle } from 'lucide-react';

const LicenseOfferAd: React.FC = () => {
    return (
        <section id="ajman-license-offer" aria-label="Ajman license and visa offer" className="relative z-10 -mt-10 md:-mt-16 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="container mx-auto overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-slate-900/95 via-slate-950 to-emerald-950/50 shadow-2xl shadow-emerald-950/30"
            >
                <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8 p-7 md:p-10 lg:p-12">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_20%,rgba(52,211,153,0.20),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(212,175,55,0.12),transparent_28%)]" />

                    <div className="relative text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300 font-mono mb-6">
                            <BadgeCheck size={14} /> Ajman Business Package
                        </div>

                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-5">
                            Obtain your license and visa as low as <span className="text-emerald-400 italic">AED 10,800</span>
                        </h2>

                        <p className="max-w-2xl text-sm md:text-base text-slate-300 leading-relaxed font-light mb-8">
                            Start your Ajman company with a clear license-and-visa package, transparent renewal pricing, and guided support from activity selection to visa processing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/blog/ajman-license-cost-visa"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-950 hover:bg-emerald-300 transition-colors font-mono"
                            >
                                Read Cost Guide <ArrowRight size={16} />
                            </a>
                            <a
                                href="https://wa.me/971567074922?text=Hello%204Pillars%2C%20I%20want%20to%20know%20more%20about%20the%20Ajman%20license%20and%20visa%20package%20from%20AED%2010%2C800."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-white hover:border-emerald-400/60 hover:text-emerald-300 transition-colors font-mono"
                            >
                                Ask on WhatsApp <MessageCircle size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 flex flex-col justify-center">
                        <div className="text-[10px] uppercase tracking-[0.35em] text-slate-400 font-mono mb-3">Starting Package</div>
                        <div className="font-serif text-5xl md:text-6xl text-white font-black mb-2">AED 10,800</div>
                        <div className="text-xs uppercase tracking-widest text-emerald-300 font-bold mb-6">License + 1 Visa</div>
                        <ul className="space-y-3 text-xs text-slate-300">
                            <li>• New registration package</li>
                            <li>• Visa process guidance</li>
                            <li>• Renewal from AED 9,900</li>
                            <li>• Packages available up to 7 visas</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default LicenseOfferAd;
