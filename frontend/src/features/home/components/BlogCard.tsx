"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import type { BlogPostItem } from "../data/latestBlogs";

export default function BlogCard({
    post,
    index = 0,
}: {
    post: BlogPostItem;
    index?: number;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.35,
                delay: index * 0.08,
                ease: "easeOut",
            }}
            whileHover={{ y: -3 }}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
        >
            <div>
                {/* Featured Image */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/95 rounded-full text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur-sm">
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Article Details */}
                <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.publishedDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {post.excerpt}
                    </p>
                </div>
            </div>

            {/* Author & Reviewer Footer */}
            <div className="p-6 pt-0 space-y-3">
                {post.medicalReviewer && (
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">
                            Medically Reviewed by <strong>{post.medicalReviewer.name}</strong> ({post.medicalReviewer.credentials})
                        </span>
                    </div>
                )}

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">By {post.author.name}</span>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition"
                    >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}