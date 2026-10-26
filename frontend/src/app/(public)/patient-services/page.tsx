import { Suspense } from "react";
import type { Metadata } from "next";
import PatientServicesPageView from "@/features/patientServices/components/PatientServicesPageView";

export const metadata: Metadata = {
    title: "International Patient Services | CaresDaddy.com",
    description:
        "Comprehensive patient care coordination in Delhi NCR: medical consultation assistance, Indian medical visa invitations, airport meet-and-greet, accessible accommodation, and language interpreters.",
    keywords: [
        "Medical Tourism Patient Services",
        "India Medical Visa Assistance",
        "Hospital Transfers Delhi Airport",
        "Accommodation near Max Saket",
        "Medical Translators Delhi",
        "CaresDaddy Patient Services",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/patient-services",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

function PatientServicesFallback() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading patient services...
                </span>
            </div>
        </div>
    );
}

export default function PatientServicesPage() {
    return (
        <Suspense fallback={<PatientServicesFallback />}>
            <PatientServicesPageView />
        </Suspense>
    );
}