"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'

interface NavProps {
    onOpenFunnel: () => void;
}

export function Nav({ onOpenFunnel }: NavProps) {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: "#sobre", label: "Sobre" },
        { href: "#mapas", label: "Mapas" },
        { href: "#abordagem", label: "Abordagem" },
        { href: "#contato", label: "Contato" },
    ]

    return (
        <>
            <nav className={`fixed top-0 w-full z-[200] transition-all duration-700 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-10'}`}>
                <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                    <a href="#" className="font-display italic text-[28px] text-midnight lowercase tracking-tight">
                        psicollo
                    </a>

                    <div className="hidden md:flex items-center gap-16">
                        <div className="flex items-center gap-10 font-sans text-xs font-bold uppercase tracking-[0.2em] text-midnight">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="hover:text-accent hover:opacity-100 transition-all opacity-80"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-terracotta !px-10 !py-4 shadow-2xl !text-[12px] font-black"
                        >
                            Agendar sessão
                        </a>
                    </div>

                    <button
                        className="md:hidden w-12 h-12 bg-white/40 backdrop-blur-2xl rounded-full border border-white/80 shadow-2xl flex items-center justify-center transition-all active:scale-95"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} className="text-midnight" /> : <Menu size={24} className="text-midnight" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="fixed inset-0 bg-bg z-[300] flex flex-col p-12 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-24">
                            <span className="font-display italic text-4xl text-midnight lowercase">psicollo</span>
                            <button className="w-12 h-12 bg-midnight/5 rounded-full flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-10 font-display text-5xl italic text-midnight/80">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-accent transition-all hover:translate-x-4"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="btn-terracotta mt-12 !text-[12px] !py-8 flex items-center justify-center"
                            >
                                Agendar sessão
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
