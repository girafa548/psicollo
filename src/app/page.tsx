"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import WhatsAppButton from '@/components/WhatsAppButton'

// Lazy loaded components for better performance
const Funnel = dynamic(() => import('@/components/sections/Funnel').then(m => m.Funnel), {
    ssr: false,
    loading: () => null
})
const About = dynamic(() => import('@/components/sections/About').then(m => m.About))
const Advantage = dynamic(() => import('@/components/sections/Advantage').then(m => m.Advantage))
const Professional = dynamic(() => import('@/components/sections/Professional').then(m => m.Professional))

export default function Home() {
    const [isFunnelOpen, setIsFunnelOpen] = useState(false)

    return (
        <main className="min-h-screen bg-ivory selection:bg-forest selection:text-white">
            <WhatsAppButton />

            <Navbar onOpenFunnel={() => setIsFunnelOpen(true)} />

            <Hero onOpenFunnel={() => setIsFunnelOpen(true)} />

            <About />

            <Advantage />

            <Professional />

            <Funnel
                isOpen={isFunnelOpen}
                onClose={() => setIsFunnelOpen(false)}
            />

            <Footer />
        </main>
    )
}
