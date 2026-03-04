"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [showNotification, setShowNotification] = useState(false)

    const message = "Olá! Gostaria de saber mais sobre a psicoterapia na Psicollo."
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(true)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {showNotification && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="bg-white p-6 rounded-[30px] shadow-2xl mb-4 border border-stone/30 max-w-[260px] relative backdrop-blur-xl"
                    >
                        <button
                            onClick={() => setShowNotification(false)}
                            className="absolute top-2 right-2 p-2 hover:bg-stone/10 rounded-full transition-colors"
                        >
                            <X size={14} className="text-black/30" />
                        </button>
                        <p className="text-sm font-sans text-black/70 leading-relaxed pr-4">
                            Olá! Como posso ajudar você hoje? Vamos conversar sobre sua jornada.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-forest text-white p-5 rounded-full shadow-[0_20px_40px_-10px_rgba(46,78,63,0.3)] flex items-center justify-center hover:bg-sage transition-all duration-500 relative group"
            >
                <MessageCircle size={30} className="group-hover:rotate-12 transition-transform duration-500" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-blush"></span>
                </span>
            </motion.a>
        </div>
    )
}
