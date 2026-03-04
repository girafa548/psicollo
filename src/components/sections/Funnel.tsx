"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, ChevronLeft, Sparkles, BrainCircuit, Heart } from 'lucide-react'
import { CHECKOUT_URL } from '@/lib/constants'

interface FunnelProps {
    isOpen: boolean;
    onClose: () => void;
}

const FunnelOption = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`w-full p-8 text-left rounded-[40px] border-2 transition-all duration-700 group relative overflow-hidden ${selected
            ? 'bg-forest border-forest text-white shadow-2xl shadow-forest/30 -translate-y-2'
            : 'bg-white/40 border-stone/20 text-black/40 hover:border-forest/30 hover:bg-white hover:text-black hover:-translate-y-1'
            }`}
    >
        <div className="flex items-center justify-between relative z-10">
            <span className="font-sans font-black text-xl uppercase tracking-tighter">{label}</span>
            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 scale-110 ${selected ? 'bg-white/20 border-white' : 'border-stone/40 group-hover:border-forest/60'
                }`}>
                {selected && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3.5 h-3.5 bg-white rounded-full shadow-lg" />}
            </div>
        </div>
        {selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} className="absolute inset-0 bg-white" />
        )}
    </button>
)

interface FunnelData {
    objective: string;
    objectiveOther: string;
    urgency: string;
    urgencyOther: string;
}

export function Funnel({ isOpen, onClose }: FunnelProps) {
    const [funnelStep, setFunnelStep] = useState(0)
    const [funnelData, setFunnelData] = useState<FunnelData>({
        objective: '',
        objectiveOther: '',
        urgency: '',
        urgencyOther: ''
    })

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
            window.location.href = CHECKOUT_URL
        }
    }

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[500] bg-forest/80 backdrop-blur-3xl flex items-center justify-center p-6 sm:p-12 overflow-y-auto"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="bg-ivory w-full max-w-3xl rounded-[80px] p-10 md:p-24 relative overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.5)] border border-white/30"
                    >
                        {/* Luxury details */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <button
                            onClick={onClose}
                            className="absolute top-12 right-12 w-16 h-16 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-all active:scale-95 group"
                        >
                            <X size={28} className="text-black/30 group-hover:text-black transition-colors" />
                        </button>

                        <div className="mb-20">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-4">
                                    <Sparkles size={20} className="text-forest animate-pulse" />
                                    <span className="font-sans font-black text-[10px] uppercase tracking-[0.6em] text-forest/40">Iniciando Sua Jornada Clinica</span>
                                </div>
                                <span className="font-sans font-bold text-[11px] uppercase tracking-widest text-forest/40">
                                    {Math.round(((funnelStep + 1) / funnelStepsContent.length) * 100)}%
                                </span>
                            </div>
                            <div className="h-2 w-full bg-forest/5 rounded-full relative overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((funnelStep + 1) / funnelStepsContent.length) * 100}%` }}
                                    className="h-full bg-forest rounded-full shadow-[0_0_20px_rgba(46,78,63,0.3)] transition-all duration-1000"
                                />
                            </div>
                        </div>

                        <motion.div
                            key={funnelStep}
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -40, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                            className="space-y-12"
                        >
                            <h3 className="text-5xl md:text-7xl font-serif leading-[1.05] text-black tracking-tighter drop-shadow-sm">
                                {funnelStepsContent[funnelStep].title}
                            </h3>

                            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                                {funnelStepsContent[funnelStep].options.map((opt, i) => (
                                    <div key={i} className="space-y-4">
                                        <FunnelOption
                                            label={opt}
                                            selected={funnelData[funnelStepsContent[funnelStep].field as keyof FunnelData] === opt}
                                            onClick={() => setFunnelData({ ...funnelData, [funnelStepsContent[funnelStep].field]: opt })}
                                        />

                                        {opt === "Outro" && funnelData[funnelStepsContent[funnelStep].field as keyof FunnelData] === "Outro" && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="px-6 pb-2">
                                                <input
                                                    type="text"
                                                    placeholder="Especifique aqui o que busca..."
                                                    className="w-full bg-white/50 border-b-2 border-forest/30 p-6 font-sans text-xl focus:border-forest transition-all focus:bg-white rounded-2xl"
                                                    value={funnelData[`${funnelStepsContent[funnelStep].field}Other` as keyof FunnelData]}
                                                    onChange={(e) => setFunnelData({ ...funnelData, [`${funnelStepsContent[funnelStep].field}Other`]: e.target.value })}
                                                    autoFocus
                                                />
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8 pt-12">
                                {funnelStep > 0 && (
                                    <button
                                        onClick={() => setFunnelStep(v => v - 1)}
                                        className="flex-1 p-8 rounded-full border-2 border-forest/10 font-bold uppercase text-[11px] tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-4 text-forest group"
                                    >
                                        <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-2" /> Voltar
                                    </button>
                                )}
                                <button
                                    onClick={handleNext}
                                    disabled={!funnelData[funnelStepsContent[funnelStep].field as keyof FunnelData]}
                                    className="flex-[2] btn-primary !py-8 disabled:opacity-20 disabled:scale-95 disabled:hover:translate-y-0"
                                >
                                    <span className="flex items-center">
                                        Continuar Jornada <ChevronRight size={22} className="ml-4 transition-transform group-hover:translate-x-3 duration-700" />
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
