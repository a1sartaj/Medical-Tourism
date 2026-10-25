"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UserCheck, FileText, ArrowRight, Phone } from "lucide-react";

export default function DoctorInquiryCta() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-semibold">
                    <UserCheck className="w-4 h-4 text-blue-400" />
                    <span>Independent Case Coordination</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                    Need Guidance Matching the Right Specialist?
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
                    Share your latest diagnostic files and treatment history. Our medical desk in Saket coordinates confidential second opinions with certified senior consultants across our hospital network.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact?type=doctor-matching"
                        className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                    >
                        <FileText className="w-4 h-4 text-blue-200" />
                        <span>Submit Reports for Evaluation</span>
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