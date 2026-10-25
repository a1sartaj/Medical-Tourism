"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plane,
    Building2,
    ChevronDown,
    ArrowRight,
    ShieldCheck,
    Phone,
    FileText,
} from "lucide-react";

const DESTINATION_POINTS = [
    {
        title: "International Connectivity",
        detail:
            "Indira Gandhi International Airport (DEL) offers direct scheduled flights from the GCC, Central Asia, and Africa, located within a 35-minute drive from Saket.",
    },
    {
        title: "Quaternary Clinical Infrastructure",
        detail:
            "Delhi NCR houses the densest concentration of JCI-accredited facilities with comprehensive Da Vinci robotic systems, PET-CT suites, and dedicated organ transplant units.",
    },
    {
        title: "Dedicated Foreign Assistance Desks",
        detail:
            "Hospitals feature in-house visa registration (FRRO) assistance, multi-lingual interpreters (Arabic, Russian, French), and patient guest services.",
    },
];

const HOSPITAL_FAQS = [
    {
        question: "How do I choose between different partner hospitals?",
        answer:
            "We compare hospitals according to procedure-specific volume, specialized ICU infrastructure, and the specific surgeon handling your diagnosis rather than general brand size.",
    },
    {
        question: "Are hospital charges higher if I book through CaresDaddy?",
        answer:
            "No. Hospital invoices are issued directly by the treating hospital at their standard published international tariff. There are zero agency markups or hidden booking commissions.",
    },
    {
        question: "How soon can an initial specialist consultation be arranged?",
        answer:
            "After you share diagnostic reports, we obtain clinical evaluations and official hospital quotation letters within 24 to 48 hours.",
    },
];

export function DestinationInfo() {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="max-w-2xl space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <Plane className="w-3.5 h-3.5" />
                        <span>Destination Overview</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Why Patients Choose Delhi NCR for Care
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        The National Capital Region serves as India's primary hub for advanced tertiary care and clinical expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {DESTINATION_POINTS.map((pt, i) => (
                        <div
                            key={i}
                            className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2"
                        >
                            <h3 className="text-sm font-bold text-slate-900">{pt.title}</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">{pt.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function HospitalFaqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-8 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Hospital Selection FAQs
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Guidance on evaluating hospital accreditations, surgeon teams, and billing transparency.
                    </p>
                </div>

                <div className="space-y-3">
                    {HOSPITAL_FAQS.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full p-5 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900"
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
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export function HospitalFinalCta() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-semibold">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>Independent Patient Placement Guidance</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                    Need Help Selecting the Right Hospital?
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                    Share your medical reports and budget preferences. Our Saket-based desk will coordinate directly with senior clinical directors to secure verified estimates across partner campuses.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact?type=hospital-matching"
                        className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                    >
                        <FileText className="w-4 h-4 text-blue-200" />
                        <span>Request Hospital Recommendations</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="tel:+919818286609"
                        className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold rounded-xl transition flex items-center justify-center gap-2"
                    >
                        <Phone className="w-4 h-4 text-slate-300" />
                        <span>Call +91 9818286609</span>
                    </a>
                </div>
            </div>
        </section>
    );
}