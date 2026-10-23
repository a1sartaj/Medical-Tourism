import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import TreatmentCard from "./TreatmentCard";
import { POPULAR_TREATMENTS } from "../data/popularTreatments";

export default function PopularTreatments() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2 max-w-xl">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Specialized Procedures</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Popular Medical Treatments
                        </h2>
                        <p className="text-sm text-slate-600">
                            Verified clinical packages at certified healthcare centers with transparent pricing options.
                        </p>
                    </div>

                    <Link
                        href="/treatments"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition group"
                    >
                        <span>Explore All Treatments</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Treatments Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {POPULAR_TREATMENTS.map((treatment, index) => (
                        <TreatmentCard
                            key={treatment.id}
                            treatment={treatment}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}