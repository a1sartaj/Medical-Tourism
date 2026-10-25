"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageSquareQuote,
    ShieldCheck,
    Star,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import {
    PATIENT_TESTIMONIALS,
    type TestimonialItem,
} from "../data/patientTestimonials";

export default function PatientTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const totalItems = PATIENT_TESTIMONIALS.length; // 9 total items

    // Slides forward by 1 item with circular loop
    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, [totalItems]);

    // Slides backward by 1 item with circular loop
    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    }, [totalItems]);

    // Auto-slide every 4.5 seconds (pauses on hover)
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            handleNext();
        }, 4500);

        return () => clearInterval(interval);
    }, [isPaused, handleNext]);

    // Grabs exactly 3 consecutive items to display side-by-side
    const visibleItems: TestimonialItem[] = [
        PATIENT_TESTIMONIALS[currentIndex % totalItems],
        PATIENT_TESTIMONIALS[(currentIndex + 1) % totalItems],
        PATIENT_TESTIMONIALS[(currentIndex + 2) % totalItems],
    ];

    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50 border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto space-y-3"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        <MessageSquareQuote className="w-3.5 h-3.5" />
                        <span>Verified Patient Experiences</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        International Patient Feedback
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Real feedback shared by international patients regarding hospital facilitation, logistical support, and coordination services.
                    </p>
                </motion.div>

                {/* 3-Card Carousel Track */}
                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="relative overflow-hidden"
                >
                    <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {visibleItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                                                ))}
                                            </div>
                                            {item.consentVerified && (
                                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                                                    <ShieldCheck className="w-3.5 h-3.5" />
                                                    Consent Verified
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic line-clamp-4">
                                            &ldquo;{item.feedback}&rdquo;
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                                        {item.photo && (
                                            <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                                                <Image
                                                    src={item.photo}
                                                    alt={item.patientName}
                                                    fill
                                                    sizes="44px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                                                <span className="truncate">{item.patientName}</span>
                                                <span title={item.country}>{item.flag}</span>
                                            </div>
                                            <div className="text-[11px] text-blue-600 font-semibold truncate">
                                                {item.treatmentCategory}
                                            </div>
                                            <div className="text-[10px] text-slate-400 truncate">
                                                {item.hospitalName}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation & Step Indicators */}
                <div className="flex items-center justify-between pt-2">
                    {/* 9 Step Dots Indicator */}
                    <div className="flex items-center gap-1.5">
                        {PATIENT_TESTIMONIALS.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                aria-label={`Go to testimonial ${idx + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                                        ? "w-6 bg-blue-600"
                                        : "w-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Manual Arrow Controls */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handlePrev}
                            aria-label="Previous testimonial"
                            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition active:scale-95 shadow-sm"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next testimonial"
                            className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition active:scale-95 shadow-sm"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <p className="text-center text-[11px] text-slate-400 max-w-xl mx-auto">
                    Testimonials reflect individual administrative and non-clinical coordination experiences. Specific healthcare outcomes vary by individual diagnosis and clinical condition.
                </p>
            </div>
        </section>
    );
}