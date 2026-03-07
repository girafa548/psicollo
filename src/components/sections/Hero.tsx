"use client"

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
    onOpenFunnel: () => void;
}

interface ParticleProps {
    p: { size: number; x: number; y: number; mass: number };
    mouseX: any;
    mouseY: any;
}

function Particle({ p, mouseX, mouseY }: ParticleProps) {
    const x = useSpring(mouseX, { damping: 20 * p.mass, stiffness: 100 })
    const y = useSpring(mouseY, { damping: 20 * p.mass, stiffness: 100 })

    return (
        <motion.div
            className="absolute rounded-full bg-sage opacity-[0.2]"
            style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                x,
                y
            }}
        />
    )
}

export function Hero({ onOpenFunnel }: HeroProps) {
    const [mounted, setMounted] = useState(false)
    const [particles, setParticles] = useState<{ id: number; size: number; x: number; y: number; mass: number }[]>([])
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    useEffect(() => {
        setMounted(true)
        const newParticles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            size: Math.random() * 8 + 4,
            x: Math.random() * 100,
            y: Math.random() * 100,
            mass: Math.random() * 0.5 + 0.1
        }))
        setParticles(newParticles)
    }, [])

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const moveX = (clientX - window.innerWidth / 2) * 0.05
        const moveY = (clientY - window.innerHeight / 2) * 0.05
        mouseX.set(moveX)
        mouseY.set(moveY)
    }

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-bg"
        >
            {/* Antigravity Particles Field */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {mounted && particles.map((p) => (
                    <Particle key={p.id} p={p} mouseX={mouseX} mouseY={mouseY} />
                ))}
            </div>

            {/* Depth Divider Line */}
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-surface/50 rotate-[-5deg] origin-right translate-y-[-20vh] hidden md:block" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center md:text-left pt-20">
                <FadeIn direction="up">
                    <span className="label-tag mb-8 md:mb-12 block text-primary font-bold">
                        Neuropsicologia · São Paulo
                    </span>

                    <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[100px] text-midnight mb-8 md:mb-12 leading-[1.05] tracking-tight">
                        Abandone o papel <br />
                        de passageiro do <br />
                        <span className="italic-accent italic !text-accent opacity-100">seu próprio cérebro.</span>
                    </h1>

                    <p className="font-sans text-lg md:text-xl lg:text-2xl text-midnight/70 max-w-4xl mb-12 md:mb-20 leading-relaxed font-light">
                        Mapeie os padrões invisíveis que moldam sua ansiedade, seus relacionamentos <br className="hidden lg:block" />
                        e seu sucesso profissional através da neurociência aplicada. Resultados reais, sem os anos de processo sem direção.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 items-center lg:items-start">
                        <button
                            onClick={onOpenFunnel}
                            className="btn-terracotta !px-12 !py-6 group"
                        >
                            Quero entender meus padrões
                            <ArrowRight size={20} className="ml-5 transition-transform group-hover:translate-x-3 duration-500" />
                        </button>
                        <a
                            href="#mapas"
                            className="btn-outline-forest !px-12 !py-6 flex items-center justify-center text-center"
                        >
                            Conhecer os Mapas
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* Corner Quote */}
            <div className="absolute bottom-20 right-10 md:right-20 text-right opacity-30 italic font-display text-lg text-blush max-w-xs transition-opacity hover:opacity-100">
                "Os mesmos mecanismos que influenciam o consumo <br />
                estruturam nossos relacionamentos."
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
                <span className="uppercase tracking-[0.4em] text-[10px] font-medium text-midnight">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="w-[1px] h-12 bg-midnight"
                />
            </div>
        </section>
    )
}
