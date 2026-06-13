import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LicenseOfferAd from './components/LicenseOfferAd';
import Partners from './components/Partners';
import BusinessSetup from './components/BusinessSetup';
import DigitalMarketing from './components/DigitalMarketing';
import Comparison from './components/Comparison';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import AjmanCostCalculator from './components/AjmanCostCalculator';
import AjmanLicenseBlog from './components/AjmanLicenseBlog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollLightRing from './components/ScrollLightRing';
import { MessageCircle } from 'lucide-react';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    const isBlogPage = window.location.pathname === '/blog/ajman-license-cost-visa';

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        document.title = isBlogPage
            ? 'Cost of a Trade License with Visa in Ajman | Four Pillars Business'
            : 'Ajman Trade License Cost Calculator | Four Pillars Business';

        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.setAttribute(
                'content',
                isBlogPage
                    ? 'Read the full Ajman trade license with visa cost guide, including 0 to 7 visa packages, renewal fees, included services, and additional charges.'
                    : 'Use the Ajman license cost calculator to estimate trade license with visa costs, renewal fees, and additional service charges.'
            );
        }

        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, [isBlogPage]);

    return (
        <div className="relative min-h-screen selection:bg-gold-300 selection:text-luxury-black bg-luxury-black overflow-x-hidden">
            <div className="noise-overlay" />

            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-gold-300 origin-left z-[100]"
                style={{ scaleX, willChange: 'transform' }}
            />

            <ScrollLightRing />
            <Navbar />

            <main className="relative z-10">
                {isBlogPage ? (
                    <div className="relative z-10 bg-luxury-black pt-24">
                        <AjmanLicenseBlog />
                        <Contact />
                    </div>
                ) : (
                    <>
                        <Hero />
                        <LicenseOfferAd />
                        <Partners />

                        <div className="relative z-10 bg-luxury-black">
                            <BusinessSetup />
                            <DigitalMarketing />
                            <Comparison />
                            <Process />
                            <WhyUs />
                            <AjmanCostCalculator />
                            <Contact />
                        </div>
                    </>
                )}
            </main>

            <Footer />

            <motion.a
                href="https://wa.me/971567074922"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact WhatsApp Support"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                className="fixed bottom-8 right-8 z-[70] w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-gold-300 transition-colors cursor-pointer"
            >
                <MessageCircle size={28} />
            </motion.a>

            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-gold-300/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-white/3 blur-[120px] rounded-full" />
            </div>
        </div>
    );
}

export default App;
