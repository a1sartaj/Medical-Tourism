"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    FileCheck2,
    Plane,
    Building,
    Languages,
    CheckCircle2,
    AlertTriangle,
    ChevronDown,
    ArrowRight,
    ShieldAlert,
    Car,
    Clock,
    ExternalLink,
    ShieldCheck,
    Stethoscope,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PatientServiceInquiryForm from "./PatientServiceInquiryForm";
import {
    JOURNEY_STEPS,
    VISA_CHECKLIST,
    ACCOMMODATIONS,
    PATIENT_SERVICES_FAQS,
} from "../data/servicesData";

export default function PatientServicesPageView() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Section 1: Page Header with Integrated Breadcrumbs */}
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "Patient Services" }]} />
                    </div>

                    <div className="max-w-3xl space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                            <span>Comprehensive International Facilitation</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            International Patient Services
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            From second opinions and official medical visa invitation letters to airport transfers, accessible accommodation, and bedside interpretation—we coordinate every administrative step of your medical journey to Delhi NCR.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-14">
                    {/* Section 2: Medical Consultation Coordination */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Stethoscope className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Medical Consultation & Estimate Coordination
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            We streamline communication between international patients and certified hospital boards, helping you evaluate potential treatment pathways before committing to international travel.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                                <span className="text-xs font-bold text-blue-600 block">01. Secure Report Transfer</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Confidential digital transfer of recent MRI/CT scans, pathology reports, and physician summaries directly to department heads.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                                <span className="text-xs font-bold text-blue-600 block">02. Hospital Second Opinions</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Written diagnostic evaluations from accredited multi-speciality boards confirming treatment indications and surgical viability.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                                <span className="text-xs font-bold text-blue-600 block">03. Itemized Quotations</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Transparent hospital quotation letters detailing surgeon charges, room categories, standard consumables, and expected stay durations.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                                <span className="text-xs font-bold text-blue-600 block">04. Video Pre-Consultations</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Pre-departure telemedicine conferences enabling patients to speak directly with the treating specialist.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs text-blue-950 flex items-start gap-2.5">
                            <ShieldAlert className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                            <span>
                                <strong>Clinical Authority Notice:</strong> CaresDaddy operates strictly as an administrative facilitator. All clinical diagnoses, procedure approvals, and therapeutic recommendations are made exclusively by licensed doctors at the treating hospital.
                            </span>
                        </div>
                    </section>

                    {/* Section 3: Medical Visa Assistance */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <FileCheck2 className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Medical Visa (MED & MED-X) Guidance
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            Foreign nationals traveling to India for clinical care require an authorized Indian Medical Visa (MED) and Medical Attendant Visas (MED-X). We assist with the paperwork to simplify processing at your nearest Indian Embassy or e-Visa portal.
                        </p>

                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                Mandatory Documentation Checklist
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {VISA_CHECKLIST.map((item, i) => (
                                    <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                                        <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                            <span>{item.title}</span>
                                        </h4>
                                        <p className="text-[11px] text-slate-500 leading-relaxed">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <span>
                                <strong>No Visa Guarantee:</strong> CaresDaddy provides formal hospital invitation letters and documentation verification. We do not issue visas or guarantee consular approval. All visa decisions remain the sole prerogative of the Government of India.
                            </span>
                        </div>
                    </section>

                    {/* Section 4: Airport Pickup & Transportation */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Car className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Airport Meet-and-Greet & Transportation
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            Arriving in a foreign country while dealing with medical conditions requires dependable logistics. We organize direct airport pickups from Indira Gandhi International Airport (DEL) Terminal 3.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                                <span className="text-xs font-bold text-slate-900 block">Placard Meet & Greet</span>
                                <p className="text-[11px] text-slate-500">
                                    A representative meets you immediately upon clearing international customs with your name board.
                                </p>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                                <span className="text-xs font-bold text-slate-900 block">Wheelchair Transfers</span>
                                <p className="text-[11px] text-slate-500">
                                    Pre-booked accessible vans and sanitized ambulances for post-surgical or immobile patients.
                                </p>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                                <span className="text-xs font-bold text-slate-900 block">Local OPD Shuttles</span>
                                <p className="text-[11px] text-slate-500">
                                    Arranged daily transit between your booked accommodation and hospital consulting suites in Saket.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Accommodation Assistance */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-blue-600">
                                <Building className="w-5 h-5" />
                                <h2 className="text-xl font-bold text-slate-900">
                                    Verified Accommodation Near Partner Hospitals
                                </h2>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            We connect patients with partner guest residences, serviced apartments, and hotels within walking or short driving distance of partner hospital blocks in Saket, South Delhi.
                        </p>

                        <div className="space-y-3">
                            {ACCOMMODATIONS.map((acc) => (
                                <div
                                    key={acc.id}
                                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-xs font-bold text-slate-900">{acc.name}</h4>
                                            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-medium">
                                                {acc.type}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-slate-500">{acc.distanceToHospital}</p>
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {acc.features.map((f, i) => (
                                                <span key={i} className="text-[10px] text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-right shrink-0">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Indicative Tariff</span>
                                        <span className="text-sm font-extrabold text-slate-900">{acc.indicativePrice}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 6: Language & Interpreter Support */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Languages className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Language Assistance & Sworn Interpreters
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            Clear clinical communication is critical. Our partner hospital networks support native Arabic, Russian, French, and Uzbek language interpreters throughout clinical consultations and nursing rounds.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-slate-900 block">Arabic (العربية)</span>
                                <span className="text-[10px] text-emerald-600 font-semibold">Available Daily</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-slate-900 block">Russian (Русский)</span>
                                <span className="text-[10px] text-emerald-600 font-semibold">Available Daily</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-slate-900 block">French (Français)</span>
                                <span className="text-[10px] text-emerald-600 font-semibold">Available on Request</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-slate-900 block">Uzbek / Swahili</span>
                                <span className="text-[10px] text-emerald-600 font-semibold">Coordination Desk</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Treatment Journey Coordination */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-slate-900">
                                End-to-End Treatment Journey Coordination
                            </h2>
                            <p className="text-xs text-slate-500">
                                How our Saket patient support desk coordinates your experience from departure to homecoming.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {JOURNEY_STEPS.map((step) => (
                                <div key={step.step} className="p-5 rounded-xl border border-slate-200 bg-slate-50/40 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-mono font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                                            Step {step.step}
                                        </span>
                                        <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                                    <ul className="pt-1 space-y-1 text-xs text-slate-700">
                                        {step.deliverables.map((deliv, idx) => (
                                            <li key={idx} className="flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                                <span>{deliv}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
                            <strong>Medical Team Governance:</strong> Procedure schedules, operating theatre admissions, and clinical discharge authorizations remain exclusively governed by the primary hospital consultant.
                        </div>
                    </section>

                    {/* Section 8: Frequently Asked Questions */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                            Patient Services & Travel FAQs
                        </h2>
                        <div className="space-y-3">
                            {PATIENT_SERVICES_FAQS.map((faq, idx) => {
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

                {/* Sidebar Column: Section 9: Inquiry Form & Quick Links */}
                <aside className="lg:col-span-4 space-y-8">
                    <div
                        id="inquiry"
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-24 space-y-4"
                    >
                        <div>
                            <h3 className="text-base font-bold text-slate-900">
                                Request Service Assistance
                            </h3>
                            <p className="text-xs text-slate-500">
                                Choose required logistical and consultation services for personalized planning.
                            </p>
                        </div>
                        <PatientServiceInquiryForm />
                    </div>

                    {/* Quick Supporting Navigation Links */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Helpful Resource Routes
                        </h4>
                        <div className="space-y-1 text-xs">
                            <Link
                                href="/treatments"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                            >
                                <span>Accredited Treatments Directory</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                            <Link
                                href="/hospitals"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                            >
                                <span>Partner Hospitals in Delhi NCR</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                            <Link
                                href="/doctors"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                            >
                                <span>Consultant & Surgeon Profiles</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                            >
                                <span>International Desk Direct Contact</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}