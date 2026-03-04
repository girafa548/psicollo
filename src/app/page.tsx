"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Nav } from '@/components/layout/Nav'
import { Hero } from '@/components/sections/Hero'
import { Sobre } from '@/components/sections/Sobre'
import { Mapas } from '@/components/sections/Mapas'
import { Metodologia } from '@/components/sections/Metodologia'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/layout/Footer'

const Funnel = dynamic(() => import('@/components/sections/Funnel').then(mod => mod.Funnel), {
    ssr: false,
})

export default function Home() {
    const [isFunnelOpen, setIsFunnelOpen] = useState(false)

    return (
        <main className="min-h-screen bg-bg antialiased">
            <Nav onOpenFunnel={() => setIsFunnelOpen(true)} />
            <Hero onOpenFunnel={() => setIsFunnelOpen(true)} />
            <Sobre />
            <Mapas />
            <Metodologia />
            <Depoimentos />
            <CTAFinal onOpenFunnel={() => setIsFunnelOpen(true)} />
            <Footer />

            <Funnel isOpen={isFunnelOpen} onClose={() => setIsFunnelOpen(false)} />
        </main>
    )
}
