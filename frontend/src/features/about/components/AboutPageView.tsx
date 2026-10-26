"use client";

import Link from "next/link";
import {
    Building2,
    ShieldCheck,
    HeartHandshake,
    Users,
    Award,
    Stethoscope,
    ArrowRight,
    MapPin,
    CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";

export default function AboutPageView() {
    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Header */}
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "About Us" }]} />
                    </div>

                    <div className="max-w-3xl space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                            <Building2 className="w-3.5 h-3.5 text-blue-400" />
                            <span>Headquartered in Saket, New Delhi</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            About CaresDaddy
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            Dedicated to clinical integrity, logistical transparency, and patient-first advocacy. We bridge the gap between global patients and India's finest accredited healthcare campuses.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-14 px-4 sm:px-8 space-y-16">
                {/* Mission & Purpose */}
                <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider">
                            <HeartHandshake className="w-4 h-4" />
                            <span>Our Foundational Mission</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                            Demystifying Cross-Border Healthcare With Absolute Candor
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Seeking specialized medical surgery in a foreign country can be overwhelming. CaresDaddy was established with one guiding premise: patients deserve unfiltered access to top clinical specialists without opaque markups, inflated package prices, or commercial pressure.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Based on-ground in Saket, Delhi—the epicentre of quaternary medical institutions in South Asia—our case coordinators act as your independent family advocates from arrival to safe recovery.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                            <span className="text-2xl font-black text-blue-600">JCI & NABH</span>
                            <h3 className="text-xs font-bold text-slate-900">Accredited Network</h3>
                            <p className="text-[11px] text-slate-500">Only vetted institutions meeting global patient safety standards.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                            <span className="text-2xl font-black text-emerald-600">0% Agency Fee</span>
                            <h3 className="text-xs font-bold text-slate-900">Direct Invoicing</h3>
                            <p className="text-[11px] text-slate-500">All medical bills are paid directly to treating hospitals.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                            <span className="text-2xl font-black text-blue-600">24/7 Desk</span>
                            <h3 className="text-xs font-bold text-slate-900">On-Ground Support</h3>
                            <p className="text-[11px] text-slate-500">Airport pickups, translation, and local apartment facilitation.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                            <span className="text-2xl font-black text-emerald-600">100% Ethical</span>
                            <h3 className="text-xs font-bold text-slate-900">Clinical Non-Interference</h3>
                            <p className="text-[11px] text-slate-500">Doctors decide treatment; we coordinate the logistics.</p>
                        </div>
                    </div>
                </section>

                {/* Operating Pillars */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 text-center">
                        How We Differ From Conventional Medical Agents
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-7 rounded-2xl border border-slate-200 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900">True Patient Advocacy</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                We represent the patient, not hospital balance sheets. If a conservative medical protocol serves you better than surgery, our affiliated physicians will state so candidly.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-slate-200 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Award className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900">Verified Doctor Credentials</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Every doctor featured on CaresDaddy possesses verifiable council registrations, decades of clinical experience, and proven procedural outcomes.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-slate-200 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900">Physical Saket Presence</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                We are not an anonymous web portal. Our physical coordination facility in Saket allows case managers to accompany you to daily hospital rounds.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 border border-slate-800">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                        Consult With Our Case Management Team
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                        Have questions regarding hospital choices, doctors, or travel arrangements? Speak directly with our international desk in Saket, Delhi.
                    </p>
                    <div className="pt-2 flex justify-center gap-3">
                        <Link
                            href="/contact"
                            className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition flex items-center gap-2"
                        >
                            <span>Contact Us Today</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}