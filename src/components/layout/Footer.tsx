"use client"

import { Instagram, Linkedin, MessageCircle, Send } from 'lucide-react'
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from '@/lib/constants'

export function Footer() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

    return (
        <footer id="contato" className="bg-bg py-48 border-t border-surface relative overflow-hidden">
            {/* Subtlest ivory detail */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #1A2E28 1px, transparent 0)', backgroundSize: '50px 50px' }} />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-32 pb-32 border-b border-surface/50">
                    <div className="space-y-10">
                        <a href="#" className="font-display italic text-[32px] text-midnight lowercase tracking-tight">
                            psyka
                        </a>
                        <p className="font-sans text-[13px] text-muted max-w-xs leading-relaxed uppercase tracking-widest font-medium opacity-60">
                            Neuropsicologia para um melhor você.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <h4 className="font-sans text-[11px] font-black uppercase tracking-[0.2em] text-midnight/40">Navegar</h4>
                        <div className="flex flex-col gap-6 font-display text-2xl text-midnight/80">
                            {['Sobre', 'Mapas', 'Abordagem', 'Contato'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h4 className="font-sans text-[11px] font-black uppercase tracking-[0.2em] text-midnight/40">Mapas</h4>
                        <div className="flex flex-col gap-6 font-display text-2xl text-midnight/80">
                            {['Mapa Financeiro', 'Love Map', 'Ciclos Repetitivos'].map((item) => (
                                <a key={item} href="#mapas" className="hover:text-accent transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-10">
                            <h4 className="font-sans text-[11px] font-black uppercase tracking-[0.2em] text-midnight/40">Contato</h4>
                            <div className="flex flex-col gap-6 font-sans text-xl text-midnight/80">
                                <a href="https://instagram.com/psykaoficial" target="_blank" className="hover:text-accent transition-colors">@psykaoficial</a>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-colors">{CONTACT_EMAIL}</a>
                                <a href={whatsappUrl} className="hover:text-accent transition-colors">WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 text-[9px] font-medium uppercase tracking-[0.6em] text-muted">
                    <p>© 2024 Psyka · Todos os direitos reservados</p>
                    <p>CRP XX/XXXXX</p>
                </div>
            </div>
        </footer>
    )
}
