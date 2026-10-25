"use client";

import { motion } from "framer-motion";
import {
    Layers,
    HeartPulse,
    Bone,
    Activity,
    Brain,
    Smile,
    Baby,
    Sparkles,
    Eye,
    ShieldAlert,
    Stethoscope,
} from "lucide-react";
import {
    TREATMENT_CATEGORIES,
    type TreatmentCategoryOption,
} from "../data/filterData";

const iconMap: Record<string, React.ElementType> = {
    Layers,
    HeartPulse,
    Bone,
    Activity,
    Brain,
    Smile,
    Baby,
    Sparkles,
    Eye,
    ShieldAlert,
    Stethoscope,
};

interface TreatmentCategoryPillsProps {
    selectedCategory: string;
    onSelectCategory: (categoryId: string) => void;
}

export default function TreatmentCategoryPills({
    selectedCategory,
    onSelectCategory,
}: TreatmentCategoryPillsProps) {
    return (
        <section className="py-8 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Browse by Clinical Specialty
                    </h2>
                    <span className="text-xs text-slate-400">
                        {TREATMENT_CATEGORIES.length - 1} Medical Specialties Available
                    </span>
                </div>

                {/* Scrollable Horizontal Pill List */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
                    {TREATMENT_CATEGORIES.map((cat: TreatmentCategoryOption) => {
                        const Icon = iconMap[cat.iconName] || Stethoscope;
                        const isSelected = selectedCategory === cat.id;

                        return (
                            <motion.button
                                key={cat.id}
                                type="button"
                                whileTap={{ scale: 0.96 }}
                                onClick={() => onSelectCategory(cat.id)}
                                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 border ${isSelected
                                        ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-500/20"
                                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60"
                                    }`}
                            >
                                <Icon
                                    className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-blue-600"
                                        }`}
                                />
                                <span>{cat.name}</span>
                                <span
                                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${isSelected
                                            ? "bg-blue-700 text-blue-100"
                                            : "bg-slate-100 text-slate-500"
                                        }`}
                                >
                                    {cat.count}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}