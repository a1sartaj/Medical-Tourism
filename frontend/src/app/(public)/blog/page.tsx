import { Suspense } from "react";
import type { Metadata } from "next";
import BlogList from "@/features/blog/components/BlogList";

export const metadata: Metadata = {
    title: "Medical Tourism Articles & Treatment Guides | CaresDaddy.com",
    description:
        "Doctor-reviewed medical travel guides, Indian Medical Visa checklists, procedure recovery timelines, and transparent hospital cost breakdowns for Delhi NCR.",
    keywords: [
        "Medical Tourism Blog",
        "Medical Visa India Guide",
        "Robotic Knee Replacement Recovery Time",
        "Second Opinion Cardiac Surgery Delhi",
        "CaresDaddy Insights",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/blog",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

interface BlogPageProps {
    searchParams: Promise<{
        q?: string;
        category?: string;
    }>;
}

async function BlogContent({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; category?: string }>;
}) {
    const resolvedParams = await searchParams;
    const initialSearchQuery = resolvedParams.q || "";
    const initialCategory = resolvedParams.category || "All Articles";

    return (
        <BlogList
            initialSearchQuery={initialSearchQuery}
            initialCategory={initialCategory}
        />
    );
}

function BlogFallback() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading medical articles...
                </span>
            </div>
        </div>
    );
}

export default function BlogPage({ searchParams }: BlogPageProps) {
    return (
        <Suspense fallback={<BlogFallback />}>
            <BlogContent searchParams={searchParams} />
        </Suspense>
    );
}