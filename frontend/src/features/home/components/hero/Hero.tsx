import Link from "next/link";
import { ShieldCheck, ArrowRight, HeartPulse } from "lucide-react";
import HeroSearch from "./HeroSearch";

export default function Hero() {
    return (
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-8 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white overflow-hidden">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide">
                    <HeartPulse className="w-4 h-4 text-blue-600" />
                    <span>Accredited Global Medical Facilitation</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                    World-Class Medical Care, <br />
                    <span className="text-blue-600">Simplified for International Patients.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    CaresDaddy.com connects you with top accredited hospitals and verified doctors worldwide. Get transparent cost estimates, travel assistance, and comprehensive clinical coordination.
                </p>

                <div className="pt-2">
                    <HeroSearch />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/20 transition active:scale-95 text-center"
                    >
                        Get a Treatment Estimate
                    </Link>
                    <Link
                        href="/treatments"
                        className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm rounded-xl transition text-center flex items-center justify-center gap-2 group"
                    >
                        <span>Explore Treatments</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-slate-500" />
                    </Link>
                </div>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>NABH & JCI Partner Hospitals</span>
                    </div>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>No Hidden Costs</span>
                    </div>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Dedicated Patient Assistance</span>
                    </div>
                </div>
            </div>
        </section>
    );
}