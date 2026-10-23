export interface DoctorItem {
    id: string;
    name: string;
    slug: string;
    photo: string;
    specialty: string;
    qualifications: string;
    experienceYears: number;
    hospitalName: string;
    hospitalSlug: string;
    location: string;
    surgeriesPerformed?: string;
}

export const FEATURED_DOCTORS: DoctorItem[] = [
    {
        id: "doc-1",
        name: "Dr. Ashok Seth",
        slug: "dr-ashok-seth",
        photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
        specialty: "Interventional Cardiology",
        qualifications: "MBBS, MD, FRCP (London, Edin, Glasg)",
        experienceYears: 35,
        hospitalName: "Fortis Escorts Heart Institute",
        hospitalSlug: "fortis-escorts-delhi",
        location: "New Delhi, India",
        surgeriesPerformed: "20,000+ Angioplasties",
    },
    {
        id: "doc-2",
        name: "Dr. Naresh Trehan",
        slug: "dr-naresh-trehan",
        photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
        specialty: "Cardiovascular & Thoracic Surgery",
        qualifications: "MBBS, Diplomate American Board of Surgery",
        experienceYears: 40,
        hospitalName: "Medanta - The Medicity",
        hospitalSlug: "medanta-the-medicity-gurugram",
        location: "Gurugram, Delhi NCR",
        surgeriesPerformed: "48,000+ Open Heart Surgeries",
    },
    {
        id: "doc-3",
        name: "Dr. Subhash Gupta",
        slug: "dr-subhash-gupta",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
        specialty: "Liver Transplantation & Hepato-Pancreato-Biliary",
        qualifications: "MBBS, MS, FRCS (Edin, Glasg)",
        experienceYears: 32,
        hospitalName: "Max Super Speciality Hospital",
        hospitalSlug: "max-super-speciality-saket",
        location: "Saket, Delhi, India",
        surgeriesPerformed: "3,000+ Liver Transplants",
    },
    {
        id: "doc-4",
        name: "Dr. S. K. S. Marya",
        slug: "dr-sks-marya",
        photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
        specialty: "Orthopedics & Joint Replacement",
        qualifications: "MBBS, MS (Ortho), M.Ch. (Liverpool, UK)",
        experienceYears: 38,
        hospitalName: "Max Smart Super Speciality Hospital",
        hospitalSlug: "max-smart-saket",
        location: "Saket, Delhi, India",
        surgeriesPerformed: "18,000+ Joint Surgeries",
    },
];