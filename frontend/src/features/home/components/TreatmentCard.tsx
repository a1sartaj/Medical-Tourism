"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import type { TreatmentItem } from "../data/popularTreatments";

interface TreatmentCardProps {
    treatment: TreatmentItem;
    index: number;
}

export default function TreatmentCard({ treatment, index }: TreatmentCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                {/* Treatment Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                        src={treatment.image}
                        alt={treatment.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[11px] font-semibold text-slate-800 shadow-sm">
                            {treatment.category}
                        </span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{treatment.duration}</span>
                    </div>
                </div>

                {/* Treatment Details */}
                <div className="p-5 space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                            {treatment.name}
                        </h3>
                        {treatment.verified && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                        )}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {treatment.description}
                    </p>
                </div>
            </div>

            {/* Pricing & CTAs */}
            <div className="p-5 pt-0 space-y-3">
                <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
                        Starting From
                    </span>
                    <span className="text-lg font-black text-slate-900 tracking-tight">
                        {treatment.startingCost}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Link
                        href={`/treatments/${treatment.slug}`}
                        className="w-full py-2.5 px-3 text-center border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition"
                    >
                        View Details
                    </Link>
                    <Link
                        href={`/contact?treatment=${treatment.slug}`}
                        className="w-full py-2.5 px-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition active:scale-95 flex items-center justify-center gap-1"
                    >
                        <span>Get Estimate</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}