export interface BlogPostItem {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category:
    | "Treatment Guides"
    | "Medical Travel Guides"
    | "Hospital & Doctor Info"
    | "Treatment Cost Guides"
    | "International Patient Services"
    | "Recovery & Preparation";
    imageUrl: string;
    publishedDate: string;
    readTime: string;
    author: {
        name: string;
        role: string;
    };
    medicalReviewer?: {
        name: string;
        credentials: string;
    };
}

export const LATEST_BLOGS: BlogPostItem[] = [
    {
        id: "blog-1",
        title: "Complete Guide to Medical Visa (FRRO) Procedures for India",
        slug: "medical-visa-guide-india",
        excerpt:
            "A step-by-step checklist of documents, hospital invitation letters, and embassy formalities required for international patients and attendants.",
        category: "Medical Travel Guides",
        imageUrl:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Oct 12, 2026",
        readTime: "5 min read",
        author: {
            name: "International Desk Team",
            role: "Case Management Specialist",
        },
        medicalReviewer: {
            name: "Dr. R. K. Sharma",
            credentials: "MBBS, MHA",
        },
    },
    {
        id: "blog-2",
        title: "Understanding Robotic Knee Replacement: Recovery Timeline & Hospital Stay",
        slug: "robotic-knee-replacement-recovery-cost",
        excerpt:
            "Comparing surgical outcomes, minimal invasive incisions, implant longevity, and the recommended post-operative rehabilitation schedule.",
        category: "Treatment Guides",
        imageUrl:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Oct 05, 2026",
        readTime: "7 min read",
        author: {
            name: "Clinical Content Team",
            role: "Medical Writer",
        },
        medicalReviewer: {
            name: "Dr. S. Mukherjee",
            credentials: "MS (Ortho), Fellowship J&J",
        },
    },
    {
        id: "blog-3",
        title: "How to Obtain Independent Second Opinions for Complex Cardiac Surgeries",
        slug: "second-opinions-cardiac-surgery",
        excerpt:
            "Why submitting diagnostic angiograms and cross-consulting accredited surgical boards minimizes diagnostic risk before travel.",
        category: "Hospital & Doctor Info",
        imageUrl:
            "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
        publishedDate: "Sep 26, 2026",
        readTime: "4 min read",
        author: {
            name: "Patient Advisory Desk",
            role: "Care Coordinator",
        },
        medicalReviewer: {
            name: "Dr. A. Verma",
            credentials: "MCh (CTVS)",
        },
    },
];