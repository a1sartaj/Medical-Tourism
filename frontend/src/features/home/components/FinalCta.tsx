"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    ArrowRight,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";
import { FINAL_CTA_CONFIG } from "../data/finalCta";

export default function FinalCta() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/70">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative rounded-3xl bg-slate-900 text-white overflow-hidden p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800"
                >
                    {/* Subtle Ambient Background Gradients */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/20 text-xs font-semibold">
                            <ShieldCheck className="w-4 h-4 text-blue-400" />
                            <span>Confidential & Secure Case Evaluation</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            {FINAL_CTA_CONFIG.heading}
                        </h2>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            {FINAL_CTA_CONFIG.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.div
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    href={FINAL_CTA_CONFIG.primaryCtaHref}
                                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2 group"
                                >
                                    <span>{FINAL_CTA_CONFIG.primaryCtaText}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto"
                            >
                                <a
                                    href={FINAL_CTA_CONFIG.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-7 py-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-sm font-semibold rounded-xl transition flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Direct Contact Bar */}
                        <div className="pt-10 mt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
                            <motion.a
                                whileHover={{ y: -2 }}
                                href={`tel:${FINAL_CTA_CONFIG.phoneNumber}`}
                                className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 transition border border-slate-700/50"
                            >
                                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                                <span className="font-semibold">{FINAL_CTA_CONFIG.phoneDisplay}</span>
                            </motion.a>

                            <motion.a
                                whileHover={{ y: -2 }}
                                href={`mailto:${FINAL_CTA_CONFIG.email}`}
                                className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 transition border border-slate-700/50"
                            >
                                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                                <span>{FINAL_CTA_CONFIG.email}</span>
                            </motion.a>

                            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                                <span>{FINAL_CTA_CONFIG.location}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}