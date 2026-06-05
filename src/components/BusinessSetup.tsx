import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe, FileText, Landmark } from 'lucide-react';

const BusinessSetup: React.FC = () => {
  const services = [
    {
      title: 'Dubai Mainland',
      icon: <Building2 className="w-6 h-6 text-emerald-400" />,
      description: '100% foreign ownership in 1,500+ activities. Unlimited footprint across the UAE.',
      details: ['DED Licensing', 'Corporate Banking', 'PRO Services'],
      badge: 'FAST TRACK',
      badgeColor: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400',
      metricLabel: 'SPEED SCORE',
      metricValue: '96%',
    },
    {
      title: 'Free Zone Setup',
      icon: <Globe className="w-6 h-6 text-amber-500" />,
      description: 'Zero corporate tax, 100% profit repatriation, and specialized industry clusters.',
      details: ['DMCC/DIFC Expertise', 'Office Solutions', 'Custom Infrastructure'],
      badge: 'ZERO CORP TAX',
      badgeColor: 'bg-amber-500/5 border-amber-500/20 text-amber-400',
      metricLabel: 'TAX BENEFIT',
      metricValue: '100%',
    },
    {
      title: 'KSA Market Entry',
      icon: <Landmark className="w-6 h-6 text-rose-400" />,
      description: 'MISA-approved business setup aligned with Vision 2030 in the largest GCC market.',
      details: ['Investment Licenses', 'CR Registration', 'Local Representation'],
      badge: 'MISA APPROVED',
      badgeColor: 'bg-rose-500/5 border-rose-500/20 text-rose-400',
      metricLabel: 'VISION 2010',
      metricValue: '98%',
    },
    {
      title: 'Visa & Compliance',
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      description: 'Seamless immigration and legal compliance for founders and workforce.',
      details: ['Golden Visas', 'Labor Cards', 'Annual Renewals'],
      badge: 'SECURE',
      badgeColor: 'bg-blue-500/5 border-blue-500/20 text-[#60a5fa]',
      metricLabel: 'SUCCESS SCORE',
      metricValue: '99%',
    },
  ];

  return (
    <section id="business-setup" className="py-24 relative bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Corporate Architectures</span>
            <motion.h2 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-100 font-bold tracking-tight"
            >
              Business Setup <span className="text-emerald-400 italic">Excellence.</span>
            </motion.h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              We navigate the complexities of GCC regulations so you can focus on scale. 
              From mainland Dubai to the heart of Riyadh, our solutions are engineered for growth.
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-[10px] uppercase tracking-[0.5em] text-slate-500 block mb-2 font-mono">Service Lifecycle</span>
            <div className="text-2xl font-serif text-emerald-400 italic font-semibold">Discovery to Deployment</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              style={{ willChange: 'transform, opacity' }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-slate-700 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-slate-800/40 rounded-xl group-hover:scale-105 transition-transform duration-305">
                    {service.icon}
                  </div>
                  <span className={`text-[9px] font-bold font-mono py-1 px-2.5 rounded-full border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-3 text-slate-100 group-hover:text-emerald-400 transition-colors text-left">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light text-left">
                  {service.description}
                </p>
                
                <ul className="space-y-3 pt-2 mb-6 border-t border-slate-800/40">
                  {service.details.map((detail) => (
                    <li key={detail} className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-2.5 font-semibold text-left">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* High precision metric meter inspired by Tailwind Bento Grid */}
              <div className="mt-auto pt-4 border-t border-slate-800/60">
                <div className="flex justify-between items-center text-[9px] text-slate-500 font-mono mb-1.5 uppercase font-semibold">
                  <span>{service.metricLabel}</span>
                  <span className="text-emerald-400 font-bold">{service.metricValue}</span>
                </div>
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-1 rounded-full group-hover:bg-emerald-500 transition-colors" style={{ width: service.metricValue }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Optimized Background Accent (lighter blur filter to optimize performance) */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-500/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  );
};

export default BusinessSetup;
