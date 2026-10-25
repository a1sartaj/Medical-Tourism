export interface WhyArrangeItem {
    id: string;
    title: string;
    description: string;
    iconName: string;
}

export const WHY_ARRANGE_SERVICES: WhyArrangeItem[] = [
    {
        id: "arrange-1",
        title: "Direct Hospital & Specialist Matching",
        description:
            "We match your specific diagnosis and medical history with accredited tertiary care hospitals and verified senior consultants suited for your procedure.",
        iconName: "Building2",
    },
    {
        id: "arrange-2",
        title: "Transparent Estimate Coordination",
        description:
            "Receive comprehensive, itemized hospital quotations before traveling, detailing surgical inclusions, bed categories, and implant costs with no hidden agency fees.",
        iconName: "FileSpreadsheet",
    },
    {
        id: "arrange-3",
        title: "Medical Visa & Travel Facilitation",
        description:
            "We coordinate official hospital visa invitation letters (FRRO guidance) and assist with flight logistics, airport meet-and-greet, and accessible hotel bookings.",
        iconName: "Plane",
    },
    {
        id: "arrange-4",
        title: "Dedicated Case Manager & Language Support",
        description:
            "A dedicated coordinator in Delhi handles appointment queues, medical record handoffs, and interpreter support to ensure seamless communication with clinicians.",
        iconName: "UserCheck",
    },
    {
        id: "arrange-5",
        title: "Post-Discharge Follow-Up Support",
        description:
            "We coordinate post-operative checkups, digital report transfers to your home physician, and telemedicine consultations once you return home safely.",
        iconName: "HeartHandshake",
    },
    {
        id: "arrange-6",
        title: "Objective, Independent Advocacy",
        description:
            "Our loyalty is to the patient. We do not make independent medical diagnoses; instead, we prioritize your comfort, timeline, and administrative clarity at every step.",
        iconName: "ShieldCheck",
    },
];