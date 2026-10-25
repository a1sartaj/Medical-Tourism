import type { Metadata } from "next";
import PatientServicesPageView from "@/features/patientServices/components/PatientServicesPageView";

export const metadata: Metadata = {
    title: "International Patient Services | CaresDaddy.com",
    description:
        "Comprehensive coordination for foreign medical patients in Delhi NCR: hospital second opinions, medical visa invitations, airport meet-and-greet, accessible accommodation, and interpreters.",
    keywords: [
        "Medical Tourism Patient Services",
        "India Medical Visa Assistance",
        "Hospital Transfers Delhi Airport",
        "Accommodation near Max Saket",
        "Medical Translators Delhi",
        "CaresDaddy Services",
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

export default function PatientServicesPage() {
    return <PatientServicesPageView />;
}