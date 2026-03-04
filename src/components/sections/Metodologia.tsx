"use client"

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'
import { ArrowRight, Lightbulb, Map, Zap } from 'lucide-react'

export function Metodologia() {
    const steps = [
        {
            id: (i: number) => `0${i + 1}`,
            title: "Identifique",
            desc: "Em uma sessão de diagnóstico, mapeamos juntos os comportamentos automáticos que estão no centro do que você quer resolver.",
            icon: Lightbulb
        },
        {
            id: (i: number) => `0${i + 1}`,
            title: "Mapeie",
            desc: "Você recebe um relatório PDF personalizado com seus padrões comportamentais descritos de forma clara e objetiva.",
            icon: Map
        },
        {
            id: (i: number) => `0${i + 1}`,
            title: "Transforme",
            desc: "Desenvolvemos estratégias específicas para os seus padrões — não um protocolo genérico. Um plano feito para você.",
            icon: Zap
        }
    ]

    return (
        <section id="abordagem" className="py-72 bg-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <FadeIn direction="up" className="mb-20 md:mb-32">
                    <span className="label-tag mb-6 md:mb-8 block text-primary font-bold">Como funciona</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-midnight leading-[1.1]">
                        Breve. Focado. <br />
                        <span className="italic-accent italic opacity-100">Com resultado.</span>
                    </h2>
                </FadeIn>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-[120px] left-0 w-full h-[1px] bg-surface hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 lg:gap-32">
                        {steps.map((step, i) => (
                            <FadeIn key={i} delay={i * 0.2}>
                                <div className="relative group">
                                    {/* Number with Bobbing Effect */}
                                    <motion.span
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
                                        className="font-display italic text-[100px] sm:text-[130px] lg:text-[180px] text-surface block leading-none mb-4 group-hover:text-gold transition-colors opacity-100"
                                    >
                                        0{i + 1}
                                    </motion.span>

                                    <div className="inline-flex items-center gap-4 bg-white px-8 py-3 rounded-full border border-surface shadow-xl mb-10 -mt-20 md:-mt-24 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                                        <step.icon size={20} strokeWidth={2.5} className="text-accent" />
                                        <h4 className="font-sans font-bold text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-midnight">
                                            {step.title}
                                        </h4>
                                    </div>

                                    <p className="font-sans text-lg md:text-xl lg:text-[22px] text-midnight leading-relaxed font-normal pr-6 md:pr-10">
                                        {step.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
