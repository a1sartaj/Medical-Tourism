import {
    CalendarCheck,
    FileText,
    FileBadge2,
    PlaneLanding,
    Hotel,
    Languages,
    Car,
    HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    badge?: string;
}

export const PATIENT_SERVICES: ServiceItem[] = [
    {
        id: "appointment-coordination",
        title: "Medical Appointment Coordination",
        description:
            "Direct scheduling of specialist consultations, diagnostic imaging slots, and operative dates at certified partner hospitals.",
        icon: CalendarCheck,
    },
    {
        id: "report-transfer",
        title: "Medical Report Transfer",
        description:
            "Secure transfer of your historical clinical files, MRIs, and biopsy records directly to treating surgical boards.",
        icon: FileText,
    },
    {
        id: "visa-guidance",
        title: "Medical Visa Guidance",
        description:
            "Assistance in securing official Hospital Visa Invitation Letters (FRRO support) where offered for patients and attendants.",
        icon: FileBadge2,
        badge: "Where Offered",
    },
    {
        id: "airport-pickup",
        title: "Airport Pickup & Transfers",
        description:
            "Curbside greeting and arranged transfer via sanitized vehicle or medical ambulance upon arrival at the destination airport.",
        icon: PlaneLanding,
        badge: "Where Offered",
    },
    {
        id: "accommodation",
        title: "Accommodation Assistance",
        description:
            "Recommendations and coordination for verified serviced apartments and hotels located within walking distance of the hospital.",
        icon: Hotel,
    },
    {
        id: "interpreter-services",
        title: "Language Interpreter Services",
        description:
            "Dedicated bilingual interpreters fluent in Arabic, Russian, French, and other languages during doctor consultations.",
        icon: Languages,
    },
    {
        id: "local-transport",
        title: "Local Transportation",
        description:
            "Coordination for reliable daily travel arrangements between your hotel accommodation and the clinical facility.",
        icon: Car,
    },
    {
        id: "post-treatment",
        title: "Post-Treatment Coordination",
        description:
            "Discharge summary coordination, medication translation, fit-to-fly clearances, and post-return tele-health checkups.",
        icon: HeartHandshake,
    },
];