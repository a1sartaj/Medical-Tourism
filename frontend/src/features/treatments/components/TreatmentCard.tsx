"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    MapPin,
    Clock,
    ArrowRight,
    ShieldCheck,
    CalendarDays,
} from "lucide-react";
import type { TreatmentListItem } from "../data/treatmentsData";

export default function TreatmentCard({
    treatment,
    index = 0,
}: {
    treatment: TreatmentListItem;
    index?: number;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.35,
                delay: (index % 3) * 0.08,
                ease: "easeOut",
            }}
            whileHover={{ y: -3 }}
            className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between overflow-hidden"
        >
            <div>
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                        src={treatment.imageUrl}
                        alt={treatment.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-800 shadow-sm">
                            {treatment.categoryName}
                        </span>
                    </div>

                    {treatment.verified && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-semibold shadow-sm">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Verified Hospital Scope</span>
                        </div>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium bg-slate-900/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                        <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{treatment.destination}</span>
                    </div>
                </div>

                <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-blue-600 transition-colors">
                            <Link href={`/treatments/${treatment.slug}`}>
                                {treatment.name}
                            </Link>
                        </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {treatment.description}
                    </p>

                    <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>Hospital: {treatment.durationHospital}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CalendarDays className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>Trip: {treatment.durationStay}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 pt-0 space-y-3">
                <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                        Indicative Estimate
                    </span>
                    <span className="text-base font-extrabold text-slate-900">
                        {treatment.startingCostDisplay}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Link
                        href={`/treatments/${treatment.slug}`}
                        className="w-full py-2.5 px-3 text-center border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition"
                    >
                        View Details
                    </Link>
                    <Link
                        href={`/contact?treatment=${treatment.slug}`}
                        className="w-full py-2.5 px-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition flex items-center justify-center gap-1 active:scale-95"
                    >
                        <span>Request Estimate</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}