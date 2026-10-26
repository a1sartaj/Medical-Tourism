// src/app/(public)/about/page.tsx
import type { Metadata } from "next";
import AboutPageView from "@/features/about/components/AboutPageView";

export const metadata: Metadata = {
    title: "About Us | Patient Advocacy & Hospital Facilitation | CaresDaddy.com",
    description:
        "Learn about CaresDaddy: ethical medical tourism facilitation based in Saket, New Delhi. Connecting global patients with JCI-accredited tertiary hospitals across India.",
    keywords: [
        "About CaresDaddy",
        "Medical Tourism Facilitator India",
        "Saket Delhi Healthcare Services",
        "Ethical Medical Travel Delhi",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/about",
    },
};

export default function AboutPage() {
    return <AboutPageView />;
}