import React from 'react';
import { motion } from 'motion/react';
import { Building2, Globe, FileText, Landmark } from 'lucide-react';

const BusinessSetup: React.FC = () => {
  const services = [
    {
      title: 'Dubai Mainland',
      icon: <Building2 className="w-8 h-8 text-gold-300" />,
      description: '100% foreign ownership in 1,500+ activities. Unlimited footprint across the UAE.',
      details: ['DED Licensing', 'Corporate Banking', 'PRO Services'],
    },
    {
      title: 'Free Zone Setup',
      icon: <Globe className="w-8 h-8 text-gold-300" />,
      description: 'Zero corporate tax, 100% profit repatriation, and specialized industry clusters.',
      details: ['DMCC/DIFC Expertise', 'Office Solutions', 'Custom Infrastructure'],
    },
    {
      title: 'KSA Market Entry',
      icon: <Landmark className="w-8 h-8 text-gold-300" />,
      description: 'MISA-approved business setup aligned with Vision 2030 in the largest GCC market.',
      details: ['Investment Licenses', 'CR Registration', 'Local Representation'],
    },
    {
      title: 'Visa & Compliance',
      icon: <FileText className="w-8 h-8 text-gold-300" />,
      description: 'Seamless immigration and legal compliance for founders and workforce.',
      details: ['Golden Visas', 'Labor Cards', 'Annual Renewals'],
    },
  ];

  return (
    <section id="business-setup" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Business Setup <span className="text-gold-300 italic">Excellence.</span>
            </motion.h2>
            <p className="text-stone-400 text-lg font-light leading-relaxed">
              We navigate the complexities of GCC regulations so you can focus on scale. 
              From mainland Dubai to the heart of Riyadh, our solutions are engineered for growth.
            </p>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-500 block mb-2">Service Lifecycle</span>
            <div className="text-2xl font-serif gold-gradient-text italic font-semibold">Discovery to Deployment</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-gold-300/30 transition-all duration-500"
            >
              <div className="mb-8 p-4 w-fit bg-white/5 rounded-sm group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl mb-4 text-white group-hover:text-gold-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-6 font-light">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.details.map((detail) => (
                  <li key={detail} className="text-[10px] uppercase tracking-widest text-stone-500 flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold-300" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  );
};

export default BusinessSetup;
