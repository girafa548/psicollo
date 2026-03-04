"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
    onOpenFunnel: () => void;
}

export function Navbar({ onOpenFunnel }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: "#sobre", label: "Sobre" },
        { href: "#metodologia", label: "Metodologia" },
        { href: "#contato", label: "Contato" },
    ]

    return (
        <>
            <nav className={`fixed top-0 w-full z-[200] transition-all duration-700 ${scrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div
                        className="flex items-center gap-4 group cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="relative w-12 h-12 transition-all duration-500 group-hover:scale-110">
                            <Image src="/logo-icon.png" alt="Icon" fill className="object-contain" />
                        </div>
                        <span className="font-serif text-3xl font-medium text-black tracking-tight tracking-[-0.04em]">Psicollo</span>
                    </div>

                    <div className="hidden md:flex items-center gap-12 font-sans text-[10px] font-black uppercase tracking-[0.4em] text-black/50">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-forest hover:tracking-[0.5em] transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={onOpenFunnel}
                            className="btn-primary !px-10 !py-4 shadow-xl"
                        >
                            Começar Agora
                        </button>
                    </div>

                    <button
                        className="md:hidden p-3 bg-white/30 backdrop-blur rounded-2xl border border-white/50 shadow-sm"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="fixed inset-0 bg-ivory z-[300] flex flex-col p-8 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-20">
                            <span className="font-serif text-3xl font-medium">Psicollo</span>
                            <button className="p-4" onClick={() => setIsMenuOpen(false)}>
                                <X size={32} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-10 font-serif text-5xl">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </a>
                            ))}
                            <button
                                onClick={() => { setIsMenuOpen(false); onOpenFunnel(); }}
                                className="btn-primary mt-10"
                            >
                                Iniciar Jornada
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
