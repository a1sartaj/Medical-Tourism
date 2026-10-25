"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plane,
    Building2,
    MapPin,
    ShieldCheck,
    Hotel,
    Compass,
    ArrowRight,
    ChevronDown,
    Phone,
    FileText,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { DELHI_DESTINATION_DATA } from "../data/delhiData";

export default function DelhiDestinationView() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const data = DELHI_DESTINATION_DATA;

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Hero Header with Integrated Breadcrumbs */}
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs
                            items={[
                                { label: "Destinations", href: "/hospitals" },
                                { label: "New Delhi & NCR" },
                            ]}
                        />
                    </div>

                    <div className="max-w-3xl space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                            <MapPin className="w-3.5 h-3.5 text-blue-400" />
                            <span>Premier Healthcare Destination</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            Medical Travel to {data.name}
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            {data.heroSubtitle}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <Link
                                href="/contact?destination=delhi"
                                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition active:scale-95 flex items-center gap-2"
                            >
                                <span>Plan Your Medical Trip</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/hospitals"
                                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition"
                            >
                                <span>Browse Delhi Hospitals</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Grid Content */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-12">
                    {/* Clinical Highlights Grid */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.clinicalHighlights.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2"
                            >
                                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                                    {item.title}
                                </span>
                                <div className="text-xl font-extrabold text-slate-900">{item.value}</div>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </section>

                    {/* Airport & Transit Logistics */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Plane className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Airport Connectivity & Arrival Guidance
                            </h2>
                        </div>

                        <div className="space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <p>
                                <strong>{data.airportInfo.name}</strong> serves as the central international gateway for medical travelers entering North India.
                            </p>
                            <p className="text-xs text-slate-500">
                                Average travel time to South Delhi medical clusters (Saket): <strong>{data.airportInfo.distanceToSaket}</strong>.
                            </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-slate-100">
                            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                                International Arrival Highlights:
                            </span>
                            <ul className="space-y-2 text-xs text-slate-600">
                                {data.airportInfo.keyFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Leading Hospital Campuses in Region */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-blue-600">
                                <Building2 className="w-5 h-5" />
                                <h2 className="text-xl font-bold text-slate-900">
                                    Leading Accredited Hospital Campuses
                                </h2>
                            </div>
                            <Link
                                href="/hospitals"
                                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                            >
                                <span>View All</span>
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.hospitalHubs.map((hub) => (
                                <div
                                    key={hub.slug}
                                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 hover:shadow-sm transition space-y-3"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900 leading-snug">
                                                <Link href={`/hospitals/${hub.slug}`} className="hover:text-blue-600 transition">
                                                    {hub.name}
                                                </Link>
                                            </h3>
                                            <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                                                <MapPin className="w-3 h-3 text-slate-400" />
                                                {hub.locality}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded shrink-0">
                                            {hub.bedCount}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {hub.highlights.map((hl, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 bg-white text-slate-600 rounded text-[10px] font-medium border border-slate-200"
                                            >
                                                {hl}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Hotel & Stay Hubs */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Hotel className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Accommodation Zones Near Hospitals
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {data.accommodationZones.map((zone, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 space-y-1.5"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xs font-bold text-slate-900">{zone.zone}</h3>
                                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                                            {zone.transitTime}
                                        </span>
                                    </div>
                                    <p className="text-xs text-blue-600 font-medium">{zone.idealFor}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed">{zone.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Local Travel Advice */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Compass className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Practical Travel & Stay Guidance
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.travelTips.map((tip, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-1.5"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                                        {tip.tag}
                                    </span>
                                    <h3 className="text-xs font-bold text-slate-900">{tip.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{tip.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Destination FAQs */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                            Frequently Asked Destination Questions
                        </h2>
                        <div className="space-y-3">
                            {data.faqs.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                            className="w-full p-4 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 bg-slate-50/50"
                                        >
                                            <span>{faq.question}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {isOpen && (
                                            <div className="p-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* Sidebar Assistance Column */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-24 space-y-4">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                                Local Patient Facilitation Desk
                            </span>
                            <h3 className="text-base font-bold text-slate-900 mt-1">
                                Coordination Office: Saket, Delhi
                            </h3>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                Our team is located in Saket, adjacent to primary partner hospital campuses. We arrange patient airport welcomes, FRRO documentation, and daily hospital assistance.
                            </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                            <div className="flex items-center gap-2 text-slate-700">
                                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <span>Saket District Centre, New Delhi, India</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-700">
                                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>+91 9818286609</span>
                            </div>
                        </div>

                        <Link
                            href="/contact?type=delhi-trip-planning"
                            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
                        >
                            <FileText className="w-4 h-4" />
                            <span>Request Delhi Travel Plan</span>
                        </Link>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Full airport-to-discharge coordination</span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}