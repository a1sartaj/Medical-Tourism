import type { Metadata } from "next";
import HowItWorksView from "@/features/howItWorks/components/HowItWorksView";

export const metadata: Metadata = {
    title: "How It Works | Medical Travel Process & Steps | CaresDaddy.com",
    description:
        "Learn how CaresDaddy coordinates international medical travel to Delhi NCR: report submission, hospital estimates, Medical Visa invitation, airport pickup, and post-discharge recovery.",
    keywords: [
        "How Medical Tourism Works",
        "Medical Travel Process India",
        "Medical Visa Invitation Letter Steps",
        "Hospital Admission Timeline Delhi",
        "CaresDaddy Process",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/how-it-works",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

export default function HowItWorksPage() {
    return <HowItWorksView />;
}