"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Stethoscope,
    FileCheck2,
    Car,
    Building,
    Languages,
    CheckCircle2,
    AlertTriangle,
    ChevronDown,
    ArrowRight,
    ShieldAlert,
    Plane,
    ShieldCheck,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import PatientServiceInquiryForm from "./PatientServiceInquiryForm";
import {
    JOURNEY_STEPS,
    VISA_DOCUMENTS,
    ACCOMMODATION_LIST,
    PATIENT_SERVICES_FAQS,
} from "../data/servicesData";

export default function PatientServicesPageView() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Section 1: Introduction Header with Integrated Breadcrumbs */}
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
                            <span>Dedicated International Patient Care</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            Patient Services & Travel Support
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            Travelling for medical care requires meticulous coordination. CaresDaddy assists international patients before arrival, throughout hospital treatment, and after safe return home—ensuring smooth logistics every step of the way.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-12">
                    {/* Section 2: Medical Consultation Coordination */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Stethoscope className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Medical Consultation Coordination
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            We manage communication between you and top accredited tertiary hospitals, obtaining written doctor opinions and estimates before you book international travel.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                                <span className="text-xs font-bold text-blue-600 block">Initial Inquiry & Record Review</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Confidential collection and verification of your latest diagnostic scans and doctor summaries.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                                <span className="text-xs font-bold text-blue-600 block">Hospital & Doctor Coordination</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Presenting cases to senior clinical boards to confirm treatment feasibility and surgeon availability.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                                <span className="text-xs font-bold text-blue-600 block">Consultation Requests</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Scheduling teleconsultation video calls or priority in-person appointments at hospital suites.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                                <span className="text-xs font-bold text-blue-600 block">Transparent Cost Coordination</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Itemized hospital quotes covering surgeon fees, operating theatre costs, bed categories, and stay lengths.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs text-blue-950 flex items-start gap-2.5">
                            <ShieldAlert className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                            <span>
                                <strong>Clinical Authority Notice:</strong> CaresDaddy provides administrative coordination only. All clinical decisions, surgical plans, and therapeutic determinations are made exclusively by the licensed treating medical team at the partner hospital.
                            </span>
                        </div>
                    </section>

                    {/* Section 3: Medical Visa Assistance */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <FileCheck2 className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Medical Visa Assistance
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            Foreign patients traveling to India require an authorized Indian Medical Visa (MED) and Medical Attendant Visas (MED-X). We facilitate the official paperwork required for a smooth consular process.
                        </p>

                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                Essential Document Checklist
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {VISA_DOCUMENTS.map((doc, i) => (
                                    <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                                        <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                            <span>{doc.title}</span>
                                        </h4>
                                        <p className="text-[11px] text-slate-500 leading-relaxed">{doc.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <span>
                                <strong>Consular Disclaimer:</strong> CaresDaddy provides official hospital invitation letters and document verification. We do not issue visas or guarantee visa approval. Approval remains under the sovereign jurisdiction of the Ministry of External Affairs and Indian diplomatic missions.
                            </span>
                        </div>
                    </section>

                    {/* Section 4: Airport Pickup and Transportation */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Car className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Airport Pickup and Transportation
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            We arrange hassle-free transfers from Indira Gandhi International Airport (DEL) Terminal 3 directly to your accommodation or hospital admission gate.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                                <span className="text-xs font-bold text-slate-900 block">Name Placard Pickup</span>
                                <p className="text-[11px] text-slate-500">
                                    Our case executive greets you right outside the arrival terminal gate with a clear name placard.
                                </p>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                                <span className="text-xs font-bold text-slate-900 block">Wheelchair Transport</span>
                                <p className="text-[11px] text-slate-500">
                                    Accessible, spacious vehicles or private ambulances equipped for stretcher and mobility cases.
                                </p>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                                <span className="text-xs font-bold text-slate-900 block">Daily Hospital Shuttles</span>
                                <p className="text-[11px] text-slate-500">
                                    Local transit coordination between nearby guest residences and hospital consultation suites in Saket.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Accommodation Assistance */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Building className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Accommodation Assistance
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            We assist in booking verified guest apartments and hotels situated within walking or short driving distance of partner hospitals in Saket, South Delhi.
                        </p>

                        <div className="space-y-3">
                            {ACCOMMODATION_LIST.map((acc) => (
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
                                        <p className="text-[11px] text-slate-500">{acc.distance}</p>
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {acc.amenities.map((amenity, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[10px] text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200"
                                                >
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-left sm:text-right shrink-0">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Indicative Tariff</span>
                                        <span className="text-sm font-extrabold text-slate-900">{acc.priceRange}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 6: Language and Interpreter Support */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Languages className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Language and Interpreter Support
                            </h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            Clear clinical communication ensures peace of mind. Our partner hospitals provide dedicated interpreters during doctor consultations and nursing rounds.
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
                                <span className="text-[10px] text-emerald-600 font-semibold">Upon Request</span>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                <span className="text-xs font-bold text-slate-900 block">Uzbek / Swahili</span>
                                <span className="text-[10px] text-emerald-600 font-semibold">Pre-Arranged</span>
                            </div>
                        </div>

                        <p className="text-[11px] text-slate-500 italic">
                            Routine hospital consultation interpretation is complementary. Full-time private escort interpreters can be coordinated for an additional daily fee.
                        </p>
                    </section>

                    {/* Section 7: Treatment Journey Coordination */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">
                                Treatment Journey Coordination Steps
                            </h2>
                            <p className="text-xs text-slate-500 mt-1">
                                Your structured pathway from pre-travel planning to post-operative follow-up.
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
                                        {step.deliverables.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
                            <strong>Clinical Discharge Note:</strong> The actual treatment schedule and discharge authorization rest exclusively with the treating medical board.
                        </div>
                    </section>

                    {/* Section 8: Frequently Asked Questions */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                            Patient Services FAQs
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

                {/* Section 9: Contact and Inquiry CTA Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div
                        id="inquiry"
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-30 space-y-4"
                    >
                        <div>
                            <h3 className="text-base font-bold text-slate-900">
                                Request Patient Assistance
                            </h3>
                            <p className="text-xs text-slate-500">
                                Select required services for customized coordination support.
                            </p>
                        </div>
                        <PatientServiceInquiryForm />
                    </div>

                    {/* Supporting Navigation Links */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Quick Links
                        </h4>
                        <div className="space-y-1 text-xs">
                            <Link
                                href="/treatments"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                            >
                                <span>Browse Medical Treatments</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                            <Link
                                href="/hospitals"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                            >
                                <span>Partner Hospitals in Delhi</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                            <Link
                                href="/doctors"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                            >
                                <span>Specialist Doctor Profiles</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                            >
                                <span>Contact International Patient Desk</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}