"use client"

import Image from 'next/image'
import { FadeIn } from '@/components/FadeIn'

export function Advantage() {
    return (
        <section className="py-40 bg-stone/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                <FadeIn direction="up">
                    <h2 className="text-6xl md:text-[80px] font-sans font-black text-black mb-16 uppercase leading-tight tracking-tighter">
                        SOBRE <br /> OS MAPAS.
                    </h2>
                    <div className="space-y-16">
                        {[
                            { id: "01", t: "Identifique", d: "Mapeie os comportamentos automáticos que moldam sua vida atual." },
                            { id: "02", t: "Analise", d: "Receba um PDF completo descrevendo seus padrões neurais e emocionais." },
                            { id: "03", t: "Transforme", d: "Aprenda estratégias definitivas para extinguir comportamentos negativos." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-10 items-start group">
                                <span className="font-serif italic text-6xl text-forest/10 group-hover:text-forest/30 transition-all font-light">
                                    {item.id}
                                </span>
                                <div>
                                    <h4 className="text-2xl font-bold text-black mb-4 uppercase tracking-tighter">{item.t}</h4>
                                    <p className="text-black/50 text-xl font-light leading-relaxed max-w-md">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
                <FadeIn direction="left" className="relative group">
                    <div className="absolute -inset-10 bg-white/50 rounded-full blur-[100px] group-hover:blur-[80px] transition-all" />
                    <div className="relative aspect-square md:aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl image-container border-[10px] border-white/80">
                        <Image
                            src="/brain-map.png"
                            alt="Neural Map"
                            fill
                            className="object-cover"
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
