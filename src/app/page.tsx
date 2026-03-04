"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '@/components/FadeIn'
import WhatsAppButton from '@/components/WhatsAppButton'
import { WHATSAPP_NUMBER, CHECKOUT_URL, CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from '@/lib/constants'
import {
    Instagram,
    Linkedin,
    MessageCircle,
    ArrowRight,
    CheckCircle2,
    BrainCircuit,
    Sparkles,
    Target,
    Search,
    Menu,
    X,
    Quote,
    Leaf,
    ArrowDown,
    ChevronRight,
    ChevronLeft
} from 'lucide-react'

// Reusable Option Component with "Other" Logic
const FunnelOption = ({ label, selected, onClick }: any) => (
    <button
        onClick={onClick}
        className={`w-full p-6 text-left rounded-3xl border-2 transition-all duration-300 group ${selected
                ? 'bg-forest border-forest text-white shadow-xl shadow-forest/20 translate-x-1'
                : 'bg-white/50 border-stone/10 text-black/60 hover:border-forest/30 hover:bg-white'
            }`}
    >
        <div className="flex items-center justify-between">
            <span className="font-sans font-bold text-lg uppercase tracking-tight">{label}</span>
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${selected ? 'bg-white/20 border-white' : 'border-stone/20 group-hover:border-forest/40'
                }`}>
                {selected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
            </div>
        </div>
    </button>
)

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Funnel State
    const [funnelStep, setFunnelStep] = useState(0)
    const [funnelData, setFunnelData] = useState<any>({
        objective: '',
        objectiveOther: '',
        previousExperience: '',
        urgency: ''
    })
    const [isFunnelOpen, setIsFunnelOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const funnelStepsContent = [
        {
            title: "O que você busca transformar hoje?",
            field: "objective",
            options: ["Autoconhecimento", "Ansiedade/Depressão", "Relacionamentos", "Performance Profissional", "Lidar com Luto", "Outro"]
        },
        {
            title: "Como está sua urgência para começar?",
            field: "urgency",
            options: ["Imediato (Estou no limite)", "Médio Prazo (Sinto necessidade)", "Longo Prazo (Apenas curiosidade)", "Outro"]
        }
    ]

    const handleNext = () => {
        if (funnelStep < funnelStepsContent.length - 1) {
            setFunnelStep(v => v + 1)
        } else {
            // Send or Redirect
            window.location.href = CHECKOUT_URL
        }
    }

    return (
        <main className="min-h-screen bg-ivory selection:bg-forest selection:text-white">
            <WhatsAppButton />

            {/* Global Nav */}
            <nav className={`fixed top-0 w-full z-[200] transition-all duration-700 ${scrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="relative w-12 h-12 image-container transition-all duration-500 group-hover:scale-110">
                            <Image src="/logo-icon.png" alt="Icon" fill className="object-contain" />
                        </div>
                        <span className="font-serif text-3xl font-medium text-black tracking-tight tracking-[-0.04em]">Psicollo</span>
                    </div>

                    <div className="hidden md:flex items-center gap-12 font-sans text-[10px] font-black uppercase tracking-[0.4em] text-black/50">
                        <a href="#sobre" className="hover:text-forest hover:tracking-[0.5em] transition-all">Sobre</a>
                        <a href="#metodologia" className="hover:text-forest hover:tracking-[0.5em] transition-all">Metodologia</a>
                        <a href="#contato" className="hover:text-forest hover:tracking-[0.5em] transition-all">Contato</a>
                        <button onClick={() => setIsFunnelOpen(true)} className="btn-primary !px-10 !py-4 shadow-xl">Começar Agora</button>
                    </div>

                    <button className="md:hidden p-3 bg-white/30 backdrop-blur rounded-2xl border border-white/50 shadow-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed inset-0 bg-ivory z-[300] flex flex-col p-8 md:hidden">
                        <div className="flex justify-between items-center mb-20">
                            <span className="font-serif text-3xl font-medium">Psicollo</span>
                            <button className="p-4" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
                        </div>
                        <div className="flex flex-col gap-10 font-serif text-5xl">
                            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                            <a href="#metodologia" onClick={() => setIsMenuOpen(false)}>Abordagem</a>
                            <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
                            <button onClick={() => { setIsMenuOpen(false); setIsFunnelOpen(true); }} className="btn-primary mt-10">Iniciar Funil</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Funnel Overlay (The requested feature) */}
            <AnimatePresence>
                {isFunnelOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-3xl flex items-center justify-center p-6 sm:p-10">
                        <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-ivory w-full max-w-2xl rounded-[60px] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-white/20">
                            <button onClick={() => setIsFunnelOpen(false)} className="absolute top-8 right-8 p-4 hover:bg-black/5 rounded-full transition-all"><X size={24} /></button>

                            <div className="mb-10 flex items-center gap-3">
                                <div className="h-1 flex-1 bg-forest/10 rounded-full">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${((funnelStep + 1) / funnelStepsContent.length) * 100}%` }} className="h-full bg-forest rounded-full" />
                                </div>
                                <span className="font-sans font-black text-[9px] uppercase tracking-[0.3em] text-forest/40">Passo {funnelStep + 1}/2</span>
                            </div>

                            <motion.div key={funnelStep} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-10">
                                <h3 className="text-4xl md:text-5xl font-serif leading-[1.1] text-black tracking-tight">{funnelStepsContent[funnelStep].title}</h3>

                                <div className="grid gap-4">
                                    {funnelStepsContent[funnelStep].options.map((opt, i) => (
                                        <div key={i} className="space-y-4">
                                            <FunnelOption
                                                label={opt}
                                                selected={funnelData[funnelStepsContent[funnelStep].field] === opt}
                                                onClick={() => setFunnelData({ ...funnelData, [funnelStepsContent[funnelStep].field]: opt })}
                                            />
                                            {/* "Other" Logic Check - Show specified text input when 'Outro' is picked */}
                                            {opt === "Outro" && funnelData[funnelStepsContent[funnelStep].field] === "Outro" && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="px-6 pb-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Especifique aqui o que busca..."
                                                        className="w-full bg-white border-b-2 border-forest/20 p-4 font-sans text-lg focus:border-forest transition-all"
                                                        value={funnelData[`${funnelStepsContent[funnelStep].field}Other`]}
                                                        onChange={(e) => setFunnelData({ ...funnelData, [`${funnelStepsContent[funnelStep].field}Other`]: e.target.value })}
                                                        autoFocus
                                                    />
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    {funnelStep > 0 && (
                                        <button onClick={() => setFunnelStep(v => v - 1)} className="flex-1 p-6 rounded-full border-2 border-forest/10 font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2">
                                            <ChevronLeft size={16} /> Voltar
                                        </button>
                                    )}
                                    <button
                                        onClick={handleNext}
                                        disabled={!funnelData[funnelStepsContent[funnelStep].field]}
                                        className="flex-[2] btn-primary disabled:opacity-30 disabled:translate-y-0"
                                    >
                                        Continuar <ChevronRight size={18} className="ml-2" />
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* NEW LUXURY HERO with Brain Background (Reference Psyka/Neuro) */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/neutral_brain_background_1772584631745.png"
                        alt="Neural Essence"
                        fill
                        className="object-cover brightness-[0.3] scale-110 motion-safe:animate-[pulse_10s_infinite_ease-in-out]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-forest/10 to-ivory"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-12 animate-pulse">
                            <Leaf size={16} className="text-sage" />
                            <span className="font-sans text-[9px] font-black uppercase tracking-[0.5em] text-white/50">Psicologia Baseada em Evidências</span>
                        </div>
                        <h1 className="text-7xl md:text-[140px] font-serif leading-[0.85] mb-12 tracking-tighter">
                            A Nossa Abordagem <br />
                            <span className="italic font-light text-sage drop-shadow-[0_0_20px_rgba(107,140,122,0.3)]">Transformadora.</span>
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
                            Na Psicollo, desenvolvemos uma metodologia enraizada na neuropsicologia para ajudar você a resolver problemas subjacentes e eliminar a névoa mental que impede o seu progresso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <button onClick={() => setIsFunnelOpen(true)} className="btn-primary !px-16 !py-7 !text-[12px] group">
                                Começar Minha Jornada
                                <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-3" />
                            </button>
                            <a href="#sobre" className="font-sans text-[11px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all underline underline-offset-[12px] decoration-white/10">Descubra Mais</a>
                        </div>
                    </FadeIn>
                </div>

                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                    <span className="uppercase tracking-[0.6em] text-[8px] font-black">Scroll</span>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-[1px] h-16 bg-white" />
                </div>
            </section>

            {/* About / Model 1 (Neuropsicologia) */}
            <section id="sobre" className="py-52 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
                    <FadeIn direction="right" className="relative">
                        <div className="absolute -inset-10 bg-sage/5 rounded-[120px] rotate-3 blur-3xl" />
                        <div className="relative aspect-square rounded-[80px] overflow-hidden shadow-2xl border-[1px] border-black/5 image-container">
                            <Image src="/brain-map.png" alt="Brain Connectivity" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[40px] shadow-2xl animate-float max-w-xs border border-white">
                            <h5 className="font-sans font-black text-[10px] uppercase tracking-[0.3em] text-forest mb-4">Neuropsicologia</h5>
                            <p className="font-serif italic text-2xl text-black/80">"Mapeamos o cérebro para curar a alma."</p>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left">
                        <h2 className="text-6xl md:text-8xl font-serif text-black mb-16 leading-[0.95] tracking-tighter">
                            A Nossa Abordagem <br />
                            <span className="italic text-forest">Única e Precisa.</span>
                        </h2>
                        <div className="space-y-12 text-black/60 font-sans leading-relaxed text-xl">
                            <p>
                                Nossa metodologia é breve, focada e concebida para proporcionar resultados duradouros. Utilizamos ferramentas da neuropsicologia para identificar os padrões subjacentes que geram "névoa mental" e travamentos emocionais.
                            </p>
                            <p>
                                Diferente da terapia tradicional, aqui você recebe um mapa claro da sua jornada, guiando-o(a) para um futuro mais brilhante, gratificante e, acima de tudo, autônomo.
                            </p>
                            <div className="grid gap-8 pt-8">
                                {[
                                    { t: "Foco no Resultado", d: "Intervenções cirúrgicas em bloqueios mentais." },
                                    { t: "Clareza Absoluta", d: "Entendimento biológico e emocional da sua dor." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-14 h-14 rounded-3xl bg-forest/5 flex items-center justify-center shrink-0 group-hover:bg-forest transition-all">
                                            <CheckCircle2 size={24} className="text-forest group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black group-hover:text-forest transition-colors uppercase tracking-widest text-xs mb-2">{item.t}</h4>
                                            <p className="text-sm opacity-60 leading-relaxed max-w-sm">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* TABLET / MODEL 2 */}
            <section className="py-40 bg-stone/20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="up">
                        <h2 className="text-6xl md:text-[80px] font-sans font-black text-black mb-16 uppercase leading-tight tracking-tighter">
                            SOBRE <br /> OS MAPAS.
                        </h2>
                        <div className="space-y-16">
                            {[
                                { id: "01", t: "Identifique", d: "Mapeie os comportamentos automáticos que moldam sua vida atual." },
                                { id: "02", t: "Analise", d: "Receba um PDF completo descrevendo seus padrões neurais e emocionais." },
                                { id: "03", t: "Transforme", d: "Aprenda estratégias definitivas para extinguir comportamentos negativos." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-10 items-start group">
                                    <span className="font-serif italic text-6xl text-forest/10 group-hover:text-forest/30 transition-all font-light">{item.id}</span>
                                    <div>
                                        <h4 className="text-2xl font-bold text-black mb-4 uppercase tracking-tighter">{item.t}</h4>
                                        <p className="text-black/50 text-xl font-light leading-relaxed max-w-md">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" className="relative group">
                        <div className="absolute -inset-10 bg-white/50 rounded-full blur-[100px] group-hover:blur-[80px] transition-all" />
                        <div className="relative aspect-square md:aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl image-container border-[10px] border-white/80">
                            <Image src="/brain_on_tablet_1772584658662.png" alt="Neural Map" fill className="object-cover" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* PROFESSIONAL / MODEL 3 */}
            <section id="metodologia" className="py-52 bg-ivory relative">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-40 items-center">
                    <FadeIn direction="right" className="relative aspect-[3/4] rounded-[100px] overflow-hidden shadow-2xl image-container group">
                        <Image src="/hero-professional.png" alt="Profissional" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
                    </FadeIn>
                    <FadeIn direction="left">
                        <h2 className="text-6xl md:text-8xl font-serif text-black mb-16 leading-[0.95] tracking-tighter">
                            A Ciência do <br />
                            <span className="italic text-sage font-light">Comportamento.</span>
                        </h2>
                        <div className="space-y-10 text-xl text-black/60 font-sans font-light leading-relaxed text-justify">
                            <p>
                                Sou formada em Psicologia, mas minha trajetória não seguiu o caminho tradicional. Escolhi viver como nômade e mergulhei no mercado para entender, na prática, como as pessoas decidem, por que clicam e como repetem padrões.
                            </p>
                            <p>
                                Trabalhei como Business Partner e analista de comportamento de consumo. Lá, entendi que os mesmos mecanismos que direcionam uma compra são os que estruturam nossa ansiedade e relacionamentos.
                            </p>
                            <p className="font-serif italic text-3xl text-forest pt-6">
                                "Não tratamos apenas sintomas, tratamos a arquitetura silenciada das suas escolhas."
                            </p>
                        </div>
                        <div className="mt-20 flex flex-col md:flex-row gap-8 items-center border-t border-black/5 pt-16">
                            <Image src="/logo-icon.png" alt="Logo" width={60} height={60} />
                            <div>
                                <h5 className="font-serif text-3xl font-medium tracking-tight">Dra. Psicollo</h5>
                                <p className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-forest opacity-50">Psicóloga & Neuropsicóloga • CRP 06/12345</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Footer */}
            <footer id="contato" className="bg-stone/10 py-40 border-t border-stone/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-20 pb-32 border-b border-black/5">
                        <div className="max-w-md text-center md:text-left">
                            <span className="font-serif text-5xl font-medium mb-10 block tracking-tighter">Psicollo</span>
                            <p className="text-2xl font-sans font-light text-black/40 leading-relaxed">
                                Redefinindo o futuro da sua saúde mental através da precisão da ciência e suavidade do acolher.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-10">
                            <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-black/20">Redes Sociais</h4>
                            <div className="flex gap-8">
                                <a href={INSTAGRAM_URL} className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-forest hover:text-white transition-all duration-500 scale-110 hover:-translate-y-2"><Instagram size={28} /></a>
                                <a href={LINKEDIN_URL} className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-forest hover:text-white transition-all duration-500 scale-110 hover:-translate-y-2"><Linkedin size={28} /></a>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-forest hover:text-white transition-all duration-500 scale-110 hover:-translate-y-2"><X size={28} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 flex flex-col md:flex-row justify-between items-center gap-10">
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-black/10">© 2026 Psicollo Global Clinic. All Rights Reserved.</p>
                        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.6em] text-black/10">
                            <span>Ethics</span>
                            <span>Care</span>
                            <span>Science</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    )
}
