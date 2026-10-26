"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Globe2,
    FileCheck2,
    Languages,
    Building2,
    ShieldAlert,
    ShieldCheck,
    ChevronDown,
    ArrowRight,
    Clock,
    UtensilsCrossed,
    MapPin,
    CheckCircle2,
    Phone,
    HelpCircle,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import InternationalPatientForm from "./InternationalPatientForm";
import {
    REGIONAL_DESKS,
    DESK_SERVICES,
    INTERNATIONAL_FAQS,
} from "../data/internationalPatientsData";

const iconMap: Record<string, React.ElementType> = {
    FileCheck2,
    ShieldAlert,
    Languages,
    Building2,
};

export default function InternationalPatientsView() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [activeRegionTab, setActiveRegionTab] = useState<string>(
        REGIONAL_DESKS[0].region
    );

    const currentDesk =
        REGIONAL_DESKS.find((d) => d.region === activeRegionTab) || REGIONAL_DESKS[0];

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Header with Integrated Breadcrumbs */}
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "International Patients" }]} />
                    </div>

                    <div className="max-w-3xl space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                            <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                            <span>Global Patient Care Desk • Saket, Delhi</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            International Patient Support & Regional Services
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            CaresDaddy provides specialized cultural, linguistic, and consular liaison services for patients traveling from the GCC, Central Asia, Africa, and Southeast Asia to accredited hospital networks in Delhi NCR.
                        </p>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <a
                                href="#intake"
                                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition active:scale-95 flex items-center gap-2"
                            >
                                <span>Request Regional Assistance</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <Link
                                href="/how-it-works"
                                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition"
                            >
                                <span>View 6-Step Process</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Grid Content */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-12">
                    {/* Core International Desk Services */}
                    <section className="space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold text-slate-900">
                                Core International Patient Desk Services
                            </h2>
                            <p className="text-xs text-slate-500">
                                Administrative, linguistic, and consular facilitation tailored for cross-border medical travel.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {DESK_SERVICES.map((srv, idx) => {
                                const Icon = iconMap[srv.iconName] || Globe2;
                                return (
                                    <div
                                        key={idx}
                                        className="p-5 rounded-2xl border border-slate-200/90 bg-white shadow-sm space-y-2.5"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-sm font-bold text-slate-900">{srv.title}</h3>
                                        <p className="text-xs text-slate-600 leading-relaxed">{srv.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Regional Country Desks Tabs */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-slate-900">
                                Country-Specific Coordination Desks
                            </h2>
                            <p className="text-xs text-slate-500">
                                Select your geographical region to view dedicated translation services, cultural accommodations, and logistical timelines.
                            </p>
                        </div>

                        {/* Region Tab Buttons */}
                        <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100">
                            {REGIONAL_DESKS.map((d) => (
                                <button
                                    key={d.region}
                                    type="button"
                                    onClick={() => setActiveRegionTab(d.region)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeRegionTab === d.region
                                            ? "bg-blue-600 text-white shadow-sm"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {d.region}
                                </button>
                            ))}
                        </div>

                        {/* Selected Region Content */}
                        <div className="space-y-5 pt-1">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Supported Languages
                                    </span>
                                    <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                                        {currentDesk.languages.join(", ")}
                                    </span>
                                </div>

                                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Invitation Letter Turnaround
                                    </span>
                                    <span className="text-xs font-bold text-blue-600 mt-0.5 block">
                                        {currentDesk.leadTime}
                                    </span>
                                </div>

                                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Key Countries Served
                                    </span>
                                    <span className="text-xs font-bold text-slate-900 mt-0.5 block truncate">
                                        {currentDesk.countries.slice(0, 3).join(", ")}...
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                                    Dedicated Regional Services:
                                </h4>
                                <ul className="space-y-2 text-xs text-slate-600">
                                    {currentDesk.keyServices.map((ks, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                            <span>{ks}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                                <UtensilsCrossed className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-slate-900 block font-semibold">
                                        Cultural & Dietary Coordination:
                                    </strong>
                                    <span>{currentDesk.dietaryLogistics}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Clinical Non-Diagnostic Disclaimer */}
                    <section className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-6 flex items-start gap-3.5">
                        <ShieldAlert className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <h3 className="text-xs font-bold text-blue-950 uppercase tracking-wide">
                                Administrative & Cultural Advisory Notice
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                CaresDaddy provides non-clinical administrative, linguistic, and travel coordination. All treatment pathways, clinical diagnoses, surgical admissions, and discharge decisions remain under the independent authority of licensed clinicians at accredited partner hospitals.
                            </p>
                        </div>
                    </section>

                    {/* International FAQs */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                <HelpCircle className="w-3.5 h-3.5" />
                                <span>Frequently Asked Questions</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                                International Patient Inquiries
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {INTERNATIONAL_FAQS.map((faq, idx) => {
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
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                                >
                                                    <div className="p-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* Sidebar Intake Form Column */}
                <aside className="lg:col-span-4 space-y-8">
                    <div
                        id="intake"
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-24 space-y-4"
                    >
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                                Direct Patient Onboarding
                            </span>
                            <h3 className="text-base font-bold text-slate-900 mt-0.5">
                                International Desk Intake
                            </h3>
                            <p className="text-xs text-slate-500 mt-1">
                                Connect with our Saket coordination team for visa documentation and hospital quotation reviews.
                            </p>
                        </div>
                        <InternationalPatientForm />
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-xs">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Immediate Assistance Desk
                        </h4>
                        <div className="space-y-2">
                            <a
                                href="tel:+919818286609"
                                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium"
                            >
                                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>+91 9818286609 (WhatsApp & Calls)</span>
                            </a>
                            <div className="flex items-center gap-2 text-slate-600">
                                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <span>Saket District Centre, New Delhi, India</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}