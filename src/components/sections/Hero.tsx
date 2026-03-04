"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

interface HeroProps {
    onOpenFunnel: () => void;
}

export function Hero({ onOpenFunnel }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/neutral_brain.png"
                    alt="Neural Essence"
                    fill
                    className="object-cover brightness-[0.3] scale-110 motion-safe:animate-[pulse_10s_infinite_ease-in-out]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-forest/10 to-ivory"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
                <FadeIn direction="up">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-12">
                        <Leaf size={16} className="text-sage" />
                        <span className="font-sans text-[9px] font-black uppercase tracking-[0.5em] text-white/50">Psicologia Baseada em Evidências</span>
                    </div>
                    <h1 className="text-7xl md:text-[140px] font-serif leading-[0.85] mb-12 tracking-tighter">
                        A Nossa Abordagem <br />
                        <span className="italic font-light text-sage drop-shadow-[0_0_20px_rgba(107,140,122,0.3)]">Transformadora.</span>
                    </h1>
                    <p className="font-sans text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
                        Na Psicollo, desenvolvemos uma metodologia enraizada na neuropsicologia para ajudar você a resolver problemas subjacentes e eliminar a névoa mental que impede o seu progresso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <button
                            onClick={onOpenFunnel}
                            className="btn-primary !px-16 !py-7 !text-[12px] group"
                        >
                            Começar Minha Jornada
                            <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-3" />
                        </button>
                        <a
                            href="#sobre"
                            className="font-sans text-[11px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all underline underline-offset-[12px] decoration-white/10"
                        >
                            Descubra Mais
                        </a>
                    </div>
                </FadeIn>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                <span className="uppercase tracking-[0.6em] text-[8px] font-black">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-[1px] h-16 bg-white"
                />
            </div>
        </section>
    )
}
