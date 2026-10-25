"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    MapPin,
    ShieldCheck,
    Building2,
    Users,
    BedDouble,
    ArrowRight,
    Stethoscope,
} from "lucide-react";
import type { HospitalListItem } from "../data/hospitalsData";

export default function HospitalCard({
    hospital,
    index = 0,
}: {
    hospital: HospitalListItem;
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
            className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between overflow-hidden"
        >
            <div>
                {/* Main Image & Top Badges */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                        src={hospital.imageUrl}
                        alt={hospital.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Hospital Type */}
                    <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-800 shadow-sm">
                            {hospital.hospitalType}
                        </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold bg-slate-900/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                        <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>
                            {hospital.city}, {hospital.country}
                        </span>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                    {/* Verified Accreditations */}
                    <div className="flex flex-wrap items-center gap-1.5">
                        {hospital.accreditations.map((acc) => (
                            <span
                                key={acc}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            >
                                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                <span>{acc}</span>
                            </span>
                        ))}
                    </div>

                    {/* Hospital Name */}
                    <h3 className="font-bold text-slate-900 text-lg leading-snug hover:text-blue-600 transition-colors">
                        <Link href={`/hospitals/${hospital.slug}`}>{hospital.name}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {hospital.shortDescription}
                    </p>

                    {/* Key Stats Bar */}
                    <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100 text-[11px] text-slate-600">
                        <div className="flex items-center gap-1.5">
                            <BedDouble className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{hospital.bedCount} Beds</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>{hospital.doctorCount}+ Doctors</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>Est. {hospital.establishedYear}</span>
                        </div>
                    </div>

                    {/* Key Specialties Pills */}
                    <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                            Core Departments
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                            {hospital.keySpecialties.map((spec) => (
                                <span
                                    key={spec}
                                    className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded-md font-medium"
                                >
                                    {spec}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 pt-0 space-y-3">
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                    <Link
                        href={`/hospitals/${hospital.slug}`}
                        className="w-full py-2.5 px-3 text-center border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition"
                    >
                        View Hospital
                    </Link>
                    <Link
                        href={`/contact?hospital=${hospital.slug}`}
                        className="w-full py-2.5 px-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition flex items-center justify-center gap-1 active:scale-95"
                    >
                        <span>Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}