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
    <section id="comparison" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl mb-6"
          >
            Regional <span className="text-gold-300 italic">Powerhouses.</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-stone-400 font-light text-sm tracking-widest uppercase">
            Choosing your primary gateway in the GCC
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* UAE Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative p-[1px] bg-white/10 rounded-sm group"
          >
            <div className="bg-luxury-charcoal p-10 h-full">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">UAE Setup</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold">International Hub</p>
                </div>
                <div className="w-12 h-12 bg-gold-300/10 rounded-sm flex items-center justify-center text-gold-300">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <ul className="space-y-6">
                {uaeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-4 text-stone-400 text-sm font-light">
                    <div className="w-5 h-5 rounded-full bg-gold-300/5 flex items-center justify-center">
                      <Check size={12} className="text-gold-300" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[11px] leading-relaxed text-stone-500 italic">
                  "Ideal for businesses seeking global connectivity and tax-efficient structures in a mature digital ecosystem."
                </p>
              </div>
            </div>
          </motion.div>

          {/* KSA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative p-[1px] bg-white/10 rounded-sm group"
          >
            <div className="bg-luxury-charcoal p-10 h-full">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">KSA Setup</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold">Market Growth</p>
                </div>
                <div className="w-12 h-12 bg-gold-300/10 rounded-sm flex items-center justify-center text-gold-300">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <ul className="space-y-6">
                {ksaFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-4 text-stone-400 text-sm font-light">
                    <div className="w-5 h-5 rounded-full bg-gold-300/5 flex items-center justify-center">
                      <Check size={12} className="text-gold-300" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[11px] leading-relaxed text-stone-500 italic">
                  "Perfect for companies targeting the GCC's largest consumer base and significant government-led sectors."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Visual Separation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/[0.02] -z-10 select-none pointer-events-none">
        VS
      </div>
    </section>
  );
};

export default Comparison;
