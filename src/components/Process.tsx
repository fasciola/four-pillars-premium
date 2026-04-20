import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

import consultationImg from "../assets/images/process/process-consultation.jpg";
import documentationImg from "../assets/images/process/process-documentation.jpg";
import registrationImg from "../assets/images/process/process-registration.jpg";
import growthImg from "../assets/images/process/process-growth.jpg";

type Step = {
    id: string;
    title: string;
    desc: string;
    image: string;
};

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
    const isInView = useInView(sectionRef, { amount: 0.2, once: false });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 85%', 'end 20%']
    });

    const timelineScaleX = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
    const timelineOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0.2, 0.65, 1]);

    const storyY = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const storyOpacity = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [0.25, 1, 1, 0.5]);

    const orbX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['4%', '34%', '67%', '96%']);
    const orbOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 0.75]);

    return (
        <section
            id="process"
            ref={sectionRef}
            className="relative overflow-hidden border-y border-white/5 bg-luxury-black/50 py-24 md:py-32"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,160,0.06),transparent_35%),radial-gradient(circle_at_bottom,rgba(180,140,255,0.05),transparent_30%)]" />
                <div className="absolute inset-0 opacity-[0.04] mix-blend-soft-light [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16)_0.7px,transparent_1px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1)_0.7px,transparent_1px),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.08)_0.7px,transparent_1px),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06)_0.7px,transparent_1px)] [background-size:12px_12px,14px_14px,16px_16px,18px_18px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    style={{ y: storyY, opacity: storyOpacity }}
                    className="mb-16 md:mb-20"
                >
                    <span className="mb-4 block text-[10px] uppercase tracking-[0.5em] text-gold-300">
                        Engineered for Speed
                    </span>

                    <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
                                Our Execution <span className="italic text-gold-300">Roadmap.</span>
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
                                style={{ scaleX: timelineScaleX, opacity: timelineOpacity }}
                                className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-gold-300/70 via-amber-200 to-violet-200/80"
                            />
                        </div>

                        <motion.div
                            style={{ left: orbX, opacity: orbOpacity }}
                            className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/70 bg-gold-300/80 shadow-[0_0_18px_rgba(255,190,100,0.45),0_0_34px_rgba(255,130,70,0.25)]"
                        >
                            <div className="absolute inset-[-10px] rounded-full bg-orange-400/15 blur-xl" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <ProcessCard
                                key={step.id}
                                step={step}
                                index={index}
                                progress={scrollYProgress}
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
    const inView = useInView(cardRef, { amount: 0.35, once: false });

    const imageY = useTransform(
        progress,
        [0, 1],
        [index % 2 === 0 ? -18 : -10, index % 2 === 0 ? 18 : 10]
    );

    const imageScale = useTransform(progress, [0, 1], [1.08, 1.16]);

    const cardRotateY = useTransform(
        progress,
        [0, 0.5, 1],
        [index % 2 === 0 ? -5 : 5, 0, index % 2 === 0 ? 5 : -5]
    );

    const cardRotateX = useTransform(progress, [0, 0.5, 1], [3, 0, -3]);

    const floatingY = useTransform(progress, [0, 1], [0, index % 2 === 0 ? -10 : 10]);

    const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.18, 0.3, 0.22]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                delay: index * 0.12,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1]
            }}
            style={{
                y: floatingY,
                rotateY: cardRotateY,
                rotateX: cardRotateX,
                transformPerspective: 1400
            }}
            className="group relative"
        >
            <motion.div
                animate={
                    active && inView
                        ? {
                            y: [0, -6, 0]
                        }
                        : { y: 0 }
                }
                transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2
                }}
                className="relative min-h-[340px] overflow-hidden border border-white/8 bg-white/[0.02] backdrop-blur-[2px] md:min-h-[380px]"
            >
                <motion.div
                    style={{ opacity: glowOpacity }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,225,160,0.25),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(170,150,255,0.14),transparent_28%)]"
                />

                <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
                    <div
                        className="absolute inset-[-8%] bg-cover bg-center opacity-[0.3] transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.42]"
                        style={{ backgroundImage: `url(${step.image})` }}
                    />
                </motion.div>

                <div className="absolute inset-0 bg-black/48" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-300/[0.06] via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-soft-light [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16)_0.7px,transparent_1px),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1)_0.7px,transparent_1px),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.08)_0.7px,transparent_1px),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06)_0.7px,transparent_1px)] [background-size:12px_12px,14px_14px,16px_16px,18px_18px]" />

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute inset-y-[-20%] left-[-60%] w-[42%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 blur-xl transition-[left,opacity] duration-[1400ms] ease-out group-hover:left-[130%] group-hover:opacity-100" />
                </div>

                <div className="absolute inset-0 ring-1 ring-inset ring-white/6 transition-colors duration-500 group-hover:ring-gold-300/20" />

                {index < steps.length - 1 && (
                    <div className="pointer-events-none absolute right-[-10px] top-8 z-20 hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0.2, scaleX: 0.6 }}
                            animate={
                                active
                                    ? {
                                        opacity: [0.2, 0.6, 0.2],
                                        scaleX: [0.6, 1, 0.6]
                                    }
                                    : {}
                            }
                            transition={{
                                duration: 2.6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index * 0.2
                            }}
                            className="h-px w-8 origin-left bg-gradient-to-r from-gold-300/50 to-transparent"
                        />
                    </div>
                )}

                <div className="absolute right-0 top-0 p-5 text-5xl font-serif text-white/[0.03] transition-colors duration-500 group-hover:text-gold-300/10">
                    {step.id}
                </div>

                <div className="absolute left-8 top-8 z-20">
                    <motion.div
                        animate={
                            active && inView
                                ? {
                                    scale: [1, 1.12, 1],
                                    opacity: [0.75, 1, 0.75]
                                }
                                : { scale: 1, opacity: 0.75 }
                        }
                        transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.18
                        }}
                        className="relative"
                    >
                        <div className="h-2 w-2 rounded-full bg-gold-300" />
                        <div className="absolute inset-[-8px] rounded-full border border-gold-300/35" />
                        <div className="absolute inset-[-18px] rounded-full bg-gold-300/10 blur-md" />
                    </motion.div>
                </div>

                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                    <div className="mb-8 h-[2px] w-8 bg-gold-300/90 transition-all duration-500 group-hover:w-16" />

                    <h3 className="mb-4 font-serif text-xl text-white transition-colors duration-500 group-hover:text-gold-300 md:text-2xl">
                        {step.title}
                    </h3>

                    <p className="max-w-[26ch] text-[11px] font-light uppercase leading-relaxed tracking-[0.22em] text-stone-400 md:text-xs">
                        {step.desc}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Process;