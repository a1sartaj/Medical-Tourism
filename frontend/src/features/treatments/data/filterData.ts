export interface TreatmentCategoryOption {
    id: string;
    name: string;
    iconName: string;
    count: number;
}

export const TREATMENT_CATEGORIES: TreatmentCategoryOption[] = [
    { id: "all", name: "All Specialties", iconName: "Layers", count: 48 },
    { id: "cardiology", name: "Cardiology", iconName: "HeartPulse", count: 8 },
    { id: "orthopedics", name: "Orthopedics", iconName: "Bone", count: 7 },
    { id: "oncology", name: "Oncology", iconName: "Activity", count: 6 },
    { id: "neurology", name: "Neurology", iconName: "Brain", count: 5 },
    { id: "dental", name: "Dental Treatments", iconName: "Smile", count: 4 },
    { id: "fertility", name: "Fertility and IVF", iconName: "Baby", count: 4 },
    { id: "cosmetic", name: "Cosmetic and Plastic Surgery", iconName: "Sparkles", count: 5 },
    { id: "ophthalmology", name: "Ophthalmology", iconName: "Eye", count: 3 },
    { id: "transplant", name: "Organ Transplantation", iconName: "ShieldAlert", count: 3 },
    { id: "surgery", name: "General & Specialized Surgery", iconName: "Stethoscope", count: 3 },
];

export const DESTINATION_OPTIONS = [
    { label: "All Destinations", value: "all" },
    { label: "New Delhi (Saket / NCR)", value: "delhi" },
    { label: "Gurugram (Haryana)", value: "gurugram" },
    { label: "Mumbai (Maharashtra)", value: "mumbai" },
    { label: "Chennai (Tamil Nadu)", value: "chennai" },
];

export const BUDGET_RANGES = [
    { label: "Any Budget", value: "all" },
    { label: "Under $3,000", value: "under-3000" },
    { label: "$3,000 – $6,000", value: "3000-6000" },
    { label: "$6,000 – $10,000", value: "6000-10000" },
    { label: "$10,000+", value: "above-10000" },
];