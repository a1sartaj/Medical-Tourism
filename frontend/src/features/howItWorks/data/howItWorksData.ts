// src/features/howItWorks/data/howItWorksData.ts
import {
    Search,
    FileCheck2,
    GitPullRequestDraft,
    Receipt,
    PlaneTakeoff,
    HeartHandshake,
    type LucideIcon,
} from "lucide-react";

export interface HighLevelStep {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface DetailedProcessStep {
    step: string;
    title: string;
    subtitle: string;
    description: string;
    patientActions: string[];
    caresdaddyRole: string[];
    estimatedTimeline: string;
    icon: LucideIcon;
}

export const HOW_IT_WORKS_OVERVIEW_STEPS: HighLevelStep[] = [
    {
        step: "01",
        title: "Choose Treatment or Submit Inquiry",
        description:
            "Select your procedure or share your initial condition and requirements through our structured inquiry form.",
        icon: Search,
    },
    {
        step: "02",
        title: "Share Medical Records Securely",
        description:
            "Upload existing clinical records, imaging, and lab reports with end-to-end privacy for clinical review.",
        icon: FileCheck2,
    },
    {
        step: "03",
        title: "Hospital & Specialist Coordination",
        description:
            "Our team reviews the documentation and coordinates directly with certified hospitals matching your clinical needs.",
        icon: GitPullRequestDraft,
    },
    {
        step: "04",
        title: "Receive Assessment & Treatment Estimate",
        description:
            "Get itemized treatment plans, doctor opinions, and estimated procedural costs directly confirmed by the provider.",
        icon: Receipt,
    },
    {
        step: "05",
        title: "Appointment & Travel Arrangements",
        description:
            "Upon your confirmation, we assist with hospital scheduling, medical visa invitation letters, and travel logistics.",
        icon: PlaneTakeoff,
    },
    {
        step: "06",
        title: "On-Ground & Follow-Up Support",
        description:
            "Receive patient desk guidance throughout your hospital stay, followed by tele-consult assistance after discharge.",
        icon: HeartHandshake,
    },
];

export const DETAILED_PROCESS_STEPS: DetailedProcessStep[] = [
    {
        step: "01",
        title: "Initial Inquiry & Medical Report Submission",
        subtitle: "Case intake and document collection",
        description:
            "Share your current diagnostic reports, imaging scans, and medical history through our secure portal or directly with our Saket patient support desk.",
        patientActions: [
            "Upload recent MRI, CT, blood work, and biopsy summaries",
            "Specify preferred doctors, hospitals, or budget considerations",
            "List questions regarding procedure options and duration",
        ],
        caresdaddyRole: [
            "Verify that all necessary clinical documents are complete",
            "Coordinate with relevant hospital departments for review",
            "Assign a dedicated international patient case manager",
        ],
        estimatedTimeline: "Day 1",
        icon: Search,
    },
    {
        step: "02",
        title: "Specialist Review & Itemized Hospital Estimate",
        subtitle: "Clinical opinions and quotation comparison",
        description:
            "Partner hospital clinical boards review your reports. We deliver comparative formal treatment opinions alongside itemized cost estimates.",
        patientActions: [
            "Review doctor profiles, hospital accreditations, and estimates",
            "Participate in a preliminary teleconsultation if needed",
            "Confirm preferred hospital and proposed travel window",
        ],
        caresdaddyRole: [
            "Obtain formal treatment estimates on hospital letterhead",
            "Clarify package inclusions, exclusions, and stay lengths",
            "Schedule pre-travel video consultations with the operating surgeon",
        ],
        estimatedTimeline: "Days 2 – 3",
        icon: FileCheck2,
    },
    {
        step: "03",
        title: "Medical Visa & Travel Documentation",
        subtitle: "Embassy invitation letters and logistics",
        description:
            "We secure the official hospital Medical Visa (MED / MED-X) invitation letter required by Indian embassies and e-Visa portals.",
        patientActions: [
            "Submit passport copies of the patient and attendant",
            "Apply for the Indian e-Medical Visa online or at the local embassy",
            "Book flights once visa approvals are confirmed",
        ],
        caresdaddyRole: [
            "Issue official FRRO-referenced hospital invitation letters",
            "Provide step-by-step guidance on consular paperwork",
            "Review flight itineraries for airport arrival coordination",
        ],
        estimatedTimeline: "Days 4 – 10",
        icon: GitPullRequestDraft,
    },
    {
        step: "04",
        title: "Arrival, Transfer & In-Person Hospital Admission",
        subtitle: "Welcome to Delhi and clinical intake",
        description:
            "Personal meet-and-greet at Terminal 3, Indira Gandhi International Airport (DEL), transfer to nearby accommodation, and escorted hospital registration.",
        patientActions: [
            "Meet your coordinator at the airport arrivals gate",
            "Check in to pre-arranged accommodation near the hospital",
            "Attend the first comprehensive clinical consultation and baseline labs",
        ],
        caresdaddyRole: [
            "Provide air-conditioned private vehicle airport pickup",
            "Facilitate local SIM card setup and currency exchange guidance",
            "Accompany you through hospital international registration and OPD queues",
        ],
        estimatedTimeline: "Days 11 – 12",
        icon: PlaneTakeoff,
    },
    {
        step: "05",
        title: "Procedure, Inpatient Care & Recovery",
        subtitle: "Clinical treatment and daily support",
        description:
            "Your medical procedure is performed by senior surgeons in modular operating theatres, followed by dedicated recovery care in private rooms.",
        patientActions: [
            "Undergo scheduled medical procedure or surgery",
            "Follow post-operative mobilization and nursing guidelines",
            "Attendants stay in comfortable private room suites",
        ],
        caresdaddyRole: [
            "Coordinate language interpreters during morning clinical rounds",
            "Assist attendants with dietary preferences, Halal meals, and local needs",
            "Handle hospital administrative and billing coordination",
        ],
        estimatedTimeline: "Procedure Dependent (3 – 10 Days)",
        icon: Receipt,
    },
    {
        step: "06",
        title: "Discharge, Fit-to-Fly & Post-Return Follow-Up",
        subtitle: "Safe homecoming and continuous care",
        description:
            "Receipt of complete medical records, take-home medication briefings, formal Fit-to-Fly certification, and coordinated return airport transfer.",
        patientActions: [
            "Complete final follow-up consultation and dressing changes",
            "Receive certified copies of all operative notes and scans",
            "Travel back home safely and join planned remote check-ins",
        ],
        caresdaddyRole: [
            "Obtain signed Fit-to-Fly certificates for airline clearance",
            "Arrange return airport drop-off with wheelchair assistance if needed",
            "Schedule telemedicine follow-ups connecting your home doctor with the hospital team",
        ],
        estimatedTimeline: "Post-Treatment & Ongoing",
        icon: HeartHandshake,
    },
];

export const HOW_IT_WORKS_FAQS = [
    {
        question: "How long does the entire preparation process take before traveling?",
        answer:
            "Most patients complete preliminary doctor evaluations, hospital quotation reviews, and e-Medical Visa issuance within 7 to 14 days. Urgent cardiac or oncology cases can be expedited within 3 to 5 business days.",
    },
    {
        question: "Do I pay CaresDaddy for my medical treatments?",
        answer:
            "No. All medical procedure payments, hospital admission deposits, and pharmacy bills are settled directly at the partner hospital's international cashier desk at their published tariffs. CaresDaddy charges zero markups.",
    },
    {
        question: "What happens if the treating doctor modifies the treatment plan after arrival?",
        answer:
            "Initial quotations are based on digital scans and medical history. In-person physical examinations and baseline hospital diagnostics may warrant adjustments. Any change is discussed transparently with you before treatment proceeds.",
    },
    {
        question: "Can an attendant travel and stay with me throughout the journey?",
        answer:
            "Yes. Indian Medical Visas allow up to two accompanying family members or attendants on MED-X visas. Partner hospitals provide private deluxe rooms with dedicated attendant beds and meals.",
    },
];