"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS } from "../data/faqs";

export default function FAQAccordion() {
    const [openId, setOpenId] = useState<string | null>(HOME_FAQS[0].id);

    const toggleFAQ = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="max-w-3xl mx-auto space-y-3">
            {HOME_FAQS.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                    <div
                        key={faq.id}
                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                                ? "bg-white border-blue-500/50 shadow-md shadow-blue-500/5"
                                : "bg-white/80 border-slate-200/90 hover:border-slate-300"
                            }`}
                    >
                        <button
                            type="button"
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                            aria-expanded={isOpen}
                        >
                            <span className="text-sm sm:text-base font-bold text-slate-900">
                                {faq.question}
                            </span>
                            <span
                                className={`p-1.5 rounded-lg transition-transform duration-200 shrink-0 ${isOpen
                                        ? "rotate-180 bg-blue-50 text-blue-600"
                                        : "bg-slate-100 text-slate-500"
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
                                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}