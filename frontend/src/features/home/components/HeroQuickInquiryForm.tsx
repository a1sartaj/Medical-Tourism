"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    FileText,
    ShieldCheck,
    ArrowRight,
    Loader2,
    Lock,
    Stethoscope,
    Globe2,
} from "lucide-react";
import { toast } from "sonner";

const POPULAR_TREATMENTS = [
    "Robotic Knee Replacement",
    "Coronary Artery Bypass (CABG)",
    "IVF & Fertility Treatment",
    "Spine Disc Surgery",
    "Oncology / Cancer Care",
    "Organ Transplant Facilitation",
    "Other Tertiary Care",
];

export default function HeroQuickInquiryForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phoneOrWhatsApp: "",
        country: "",
        treatment: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName.trim() || !formData.phoneOrWhatsApp.trim()) {
            toast.error("Please fill in your name and contact number.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Mock API call simulation
            await new Promise((resolve) => setTimeout(resolve, 800));

            toast.success("Case assessment initiated!", {
                description:
                    "Our Saket desk will WhatsApp/call you with doctor availability.",
            });

            // Reset form
            setFormData({
                fullName: "",
                phoneOrWhatsApp: "",
                country: "",
                treatment: "",
            });

            // Clean redirect to contact page without query parameters
            router.push("/contact");
        } catch {
            toast.error("Something went wrong. Please call helpline directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/20 text-slate-900">
            {/* Top Value Badge */}
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                    <span>Priority Clinical Review</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    Free 24h Assessment
                </span>
            </div>

            <div className="pt-4 space-y-1">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    Get Free Hospital & Cost Estimate
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                    Direct quotes from Max Saket, Medanta, and Fortis specialists.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                {/* Full Name */}
                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Patient or Attendant Name
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition"
                    />
                </div>

                {/* WhatsApp / Phone with country code */}
                <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        WhatsApp / Mobile Number
                    </label>
                    <input
                        type="tel"
                        required
                        value={formData.phoneOrWhatsApp}
                        onChange={(e) =>
                            setFormData({ ...formData, phoneOrWhatsApp: e.target.value })
                        }
                        placeholder="e.g. +971 50 123 4567"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition"
                    />
                </div>

                {/* Country & Treatment Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Country
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={formData.country}
                                onChange={(e) =>
                                    setFormData({ ...formData, country: e.target.value })
                                }
                                placeholder="e.g. UAE / Oman"
                                className="w-full pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition"
                            />
                            <Globe2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Select Procedure
                        </label>
                        <select
                            value={formData.treatment}
                            onChange={(e) =>
                                setFormData({ ...formData, treatment: e.target.value })
                            }
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition cursor-pointer"
                        >
                            <option value="">Select Treatment...</option>
                            {POPULAR_TREATMENTS.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Checking Doctor Availability...</span>
                        </>
                    ) : (
                        <>
                            <FileText className="w-4 h-4" />
                            <span>Get Free Hospital Estimates</span>
                            <ArrowRight className="w-4 h-4 ml-0.5" />
                        </>
                    )}
                </button>
            </form>

            {/* Security & Confidentiality Trust Footer */}
            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Confidential</span>
                </span>
                <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Saket Desk Support</span>
                </span>
            </div>
        </div>
    );
}