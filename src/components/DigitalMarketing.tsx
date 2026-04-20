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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="Digital Strategy Meeting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60" />
              
              {/* Floating Stat Overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card">
                <div className="text-3xl font-serif text-gold-300 font-bold mb-1">98%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Retention Rate for Growth Partners</div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold-300/20 rounded-full animate-[spin_20s_linear_infinite]" />
          </div>

          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white"
            >
              Digital Growth <br />
              <span className="text-gold-300 italic">Studio.</span>
            </motion.h2>
            
            <p className="text-stone-400 text-lg font-light leading-relaxed mb-12">
              Setup is just the beginning. Our digital marketing solutions are designed to turn your new entity into a market leader. 
              We blend creative elegance with technical precision to scale your business in the digital age.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-gold-300/10 rounded-lg flex items-center justify-center text-gold-300 group-hover:bg-gold-300 group-hover:text-luxury-black transition-all">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1 uppercase tracking-wider">{step.title}</h4>
                    <p className="text-[11px] text-stone-500 leading-normal font-light">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-4 text-gold-300 hover:text-white transition-colors uppercase tracking-[0.3em] text-xs font-bold"
              >
                Start Scaling <div className="w-12 h-px bg-gold-300 group-hover:w-20 transition-all" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
