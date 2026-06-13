import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const priceRows = [
    ['0 Visa', 'AED 4,888', 'AED 4,888'],
    ['1 Visa', 'AED 10,800', 'AED 9,900'],
    ['2 Visas', 'AED 16,200', 'AED 13,950'],
    ['3 Visas', 'AED 20,700', 'AED 17,550'],
    ['4 Visas', 'AED 25,200', 'AED 21,150'],
    ['5 Visas', 'AED 29,700', 'AED 24,750'],
    ['6 Visas', 'AED 34,200', 'AED 28,350'],
    ['7 Visas', 'AED 38,700', 'AED 31,950'],
];

const visaCostItems = [
    ['Visa Allocation Fee', 'AED 1,000'],
    ['Security Pre-Approval', 'AED 200'],
    ['Establishment Card', 'AED 500'],
    ['E-Channel', 'AED 2,300'],
    ['Entry Permit', 'AED 950'],
    ['Visa Status Change', 'AED 800'],
    ['Medical', 'AED 350'],
    ['Residence Visa / Emirates ID', 'AED 1,900'],
];

const faqs = [
    {
        question: 'How much does a trade license with visa cost in Ajman?',
        answer: 'An Ajman trade license with 1 visa starts from AED 10,800 after discount. A 0 visa package starts from AED 4,888.',
    },
    {
        question: 'What is the cheapest Ajman business license package?',
        answer: 'The lowest package starts from AED 4,888 for a 0 visa package, suitable for business owners who do not currently need UAE residency.',
    },
    {
        question: 'How much is the renewal of an Ajman trade license?',
        answer: 'Renewal starts from AED 4,888 for the 0 visa package. A 1 visa renewal package costs AED 9,900 after discount.',
    },
    {
        question: 'Are visa and Emirates ID charges separate payments?',
        answer: 'No. The visa and Emirates ID cost items are treated as part of the selected license and visa package. They are shown for transparency and should not be added again as a separate payment.',
    },
];

const AjmanLicenseBlog: React.FC = () => {
    return (
        <article id="ajman-license-cost-visa" className="py-24 relative bg-luxury-black" itemScope itemType="https://schema.org/BlogPosting">
            <div className="container mx-auto px-6">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <span className="text-[10px] uppercase tracking-[0.45em] text-emerald-400 font-bold font-mono block mb-4">Ajman License Cost Guide</span>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-6" itemProp="headline">
                        Cost of a Trade License with Visa in Ajman
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light max-w-3xl mx-auto" itemProp="description">
                        Looking for the cost of a license with visa in Ajman? This guide explains the package prices, renewal fees, included services, and visa and Emirates ID cost items so you can plan your UAE company setup with confidence.
                    </p>
                </motion.header>

                <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_0.28fr] gap-8 items-start">
                    <div className="space-y-8 text-left">
                        <section className="glass-card p-6 md:p-8">
                            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-5">Ajman trade license cost with visa</h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                The cost of an Ajman trade license depends mainly on the visa allocation included in your selected package. Below is a simplified breakdown based on package pricing after discount.
                            </p>

                            <div className="overflow-x-auto rounded-2xl border border-slate-800">
                                <table className="w-full min-w-[620px] text-sm">
                                    <thead className="bg-slate-800/70 text-slate-200">
                                        <tr>
                                            <th className="px-5 py-4 text-left text-[10px] uppercase tracking-widest font-mono">Visa Package</th>
                                            <th className="px-5 py-4 text-left text-[10px] uppercase tracking-widest font-mono">New Registration</th>
                                            <th className="px-5 py-4 text-left text-[10px] uppercase tracking-widest font-mono">Renewal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {priceRows.map(([visa, registration, renewal]) => (
                                            <tr key={visa} className="border-t border-slate-800/80">
                                                <td className="px-5 py-4 text-white font-semibold">{visa}</td>
                                                <td className="px-5 py-4 text-emerald-300 font-bold">{registration}</td>
                                                <td className="px-5 py-4 text-slate-300">{renewal}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="glass-card p-6 md:p-8">
                            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-5">What is included in the Ajman license package?</h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Ajman business license packages usually include the main company formation documents and setup services required to start your business. The package may include business license, lease agreement, commercial registry, share certificate, certificate of incorporation, certificate of incumbency, bank letter to open a corporate bank account, and branch registration certificate if applicable.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Business license', 'Lease agreement', 'Commercial registry', 'Share certificate', 'Certificate of incorporation', 'Bank letter for account opening'].map((item) => (
                                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4">
                                        <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={18} />
                                        <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="glass-card p-6 md:p-8">
                            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-5">Visa and Emirates ID cost items</h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                The following items are considered part of the visa and Emirates ID processing cost within the selected package. They are shown for transparency and should not be calculated as a separate payment on top of the package price.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {visaCostItems.map(([service, charge]) => (
                                    <div key={service} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/40 px-5 py-4">
                                        <span className="text-slate-300 text-xs font-semibold">{service}</span>
                                        <span className="text-emerald-300 text-xs font-bold whitespace-nowrap">{charge}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="glass-card p-6 md:p-8">
                            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-5">Which Ajman license package should you choose?</h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                If you need only a company license, the 0 visa package can be the most cost-effective option. If you need UAE residency as the owner, the 1 visa package from AED 10,800 may be more suitable. If you plan to add employees or partners, packages from 2 to 7 visas can support a larger setup.
                            </p>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                For the exact cost based on your business activity and visa needs, contact Four Pillars Business and we will help you choose the right package.
                            </p>
                        </section>

                        <section className="glass-card p-6 md:p-8">
                            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">FAQ about Ajman license cost</h2>
                            <div className="space-y-4">
                                {faqs.map((faq) => (
                                    <div key={faq.question} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
                                        <h3 className="text-white font-bold text-sm mb-2">{faq.question}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="lg:sticky lg:top-28 space-y-5">
                        <div className="rounded-[1.75rem] border border-emerald-400/20 bg-emerald-400/10 p-6 text-left">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-300 font-bold font-mono block mb-3">Starting From</span>
                            <div className="font-serif text-5xl text-white font-black mb-2">AED 10,800</div>
                            <p className="text-slate-300 text-xs leading-relaxed mb-5">Ajman license package with 1 visa after discount.</p>
                            <a href="https://wa.me/971567074922?text=Hello%204Pillars%2C%20I%20want%20an%20Ajman%20license%20and%20visa%20quotation." target="_blank" rel="noopener noreferrer" className="block w-full rounded-full bg-emerald-400 px-5 py-3 text-center text-[10px] font-bold uppercase tracking-widest text-slate-950 hover:bg-emerald-300 transition-colors font-mono">
                                Get Quote
                            </a>
                        </div>
                        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/60 p-6 text-left">
                            <h3 className="font-serif text-2xl text-white font-bold mb-3">Important pricing note</h3>
                            <p className="text-slate-500 text-xs leading-relaxed">Visa and Emirates ID cost items are included in the package estimate. They are not separate add-on payments.</p>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
};

export default AjmanLicenseBlog;
