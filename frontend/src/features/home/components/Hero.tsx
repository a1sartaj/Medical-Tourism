"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse } from "lucide-react";
import HeroSearch from "./HeroSearch";
import HeroQuickInquiryForm from "./HeroQuickInquiryForm";

export default function Hero() {
    return (
        <section className="relative min-h-[680px] lg:min-h-[760px] flex items-center justify-center px-4 sm:px-8 py-16 sm:py-20 overflow-hidden bg-slate-950">
            {/* 1. Background Image - Pure Visibility, No Blur, No Murky Overlays */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=85"
                    alt="International medical consultation in state-of-the-art accredited facility"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[center_25%]"
                />
                {/* Minimal soft gradient on the far left so white text is readable without hiding the photo */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                {/* Left Column: Clean Text Directly on Image (Zero Box, Zero Blur) */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-6"
                >
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-md">
                        <HeartPulse className="w-4 h-4 text-blue-200" />
                        <span>Accredited Global Medical Tourism Facilitation</span>
                    </div>

                    {/* Headline with Natural Shadow for Legibility */}
                    <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        World-Class Medical Care, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
                            Simplified for International Patients.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-slate-100 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-normal">
                        CaresDaddy.com connects you directly with top JCI & NABH accredited hospitals and specialists in Delhi NCR. Get transparent cost estimates, visa assistance, and dedicated non-clinical case management.
                    </p>

                    {/* Search Bar directly placed */}
                    <div className="pt-1 max-w-xl drop-shadow-lg">
                        <HeroSearch />
                    </div>

                    {/* Trust Badges directly on image */}
                    <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>NABH & JCI Partner Hospitals</span>
                        </div>
                        <span className="hidden sm:inline text-slate-400">•</span>
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Transparent Pricing Models</span>
                        </div>
                        <span className="hidden sm:inline text-slate-400">•</span>
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>24/7 Desk in Saket, Delhi</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Mini Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                    className="lg:col-span-5 flex justify-center lg:justify-end"
                >
                    <HeroQuickInquiryForm />
                </motion.div>
            </div>
        </section>
    );
}