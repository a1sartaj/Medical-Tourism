import type { Metadata } from "next";
import InternationalPatientsView from "@/features/internationalPatients/components/InternationalPatientsView";

export const metadata: Metadata = {
    title: "International Patient Services & Support | CaresDaddy.com",
    description:
        "Dedicated international patient support for medical travelers to Delhi NCR: country-specific desks (GCC, CIS, Africa), Arabic/Russian interpreters, embassy liaison, and FRRO guidance.",
    keywords: [
        "International Patient Services India",
        "Medical Tourism Arabic Translators",
        "CIS Medical Travel Delhi",
        "Embassy Medical Letter of Guarantee India",
        "CaresDaddy International Patients",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/international-patients",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

export default function InternationalPatientsPage() {
    return <InternationalPatientsView />;
}