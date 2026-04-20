import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Zap, Award } from 'lucide-react';

const WhyUs: React.FC = () => {
  const perks = [
    {
      title: 'Vested Partnership',
      icon: <Sparkles className="w-5 h-5" />,
      text: 'We don’t just setup entities; we build brands as your growth partner.'
    },
    {
      title: 'Regulatory Mastery',
      icon: <Shield className="w-5 h-5" />,
      text: 'Bilingual legal experts with decades of local government relations.'
    },
    {
      title: 'Accelerated Entry',
      icon: <Zap className="w-5 h-5" />,
      text: 'Streamlined internal processes for market entry in record time.'
    },
    {
      title: 'Elite Excellence',
      icon: <Award className="w-5 h-5" />,
      text: 'Multiple awards for business consultancy and digital innovation.'
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-300 mb-6 block font-bold">The Four Pillars Advantage</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Prestige in Every <br /> <span className="gold-gradient-text italic">Detail.</span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed mb-12">
              Our reputation is built on the success of the founders we serve. 
              We provide a layer of sophistication and security that generic agencies simply cannot match. 
              In the GCC, relationships are everything — we have the connections that matter.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {perks.map((perk, index) => (
                <motion.div 
                  key={perk.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-gold-300 mb-4">{perk.icon}</div>
                  <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-2">{perk.title}</h4>
                  <p className="text-stone-500 text-[11px] leading-relaxed font-light">{perk.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-sm overflow-hidden glass-card p-4 relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Corporate Office"
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-300/5 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
