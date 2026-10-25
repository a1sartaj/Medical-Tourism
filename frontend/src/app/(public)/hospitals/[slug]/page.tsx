import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HospitalDetailView from "@/features/hospitals/components/HospitalDetailView";
import { HOSPITALS_DETAILS } from "@/features/hospitals/data/hospitalDetailsData";

interface HospitalSlugPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(HOSPITALS_DETAILS).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: HospitalSlugPageProps): Promise<Metadata> {
    const { slug } = await params;
    const hospital = HOSPITALS_DETAILS[slug];

    if (!hospital) {
        return {
            title: "Hospital Not Found | CaresDaddy.com",
        };
    }

    return {
        title: `${hospital.name} - Accreditations, Doctors & Facilities | CaresDaddy.com`,
        description: hospital.shortOverview,
        alternates: {
            canonical: `https://caresdaddy.com/hospitals/${hospital.slug}`,
        },
        other: {
            "geo.region": "IN-DL",
            "geo.placename": "Saket, Delhi, India",
        },
    };
}

async function HospitalDetailContent({ params }: HospitalSlugPageProps) {
    const { slug } = await params;
    const hospital = HOSPITALS_DETAILS[slug];

    if (!hospital) {
        notFound();
    }

    return <HospitalDetailView hospital={hospital} />;
}

function HospitalDetailSkeleton() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading hospital details...
                </span>
            </div>
        </div>
    );
}

export default function HospitalDetailPage({ params }: HospitalSlugPageProps) {
    return (
        <Suspense fallback={<HospitalDetailSkeleton />}>
            <HospitalDetailContent params={params} />
        </Suspense>
    );
}