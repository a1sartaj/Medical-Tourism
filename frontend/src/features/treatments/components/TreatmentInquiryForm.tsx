"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function TreatmentInquiryForm({
    treatmentName,
}: {
    treatmentName: string;
}) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        medicalSummary: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.phone || !formData.email) {
            toast.error("Please fill in all required contact fields.");
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success("Treatment inquiry submitted successfully.");
        }, 1200);
    };

    if (isSubmitted) {
        return (
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                    Inquiry Successfully Received
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our international patient coordination desk in Saket, Delhi has received your details for <strong>{treatmentName}</strong>. A case manager will contact you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Tariq Al-Harbi"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Country of Residence *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) =>
                            setFormData({ ...formData, country: e.target.value })
                        }
                        placeholder="e.g. Kenya, Uzbekistan, Saudi Arabia"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                    </label>
                    <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+966 50 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 transition"
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Medical Condition / Diagnosis
                </label>
                <textarea
                    rows={3}
                    value={formData.medicalSummary}
                    onChange={(e) =>
                        setFormData({ ...formData, medicalSummary: e.target.value })
                    }
                    placeholder="Briefly describe symptoms, current doctor recommendations, or attach report links..."
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
                <span>{isSubmitting ? "Submitting Inquiry..." : "Request Treatment Assessment & Quote"}</span>
            </motion.button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Data is protected and shared solely with hospital clinical boards</span>
            </div>
        </form>
    );
}