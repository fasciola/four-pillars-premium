import React from 'react';
import { motion } from 'motion/react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'ANC Free Zone',
      subtitle: 'Ajman Free Zone',
      logo: (
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-[3px]">
            <div className="flex gap-[3px]">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-[2px]" />
              <div className="w-2.5 h-2.5 border border-slate-700 rounded-[2px]" />
            </div>
            <div className="flex gap-[3px]">
              <div className="w-2.5 h-2.5 border border-slate-700 rounded-[2px]" />
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-[2px]" />
            </div>
          </div>
          <div className="text-left leading-none font-sans">
            <div className="text-lg font-black tracking-tight text-white mb-0.5">ANC</div>
            <div className="text-[7px] uppercase tracking-widest text-slate-400 font-bold font-mono">FREE ZONE</div>
          </div>
        </div>
      ),
    },
    {
      name: 'DMCC',
      subtitle: 'Dubai Multi Commodities Centre',
      logo: (
        <div className="text-center font-sans">
          <div className="text-2xl font-black tracking-widest text-slate-50 hover:text-emerald-400 transition-colors duration-300">
            DMCC
          </div>
        </div>
      ),
    },
    {
      name: 'DET Dubai',
      subtitle: 'Department of Economy and Tourism',
      logo: (
        <div className="text-left leading-none font-sans">
          <div className="text-lg font-black tracking-tighter text-white mb-0.5">DUBAI</div>
          <div className="text-[7px] tracking-widest text-slate-400 font-bold uppercase font-mono">Economy and Tourism</div>
        </div>
      ),
    },
    {
      name: 'IFZA',
      subtitle: 'International Free Zone Authority',
      logo: (
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border border-slate-750 flex items-center justify-center p-1.5 bg-slate-800/40">
            <div className="w-full h-[3px] bg-slate-400 rounded-full rotate-45" />
          </div>
          <div className="text-2xl font-extrabold tracking-wider text-slate-50 font-sans">IFZA®</div>
        </div>
      ),
    },
    {
      name: 'Jafza',
      subtitle: 'Jebel Ali Free Zone',
      logo: (
        <div className="text-center leading-none font-serif">
          <div className="text-3xl font-bold tracking-tight text-white italic">Jafza</div>
          <div className="text-[6px] tracking-widest text-slate-400 uppercase mt-1 font-sans font-bold">Jebel Ali Free Zone</div>
        </div>
      ),
    },
    {
      name: 'Masdar City',
      subtitle: 'Sustainable Economic Zone',
      logo: (
        <div className="text-center leading-none font-sans">
          <div className="text-[7px] tracking-[0.25em] text-slate-400 uppercase mb-1 font-bold font-mono">MASDAR</div>
          <div className="text-base font-black tracking-[0.1em] text-white">CITY</div>
        </div>
      ),
    },
    {
      name: 'rakez',
      subtitle: 'Ras Al Khaimah Economic Zone',
      logo: (
        <div className="flex items-center gap-3">
          <div className="relative w-5 h-6">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-emerald-400 absolute bottom-0 left-0" />
            <div className="w-2.5 h-2.5 bg-slate-900 rounded-full absolute bottom-1 left-1.5" />
          </div>
          <div className="text-2xl font-black text-white tracking-tighter font-sans lowercase">rakez</div>
        </div>
      ),
    },
    {
      name: 'SPC Free Zone',
      subtitle: 'Sharjah Publishing City Free Zone',
      logo: (
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-6 h-6 border border-slate-700 rotate-45 rounded-[4px] bg-slate-800/20">
            <span className="text-[8px] font-black text-emerald-400 -rotate-45">S</span>
          </div>
          <div className="text-left leading-none font-sans">
            <div className="text-base font-black tracking-tight text-white mb-0.5">SPC</div>
            <div className="text-[7px] uppercase tracking-widest text-slate-400 font-bold font-mono">Free Zone</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="partners" className="py-20 relative bg-luxury-black border-y border-slate-900/60 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block font-mono">
            Licensing & Jurisdictions
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl mb-4 text-white font-bold tracking-tight"
          >
            Strategic <span className="text-emerald-400 italic font-medium">Partners.</span>
          </motion.h2>
          <div className="w-12 h-[2px] bg-emerald-400 mx-auto rounded-full mb-4" />
          <p className="max-w-xl mx-auto text-slate-400 text-xs tracking-wider uppercase leading-relaxed font-light">
            Providing direct integration with the region's leading economic zones & Government registries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -4, borderColor: 'rgb(52, 211, 153, 0.25)' }}
              className="bg-slate-900/40 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-400/20 rounded-2xl p-6 min-h-[110px] flex flex-col justify-center items-center shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                {partner.logo}
              </div>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {partner.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
