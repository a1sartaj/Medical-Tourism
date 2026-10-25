"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, HeartPulse } from "lucide-react";
import HeroSearch from "./HeroSearch";

export default function Hero() {
    return (
        <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center px-4 sm:px-8 py-20 overflow-hidden bg-slate-950">
            {/* Background Image with Clean Modern Gradient Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=85"
                    alt="International medical consultation in state-of-the-art accredited facility"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_35%]"
                />
                {/* Layered overlays: high readability without making it muddy */}
                <div className="absolute inset-0 bg-slate-950/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
                {/* Accreditation Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-semibold backdrop-blur-md shadow-sm"
                >
                    <HeartPulse className="w-4 h-4 text-blue-400" />
                    <span>Accredited Global Medical Tourism Facilitation</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14]"
                >
                    World-Class Medical Care, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                        Simplified for International Patients.
                    </span>
                </motion.h1>

                {/* Short Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
                    className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
                >
                    CaresDaddy.com connects you directly with top JCI & NABH accredited hospitals and specialists worldwide. Get transparent cost estimates, travel logistics, and dedicated non-clinical case management.
                </motion.p>

                {/* Search Field */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
                    className="pt-2"
                >
                    <HeroSearch />
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.38, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
                >
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto block px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/30 transition text-center"
                        >
                            Get a Treatment Estimate
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                        <Link
                            href="/treatments"
                            className="w-full sm:w-auto block px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm rounded-xl backdrop-blur-md transition text-center flex items-center justify-center gap-2 group"
                        >
                            <span>Explore Treatments</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-slate-300" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Trust Indicators Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.48 }}
                    className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium"
                >
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-300">NABH & JCI Partner Hospitals</span>
                    </div>
                    <span className="hidden sm:inline text-slate-700">•</span>
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-300">Transparent Pricing Models</span>
                    </div>
                    <span className="hidden sm:inline text-slate-700">•</span>
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-slate-300">24/7 Assistance Desk in Saket, Delhi</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}