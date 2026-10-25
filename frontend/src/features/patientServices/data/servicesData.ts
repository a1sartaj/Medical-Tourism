export interface ServiceStep {
    step: string;
    title: string;
    description: string;
    deliverables: string[];
}

export interface AccommodationOption {
    id: string;
    name: string;
    type: string;
    distanceToHospital: string;
    indicativePrice: string;
    features: string[];
}

export const JOURNEY_STEPS: ServiceStep[] = [
    {
        step: "01",
        title: "Before Arrival & Case Evaluation",
        description:
            "Review of clinical files and imaging, facilitating second opinions and receiving itemized hospital quotation letters before you book international flights.",
        deliverables: [
            "Diagnostic report evaluation with department heads",
            "Official hospital cost and length-of-stay estimates",
            "Medical Visa (FRRO) assistance letter coordination",
        ],
    },
    {
        step: "02",
        title: "Arrival & Hospital Consultation",
        description:
            "Terminal meet-and-greet at Delhi Airport (DEL), transfer to sanitised accommodation, and accompanied admission into the hospital's international lounge.",
        deliverables: [
            "Direct airport transfer with luggage assistance",
            "Dedicated case manager accompanying initial OP registration",
            "In-person clinical evaluations and baseline investigations",
        ],
    },
    {
        step: "03",
        title: "Treatment Scheduling & Inpatient Care",
        description:
            "Clinical admission, surgical procedures, and post-operative recovery managed entirely by the hospital's surgical and intensive care teams.",
        deliverables: [
            "Bed admission in private or deluxe suites",
            "Liaison between attending clinicians and family members",
            "Daily administrative coordination and dietary adjustments",
        ],
    },
    {
        step: "04",
        title: "Discharge Coordination & Safe Recovery",
        description:
            "Review of surgical discharge summary, prescription medication packages, and step-down recovery monitoring in nearby verified apartments.",
        deliverables: [
            "Pharmacy and surgical discharge briefing",
            "Post-operative follow-up appointments and dressing changes",
            "Mobility and fit-to-fly clinical verification",
        ],
    },
    {
        step: "05",
        title: "Return Travel & Continuity of Care",
        description:
            "Airport departure assistance and post-return digital communications connecting your local home physician with the operating hospital surgeon.",
        deliverables: [
            "Fit-to-Fly certificate issuance from the chief surgeon",
            "Transfer to DEL Terminal 3 with wheelchair support if needed",
            "Ongoing teleconsultation and medical report handoffs",
        ],
    },
];

export const VISA_CHECKLIST = [
    {
        title: "Valid International Passport",
        detail: "Must possess at least 6 months validity with minimum 2 blank visa endorsement pages.",
    },
    {
        title: "Official Hospital Visa Invitation Letter",
        detail:
            "Issued on partner hospital letterhead with unique FRRO reference, identifying the patient and accompanying medical attendant.",
    },
    {
        title: "Recent Medical Records",
        detail: "Diagnostic reports, lab summaries, and referring doctor notes validating procedure necessity.",
    },
    {
        title: "Proof of Financial Capability",
        detail: "Recent bank statements demonstrating funds to cover medical estimates and living expenses.",
    },
];

export const ACCOMMODATIONS: AccommodationOption[] = [
    {
        id: "acc-1",
        name: "Svelte Medical Suites & Serviced Residences",
        type: "Serviced Apartment (Kitchenette Included)",
        distanceToHospital: "800m from Max Hospital, Saket",
        indicativePrice: "$45 – $75 / night",
        features: [
            "Wheelchair-accessible corridors and elevators",
            "Private kitchenette for customized dietary cooking",
            "Daily sanitisation and laundry services",
        ],
    },
    {
        id: "acc-2",
        name: "Sheraton New Delhi Hotel",
        type: "5-Star Full Service",
        distanceToHospital: "1.2 km from Max Hospital, Saket",
        indicativePrice: "$90 – $140 / night",
        features: [
            "24/7 concierge and multi-lingual guest desks",
            "24-hour on-call medical room assistance",
            "Dedicated room service with international dietary options",
        ],
    },
    {
        id: "acc-3",
        name: "Saket International Guest House",
        type: "Economy Patient Lodge",
        distanceToHospital: "400m walking distance to hospital gates",
        indicativePrice: "$25 – $40 / night",
        features: [
            "Direct attendant room options with twin beds",
            "High-speed Wi-Fi and direct coordinator support",
            "Close proximity to local pharmacies and grocery stores",
        ],
    },
];

export const PATIENT_SERVICES_FAQS = [
    {
        question: "Does CaresDaddy guarantee the approval of my Indian Medical Visa?",
        answer:
            "No. Visa approvals are granted exclusively by the Ministry of External Affairs and Indian Embassies/Consulates. We provide the mandatory formal hospital invitation letter and verify that your paperwork meets official FRRO guidelines, but the statutory sovereign decision remains with the consular authority.",
    },
    {
        question: "Who makes clinical decisions regarding my treatment and discharge?",
        answer:
            "All surgical techniques, medications, inpatient stays, and discharge dates are determined solely by the treating hospital consultant and chief clinical board. CaresDaddy provides non-clinical administrative, logistics, and translation facilitation.",
    },
    {
        question: "Are language interpreter services free or charged separately?",
        answer:
            "Routine hospital-based interpretation (Arabic, Russian, French) during morning rounds is generally included through partner hospital international desks. Full-day personal escort interpreters for shopping or personal outings can be arranged upon request for an optional fee.",
    },
    {
        question: "How does airport transportation work upon arrival in Delhi?",
        answer:
            "A designated coordinator meets you at the International Arrivals gate of Terminal 3, Indira Gandhi International Airport (DEL) with a patient name placard. You are transported in an air-conditioned vehicle directly to your accommodation or hospital emergency admission desk.",
    },
    {
        question: "Can accommodation be booked close to the hospital before arrival?",
        answer:
            "Yes. We coordinate reservations at verified serviced apartments and hotels located within 500m to 1.5km of partner hospitals in Saket, South Delhi, and Gurugram, ensuring accessible facilities and kitchenette provisions for accompanying families.",
    },
];