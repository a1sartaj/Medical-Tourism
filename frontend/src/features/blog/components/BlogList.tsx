"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Search, RotateCcw, AlertCircle, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import BlogCard from "./BlogCard";
import { LATEST_BLOGS } from "../data/latestBlogs";

const BLOG_CATEGORIES = [
    "All Articles",
    "Treatment Guides",
    "Medical Travel Guides",
    "Hospital & Doctor Info",
    "Treatment Cost Guides",
    "International Patient Services",
    "Recovery & Preparation",
];

interface BlogListProps {
    initialSearchQuery?: string;
    initialCategory?: string;
}

export default function BlogList({
    initialSearchQuery = "",
    initialCategory = "All Articles",
}: BlogListProps) {
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    const filteredPosts = LATEST_BLOGS.filter((post) => {
        const matchesCategory =
            selectedCategory === "All Articles" || post.category === selectedCategory;
        const matchesSearch =
            searchQuery.trim() === "" ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const isFiltered = searchQuery !== "" || selectedCategory !== "All Articles";

    return (
        <div className="bg-slate-50/50 min-h-screen">
            {/* Header */}
            <header className="relative bg-slate-900 text-white py-14 sm:py-16 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto space-y-5">
                    <div className="[&_nav_ol_li_a]:text-slate-400 [&_nav_ol_li_a:hover]:text-white [&_nav_ol_li_span]:text-white [&_svg]:text-slate-500">
                        <Breadcrumbs items={[{ label: "Medical Insights & Guides" }]} />
                    </div>

                    <div className="max-w-3xl space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                            <span>Evidence-Based Medical Resources</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                            Medical Tourism Insights & Guides
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                            Doctor-reviewed guidance covering procedure timelines, medical visa checklists, hospital selection standards, and recovery protocols in Delhi NCR.
                        </p>
                    </div>
                </div>
            </header>

            {/* Filter & Search Bar */}
            <section className="bg-white border-b border-slate-200 py-6 px-4 sm:px-8 z-20 backdrop-blur-md">
                <div className="max-w-7xl mx-auto space-y-4">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search articles, procedures, or visa guidance..."
                                className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
                            />
                        </div>

                        {/* Clear Filters */}
                        {isFiltered && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All Articles");
                                }}
                                className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-semibold cursor-pointer self-start md:self-center"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Reset filters</span>
                            </button>
                        )}
                    </div>

                    {/* Category Chips */}
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
                        {BLOG_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap cursor-pointer ${selectedCategory === cat
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Cards Grid */}
            <main className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8 space-y-12">
                {filteredPosts.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3 max-w-md mx-auto my-8">
                        <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-base font-bold text-slate-800">No Articles Found</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            No medical articles match your search or selected category. Try searching with different keywords.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, idx) => (
                            <BlogCard key={post.id} post={post} index={idx} />
                        ))}
                    </div>
                )}

                {/* Editorial Disclaimer Notice */}
                <p className="text-center text-[11px] text-slate-400 max-w-2xl mx-auto border-t border-slate-200/80 pt-8">
                    Medical articles provided on CaresDaddy.com are for educational purposes and should not be considered personal medical advice. Clinical decisions require individual examination by licensed healthcare practitioners.
                </p>
            </main>

            {/* Bottom Conversion CTA */}
            <section className="bg-slate-900 text-white py-16 px-4 sm:px-8 border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                        Need Direct Answers Regarding Your Treatment?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
                        Submit your diagnostic files directly to our Saket patient support desk for a customized, doctor-reviewed treatment assessment.
                    </p>
                    <div className="pt-2 flex justify-center">
                        <Link
                            href="/contact"
                            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
                        >
                            <span>Get Free Hospital Assessment</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}