// src/features/home/components/HowItWorks.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Workflow, ExternalLink } from "lucide-react";
import { HOW_IT_WORKS_OVERVIEW_STEPS } from "@/features/howItWorks/data/howItWorksData";

export default function HowItWorks() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-white border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto space-y-3"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <Workflow className="w-3.5 h-3.5" />
                        <span>Process Workflow</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        A clear, transparent six-step journey designed to coordinate your international medical care safely and efficiently.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {HOW_IT_WORKS_OVERVIEW_STEPS.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.35,
                                    delay: idx * 0.06,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -3 }}
                                className="group relative bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/80 p-7 transition-all duration-300 hover:shadow-lg hover:border-blue-500/40 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors font-mono">
                                            {item.step}
                                        </span>
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                                    <span>Step {item.step}</span>
                                    <Link
                                        href="/how-it-works"
                                        className="inline-flex items-center gap-1 hover:underline text-slate-500 hover:text-blue-600"
                                    >
                                        <span>Read Details</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Action Link to Full Timeline Page & Free Quote */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <Link
                        href="/how-it-works"
                        className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2"
                    >
                        <span>Explore Complete Day-by-Day Pathway</span>
                        <ExternalLink className="w-4 h-4 text-slate-500" />
                    </Link>

                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition shadow-md flex items-center justify-center gap-2"
                    >
                        <span>Get Free Assessment Quote</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}