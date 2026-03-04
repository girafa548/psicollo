export default function Loading() {
    return (
        <div className="min-h-screen bg-ivory flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 border-4 border-forest/20 border-t-forest rounded-full animate-spin"></div>
                <span className="font-serif text-2xl italic text-forest opacity-60">Carregando Psicollo...</span>
            </div>
        </div>
    )
}
