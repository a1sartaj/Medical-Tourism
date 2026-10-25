import type { Metadata } from "next";
import DelhiDestinationView from "@/features/destinations/components/DelhiDestinationView";

export const metadata: Metadata = {
    title: "Medical Travel to New Delhi & NCR | Hospitals, Transit & Stays | CaresDaddy.com",
    description:
        "Comprehensive guide for international patients visiting New Delhi & NCR for medical treatments: Indira Gandhi Airport (DEL) connections, accredited hospital hubs in Saket and Gurugram, serviced apartments, and travel tips.",
    keywords: [
        "Medical Tourism Delhi",
        "Max Hospital Saket Travel Guide",
        "Delhi Airport Medical Patient Pickup",
        "Serviced Apartments near Hospitals South Delhi",
        "Delhi NCR Healthcare Infrastructure",
        "CaresDaddy Delhi",
    ],
    alternates: {
        canonical: "https://caresdaddy.com/destinations/delhi",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Saket, Delhi, India",
        "geo.position": "28.5245;77.2066",
        "ICBM": "28.5245, 77.2066",
    },
};

export default function DelhiDestinationPage() {
    return <DelhiDestinationView />;
}