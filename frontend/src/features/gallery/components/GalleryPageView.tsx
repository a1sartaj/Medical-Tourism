"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Camera,
    MapPin,
    X,
    ArrowRight,
    ShieldCheck,
    Phone,
    FileText,
} from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import GalleryCard from "./GalleryCard";
import {
    GALLERY_CATEGORIES,
    GALLERY_ITEMS,
    type GalleryItem,
} from "../data/galleryData";

export default function GalleryPageView() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const filteredItems =
        activeCategory === "all"
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Header */}
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "Hospital & Facilities Gallery" }]} />
                    </div>

                    <div className="max-w-3xl space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                            <Camera className="w-3.5 h-3.5 text-blue-400" />
                            <span>Verified Hospital Infrastructure</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            Hospital & Facilities Gallery
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            Explore authentic photographs of our partner hospital campuses, robotic surgical operating suites, private inpatient deluxe rooms, and patient care desks across Delhi NCR.
                        </p>
                    </div>
                </div>
            </header>

            {/* Filter Category Tabs */}
            <section className="bg-white border-b border-slate-200 py-4 px-4 sm:px-8 z-20 backdrop-blur-md sticky top-18">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-2">
                        {GALLERY_CATEGORIES.map((cat) => (
                            <button
                                key={cat.value}
                                type="button"
                                onClick={() => setActiveCategory(cat.value)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold transition whitespace-nowrap cursor-pointer ${activeCategory === cat.value
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <span className="text-xs text-slate-500 shrink-0 hidden sm:inline-block">
                        Showing <strong className="text-slate-900">{filteredItems.length}</strong> verified photos
                    </span>
                </div>
            </section>

            {/* Gallery Cards Grid using the reusable GalleryCard */}
            <main className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredItems.map((item, idx) => (
                        <GalleryCard
                            key={item.id}
                            item={item}
                            index={idx}
                            onPreview={(selected) => setSelectedImage(selected)}
                        />
                    ))}
                </div>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-4xl w-full text-white cursor-default shadow-2xl space-y-0"
                        >
                            {/* Modal Image */}
                            <div className="relative h-80 sm:h-120 w-full bg-black">
                                <Image
                                    src={selectedImage.imageUrl}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                                <button
                                    type="button"
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Caption */}
                            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-2">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                                        {selectedImage.categoryLabel}
                                    </span>
                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {selectedImage.location}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {selectedImage.title} — {selectedImage.hospitalName}
                                </h3>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    {selectedImage.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Inquiry Bottom CTA Banner */}
            <section className="bg-slate-900 text-white py-16 px-4 sm:px-8 border-t border-slate-800">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                            <span>Direct Hospital Consultation Desk</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                            Tour Our Partner Hospitals in Person
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
                            Arrange an escorted hospital tour and specialist meeting coordinated by our Saket team upon arrival.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                        <Link
                            href="/contact"
                            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
                        >
                            <FileText className="w-4 h-4" />
                            <span>Request Treatment Quote</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="tel:+919818286609"
                            className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4 text-slate-300" />
                            <span>Call Helpline</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}