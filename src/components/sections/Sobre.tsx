"use client"

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { ArrowRight } from 'lucide-react'

export function Sobre() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

    return (
        <section
            id="sobre"
            ref={sectionRef}
            className="py-64 bg-bg relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-32 items-center">
                <FadeIn direction="right" className="relative group">
                    <div className="absolute -inset-16 bg-surface/30 rounded-[120px] rotate-3 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <motion.div
                        style={{ y }}
                        className="relative aspect-square md:aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl border-[1px] border-surface image-container"
                    >
                        <Image
                            src="/hero-professional.png"
                            alt="Anna — Neuropsicóloga"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-105"
                        />
                    </motion.div>
                </FadeIn>

                <FadeIn direction="left">
                    <div className="space-y-4 mb-12 md:mb-20">
                        <span className="label-tag text-primary font-bold">Sobre a Abordagem</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-midnight leading-[1.1]">
                            Não segui o caminho <br className="hidden sm:block" />
                            <span className="italic-accent italic opacity-100">tradicional.</span> E foi isso <br className="hidden sm:block" />
                            que mudou tudo.
                        </h2>
                    </div>

                    <div className="space-y-8 md:space-y-10 text-midnight/80 font-sans text-lg md:text-xl font-light leading-relaxed">
                        <p>
                            Sou formada em Psicologia, mas passei anos fora da clínica — vivendo como nômade, trabalhando com comportamento de consumo, gestão de pessoas e como business partner no setor jurídico.
                        </p>
                        <p>
                            Foi lá que entendi na prática como as pessoas decidem, por que repetem padrões e o que realmente bloqueia o avanço. Comecei a estudar o funcionamento cerebral por trás das escolhas — e percebi que os mesmos mecanismos que guiam o consumo estruturam nossos relacionamentos, nossa ansiedade e nossos ciclos repetitivos.
                        </p>
                        <p>
                            Quando voltei para a clínica, trouxe esse olhar comigo. Hoje trabalho com psicoterapia breve focada em resultados reais — sem anos de processo sem direção.
                        </p>

                        <div className="pt-8 md:pt-10">
                            <a
                                href="#contato"
                                className="group inline-flex items-center gap-4 md:gap-6 font-sans text-xs md:text-[13px] font-bold uppercase tracking-[0.2em] text-primary hover:text-accent transition-all underline underline-offset-[12px] decoration-surface decoration-2"
                            >
                                Conheça minha trajetória completa
                                <ArrowRight size={20} className="transition-transform group-hover:translate-x-3 duration-500" />
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
