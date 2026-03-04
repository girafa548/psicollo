"use client"

import { useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'
import { ArrowRight, MessageCircle } from 'lucide-react'

interface CTAFinalProps {
    onOpenFunnel: () => void;
}

export function CTAFinal({ onOpenFunnel }: CTAFinalProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(clientX - rect.left)
        mouseY.set(clientY - rect.top)
    }

    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

    return (
        <section
            onMouseMove={handleMouseMove}
            className="py-72 bg-midnight relative overflow-hidden"
        >
            {/* Antigravity Cursor Glow Field */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full blur-[240px] opacity-[0.4] pointer-events-none z-0"
                style={{
                    left: springX,
                    top: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, #6B8C7A 0%, rgba(107, 140, 122, 0) 70%)'
                }}
            />
            {/* Secondary Gold Glow */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full blur-[180px] opacity-[0.2] pointer-events-none z-0"
                style={{
                    left: springX,
                    top: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, #C4A882 0%, rgba(196, 168, 130, 0) 70%)'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
                <FadeIn direction="up">
                    <span className="label-tag !text-gold mb-8 md:mb-12 block font-extrabold opacity-100">Próximo passo</span>

                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] text-white max-w-5xl mx-auto mb-10 md:mb-16 leading-[1] tracking-tight font-display">
                        Pronta para entender <br />
                        o que está te <br />
                        <span className="italic-accent italic !text-gold opacity-100">impedindo de avançar?</span>
                    </h2>

                    <p className="font-sans text-lg md:text-2xl lg:text-3xl text-white/90 max-w-2xl mx-auto mb-12 md:mb-20 leading-relaxed font-light">
                        O primeiro passo é uma conversa sem compromisso. <br className="hidden md:block" />
                        Me conta o que está sentindo — e a gente descobre juntas por onde começar.
                    </p>

                    <div className="flex flex-col items-center gap-10 md:gap-12">
                        <button
                            onClick={onOpenFunnel}
                            className="btn-terracotta !px-20 !py-8 !text-[15px] group shadow-2xl shadow-accent/20"
                        >
                            Agendar conversa inicial
                            <ArrowRight size={24} className="ml-6 transition-transform group-hover:translate-x-4 duration-500" />
                        </button>

                        <a
                            href="#mapas"
                            className="font-sans text-[11px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-white transition-all underline underline-offset-[16px] decoration-white/10 hover:decoration-white/30"
                        >
                            Ver todos os Mapas
                        </a>
                    </div>
                </FadeIn>

                <div className="mt-32 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8 opacity-30 font-sans text-[9px] uppercase tracking-[0.6em] text-surface">
                    <p>Atendimento presencial em São Paulo</p>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent" />
                    <p>Online para todo o Brasil</p>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent" />
                    <p>CRP XX/XXXXX</p>
                </div>
            </div>
        </section>
    )
}
