"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Building2,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    ShieldAlert,
    ChevronDown,
    Sparkles,
    FileCheck,
    Stethoscope,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import TreatmentInquiryForm from "./TreatmentInquiryForm";
import type { TreatmentDetail } from "../data/treatmentDetailsData";

export default function TreatmentDetailView({
    treatment,
}: {
    treatment: TreatmentDetail;
}) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* 11 & 12. Treatment Hero with Integrated Breadcrumbs (Matches List Page Style) */}
            <section className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                {/* Subtle Ambient Background Gradients */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-6">
                    {/* Breadcrumb Navigation - List Page Header Matched Styling */}
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs
                            items={[
                                { label: "Medical Treatments", href: "/treatments" },
                                { label: treatment.name },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                        <div className="lg:col-span-7 space-y-5">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                {treatment.category}
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                {treatment.name}
                            </h1>
                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                                {treatment.summary}
                            </p>

                            <div className="pt-2 flex flex-wrap gap-4">
                                <a
                                    href="#inquiry"
                                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition active:scale-95 flex items-center gap-2"
                                >
                                    <span>Request Assessment & Estimate</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <div className="px-4 py-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs flex items-center gap-2">
                                    <span className="text-slate-400">Indicative Cost:</span>
                                    <strong className="text-white font-bold">
                                        {treatment.indicativeCost.rangeDisplay}
                                    </strong>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative h-72 sm:h-84 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                            <Image
                                src={treatment.heroImage}
                                alt={treatment.name}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-14">
                    {/* 13. Treatment Overview */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Stethoscope className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">Treatment Overview</h2>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {treatment.overview.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            {treatment.overview.keyHighlights.map((hl, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs font-medium text-slate-700 flex items-start gap-2"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                    <span>{hl}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 14. When It May Be Considered */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 text-blue-600">
                            <FileCheck className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                When It May Be Considered (Clinical Indications)
                            </h2>
                        </div>
                        <ul className="space-y-2.5">
                            {treatment.indications.map((ind, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{ind}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* 15. Treatment Options & Approaches */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <h2 className="text-xl font-bold text-slate-900">Treatment Approaches & Options</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {treatment.options.map((opt, i) => (
                                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                                    <h3 className="text-sm font-bold text-slate-900">{opt.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{opt.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 16. Procedure Overview Steps */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-slate-900">Step-by-Step Procedural Workflow</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {treatment.procedureSteps.map((step) => (
                                <div key={step.step} className="p-4 rounded-xl border border-slate-100 bg-slate-50 space-y-2">
                                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">
                                        Step {step.step}
                                    </span>
                                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{step.detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 17. Potential Benefits and Risks */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-emerald-50/50 border border-emerald-200/80 p-6 rounded-2xl space-y-4">
                            <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                <h3>Potential Benefits</h3>
                            </div>
                            <ul className="space-y-2 text-xs text-slate-700">
                                {treatment.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-emerald-600 font-bold">•</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-amber-50/50 border border-amber-200/80 p-6 rounded-2xl space-y-4">
                            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                                <AlertTriangle className="w-5 h-5 text-amber-600" />
                                <h3>Clinical Risks & Considerations</h3>
                            </div>
                            <ul className="space-y-2 text-xs text-slate-700">
                                {treatment.risks.map((r, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-amber-600 font-bold">•</span>
                                        <span>{r}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 18. Recovery and Hospital Stay */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Recovery & Post-Operative Stay</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70">
                                <div className="text-[11px] text-slate-400 font-semibold uppercase">Inpatient Hospital Stay</div>
                                <div className="text-sm font-bold text-slate-900 mt-1">{treatment.recovery.hospitalStay}</div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70">
                                <div className="text-[11px] text-slate-400 font-semibold uppercase">Overall Travel Stay</div>
                                <div className="text-sm font-bold text-slate-900 mt-1">{treatment.recovery.overallStay}</div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70">
                                <div className="text-[11px] text-slate-400 font-semibold uppercase">Return to Normal Activity</div>
                                <div className="text-sm font-bold text-slate-900 mt-1">{treatment.recovery.returnToWork}</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 pt-1 leading-relaxed">{treatment.recovery.notes}</p>
                    </section>

                    {/* 19. Estimated Treatment Cost */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Estimated Treatment Cost</h2>
                                <p className="text-xs text-slate-500 mt-0.5">{treatment.indicativeCost.pricingBasis}</p>
                            </div>
                            <div className="text-2xl font-black text-slate-900">{treatment.indicativeCost.rangeDisplay}</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Standard Package Inclusions</h4>
                                <ul className="space-y-1.5 text-xs text-slate-600">
                                    {treatment.indicativeCost.inclusions.map((inc, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span>{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800">Important Package Exclusions</h4>
                                <ul className="space-y-1.5 text-xs text-slate-500">
                                    {treatment.indicativeCost.exclusions.map((exc, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                                            <span>{exc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 20. Available Hospitals */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Accredited Partner Hospitals</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {treatment.hospitals.map((hosp) => (
                                <div key={hosp.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center gap-4 p-4">
                                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                                        <Image src={hosp.image} alt={hosp.name} fill className="object-cover" />
                                    </div>
                                    <div className="min-w-0 space-y-1">
                                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">{hosp.accreditation}</span>
                                        <h3 className="text-sm font-bold text-slate-900 truncate">{hosp.name}</h3>
                                        <p className="text-xs text-slate-500">{hosp.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 21. Relevant Doctors */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Leading Specialist Consultants</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {treatment.doctors.map((doc) => (
                                <div key={doc.id} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-slate-200">
                                        <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                                    </div>
                                    <div className="min-w-0 space-y-0.5">
                                        <h3 className="text-sm font-bold text-slate-900 truncate">{doc.name}</h3>
                                        <p className="text-xs text-blue-600 font-medium truncate">{doc.title}</p>
                                        <p className="text-[11px] text-slate-400">{doc.experience} • {doc.hospital}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 22. Treatment-Specific FAQs */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Treatment FAQs</h2>
                        <div className="space-y-3">
                            {treatment.faqs.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                            className="w-full p-4 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 bg-slate-50/50"
                                        >
                                            <span>{faq.question}</span>
                                            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                        </button>
                                        {isOpen && <div className="p-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200">{faq.answer}</div>}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* 23. Related Treatments */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Related Clinical Procedures</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {treatment.relatedTreatments.map((rel) => (
                                <Link
                                    key={rel.slug}
                                    href={`/treatments/${rel.slug}`}
                                    className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:shadow-md transition space-y-2 block"
                                >
                                    <span className="text-[10px] text-blue-600 font-bold uppercase block">{rel.category}</span>
                                    <h4 className="text-xs font-bold text-slate-900 leading-snug">{rel.name}</h4>
                                    <div className="text-xs text-slate-500">From <strong>{rel.startingCost}</strong></div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar Sticky Column */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* 24. Inquiry Form */}
                    <div id="inquiry" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-24 space-y-4">
                        <div>
                            <h3 className="text-base font-bold text-slate-900">Request Cost Estimate</h3>
                            <p className="text-xs text-slate-500">Submit your inquiries or medical summaries for direct hospital evaluation.</p>
                        </div>
                        <TreatmentInquiryForm treatmentName={treatment.name} />
                    </div>

                    {/* 25. Medical Disclaimer */}
                    <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wide">Clinical Notice & Disclaimer</h4>
                            <p className="text-[11px] text-amber-900/80 leading-relaxed">
                                The information provided on this page is for educational reference only and does not constitute formal medical diagnosis or clinician advice. Formal therapeutic recommendations require in-person evaluation by qualified physicians.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}