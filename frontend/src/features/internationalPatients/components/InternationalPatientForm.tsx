"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck, CheckCircle2, Globe2 } from "lucide-react";
import { toast } from "sonner";

export default function InternationalPatientForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        country: "",
        primaryLanguage: "Arabic",
        phone: "",
        email: "",
        specialty: "Cardiology",
        sponsorship: "Self-Pay",
        medicalNotes: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.country || !formData.phone || !formData.email) {
            toast.error("Please fill in all mandatory contact information.");
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success("International patient intake request submitted.");
        }, 1100);
    };

    if (isSubmitted) {
        return (
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-7 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                    International Desk Request Received
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Our regional desk manager in Saket, Delhi will review your medical inquiry and respond within 24 hours in your preferred language.
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
                        Country of Origin *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Uzbekistan, Kenya, Oman"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                </div>

                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Preferred Language
                    </label>
                    <select
                        value={formData.primaryLanguage}
                        onChange={(e) => setFormData({ ...formData, primaryLanguage: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition appearance-none cursor-pointer"
                    >
                        <option value="Arabic">Arabic (العربية)</option>
                        <option value="Russian">Russian (Русский)</option>
                        <option value="French">French (Français)</option>
                        <option value="English">English</option>
                        <option value="Swahili">Swahili</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Uzbek">Uzbek</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone / WhatsApp (With Country Code) *
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Clinical Specialty
                    </label>
                    <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition appearance-none cursor-pointer"
                    >
                        <option value="Cardiology">Cardiology & Cardiac Surgery</option>
                        <option value="Orthopedics">Orthopedics & Joint Replacement</option>
                        <option value="Oncology">Oncology & Hematology</option>
                        <option value="Neurology">Neurology & Spine Surgery</option>
                        <option value="Transplants">Organ Transplantation</option>
                        <option value="Other">Other Specialized Treatment</option>
                    </select>
                </div>

                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Financial / Payment Mode
                    </label>
                    <select
                        value={formData.sponsorship}
                        onChange={(e) => setFormData({ ...formData, sponsorship: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition appearance-none cursor-pointer"
                    >
                        <option value="Self-Pay">Self-Pay / Private Funds</option>
                        <option value="Embassy-Sponsored">Embassy / Health Ministry Sponsored</option>
                        <option value="Corporate-Insurance">Corporate / Third-Party Insurance</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Medical Condition Summary
                </label>
                <textarea
                    rows={3}
                    value={formData.medicalNotes}
                    onChange={(e) => setFormData({ ...formData, medicalNotes: e.target.value })}
                    placeholder="Briefly state existing symptoms, previous operations, or questions regarding visa and hospitals..."
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
                <span>{isSubmitting ? "Connecting to Regional Desk..." : "Request Regional Coordinator Support"}</span>
            </motion.button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted international patient records portal • Saket, Delhi</span>
            </div>
        </form>
    );
}