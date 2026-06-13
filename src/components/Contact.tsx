import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate real database or email dispatch securely
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        }, 4000);
    };

    return (
        <section id="contact" className="py-24 bg-luxury-charcoal relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto border border-slate-800 bg-slate-900/40 rounded-3xl overflow-hidden backdrop-blur-sm">
                    <div className="text-center pt-16 mb-12">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block font-mono">Private Consultation</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 font-bold">
                            Begin Your <span className="text-emerald-400 italic font-medium">Legacy.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Form Side */}
                        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-800">
                            {formSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
                                        <Check size={32} />
                                    </div>
                                    <h3 className="font-serif text-2xl text-white mb-2 font-bold">Message Dispatched</h3>
                                    <p className="text-slate-400 font-light text-sm max-w-sm">
                                        Thank you. A senior legal consultant has been assigned to your query and will contact you via phone or secure electronic mail within 2 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Full Name"
                                                className="w-full bg-transparent border-b border-slate-800 py-4 text-sm font-light focus:outline-none focus:border-emerald-400 transition-all placeholder:text-slate-600 text-white"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Email Address"
                                                className="w-full bg-transparent border-b border-slate-800 py-4 text-sm font-light focus:outline-none focus:border-emerald-400 transition-all placeholder:text-slate-600 text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Phone / WhatsApp"
                                                className="w-full bg-transparent border-b border-slate-800 py-4 text-sm font-light focus:outline-none focus:border-emerald-400 transition-all placeholder:text-slate-600 text-white"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-transparent border-b border-slate-800 py-4 text-sm font-light focus:outline-none focus:border-emerald-400 transition-all text-slate-400 bg-slate-900"
                                            >
                                                <option value="" disabled className="text-slate-600">Interested Service</option>
                                                <option value="setup" className="text-white bg-slate-900">Business Setup</option>
                                                <option value="marketing" className="text-white bg-slate-900">Digital Marketing</option>
                                                <option value="both" className="text-white bg-slate-900">Both Solutions</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <textarea
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Tell us about your venture"
                                            className="w-full bg-transparent border-b border-slate-800 py-4 text-sm font-light focus:outline-none focus:border-emerald-400 transition-all placeholder:text-slate-600 text-white resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        type="submit"
                                        className="w-full py-5 bg-emerald-400 text-slate-950 font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 transition-colors hover:bg-emerald-300 rounded-full cursor-pointer font-mono"
                                    >
                                        Request Consultation <Send size={14} />
                                    </motion.button>
                                </form>
                            )}
                        </div>

                        {/* Info Side */}
                        <div className="p-8 md:p-12 bg-slate-900/20 flex flex-col justify-between">
                            <div className="space-y-12 text-left">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold font-mono">Direct Line</h4>
                                        <p className="text-white font-medium text-lg pointer-events-auto cursor-pointer hover:text-emerald-400 transition-colors">
                                            <a href="tel:+971567074922">+971 56 707 4922</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold font-mono">Electronic Mail</h4>
                                        <p className="text-white font-medium text-lg pointer-events-auto cursor-pointer hover:text-emerald-400 transition-colors">
                                            <a href="mailto:info@fourpillarsweb.com">info@fourpillarsweb.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold font-mono">Global Headquarters</h4>
                                        <p className="text-slate-300 text-base leading-relaxed">RAKEZ Business Zone, <br /> Ras Al Khaimah, UAE</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-12 border-t border-slate-800 text-left">
                                <p className="text-[11px] text-slate-500 leading-relaxed italic">
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
