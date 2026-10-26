"use client";

import Image from "next/image";
import Link from "next/link";
import {
    GraduationCap,
    Building2,
    MapPin,
    ShieldCheck,
    Calendar,
    Languages,
    Clock,
    ArrowRight,
    ShieldAlert,
    FileCheck2,
    Stethoscope,
    ExternalLink,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import DoctorInquiryForm from "./DoctorInquiryForm";
import type { DoctorDetail } from "../data/doctorDetailsData";

export default function DoctorDetailView({
    doctor,
}: {
    doctor: DoctorDetail;
}) {
    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Sections 34, 35 & 36: Doctor Profile Header with Integrated Breadcrumbs */}
            <section className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-6">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs
                            items={[
                                { label: "Doctors", href: "/doctors" },
                                { label: doctor.name },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                        <div className="lg:col-span-8 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                    {doctor.specialty}
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-400/20">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Verified Clinical Specialist</span>
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                {doctor.name}
                            </h1>

                            <p className="text-sm sm:text-base text-slate-300 font-medium">
                                {doctor.designation}
                            </p>

                            {/* Section 42: Associated Hospital Affiliation */}
                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                                <span>
                                    Primary Affiliation:{" "}
                                    <Link
                                        href={`/hospitals/${doctor.hospital.slug}`}
                                        className="font-bold text-white hover:text-blue-300 underline inline-flex items-center gap-1"
                                    >
                                        <span>{doctor.hospital.name}</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </Link>{" "}
                                    • {doctor.hospital.location}
                                </span>
                            </div>

                            {/* Key Highlights Bar */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Experience
                                    </span>
                                    <span className="text-sm font-bold text-white">
                                        {doctor.experienceYears}+ Years
                                    </span>
                                </div>

                                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Registration
                                    </span>
                                    <span className="text-sm font-bold text-white truncate block">
                                        {doctor.registrationNumber}
                                    </span>
                                </div>

                                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 col-span-2 sm:col-span-1">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Languages
                                    </span>
                                    <span className="text-sm font-bold text-white">
                                        {doctor.languages.join(", ")}
                                    </span>
                                </div>
                            </div>

                            <div className="pt-2 flex flex-wrap gap-4">
                                <a
                                    href="#inquiry"
                                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition active:scale-95 flex items-center gap-2"
                                >
                                    <span>Book In-Person / Online Consult</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Section 36: Professional Photograph */}
                        <div className="lg:col-span-4 flex justify-center lg:justify-end">
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-800">
                                <Image
                                    src={doctor.photo}
                                    alt={doctor.name}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8 space-y-12">
                    {/* Section 39: Professional Biography */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Stethoscope className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">Professional Biography</h2>
                        </div>
                        <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {doctor.biography.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Section 40: Areas of Specialization */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">Clinical Focus & Specializations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {doctor.specializations.map((spec, i) => (
                                <div
                                    key={i}
                                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs font-semibold text-slate-800"
                                >
                                    <FileCheck2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                    <span>{spec}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 37 & 45: Qualifications, Credentials & Medical Registrations */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
                        <div className="flex items-center gap-2 text-blue-600">
                            <GraduationCap className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">
                                Education, Fellowships & Registrations
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                                    Primary Medical Degree & Post-Graduation
                                </span>
                                <p className="text-sm font-bold text-slate-900">
                                    {doctor.qualifications}
                                </p>
                            </div>

                            <div className="space-y-2 pt-2 border-t border-slate-100">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                                    Fellowships & Board Memberships
                                </span>
                                <ul className="space-y-2 text-xs text-slate-600">
                                    {doctor.credentialsList.map((cred, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-blue-600 font-bold">•</span>
                                            <span>{cred}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-between text-xs">
                                <div>
                                    <span className="text-[10px] font-bold uppercase text-emerald-800 block">
                                        Statutory Medical Council Registration
                                    </span>
                                    <span className="font-bold text-slate-900 mt-0.5 block">
                                        {doctor.registrationNumber} — {doctor.registrationCouncil}
                                    </span>
                                </div>
                                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                            </div>
                        </div>
                    </section>

                    {/* Section 41: Associated Treatments & Procedures */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                            Associated Procedures & Indicative Pricing
                        </h2>
                        <div className="space-y-3">
                            {doctor.procedures.map((proc, idx) => (
                                <div
                                    key={`${proc.slug}-${idx}`}
                                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 transition flex items-center justify-between gap-4 group"
                                >
                                    <div>
                                        <span className="text-[10px] font-bold uppercase text-blue-600 block">
                                            {proc.category}
                                        </span>
                                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
                                            <Link href={`/treatments/${proc.slug}`}>{proc.name}</Link>
                                        </h4>
                                        <span className="text-xs text-slate-500 mt-0.5 block">
                                            Indicative Hospital Cost: <strong>{proc.startingCost}</strong>
                                        </span>
                                    </div>
                                    <Link
                                        href={`/treatments/${proc.slug}`}
                                        className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition shrink-0"
                                        title="View treatment clinical workflow"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 43: Consultation Schedule */}
                    <section className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Calendar className="w-5 h-5" />
                            <h2 className="text-xl font-bold text-slate-900">OPD & Telemedicine Schedule</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {doctor.opdSchedule.map((slot, i) => (
                                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                                    <span className="text-xs font-bold text-blue-600 block">{slot.mode}</span>
                                    <div className="text-sm font-bold text-slate-900">{slot.days}</div>
                                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                                        <span>{slot.timings}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-[11px] text-slate-400 italic">
                            Emergency surgeries and hospital rounds may cause minor alterations. Prior appointment confirmation is required.
                        </p>
                    </section>

                    {/* Section 47: Related Doctors */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-900">
                            Related Specialists in Department
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {doctor.relatedDoctors.map((rel) => (
                                <Link
                                    key={rel.slug}
                                    href={`/doctors/${rel.slug}`}
                                    className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition flex items-center gap-4 group"
                                >
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-100 bg-slate-100 shrink-0">
                                        <Image src={rel.photo} alt={rel.name} fill className="object-cover" />
                                    </div>
                                    <div className="min-w-0 space-y-0.5">
                                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition truncate">
                                            {rel.name}
                                        </h4>
                                        <p className="text-xs text-blue-600 font-medium truncate">{rel.specialty}</p>
                                        <p className="text-[11px] text-slate-400 truncate">
                                            {rel.experience} • {rel.hospitalName}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar Sticky Column */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Section 46: Consultation Inquiry Form */}
                    <div
                        id="inquiry"
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md sticky top-30 space-y-4"
                    >
                        <div>
                            <h3 className="text-base font-bold text-slate-900">
                                Book Specialist Consultation
                            </h3>
                            <p className="text-xs text-slate-500">
                                Direct inquiry routed to case management at {doctor.hospital.name}.
                            </p>
                        </div>
                        <DoctorInquiryForm
                            doctorName={doctor.name}
                            hospitalName={doctor.hospital.name}
                            procedures={doctor.procedures}
                        />
                    </div>

                    {/* Section 48: Medical Disclaimer */}
                    <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                                Clinical Practice Disclaimer
                            </h4>
                            <p className="text-[11px] text-amber-900/80 leading-relaxed">
                                Doctor profile credentials, verified qualifications, and hospital affiliations are provided for educational purposes. Online summaries and preliminary inquiries do not constitute a physician-patient relationship. Formal therapeutic recommendations require in-person clinical examinations and diagnostic verifications.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}