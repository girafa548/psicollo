import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
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
    title: 'psyka | Neuropsicologia & Psicoterapia Breve',
    description: 'A sua mente já sabe o que precisa mudar. Descubra sua melhor versão através de uma abordagem humanizada e científica.',
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
            </body>
        </html>
    )
}
