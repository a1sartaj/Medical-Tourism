import Link from "next/link";
import { ArrowRight, UserCheck } from "lucide-react";
import DoctorCard from "./DoctorCard";
import { FEATURED_DOCTORS } from "../data/featuredDoctors";

export default function FeaturedDoctors() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-white border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2 max-w-xl">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            <UserCheck className="w-3.5 h-3.5" />
                            <span>Top Clinical Specialists</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Featured Doctors & Surgeons
                        </h2>
                        <p className="text-sm text-slate-600">
                            Consult with internationally certified specialists with decades of proven procedural expertise.
                        </p>
                    </div>

                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition group"
                    >
                        <span>Explore All Specialists</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Doctor Grid (4 items) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURED_DOCTORS.map((doctor, index) => (
                        <DoctorCard key={doctor.id} doctor={doctor} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}