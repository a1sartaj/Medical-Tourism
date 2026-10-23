export interface HospitalItem {
    id: string;
    name: string;
    slug: string;
    city: string;
    country: string;
    image: string;
    accreditations: string[];
    specialties: string[];
    facilities: string[];
    bedCount: string;
}

export const FEATURED_HOSPITALS: HospitalItem[] = [
    {
        id: "h1",
        name: "Max Super Speciality Hospital",
        slug: "max-super-speciality-saket",
        city: "Saket, Delhi",
        country: "India",
        image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
        accreditations: ["JCI Accredited", "NABH Certified"],
        specialties: ["Cardiology", "Oncology", "Neurosciences", "Orthopedics"],
        facilities: ["Dedicated International Lounge", "Advanced Robotic Surgery", "Language Interpreters"],
        bedCount: "500+ Beds",
    },
    {
        id: "h2",
        name: "Fortis Memorial Research Institute",
        slug: "fortis-memorial-research-institute",
        city: "Gurugram, Delhi NCR",
        country: "India",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        accreditations: ["JCI Accredited", "NABH Certified", "NABL Lab"],
        specialties: ["Bone Marrow Transplant", "Cardiac Sciences", "Robotic Urology", "IVF"],
        facilities: ["Custom Dietary Planning", "Airport Ambulance Transfers", "Private Suites"],
        bedCount: "1000+ Beds",
    },
    {
        id: "h3",
        name: "Indraprastha Apollo Hospital",
        slug: "apollo-hospital-delhi",
        city: "New Delhi",
        country: "India",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        accreditations: ["JCI Accredited", "ISO 9001"],
        specialties: ["Liver Transplant", "Kidney Transplant", "Cosmetic Surgery", "Spine Care"],
        facilities: ["Visa & Foreign Exchange Desk", "Tele-Consult Followups", "24/7 Pharmacy"],
        bedCount: "700+ Beds",
    },
];