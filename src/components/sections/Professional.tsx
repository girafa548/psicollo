"use client"

import Image from 'next/image'
import { FadeIn } from '@/components/FadeIn'

export function Professional() {
    return (
        <section id="metodologia" className="py-52 bg-ivory relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-40 items-center">
                <FadeIn direction="right" className="relative aspect-[3/4] rounded-[100px] overflow-hidden shadow-2xl image-container group">
                    <Image
                        src="/hero-professional.png"
                        alt="Profissional"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
                </FadeIn>
                <FadeIn direction="left">
                    <h2 className="text-6xl md:text-8xl font-serif text-black mb-16 leading-[0.95] tracking-tighter">
                        A Ciência do <br />
                        <span className="italic text-sage font-light">Comportamento.</span>
                    </h2>
                    <div className="space-y-10 text-xl text-black/60 font-sans font-light leading-relaxed text-justify">
                        <p>
                            Sou formada em Psicologia, mas minha trajetória não seguiu o caminho tradicional. Escolhi viver como nômade e mergulhei no mercado para entender, na prática, como as pessoas decidem, por que clicam e como repetem padrões.
                        </p>
                        <p>
                            Trabalhei como Business Partner e analista de comportamento de consumo. Lá, entendi que os mesmos mecanismos que direcionam uma compra são os que estruturam nossa ansiedade e relacionamentos.
                        </p>
                        <p className="font-serif italic text-3xl text-forest pt-6">
                            "Não tratamos apenas sintomas, tratamos a arquitetura silenciada das suas escolhas."
                        </p>
                    </div>
                    <div className="mt-20 flex flex-col md:flex-row gap-8 items-center border-t border-black/5 pt-16">
                        <Image src="/logo-icon.png" alt="Logo" width={60} height={60} />
                        <div>
                            <h5 className="font-serif text-3xl font-medium tracking-tight">Dra. Psicollo</h5>
                            <p className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-forest opacity-50">
                                Psicóloga & Neuropsicóloga • CRP 06/12345
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
