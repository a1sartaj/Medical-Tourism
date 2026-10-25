"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Building2,
    MapPin,
    ShieldCheck,
    Calendar,
    ArrowRight,
    Clock,
} from "lucide-react";
import type { DoctorListItem } from "../data/doctorsData";

export default function DoctorCard({
    doctor,
    index = 0,
}: {
    doctor: DoctorListItem;
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
            <div className="p-6 space-y-5">
                {/* Top Profile Header */}
                <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-100 shrink-0">
                        <Image
                            src={doctor.photo}
                            alt={doctor.name}
                            fill
                            sizes="88px"
                            className="object-cover"
                        />
                    </div>

                    <div className="min-w-0 space-y-1">
                        {doctor.verified && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                Verified Specialist
                            </span>
                        )}
                        <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug hover:text-blue-600 transition-colors">
                            <Link href={`/doctors/${doctor.slug}`}>{doctor.name}</Link>
                        </h3>
                        <p className="text-xs font-semibold text-blue-600 truncate">
                            {doctor.specialtyName}
                        </p>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>{doctor.experienceDisplay}</span>
                        </div>
                    </div>
                </div>

                {/* Section 31: Qualifications & Clinical Scope */}
                <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-start gap-2 text-slate-600">
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{doctor.qualifications}</span>
                    </div>

                    {/* Section 32: Associated Hospital */}
                    <div className="flex items-start gap-2 text-slate-600">
                        <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                            <span className="font-semibold text-slate-800 block truncate">
                                {doctor.hospitalName}
                            </span>
                            <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3" />
                                {doctor.cityDisplay}
                            </span>
                        </div>
                    </div>

                    {/* Sub-Specialties Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {doctor.subSpecialties.map((sub, i) => (
                            <span
                                key={i}
                                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700"
                            >
                                {sub}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer & Consultation CTA */}
            <div className="p-6 pt-0 space-y-3">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        OPD: {doctor.opdDays}
                    </span>
                    <span>Languages: {doctor.languages.join(", ")}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Link
                        href={`/doctors/${doctor.slug}`}
                        className="w-full py-2.5 px-3 text-center border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition"
                    >
                        View Profile
                    </Link>
                    <Link
                        href={`/contact?doctor=${doctor.slug}`}
                        className="w-full py-2.5 px-3 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition flex items-center justify-center gap-1 active:scale-95"
                    >
                        <span>Consult Doctor</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}