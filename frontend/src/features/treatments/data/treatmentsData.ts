export interface TreatmentListItem {
    id: string;
    name: string;
    slug: string;
    categoryId: string;
    categoryName: string;
    description: string;
    startingCostUSD: number;
    startingCostDisplay: string;
    destination: string;
    destinationCode: string;
    durationHospital: string;
    durationStay: string;
    successRate?: string;
    verified: boolean;
    imageUrl: string;
}

export const TREATMENTS_DATA: TreatmentListItem[] = [
    {
        id: "trt-1",
        name: "Coronary Artery Bypass Grafting (CABG)",
        slug: "coronary-artery-bypass-grafting-cabg",
        categoryId: "cardiology",
        categoryName: "Cardiology",
        description:
            "Advanced bypass surgery to restore essential blood flow around blocked coronary arteries using minimally invasive or beating-heart techniques.",
        startingCostUSD: 4500,
        startingCostDisplay: "$4,500 - $6,500",
        destination: "New Delhi (Saket / NCR)",
        destinationCode: "delhi",
        durationHospital: "5 - 7 Days",
        durationStay: "14 Days Total",
        successRate: "98.5%",
        verified: true,
        imageUrl:
            "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "trt-2",
        name: "Robotic Total Knee Replacement",
        slug: "robotic-total-knee-replacement",
        categoryId: "orthopedics",
        categoryName: "Orthopedics",
        description:
            "Mako or Navio robotic-guided knee resurfacing delivering sub-millimeter surgical accuracy and extended prosthetic joint life.",
        startingCostUSD: 4200,
        startingCostDisplay: "$4,200 - $5,800",
        destination: "New Delhi (Saket / NCR)",
        destinationCode: "delhi",
        durationHospital: "3 - 4 Days",
        durationStay: "12 Days Total",
        successRate: "99%",
        verified: true,
        imageUrl:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "trt-3",
        name: "Proton Beam Radiation Therapy",
        slug: "proton-beam-radiation-therapy",
        categoryId: "oncology",
        categoryName: "Oncology",
        description:
            "Pencil-beam targeted proton radiation destroying deep-seated tumors with negligible exposure to surrounding healthy tissues.",
        startingCostUSD: 18000,
        startingCostDisplay: "$18,000 - $24,000",
        destination: "Chennai (Tamil Nadu)",
        destinationCode: "chennai",
        durationHospital: "Day Care / Outpatient",
        durationStay: "21 Days Total",
        successRate: "High Targeted Efficacy",
        verified: true,
        imageUrl:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "trt-4",
        name: "Minimally Invasive Spine Fusion (TLIF)",
        slug: "minimally-invasive-spine-fusion",
        categoryId: "neurology",
        categoryName: "Neurology",
        description:
            "Keyhole incision surgical spinal stabilization relieving nerve compression, chronic instability, and severe sciatica pain.",
        startingCostUSD: 5200,
        startingCostDisplay: "$5,200 - $7,000",
        destination: "Gurugram (Haryana)",
        destinationCode: "gurugram",
        durationHospital: "4 Days",
        durationStay: "10 Days Total",
        successRate: "95%",
        verified: true,
        imageUrl:
            "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "trt-5",
        name: "All-on-4 / All-on-6 Dental Implants",
        slug: "all-on-4-dental-implants",
        categoryId: "dental",
        categoryName: "Dental Treatments",
        description:
            "Full-arch teeth rehabilitation using medical-grade titanium screw fixtures with same-day customized temporary prosthesis fixed.",
        startingCostUSD: 2400,
        startingCostDisplay: "$2,400 - $3,800",
        destination: "New Delhi (Saket / NCR)",
        destinationCode: "delhi",
        durationHospital: "Outpatient",
        durationStay: "7 Days Total",
        successRate: "98%",
        verified: true,
        imageUrl:
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "trt-6",
        name: "IVF with ICSI & Genetic Screening (PGD/PGS)",
        slug: "ivf-icsi-genetic-screening",
        categoryId: "fertility",
        categoryName: "Fertility and IVF",
        description:
            "Complete assisted reproduction cycle with Intracytoplasmic Sperm Injection and advanced chromosomal anomaly screening.",
        startingCostUSD: 3100,
        startingCostDisplay: "$3,100 - $4,500",
        destination: "Mumbai (Maharashtra)",
        destinationCode: "mumbai",
        durationHospital: "Outpatient Day Visits",
        durationStay: "18 Days Total",
        successRate: "65 - 72%",
        verified: true,
        imageUrl:
            "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "trt-7",
        name: "Living Donor Renal (Kidney) Transplant",
        slug: "living-donor-kidney-transplant",
        categoryId: "transplant",
        categoryName: "Organ Transplantation",
        description:
            "State-regulated transplant program with rigorous clinical cross-matching, laparoscopic donor nephrectomy, and ICU monitoring.",
        startingCostUSD: 12500,
        startingCostDisplay: "$12,500 - $16,000",
        destination: "New Delhi (Saket / NCR)",
        destinationCode: "delhi",
        durationHospital: "10 - 12 Days",
        durationStay: "30 Days Total",
        successRate: "96%",
        verified: true,
        imageUrl:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "trt-8",
        name: "Laparoscopic Sleeve Gastrectomy",
        slug: "laparoscopic-sleeve-gastrectomy",
        categoryId: "surgery",
        categoryName: "General & Specialized Surgery",
        description:
            "Bariatric metabolic weight-reduction surgery with keyhole stapling to reduce stomach volume and reverse obesity comorbidities.",
        startingCostUSD: 4000,
        startingCostDisplay: "$4,000 - $5,500",
        destination: "Gurugram (Haryana)",
        destinationCode: "gurugram",
        durationHospital: "3 Days",
        durationStay: "10 Days Total",
        successRate: "92%",
        verified: true,
        imageUrl:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
];