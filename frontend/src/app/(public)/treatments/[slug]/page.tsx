import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TreatmentDetailView from "@/features/treatments/components/TreatmentDetailView";
import { TREATMENTS_DETAILS } from "@/features/treatments/data/treatmentDetailsData";

interface TreatmentSlugPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(TREATMENTS_DETAILS).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: TreatmentSlugPageProps): Promise<Metadata> {
    const { slug } = await params;
    const treatment = TREATMENTS_DETAILS[slug];

    if (!treatment) {
        return {
            title: "Treatment Not Found | CaresDaddy.com",
        };
    }

    return {
        title: `${treatment.name} in India - Cost, Hospitals & Procedure | CaresDaddy.com`,
        description: treatment.summary,
        alternates: {
            canonical: `https://caresdaddy.com/treatments/${treatment.slug}`,
        },
        other: {
            "geo.region": "IN-DL",
            "geo.placename": "Saket, Delhi, India",
        },
    };
}

async function TreatmentDetailContent({
    params,
}: TreatmentSlugPageProps) {
    const { slug } = await params;
    const treatment = TREATMENTS_DETAILS[slug];

    if (!treatment) {
        notFound();
    }

    return <TreatmentDetailView treatment={treatment} />;
}

function TreatmentDetailSkeleton() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading treatment details...
                </span>
            </div>
        </div>
    );
}

export default function TreatmentDetailPage({
    params,
}: TreatmentSlugPageProps) {
    return (
        <Suspense fallback={<TreatmentDetailSkeleton />}>
            <TreatmentDetailContent params={params} />
        </Suspense>
    );
}