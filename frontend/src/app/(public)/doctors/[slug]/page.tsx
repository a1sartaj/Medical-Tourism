import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DoctorDetailView from "@/features/doctors/components/DoctorDetailView";
import { DOCTORS_DETAILS } from "@/features/doctors/data/doctorDetailsData";

interface DoctorSlugPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return Object.keys(DOCTORS_DETAILS).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: DoctorSlugPageProps): Promise<Metadata> {
    const { slug } = await params;
    const doctor = DOCTORS_DETAILS[slug];

    if (!doctor) {
        return {
            title: "Doctor Profile Not Found | CaresDaddy.com",
        };
    }

    return {
        title: `${doctor.name} - ${doctor.specialty} at ${doctor.hospital.name} | CaresDaddy.com`,
        description: `Consult ${doctor.name}, ${doctor.designation} at ${doctor.hospital.name}. Review verified credentials, qualifications, and consultation availability.`,
        alternates: {
            canonical: `https://caresdaddy.com/doctors/${doctor.slug}`,
        },
        other: {
            "geo.region": "IN-DL",
            "geo.placename": "Saket, Delhi, India",
        },
    };
}

async function DoctorDetailContent({ params }: DoctorSlugPageProps) {
    const { slug } = await params;
    const doctor = DOCTORS_DETAILS[slug];

    if (!doctor) {
        notFound();
    }

    return <DoctorDetailView doctor={doctor} />;
}

function DoctorDetailSkeleton() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading doctor credentials...
                </span>
            </div>
        </div>
    );
}

export default function DoctorDetailPage({ params }: DoctorSlugPageProps) {
    return (
        <Suspense fallback={<DoctorDetailSkeleton />}>
            <DoctorDetailContent params={params} />
        </Suspense>
    );
}