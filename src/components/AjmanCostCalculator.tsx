import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, MessageCircle } from 'lucide-react';

const packages = [
    { visas: 0, label: '0 Visa', registration: 4888, renewal: 4888 },
    { visas: 1, label: '1 Visa', registration: 10800, renewal: 9900 },
    { visas: 2, label: '2 Visas', registration: 16200, renewal: 13950 },
    { visas: 3, label: '3 Visas', registration: 20700, renewal: 17550 },
    { visas: 4, label: '4 Visas', registration: 25200, renewal: 21150 },
    { visas: 5, label: '5 Visas', registration: 29700, renewal: 24750 },
    { visas: 6, label: '6 Visas', registration: 34200, renewal: 28350 },
    { visas: 7, label: '7 Visas', registration: 38700, renewal: 31950 },
];

const visaCostItems = [
    { label: 'Visa Allocation Fee', price: 1000 },
    { label: 'Security Pre-Approval', price: 200 },
    { label: 'Establishment Card', price: 500 },
    { label: 'E-Channel', price: 2300 },
    { label: 'Entry Permit', price: 950 },
    { label: 'Visa Status Change', price: 800 },
    { label: 'Medical', price: 350 },
    { label: 'Residence Visa / Emirates ID', price: 1900 },
];

const formatAED = (amount: number) => `AED ${amount.toLocaleString('en-AE')}`;

const AjmanCostCalculator: React.FC = () => {
    const [selectedVisas, setSelectedVisas] = useState(1);
    const [costType, setCostType] = useState<'registration' | 'renewal'>('registration');

    const selectedPackage = packages.find((item) => item.visas === selectedVisas) ?? packages[1];
    const total = selectedPackage[costType];

    const whatsAppText = encodeURIComponent(
        `Hello 4Pillars, I used the Ajman license cost calculator. I selected ${selectedPackage.label}, ${costType === 'registration' ? 'new registration' : 'renewal'}, estimated package total ${formatAED(total)}. Please confirm the quotation.`
    );

    return (
        <section id="ajman-license-calculator" className="py-24 relative bg-luxury-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="max-w-4xl mx-auto text-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-emerald-400 font-bold font-mono mb-4">
                        <Calculator size={15} /> Ajman License Cost Calculator
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6">
                        Calculate your Ajman license and visa package
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light max-w-3xl mx-auto">
                        Select the number of visas and choose new registration or renewal. The visa and Emirates ID cost items are shown as part of the package calculation, not as a separate payment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_0.38fr] gap-8 items-start">
                    <div className="glass-card p-6 md:p-8 text-left space-y-8">
                        <div>
                            <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold font-mono mb-4">Number of visas</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {packages.map((item) => (
                                    <button
                                        key={item.visas}
                                        type="button"
                                        onClick={() => setSelectedVisas(item.visas)}
                                        className={`rounded-2xl border px-4 py-4 text-left transition-all ${selectedVisas === item.visas ? 'border-emerald-400 bg-emerald-400/10 text-white' : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'}`}
                                    >
                                        <span className="block text-lg font-serif font-bold">{item.label}</span>
                                        <span className="block text-[10px] uppercase tracking-wider mt-1">from {formatAED(item.registration)}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold font-mono mb-4">Cost type</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setCostType('registration')}
                                    className={`rounded-2xl border px-5 py-4 text-left transition-all ${costType === 'registration' ? 'border-emerald-400 bg-emerald-400/10 text-white' : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'}`}
                                >
                                    <span className="block text-sm font-bold uppercase tracking-widest">New Registration</span>
                                    <span className="block text-xs mt-2 text-emerald-300">{formatAED(selectedPackage.registration)}</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCostType('renewal')}
                                    className={`rounded-2xl border px-5 py-4 text-left transition-all ${costType === 'renewal' ? 'border-emerald-400 bg-emerald-400/10 text-white' : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'}`}
                                >
                                    <span className="block text-sm font-bold uppercase tracking-widest">Renewal</span>
                                    <span className="block text-xs mt-2 text-emerald-300">{formatAED(selectedPackage.renewal)}</span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold font-mono mb-4">Visa and Emirates ID cost items</label>
                            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-5 mb-4">
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    These items are considered part of the visa and Emirates ID processing cost inside the package. They are displayed for transparency and are not added again to the total.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {visaCostItems.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-4 text-left"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="w-5 h-5 rounded-full border border-emerald-400 bg-emerald-400 text-slate-950 flex items-center justify-center">
                                                <CheckCircle2 size={14} />
                                            </span>
                                            <span className="text-xs text-slate-300 font-semibold">{item.label}</span>
                                        </span>
                                        <span className="text-xs text-emerald-300 font-bold whitespace-nowrap">{formatAED(item.price)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:sticky lg:top-28 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-slate-900 to-slate-950 p-6 md:p-8 text-left shadow-2xl shadow-emerald-950/20">
                        <span className="text-[10px] uppercase tracking-[0.35em] text-emerald-300 font-bold font-mono block mb-4">Estimated Package Total</span>
                        <div className="font-serif text-5xl md:text-6xl text-white font-black mb-3">{formatAED(total)}</div>
                        <p className="text-slate-400 text-xs leading-relaxed mb-8">
                            This is an estimate based on the selected license and visa package. The listed visa and Emirates ID items are included in the package estimate and are not separate add-on payments.
                        </p>

                        <div className="space-y-3 mb-8">
                            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                <span className="text-slate-400 text-xs">Selected package</span>
                                <span className="text-white text-xs font-bold">{selectedPackage.label}</span>
                            </div>
                            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                <span className="text-slate-400 text-xs">Package type</span>
                                <span className="text-white text-xs font-bold">{costType === 'registration' ? 'New Registration' : 'Renewal'}</span>
                            </div>
                            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                <span className="text-slate-400 text-xs">Visa / Emirates ID items</span>
                                <span className="text-white text-xs font-bold">Included</span>
                            </div>
                        </div>

                        <a
                            href={`https://wa.me/971567074922?text=${whatsAppText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-950 hover:bg-emerald-300 transition-colors font-mono"
                        >
                            Confirm on WhatsApp <MessageCircle size={16} />
                        </a>

                        <a
                            href="/blog/ajman-license-cost-visa"
                            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white hover:border-emerald-400/60 hover:text-emerald-300 transition-colors font-mono"
                        >
                            Read Full Cost Guide
                        </a>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default AjmanCostCalculator;
