export interface TestimonialItem {
    id: string;
    patientName: string;
    country: string;
    flag: string;
    treatmentCategory: string;
    hospitalName: string;
    feedback: string;
    consentVerified: boolean;
    photo?: string;
}

export const PATIENT_TESTIMONIALS: TestimonialItem[] = [
    {
        id: "test-1",
        patientName: "Tariq Al-Harbi",
        country: "Saudi Arabia",
        flag: "🇸🇦",
        treatmentCategory: "Orthopedics (Knee Joint Care)",
        hospitalName: "Max Super Speciality Hospital, Saket",
        feedback:
            "The coordination from arrival to hospital discharge was transparent and well-managed. Having an Arabic-speaking coordinator made discussing procedures with the surgical team much easier.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "test-2",
        patientName: "Elena Rostova",
        country: "Uzbekistan",
        flag: "🇺🇿",
        treatmentCategory: "Cardiology (CABG)",
        hospitalName: "Fortis Escorts Heart Institute",
        feedback:
            "Received an itemized cost projection beforehand that matched the actual hospital invoice closely. The case managers helped manage the visa invitation letter on short notice.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "test-3",
        patientName: "David K. Mensah",
        country: "Ghana",
        flag: "🇬🇭",
        treatmentCategory: "Spine Surgery",
        hospitalName: "Indraprastha Apollo Hospital",
        feedback:
            "All medical consultations and post-procedure checkups were arranged without long wait times. Clear non-clinical administrative guidance throughout our 3-week stay.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "test-4",
        patientName: "Amina Al-Mansoor",
        country: "UAE",
        flag: "🇦🇪",
        treatmentCategory: "Oncology Care",
        hospitalName: "Medanta - The Medicity",
        feedback:
            "The dedicated patient assistance team coordinated second opinions quickly. From hotel arrangements in Gurgaon to hospital transfers, everything was well organized.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "test-5",
        patientName: "John Ochieng",
        country: "Kenya",
        flag: "🇰🇪",
        treatmentCategory: "Renal Sciences & Urology",
        hospitalName: "Max Smart Super Speciality Hospital",
        feedback:
            "Transparent fee breakdown and quick response times. The travel assistance desk handled all FRRO medical registration paperwork without any hassle.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "test-6",
        patientName: "Fatima Zahra",
        country: "Morocco",
        flag: "🇲🇦",
        treatmentCategory: "Fertility & IVF",
        hospitalName: "Apollo Cradle & Children's Hospital",
        feedback:
            "Our coordinator remained accessible throughout our multi-week treatment cycle. Doctors were thorough and empathetic during clinical consultations.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "test-7",
        patientName: "Farrukh Rakhimov",
        country: "Tajikistan",
        flag: "🇹🇯",
        treatmentCategory: "Neuro & Spine Surgery",
        hospitalName: "Artemis Hospital",
        feedback:
            "Interpreter assistance at the hospital desk was prompt. The pre-travel cost estimates matched the actual hospital package precisely.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "test-8",
        patientName: "Grace Adebayo",
        country: "Nigeria",
        flag: "🇳🇬",
        treatmentCategory: "Hip Replacement",
        hospitalName: "Max Super Speciality Hospital, Saket",
        feedback:
            "Physiotherapy and post-surgery mobility follow-ups were scheduled smoothly. Very grateful for the reliable airport pickup and hotel booking assistance.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "test-9",
        patientName: "Nasser Al-Subaie",
        country: "Kuwait",
        flag: "🇰🇼",
        treatmentCategory: "Cardiology",
        hospitalName: "Fortis Escorts Heart Institute",
        feedback:
            "Comprehensive diagnostic scheduling with clear discharge summaries translated for my local physician back home. Professional service.",
        consentVerified: true,
        photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    },
];