"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import type { DoctorProcedure } from "../data/doctorDetailsData";

export default function DoctorInquiryForm({
    doctorName,
    hospitalName,
    procedures,
}: {
    doctorName: string;
    hospitalName: string;
    procedures: DoctorProcedure[];
}) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        consultationType: "In-Person Consultation",
        procedure: procedures[0]?.name || "General Clinical Review",
        preferredDate: "",
        medicalSummary: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.phone) {
            toast.error("Please complete all required contact fields.");
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success("Consultation request forwarded to the clinical coordinator.");
        }, 1100);
    };

    if (isSubmitted) {
        return (
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-7 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                    Consultation Request Sent
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                    Your case details for <strong>{doctorName}</strong> at <strong>{hospitalName}</strong> have been received. A dedicated case manager will reach out within 24 hours to review your medical reports and schedule confirmation.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
            <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Patient Full Name *
                </label>
                <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Harbi"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Country of Residence *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Saudi Arabia"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                </div>

                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone / WhatsApp *
                    </label>
                    <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 50 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                </div>
            </div>

            <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                </label>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="patient@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Consultation Format
                    </label>
                    <select
                        value={formData.consultationType}
                        onChange={(e) =>
                            setFormData({ ...formData, consultationType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition appearance-none cursor-pointer"
                    >
                        <option value="In-Person Consultation">In-Person at Hospital</option>
                        <option value="Online Video Teleconsultation">Online Video Teleconsultation</option>
                        <option value="Written Second Opinion">Written Second Opinion</option>
                    </select>
                </div>

                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Target Procedure / Condition
                    </label>
                    <select
                        value={formData.procedure}
                        onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition appearance-none cursor-pointer"
                    >
                        {procedures.map((p) => (
                            <option key={p.slug} value={p.name}>
                                {p.name}
                            </option>
                        ))}
                        <option value="General Clinical Review">General Clinical Review</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Medical Summary & Existing Diagnosis
                </label>
                <textarea
                    rows={3}
                    value={formData.medicalSummary}
                    onChange={(e) =>
                        setFormData({ ...formData, medicalSummary: e.target.value })
                    }
                    placeholder="Briefly describe symptoms, current diagnoses, angiogram/scan details, or specific surgeon queries..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Submitting Inquiry..." : "Request Specialist Appointment"}</span>
            </motion.button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted transmission directly to coordinator and medical records desk</span>
            </div>
        </form>
    );
}