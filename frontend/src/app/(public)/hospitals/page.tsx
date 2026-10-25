import { Suspense } from "react";
import type { Metadata } from "next";
import HospitalsPageView from "@/features/hospitals/components/HospitalsPageView";

export const metadata: Metadata = {
    title: "Top Accredited Hospitals in Delhi NCR & India | CaresDaddy.com",
    description:
        "Discover JCI and NABH accredited hospitals in New Delhi, Saket, Gurugram, and Mumbai. Compare specialized robotic surgical units, bed counts, and clinical departments.",
    keywords: [
        "Hospitals in India",
        "Best Hospitals in Delhi",
        "Max Hospital Saket",
        "Fortis Heart Institute",
        "Medanta Gurugram",
        "JCI Accredited Hospitals India",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/hospitals",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

interface HospitalsPageProps {
    searchParams: Promise<{
        q?: string;
        city?: string;
    }>;
}

async function HospitalsContent({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; city?: string }>;
}) {
    const resolvedParams = await searchParams;
    const initialSearchQuery = resolvedParams.q || "";
    const initialCity = resolvedParams.city || "all";

    return (
        <HospitalsPageView
            initialSearchQuery={initialSearchQuery}
            initialCity={initialCity}
        />
    );
}

function HospitalsFallback() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading accredited hospitals...
                </span>
            </div>
        </div>
    );
}

export default function HospitalsPage({ searchParams }: HospitalsPageProps) {
    return (
        <Suspense fallback={<HospitalsFallback />}>
            <HospitalsContent searchParams={searchParams} />
        </Suspense>
    );
}