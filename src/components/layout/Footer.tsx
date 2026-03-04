"use client"

import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'
import { INSTAGRAM_URL, LINKEDIN_URL, CONTACT_EMAIL } from '@/lib/constants'

export function Footer() {
    return (
        <footer id="contato" className="bg-stone/10 py-40 border-t border-stone/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-20 pb-32 border-b border-black/5">
                    <div className="max-w-md text-center md:text-left">
                        <span className="font-serif text-5xl font-medium mb-10 block tracking-tighter">Psicollo</span>
                        <p className="text-2xl font-sans font-light text-black/40 leading-relaxed">
                            Redefinindo o futuro da sua saúde mental através da precisão da ciência e suavidade do acolher.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-10">
                        <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-black/20">Redes Sociais</h4>
                        <div className="flex gap-8">
                            <a
                                href={INSTAGRAM_URL}
                                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-forest hover:text-white transition-all duration-500 scale-110 hover:-translate-y-2"
                            >
                                <Instagram size={28} />
                            </a>
                            <a
                                href={LINKEDIN_URL}
                                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-forest hover:text-white transition-all duration-500 scale-110 hover:-translate-y-2"
                            >
                                <Linkedin size={28} />
                            </a>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-forest hover:text-white transition-all duration-500 scale-110 hover:-translate-y-2"
                            >
                                <Instagram size={28} /> {/* Using Instagram as placeholder for X if needed or email icon */}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-20 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.6em] text-black/10">
                        © 2026 Psicollo Global Clinic. All Rights Reserved.
                    </p>
                    <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.6em] text-black/10">
                        <span>Ethics</span>
                        <span>Care</span>
                        <span>Science</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
