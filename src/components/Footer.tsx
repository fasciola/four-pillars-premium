import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 flex flex-wrap gap-1">
                <div className="w-3 h-3 bg-gold-300" />
                <div className="w-3 h-3 border border-white/30" />
                <div className="w-3 h-3 border border-white/30" />
                <div className="w-3 h-3 bg-gold-300" />
              </div>
              <span className="font-serif text-xl font-semibold text-white">
                Four Pillars
              </span>
            </div>
            <p className="text-stone-500 text-xs leading-relaxed font-light tracking-wide max-w-xs">
              Premier business setup and digital growth studio specializing in the UAE and Saudi Arabian markets. Crafting excellence since 2023.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Market Entry', 'Service Lifecycle', 'UAE vs KSA', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-stone-500 hover:text-gold-300 text-[11px] uppercase tracking-widest transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Expertise</h4>
            <ul className="space-y-4">
              {['Mainland Setup', 'Free Zone Entity', 'MISA Licensing', 'SEO Strategy', 'Luxury Branding'].map((link) => (
                <li key={link} className="text-stone-600 text-[11px] uppercase tracking-widest font-light">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Social Presence</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/fourpillarsfzllc/" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-stone-500 hover:text-gold-300 hover:border-gold-300/30 transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=615933361599231" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-stone-500 hover:text-gold-300 hover:border-gold-300/30 transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-stone-500 hover:text-gold-300 hover:border-gold-300/30 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-stone-500 hover:text-gold-300 hover:border-gold-300/30 transition-all">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-600 text-[10px] uppercase tracking-widest font-light">
            © 2025 Four Pillars Business Setup & Digital Marketing. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-stone-600 hover:text-stone-400 text-[10px] uppercase tracking-[0.3em] font-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-600 hover:text-stone-400 text-[10px] uppercase tracking-[0.3em] font-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top placeholder - I'll stick with the user's light ring */}
    </footer>
  );
};

export default Footer;
