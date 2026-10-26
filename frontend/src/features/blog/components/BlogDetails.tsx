"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Clock,
    ShieldCheck,
    ArrowRight,
    Share2,
    FileText,
    Phone,
    AlertCircle,
    Bookmark,
    ChevronRight,
    BookOpen,
} from "lucide-react";
import { toast } from "sonner";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import BlogCard from "./BlogCard";
import RichTextRenderer from "@/features/editor/components/RichTextRenderer";
import type { BlogPostItem } from "../types/blog.types";
import { LATEST_BLOGS } from "../data/latestBlogs";

interface TocItem {
    id: string;
    heading: string;
}

export default function BlogDetails({ post }: { post: BlogPostItem }) {
    // Nested JSON Document se dynamic Table of Contents extract karna
    const tocSections: TocItem[] = useMemo(() => {
        if (!post.content?.content) return [];
        return post.content.content
            .filter((node) => node.type === "heading" && node.attrs?.level === 2)
            .map((node, idx) => {
                const textContent =
                    node.content?.map((c) => c.text).filter(Boolean).join(" ") ||
                    `Section ${idx + 1}`;
                const id = (node.attrs?.id as string) || `heading-${idx}`;
                return { id, heading: textContent };
            });
    }, [post.content]);

    const [activeSection, setActiveSection] = useState<string>(
        tocSections[0]?.id || ""
    );

    useEffect(() => {
        if (tocSections.length === 0) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const sec of tocSections) {
                const el = document.getElementById(sec.id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sec.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [tocSections]);

    const handleCopyLink = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Article link copied to clipboard.");
        }
    };

    const relatedPosts = LATEST_BLOGS.filter(
        (p) => post.relatedSlugs?.includes(p.slug) && p.slug !== post.slug
    );

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Treatment-Matched Hero Header (2-Column Wide Grid) */}
            <section className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-6">
                    {/* Breadcrumbs Navigation */}
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs
                            items={[
                                { label: "Medical Insights", href: "/blog" },
                                { label: post.title },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                        {/* Left Content Column */}
                        <div className="lg:col-span-7 space-y-5">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                                    {post.category}
                                </span>

                                <div className="flex items-center gap-2 text-xs text-slate-400 pl-1">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                        {post.publishedDate}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                {post.title}
                            </h1>

                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                                {post.excerpt}
                            </p>

                            {/* Action Buttons & Reviewer Badge */}
                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition active:scale-95 flex items-center gap-2"
                                >
                                    <span>Request Assessment & Estimate</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                {post.medicalReviewer && (
                                    <div className="px-4 py-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span className="text-slate-300">
                                            Reviewed by{" "}
                                            <strong className="text-white font-semibold">
                                                {post.medicalReviewer.name}
                                            </strong>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Hero Image Frame (Matches Treatment Hero Photo) */}
                        <div className="lg:col-span-5 relative h-72 sm:h-84 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 42vw"
                                className="object-cover"
                            />
                            {post.imageCaption && (
                                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent">
                                    <p className="text-[11px] text-slate-300 italic text-center truncate">
                                        {post.imageCaption}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Grid Content Layout */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Sticky Table of Contents */}
                <aside className="hidden lg:block lg:col-span-3 space-y-6">
                    <div className="sticky top-30 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                            <Bookmark className="w-4 h-4 text-blue-600" />
                            <span>Table of Contents</span>
                        </div>

                        <nav className="space-y-1.5 text-xs">
                            {tocSections.length > 0 ? (
                                tocSections.map((sec) => {
                                    const isActive = activeSection === sec.id;
                                    return (
                                        <a
                                            key={sec.id}
                                            href={`#${sec.id}`}
                                            className={`block py-1.5 px-2.5 rounded-lg transition leading-snug ${isActive
                                                ? "bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600"
                                                : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                                                }`}
                                        >
                                            {sec.heading}
                                        </a>
                                    );
                                })
                            ) : (
                                <p className="text-slate-400 text-xs">Clinical Overview</p>
                            )}
                        </nav>

                        <div className="pt-3 border-t border-slate-100">
                            <button
                                type="button"
                                onClick={handleCopyLink}
                                className="w-full py-2 px-3 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold border border-slate-200 transition flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Share2 className="w-3.5 h-3.5" />
                                <span>Share Article</span>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Center Main Article Body */}
                <main className="lg:col-span-6 space-y-8">
                    {/* Pure Object Blocks Rendered Here */}
                    <article className="bg-white p-7 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm">
                        <RichTextRenderer data={post.content} />
                    </article>

                    {/* Author Box */}
                    <section className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
                        {post.author.avatar && (
                            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div className="space-y-1 text-xs">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                Published By
                            </span>
                            <h3 className="font-bold text-slate-900 text-sm">
                                {post.author.name}
                            </h3>
                            <p className="text-blue-600 font-medium">{post.author.role}</p>
                            {post.author.bio && (
                                <p className="text-slate-500 leading-relaxed pt-1">
                                    {post.author.bio}
                                </p>
                            )}
                        </div>
                    </section>

                    {/* Medical Disclaimer Banner */}
                    <section className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                                Medical Content Disclaimer
                            </h4>
                            <p className="text-[11px] text-amber-900/80 leading-relaxed">
                                This guide is published for educational and informational reference only. Clinical eligibility, procedural viability, and post-operative recovery timelines vary for every patient. Consult an accredited hospital specialist or your primary care physician before making surgical decisions.
                            </p>
                        </div>
                    </section>
                </main>

                {/* Right Sticky Consultation CTA Column */}
                <aside className="lg:col-span-3 space-y-6">
                    <div className="sticky top-30 space-y-6">
                        {/* Consultation Card */}
                        <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4 text-left">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                                <FileText className="w-3 h-3 text-blue-400" />
                                <span>Free Hospital Review</span>
                            </div>

                            <div>
                                <h3 className="text-base font-bold text-white leading-snug">
                                    Need an Evaluation for This Procedure?
                                </h3>
                                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                                    Submit your diagnostic records to our patient support desk in Saket, New Delhi for hospital-verified treatment estimates.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
                            >
                                <span>Request Case Assessment</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>

                            <div className="pt-2 border-t border-slate-800">
                                <a
                                    href="tel:+919818286609"
                                    className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition"
                                >
                                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Call +91 9818286609</span>
                                </a>
                            </div>
                        </div>

                        {/* Medical Reviewer Card */}
                        {post.medicalReviewer && (
                            <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 text-xs">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                    Clinical Oversight
                                </span>
                                <h4 className="font-bold text-slate-900 text-sm">
                                    {post.medicalReviewer.name}
                                </h4>
                                {post.medicalReviewer.designation && (
                                    <p className="text-blue-600 font-medium">
                                        {post.medicalReviewer.designation}
                                    </p>
                                )}
                                <p className="text-slate-500 text-[11px]">
                                    Credentials: {post.medicalReviewer.credentials}
                                </p>
                                {post.medicalReviewer.councilRegistration && (
                                    <div className="pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>
                                            Council Reg: {post.medicalReviewer.councilRegistration}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </aside>
            </div>

            {/* Related Articles Bottom Section */}
            {relatedPosts.length > 0 && (
                <section className="bg-white py-16 px-4 sm:px-8 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Related Medical Articles & Guides
                                </h3>
                                <p className="text-xs text-slate-500 mt-1">
                                    Further educational resources verified by our medical panel
                                </p>
                            </div>
                            <Link
                                href="/blog"
                                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                            >
                                <span>View All Articles</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedPosts.map((rel, idx) => (
                                <BlogCard key={rel.id} post={rel} index={idx} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}