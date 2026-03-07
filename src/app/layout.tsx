import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import WhatsAppButton from '@/components/WhatsAppButton'
import '../styles/globals.css'

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    style: ['normal', 'italic'],
    variable: '--font-display',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-body',
})

export const metadata: Metadata = {
    title: 'psicollo | Neuropsicologia & Psicoterapia Breve',
    description: 'Abandone o papel de passageiro do seu próprio cérebro. Mapeie seus padrões com a neurociência aplicada.',
    icons: {
        icon: '/logo-icon.png',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${cormorant.variable} ${dmSans.variable} grain relative antialiased`}>
                {children}
                <WhatsAppButton />
            </body>
        </html>
    )
}
