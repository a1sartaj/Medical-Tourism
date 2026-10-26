import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import BlogCard from "@/features/blog/components/BlogCard";
import { LATEST_BLOGS } from "@/features/blog/data/latestBlogs";

export default function LatestBlogs() {
    const previewPosts = LATEST_BLOGS.slice(0, 3);

    return (
        <section className="py-20 sm:py-24 px-4 sm:px-8 bg-slate-50 border-t border-slate-200/70">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Evidence-Based Information</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Latest Medical Insights
                        </h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Curated guides on treatment options, pre-travel clinical preparations, and transparent healthcare planning abroad.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition group self-start md:self-end"
                    >
                        <span>View All Articles</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {previewPosts.map((post, idx) => (
                        <BlogCard key={post.id} post={post} index={idx} />
                    ))}
                </div>

                {/* Editorial Disclaimer */}
                <p className="text-center text-[11px] text-slate-400 max-w-2xl mx-auto">
                    Medical articles provided on CaresDaddy.com are for educational purposes and should not be considered personal medical advice. Clinical decisions require individual examination by licensed healthcare practitioners.
                </p>
            </div>
        </section>
    );
}