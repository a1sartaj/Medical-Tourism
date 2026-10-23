import { Building2, Stethoscope, Globe2, Clock, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TrustStatItem {
    id: string;
    value: string;
    label: string;
    description: string;
    icon: LucideIcon;
}

export interface AccreditationItem {
    name: string;
    shortCode: string;
    description: string;
}

export const TRUST_STATS: TrustStatItem[] = [
    {
        id: "hospitals",
        value: "150+",
        label: "Partner Hospitals",
        description: "NABH & JCI accredited medical centers",
        icon: Building2,
    },
    {
        id: "specialties",
        value: "40+",
        label: "Specialties Covered",
        description: "From cardiac care to organ transplants",
        icon: Stethoscope,
    },
    {
        id: "countries",
        value: "25+",
        label: "Countries Served",
        description: "International patient referrals assisted",
        icon: Globe2,
    },
    {
        id: "support",
        value: "24/7",
        label: "Patient Assistance",
        description: "Multilingual case coordination desk",
        icon: Clock,
    },
];

export const ACCREDITATIONS: AccreditationItem[] = [
    {
        shortCode: "JCI",
        name: "Joint Commission International",
        description: "Gold standard in global healthcare quality and patient safety",
    },
    {
        shortCode: "NABH",
        name: "National Accreditation Board for Hospitals",
        description: "Highest level of medical standard accreditation in India",
    },
    {
        shortCode: "NABL",
        name: "Medical Testing Laboratories",
        description: "Accredited precision in clinical pathology and diagnostics",
    },
    {
        shortCode: "ISO",
        name: "ISO 9001:2015 Standards",
        description: "Certified healthcare and patient service operational workflows",
    },
];