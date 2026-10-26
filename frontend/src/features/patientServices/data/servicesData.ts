export interface ServiceJourneyStep {
    step: string;
    title: string;
    description: string;
    deliverables: string[];
}

export interface AccommodationOption {
    id: string;
    name: string;
    type: string;
    distance: string;
    priceRange: string;
    amenities: string[];
}

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export const JOURNEY_STEPS: ServiceJourneyStep[] = [
    {
        step: "01",
        title: "Before Arrival & Case Evaluation",
        description:
            "Digital report collection, doctor matching, receiving official hospital estimates, and issuance of the Medical Visa invitation letter.",
        deliverables: [
            "Review of diagnosis by senior hospital consultants",
            "Itemized cost estimate & procedure duration sheet",
            "Official hospital letter for Visa processing",
        ],
    },
    {
        step: "02",
        title: "Arrival & Hospital Consultation",
        description:
            "Direct airport pickup, check-in at accommodation, and escorted in-person evaluation at the hospital's international desk.",
        deliverables: [
            "Terminal 3 airport pickup in sanitized private vehicle",
            "Assistance with local SIM card and currency exchange",
            "Consultant meeting and baseline diagnostic tests",
        ],
    },
    {
        step: "03",
        title: "Treatment Scheduling & Inpatient Care",
        description:
            "Hospital room admission, surgical intervention, and post-operative monitoring conducted entirely by the hospital clinical team.",
        deliverables: [
            "Admission into private/deluxe inpatient room",
            "Daily coordinator assistance for language & dietary needs",
            "Regular clinical briefings with patient attendants",
        ],
    },
    {
        step: "04",
        title: "Discharge Coordination & Recovery",
        description:
            "Hospital discharge clearance, complete summary report handover, take-home medication guidance, and rest period monitoring.",
        deliverables: [
            "Final itemized billing settlement directly with hospital",
            "Discharge summary and imaging records compilation",
            "Post-operative dressing and checkups coordination",
        ],
    },
    {
        step: "05",
        title: "Return Travel & Follow-Up Communication",
        description:
            "Fit-to-Fly certificate issuance, airport drop-off, and ongoing teleconsultation support after you return home.",
        deliverables: [
            "Doctor-certified Fit-to-Fly clearance",
            "Comfortable return airport transfer",
            "Digital telemedicine reviews with your operating surgeon",
        ],
    },
];

export const VISA_DOCUMENTS = [
    {
        title: "Valid International Passport",
        detail: "Must have at least 6 months validity and minimum 2 blank pages.",
    },
    {
        title: "Official Hospital Visa Invitation Letter",
        detail:
            "Issued by our accredited partner hospital on official letterhead stating procedure, doctor name, and passport numbers.",
    },
    {
        title: "Recent Medical Records",
        detail:
            "Diagnostic test results, scans, and referring doctor notes validating the need for specialized care.",
    },
    {
        title: "Proof of Financial Funds",
        detail:
            "Recent bank statement or sponsorship certificate showing sufficient funds for hospital tariff and local stay.",
    },
];

export const ACCOMMODATION_LIST: AccommodationOption[] = [
    {
        id: "acc-1",
        name: "Svelte Medical Suites & Serviced Residences",
        type: "Serviced Apartment with Kitchenette",
        distance: "800 meters from Max Hospital, Saket",
        priceRange: "$45 – $75 / night",
        amenities: [
            "Private kitchen for cooking customized diets",
            "Wheelchair-friendly elevators and walk-in showers",
            "Daily linen change and housekeeping",
        ],
    },
    {
        id: "acc-2",
        name: "Sheraton New Delhi Hotel",
        type: "5-Star Luxury Full Service",
        distance: "1.2 km from Max Hospital, Saket",
        priceRange: "$95 – $145 / night",
        amenities: [
            "24/7 on-call medical assistance room",
            "Multi-lingual concierge (Arabic, French, English)",
            "Room service with customizable international meals",
        ],
    },
    {
        id: "acc-3",
        name: "Saket International Guest House",
        type: "Budget Patient Attendant Lodge",
        distance: "400 meters walking distance",
        priceRange: "$25 – $40 / night",
        amenities: [
            "Twin beds suitable for patient and attendant",
            "High-speed Wi-Fi and direct coordinator support",
            "Close to pharmacies and 24/7 grocery markets",
        ],
    },
];

export const PATIENT_SERVICES_FAQS: ServiceFAQ[] = [
    {
        question: "Does CaresDaddy guarantee the approval of my Indian Medical Visa?",
        answer:
            "No. We provide the official hospital invitation letter required by embassies and guide you through the document checklist. However, final visa approval rests solely with the Government of India and the respective Indian Embassy or Consulate.",
    },
    {
        question: "Who takes medical decisions during my stay and treatment?",
        answer:
            "All clinical decisions—including diagnosis confirmation, surgical approaches, medication, and discharge readiness—remain exclusively with the licensed medical team at the partner hospital. CaresDaddy facilitates purely administrative, travel, and translation logistics.",
    },
    {
        question: "Are interpreter services free of charge?",
        answer:
            "In-hospital clinical interpretation (Arabic, Russian, French) during morning doctor rounds is provided by the hospital's international patient desk at no extra charge. Full-time personal companion interpreters can be booked separately upon request.",
    },
    {
        question: "How is the airport pickup arranged upon arrival?",
        answer:
            "Once you share your flight itinerary, our team assigns a driver and case manager who will wait at the International Arrival Gate of Terminal 3 (Delhi Airport) with your name placard to take you directly to your accommodation or hospital.",
    },
    {
        question: "Can I receive an estimate before booking flights?",
        answer:
            "Yes. Once you submit your current diagnostic scans and medical reports, we coordinate with the hospital to provide you with an itemized written estimate and estimated length of stay before you make any travel arrangements.",
    },
];