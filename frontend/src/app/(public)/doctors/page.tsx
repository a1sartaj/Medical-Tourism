import { Suspense } from "react";
import type { Metadata } from "next";
import DoctorsPageView from "@/features/doctors/components/DoctorsPageView";

export const metadata: Metadata = {
    title: "Specialist Doctors & Surgeons in Delhi NCR | CaresDaddy.com",
    description:
        "Find certified cardiac surgeons, orthopedic specialists, neurosurgeons, and oncologists across accredited hospitals in New Delhi, Saket, and Gurugram.",
    keywords: [
        "Doctors in Delhi",
        "Best Cardiac Surgeon Delhi",
        "Orthopedic Doctor Saket",
        "Neurosurgeon Gurugram",
        "Surgical Oncologist India",
        "CaresDaddy Doctors",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/doctors",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

interface DoctorsPageProps {
    searchParams: Promise<{
        q?: string;
        specialty?: string;
    }>;
}

async function DoctorsContent({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; specialty?: string }>;
}) {
    const resolvedParams = await searchParams;
    const initialSearchQuery = resolvedParams.q || "";
    const initialSpecialty = resolvedParams.specialty || "all";

    return (
        <DoctorsPageView
            initialSearchQuery={initialSearchQuery}
            initialSpecialty={initialSpecialty}
        />
    );
}

function DoctorsFallback() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading specialist doctors...
                </span>
            </div>
        </div>
    );
}

export default function DoctorsPage({ searchParams }: DoctorsPageProps) {
    return (
        <Suspense fallback={<DoctorsFallback />}>
            <DoctorsContent searchParams={searchParams} />
        </Suspense>
    );
}