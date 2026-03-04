"use client"

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { FadeIn } from '@/components/FadeIn'

export function About() {
    return (
        <section id="sobre" className="py-52 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
                <FadeIn direction="right" className="relative">
                    <div className="absolute -inset-10 bg-sage/5 rounded-[120px] rotate-3 blur-3xl" />
                    <div className="relative aspect-square rounded-[80px] overflow-hidden shadow-2xl border-[1px] border-black/5 image-container">
                        <Image
                            src="/brain-map.png"
                            alt="Brain Connectivity"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[40px] shadow-2xl animate-float max-w-xs border border-white">
                        <h5 className="font-sans font-black text-[10px] uppercase tracking-[0.3em] text-forest mb-4">Neuropsicologia</h5>
                        <p className="font-serif italic text-2xl text-black/80">"Mapeamos o cérebro para curar a alma."</p>
                    </div>
                </FadeIn>
                <FadeIn direction="left">
                    <h2 className="text-6xl md:text-8xl font-serif text-black mb-16 leading-[0.95] tracking-tighter">
                        A Nossa Abordagem <br />
                        <span className="italic text-forest">Única e Precisa.</span>
                    </h2>
                    <div className="space-y-12 text-black/60 font-sans leading-relaxed text-xl">
                        <p>
                            Nossa metodologia é breve, focada e concebida para proporcionar resultados duradouros. Utilizamos ferramentas da neuropsicologia para identificar os padrões subjacentes que geram "névoa mental" e travamentos emocionais.
                        </p>
                        <p>
                            Diferente da terapia tradicional, aqui você recebe um mapa claro da sua jornada, guiando-o(a) para um futuro mais brilhante, gratificante e, acima de tudo, autônomo.
                        </p>
                        <div className="grid gap-8 pt-8">
                            {[
                                { t: "Foco no Resultado", d: "Intervenções cirúrgicas em bloqueios mentais." },
                                { t: "Clareza Absoluta", d: "Entendimento biológico e emocional da sua dor." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="w-14 h-14 rounded-3xl bg-forest/5 flex items-center justify-center shrink-0 group-hover:bg-forest transition-all">
                                        <CheckCircle2 size={24} className="text-forest group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black group-hover:text-forest transition-colors uppercase tracking-widest text-xs mb-2">
                                            {item.t}
                                        </h4>
                                        <p className="text-sm opacity-60 leading-relaxed max-w-sm">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
