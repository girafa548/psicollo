"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'

// Placeholder icons (SVG)
const FinancialIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-80 group-hover:opacity-100 transition-opacity">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
)

const LoveIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-80 group-hover:opacity-100 transition-opacity">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
)

const CycleIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold opacity-80 group-hover:opacity-100 transition-opacity">
        <path d="M22 12A10 10 0 1 1 12 2v10z" />
        <path d="M12 12L22 12" />
    </svg>
)

export function Mapas() {
    const handleMapClick = (tag: string) => {
        const message = `Olá Anna! Vi o "${tag}" no site e gostaria de saber mais como funciona.`
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
    }

    const mapas = [
        {
            tag: "Mapa Financeiro",
            title: "Deseja entender seu dinheiro além dos números?",
            desc: "Identifica as crenças inconscientes e comportamentos automáticos que direcionam suas decisões financeiras.",
            icon: FinancialIcon,
            cta: "Explorar →",
            badge: null
        },
        {
            tag: "Love Map",
            title: "Repetindo os mesmos ciclos nos relacionamentos?",
            desc: "Mapeia seus padrões de apego, escolha e comportamento afetivo. Entenda por que atrai ou afasta as mesmas dinâmicas.",
            icon: LoveIcon,
            cta: "Explorar →",
            badge: null
        },
        {
            tag: "Ciclos Repetitivos",
            title: "Sente que está sempre no mesmo lugar?",
            desc: "Identifica comportamentos automáticos que moldam todas as áreas da sua vida. Diagnóstico completo + ação realista.",
            icon: CycleIcon,
            cta: "Explorar →",
            badge: "Mais completo"
        }
    ]

    return (
        <section id="mapas" className="py-72 bg-primary relative overflow-hidden">
            {/* Visual background details */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage opacity-[0.03] rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                <FadeIn direction="up" className="mb-20 md:mb-32">
                    <span className="label-tag !text-gold mb-6 md:mb-8 block font-extrabold">Os Instrumentos de Transformação</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-white max-w-4xl mb-8 md:mb-12 leading-[1.1]">
                        Ferramentas criadas <br /> para revelar o que você <br />
                        <span className="italic-accent italic !text-gold opacity-100">ainda não viu em si.</span>
                    </h2>
                    <p className="font-sans text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
                        Cada Mapa é uma sessão focada + relatório PDF personalizado <br className="hidden md:block" />
                        com seus padrões comportamentais identificados.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {mapas.map((mapa, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -12 }}
                                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                className="group h-full bg-midnight/40 backdrop-blur-3xl p-10 md:p-12 rounded-[50px] border border-white/10 relative overflow-hidden flex flex-col items-start justify-between min-h-[550px] hover:border-gold/30 hover:bg-midnight/60 transition-all duration-700 shadow-2xl shadow-black/20"
                            >
                                {mapa.badge && (
                                    <div className="absolute top-8 right-8 bg-gold/20 border border-gold/40 px-6 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest text-gold font-bold z-20">
                                        {mapa.badge}
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <div className="mb-10 w-24 h-24 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-all duration-700">
                                        <mapa.icon />
                                    </div>
                                    <span className="label-tag !text-gold opacity-0 group-hover:opacity-100 transition-opacity font-extrabold">{mapa.tag}</span>
                                    <h3 className="font-display text-3xl md:text-4xl text-white leading-tight pr-4">
                                        {mapa.title}
                                    </h3>
                                    <p className="font-sans text-white/70 text-lg md:text-xl font-light leading-relaxed">
                                        {mapa.desc}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleMapClick(mapa.tag)}
                                    className="mt-12 group/btn flex items-center gap-6 font-sans text-[11px] font-black uppercase tracking-[0.2em] text-white group-hover:text-gold transition-all"
                                >
                                    Explorar Mapa
                                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:border-gold group-hover/btn:text-midnight transition-all duration-500">
                                        <ArrowRight size={18} />
                                    </div>
                                </button>

                                {/* Glow effect background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none" />
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
