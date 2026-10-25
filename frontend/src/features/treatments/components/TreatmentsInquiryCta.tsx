"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    FileText,
    ArrowRight,
    ShieldCheck,
    Stethoscope,
    Phone,
} from "lucide-react";

export default function TreatmentsInquiryCta() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
            {/* Background Accent Gradients */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-center space-y-6"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-semibold backdrop-blur-md">
                        <Stethoscope className="w-4 h-4 text-blue-400" />
                        <span>Unsure About Procedure Eligibility?</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                        Not Sure Which Treatment You Need? <br className="hidden sm:inline" />
                        <span className="text-blue-400">Submit an Inquiry.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        You don't need to navigate complex clinical terminology alone. Share your latest medical reports or diagnosis summary, and our medical advisory desk will coordinate an initial assessment across relevant specialist boards.
                    </p>

                    {/* Action CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.div
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/contact?type=general-inquiry"
                                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2 group"
                            >
                                <FileText className="w-4 h-4 text-blue-200" />
                                <span>Submit Your Medical Inquiry</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <a
                                href="tel:+919818286609"
                                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold rounded-xl backdrop-blur-md transition flex items-center justify-center gap-2"
                            >
                                <Phone className="w-4 h-4 text-slate-300" />
                                <span>Speak with a Coordinator</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Clinical Non-Diagnostic Disclaimer */}
                    <div className="pt-8 mt-8 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400 max-w-2xl mx-auto">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>
                            CaresDaddy does not independently diagnose conditions or replace personal consultations with licensed medical professionals.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}