import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-cormorant',
})

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-dm-sans',
})

export const metadata: Metadata = {
    title: 'Psicollo | Psicologia Humanizada e Neuropsicologia',
    description: 'Um espaço de escuta, cuidado e transformação. Descubra sua melhor versão através de uma abordagem humanizada.',
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
            <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
                {children}
            </body>
        </html>
    )
}
