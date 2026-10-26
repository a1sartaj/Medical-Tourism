import type { BlogPostItem } from "../types/blog.types";

export const LATEST_BLOGS: BlogPostItem[] = [
    {
        id: "blog-1",
        title: "Complete Guide to Medical Visa (FRRO) Procedures for India",
        slug: "medical-visa-guide-india",
        excerpt:
            "A step-by-step checklist of documents, hospital invitation letters, and embassy formalities required for international patients and attendants.",
        category: "Medical Travel Guides",
        imageUrl:
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        imageCaption: "International arrivals facilitation at Indira Gandhi International Airport (DEL) Terminal 3.",
        publishedDate: "Oct 12, 2026",
        readTime: "5 min read",
        author: {
            name: "International Desk Team",
            role: "Case Management Specialist",
            bio: "Our Saket-based international case coordinators oversee patient intake, embassy paperwork, and arrival logistics for international visitors.",
            avatar: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=200&q=80",
        },
        medicalReviewer: {
            name: "Dr. R. K. Sharma",
            credentials: "MBBS, MHA",
            designation: "Director of Medical Administration & Patient Safety",
            councilRegistration: "DMC-18294",
        },
        relatedSlugs: ["robotic-knee-replacement-recovery-cost", "second-opinions-cardiac-surgery"],
        content: {
            type: "doc",
            content: [
                {
                    type: "heading",
                    attrs: { level: 2, id: "sec-visa-types" },
                    content: [{ type: "text", text: "1. Understanding Indian Medical Visas (MED & MED-X)" }],
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "Foreign nationals entering India specifically for tertiary medical treatments require an Indian Medical Visa (MED category). This visa is distinct from regular tourist visas and grants access to accredited hospital admission desks, multi-currency clinical accounts, and priority hospital clearance.",
                        },
                    ],
                },
                {
                    type: "blockquote",
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: "Tourist visas (e-Tourist) are strictly restricted from surgical hospital admissions in India. Always ensure you enter under the MED category with an authorized hospital invitation letter.",
                                    marks: [{ type: "bold" }],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "heading",
                    attrs: { level: 2, id: "sec-documents" },
                    content: [{ type: "text", text: "2. The Mandatory Document Checklist" }],
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "Before initiating your online application on the Indian government e-Visa portal, ensure all necessary documents are prepared in clean PDF format:",
                        },
                    ],
                },
                {
                    type: "bulletList",
                    content: [
                        {
                            type: "listItem",
                            content: [
                                {
                                    type: "paragraph",
                                    content: [
                                        { type: "text", text: "Valid Passport: ", marks: [{ type: "bold" }] },
                                        { type: "text", text: "Minimum 6 months validity with at least 2 blank pages." },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "listItem",
                            content: [
                                {
                                    type: "paragraph",
                                    content: [
                                        { type: "text", text: "Hospital Invitation Letter: ", marks: [{ type: "bold" }] },
                                        { type: "text", text: "Issued on official partner hospital letterhead with doctor's registration number." },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "listItem",
                            content: [
                                {
                                    type: "paragraph",
                                    content: [
                                        { type: "text", text: "Medical Records: ", marks: [{ type: "bold" }] },
                                        { type: "text", text: "Recent diagnostic scans (MRI, CT, biopsy, blood panels)." },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "listItem",
                            content: [
                                {
                                    type: "paragraph",
                                    content: [
                                        { type: "text", text: "Attendant Proof: ", marks: [{ type: "bold" }] },
                                        { type: "text", text: "Passport and relationship documents for accompanying attendants (MED-X)." },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    type: "heading",
                    attrs: { level: 2, id: "sec-extensions" },
                    content: [{ type: "text", text: "3. e-FRRO Digital Extensions in Delhi NCR" }],
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "If post-operative recovery or physical rehabilitation takes longer than initially expected, extensions are processed online through the e-FRRO portal without needing physical visits to government offices.",
                        },
                    ],
                },
            ],
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
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
        imageCaption: "Mako robotic surgical arm and real-time intraoperative joint alignment monitor.",
        publishedDate: "Oct 05, 2026",
        readTime: "7 min read",
        author: {
            name: "Clinical Content Team",
            role: "Medical Writer",
            bio: "Our orthopedic content writers synthesize surgical case studies and clinical board outcomes into accessible guides for prospective patients.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        },
        medicalReviewer: {
            name: "Dr. S. Mukherjee",
            credentials: "MS (Ortho), Fellowship J&J",
            designation: "Senior Consultant Joint Replacement & Arthroscopy",
            councilRegistration: "DMC-24109",
        },
        relatedSlugs: ["medical-visa-guide-india", "second-opinions-cardiac-surgery"],
        content: {
            type: "doc",
            content: [
                {
                    type: "heading",
                    attrs: { level: 2, id: "sec-robotic-precision" },
                    content: [{ type: "text", text: "1. Robotic Precision vs Conventional Surgery" }],
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "Robotic-assisted knee replacement enables sub-millimeter surgical accuracy. The surgeon maps bone cuts using pre-operative 3D CT reconstruction, preserving critical ligaments and healthy bone stock.",
                        },
                    ],
                },
                {
                    type: "heading",
                    attrs: { level: 2, id: "sec-recovery-milestone" },
                    content: [{ type: "text", text: "2. Expected Stay & Recovery Milestones" }],
                },
                {
                    type: "orderedList",
                    content: [
                        {
                            type: "listItem",
                            content: [
                                {
                                    type: "paragraph",
                                    content: [{ type: "text", text: "Day 1-2: Admission, baseline cardiac checkup, and surgery." }],
                                },
                            ],
                        },
                        {
                            type: "listItem",
                            content: [
                                {
                                    type: "paragraph",
                                    content: [{ type: "text", text: "Day 3-4: Supervised inpatient physiotherapy and discharge." }],
                                },
                            ],
                        },
                        {
                            type: "listItem",
                            content: [
                                {
                                    type: "paragraph",
                                    content: [{ type: "text", text: "Day 5-14: Stay in serviced apartments in Saket with outpatient recovery checkups." }],
                                },
                            ],
                        },
                    ],
                },
            ],
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
            "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80",
        imageCaption: "Coronary angiography review by multi-disciplinary heart team in Saket, Delhi.",
        publishedDate: "Sep 26, 2026",
        readTime: "4 min read",
        author: {
            name: "Patient Advisory Desk",
            role: "Care Coordinator",
            bio: "Coordinates remote medical record evaluations and pre-travel teleconsultations across cardiology networks.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        },
        medicalReviewer: {
            name: "Dr. A. Verma",
            credentials: "MCh (CTVS)",
            designation: "Principal Director & Chief Cardiothoracic Surgeon",
            councilRegistration: "DMC-24892",
        },
        relatedSlugs: ["medical-visa-guide-india", "robotic-knee-replacement-recovery-cost"],
        content: {
            type: "doc",
            content: [
                {
                    type: "heading",
                    attrs: { level: 2, id: "sec-cardiac-risk" },
                    content: [{ type: "text", text: "1. Minimizing Risk in High-Acuity Cardiac Cases" }],
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "Before undergoing open-heart bypass surgery or heart valve replacements, seeking an independent clinical second opinion verifies whether surgical intervention or advanced percutaneous stenting is most appropriate.",
                        },
                    ],
                },
                {
                    type: "heading",
                    attrs: { level: 2, id: "sec-angiogram-protocol" },
                    content: [{ type: "text", text: "2. Digital Angiogram Submission Protocol" }],
                },
                {
                    type: "paragraph",
                    content: [
                        {
                            type: "text",
                            text: "Share raw CD/DICOM angiogram files with our Saket desk. Hospital clinical boards analyze the vessel anatomy and deliver formal written opinions within 48 hours.",
                        },
                    ],
                },
            ],
        },
    },
];