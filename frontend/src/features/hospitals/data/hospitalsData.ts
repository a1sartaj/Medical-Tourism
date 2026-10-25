export interface HospitalListItem {
    id: string;
    name: string;
    slug: string;
    city: string;
    cityCode: string;
    country: string;
    hospitalType: "Multi-Speciality" | "Super Speciality" | "Quaternary Care";
    establishedYear: number;
    bedCount: number;
    doctorCount: number;
    imageUrl: string;
    accreditations: string[];
    keySpecialties: string[];
    facilities: string[];
    treatmentsOffered: string[];
    shortDescription: string;
}

export const HOSPITAL_CITIES = [
    { label: "All Destinations", value: "all" },
    { label: "New Delhi (Saket / NCR)", value: "delhi" },
    { label: "Gurugram (Haryana)", value: "gurugram" },
    { label: "Mumbai (Maharashtra)", value: "mumbai" },
    { label: "Chennai (Tamil Nadu)", value: "chennai" },
];

export const HOSPITAL_SPECIALTIES = [
    { label: "All Specialties", value: "all" },
    { label: "Cardiology & Cardiac Surgery", value: "cardiology" },
    { label: "Orthopedics & Joint Replacement", value: "orthopedics" },
    { label: "Oncology & Radiation", value: "oncology" },
    { label: "Neurology & Spine Surgery", value: "neurology" },
    { label: "Organ Transplantation", value: "transplant" },
];

export const ACCREDITATION_OPTIONS = [
    { label: "All Accreditations", value: "all" },
    { label: "JCI (Joint Commission International)", value: "jci" },
    { label: "NABH Accredited", value: "nabh" },
    { label: "NABL Certified Labs", value: "nabl" },
];

export const FACILITY_FILTERS = [
    { label: "Robotic Surgery Suite", value: "robotic" },
    { label: "International Patient Lounge", value: "intl-lounge" },
    { label: "Language Interpreters", value: "interpreters" },
    { label: "24/7 Advanced ICU", value: "icu" },
];

export const HOSPITALS_DATA: HospitalListItem[] = [
    {
        id: "hosp-1",
        name: "Max Super Speciality Hospital, Saket",
        slug: "max-super-speciality-hospital-saket",
        city: "New Delhi (Saket)",
        cityCode: "delhi",
        country: "India",
        hospitalType: "Quaternary Care",
        establishedYear: 2006,
        bedCount: 530,
        doctorCount: 420,
        imageUrl:
            "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
        accreditations: ["JCI Accredited", "NABH Accredited", "NABL Certified"],
        keySpecialties: ["Cardiology", "Orthopedics", "Oncology", "Transplants"],
        facilities: ["robotic", "intl-lounge", "interpreters", "icu"],
        treatmentsOffered: [
            "Coronary Artery Bypass Grafting (CABG)",
            "Robotic Total Knee Replacement",
            "Living Donor Renal (Kidney) Transplant",
        ],
        shortDescription:
            "A flagship quaternary-care facility located in Saket, South Delhi, equipped with TrueBeam linac systems, Da Vinci Xi surgical robotics, and dedicated international patient concierge desks.",
    },
    {
        id: "hosp-2",
        name: "Fortis Escorts Heart Institute",
        slug: "fortis-escorts-heart-institute",
        city: "New Delhi (Okhla)",
        cityCode: "delhi",
        country: "India",
        hospitalType: "Super Speciality",
        establishedYear: 1988,
        bedCount: 310,
        doctorCount: 260,
        imageUrl:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        accreditations: ["JCI Accredited", "NABH Accredited"],
        keySpecialties: ["Cardiology & Cardiac Surgery", "Vascular Surgery"],
        facilities: ["intl-lounge", "interpreters", "icu"],
        treatmentsOffered: [
            "Coronary Artery Bypass Grafting (CABG)",
            "Transcatheter Aortic Valve Replacement (TAVR)",
        ],
        shortDescription:
            "Pioneer cardiovascular referral center featuring digital flat-panel catheterization labs, specialized pediatric cardiac teams, and international teleconsultation units.",
    },
    {
        id: "hosp-3",
        name: "Medanta - The Medicity",
        slug: "medanta-the-medicity-gurugram",
        city: "Gurugram (NCR)",
        cityCode: "gurugram",
        country: "India",
        hospitalType: "Quaternary Care",
        establishedYear: 2009,
        bedCount: 1250,
        doctorCount: 800,
        imageUrl:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        accreditations: ["JCI Accredited", "NABH Accredited", "NABL Certified"],
        keySpecialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
        facilities: ["robotic", "intl-lounge", "interpreters", "icu"],
        treatmentsOffered: [
            "Minimally Invasive Spine Fusion (TLIF)",
            "Living Donor Liver Transplant",
            "Robotic Total Knee Replacement",
        ],
        shortDescription:
            "One of India's largest multi-disciplinary institutes, spread across 43 acres, housing integrated bone-marrow transplant rooms, CyberKnife, and dedicated foreign travel desks.",
    },
    {
        id: "hosp-4",
        name: "Indraprastha Apollo Hospital",
        slug: "indraprastha-apollo-hospital-delhi",
        city: "New Delhi (Sarita Vihar)",
        cityCode: "delhi",
        country: "India",
        hospitalType: "Multi-Speciality",
        establishedYear: 1996,
        bedCount: 710,
        doctorCount: 520,
        imageUrl:
            "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
        accreditations: ["JCI Accredited", "NABH Accredited"],
        keySpecialties: ["Transplants", "Neurology", "Orthopedics", "Oncology"],
        facilities: ["robotic", "intl-lounge", "interpreters", "icu"],
        treatmentsOffered: [
            "Living Donor Renal (Kidney) Transplant",
            "All-on-4 / All-on-6 Dental Implants",
        ],
        shortDescription:
            "First hospital in India to receive international JCI accreditation, offering extensive organ transplant programs and multi-lingual case management services.",
    },
];