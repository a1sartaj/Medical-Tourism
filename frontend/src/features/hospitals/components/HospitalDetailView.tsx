"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    ShieldCheck,
    Building2,
    BedDouble,
    Users,
    Calendar,
    Languages,
    Phone,
    Mail,
    ChevronDown,
    ArrowRight,
    Star,
    ExternalLink,
    CheckCircle2,
    AlertCircle,
    HelpCircle,
    Stethoscope,
    Plane,
    Navigation,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import HospitalInquiryForm from "./HospitalInquiryForm";
import type { HospitalDetail } from "../data/hospitalDetailsData";

export default function HospitalDetailView({
    hospital,
}: {
    hospital: HospitalDetail;
}) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);


    // Flatten treatments for easy passing to inquiry dropdown
    const allTreatments = hospital.specialties.flatMap((s) => s.treatments);

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Section 1: Hospital Header with Integrated Breadcrumbs */}
            <section className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-6">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs
                            items={[
                                { label: "Hospitals", href: "/hospitals" },
                                { label: hospital.name },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                        <div className="lg:col-span-7 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                    {hospital.about.hospitalType}
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                                    <span>
                                        {hospital.city}, {hospital.country}
                                    </span>
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                {hospital.name}
                            </h1>

                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                                {hospital.shortOverview}
                            </p>

                            {/* Accreditations Badges in Header */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                {hospital.accreditations.map((acc) => (
                                    <span
                                        key={acc}
                                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-400/20 backdrop-blur-sm"
                                    >
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>{acc}</span>
                                    </span>
                                ))}
                            </div>

                            <div className="pt-2 flex flex-wrap gap-4">
                                <a
                                    href="#inquiry"
                                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition active:scale-95 flex items-center gap-2"
                                >
                                    <span>Request Hospital Consultation</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#location"
                                    className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition flex items-center gap-2"
                                >
                                    <Navigation className="w-4 h-4 text-blue-400" />
                                    <span>Travel & Location Info</span>
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative h-72 sm:h-84 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                            <Image
                                src={hospital.mainImage}
                                alt={hospital.name}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Body */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-12">
                    {/* Section 2: About the Hospital */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Building2 className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">About the Hospital</h2>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                            {hospital.about.overview}
                        </p>

                        {/* Quick Fact Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                    Established
                                </span>
                                <span className="text-base font-extrabold text-slate-900">
                                    {hospital.about.establishedYear}
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                    Total Beds
                                </span>
                                <span className="text-base font-extrabold text-slate-900">
                                    {hospital.about.bedCount}+
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                    Critical Care ICUs
                                </span>
                                <span className="text-base font-extrabold text-slate-900">
                                    {hospital.about.icuBeds} Beds
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                    Operation Theatres
                                </span>
                                <span className="text-base font-extrabold text-slate-900">
                                    {hospital.about.operatingTheatres} Suites
                                </span>
                            </div>
                        </div>

                        {/* Supported Languages */}
                        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mr-2">
                                <Languages className="w-4 h-4 text-blue-600" />
                                <span>Supported Consultation Languages:</span>
                            </span>
                            {hospital.about.languagesSupported.map((lang) => (
                                <span
                                    key={lang}
                                    className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Specialties and Treatments & Section 9: Indicative Costs */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                            <div className="space-y-1">
                                <h2 className="text-xl font-bold text-slate-900">
                                    Specialties & Procedures Offered
                                </h2>
                                <p className="text-xs text-slate-500">
                                    Official departments and procedural starting estimates at this facility.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {hospital.specialties.map((spec) => (
                                <div key={spec.category} className="space-y-3">
                                    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                                        <Stethoscope className="w-4 h-4 text-blue-600" />
                                        <span>{spec.category}</span>
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {spec.treatments.map((t) => (
                                            <div
                                                key={t.slug}
                                                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 transition flex items-center justify-between gap-3 group"
                                            >
                                                <div className="min-w-0">
                                                    <Link
                                                        href={`/treatments/${t.slug}`}
                                                        className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition truncate block"
                                                    >
                                                        {t.name}
                                                    </Link>
                                                    <span className="text-[11px] text-slate-500">
                                                        Indicative: <strong className="text-slate-900">{t.indicativeCost}</strong>
                                                    </span>
                                                </div>
                                                <Link
                                                    href={`/treatments/${t.slug}`}
                                                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition shrink-0"
                                                    title="View clinical details"
                                                >
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                            <span>
                                <strong>Cost Estimate Notice:</strong> Indicative prices represent baseline uncomplicated procedures. The treating medical board confirms the final invoice based on in-person diagnostic assessments.
                            </span>
                        </div>
                    </section>

                    {/* Section 4: Doctors Associated with Hospital */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">
                                Senior Consultants & Specialists
                            </h2>
                            <span className="text-xs text-slate-400">
                                Verified Medical Faculty
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {hospital.doctors.map((doc) => (
                                <div
                                    key={doc.id}
                                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between"
                                >
                                    <div className="space-y-3">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 bg-slate-100">
                                            <Image
                                                src={doc.photo}
                                                alt={doc.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900 leading-snug">
                                                {doc.name}
                                            </h3>
                                            <p className="text-xs text-blue-600 font-semibold mt-0.5">
                                                {doc.specialty}
                                            </p>
                                            <p className="text-[11px] text-slate-500 mt-1">
                                                {doc.qualifications}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                        <span className="text-slate-400">{doc.experience}</span>
                                        <a
                                            href="#inquiry"
                                            className="font-bold text-blue-600 hover:underline"
                                        >
                                            Book Consult
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5: Facilities and Services */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-slate-900">
                            Verified Hospital Infrastructure & Equipment
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {hospital.facilities.map((fac) => (
                                <div key={fac.category} className="space-y-2.5">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-1.5">
                                        {fac.category}
                                    </h3>
                                    <ul className="space-y-2 text-xs text-slate-600">
                                        {fac.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 6: Hospital Credentials */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 text-emerald-700">
                            <ShieldCheck className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Accreditations & Government Registrations
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {hospital.credentials.map((cred, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 space-y-1"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xs font-bold text-slate-900">
                                            {cred.body}
                                        </h3>
                                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                                            {cred.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {cred.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 8: International Patient Support Scope */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">
                                International Patient Support Distribution
                            </h2>
                            <p className="text-xs text-slate-500 mt-1">
                                Clear transparency distinguishing hospital-provided services from CaresDaddy coordination.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-blue-600" />
                                    <span>Hospital-Provided Services</span>
                                </h3>
                                <ul className="space-y-2 text-xs text-slate-600">
                                    {hospital.internationalSupport.hospitalProvided.map((s, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-blue-600 font-bold">•</span>
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-200 space-y-3">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                                    <Plane className="w-4 h-4 text-blue-600" />
                                    <span>CaresDaddy On-Ground Assistance</span>
                                </h3>
                                <ul className="space-y-2 text-xs text-slate-700">
                                    {hospital.internationalSupport.caresdaddyCoordinated.map((s, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-blue-600 font-bold">•</span>
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 10: Patient Reviews */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                            Verified Patient Feedback
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {hospital.reviews.map((rev) => (
                                <div
                                    key={rev.id}
                                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-amber-400">
                                            {[...Array(rev.rating)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                                            ))}
                                        </div>
                                        <span className="text-[11px] text-slate-400">{rev.date}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed italic">
                                        &ldquo;{rev.comment}&rdquo;
                                    </p>
                                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                            <span>{rev.author}</span>
                                            <span>{rev.flag}</span>
                                        </div>
                                        <span className="text-[10px] text-blue-600 font-semibold">
                                            {rev.treatmentName}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 11: Hospital FAQs */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                            Hospital Inquiries & FAQs
                        </h2>
                        <div className="space-y-3">
                            {hospital.faqs.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="border border-slate-200 rounded-xl overflow-hidden"
                                    >
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

                    {/* Section 13: Related Hospitals */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                            Other Accredited Hospitals in Region
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {hospital.relatedHospitals.map((rel) => (
                                <Link
                                    key={rel.slug}
                                    href={`/hospitals/${rel.slug}`}
                                    className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-500 hover:shadow-md transition space-y-2 block p-3 group"
                                >
                                    <div className="relative h-28 w-full rounded-lg overflow-hidden bg-slate-100">
                                        <Image
                                            src={rel.image}
                                            alt={rel.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-blue-600 uppercase">
                                            {rel.hospitalType}
                                        </span>
                                        <h4 className="text-xs font-bold text-slate-900 truncate">
                                            {rel.name}
                                        </h4>
                                        <p className="text-[11px] text-slate-400">{rel.city}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sticky Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Section 12: Inquiry Form */}
                    <div
                        id="inquiry"
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-30 space-y-4"
                    >
                        <div>
                            <h3 className="text-base font-bold text-slate-900">
                                Hospital Consultation Request
                            </h3>
                            <p className="text-xs text-slate-500">
                                Direct inquiry submitted to international coordination desk.
                            </p>
                        </div>
                        <HospitalInquiryForm
                            hospitalName={hospital.name}
                            treatments={allTreatments}
                        />
                    </div>

                    {/* Section 7: Location and Contact Card */}
                    <div
                        id="location"
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
                    >
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            <span>Location & Access Guidance</span>
                        </h3>

                        <div className="space-y-3 text-xs text-slate-600">
                            <div>
                                <strong className="text-slate-800 block">Address:</strong>
                                <p className="mt-0.5">{hospital.location.address}</p>
                                <p className="text-[11px] text-slate-400 mt-0.5">
                                    ({hospital.location.landmark})
                                </p>
                            </div>

                            <div className="pt-2 border-t border-slate-100 space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <Plane className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                    <span>{hospital.location.airportDistance}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Navigation className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                    <span>{hospital.location.metroDistance}</span>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-slate-100 space-y-1">
                                <a
                                    href={`tel:${hospital.location.phone}`}
                                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
                                >
                                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                                    <span>{hospital.location.phone}</span>
                                </a>
                                <a
                                    href={`mailto:${hospital.location.email}`}
                                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
                                >
                                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                                    <span>{hospital.location.email}</span>
                                </a>
                            </div>

                            <p className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                                {hospital.location.travelGuidance}
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}