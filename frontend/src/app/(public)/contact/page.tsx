// src/app/(public)/contact/page.tsx
import type { Metadata } from "next";
import ContactPageView from "@/features/contact/components/ContactPageView";

export const metadata: Metadata = {
    title: "Contact Us & Request Free Quote | CaresDaddy.com",
    description:
        "Contact CaresDaddy international patient desk in Saket, New Delhi. Submit medical reports for doctor opinions, transparent treatment estimates, and medical visa facilitation.",
    keywords: [
        "Contact CaresDaddy",
        "Medical Tourism Free Quote India",
        "Saket Delhi Medical Tourism Office",
        "Medical Visa Invitation Assistance Delhi",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/contact",
    },
};

export default function ContactPage() {
    return <ContactPageView />;
}