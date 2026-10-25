"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlaneTakeoff } from "lucide-react";
import { PATIENT_SERVICES } from "../data/patientServices";

export default function PatientServices() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-white border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            <PlaneTakeoff className="w-3.5 h-3.5" />
                            <span>International Travel & Care</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            International Patient Support Services
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            We streamline non-clinical travel and hospital administrative logistics so international patients and their families can focus entirely on health and recovery.
                        </p>
                    </div>

                    <Link
                        href="/patient-services"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition group"
                    >
                        <span>Explore All Services</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Services Grid (8 Cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PATIENT_SERVICES.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.35,
                                    delay: idx * 0.05,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -3 }}
                                className="group bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500/40 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center transition-transform">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        {service.badge && (
                                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-200/80 text-slate-700">
                                                {service.badge}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link
                                        href={`/patient-services#${service.id}`}
                                        className="hover:underline flex items-center gap-1"
                                    >
                                        <span>Learn more</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}