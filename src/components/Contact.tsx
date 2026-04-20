import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Begin Your <span className="text-gold-300 italic">Legacy.</span>
            </h2>
            <p className="text-stone-400 font-light text-sm tracking-[0.3em] uppercase">Private Consultation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border border-white/5 bg-luxury-black/30 backdrop-blur-sm">
            {/* Form Side */}
            <div className="p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-gold-300 transition-all placeholder:text-[#F5F5F0]/20"
                    />
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-gold-300 transition-all placeholder:text-stone-600"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input 
                      type="tel" 
                      placeholder="Phone / WhatsApp"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-gold-300 transition-all placeholder:text-stone-600"
                    />
                  </div>
                  <div className="relative group">
                    <select className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-gold-300 transition-all text-stone-400">
                      <option value="">Interested Service</option>
                      <option value="setup">Business Setup</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="both">Both Solutions</option>
                    </select>
                  </div>
                </div>
                
                <div className="relative group">
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your venture"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-sm font-light focus:outline-none focus:border-gold-300 transition-all placeholder:text-stone-600 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-luxury-black font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 transition-colors hover:bg-gold-300"
                >
                  Request Consultation <Send size={14} />
                </motion.button>
              </form>
            </div>

            {/* Info Side */}
            <div className="p-8 md:p-12 bg-white/[0.02] border-l border-white/5 flex flex-col justify-between">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-gold-300/20 flex items-center justify-center text-gold-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Direct Line</h4>
                    <p className="text-white font-medium text-lg">+971 567074922</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-gold-300/20 flex items-center justify-center text-gold-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Electronic Mail</h4>
                    <p className="text-white font-medium text-lg">info@4pillars.ae</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-gold-300/20 flex items-center justify-center text-gold-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Global Headquarters</h4>
                    <p className="text-white font-medium text-lg">RAKEZ Business Zone, <br /> Ras Al Khaimah, UAE</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <p className="text-[11px] text-stone-500 leading-relaxed italic">
                  "Confidentiality and excellence are the bedrock of our consultancy. We look forward to realizing your vision."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
