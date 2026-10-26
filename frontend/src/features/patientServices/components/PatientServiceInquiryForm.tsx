"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const SERVICES_OPTIONS = [
    { id: "consult", label: "Medical Consultation & Estimates" },
    { id: "visa", label: "Medical Visa Invitation Letter" },
    { id: "transport", label: "Airport Pickup & Local Transport" },
    { id: "hotel", label: "Accommodation Booking Near Hospital" },
    { id: "interpreter", label: "Language Interpreter Support" },
];

export default function PatientServiceInquiryForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        selectedServices: ["consult", "visa"] as string[],
        notes: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleService = (id: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedServices: prev.selectedServices.includes(id)
                ? prev.selectedServices.filter((s) => s !== id)
                : [...prev.selectedServices, id],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.phone || !formData.email) {
            toast.error("Please fill in all required contact details.");
            return;
        }

        if (formData.selectedServices.length === 0) {
            toast.error("Please select at least one required service.");
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success("Patient service inquiry sent successfully.");
        }, 1100);
    };

    if (isSubmitted) {
        return (
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-7 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                    Inquiry Successfully Sent
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Our international patient care desk in Saket, Delhi will review your selected logistics requirements and reach out within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Country of Residence *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Saudi Arabia, Kenya, Uzbekistan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone / WhatsApp Number *
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
            </div>

            {/* Services Checkboxes */}
            <div className="space-y-1.5 pt-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Services You Need Assistance With:
                </label>
                <div className="space-y-1.5">
                    {SERVICES_OPTIONS.map((srv) => {
                        const isChecked = formData.selectedServices.includes(srv.id);
                        return (
                            <label
                                key={srv.id}
                                onClick={() => toggleService(srv.id)}
                                className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition flex items-center gap-2.5 select-none ${isChecked
                                        ? "bg-blue-50 border-blue-500/50 text-blue-900"
                                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    readOnly
                                    className="rounded border-slate-300 text-blue-600 focus:ring-0"
                                />
                                <span>{srv.label}</span>
                            </label>
                        );
                    })}
                </div>
            </div>

            <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Medical Summary or Flight Information
                </label>
                <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Briefly state your medical condition, proposed arrival date, or specific requests..."
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
                <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Service Request"}</span>
            </motion.button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Secure handling by international patient desk in Saket, Delhi</span>
            </div>
        </form>
    );
}