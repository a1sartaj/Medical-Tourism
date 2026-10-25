export interface HospitalDetailDoctor {
    id: string;
    name: string;
    specialty: string;
    qualifications: string;
    experience: string;
    photo: string;
    profileSlug: string;
}

export interface HospitalDetailTreatment {
    name: string;
    slug: string;
    category: string;
    indicativeCost: string;
}

export interface HospitalDetailReview {
    id: string;
    author: string;
    country: string;
    flag: string;
    rating: number;
    date: string;
    treatmentName: string;
    comment: string;
}

export interface HospitalDetail {
    slug: string;
    name: string;
    city: string;
    country: string;
    mainImage: string;
    shortOverview: string;
    accreditations: string[];
    about: {
        overview: string;
        establishedYear: number;
        hospitalType: string;
        organization: string;
        bedCount: number;
        icuBeds: number;
        operatingTheatres: number;
        languagesSupported: string[];
    };
    specialties: {
        category: string;
        treatments: HospitalDetailTreatment[];
    }[];
    doctors: HospitalDetailDoctor[];
    facilities: {
        category: string;
        items: string[];
    }[];
    credentials: {
        body: string;
        status: string;
        description: string;
    }[];
    location: {
        address: string;
        landmark: string;
        airportDistance: string;
        metroDistance: string;
        phone: string;
        email: string;
        travelGuidance: string;
    };
    internationalSupport: {
        hospitalProvided: string[];
        caresdaddyCoordinated: string[];
    };
    reviews: HospitalDetailReview[];
    faqs: {
        question: string;
        answer: string;
    }[];
    relatedHospitals: {
        slug: string;
        name: string;
        city: string;
        hospitalType: string;
        image: string;
    }[];
}

export const HOSPITALS_DETAILS: Record<string, HospitalDetail> = {
    "max-super-speciality-hospital-saket": {
        slug: "max-super-speciality-hospital-saket",
        name: "Max Super Speciality Hospital, Saket",
        city: "New Delhi (Saket)",
        country: "India",
        mainImage:
            "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
        shortOverview:
            "A premier 530+ bed quaternary care healthcare institution in South Delhi, recognized for comprehensive oncology, advanced cardiothoracic surgery, robotic joint replacement, and living donor organ transplants.",
        accreditations: [
            "JCI Accredited (Joint Commission International)",
            "NABH Accredited (National Accreditation Board for Hospitals)",
            "NABL Certified Pathology & Diagnostic Laboratories",
        ],
        about: {
            overview:
                "Max Super Speciality Hospital, Saket is the flagship facility of Max Healthcare Institute Limited. Spread across two interconnected blocks (East Block and West Block), the hospital houses dedicated bone marrow transplant suites, specialized pediatric cardiology units, neuro-interventional cath labs, and next-generation surgical robotics suites.",
            establishedYear: 2006,
            hospitalType: "Quaternary Care Multi-Speciality",
            organization: "Max Healthcare Institute Limited",
            bedCount: 530,
            icuBeds: 145,
            operatingTheatres: 20,
            languagesSupported: [
                "English",
                "Hindi",
                "Arabic",
                "Russian",
                "French",
                "Uzbek",
            ],
        },
        specialties: [
            {
                category: "Cardiology & Cardiac Surgery",
                treatments: [
                    {
                        name: "Coronary Artery Bypass Grafting (CABG)",
                        slug: "coronary-artery-bypass-grafting-cabg",
                        category: "Cardiology",
                        indicativeCost: "$4,500 – $6,500",
                    },
                    {
                        name: "Transcatheter Aortic Valve Replacement (TAVR)",
                        slug: "transcatheter-aortic-valve-replacement-tavr",
                        category: "Cardiology",
                        indicativeCost: "$16,000 – $22,000",
                    },
                ],
            },
            {
                category: "Orthopedics & Joint Reconstruction",
                treatments: [
                    {
                        name: "Robotic Total Knee Replacement",
                        slug: "robotic-total-knee-replacement",
                        category: "Orthopedics",
                        indicativeCost: "$4,200 – $5,800",
                    },
                ],
            },
            {
                category: "Organ Transplantation",
                treatments: [
                    {
                        name: "Living Donor Renal (Kidney) Transplant",
                        slug: "living-donor-kidney-transplant",
                        category: "Transplant",
                        indicativeCost: "$12,500 – $16,000",
                    },
                ],
            },
            {
                category: "Neurosciences & Spine Surgery",
                treatments: [
                    {
                        name: "Minimally Invasive Spine Fusion (TLIF)",
                        slug: "minimally-invasive-spine-fusion",
                        category: "Neurology",
                        indicativeCost: "$5,200 – $7,000",
                    },
                ],
            },
        ],
        doctors: [
            {
                id: "doc-1",
                name: "Dr. B. K. Sharma",
                specialty: "Cardiothoracic & Vascular Surgery",
                qualifications: "MBBS, MS, MCh (CTVS), FIACS",
                experience: "26+ Years Experience",
                photo:
                    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
                profileSlug: "dr-b-k-sharma",
            },
            {
                id: "doc-3",
                name: "Dr. Subhash Chandra",
                specialty: "Interventional Cardiology",
                qualifications: "MBBS, MD, DM, FACC",
                experience: "28+ Years Experience",
                photo:
                    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
                profileSlug: "dr-subhash-chandra",
            },
            {
                id: "doc-4",
                name: "Dr. H. S. Chhabra",
                specialty: "Spine Surgery & Orthopedics",
                qualifications: "MBBS, MS (Ortho), Spine Fellowship",
                experience: "30+ Years Experience",
                photo:
                    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
                profileSlug: "dr-h-s-chhabra",
            },
        ],
        facilities: [
            {
                category: "Critical Care & Inpatient Units",
                items: [
                    "145 Specialized Critical Care Beds (Coronary, Surgical, Neuro & Pediatric ICUs)",
                    "HEPA-filtered positive pressure isolation recovery cubicles",
                    "Continuous bedside hemodynamic and arterial blood gas telemetry",
                ],
            },
            {
                category: "Surgical Suites & Technology",
                items: [
                    "20 Modular Operating Theatres with laminar airflow design",
                    "Da Vinci Xi 4th Generation Multi-Quadrant Surgical Robot",
                    "Biplane Neuro-Interventional Cath Lab Suite",
                    "BrainLAB Intraoperative Navigation System",
                ],
            },
            {
                category: "Advanced Diagnostics",
                items: [
                    "3.0 Tesla Silent MRI & Dual Source 128-Slice Flash CT Scanner",
                    "TrueBeam STx Linear Accelerator with Radiosurgery (SRS/SRT)",
                    "NABL Accredited 24/7 Digital Pathology and Molecular Testing Lab",
                ],
            },
            {
                category: "Patient Comfort & Accessibility",
                items: [
                    "Dedicated International Patient Lounge with complimentary Wi-Fi and private registration",
                    "Multi-lingual patient coordinators and sworn translators",
                    "Wheelchair-accessible ramps, tactile floor paths, and specialized accessible rest areas",
                    "In-house multi-cuisine food services with Halal-certified meal options",
                ],
            },
        ],
        credentials: [
            {
                body: "Joint Commission International (JCI, USA)",
                status: "Accredited Hospital",
                description:
                    "Certified for rigorous compliance with international healthcare safety, infection containment protocols, and medication management standards.",
            },
            {
                body: "National Accreditation Board for Hospitals (NABH, India)",
                status: "Certified Tertiary Institution",
                description:
                    "Recognized by the Quality Council of India for standardized clinical patient delivery and hospital care framework.",
            },
            {
                body: "Atomic Energy Regulatory Board (AERB)",
                status: "Authorized Radiation Oncology Facility",
                description:
                    "Licensed operating facility for linear accelerators, brachytherapy suites, and nuclear medicine scanners.",
            },
        ],
        location: {
            address: "1, 2, Press Enclave Marg, Saket District Centre, Saket, New Delhi, Delhi 110017",
            landmark: "Adjacent to Saket District Centre / Select CityWalk",
            airportDistance: "14 km from Indira Gandhi International Airport (DEL) (~35 mins drive)",
            metroDistance: "800 meters from Malviya Nagar Metro Station (Yellow Line)",
            phone: "+91 9818286609",
            email: "support@caresdaddy.com",
            travelGuidance:
                "Easily accessible via Outer Ring Road or Mehrauli-Badarpur Road. International arrival pickups can be arranged directly from Terminal 3 at DEL Airport to the hospital or nearby pre-arranged accommodation in Saket.",
        },
        internationalSupport: {
            hospitalProvided: [
                "Official Medical Visa Invitation Letter on hospital letterhead for embassy processing",
                "Dedicated hospital international admissions desk with private billing",
                "Clinical discharge summaries and diagnostic report compilation in English",
                "Hospital-based language interpreters during physician consultations",
                "FRRO (Foreigners Regional Registration Office) clinical documentation support",
            ],
            caresdaddyCoordinated: [
                "Airport meet-and-greet with dedicated wheelchair-accessible private vehicle transfer",
                "Sanitized hotel or serviced apartment reservations within 2 km of the hospital",
                "Local Indian prepaid SIM card and mobile communication setup upon arrival",
                "Dedicated case manager accompanying patient through initial registration queues",
                "Currency exchange guidance and post-discharge telemedicine follow-ups",
            ],
        },
        reviews: [
            {
                id: "rev-1",
                author: "Tariq Al-Harbi",
                country: "Saudi Arabia",
                flag: "🇸🇦",
                rating: 5,
                date: "September 2026",
                treatmentName: "Orthopedic Robotic Knee Care",
                comment:
                    "The facilities at Max Saket are truly modern. The international desk arranged our check-in seamlessly, and Dr. Chhabra explained the complete procedure beforehand. Very clean environment.",
            },
            {
                id: "rev-2",
                author: "Elena Rostova",
                country: "Uzbekistan",
                flag: "🇺🇿",
                rating: 5,
                date: "August 2026",
                treatmentName: "Cardiology Evaluation & CABG",
                comment:
                    "Russian interpreters were present during every major morning round. The nursing care in the cardiac ICU was attentive and comforting for my father.",
            },
        ],
        faqs: [
            {
                question: "How do I secure an official Medical Visa Invitation Letter from Max Saket?",
                answer:
                    "Once you submit your diagnostic reports and passport copies, we coordinate with the hospital international desk. The treating consultant reviews your case and issues a formal letter within 24 to 48 hours for submission at your local Indian Embassy or VFS center.",
            },
            {
                question: "Are payment modes like international credit cards or bank transfers accepted?",
                answer:
                    "Yes. Max Hospital Saket accepts international credit/debit cards (Visa, MasterCard, Amex), wire transfers (SWIFT), and cash deposits up to statutory currency customs limits with formal declaration forms.",
            },
            {
                question: "Can an attendant stay in the patient room during recovery?",
                answer:
                    "For private deluxe and single-occupancy rooms, one patient attendant is permitted to stay overnight with a sofa-bed and provided meals. In ICU cubicles, attendants wait in the dedicated lounge due to sterility protocols.",
            },
            {
                question: "Does the hospital have Halal-certified food options?",
                answer:
                    "Yes, the international catering wing provides freshly prepared Halal-certified meals and customized dietary options according to clinical dietician instructions.",
            },
        ],
        relatedHospitals: [
            {
                slug: "fortis-escorts-heart-institute",
                name: "Fortis Escorts Heart Institute",
                city: "New Delhi (Okhla)",
                hospitalType: "Super Speciality",
                image:
                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
            },
            {
                slug: "medanta-the-medicity-gurugram",
                name: "Medanta - The Medicity",
                city: "Gurugram (NCR)",
                hospitalType: "Quaternary Care",
                image:
                    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
            },
            {
                slug: "indraprastha-apollo-hospital-delhi",
                name: "Indraprastha Apollo Hospital",
                city: "New Delhi (Sarita Vihar)",
                hospitalType: "Multi-Speciality",
                image:
                    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80",
            },
        ],
    },
};