"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import StatCard from "@/components/common/StatCard";
import { TRUST_STATS, ACCREDITATIONS } from "../data/trustIndicators";

export default function TrustIndicators() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-slate-50 border-b border-slate-200/60">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Statistics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TRUST_STATS.map((stat, idx) => (
                        <StatCard
                            key={stat.id}
                            value={stat.value}
                            label={stat.label}
                            description={stat.description}
                            icon={stat.icon}
                            index={idx}
                        />
                    ))}
                </div>

                {/* Accreditations Row */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                            Hospital Quality Benchmarks & Accreditations
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                        {ACCREDITATIONS.map((item, idx) => (
                            <div
                                key={item.shortCode}
                                className={`flex flex-col gap-1.5 ${idx !== 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""
                                    }`}
                            >
                                <span className="text-blue-600 font-extrabold text-base tracking-wide">
                                    {item.shortCode}
                                </span>
                                <h4 className="text-xs font-semibold text-slate-800">
                                    {item.name}
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}