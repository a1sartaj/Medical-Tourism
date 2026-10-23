import {
    Search,
    FileCheck2,
    GitPullRequestDraft,
    Receipt,
    PlaneTakeoff,
    HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface JourneyStep {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export const HOW_IT_WORKS_STEPS: JourneyStep[] = [
    {
        step: "01",
        title: "Choose Treatment or Submit Inquiry",
        description:
            "Select your needed procedure or share your initial condition and requirements through our structured inquiry form.",
        icon: Search,
    },
    {
        step: "02",
        title: "Share Medical Information Securely",
        description:
            "Upload existing clinical records, imaging, and lab reports with end-to-end privacy for pre-evaluation.",
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