"use client";

import { motion } from "framer-motion";
import { HelpCircle, AlertCircle } from "lucide-react";
import { WHY_CHOOSE_US } from "../data/whyChooseUs";

export default function WhyChooseUs() {
    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50 border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header Text */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="max-w-2xl space-y-3"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Dedicated Patient Facilitation</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Why Choose CaresDaddy.com?
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        We provide structured, non-clinical travel and administrative support to make receiving medical treatment abroad clear, dependable, and manageable[cite: 1].
                    </p>
                </motion.div>

                {/* Value Proposition Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WHY_CHOOSE_US.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.35,
                                    delay: idx * 0.06,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -3 }}
                                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Important Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
                    className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-5 flex items-start gap-3.5"
                >
                    <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wide">
                            Important Medical Notice
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            CaresDaddy.com operates strictly as an international healthcare travel facilitator and does not independently provide medical treatment, clinical diagnoses, or guarantees regarding healthcare outcomes[cite: 1]. All medical assessments, surgical eligibility decisions, and clinical care plans remain solely under the authority of licensed healthcare professionals and treating hospital teams[cite: 1].
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}