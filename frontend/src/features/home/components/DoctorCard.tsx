"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Building2, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import type { DoctorItem } from "../data/featuredDoctors";

interface DoctorCardProps {
    doctor: DoctorItem;
    index: number;
}

export default function DoctorCard({ doctor, index }: DoctorCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                {/* Doctor Photo & Badges */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                    <Image
                        src={doctor.photo}
                        alt={doctor.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Verified Badge */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-800 shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span>Verified Specialist</span>
                    </div>

                    {/* Experience Strip */}
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-sm text-white text-xs font-semibold">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        <span>{doctor.experienceYears}+ Years Experience</span>
                    </div>
                </div>

                {/* Doctor Profile Info */}
                <div className="p-5 space-y-3">
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                            {doctor.name}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600 mt-0.5">
                            {doctor.specialty}
                        </p>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-1">
                        {doctor.qualifications}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5 font-medium">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{doctor.hospitalName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span>{doctor.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className="p-5 pt-0">
                <Link
                    href={`/doctors/${doctor.slug}`}
                    className="w-full py-2.5 px-4 bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white font-semibold text-xs rounded-xl border border-slate-200 hover:border-blue-600 transition flex items-center justify-center gap-1.5 group/btn"
                >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}