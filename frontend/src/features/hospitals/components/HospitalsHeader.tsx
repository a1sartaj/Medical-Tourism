"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function HospitalsHeader() {
    return (
        <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                    <Breadcrumbs items={[{ label: "Find Hospitals" }]} />
                </div>

                <div className="max-w-3xl space-y-3">
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md"
                    >
                        <Building2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>Accredited Healthcare Facilities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
                    >
                        Find Hospitals
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
                    >
                        Compare verified multi-speciality and quaternary care hospital campuses. Review legitimate accreditations, clinical capacity, surgeon panels, and dedicated foreign patient amenities.
                    </motion.p>
                </div>
            </div>
        </header>
    );
}