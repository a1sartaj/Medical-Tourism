"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircleQuestion } from "lucide-react";
import { TREATMENT_PAGE_FAQS } from "../data/treatmentFaqs";

export default function TreatmentFaqs() {
    const [activeFaqId, setActiveFaqId] = useState<string | null>(
        TREATMENT_PAGE_FAQS[0]?.id ?? null
    );

    const toggleFaq = (id: string) => {
        setActiveFaqId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-white border-t border-slate-200/80">
            <div className="max-w-4xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto space-y-3"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Common Questions</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Treatment Selection & Booking FAQs
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Essential information regarding treatment estimates, preliminary specialist evaluations, and hospital coordination.
                    </p>
                </motion.div>

                <div className="space-y-3">
                    {TREATMENT_PAGE_FAQS.map((faq, idx) => {
                        const isOpen = activeFaqId === faq.id;

                        return (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: idx * 0.04,
                                    ease: "easeOut",
                                }}
                                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${isOpen
                                        ? "bg-white border-blue-500/50 shadow-md shadow-blue-500/5"
                                        : "bg-slate-50/70 border-slate-200/90 hover:border-slate-300"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-sm sm:text-base font-bold text-slate-900">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`p-1.5 rounded-lg transition-transform duration-200 shrink-0 ${isOpen
                                                ? "rotate-180 bg-blue-50 text-blue-600"
                                                : "bg-white border border-slate-200 text-slate-500"
                                            }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center pt-2">
                    <p className="text-xs text-slate-500">
                        Need clarity on a specific clinical procedure?{" "}
                        <Link
                            href="/contact"
                            className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1 ml-1"
                        >
                            <MessageCircleQuestion className="w-3.5 h-3.5" />
                            <span>Submit a direct inquiry to our medical board</span>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}