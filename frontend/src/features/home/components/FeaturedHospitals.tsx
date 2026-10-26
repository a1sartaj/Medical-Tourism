import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { HOSPITALS_DATA } from "@/features/hospitals/data/hospitalsData";
import HospitalCard from "@/features/hospitals/components/HospitalCard";

export default function FeaturedHospitals() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50/80 border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2 max-w-xl">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>Accredited Healthcare Centers</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Featured Partner Hospitals
                        </h2>
                        <p className="text-sm text-slate-600">
                            Globally recognized medical institutions verified for international patient protocols and quality care.
                        </p>
                    </div>

                    <Link
                        href="/hospitals"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition group"
                    >
                        <span>Explore All Hospitals</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {HOSPITALS_DATA.slice(0, 3).map((hospital, index) => (
                        <HospitalCard
                            key={hospital.id}
                            hospital={hospital}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}