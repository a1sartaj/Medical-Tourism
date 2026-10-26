"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, MapPin } from "lucide-react";
import GalleryCard from "@/features/gallery/components/GalleryCard";
import { GALLERY_ITEMS, type GalleryItem } from "@/features/gallery/data/galleryData";

export default function MedicalGallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    const featured = GALLERY_ITEMS.slice(0, 3); // Top 3 items

    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
                {/* Section Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            Hospital Facilities
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Authentic infrastructure, surgical suites, and patient care lounges
                        </p>
                    </div>
                    <Link
                        href="/gallery"
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 transition flex items-center gap-1 group"
                    >
                        <span>View All Photos</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Gallery Cards Grid with Preview Trigger */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featured.map((item, idx) => (
                        <GalleryCard
                            key={item.id}
                            item={item}
                            index={idx}
                            onPreview={(selected) => setSelectedImage(selected)}
                        />
                    ))}
                </div>
            </div>

            {/* Full-Screen Lightbox Modal */}
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
                            {/* Image Preview Container */}
                            <div className="relative h-80 sm:h-120 w-full bg-black">
                                <Image
                                    src={selectedImage.imageUrl}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                                <button
                                    type="button"
                                    aria-label="Close modal"
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Caption & Location Details */}
                            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-2">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                                        {selectedImage.categoryLabel}
                                    </span>
                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
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
        </section>
    );
}