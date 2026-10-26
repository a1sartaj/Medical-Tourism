"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    Clock,
    CheckCircle2,
    ChevronDown,
    ArrowRight,
    ShieldAlert,
    ShieldCheck,
    UserCheck,
    Phone,
    HelpCircle,
    Building2,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { DETAILED_PROCESS_STEPS, HOW_IT_WORKS_FAQS } from "../data/howItWorksData";

export default function HowItWorksView() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Hero Header with Integrated Breadcrumbs */}
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "How It Works" }]} />
                    </div>

                    <div className="max-w-3xl space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                            <Clock className="w-3.5 h-3.5 text-blue-400" />
                            <span>Transparent 6-Stage Patient Workflow</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            How CaresDaddy Coordinates Your Care
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            From your initial medical inquiry to hospital admission in Delhi NCR and safe recovery back home, see how our coordination desk supports your healthcare journey.
                        </p>

                        <div className="pt-2 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition active:scale-95 flex items-center gap-2"
                            >
                                <span>Start Your Case Review</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="tel:+919818286609"
                                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4 text-blue-400" />
                                <span>Call +91 9818286609</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Workflow Timeline */}
            <main className="max-w-7xl mx-auto py-14 px-4 sm:px-8 space-y-16">
                <section className="space-y-8">
                    <div className="max-w-2xl space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Step-by-Step Medical Travel Pathway
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Every stage is mapped with clear actions so patients and accompanying family members always know what happens next.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {DETAILED_PROCESS_STEPS.map((stepItem, idx) => (
                            <motion.div
                                key={stepItem.step}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
                                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
                            >
                                <div className="p-6 sm:p-8 space-y-6">
                                    {/* Step Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                                        <div className="flex items-center gap-3.5">
                                            <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-mono font-black text-sm flex items-center justify-center shrink-0 border border-blue-200/60">
                                                {stepItem.step}
                                            </span>
                                            <div>
                                                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                                                    {stepItem.title}
                                                </h3>
                                                <p className="text-xs text-blue-600 font-medium">{stepItem.subtitle}</p>
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold self-start sm:self-auto">
                                            <Clock className="w-3.5 h-3.5 text-slate-500" />
                                            <span>{stepItem.estimatedTimeline}</span>
                                        </div>
                                    </div>

                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {stepItem.description}
                                    </p>

                                    {/* Dual Grid: Patient Actions vs CaresDaddy Role */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2.5">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                                                <UserCheck className="w-3.5 h-3.5 text-slate-600" />
                                                <span>What You Provide & Do</span>
                                            </h4>
                                            <ul className="space-y-2 text-xs text-slate-600">
                                                {stepItem.patientActions.map((action, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-slate-400 font-bold">•</span>
                                                        <span>{action}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200/70 space-y-2.5">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-1.5">
                                                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                                                <span>What CaresDaddy Manages</span>
                                            </h4>
                                            <ul className="space-y-2 text-xs text-slate-700">
                                                {stepItem.caresdaddyRole.map((role, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                                        <span>{role}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Clinical Disclaimer Notice */}
                <section className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-6 sm:p-7 flex items-start gap-3.5">
                    <ShieldAlert className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <div className="space-y-1.5">
                        <h3 className="text-xs font-bold text-blue-950 uppercase tracking-wide">
                            Clinical Authority & Responsibility Notice
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            CaresDaddy provides administrative case management, translation, logistics, and scheduling assistance. All medical evaluations, surgical procedures, medication regimens, and discharge authorizations are governed exclusively by treating hospital medical boards and certified clinical specialists.
                        </p>
                    </div>
                </section>

                {/* Workflow FAQs */}
                <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>Common Inquiries</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                            Frequently Asked Process Questions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {HOW_IT_WORKS_FAQS.map((faq, idx) => {
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

                {/* Final CTA Bar */}
                <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center space-y-6 border border-slate-800">
                    <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                            Ready to Plan Your Medical Treatment?
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Share your latest medical files for a confidential case review and transparent hospital estimate from our coordination desk in Saket, Delhi.
                        </p>
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
                            >
                                <FileText className="w-4 h-4" />
                                <span>Submit Reports for Evaluation</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/patient-services"
                                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl border border-white/20 transition flex items-center justify-center gap-2"
                            >
                                <span>View All Patient Services</span>
                            </Link>
                        </div>
                        <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Zero agency markups • Invoices issued directly by accredited hospitals</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}