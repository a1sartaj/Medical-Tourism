"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ShieldCheck, ArrowRight } from "lucide-react";
import { BlogPostItem } from "../types/blog.types";

interface BlogCardProps {
    post: BlogPostItem;
    index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.35,
                delay: (index % 3) * 0.06,
                ease: "easeOut",
            }}
            whileHover={{ y: -4 }}
            className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
            <div>
                {/* Cover Image */}
                <Link
                    href={`/blog/${post.slug}`}
                    className="relative h-52 sm:h-56 w-full block overflow-hidden bg-slate-100"
                >
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                        {post.category}
                    </span>
                </Link>

                {/* Content Body */}
                <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {post.publishedDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {post.readTime}
                        </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>
            </div>

            {/* Footer Info */}
            <div className="p-6 pt-0 space-y-3">
                {post.medicalReviewer && (
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">
                            Reviewed by {post.medicalReviewer.name} ({post.medicalReviewer.credentials})
                        </span>
                    </div>
                )}

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">{post.author.name}</span>
                    </div>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
                    >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}