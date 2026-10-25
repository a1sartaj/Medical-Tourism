"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Camera,
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2,
    ArrowRight,
    Building2,
} from "lucide-react";
import { GALLERY_ITEMS, type GalleryItem } from "../data/gallery";

const CATEGORIES = ["All", "Hospitals", "Facilities", "Patient Services"] as const;

export default function MedicalGallery() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const filteredItems: GalleryItem[] =
        selectedCategory === "All"
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

    const handleNext = useCallback(() => {
        if (activeIndex === null) return;
        setActiveIndex((prev) => ((prev as number) + 1) % filteredItems.length);
    }, [activeIndex, filteredItems.length]);

    const handlePrev = useCallback(() => {
        if (activeIndex === null) return;
        setActiveIndex(
            (prev) => ((prev as number) - 1 + filteredItems.length) % filteredItems.length
        );
    }, [activeIndex, filteredItems.length]);

    const handleClose = useCallback(() => {
        setActiveIndex(null);
    }, []);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (activeIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, handleClose, handleNext, handlePrev]);

    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-white border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3 max-w-xl">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            <Camera className="w-3.5 h-3.5" />
                            <span>Authentic Infrastructure</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Medical & Facility Gallery
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Explore authorized hospital environments, advanced operating suites, and patient-support lounges across accredited partner centers.
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => {
                                    setSelectedCategory(cat);
                                    setActiveIndex(null);
                                }}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${selectedCategory === cat
                                        ? "bg-white text-blue-600 shadow-sm"
                                        : "text-slate-600 hover:text-slate-900"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Responsive Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
                            whileHover={{ y: -3 }}
                            onClick={() => setActiveIndex(idx)}
                            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <Image
                                src={item.imageUrl}
                                alt={item.altText}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                            {/* Top Meta Tag & Action Icon */}
                            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/70 text-blue-300 backdrop-blur-md border border-white/10">
                                    {item.category}
                                </span>
                                <span className="p-2 rounded-xl bg-slate-900/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-3.5 h-3.5" />
                                </span>
                            </div>

                            {/* Bottom Caption Container */}
                            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                                <div className="flex items-center gap-1.5 text-[11px] text-blue-300 font-medium">
                                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                                    <span className="truncate">{item.hospitalName}</span>
                                </div>
                                <h3 className="text-sm font-bold leading-snug line-clamp-1 group-hover:text-blue-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[11px] text-slate-300 line-clamp-1 leading-relaxed">
                                    {item.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer View All Link */}
                <div className="pt-2 text-center">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition group"
                    >
                        <span>View All Hospital & Facility Photos</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {activeIndex !== null && filteredItems[activeIndex] && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Image Preview Lightbox"
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={handleClose}
                                className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95 z-20"
                                aria-label="Close lightbox"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Prev Button */}
                            <button
                                type="button"
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95 z-20"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Next Button */}
                            <button
                                type="button"
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95 z-20"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Modal Card Content */}
                            <div className="relative max-w-4xl w-full h-[70vh] sm:h-[80vh] flex flex-col justify-end p-6 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                                <Image
                                    src={filteredItems[activeIndex].imageUrl}
                                    alt={filteredItems[activeIndex].altText}
                                    fill
                                    priority
                                    className="object-contain"
                                />

                                {/* Details Strip in Modal */}
                                <div className="relative z-10 bg-slate-950/80 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-slate-800 text-white mt-auto space-y-1">
                                    <div className="flex items-center justify-between text-xs text-blue-400 font-semibold">
                                        <span>{filteredItems[activeIndex].hospitalName}</span>
                                        <span className="text-slate-400">
                                            {activeIndex + 1} / {filteredItems.length}
                                        </span>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold">
                                        {filteredItems[activeIndex].title}
                                    </h3>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        {filteredItems[activeIndex].caption}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}