export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const HOME_FAQS: FAQItem[] = [
    {
        id: "faq-1",
        question: "How do I request a treatment estimate?",
        answer:
            "You can request an estimate by selecting your desired treatment on our platform or submitting an inquiry via our contact form. Provide details about your current health condition and primary medical goals to get started.",
    },
    {
        id: "faq-2",
        question: "Which countries and hospitals do you support?",
        answer:
            "We coordinate with leading internationally accredited (JCI, NABH, ISO) multi-specialty hospitals across premier healthcare destinations, with extensive hospital networks across India, Turkey, the UAE, and Thailand.",
    },
    {
        id: "faq-3",
        question: "How is the treatment cost calculated?",
        answer:
            "Indicative costs are calculated based on standard procedure packages provided directly by accredited hospitals. Final quotes reflect the surgeon's review of diagnostic imaging, hospital room categories, surgical implants, and required length of clinical stay.",
    },
    {
        id: "faq-4",
        question: "Can I share medical reports before travelling?",
        answer:
            "Yes, absolutely. We encourage sharing past medical summaries, MRI/CT scans, biopsy findings, and blood test results securely through our encrypted portal so doctors can pre-evaluate your case before you make travel bookings.",
    },
    {
        id: "faq-5",
        question: "Do you assist with medical visas?",
        answer:
            "Yes, where offered. Once a treatment plan is established with a partner hospital, we coordinate official Medical Visa Invitation Letters (FRRO support) for both the patient and accompanying medical attendants.",
    },
    {
        id: "faq-6",
        question: "Can you arrange accommodation and airport pickup?",
        answer:
            "Yes. We coordinate airport pickup services (via standard vehicles or medical ambulances) and recommend vetted serviced apartments or hotels within close proximity to the treating hospital.",
    },
    {
        id: "faq-7",
        question: "How long does the assessment process take?",
        answer:
            "Once you submit complete and legible clinical reports, doctor reviews and hospital cost projections are typically compiled within 24 to 48 business hours.",
    },
    {
        id: "faq-8",
        question: "Who confirms the treatment plan?",
        answer:
            "All medical evaluations, procedural confirmations, and clinical treatment protocols are determined exclusively by the treating licensed surgeons and medical boards at the partner hospitals.",
    },
];