import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'motion/react';

type Step = {
    id: string;
    title: string;
    desc: string;
    image: string;
};

// Use high-performance, beautiful Unsplash CDN images to prevent build errors from missing assets
const consultationImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop";
const documentationImg = "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop";
const registrationImg = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop";
const growthImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop";

const steps: Step[] = [
    {
        id: '01',
        title: 'Consultation',
        desc: 'Strategic evaluation of your business goals and jurisdiction selection.',
        image: consultationImg
    },
    {
        id: '02',
        title: 'Documentation',
        desc: 'Precision preparation and attestation of all legal entry files.',
        image: documentationImg
    },
    {
        id: '03',
        title: 'Registration',
        desc: 'Seamless government submission and faster trade license issuance.',
        image: registrationImg
    },
    {
        id: '04',
        title: 'Growth Launch',
        desc: 'Post-setup support: visas, banking, and digital marketing activation.',
        image: growthImg
    }
];

const Process: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const isInView = useInView(sectionRef, { amount: 0.1, once: false });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 85%', 'end 20%']
    });

    // Use smooth springs to damp the movement and prevent stutters or sudden layout recalcs
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

    const timelineScaleX = useTransform(smoothProgress, [0, 1], [0.08, 1]);
    const timelineOpacity = useTransform(smoothProgress, [0, 0.1, 1], [0.2, 0.65, 1]);

    const storyY = useTransform(smoothProgress, [0, 1], [30, -30]);
    const storyOpacity = useTransform(smoothProgress, [0, 0.18, 0.85, 1], [0.25, 1, 1, 0.5]);

    const orbX = useTransform(smoothProgress, [0, 0.33, 0.66, 1], ['4%', '34%', '67%', '96%']);
    const orbOpacity = useTransform(smoothProgress, [0, 0.1, 1], [0, 1, 0.75]);

    return (
        <section
            id="process"
            ref={sectionRef}
            className="relative overflow-hidden border-y border-white/5 bg-luxury-black/50 py-24 md:py-32"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,160,0.05),transparent_40%),radial-gradient(circle_at_bottom,rgba(180,140,255,0.04),transparent_35%)]" />
                <div className="absolute inset-0 opacity-[0.03] mix-blend-normal [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0.7px,transparent_1px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08)_0.7px,transparent_1px),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.06)_0.7px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    style={{ y: storyY, opacity: storyOpacity, willChange: 'transform, opacity' }}
                    className="mb-16 md:mb-20"
                >
                    <span className="mb-4 block text-[10px] uppercase tracking-[0.5em] text-emerald-400 font-mono font-bold">
                        Engineered for Speed
                    </span>

                    <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Our Execution <span className="italic text-emerald-400 font-medium">Roadmap.</span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm uppercase tracking-[0.28em] text-stone-400 md:justify-self-end">
                            A refined, end-to-end process built for faster market entry, cleaner execution,
                            and stronger post-launch momentum.
                        </p>
                    </div>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-0 right-0 top-8 hidden lg:block">
                        <div className="relative h-px w-full overflow-hidden bg-white/10">
                            <motion.div
                                style={{
                                    scaleX: timelineScaleX,
                                    opacity: timelineOpacity,
                                    willChange: 'transform, opacity'
                                }}
                                className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-emerald-500/80 via-emerald-400 to-emerald-300"
                            />
                        </div>

                        <motion.div
                            style={{
                                left: orbX,
                                opacity: orbOpacity,
                                willChange: 'left, opacity',
                                transform: 'translateY(-50%) translateZ(0)'
                            }}
                            className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-emerald-300/80 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                        >
                            <div className="absolute inset-[-10px] rounded-full bg-emerald-500/15 blur-lg" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <ProcessCard
                                key={step.id}
                                step={step}
                                index={index}
                                progress={smoothProgress}
                                active={isInView}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcessCard: React.FC<{
    step: Step;
    index: number;
    progress: any;
    active: boolean;
}> = ({ step, index, progress, active }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(cardRef, { amount: 0.15, once: false });

    // Use transform scale and translate with backface visibility for ultimate scrolling speed
    const imageY = useTransform(
        progress,
        [0, 1],
        [index % 2 === 0 ? -12 : -6, index % 2 === 0 ? 12 : 6]
    );

    const imageScale = useTransform(progress, [0, 1], [1.05, 1.12]);

    // Keep tilt parameters very mild and clean to avoid repaint overload on low-end machines
    const cardRotateY = useTransform(
        progress,
        [0, 0.5, 1],
        [index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 3 : -3]
    );

    const cardRotateX = useTransform(progress, [0, 0.5, 1], [2, 0, -2]);

    const floatingY = useTransform(progress, [0, 1], [0, index % 2 === 0 ? -6 : 6]);

    const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.12, 0.22, 0.15]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1]
            }}
            style={{
                y: floatingY,
                rotateY: cardRotateY,
                rotateX: cardRotateX,
                transformPerspective: 1000,
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
            }}
            className="group relative"
        >
            <div className="relative min-h-[340px] overflow-hidden border border-slate-800 bg-slate-900 md:min-h-[380px] rounded-3xl">
                <motion.div
                    style={{ opacity: glowOpacity, willChange: 'opacity' }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(16,185,129,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.05),transparent_35%)]"
                />

                <motion.div style={{ y: imageY, scale: imageScale, willChange: 'transform' }} className="absolute inset-0">
                    <div
                        className="absolute inset-[-5%] bg-cover bg-center opacity-[0.25] transition-opacity duration-500 group-hover:opacity-[0.35]"
                        style={{ backgroundImage: `url(${step.image})` }}
                    />
                </motion.div>

                <div className="absolute inset-0 bg-[rgba(15,23,42,0.65)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/[0.02] via-transparent to-slate-950/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.04] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-normal [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0.7px,transparent_1px)] [background-size:12px_12px]" />

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute inset-y-[-20%] left-[-60%] w-[35%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 blur-lg transition-[left,opacity] duration-[1200ms] ease-out group-hover:left-[130%] group-hover:opacity-100" />
                </div>

                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 transition-colors duration-500 group-hover:ring-emerald-400/15" />

                {index < steps.length - 1 && (
                    <div className="pointer-events-none absolute right-[-10px] top-8 z-20 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0.2, scaleX: 0.6 }}
                            animate={
                                active
                                    ? {
                                        opacity: [0.15, 0.45, 0.15],
                                        scaleX: [0.6, 1, 0.6]
                                    }
                                    : {}
                            }
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index * 0.2
                            }}
                            className="h-px w-8 origin-left bg-gradient-to-r from-emerald-400/30 to-transparent"
                        />
                    </div>
                )}

                <div className="absolute right-0 top-0 p-5 text-5xl font-serif text-white/[0.02] transition-colors duration-500 group-hover:text-emerald-400/8">
                    {step.id}
                </div>

                <div className="absolute left-8 top-8 z-20">
                    <motion.div
                        animate={
                            active && inView
                                ? {
                                    scale: [1, 1.08, 1],
                                    opacity: [0.65, 0.85, 0.65]
                                }
                                : { scale: 1, opacity: 0.65 }
                        }
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.15
                        }}
                        className="relative"
                    >
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                        <div className="absolute inset-[-6px] rounded-full border border-emerald-400/25" />
                        <div className="absolute inset-[-12px] rounded-full bg-emerald-400/5 blur-md" />
                    </motion.div>
                </div>

                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-left">
                    <div className="mb-6 h-[2px] w-8 bg-emerald-400/80 transition-all duration-500 group-hover:w-16" />

                    <h3 className="mb-3 font-serif text-xl text-white transition-colors duration-500 group-hover:text-emerald-400 md:text-2xl font-bold">
                        {step.title}
                    </h3>

                    <p className="max-w-[26ch] text-[11px] font-light uppercase leading-relaxed tracking-[0.22em] text-slate-400">
                        {step.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Process;
