"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, ChevronLeft } from 'lucide-react'
import { CHECKOUT_URL } from '@/lib/constants'

interface FunnelProps {
    isOpen: boolean;
    onClose: () => void;
}

const FunnelOption = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
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
            // Future analytics call here
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
                    className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-3xl flex items-center justify-center p-6 sm:p-10"
                >
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-ivory w-full max-w-2xl rounded-[60px] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-white/20"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 p-4 hover:bg-black/5 rounded-full transition-all"
                        >
                            <X size={24} />
                        </button>

                        <div className="mb-10 flex items-center gap-3">
                            <div className="h-1 flex-1 bg-forest/10 rounded-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((funnelStep + 1) / funnelStepsContent.length) * 100}%` }}
                                    className="h-full bg-forest rounded-full"
                                />
                            </div>
                            <span className="font-sans font-black text-[9px] uppercase tracking-[0.3em] text-forest/40">
                                Passo {funnelStep + 1}/{funnelStepsContent.length}
                            </span>
                        </div>

                        <motion.div
                            key={funnelStep}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="space-y-10"
                        >
                            <h3 className="text-4xl md:text-5xl font-serif leading-[1.1] text-black tracking-tight">
                                {funnelStepsContent[funnelStep].title}
                            </h3>

                            <div className="grid gap-4">
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
                                                    className="w-full bg-white border-b-2 border-forest/20 p-4 font-sans text-lg focus:border-forest transition-all"
                                                    value={funnelData[`${funnelStepsContent[funnelStep].field}Other` as keyof FunnelData]}
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
                                    <button
                                        onClick={() => setFunnelStep(v => v - 1)}
                                        className="flex-1 p-6 rounded-full border-2 border-forest/10 font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2"
                                    >
                                        <ChevronLeft size={16} /> Voltar
                                    </button>
                                )}
                                <button
                                    onClick={handleNext}
                                    disabled={!funnelData[funnelStepsContent[funnelStep].field as keyof FunnelData]}
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
    )
}
