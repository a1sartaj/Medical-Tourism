export interface TreatmentItem {
    id: string;
    name: string;
    slug: string;
    category: string;
    description: string;
    startingCost: string;
    duration: string;
    image: string;
    verified: boolean;
}

export const POPULAR_TREATMENTS: TreatmentItem[] = [
    {
        id: "t1",
        name: "Total Knee Replacement",
        slug: "knee-replacement",
        category: "Orthopedics",
        description: "Minimally invasive joint surgery using high-grade biocompatible implants.",
        startingCost: "$4,200",
        duration: "3-5 Days Stay",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        verified: true,
    },
    {
        id: "t2",
        name: "Coronary Artery Bypass (CABG)",
        slug: "cabg-heart-surgery",
        category: "Cardiology",
        description: "Advanced heart bypass procedure performed by internationally certified surgeons.",
        startingCost: "$5,500",
        duration: "7-10 Days Stay",
        image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
        verified: true,
    },
    {
        id: "t3",
        name: "IVF & Fertility Treatment",
        slug: "ivf-fertility",
        category: "Fertility & IVF",
        description: "Comprehensive fertility care with genetic testing and high success clinical rates.",
        startingCost: "$3,200",
        duration: "Outpatient / Day Care",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
        verified: true,
    },
    {
        id: "t4",
        name: "Spine Fusion & Disc Surgery",
        slug: "spine-surgery",
        category: "Neurology & Spine",
        description: "Precision endoscopic decompression and spinal stabilization procedures.",
        startingCost: "$4,800",
        duration: "4-6 Days Stay",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
        verified: true,
    },
    {
        id: "t5",
        name: "All-on-4 Dental Implants",
        slug: "dental-implants",
        category: "Dental Care",
        description: "Full-arch permanent tooth restorations using precision 3D guided surgery.",
        startingCost: "$1,800",
        duration: "2-3 Days Stay",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        verified: true,
    },
    {
        id: "t6",
        name: "Liver Transplant Evaluation",
        slug: "liver-transplant",
        category: "Organ Transplant",
        description: "Living donor surgical care at centers maintaining global infection control benchmarks.",
        startingCost: "$28,000",
        duration: "21-30 Days Stay",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
        verified: true,
    },
];