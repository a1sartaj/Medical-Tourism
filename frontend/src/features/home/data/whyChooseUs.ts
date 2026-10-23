import {
    Building2,
    CalendarCheck,
    Calculator,
    Languages,
    PlaneTakeoff,
    HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ValuePropItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export const WHY_CHOOSE_US: ValuePropItem[] = [
    {
        id: "suitable-hospitals",
        title: "Hospital & Center Guidance",
        description:
            "Assistance identifying accredited medical institutions aligned with your specific diagnosis, budgetary preferences, and clinical needs.",
        icon: Building2,
    },
    {
        id: "consultation-coordination",
        title: "Doctor Consultation Setup",
        description:
            "Direct coordination with verified clinical specialists to review medical histories and schedule comprehensive evaluations.",
        icon: CalendarCheck,
    },
    {
        id: "estimate-coordination",
        title: "Transparent Cost Estimates",
        description:
            "Support gathering itemized hospital price projections, inclusions, and package scopes prior to international departure.",
        icon: Calculator,
    },
    {
        id: "language-assistance",
        title: "Language & Interpreter Support",
        description:
            "Multilingual facilitation and interpreter coordination where available to ensure seamless communication with care teams.",
        icon: Languages,
    },
    {
        id: "travel-accommodation",
        title: "Travel & Stay Arrangements",
        description:
            "Logistical guidance on medical visa documentation, local transit, airport pick-up, and nearby accommodation where offered.",
        icon: PlaneTakeoff,
    },
    {
        id: "end-to-end-support",
        title: "Full-Journey Patient Care",
        description:
            "Dedicated non-clinical case management from initial inquiry through hospital discharge and return travel coordination.",
        icon: HeartHandshake,
    },
];