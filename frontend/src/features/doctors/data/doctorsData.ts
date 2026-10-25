export interface DoctorListItem {
    id: string;
    name: string;
    slug: string;
    photo: string;
    specialtyId: string;
    specialtyName: string;
    subSpecialties: string[];
    qualifications: string;
    experienceYears: number;
    experienceDisplay: string;
    hospitalId: string;
    hospitalName: string;
    cityCode: string;
    cityDisplay: string;
    verified: boolean;
    languages: string[];
    opdDays: string;
}

export const DOCTOR_SPECIALTIES = [
    { label: "All Specialties", value: "all" },
    { label: "Cardiothoracic Surgery", value: "cardiac-surgery" },
    { label: "Interventional Cardiology", value: "cardiology" },
    { label: "Orthopedics & Joint Replacement", value: "orthopedics" },
    { label: "Spine & Neuro Surgery", value: "spine-neuro" },
    { label: "Medical & Surgical Oncology", value: "oncology" },
    { label: "Organ Transplantation & Hepato-Biliary", value: "transplant" },
];

export const DOCTOR_DESTINATIONS = [
    { label: "All Destinations", value: "all" },
    { label: "New Delhi (Saket / South Delhi)", value: "delhi" },
    { label: "Gurugram (NCR)", value: "gurugram" },
    { label: "Chennai (Tamil Nadu)", value: "chennai" },
];

export const DOCTOR_HOSPITALS = [
    { label: "All Hospitals", value: "all" },
    { label: "Max Super Speciality Hospital, Saket", value: "max-saket" },
    { label: "Fortis Escorts Heart Institute", value: "fortis-escorts" },
    { label: "Medanta - The Medicity", value: "medanta" },
    { label: "Indraprastha Apollo Hospital", value: "apollo" },
];

export const DOCTORS_DATA: DoctorListItem[] = [
    {
        id: "doc-1",
        name: "Dr. B. K. Sharma",
        slug: "dr-b-k-sharma",
        photo:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
        specialtyId: "cardiac-surgery",
        specialtyName: "Cardiothoracic & Vascular Surgery",
        subSpecialties: ["Adult Cardiac Surgery", "Off-Pump CABG", "Aortic Aneurysm Repair"],
        qualifications: "MBBS, MS (Gen Surgery), MCh (CTVS), FIACS",
        experienceYears: 26,
        experienceDisplay: "26+ Years Experience",
        hospitalId: "max-saket",
        hospitalName: "Max Super Speciality Hospital, Saket",
        cityCode: "delhi",
        cityDisplay: "Saket, New Delhi",
        verified: true,
        languages: ["English", "Hindi"],
        opdDays: "Mon, Wed, Fri",
    },
    {
        id: "doc-2",
        name: "Dr. Ashok Mehta",
        slug: "dr-ashok-mehta",
        photo:
            "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
        specialtyId: "cardiac-surgery",
        specialtyName: "Adult Cardiovascular Surgery",
        subSpecialties: ["Beating Heart Revascularization", "Valve Repair", "Heart Failure Surgeries"],
        qualifications: "MBBS, MS, MCh (Cardiothoracic), FACC",
        experienceYears: 31,
        experienceDisplay: "31+ Years Experience",
        hospitalId: "fortis-escorts",
        hospitalName: "Fortis Escorts Heart Institute",
        cityCode: "delhi",
        cityDisplay: "Okhla, New Delhi",
        verified: true,
        languages: ["English", "Hindi"],
        opdDays: "Tue, Thu, Sat",
    },
    {
        id: "doc-3",
        name: "Dr. H. S. Chhabra",
        slug: "dr-h-s-chhabra",
        photo:
            "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
        specialtyId: "spine-neuro",
        specialtyName: "Spine Surgery & Orthopedics",
        subSpecialties: ["Minimally Invasive Spine Surgery", "Deformity Correction", "Cervical Spine"],
        qualifications: "MBBS, MS (Orthopedics), Spine Surgery Fellowship (Germany)",
        experienceYears: 30,
        experienceDisplay: "30+ Years Experience",
        hospitalId: "max-saket",
        hospitalName: "Max Super Speciality Hospital, Saket",
        cityCode: "delhi",
        cityDisplay: "Saket, New Delhi",
        verified: true,
        languages: ["English", "Hindi", "Punjabi"],
        opdDays: "Mon, Tue, Thu",
    },
    {
        id: "doc-4",
        name: "Dr. S. Mukherjee",
        slug: "dr-s-mukherjee",
        photo:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
        specialtyId: "orthopedics",
        specialtyName: "Orthopedics & Joint Reconstruction",
        subSpecialties: ["Robotic Knee Replacement", "Revision Hip Arthroplasty", "Sports Arthroscopy"],
        qualifications: "MBBS, MS (Ortho), DNB, Fellowship Adult Reconstruction (USA)",
        experienceYears: 22,
        experienceDisplay: "22+ Years Experience",
        hospitalId: "medanta",
        hospitalName: "Medanta - The Medicity",
        cityCode: "gurugram",
        cityDisplay: "Gurugram, NCR",
        verified: true,
        languages: ["English", "Hindi", "Bengali"],
        opdDays: "Wed, Thu, Sat",
    },
    {
        id: "doc-5",
        name: "Dr. A. Verma",
        slug: "dr-a-verma",
        photo:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
        specialtyId: "oncology",
        specialtyName: "Surgical Oncology",
        subSpecialties: ["Thoracic Oncology", "GI & Hepatobiliary Cancer", "Robotic Oncosurgery"],
        qualifications: "MBBS, MS (Surg), MCh (Surgical Oncology), FACS",
        experienceYears: 24,
        experienceDisplay: "24+ Years Experience",
        hospitalId: "apollo",
        hospitalName: "Indraprastha Apollo Hospital",
        cityCode: "delhi",
        cityDisplay: "Sarita Vihar, New Delhi",
        verified: true,
        languages: ["English", "Hindi"],
        opdDays: "Mon, Wed, Fri",
    },
    {
        id: "doc-6",
        name: "Dr. Subhash Chandra",
        slug: "dr-subhash-chandra",
        photo:
            "https://images.unsplash.com/photo-1594824813576-200778f8cb15?auto=format&fit=crop&w=400&q=80",
        specialtyId: "cardiology",
        specialtyName: "Interventional Cardiology",
        subSpecialties: ["Complex Angioplasty (PCI)", "TAVR / TAVI", "Pacemakers & ICDs"],
        qualifications: "MBBS, MD (Medicine), DM (Cardiology), FACC",
        experienceYears: 28,
        experienceDisplay: "28+ Years Experience",
        hospitalId: "max-saket",
        hospitalName: "Max Super Speciality Hospital, Saket",
        cityCode: "delhi",
        cityDisplay: "Saket, New Delhi",
        verified: true,
        languages: ["English", "Hindi"],
        opdDays: "Tue, Thu, Fri",
    },
];