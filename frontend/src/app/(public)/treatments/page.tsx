import { Suspense } from "react";
import type { Metadata } from "next";
import TreatmentsPageView from "@/features/treatments/components/TreatmentsPageView";

export const metadata: Metadata = {
    title: "Medical Treatments & Procedures in India | CaresDaddy.com",
    description:
        "Explore accredited medical treatments including Cardiac Surgery, Robotic Knee Replacement, Oncology, Spine Care, and IVF. Transparent indicative pricing and specialist consultations in Saket, Delhi.",
    keywords: [
        "Medical Treatments in India",
        "Cardiac Surgery Delhi",
        "Robotic Knee Replacement Cost",
        "Oncology Radiation India",
        "IVF Treatment Delhi NCR",
        "Organ Transplant Facilitation",
        "CaresDaddy Treatments",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/treatments",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

interface TreatmentsPageProps {
    searchParams: Promise<{
        q?: string;
        category?: string;
    }>;
}

async function TreatmentsContent({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; category?: string }>;
}) {
    const resolvedParams = await searchParams;
    const initialSearchQuery = resolvedParams.q || "";
    const initialCategory = resolvedParams.category || "all";

    return (
        <TreatmentsPageView
            initialSearchQuery={initialSearchQuery}
            initialCategory={initialCategory}
        />
    );
}

function TreatmentsFallback() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading treatments...
                </span>
            </div>
        </div>
    );
}

export default function TreatmentsPage({ searchParams }: TreatmentsPageProps) {
    return (
        <Suspense fallback={<TreatmentsFallback />}>
            <TreatmentsContent searchParams={searchParams} />
        </Suspense>
    );
}