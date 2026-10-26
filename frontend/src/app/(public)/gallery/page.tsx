import { Suspense } from "react";
import type { Metadata } from "next";
import GalleryPageView from "@/features/gallery/components/GalleryPageView";

export const metadata: Metadata = {
    title: "Hospital & Facilities Gallery | CaresDaddy.com",
    description:
        "View authentic photos of JCI-accredited hospital campuses in Delhi NCR, robotic surgical suites, private patient deluxe rooms, and international patient lounges.",
    keywords: [
        "Hospital Gallery Delhi",
        "Max Hospital Saket Photos",
        "Medanta Gurugram Rooms",
        "Surgical Robotics Suite Photos India",
        "CaresDaddy Facilities",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/gallery",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

function GalleryFallback() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-slate-500">
                    Loading hospital gallery...
                </span>
            </div>
        </div>
    );
}

export default function GalleryPage() {
    return (
        <Suspense fallback={<GalleryFallback />}>
            <GalleryPageView />
        </Suspense>
    );
}