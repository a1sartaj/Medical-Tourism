"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, ArrowRight, BedDouble, Check } from "lucide-react";
import type { HospitalItem } from "../data/featuredHospitals";

interface HospitalCardProps {
    hospital: HospitalItem;
    index: number;
}

export default function HospitalCard({ hospital, index }: HospitalCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                {/* Hospital Photo */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                        src={hospital.image}
                        alt={hospital.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Accreditations Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {hospital.accreditations.map((acc) => (
                            <span
                                key={acc}
                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-800 shadow-sm"
                            >
                                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                <span>{acc}</span>
                            </span>
                        ))}
                    </div>

                    {/* Bed Capacity Indicator */}
                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium">
                        <BedDouble className="w-3.5 h-3.5 text-blue-400" />
                        <span>{hospital.bedCount}</span>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-4">
                    <div>
                        <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mb-1">
                            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{hospital.city}, {hospital.country}</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                            {hospital.name}
                        </h3>
                    </div>

                    {/* Specialties Pills */}
                    <div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Key Specialties
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {hospital.specialties.map((spec) => (
                                <span
                                    key={spec}
                                    className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-slate-700 text-xs font-medium"
                                >
                                    {spec}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Verified Facilities List */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            International Patient Support
                        </p>
                        {hospital.facilities.map((fac) => (
                            <div key={fac} className="flex items-center gap-1.5 text-xs text-slate-600">
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span className="truncate">{fac}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className="p-5 pt-0">
                <Link
                    href={`/hospitals/${hospital.slug}`}
                    className="w-full py-2.5 px-4 bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white font-semibold text-xs rounded-xl border border-slate-200 hover:border-blue-600 transition flex items-center justify-center gap-1.5 group/btn"
                >
                    <span>View Hospital Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}