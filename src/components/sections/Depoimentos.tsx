"use client"

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'
import { Quote } from 'lucide-react'

export function Depoimentos() {
    const reviews = [
        {
            text: "Depois de 2 meses com a Anna, consegui entender por que sempre sabotava minhas próprias conquistas. Nunca tinha conectado isso com o que aconteceu na infância de uma forma tão clara.",
            name: "M.S.",
            role: "empresária",
            age: 34
        },
        {
            text: "Fui com ceticismo. Saí com um relatório que descreveu meus padrões melhor do que eu mesmo conseguia. Mudou minha relação com dinheiro de verdade.",
            name: "R.T.",
            role: "executivo",
            age: 41
        },
        {
            text: "A psicoterapia breve foi exatamente o que eu precisava. Objetiva, sem enrolação. Em poucas sessões tive mais clareza do que em anos de acompanhamento anterior.",
            name: "C.L.",
            role: "designer",
            age: 29
        }
    ]

    return (
        <section className="py-72 bg-surface/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 md:mb-32">
                <FadeIn direction="up">
                    <span className="label-tag mb-6 md:mb-8 block text-primary font-bold">O que dizem</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-midnight leading-[1.1]">
                        Resultados que <br />
                        <span className="italic-accent italic opacity-100">falam por si.</span>
                    </h2>
                </FadeIn>
            </div>

            {/* Simulated Infinite Scroll Carrousel */}
            <div className="relative w-full overflow-hidden flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex shrink-0 px-8 gap-8 md:gap-12"
                >
                    {[...reviews, ...reviews].map((review, i) => (
                        <div
                            key={i}
                            className="w-[320px] sm:w-[500px] md:w-[600px] bg-bg/80 backdrop-blur-3xl p-10 sm:p-16 md:p-24 rounded-[60px] md:rounded-[80px] shadow-2xl shadow-midnight/5 border border-white/40 flex flex-col justify-between hover:bg-white transition-all cursor-default group"
                        >
                            <div className="space-y-8 md:space-y-12">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-700">
                                    <Quote size={24} className="opacity-40 group-hover:opacity-100 md:size-[28px]" />
                                </div>
                                <p className="font-serif italic text-2xl md:text-4xl text-midnight leading-snug tracking-tight">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="mt-12 md:mt-20 pt-10 md:pt-12 border-t border-surface flex items-center justify-between">
                                <div>
                                    <h5 className="font-sans font-bold text-base md:text-lg text-midnight tracking-tight">{review.name}</h5>
                                    <p className="font-sans text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-midnight/60">{review.role}, {review.age} anos</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-accent opacity-30" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
