"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Building2, Maximize2 } from "lucide-react";
import type { GalleryItem } from "../data/galleryData";

interface GalleryCardProps {
    item: GalleryItem;
    index?: number;
    onPreview?: (item: GalleryItem) => void;
}

export default function GalleryCard({
    item,
    index = 0,
    onPreview,
}: GalleryCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.35,
                delay: (index % 3) * 0.05,
                ease: "easeOut",
            }}
            whileHover={{ y: -4 }}
            className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
        >
            <div>
                {/* Card Image Area with Zoom Trigger */}
                <div
                    onClick={() => onPreview && onPreview(item)}
                    className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100 cursor-pointer"
                >
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                            {item.categoryLabel}
                        </span>
                    </div>

                    {/* Quick Zoom Trigger Button */}
                    {onPreview && (
                        <button
                            type="button"
                            aria-label={`Preview ${item.title}`}
                            className="absolute bottom-3 right-3 p-2 bg-slate-900/80 hover:bg-blue-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md backdrop-blur-sm"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Card Content Details */}
                <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                        {item.title}
                    </h3>

                    <div className="space-y-1 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5 font-medium text-blue-600">
                            <Building2 className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{item.hospitalName}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span>{item.location}</span>
                        </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 pt-1 border-t border-slate-100">
                        {item.description}
                    </p>
                </div>
            </div>
        </motion.article>
    );
}