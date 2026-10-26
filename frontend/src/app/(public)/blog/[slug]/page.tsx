import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogDetails from "@/features/blog/components/BlogDetails";
import { LATEST_BLOGS } from "@/features/blog/data/latestBlogs";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return LATEST_BLOGS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = LATEST_BLOGS.find((p) => p.slug === slug);
    if (!post) return { title: "Article Not Found | CaresDaddy.com" };

    return {
        title: `${post.title} | CaresDaddy.com`,
        description: post.excerpt,
        alternates: {
            canonical: `https://caresdaddy.com/blog/${post.slug}`,
        },
        other: {
            "geo.region": "IN-DL",
            "geo.placename": "Saket, Delhi, India",
        },
    };
}

async function BlogPostContent({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = LATEST_BLOGS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogDetails post={post} />;
}

function BlogPostFallback() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading medical article...
                </span>
            </div>
        </div>
    );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    return (
        <Suspense fallback={<BlogPostFallback />}>
            <BlogPostContent params={params} />
        </Suspense>
    );
}