import React, { useMemo, useState } from 'react';
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

const addOns = [
    { id: 'visa-allocation', label: 'Visa Allocation Fee', price: 1000 },
    { id: 'security', label: 'Security Pre-Approval', price: 200 },
    { id: 'establishment-card', label: 'Establishment Card', price: 500 },
    { id: 'e-channel', label: 'E-Channel', price: 2300 },
    { id: 'entry-permit', label: 'Entry Permit', price: 950 },
    { id: 'status-change', label: 'Visa Status Change', price: 800 },
    { id: 'medical', label: 'Medical', price: 350 },
    { id: 'residence-eid', label: 'Residence Visa / Emirates ID', price: 1900 },
];

const formatAED = (amount: number) => `AED ${amount.toLocaleString('en-AE')}`;

const AjmanCostCalculator: React.FC = () => {
    const [selectedVisas, setSelectedVisas] = useState(1);
    const [costType, setCostType] = useState<'registration' | 'renewal'>('registration');
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    const selectedPackage = packages.find((item) => item.visas === selectedVisas) ?? packages[1];
    const packageCost = selectedPackage[costType];

    const addOnTotal = useMemo(() => {
        return addOns
            .filter((item) => selectedAddOns.includes(item.id))
            .reduce((total, item) => total + item.price, 0);
    }, [selectedAddOns]);

    const total = packageCost + addOnTotal;

    const toggleAddOn = (id: string) => {
        setSelectedAddOns((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
        );
    };

    const whatsAppText = encodeURIComponent(
        `Hello 4Pillars, I used the Ajman license cost calculator. I selected ${selectedPackage.label}, ${costType === 'registration' ? 'new registration' : 'renewal'}, estimated total ${formatAED(total)}. Please confirm the quotation.`
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
                        Calculate your Ajman license and visa cost
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light max-w-3xl mx-auto">
                        Select the number of visas, choose new registration or renewal, then add any extra service requests to get an instant estimated cost.
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
                            <label className="block text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold font-mono mb-4">Optional additional service requests</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {addOns.map((item) => {
                                    const checked = selectedAddOns.includes(item.id);
                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => toggleAddOn(item.id)}
                                            className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-left transition-all ${checked ? 'border-emerald-400 bg-emerald-400/10' : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'}`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${checked ? 'border-emerald-400 bg-emerald-400 text-slate-950' : 'border-slate-700'}`}>
                                                    {checked && <CheckCircle2 size={14} />}
                                                </span>
                                                <span className="text-xs text-slate-300 font-semibold">{item.label}</span>
                                            </span>
                                            <span className="text-xs text-emerald-300 font-bold whitespace-nowrap">{formatAED(item.price)}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:sticky lg:top-28 rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 via-slate-900 to-slate-950 p-6 md:p-8 text-left shadow-2xl shadow-emerald-950/20">
                        <span className="text-[10px] uppercase tracking-[0.35em] text-emerald-300 font-bold font-mono block mb-4">Estimated Total</span>
                        <div className="font-serif text-5xl md:text-6xl text-white font-black mb-3">{formatAED(total)}</div>
                        <p className="text-slate-400 text-xs leading-relaxed mb-8">
                            This is an estimate based on the selected package and optional service requests. Final quotation may vary depending on activity, approvals, and document requirements.
                        </p>

                        <div className="space-y-3 mb-8">
                            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                <span className="text-slate-400 text-xs">Selected package</span>
                                <span className="text-white text-xs font-bold">{selectedPackage.label}</span>
                            </div>
                            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                <span className="text-slate-400 text-xs">Package cost</span>
                                <span className="text-white text-xs font-bold">{formatAED(packageCost)}</span>
                            </div>
                            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                                <span className="text-slate-400 text-xs">Add-ons</span>
                                <span className="text-white text-xs font-bold">{formatAED(addOnTotal)}</span>
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
