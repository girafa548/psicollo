'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-ivory flex items-center justify-center p-6 text-center">
            <div className="max-w-md space-y-8">
                <h2 className="text-4xl font-serif text-black leading-tight">
                    Ops! Algo não saiu como planejado.
                </h2>
                <p className="font-sans text-black/50 text-xl font-light">
                    Houve um erro técnico ao processar a página. Gostaríamos de sugerir que tente novamente.
                </p>
                <button
                    onClick={() => reset()}
                    className="btn-primary !px-12 !py-5"
                >
                    Tentar Novamente
                </button>
            </div>
        </div>
    )
}
