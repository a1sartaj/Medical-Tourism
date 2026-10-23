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
        treatmentCategory: "Cardiology",
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
];