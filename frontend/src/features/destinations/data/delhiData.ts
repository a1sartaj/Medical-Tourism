export interface HospitalHub {
    name: string;
    slug: string;
    locality: string;
    highlights: string[];
    bedCount: string;
}

export interface TravelTip {
    title: string;
    description: string;
    tag: string;
}

export const DELHI_DESTINATION_DATA = {
    name: "New Delhi & National Capital Region (NCR)",
    country: "India",
    heroSubtitle:
        "India's leading healthcare capital, offering the highest concentration of JCI and NABH accredited quaternary care medical campuses, cutting-edge surgical robotics, and dedicated international patient facilities.",
    airportInfo: {
        name: "Indira Gandhi International Airport (DEL)",
        terminal: "Terminal 3 (International Arrivals & Departures)",
        distanceToSaket: "14 km (~30–45 mins by expressway)",
        keyFeatures: [
            "Direct non-stop flight connections to UAE, Saudi Arabia, Oman, Qatar, Uzbekistan, and Kenya",
            "Dedicated Medical Visa and e-Visa verification counters at immigration",
            "24/7 prepaid taxi, app-based pickup zones, and private medical transport bays",
            "Terminal wheelchair assistance and stretcher ramp coordination",
        ],
    },
    clinicalHighlights: [
        {
            title: "Quaternary Clinical Centers",
            value: "15+ JCI/NABH Campuses",
            detail: "Facilities like Max Saket, Fortis Escorts, Medanta, and Apollo within a 20-mile radius.",
        },
        {
            title: "Advanced Robotic Suites",
            value: "Da Vinci Xi & Mako",
            detail: "Sub-millimeter precision for robotic joint replacements, urology, and cardiac surgeries.",
        },
        {
            title: "Dedicated Foreign Desks",
            value: "Multi-Lingual Assistance",
            detail: "In-house Arabic, Russian, and French case managers at hospital admission desks.",
        },
        {
            title: "Cost Advantage",
            value: "60%–80% Savings",
            detail: "World-class tertiary surgical outcomes at transparent, benchmarked international tariffs.",
        },
    ],
    hospitalHubs: [
        {
            name: "Max Super Speciality Hospital",
            slug: "max-super-speciality-hospital-saket",
            locality: "Saket District Centre, South Delhi",
            highlights: ["Da Vinci Xi Robotics", "TrueBeam Linac Radiation", "Bone Marrow & Kidney Transplants"],
            bedCount: "530+ Beds",
        },
        {
            name: "Fortis Escorts Heart Institute",
            slug: "fortis-escorts-heart-institute",
            locality: "Okhla, South Delhi",
            highlights: ["Pioneering Adult Cardiac Surgery", "Beating Heart CABG", "Pediatric Heart Program"],
            bedCount: "310+ Beds",
        },
        {
            name: "Medanta - The Medicity",
            slug: "medanta-the-medicity-gurugram",
            locality: "Sector 38, Gurugram (NCR)",
            highlights: ["Integrated 43-Acre Campus", "CyberKnife System", "Living Donor Liver Transplants"],
            bedCount: "1,250+ Beds",
        },
        {
            name: "Indraprastha Apollo Hospital",
            slug: "indraprastha-apollo-hospital-delhi",
            locality: "Sarita Vihar, South Delhi",
            highlights: ["First JCI Accredited Hospital in India", "Comprehensive Oncology", "Multi-Organ Transplant"],
            bedCount: "710+ Beds",
        },
    ] as HospitalHub[],
    accommodationZones: [
        {
            zone: "Saket & Malviya Nagar (South Delhi)",
            idealFor: "Patients visiting Max Saket and PSRI Hospital",
            transitTime: "2 to 10 minutes from hospital gates",
            description:
                "Features serviced apartments with personal kitchenettes, quiet residential avenues, and multi-cuisine restaurants offering Halal-certified dining.",
        },
        {
            zone: "Jasola & New Friends Colony",
            idealFor: "Patients visiting Fortis Escorts and Apollo Sarita Vihar",
            transitTime: "5 to 15 minutes",
            description:
                "High concentration of international patient guest houses, budget-friendly hotels, and quick access to the Delhi Metro Violet Line.",
        },
        {
            zone: "Gurugram (Sohna Road & Cyber City)",
            idealFor: "Patients visiting Medanta, Fortis Memorial, and Artemis",
            transitTime: "5 to 20 minutes",
            description:
                "Modern corporate township with 4-star and 5-star international hotel chains, long-stay apartments, and direct airport access via NH-48.",
        },
    ],
    travelTips: [
        {
            tag: "Connectivity",
            title: "Local SIM Cards & Data",
            description:
                "Pre-activated local 5G SIM cards (Airtel or Jio) can be issued at the DEL Airport arrival terminal using your passport and Medical Visa.",
        },
        {
            tag: "Currency & Banking",
            title: "Currency Exchange & Cards",
            description:
                "Authorized currency exchange desks operate inside the airport and hospitals. Major international cards (Visa/Mastercard) are accepted at all pharmacies and partner hospitals.",
        },
        {
            tag: "Weather & Packing",
            title: "Seasonal Climate Advisory",
            description:
                "Delhi experiences warm summers (April–June, 32°C–42°C), pleasant monsoons (July–August), and cool winters (November–February, 8°C–22°C). Dress accordingly.",
        },
        {
            tag: "Safety & Transport",
            title: "Navigating the City",
            description:
                "Utilize verified app-based rides (Uber or Ola) or arrange dedicated hospital pick-ups facilitated through CaresDaddy for door-to-door safety.",
        },
    ] as TravelTip[],
    faqs: [
        {
            question: "Why is Delhi NCR preferred over other Indian cities for medical travel?",
            answer:
                "Delhi NCR has the highest concentration of internationally accredited hospital beds, world-renowned super-specialist surgeons, direct flight connectivity from across the globe, and established language support networks.",
        },
        {
            question: "How far are the partner hospitals from the airport?",
            answer:
                "South Delhi hospitals (such as Max Saket) are situated 14 km (approximately 30 to 45 minutes) from Terminal 3. Gurugram hospitals (such as Medanta) are located 18 km away via the signal-free expressway.",
        },
        {
            question: "Are there kitchen-equipped accommodations for families preparing home meals?",
            answer:
                "Yes, our coordination desk in Saket maintains partnerships with serviced apartments that offer fully equipped private kitchens, daily housekeeping, and lift access within 1 km of the hospital.",
        },
    ],
};