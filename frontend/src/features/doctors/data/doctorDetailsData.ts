export interface DoctorProcedure {
    name: string;
    slug: string;
    category: string;
    startingCost: string;
}

export interface DoctorDetail {
    slug: string;
    name: string;
    designation: string;
    specialty: string;
    photo: string;
    qualifications: string;
    credentialsList: string[];
    experienceYears: number;
    experienceDisplay: string;
    registrationNumber: string;
    registrationCouncil: string;
    languages: string[];
    hospital: {
        name: string;
        slug: string;
        location: string;
        type: string;
    };
    opdSchedule: {
        days: string;
        timings: string;
        mode: string;
    }[];
    biography: string[];
    specializations: string[];
    procedures: DoctorProcedure[];
    relatedDoctors: {
        slug: string;
        name: string;
        specialty: string;
        hospitalName: string;
        photo: string;
        experience: string;
    }[];
}

export const DOCTORS_DETAILS: Record<string, DoctorDetail> = {
    "dr-b-k-sharma": {
        slug: "dr-b-k-sharma",
        name: "Dr. B. K. Sharma",
        designation: "Principal Director & Chief Cardiothoracic Surgeon",
        specialty: "Cardiothoracic & Vascular Surgery (CTVS)",
        photo:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
        qualifications: "MBBS, MS (General Surgery), MCh (CTVS), FIACS",
        credentialsList: [
            "Fellowship of the Indian Association of Cardiovascular-Thoracic Surgeons (FIACS)",
            "Advanced Minimally Invasive Cardiac Surgery Fellowship (Germany)",
            "Member of the Medical Council of India / National Medical Commission",
        ],
        experienceYears: 26,
        experienceDisplay: "26+ Years Clinical & Surgical Experience",
        registrationNumber: "DMC-24892",
        registrationCouncil: "Delhi Medical Council (DMC), India",
        languages: ["English", "Hindi"],
        hospital: {
            name: "Max Super Speciality Hospital, Saket",
            slug: "max-super-speciality-hospital-saket",
            location: "Saket, New Delhi",
            type: "Quaternary Care Hospital",
        },
        opdSchedule: [
            {
                days: "Monday, Wednesday, Friday",
                timings: "10:00 AM – 02:00 PM",
                mode: "In-Person Clinic & Hospital Rounds",
            },
            {
                days: "Tuesday, Thursday",
                timings: "03:00 PM – 05:00 PM",
                mode: "International Telemedicine Review",
            },
        ],
        biography: [
            "Dr. B. K. Sharma is a renowned cardiothoracic surgeon serving as Principal Director of CTVS at Max Super Speciality Hospital, Saket. With more than 26 years of active surgical experience, he has performed and supervised over 8,500 complex adult cardiac procedures.",
            "His primary expertise spans beating-heart coronary artery bypass grafting (Off-Pump CABG), total arterial revascularization using bilateral internal mammary arteries (LIMA-RIMA), minimally invasive direct CABG (MIDCAB), and valve sparing aortic reconstructions.",
            "Dr. Sharma regularly examines complex cardiac international referrals from the Middle East, Central Asia, and Africa, orchestrating pre-travel angiographic evaluations and personalized operative plans.",
        ],
        specializations: [
            "Off-Pump Beating Heart Bypass Surgery (CABG)",
            "Total Arterial Revascularization (LIMA-RIMA conduits)",
            "Minimally Invasive Cardiac Valve Repair and Replacement",
            "Thoracic Aortic Aneurysm & Dissection Surgery",
            "Redo / Revision Complex Cardiothoracic Procedures",
            "Post-Infarction Ventricular Septal Defect Repair",
        ],
        procedures: [
            {
                name: "Coronary Artery Bypass Grafting (CABG)",
                slug: "coronary-artery-bypass-grafting-cabg",
                category: "Cardiology & Surgery",
                startingCost: "$4,500 – $6,500",
            },
            {
                name: "Transcatheter Aortic Valve Replacement (TAVR)",
                slug: "transcatheter-aortic-valve-replacement-tavr",
                category: "Cardiology",
                startingCost: "$16,000 – $22,000",
            },
            {
                name: "Aortic Valve Replacement (Mechanical/Tissue)",
                slug: "aortic-valve-replacement",
                category: "Cardiothoracic Surgery",
                startingCost: "$5,500 – $7,200",
            },
        ],
        relatedDoctors: [
            {
                slug: "dr-ashok-mehta",
                name: "Dr. Ashok Mehta",
                specialty: "Adult Cardiovascular Surgery",
                hospitalName: "Fortis Escorts Heart Institute",
                photo:
                    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
                experience: "31+ Years",
            },
            {
                slug: "dr-subhash-chandra",
                name: "Dr. Subhash Chandra",
                specialty: "Interventional Cardiology",
                hospitalName: "Max Super Speciality Hospital, Saket",
                photo:
                    "https://images.unsplash.com/photo-1594824813576-200778f8cb15?auto=format&fit=crop&w=400&q=80",
                experience: "28+ Years",
            },
        ],
    },
};