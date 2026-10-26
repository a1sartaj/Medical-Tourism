export interface RegionalDesk {
    region: string;
    countries: string[];
    languages: string[];
    leadTime: string;
    keyServices: string[];
    dietaryLogistics: string;
}

export interface DeskService {
    title: string;
    description: string;
    iconName: string;
}

export const REGIONAL_DESKS: RegionalDesk[] = [
    {
        region: "Middle East & GCC",
        countries: ["Saudi Arabia", "UAE", "Oman", "Kuwait", "Qatar", "Bahrain", "Yemen"],
        languages: ["Arabic", "English"],
        leadTime: "24 – 48 Hours for Invitation Letter",
        keyServices: [
            "In-hospital Arabic medical interpreters for daily consultations and ICU briefings",
            "Embassy medical attestation and cultural protocol alignment",
            "Coordination with overseas health committees and third-party insurance",
            "Halal-certified in-room meal arrangements and family serviced suites",
        ],
        dietaryLogistics: "Strict Halal catering, prayer room directions, and Ramadan schedule adjustments.",
    },
    {
        region: "CIS & Central Asia",
        countries: ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Russia"],
        languages: ["Russian", "Uzbek", "English"],
        leadTime: "24 – 48 Hours for Invitation Letter",
        keyServices: [
            "Native Russian-speaking case managers assisting OPD, billing, and pharmacy handoffs",
            "Direct translation of Russian clinical summaries and imaging reports into English",
            "Assistance with electronic visa (e-Medical Visa) registration and extensions",
            "Apartment kitchen coordination with access to Central Asian grocery staples",
        ],
        dietaryLogistics: "Dedicated non-spicy meal choices and apartment kitchen rentals for self-cooking.",
    },
    {
        region: "Africa & Indian Ocean",
        countries: ["Kenya", "Tanzania", "Uganda", "Nigeria", "Ethiopia", "Mauritius", "Ghana"],
        languages: ["English", "French", "Swahili"],
        leadTime: "24 – 72 Hours for Invitation Letter",
        keyServices: [
            "Coordination with African health boards and corporate medical sponsors",
            "French and Swahili interpretation support for clinical procedures",
            "Dedicated multi-occupancy long-stay family guest house reservations",
            "Airport ambulance meet-and-greet for high-acuity cardiology and oncology cases",
        ],
        dietaryLogistics: "Fresh ingredient access, long-stay family residences, and familiar continental food.",
    },
    {
        region: "SAARC & Southeast Asia",
        countries: ["Bangladesh", "Nepal", "Myanmar", "Sri Lanka", "Maldives", "Indonesia"],
        languages: ["Bengali", "English", "Hindi"],
        leadTime: "24 – 48 Hours for Invitation Letter",
        keyServices: [
            "Bengali-speaking liaison desk at hospital registration centers",
            "Guidance for land-border or air-arrival clearance",
            "Cost-optimized budget guest housing within 500m of South Delhi hospitals",
            "Fast-track diagnostic investigations and post-transplant follow-up handoffs",
        ],
        dietaryLogistics: "Regional South Asian cuisine, dietary flexibility, and community lodging networks.",
    },
];

export const DESK_SERVICES: DeskService[] = [
    {
        title: "Official Hospital Visa Invitation Letters",
        description:
            "We coordinate formal invitation letters on partner hospital letterheads stamped by treating consultants, satisfying Indian Embassy and e-Medical Visa requirements.",
        iconName: "FileCheck2",
    },
    {
        title: "FRRO & Visa Extension Guidance",
        description:
            "If clinical treatment requires staying beyond the permitted period, we assist with obtaining necessary hospital extension certificates for online e-FRRO submissions.",
        iconName: "ShieldAlert",
    },
    {
        title: "Dedicated Cultural & Language Interpreters",
        description:
            "In-person interpreters assist with morning rounds, nursing interactions, consent documentation, and pharmacy instructions in Arabic, Russian, and French.",
        iconName: "Languages",
    },
    {
        title: "Embassy Liaison & Third-Party Sponsorship",
        description:
            "We facilitate clinical documentation handoffs for patients sponsored by foreign embassies, health ministries, or international corporate insurance guarantees.",
        iconName: "Building2",
    },
];

export const INTERNATIONAL_FAQS = [
    {
        question: "How does CaresDaddy support embassy-sponsored medical travelers?",
        answer:
            "For patients sponsored by royal embassies, military boards, or foreign health ministries, we coordinate directly with the hospital's international financial desk to verify letters of guarantee (LOG), itemize hospital tariffs, and deliver interim clinical reports according to embassy standards.",
    },
    {
        question: "Do I need to visit the Foreigners Regional Registration Office (FRRO) in person?",
        answer:
            "Most immigration formalities—including visa extensions and stay endorsements—are handled entirely through India's online e-FRRO web portal. We assist with compiling updated hospital medical certificates and proof of local stay so you do not need to make physical visits unless specifically requested by immigration authorities.",
    },
    {
        question: "Are in-hospital translation services private and confidential?",
        answer:
            "Yes. In-hospital interpreters adhere to clinical privacy guidelines. They assist strictly during clinical exams, procedural briefings, and medical consent verifications to ensure you fully comprehend your treatment plan.",
    },
    {
        question: "Can families cook their own cultural food during prolonged treatments?",
        answer:
            "Yes. For long-term treatments such as bone marrow transplants, oncology cycles, or orthopedics, we arrange serviced apartments with private, sanitized kitchens near Saket hospitals, enabling families to cook according to their own dietary and cultural preferences.",
    },
];